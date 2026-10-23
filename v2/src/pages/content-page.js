/**
 * The generic page.
 *
 * Renders a hero (or a plain page header when the page has none) followed by
 * the page's blocks. Eight of the site's eleven routes are drawn by this one
 * function — they differ only in their content, never in their code.
 */

import { renderBlocks } from '../blocks/render-block.js';
import { h } from '../core/dom.js';
import { heroBanner, pageHeader } from '../components/hero.js';

export function contentPage({ route, lang, t }) {
  const page = t.pages[route.id];

  if (!page) {
    throw new Error(`No content for route "${route.id}" in language "${lang}"`);
  }

  return h(
    'article',
    { class: 'page' },
    page.hero
      ? heroBanner(page.hero, { routeId: route.id })
      : pageHeader({ title: page.title, kicker: page.kicker, lead: page.lead }),
    ...renderBlocks(page.blocks, { t, lang, route }),
  );
}
