/**
 * Navigation list, shared by the desktop bar and the mobile drawer.
 *
 * `NAV` in `content/site.js` describes the structure; labels come from the
 * active language's `nav` / `navGroups` dictionaries. The two variants differ
 * only in how a group behaves: a click-to-open dropdown on the bar, a
 * permanently expanded sub-list in the drawer.
 */

import { h } from '../core/dom.js';
import { hrefFor } from '../core/i18n.js';
import { NAV } from '../content/site.js';
import { icon } from './icon.js';

/**
 * @param {object} options
 * @param {string} options.variant   'bar' | 'drawer'
 * @param {string|null} options.activeId
 * @param {object} options.t
 */
export function navList({ variant, activeId, t }) {
  return h(
    'ul',
    { class: `nav-list nav-list--${variant}` },
    NAV.map((item) =>
      item.children
        ? groupItem(item, { variant, activeId, t })
        : h('li', { class: 'nav-item' }, navLink(item.id, activeId, t)),
    ),
  );
}

/** A single navigation link, marked with aria-current when it is the open page. */
export function navLink(routeId, activeId, t, className) {
  const isActive = routeId === activeId;
  return h('a', {
    class: ['nav-link', className, isActive ? 'is-active' : ''],
    href: hrefFor(routeId),
    text: t.nav[routeId],
    ...(isActive ? { 'aria-current': 'page' } : null),
  });
}

/* -------------------------------------------------------------------------- */

function groupItem(item, { variant, activeId, t }) {
  const containsActive = item.children.includes(activeId);

  const panel = h(
    'ul',
    { class: 'nav-group__panel' },
    item.children.map((childId) =>
      h('li', null, navLink(childId, activeId, t, 'nav-link--child')),
    ),
  );

  if (variant === 'drawer') {
    // No disclosure in the drawer: everything is visible, which is faster to
    // use on a phone than a second tap.
    return h(
      'li',
      { class: 'nav-item nav-group nav-group--static' },
      h('span', { class: 'nav-group__heading', text: t.navGroups[item.id] }),
      panel,
    );
  }

  const toggle = h(
    'button',
    {
      type: 'button',
      class: ['nav-link', 'nav-group__toggle', containsActive ? 'is-active' : ''],
      'aria-expanded': 'false',
    },
    h('span', { text: t.navGroups[item.id] }),
    icon('chevronDown', { size: 18, class: 'nav-group__chevron' }),
  );

  const group = h('li', { class: 'nav-item nav-group' }, toggle, panel);

  toggle.addEventListener('click', () => {
    setGroupOpen(group, toggle, toggle.getAttribute('aria-expanded') !== 'true');
  });

  // Close when focus or the pointer leaves the group, and on Escape.
  group.addEventListener('focusout', (event) => {
    if (!group.contains(event.relatedTarget)) setGroupOpen(group, toggle, false);
  });
  group.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape') return;
    setGroupOpen(group, toggle, false);
    toggle.focus();
  });

  return group;
}

function setGroupOpen(group, toggle, open) {
  group.classList.toggle('is-open', open);
  toggle.setAttribute('aria-expanded', String(open));
}
