/**
 * Block dispatch — the seam between content and rendering.
 *
 * A page in `content/de.js` is a list of typed blocks; this table maps each
 * `type` to the component that draws it. Adding a new kind of content means
 * one component file and one line here. Nothing else in the project needs to
 * know the type exists.
 *
 * Per entry:
 *   render  — (block, context) => Node
 *   tone    — default section background when the block does not set `section`
 *   header  — whether the block supports kicker/title/intro above its content
 */

import { accordionBlock } from '../components/accordion.js';
import { cardsBlock, featuresBlock, statsBlock } from '../components/card-grid.js';
import { contactBlock, imprintBlock, legalBlock } from '../components/contact-cards.js';
import { ctaBlock } from '../components/cta-band.js';
import { downloadsBlock } from '../components/download-list.js';
import { productsBlock } from '../components/product-card.js';
import { galleryBlock, imageBlock, listBlock, proseBlock } from '../components/prose.js';
import { section, sectionHeader } from '../components/section.js';
import { splitBlock } from '../components/split-section.js';

const BLOCKS = {
  heading: { render: () => null, tone: 'plain', header: true },
  prose: { render: proseBlock, tone: 'plain' },
  list: { render: listBlock, tone: 'plain', header: false },
  image: { render: imageBlock, tone: 'plain' },
  gallery: { render: galleryBlock, tone: 'plain', header: true },
  split: { render: splitBlock, tone: 'plain' },
  cards: { render: cardsBlock, tone: 'sand', header: true },
  features: { render: featuresBlock, tone: 'plain', header: true },
  stats: { render: statsBlock, tone: 'plain', header: true },
  products: { render: productsBlock, tone: 'sand', header: true },
  downloads: { render: downloadsBlock, tone: 'plain', header: true },
  accordion: { render: accordionBlock, tone: 'sand', header: true },
  contact: { render: contactBlock, tone: 'plain', header: true },
  legal: { render: legalBlock, tone: 'sand', header: true },
  imprint: { render: imprintBlock, tone: 'plain', header: false },
  cta: { render: ctaBlock, tone: 'inverse' },
};

/** Block types a content file may use — exported for the README and for tests. */
export const BLOCK_TYPES = Object.keys(BLOCKS);

/**
 * @param {object} block    One entry from a page's `blocks` array.
 * @param {object} context  { t, lang, route }
 * @returns {Node|null}
 */
export function renderBlock(block, context) {
  const definition = BLOCKS[block.type];

  if (!definition) {
    console.warn(`[blocks] unknown block type "${block.type}" — skipped`);
    return null;
  }

  const body = definition.render(block, context);
  const header = definition.header
    ? sectionHeader({
        kicker: block.kicker,
        title: block.title,
        intro: block.intro,
        align: block.align,
      })
    : null;

  if (!body && !header) return null;

  return section(
    {
      tone: block.section ?? definition.tone,
      width: block.width,
      tight: block.tight,
      id: block.id,
      class: `section--${block.type}`,
    },
    header,
    body,
  );
}

/** Render a whole list of blocks. */
export function renderBlocks(blocks, context) {
  return (blocks ?? []).map((block) => renderBlock(block, context)).filter(Boolean);
}
