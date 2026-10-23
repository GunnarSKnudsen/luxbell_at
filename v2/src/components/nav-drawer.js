/**
 * Mobile navigation drawer.
 *
 * Owns the behaviour that makes an overlay menu usable: focus is trapped
 * inside it while open, Escape closes it, the page behind it does not scroll,
 * and focus returns to the button that opened it.
 */

import { h } from '../core/dom.js';
import { CONTACT } from '../content/site.js';
import { buttonLink } from './button.js';
import { icon } from './icon.js';
import { langToggle } from './lang-toggle.js';
import { navList } from './nav.js';

const FOCUSABLE = 'a[href], button:not([disabled]), input, select, [tabindex]:not([tabindex="-1"])';

export function createDrawer({ toggleButton }) {
  const body = h('div', { class: 'drawer__body' });

  const closeButton = h(
    'button',
    { type: 'button', class: 'drawer__close' },
    icon('close', { size: 24 }),
  );

  const panel = h(
    'div',
    {
      class: 'drawer__panel',
      role: 'dialog',
      'aria-modal': 'true',
      'aria-label': 'Navigation',
    },
    h('div', { class: 'drawer__head' }, closeButton),
    body,
  );

  const root = h('div', { class: 'drawer', hidden: true }, h('div', { class: 'drawer__backdrop' }), panel);

  let isOpen = false;

  function open() {
    if (isOpen) return;
    isOpen = true;
    root.hidden = false;
    // Next frame, so the transition has a starting state to animate from.
    requestAnimationFrame(() => root.classList.add('is-open'));
    document.body.classList.add('has-drawer-open');
    toggleButton.setAttribute('aria-expanded', 'true');
    panel.querySelector(FOCUSABLE)?.focus();
  }

  function close({ restoreFocus = true } = {}) {
    if (!isOpen) return;
    isOpen = false;
    root.classList.remove('is-open');
    document.body.classList.remove('has-drawer-open');
    toggleButton.setAttribute('aria-expanded', 'false');
    if (restoreFocus) toggleButton.focus();

    // Wait for the closing transition before removing it from the a11y tree.
    const finish = () => {
      if (!isOpen) root.hidden = true;
    };
    panel.addEventListener('transitionend', finish, { once: true });
    setTimeout(finish, 400);
  }

  closeButton.addEventListener('click', () => close());
  root.querySelector('.drawer__backdrop').addEventListener('click', () => close());

  root.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      event.preventDefault();
      close();
      return;
    }
    if (event.key === 'Tab') trapFocus(event, panel);
  });

  // Any navigation from inside the drawer closes it; focus is handled by the
  // router, which moves it to the new page heading.
  body.addEventListener('click', (event) => {
    if (event.target.closest('a[href]')) close({ restoreFocus: false });
  });

  return {
    root,
    close,
    toggle: () => (isOpen ? close() : open()),
    /** Rebuild the contents for a new language / active page. */
    update({ routeId, lang, t }) {
      closeButton.setAttribute('aria-label', t.ui.closeMenu);
      body.replaceChildren(
        navList({ variant: 'drawer', activeId: routeId, t }),
        h(
          'div',
          { class: 'drawer__footer' },
          buttonLink({ label: CONTACT.phone, href: CONTACT.phoneHref, variant: 'primary', icon: 'phone' }),
          langToggle({ routeId, lang, class: 'lang-toggle--drawer' }),
        ),
      );
    },
  };
}

function trapFocus(event, container) {
  const focusable = [...container.querySelectorAll(FOCUSABLE)].filter(
    (el) => el.offsetParent !== null,
  );
  if (!focusable.length) return;

  const first = focusable[0];
  const last = focusable[focusable.length - 1];

  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
}
