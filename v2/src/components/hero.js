/**
 * Page hero — the full-bleed banner with the page title laid over it.
 *
 * The hero image is the page's largest asset and is always above the fold, so
 * it is loaded eagerly with a high fetch priority while every other image on
 * the site is lazy.
 */

import { h } from '../core/dom.js';
import { image } from '../core/paths.js';
import { buttonRow } from './button.js';

/**
 * @param {object} hero
 * @param {string} hero.image     File name inside assets/images/.
 * @param {string} [hero.kicker]
 * @param {string} hero.headline
 * @param {string} [hero.lead]
 * @param {string} [hero.size]    'large' for the home page hero.
 * @param {Array}  [hero.actions]
 * @param {object} [context]      { routeId } — lets an action target an anchor
 *                                on this same page.
 */
export function heroBanner(hero, context) {
  return h(
    'section',
    { class: ['hero', hero.size === 'large' ? 'hero--large' : ''] },
    h('img', {
      class: 'hero__image',
      src: image(hero.image),
      alt: '',
      fetchpriority: 'high',
      decoding: 'async',
    }),
    h('div', { class: 'hero__scrim' }),
    h(
      'div',
      { class: 'hero__body container' },
      hero.kicker ? h('span', { class: 'kicker kicker--on-dark', text: hero.kicker }) : null,
      h('h1', { class: 'hero__title', text: hero.headline }),
      hero.lead ? h('p', { class: 'hero__lead', text: hero.lead }) : null,
      buttonRow(hero.actions, 'hero__actions', context),
    ),
  );
}

/**
 * Heading block for pages that deliberately have no banner (the imprint).
 * Still renders the page's only <h1>, which the router moves focus to.
 */
export function pageHeader({ title, kicker, lead }) {
  return h(
    'section',
    { class: 'page-header' },
    h(
      'div',
      { class: 'container container--narrow' },
      kicker ? h('span', { class: 'kicker', text: kicker }) : null,
      h('h1', { class: 'section-title', text: title }),
      lead ? h('p', { class: 'section__intro', text: lead }) : null,
    ),
  );
}
