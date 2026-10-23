/**
 * Site header.
 *
 * Created once and updated in place on every navigation, so the scroll
 * listener and the drawer instance survive page changes.
 *
 * The header is transparent while it sits over a hero and turns solid once the
 * page is scrolled — see `core/reveal.js` for the scroll flag and
 * `styles/components/header.css` for the two states.
 */

import { h, replace } from '../core/dom.js';
import { hrefFor } from '../core/i18n.js';
import { image } from '../core/paths.js';
import { initHeaderScrollState } from '../core/reveal.js';
import { CONTACT } from '../content/site.js';
import { buttonLink } from './button.js';
import { icon } from './icon.js';
import { langToggle } from './lang-toggle.js';
import { createDrawer } from './nav-drawer.js';
import { navList } from './nav.js';

export function createHeader(root) {
  const inner = h('div', { class: 'header__inner container' });
  replace(root, inner);
  root.classList.add('site-header');

  const toggleButton = h(
    'button',
    {
      type: 'button',
      class: 'header__burger',
      'aria-expanded': 'false',
    },
    icon('menu', { size: 24 }),
  );

  const drawer = createDrawer({ toggleButton });
  document.body.appendChild(drawer.root);
  toggleButton.addEventListener('click', () => drawer.toggle());

  initHeaderScrollState(root);

  // A pointer click anywhere outside an open dropdown closes it. Safari does
  // not focus buttons on click, so `focusout` alone is not enough.
  document.addEventListener('click', (event) => {
    for (const group of root.querySelectorAll('.nav-group.is-open')) {
      if (group.contains(event.target)) continue;
      group.classList.remove('is-open');
      group.querySelector('.nav-group__toggle')?.setAttribute('aria-expanded', 'false');
    }
  });

  return {
    /** Called by the router after every navigation. */
    update({ routeId, lang, t }) {
      drawer.close({ restoreFocus: false });
      toggleButton.setAttribute('aria-label', t.ui.openMenu);

      // Pages that open with a hero get the transparent header laid over it;
      // pages without one (the imprint, 404) need the solid variant.
      root.classList.toggle('site-header--overlay', Boolean(t.pages[routeId]?.hero));

      replace(
        inner,
        h(
          'a',
          { class: 'header__brand', href: hrefFor('home'), 'aria-label': t.siteName },
          h('img', {
            class: 'header__logo',
            src: image('luxbell_logo.png'),
            alt: '',
            width: 160,
            height: 48,
          }),
          h('span', { class: 'header__tagline', text: t.siteTagline }),
        ),
        h(
          'nav',
          { class: 'header__nav', 'aria-label': t.ui.mainNav },
          navList({ variant: 'bar', activeId: routeId, t }),
        ),
        h(
          'div',
          { class: 'header__actions' },
          buttonLink({
            label: CONTACT.phone,
            href: CONTACT.phoneHref,
            variant: 'quiet',
            icon: 'phone',
          }),
          langToggle({ routeId, lang }),
          toggleButton,
        ),
      );

      drawer.update({ routeId, lang, t });
    },
  };
}
