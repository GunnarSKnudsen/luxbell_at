/**
 * Buttons and button-shaped links.
 *
 * Content files describe an action declaratively:
 *   { label: 'Kontakt', route: 'kontakt', variant: 'primary' }
 *   { label: 'Flyer',   href: 'assets/docs/x.pdf', external: true }
 * and this module turns it into the right element.
 */

import { h } from '../core/dom.js';
import { hrefFor } from '../core/i18n.js';
import { icon } from './icon.js';

const VARIANTS = ['primary', 'secondary', 'ghost', 'quiet'];

/**
 * @param {object} action
 * @param {string} action.label
 * @param {string} [action.route]     Route id — resolved for the active language.
 * @param {string} [action.anchor]    Id of a section on the current page.
 * @param {string} [action.href]      Raw href; wins over `route` and `anchor`.
 * @param {string} [action.variant]   primary | secondary | ghost | quiet
 * @param {boolean} [action.external] Opens in a new tab.
 * @param {string} [action.icon]      Icon name appended after the label.
 * @param {object} [context]
 * @param {string} [context.routeId]  Page the button sits on, for `anchor`.
 */
export function buttonLink(action, context = {}) {
  const variant = VARIANTS.includes(action.variant) ? action.variant : 'primary';
  const href =
    action.href ??
    (action.anchor
      ? `${hrefFor(action.route ?? context.routeId)}#${action.anchor}`
      : hrefFor(action.route));

  return h(
    'a',
    {
      class: ['btn', `btn--${variant}`],
      href,
      ...(action.external
        ? { target: '_blank', rel: 'noopener noreferrer', 'data-external': '' }
        : null),
    },
    h('span', { text: action.label }),
    action.icon ? icon(action.icon, { size: 18, class: 'btn__icon' }) : null,
    action.external ? icon('external', { size: 16, class: 'btn__icon' }) : null,
  );
}

/** A row of actions. Returns null when there is nothing to render. */
export function buttonRow(actions, extraClass, context) {
  if (!actions?.length) return null;
  return h(
    'div',
    { class: ['btn-row', extraClass] },
    actions.map((action) => buttonLink(action, context)),
  );
}
