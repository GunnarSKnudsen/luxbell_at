/**
 * The two pages that are not content: 404 and the render-error fallback.
 * Both are deliberately plain — they must work even when something else has.
 */

import { buttonRow } from '../components/button.js';
import { pageHeader } from '../components/hero.js';
import { h } from '../core/dom.js';

export function notFoundPage({ t }) {
  return statusPage(t.notFound.title, t.notFound.text, t);
}

export function errorPage({ t }) {
  return statusPage(t.errorPage.title, t.errorPage.text, t);
}

function statusPage(title, text, t) {
  return h(
    'article',
    { class: 'page page--status' },
    pageHeader({ title }),
    h(
      'section',
      { class: 'section section--tight' },
      h(
        'div',
        { class: 'container container--narrow' },
        h('p', { text }),
        buttonRow([{ label: t.ui.backHome, route: 'home', variant: 'primary' }]),
      ),
    ),
  );
}
