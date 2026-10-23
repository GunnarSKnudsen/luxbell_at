/**
 * DE / EN switch.
 *
 * It is a real link to the same page in the other language, not a button, so
 * it can be opened in a new tab, copied, and read correctly by assistive
 * technology. The router intercepts the click like any other internal link.
 */

import { h } from '../core/dom.js';
import { dict, hrefFor, otherLang } from '../core/i18n.js';

export function langToggle({ routeId, lang, class: className }) {
  const target = otherLang(lang);
  const targetDict = dict(target);

  return h('a', {
    class: ['lang-toggle', className],
    href: hrefFor(routeId ?? 'home', target),
    lang: target,
    text: targetDict.lang.toUpperCase(),
    title: dict(lang).ui.langSwitchTo,
    'aria-label': dict(lang).ui.langSwitchTo,
  });
}
