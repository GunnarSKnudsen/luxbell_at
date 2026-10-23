/**
 * Application entry point.
 *
 * Wires the three long-lived pieces together — header, footer, router — and
 * gets out of the way. Everything else is reached from here through imports,
 * so this file stays the map of the application.
 */

import { createFooter } from './components/site-footer.js';
import { createHeader } from './components/site-header.js';
import { t } from './core/i18n.js';
import { initReveal, observeReveals } from './core/reveal.js';
import { startRouter } from './core/router.js';
import { pages } from './pages/index.js';

const outlet = document.getElementById('main');
const header = createHeader(document.getElementById('site-header'));
const footer = createFooter(document.getElementById('site-footer'));

initReveal();

startRouter({
  pages,
  outlet,
  onNavigate({ routeId, lang }) {
    const dictionary = t();
    header.update({ routeId, lang, t: dictionary });
    footer.update({ routeId, lang, t: dictionary });
    document.querySelector('[data-skip-link]').textContent = dictionary.ui.skipToContent;
    observeReveals(outlet);
  },
});
