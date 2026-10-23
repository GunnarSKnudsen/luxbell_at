/**
 * Split block — image on one side, text on the other.
 *
 * `side` names where the *image* sits ('left' or 'right'). Below 860px the
 * layout collapses to a single column with the image first, regardless of
 * side, so the reading order stays predictable.
 */

import { h } from '../core/dom.js';
import { asset, image } from '../core/paths.js';
import { buttonRow } from './button.js';
import { paragraphs } from './prose.js';

export function splitBlock(block, context) {
  const { t } = context;
  const picture = h('img', {
    src: image(block.image),
    alt: block.alt ?? '',
    loading: 'lazy',
    decoding: 'async',
  });

  const media = h(
    'div',
    { class: 'split__media' },
    // When the block names a PDF, the image itself becomes the link to it —
    // the behaviour the original site had for the aluminium cladding photo.
    block.pdf
      ? h(
          'a',
          {
            class: 'split__media-link',
            href: asset(`docs/${block.pdf}`),
            target: '_blank',
            rel: 'noopener noreferrer',
            'data-external': '',
            'aria-label': `${block.heading ?? block.alt ?? ''} – ${t.ui.downloadPdf}`.trim(),
          },
          picture,
        )
      : picture,
  );

  const body = h(
    'div',
    { class: 'split__body' },
    block.kicker ? h('span', { class: 'kicker', text: block.kicker }) : null,
    block.heading ? h('h2', { class: 'section-title', text: block.heading }) : null,
    ...paragraphs(block.text),
    buttonRow(block.actions, null, { routeId: context.route?.id }),
  );

  return h(
    'div',
    { class: ['split', block.side === 'left' ? 'split--media-first' : '', 'reveal'] },
    media,
    body,
  );
}
