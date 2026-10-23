/**
 * Contact and legal blocks.
 *
 * Both read from `content/site.js` rather than the language files, because an
 * address and a company register number are the same in every language — only
 * their labels are translated.
 */

import { h } from '../core/dom.js';
import { CONTACT, LEGAL } from '../content/site.js';
import { icon } from './icon.js';

/** `type: 'contact'` */
export function contactBlock(_block, { t }) {
  return h(
    'ul',
    { class: 'contact-cards reveal' },
    contactCard('phone', t.ui.phoneLabel, CONTACT.phone, CONTACT.phoneHref),
    contactCard('mail', t.ui.emailLabel, CONTACT.email, `mailto:${CONTACT.email}`),
    addressCard(t.ui.addressLabel),
  );
}

/** `type: 'legal'` — the one-line legal strip used on the contact page. */
export function legalBlock(_block, { t }) {
  const labels = t.footer.labels;
  return h(
    'div',
    { class: 'legal-strip reveal' },
    h(
      'dl',
      { class: 'legal-strip__list' },
      legalEntry(labels.tradeRegister, LEGAL.tradeRegister),
      legalEntry(labels.vatId, LEGAL.vatId),
      legalEntry(labels.gisa, LEGAL.gisa),
      legalEntry(labels.authority, LEGAL.authority),
    ),
  );
}

/** `type: 'imprint'` — the full imprint page body. */
export function imprintBlock(block, { t }) {
  const labels = t.footer.labels;

  return h(
    'div',
    { class: 'imprint' },
    h(
      'section',
      { class: 'imprint__section' },
      h('h2', { text: block.mediaOwnerHeading }),
      h('p', { class: 'imprint__company', text: LEGAL.companyFull }),
      h(
        'p',
        null,
        CONTACT.address,
        h('br'),
        `${CONTACT.postalCode} ${CONTACT.city}`,
        h('br'),
        CONTACT.country,
      ),
      h(
        'p',
        null,
        h('a', { href: CONTACT.phoneHref }, CONTACT.phone),
        h('br'),
        h('a', { href: `mailto:${CONTACT.email}` }, CONTACT.email),
        h('br'),
        h('span', { text: CONTACT.website }),
      ),
      h(
        'p',
        null,
        h(
          'a',
          {
            href: LEGAL.wkoLink,
            target: '_blank',
            rel: 'noopener noreferrer',
            'data-external': '',
            class: 'imprint__external',
          },
          h('span', { text: block.wkoLabel }),
          icon('external', { size: 16 }),
        ),
      ),
    ),
    h(
      'section',
      { class: 'imprint__section' },
      h('h2', { text: block.detailsHeading }),
      h(
        'dl',
        { class: 'legal-strip__list' },
        legalEntry(labels.tradeRegister, LEGAL.tradeRegister),
        legalEntry(labels.vatId, LEGAL.vatId),
        legalEntry(labels.gisa, LEGAL.gisa),
        legalEntry(labels.authority, LEGAL.authority),
      ),
    ),
    h(
      'section',
      { class: 'imprint__section' },
      h('h2', { text: block.privacyHeading }),
      h('p', { text: block.privacyText }),
      h('p', { class: 'imprint__note', text: block.privacyNote }),
    ),
  );
}

/* -------------------------------------------------------------------------- */

function contactCard(iconName, label, value, href) {
  return h(
    'li',
    { class: 'contact-card' },
    h('span', { class: 'contact-card__icon' }, icon(iconName, { size: 26 })),
    h('span', { class: 'contact-card__label', text: label }),
    h('a', { class: 'contact-card__value', href }, value),
  );
}

function addressCard(label) {
  return h(
    'li',
    { class: 'contact-card' },
    h('span', { class: 'contact-card__icon' }, icon('pin', { size: 26 })),
    h('span', { class: 'contact-card__label', text: label }),
    h(
      'address',
      { class: 'contact-card__value' },
      CONTACT.address,
      h('br'),
      `${CONTACT.postalCode} ${CONTACT.city}`,
    ),
  );
}

function legalEntry(label, value) {
  return h(
    'div',
    { class: 'legal-strip__entry' },
    h('dt', { text: label }),
    h('dd', { text: value }),
  );
}
