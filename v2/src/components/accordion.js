/**
 * Accordion (`type: 'accordion'`).
 *
 * Built on native <details>/<summary>: it needs no JavaScript, is keyboard
 * accessible and searchable by the browser's find-in-page out of the box.
 */

import { h } from '../core/dom.js';
import { icon } from './icon.js';
import { paragraphs } from './prose.js';

export function accordionBlock(block) {
  return h(
    'div',
    { class: 'accordion reveal' },
    block.items.map((item) =>
      h(
        'details',
        { class: 'accordion__item', open: item.open === true },
        h(
          'summary',
          { class: 'accordion__summary' },
          h('span', { text: item.title }),
          icon('chevronDown', { size: 22, class: 'accordion__chevron' }),
        ),
        h(
          'div',
          { class: 'accordion__panel' },
          ...paragraphs(item.text),
          item.list?.length
            ? h(
                'ul',
                { class: 'accordion__list' },
                item.list.map((entry) => h('li', { text: entry })),
              )
            : null,
        ),
      ),
    ),
  );
}
