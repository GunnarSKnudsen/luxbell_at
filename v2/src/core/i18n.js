/**
 * Language handling.
 *
 * The active language is derived from the URL (`/kontakt` = German,
 * `/en/kontakt` = English), never from storage. That makes every link
 * shareable and each language independently indexable. `localStorage` holds
 * only a *preference*, which is used once, to redirect a returning English
 * visitor who lands on the bare root.
 */

import de from '../content/de.js';
import en from '../content/en.js';
import { routeById } from '../content/site.js';
import { url } from './paths.js';

export const LANGS = ['de', 'en'];
export const DEFAULT_LANG = 'de';

const DICTIONARIES = { de, en };
const STORAGE_KEY = 'luxbell.lang';

let current = DEFAULT_LANG;

/** The dictionary for the active language. */
export function t() {
  return DICTIONARIES[current] ?? DICTIONARIES[DEFAULT_LANG];
}

/** The dictionary for a specific language. */
export function dict(lang) {
  return DICTIONARIES[lang] ?? DICTIONARIES[DEFAULT_LANG];
}

export function getLang() {
  return current;
}

export function isLang(value) {
  return LANGS.includes(value);
}

/** Called by the router on every navigation. */
export function setLang(lang) {
  current = isLang(lang) ? lang : DEFAULT_LANG;
  document.documentElement.lang = current;
  return current;
}

/**
 * Split an in-app route path into its language prefix and the remaining slug.
 *   'en/kontakt' -> { lang: 'en', slug: 'kontakt' }
 *   'kontakt'    -> { lang: 'de', slug: 'kontakt' }
 *   ''           -> { lang: 'de', slug: '' }
 */
export function splitPath(path) {
  const segments = String(path).split('/').filter(Boolean);
  if (segments.length && isLang(segments[0])) {
    const lang = segments.shift();
    // The default language is never prefixed, so `/de/...` is treated as a
    // German URL but the router will canonicalise it back to the bare form.
    return { lang, slug: segments.join('/'), prefixed: true };
  }
  return { lang: DEFAULT_LANG, slug: segments.join('/'), prefixed: false };
}

/**
 * Build the href for a route id in a given language.
 *   hrefFor('kontakt', 'en') -> '/v2/en/kontakt'
 *   hrefFor('home', 'de')    -> '/v2/'
 */
export function hrefFor(routeId, lang = current) {
  const route = routeById(routeId);
  if (!route) return url('');
  const prefix = lang === DEFAULT_LANG ? '' : `${lang}/`;
  return url(prefix + route.slug);
}

/** The language the DE/EN toggle should switch to. */
export function otherLang(lang = current) {
  return lang === 'de' ? 'en' : 'de';
}

/* --- Preference (root-visit convenience only) ----------------------------- */

export function readPreferredLang() {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return isLang(stored) ? stored : null;
  } catch {
    return null; // Private mode / storage disabled — not an error worth surfacing.
  }
}

export function writePreferredLang(lang) {
  if (!isLang(lang)) return;
  try {
    window.localStorage.setItem(STORAGE_KEY, lang);
  } catch {
    /* ignore */
  }
}
