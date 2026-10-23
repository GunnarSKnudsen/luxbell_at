/**
 * Product spec card (`type: 'products'`) — product photo, name, optional
 * flyer link and a checked list of technical features.
 */

import { h } from '../core/dom.js';
import { asset, image } from '../core/paths.js';
import { icon } from './icon.js';

export function productsBlock(block, { t }) {
  return h(
    'ul',
    { class: 'product-grid reveal' },
    block.items.map((item) => productCard(item, t)),
  );
}

function productCard(item, t) {
  const pdfHref = item.pdf ? asset(`docs/${item.pdf}`) : null;

  const picture = h('img', {
    src: image(item.image),
    alt: item.alt ?? item.name,
    loading: 'lazy',
    decoding: 'async',
  });

  return h(
    'li',
    { class: 'product' },
    h(
      'div',
      { class: 'product__media' },
      pdfHref
        ? h(
            'a',
            {
              href: pdfHref,
              target: '_blank',
              rel: 'noopener noreferrer',
              'data-external': '',
              'aria-label': `${item.name} – ${t.ui.infoFlyer}`,
            },
            picture,
          )
        : picture,
    ),
    h(
      'div',
      { class: 'product__body' },
      h('h3', { class: 'product__title', text: item.name }),
      pdfHref
        ? h(
            'a',
            {
              class: 'product__pdf',
              href: pdfHref,
              target: '_blank',
              rel: 'noopener noreferrer',
              'data-external': '',
            },
            icon('file', { size: 18 }),
            h('span', { text: t.ui.infoFlyer }),
          )
        : null,
      item.features?.length
        ? h(
            'ul',
            { class: 'product__features' },
            item.features.map((feature) =>
              h('li', null, icon('check', { size: 18 }), h('span', { text: feature })),
            ),
          )
        : null,
    ),
  );
}
