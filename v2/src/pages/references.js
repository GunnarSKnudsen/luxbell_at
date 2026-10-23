/**
 * References page.
 *
 * The only page with its own behaviour: it loads `assets/data/references.json`
 * (the single source of truth — there is no generated copy of this data
 * anywhere) and filters it in the browser.
 *
 * The same markup serves both layouts: a table on wide screens, and stacked
 * labelled cards below 700px, driven purely by CSS from the `data-label`
 * attributes written here.
 */

import { heroBanner } from '../components/hero.js';
import { icon } from '../components/icon.js';
import { h, replace } from '../core/dom.js';
import { asset } from '../core/paths.js';
import { REFERENCES_DATA } from '../content/site.js';

/** Loaded once per session and reused on every later visit to the page. */
let cache = null;

export async function referencesPage({ route, lang, t }) {
  const page = t.pages[route.id];
  const strings = t.references;

  const results = h('div', { class: 'references__results' });
  const count = h('p', {
    class: 'references__count',
    role: 'status',
    'aria-live': 'polite',
  });

  let entries;
  try {
    entries = await loadReferences();
  } catch (error) {
    console.error('[references] could not load data', error);
    return h(
      'article',
      { class: 'page' },
      heroBanner(page.hero, { routeId: route.id }),
      h(
        'section',
        { class: 'section' },
        h('div', { class: 'container' }, h('p', { class: 'references__error', text: strings.loadError })),
      ),
    );
  }

  const search = h('input', {
    class: 'field__input',
    type: 'search',
    id: 'references-search',
    placeholder: strings.searchPlaceholder,
    autocomplete: 'off',
  });

  const filter = h(
    'select',
    { class: 'field__input', id: 'references-filter' },
    h('option', { value: '' }, strings.filterAll),
    uniqueTypes(entries).map((type) => h('option', { value: type }, type)),
  );

  const apply = () => {
    const matches = filterEntries(entries, search.value, filter.value);
    replace(results, buildTable(matches, strings));
    count.textContent = formatCount(matches.length, strings);
  };

  search.addEventListener('input', apply);
  filter.addEventListener('change', apply);

  const article = h(
    'article',
    { class: 'page' },
    heroBanner(page.hero, { routeId: route.id }),
    h(
      'section',
      { class: 'section' },
      h(
        'div',
        { class: 'container' },
        h(
          'div',
          { class: 'references__controls' },
          h(
            'div',
            { class: 'field field--search' },
            h('label', { class: 'field__label', for: 'references-search', text: strings.searchLabel }),
            h('div', { class: 'field__control' }, icon('search', { size: 20, class: 'field__icon' }), search),
          ),
          h(
            'div',
            { class: 'field' },
            h('label', { class: 'field__label', for: 'references-filter', text: strings.filterLabel }),
            h('div', { class: 'field__control' }, filter, icon('chevronDown', { size: 20, class: 'field__icon field__icon--end' })),
          ),
        ),
        count,
        results,
      ),
    ),
  );

  apply();
  return article;
}

/* -------------------------------------------------------------------------- */

async function loadReferences() {
  if (cache) return cache;
  const response = await fetch(asset(REFERENCES_DATA), { headers: { Accept: 'application/json' } });
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  cache = await response.json();
  return cache;
}

function uniqueTypes(entries) {
  const types = new Set(
    entries.map((entry) => (entry.ausfuehrungsart ?? '').trim()).filter(Boolean),
  );
  return [...types].sort((a, b) => a.localeCompare(b, 'de'));
}

function filterEntries(entries, query, type) {
  const needle = query.trim().toLowerCase();

  return entries.filter((entry) => {
    if (type && (entry.ausfuehrungsart ?? '').trim() !== type) return false;
    if (!needle) return true;

    return ['auftraggeber', 'bauvorhaben', 'ausfuehrungsart', 'beschreibung'].some((key) =>
      String(entry[key] ?? '').toLowerCase().includes(needle),
    );
  });
}

function formatCount(n, strings) {
  return n === 1 ? strings.resultsOne : strings.resultsMany.replace('{n}', String(n));
}

function buildTable(entries, strings) {
  if (!entries.length) {
    return h('p', { class: 'references__empty', text: strings.empty });
  }

  const columns = ['auftraggeber', 'bauvorhaben', 'ausfuehrungsart', 'beschreibung'];

  return h(
    'div',
    { class: 'references__scroll' },
    h(
      'table',
      { class: 'references-table' },
      h(
        'thead',
        null,
        h('tr', null, columns.map((key) => h('th', { scope: 'col', text: strings.columns[key] }))),
      ),
      h(
        'tbody',
        null,
        entries.map((entry) =>
          h(
            'tr',
            null,
            columns.map((key) =>
              h(
                'td',
                { 'data-label': strings.columns[key], class: `cell--${key}` },
                ...multiline(entry[key]),
              ),
            ),
          ),
        ),
      ),
    ),
  );
}

/** The source data uses "\n" inside addresses; keep those line breaks. */
function multiline(value) {
  const lines = String(value ?? '').split('\n');
  return lines.flatMap((line, index) => (index === 0 ? [line] : [h('br'), line]));
}
