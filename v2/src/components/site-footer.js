/**
 * Site footer.
 *
 * Holds the contact details and the legal identifiers that the old site
 * repeated inside three separate page renderers, so they now live in exactly
 * one place and appear on every page.
 */

import { h, replace } from '../core/dom.js';
import { hrefFor } from '../core/i18n.js';
import { CONTACT, FOOTER_NAV, LEGAL } from '../content/site.js';
import { icon } from './icon.js';
import { navLink } from './nav.js';

export function createFooter(root) {
  root.classList.add('site-footer');

  return {
    update({ routeId, t }) {
      const labels = t.footer.labels;

      replace(
        root,
        h(
          'div',
          { class: 'footer__top container' },
          h(
            'div',
            { class: 'footer__brand' },
            h('p', { class: 'footer__name', text: LEGAL.companyFull }),
            h('p', { class: 'footer__tagline', text: t.footer.tagline }),
          ),
          h(
            'div',
            { class: 'footer__col' },
            h('h2', { class: 'footer__heading', text: t.footer.contactHeading }),
            h(
              'ul',
              { class: 'footer__list' },
              h(
                'li',
                null,
                icon('pin', { size: 18 }),
                h(
                  'address',
                  null,
                  CONTACT.address,
                  h('br'),
                  `${CONTACT.postalCode} ${CONTACT.city}`,
                ),
              ),
              h('li', null, icon('phone', { size: 18 }), h('a', { href: CONTACT.phoneHref }, CONTACT.phone)),
              h(
                'li',
                null,
                icon('mail', { size: 18 }),
                h('a', { href: `mailto:${CONTACT.email}` }, CONTACT.email),
              ),
            ),
          ),
          ...FOOTER_NAV.map((column) =>
            h(
              'div',
              { class: 'footer__col' },
              h('h2', { class: 'footer__heading', text: t.navGroups[column.id] }),
              h(
                'ul',
                { class: 'footer__list footer__list--links' },
                column.children.map((id) =>
                  h('li', null, navLink(id, routeId, t, 'footer__link')),
                ),
              ),
            ),
          ),
        ),
        h(
          'div',
          { class: 'footer__legal' },
          h(
            'div',
            { class: 'container footer__legal-inner' },
            h('p', {
              text: [
                `${labels.tradeRegister}: ${LEGAL.tradeRegister}`,
                `${labels.vatId}: ${LEGAL.vatId}`,
                `${labels.gisa}: ${LEGAL.gisa}`,
                `${labels.authority}: ${LEGAL.authority}`,
              ].join(' · '),
            }),
            h(
              'p',
              null,
              `© ${new Date().getFullYear()} ${LEGAL.companyFull}. ${t.footer.copyright} `,
              h('a', { href: hrefFor('impressum') }, t.nav.impressum),
            ),
          ),
        ),
      );
    },
  };
}
