/**
 * Section wrapper shared by every block.
 *
 * Blocks declare their background and width in the content file
 * (`section: 'sand' | 'alt' | 'inverse' | 'plain'`, `width: 'narrow'`) and
 * this is the one place that turns those words into classes.
 */

import { h } from '../core/dom.js';

const TONES = {
  plain: '',
  sand: 'section--sand',
  alt: 'section--alt',
  inverse: 'section--inverse',
};

/**
 * @param {object} options
 * @param {string} [options.tone='plain']
 * @param {string} [options.width]      'narrow' constrains the container.
 * @param {boolean} [options.tight]     Reduced vertical padding.
 * @param {string} [options.id]         Anchor target, e.g. for a hero button.
 * @param {string} [options.class]      Extra class on the <section>.
 * @param {string} [options.innerClass] Extra class on the container.
 * @param {...any} children
 */
export function section(
  { tone = 'plain', width, tight, id, class: className, innerClass },
  ...children
) {
  return h(
    'section',
    {
      class: ['section', TONES[tone] ?? '', tight ? 'section--tight' : '', className],
      id,
    },
    h(
      'div',
      { class: ['container', width === 'narrow' ? 'container--narrow' : '', innerClass] },
      children,
    ),
  );
}

/**
 * Optional heading group at the top of a section: kicker, title, intro.
 * Returns null when the block supplies none of them.
 */
export function sectionHeader({ kicker, title, intro, align, level = 'h2' }) {
  if (!kicker && !title && !intro) return null;
  const centred = align === 'center';

  return h(
    'div',
    { class: ['section__header', centred ? 'section__header--center' : ''] },
    kicker ? h('span', { class: 'kicker', text: kicker }) : null,
    title
      ? h(level, {
          class: ['section-title', centred ? 'section-title--center' : ''],
          text: title,
        })
      : null,
    intro ? h('p', { class: 'section__intro', text: intro }) : null,
  );
}
