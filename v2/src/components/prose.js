/**
 * Plain text blocks: paragraphs, bullet lists and standalone imagery.
 */

import { h } from '../core/dom.js';
import { image } from '../core/paths.js';

/** An array of strings -> a stack of <p> elements. */
export function paragraphs(text, className) {
  const items = Array.isArray(text) ? text : [text];
  return items.filter(Boolean).map((line) => h('p', { class: className, text: line }));
}

/** `type: 'prose'` */
export function proseBlock(block) {
  return h(
    'div',
    { class: ['prose', block.align === 'center' ? 'prose--center' : '', 'reveal'] },
    paragraphs(block.text),
  );
}

/** `type: 'list'` */
export function listBlock(block) {
  return h(
    'div',
    { class: 'prose reveal' },
    block.title ? h('h3', { text: block.title }) : null,
    h('ul', { class: 'prose__list' }, block.items.map((item) => h('li', { text: item }))),
  );
}

/** `type: 'image'` */
export function imageBlock(block) {
  const figure = h(
    'figure',
    { class: ['figure', block.wide ? 'figure--wide' : '', 'reveal'] },
    h('img', {
      src: image(block.src),
      alt: block.alt ?? '',
      loading: 'lazy',
      decoding: 'async',
    }),
    block.caption ? h('figcaption', { text: block.caption }) : null,
  );
  return figure;
}

/** `type: 'gallery'` */
export function galleryBlock(block) {
  return h(
    'div',
    { class: 'gallery reveal' },
    block.items.map((item) =>
      h(
        'figure',
        { class: 'gallery__item' },
        h('img', {
          src: image(item.src),
          alt: item.alt ?? '',
          loading: 'lazy',
          decoding: 'async',
        }),
        item.caption ? h('figcaption', { text: item.caption }) : null,
      ),
    ),
  );
}
