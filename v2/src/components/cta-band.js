/**
 * Call-to-action band (`type: 'cta'`).
 *
 * When the content file gives no explicit actions, the band falls back to the
 * two that always make sense: call us, or send an email.
 */

import { h } from '../core/dom.js';
import { CONTACT } from '../content/site.js';
import { buttonRow } from './button.js';

export function ctaBlock(block, { t }) {
  const actions = block.actions ?? [
    { label: CONTACT.phone, href: CONTACT.phoneHref, variant: 'primary', icon: 'phone' },
    {
      label: t.ui.emailUs,
      href: `mailto:${CONTACT.email}`,
      variant: 'secondary',
      icon: 'mail',
    },
  ];

  return h(
    'div',
    { class: 'cta reveal' },
    h('h2', { class: 'cta__title', text: block.title }),
    block.text ? h('p', { class: 'cta__text', text: block.text }) : null,
    buttonRow(actions, 'cta__actions'),
  );
}
