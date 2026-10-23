/**
 * Document head management.
 *
 * Keeps <title>, the meta description, Open Graph tags, the canonical URL and
 * the hreflang alternates in sync with the active route, so that every page
 * has a correct, shareable identity even though the site is rendered client
 * side.
 */

import { LANGS, hrefFor } from './i18n.js';
import { image } from './paths.js';
import { SOCIAL_IMAGE } from '../content/site.js';

/**
 * @param {object} meta
 * @param {string} meta.title        Page title, without the site-name suffix.
 * @param {string} meta.description
 * @param {string} [meta.image]      Image file name inside assets/images/.
 * @param {string} meta.routeId
 * @param {string} meta.siteName
 */
export function updateHead({ title, description, image: imageFile, routeId, siteName }) {
  const fullTitle = title && title !== siteName ? `${title} – ${siteName}` : siteName;

  document.title = fullTitle;
  setMeta('name', 'description', description);

  setMeta('property', 'og:title', fullTitle);
  setMeta('property', 'og:description', description);
  setMeta('property', 'og:site_name', siteName);
  setMeta('property', 'og:url', absolute(window.location.pathname));
  setMeta('property', 'og:image', absolute(image(imageFile || SOCIAL_IMAGE)));

  setLink('canonical', null, absolute(window.location.pathname));
  for (const lang of LANGS) {
    setLink('alternate', lang, absolute(hrefFor(routeId, lang)));
  }
}

/* -------------------------------------------------------------------------- */

function absolute(path) {
  return new URL(path, window.location.origin).href;
}

function setMeta(keyAttr, keyValue, content) {
  if (!content) return;
  let el = document.head.querySelector(`meta[${keyAttr}="${keyValue}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(keyAttr, keyValue);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setLink(rel, hreflang, href) {
  const selector = hreflang
    ? `link[rel="alternate"][hreflang="${hreflang}"]`
    : `link[rel="${rel}"]`;
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    if (hreflang) el.setAttribute('hreflang', hreflang);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}
