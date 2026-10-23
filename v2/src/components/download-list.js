/**
 * Download cards (`type: 'downloads'`).
 *
 * File sizes come from the content file rather than a runtime request, so the
 * page costs nothing extra to render. When a PDF is replaced, update the
 * `size` string next to it — see README.md, "Adding or replacing a PDF".
 */

import { h } from '../core/dom.js';
import { asset } from '../core/paths.js';
import { icon } from './icon.js';

export function downloadsBlock(block, { t }) {
  return h(
    'ul',
    { class: 'downloads reveal' },
    block.items.map((item) =>
      h(
        'li',
        { class: 'downloads__item' },
        h(
          'a',
          {
            class: 'downloads__link',
            href: asset(`docs/${item.file}`),
            target: '_blank',
            rel: 'noopener noreferrer',
            'data-external': '',
          },
          icon('file', { size: 28, class: 'downloads__icon' }),
          h(
            'span',
            { class: 'downloads__text' },
            h('span', { class: 'downloads__label', text: item.label }),
            h('span', {
              class: 'downloads__meta',
              text: ['PDF', item.size].filter(Boolean).join(' · '),
            }),
            item.note ? h('span', { class: 'downloads__note', text: item.note }) : null,
          ),
          icon('download', { size: 22, class: 'downloads__action' }),
          h('span', { class: 'visually-hidden', text: t.ui.downloadPdf }),
        ),
      ),
    ),
  );
}
