/**
 * Linked cards (`type: 'cards'`) and plain feature cards (`type: 'features'`).
 *
 * Cards use a stretched-link pattern: the whole card is clickable, but only
 * the title is a real link, so assistive technology announces one sensible
 * link name per card rather than the full card text.
 */

import { h } from '../core/dom.js';
import { hrefFor } from '../core/i18n.js';
import { image } from '../core/paths.js';
import { icon } from './icon.js';

export function cardsBlock(block) {
  return h(
    'ul',
    { class: 'card-grid reveal' },
    block.items.map((item) =>
      h(
        'li',
        { class: 'card' },
        h(
          'div',
          { class: 'card__media' },
          h('img', {
            src: image(item.image),
            alt: '',
            loading: 'lazy',
            decoding: 'async',
          }),
        ),
        h(
          'div',
          { class: 'card__body' },
          h(
            'h3',
            { class: 'card__title' },
            h(
              'a',
              {
                class: 'card__link',
                href: item.href ?? hrefFor(item.route),
                ...(item.href ? { target: '_blank', rel: 'noopener', 'data-external': '' } : null),
              },
              item.title,
            ),
          ),
          item.text ? h('p', { class: 'card__text', text: item.text }) : null,
          icon('arrowRight', { size: 20, class: 'card__arrow' }),
        ),
      ),
    ),
  );
}

export function featuresBlock(block) {
  return h(
    'ul',
    { class: 'feature-grid reveal' },
    block.items.map((item) =>
      h(
        'li',
        { class: 'feature' },
        h('h3', { class: 'feature__title', text: item.title }),
        item.text ? h('p', { class: 'feature__text', text: item.text }) : null,
        item.sub ? h('p', { class: 'feature__sub', text: item.sub }) : null,
      ),
    ),
  );
}

export function statsBlock(block) {
  return h(
    'ul',
    { class: 'stats reveal' },
    block.items.map((item) =>
      h(
        'li',
        { class: 'stats__item' },
        h('span', { class: 'stats__value', text: item.value }),
        h('span', { class: 'stats__label', text: item.label }),
      ),
    ),
  );
}
