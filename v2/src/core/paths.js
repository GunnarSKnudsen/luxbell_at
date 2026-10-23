/**
 * Mount-point awareness.
 *
 * The whole site is written relative to a single `<base href>` in index.html.
 * That tag is `/` on disk (the hand-off default) and is rewritten to `/v2/` by
 * the preview container's nginx `sub_filter`. Reading it back here means the
 * exact same files work at the web root, under `/v2/`, or in any other
 * subfolder — no build step, no configuration, nothing to remember.
 */

/** Absolute path of the app root, always with a trailing slash (`/` or `/v2/`). */
export const BASE = new URL('.', document.baseURI).pathname;

/**
 * Build an in-app URL from a base-relative path.
 *   url('')               -> '/v2/'
 *   url('en/kontakt')     -> '/v2/en/kontakt'
 */
export function url(path = '') {
  return BASE + String(path).replace(/^\/+/, '');
}

/**
 * Build a URL to a file in `assets/`.
 *   asset('images/luxbell_logo.png') -> '/v2/assets/images/luxbell_logo.png'
 */
export function asset(path) {
  return url('assets/' + String(path).replace(/^\/+/, ''));
}

/** Shorthand for image assets, which are by far the most common. */
export function image(file) {
  return asset('images/' + file);
}

/**
 * Strip the mount point off a browser pathname, yielding the in-app route path.
 * Returns null when the pathname is outside the app (so the router can ignore it).
 *   toRoutePath('/v2/en/kontakt') -> 'en/kontakt'
 *   toRoutePath('/v2/')           -> ''
 */
export function toRoutePath(pathname) {
  if (!pathname.startsWith(BASE)) return null;
  return pathname.slice(BASE.length).replace(/^\/+|\/+$/g, '');
}

/** True when a URL points inside this app and can be handled by the router. */
export function isInternal(href) {
  try {
    const target = new URL(href, document.baseURI);
    return target.origin === window.location.origin && target.pathname.startsWith(BASE);
  } catch {
    return false;
  }
}
