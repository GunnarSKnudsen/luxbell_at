/**
 * History-API router.
 *
 * Owns URL <-> view resolution, click interception, focus and scroll
 * management. Page modules never touch `location` directly; they receive a
 * resolved context and return a DOM node.
 */

import { replace } from './dom.js';
import { updateHead } from './head.js';
import {
  DEFAULT_LANG,
  hrefFor,
  readPreferredLang,
  setLang,
  splitPath,
  t,
  writePreferredLang,
} from './i18n.js';
import { BASE, isInternal, toRoutePath, url } from './paths.js';
import { routeBySlug } from '../content/site.js';

/** Incremented on every navigation; guards against a slow page resolving late. */
let navigationToken = 0;

/** @type {{ pages: object, outlet: HTMLElement, onNavigate: Function }} */
let config;

export function startRouter(options) {
  config = options;

  document.addEventListener('click', onDocumentClick);
  window.addEventListener('popstate', () => render({ restoreScroll: true }));

  redirectRootToPreferredLang();
  return render({ restoreScroll: true });
}

/** Programmatic navigation. Used by the language toggle and page links. */
export function navigate(href, { replaceEntry = false } = {}) {
  const target = new URL(href, document.baseURI);
  const samePage = target.pathname === window.location.pathname;

  if (replaceEntry || samePage) {
    window.history.replaceState({}, '', target.href);
  } else {
    window.history.pushState({}, '', target.href);
  }
  return render({ restoreScroll: false });
}

/** Current route context — used by the header to mark the active item. */
export function currentContext() {
  return resolve(window.location.pathname);
}

/* -------------------------------------------------------------------------- */

function resolve(pathname) {
  const routePath = toRoutePath(pathname);
  if (routePath === null) return null;

  const { lang, slug, prefixed } = splitPath(routePath);
  const route = routeBySlug(slug);

  return { lang, slug, route, prefixed, canonical: !(prefixed && lang === DEFAULT_LANG) };
}

async function render({ restoreScroll }) {
  const token = ++navigationToken;
  const context = resolve(window.location.pathname);

  if (!context) return; // Outside the app mount point — let the browser handle it.

  // `/de/kontakt` is valid input but not a canonical URL; rewrite it silently.
  // An unknown slug keeps its path so the 404 is reported at the right URL.
  if (!context.canonical) {
    const canonicalHref = context.route
      ? hrefFor(context.route.id, DEFAULT_LANG)
      : url(context.slug);
    window.history.replaceState({}, '', canonicalHref);
    return render({ restoreScroll });
  }

  setLang(context.lang);
  writePreferredLang(context.lang);

  const dictionary = t();
  const view = context.route
    ? config.pages[context.route.page]
    : config.pages.notFound;

  let node;
  try {
    node = await view({
      route: context.route,
      lang: context.lang,
      t: dictionary,
    });
  } catch (error) {
    console.error('[router] failed to render route', context.slug, error);
    node = await config.pages.error({ lang: context.lang, t: dictionary, error });
  }

  // A newer navigation started while we were awaiting — discard this result.
  if (token !== navigationToken) return;

  replace(config.outlet, node);

  const page = context.route ? dictionary.pages[context.route.id] : null;
  updateHead({
    title: page?.metaTitle ?? page?.title ?? dictionary.notFound.title,
    description: page?.description ?? dictionary.siteDescription,
    image: page?.hero?.image,
    routeId: context.route?.id ?? 'home',
    siteName: dictionary.siteName,
  });

  config.onNavigate?.({ routeId: context.route?.id ?? null, lang: context.lang });

  if (!restoreScroll) window.scrollTo(0, 0);
  focusMain();
}

/** Move focus to the page heading so keyboard and screen-reader users land in the new content. */
function focusMain() {
  const heading = config.outlet.querySelector('h1');
  const target = heading ?? config.outlet;
  if (!heading) target.setAttribute('tabindex', '-1');
  target.focus({ preventScroll: true });
}

function onDocumentClick(event) {
  if (event.defaultPrevented || event.button !== 0) return;
  if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

  const link = event.target.closest('a[href]');
  if (!link) return;
  if (link.target && link.target !== '_self') return;
  if (link.hasAttribute('download') || link.dataset.external !== undefined) return;

  const href = link.getAttribute('href');
  if (!href || href.startsWith('mailto:') || href.startsWith('tel:')) return;

  // In-page anchors (the skip link) must not go through the router.
  if (link.dataset.skipLink !== undefined) {
    event.preventDefault();
    const main = document.getElementById('main');
    main?.focus({ preventScroll: false });
    return;
  }

  if (!isInternal(link.href)) return;

  const target = new URL(link.href);

  // An anchor on the page we are already on: let the browser scroll to it
  // rather than re-rendering the page and losing the jump.
  if (target.hash && target.pathname === window.location.pathname) return;

  // Let the browser fetch real files (PDFs, images) that live under the mount point.
  if (/\.[a-z0-9]{2,4}$/i.test(target.pathname.slice(BASE.length))) return;

  event.preventDefault();
  navigate(link.href);
}

/**
 * A returning English visitor who opens the bare root is sent to `/en/` once.
 * Any explicit URL (including `/`) reached later is honoured as-is.
 */
function redirectRootToPreferredLang() {
  if (toRoutePath(window.location.pathname) !== '') return;
  const preferred = readPreferredLang();
  if (!preferred || preferred === DEFAULT_LANG) return;
  window.history.replaceState({}, '', url(`${preferred}/`));
}
