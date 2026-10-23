#!/usr/bin/env node
/**
 * Optional maintenance check for the LUXbell v2 site.
 *
 *   node tools/check.mjs            (run from the v2 folder)
 *
 * The website itself needs no tooling at all — this script is here only so a
 * content edit can be verified before it is deployed. It needs nothing but
 * node: no npm install, no packages.
 *
 * It runs three passes:
 *
 *   1. Imports    every relative import resolves, and every named import is
 *                 actually exported by the file it comes from.
 *   2. Content    de.js and en.js describe the same pages with the same
 *                 blocks in the same order; every route has content and a nav
 *                 label; every image and PDF named in the content exists on
 *                 disk; every internal link points at a real route.
 *   3. Rendering  every page is actually rendered for both languages against
 *                 a small DOM stub, which catches the runtime errors a typo
 *                 in a content file would otherwise only reveal in a browser.
 *
 * Exit code is 0 when everything passes, 1 otherwise — so it also works as a
 * CI step.
 */

import { createHash } from 'node:crypto';
import { existsSync, readFileSync } from 'node:fs';
import { readdir } from 'node:fs/promises';
import { dirname, join, relative, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { installDom, serialize } from './dom-stub.mjs';

const ROOT = resolve(process.argv[2] ?? join(dirname(fileURLToPath(import.meta.url)), '..'));

installDom({ root: ROOT });

const problems = [];
const note = (message) => problems.push(message);
const load = (path) => import(pathToFileURL(join(ROOT, path)));

/* == 1. Import graph ======================================================= */

async function walk(dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await walk(full)));
    else if (entry.name.endsWith('.js')) out.push(full);
  }
  return out;
}

const files = await walk(join(ROOT, 'src'));
const exportsOf = new Map();

for (const file of files) {
  const source = readFileSync(file, 'utf8');
  const names = new Set();
  const pattern = /export\s+(?:async\s+)?(?:function|const|let|class)\s+([A-Za-z0-9_$]+)/g;
  for (const match of source.matchAll(pattern)) names.add(match[1]);
  if (/export\s+default/.test(source)) names.add('default');
  exportsOf.set(file, names);
}

for (const file of files) {
  const source = readFileSync(file, 'utf8');
  for (const match of source.matchAll(/import\s+([^;]+?)\s+from\s+['"]([^'"]+)['"]/g)) {
    const [, clause, specifier] = match;
    if (!specifier.startsWith('.')) continue;

    const target = resolve(dirname(file), specifier);
    if (!existsSync(target)) {
      note(`missing file: ${relative(ROOT, file)} imports ${specifier}`);
      continue;
    }

    const available = exportsOf.get(target) ?? new Set();
    const named = clause.match(/\{([^}]*)\}/);
    const defaultImport = clause.replace(/\{[^}]*\}/, '').replace(/,/g, '').trim();

    if (defaultImport && !available.has('default')) {
      note(`no default export in ${relative(ROOT, target)} (imported by ${relative(ROOT, file)})`);
    }
    for (const raw of named?.[1].split(',') ?? []) {
      const name = raw.split(/\s+as\s+/)[0].trim();
      if (name && !available.has(name)) {
        note(`no export "${name}" in ${relative(ROOT, target)} (imported by ${relative(ROOT, file)})`);
      }
    }
  }
}

/* == 2. Content =========================================================== */

const de = (await load('src/content/de.js')).default;
const en = (await load('src/content/en.js')).default;
const site = await load('src/content/site.js');
const { BLOCK_TYPES } = await load('src/blocks/render-block.js');

const dePages = Object.keys(de.pages).sort();
const enPages = Object.keys(en.pages).sort();
if (dePages.join() !== enPages.join()) {
  note(`de.js and en.js define different pages:\n    de: ${dePages}\n    en: ${enPages}`);
}

for (const route of site.ROUTES) {
  for (const [lang, dictionary] of [['de', de], ['en', en]]) {
    if (!dictionary.pages[route.id]) note(`route "${route.id}" has no ${lang} content`);
    if (!dictionary.nav[route.id]) note(`route "${route.id}" has no ${lang} nav label`);
  }
}

const images = new Set([site.SOCIAL_IMAGE, 'luxbell_logo.png']);
const docs = new Set();

for (const [lang, dictionary] of [['de', de], ['en', en]]) {
  const other = lang === 'de' ? en : de;

  for (const [id, page] of Object.entries(dictionary.pages)) {
    const counterpart = other.pages[id];
    if (page.hero?.image) images.add(page.hero.image);

    if (Boolean(page.hero) !== Boolean(counterpart?.hero)) {
      note(`"${id}": de and en disagree on whether the page has a hero`);
    }

    const blocks = page.blocks ?? [];
    const otherBlocks = counterpart?.blocks ?? [];
    if (blocks.length !== otherBlocks.length) {
      note(`"${id}": ${blocks.length} blocks in ${lang}, ${otherBlocks.length} in the other language`);
    }

    blocks.forEach((block, index) => {
      if (!BLOCK_TYPES.includes(block.type)) {
        note(`unknown block type "${block.type}" in ${lang}/${id} block ${index}`);
      }
      if (otherBlocks[index] && otherBlocks[index].type !== block.type) {
        note(`"${id}" block ${index}: type differs between languages`);
      }

      collectAssets(block, images, docs);
      for (const item of block.items ?? []) collectAssets(item, images, docs);
      for (const action of [...(block.actions ?? []), ...(block.items ?? [])]) {
        if (action.route && !site.routeById(action.route)) {
          note(`unknown route "${action.route}" linked from ${lang}/${id}`);
        }
      }
    });

    for (const action of page.hero?.actions ?? []) {
      if (action.route && !site.routeById(action.route)) {
        note(`unknown route "${action.route}" in the hero of ${lang}/${id}`);
      }
    }
  }
}

function collectAssets(source, imageSet, docSet) {
  if (source.image) imageSet.add(source.image);
  if (source.src) imageSet.add(source.src);
  if (source.pdf) docSet.add(source.pdf);
  if (source.file) docSet.add(source.file);
}

for (const file of images) {
  if (!existsSync(join(ROOT, 'assets/images', file))) note(`missing image: assets/images/${file}`);
}
for (const file of docs) {
  if (!existsSync(join(ROOT, 'assets/docs', file))) note(`missing PDF: assets/docs/${file}`);
}

const references = JSON.parse(readFileSync(join(ROOT, 'assets/data/references.json'), 'utf8'));
if (!Array.isArray(references) || references.length === 0) {
  note('assets/data/references.json is empty or is not an array');
}

/* == 2b. The bootstrap in index.html ====================================== */

const i18nLangs = (await load('src/core/i18n.js')).LANGS;
const indexHtml = readFileSync(join(ROOT, 'index.html'), 'utf8');
const inline = indexHtml.match(/<script>([\s\S]*?)<\/script>/);

if (!inline) {
  note('index.html has no inline mount-point script');
} else {
  // The language list is duplicated there because it is needed before any
  // module can load. Prove the two copies still agree.
  const match = inline[1].match(/var LANGS = \[([\s\S]*?)\]/);
  const actualLangs = match ? [...match[1].matchAll(/'([^']+)'/g)].map((m) => m[1]).sort() : null;
  if (!actualLangs || actualLangs.join() !== [...i18nLangs].sort().join()) {
    note(
      'index.html LANGS is out of sync with LANGS in src/core/i18n.js\n' +
        `      index.html: ${actualLangs?.join(', ')}\n` +
        `      i18n.js:    ${[...i18nLangs].sort().join(', ')}`,
    );
  }

  // The mount-point rule itself: a folder URL is the mount, a route URL is not.
  const detectBase = new Function('window', 'document', inline[1]);
  const probe = (pathname) => {
    let href = null;
    const doc = {
      createElement: () => {
        const el = { setAttribute: (_, value) => (el.value = value) };
        return el;
      },
      head: { appendChild: (el) => (href = el.value) },
    };
    detectBase({ location: { pathname } }, doc);
    return href;
  };

  const mounts = ['/', '/v2/', '/preview/site/'];
  for (const mount of mounts) {
    const urls = [
      mount,
      `${mount}index.html`,
      `${mount}404.html`,
      ...site.ROUTES.filter((r) => r.slug).flatMap((r) => [
        `${mount}${r.slug}`,
        `${mount}en/${r.slug}`,
      ]),
      `${mount}en/`,
    ];
    for (const path of urls) {
      const detected = probe(path);
      if (detected !== mount) {
        note(`mount detection: ${path} resolved to "${detected}", expected "${mount}"`);
      }
    }
  }

  // The inline script is authorised in nginx.conf by its sha256; a changed
  // script with a stale hash would be blocked and the page would stay blank.
  const hash = `sha256-${createHash('sha256').update(inline[1], 'utf8').digest('base64')}`;
  const nginxConf = readFileSync(join(ROOT, 'nginx.conf'), 'utf8');
  if (!nginxConf.includes(hash)) {
    note(`nginx.conf CSP hash is stale. Replace it with:\n      '${hash}'`);
  }

  if (readFileSync(join(ROOT, '404.html'), 'utf8') !== indexHtml) {
    note('404.html is no longer a copy of index.html — run: cp index.html 404.html');
  }
}

/* == 3. Rendering ========================================================= */

const i18n = await load('src/core/i18n.js');
const { pages } = await load('src/pages/index.js');
const { createHeader } = await load('src/components/site-header.js');
const { createFooter } = await load('src/components/site-footer.js');

const rendered = [];

for (const lang of i18n.LANGS) {
  i18n.setLang(lang);
  const t = i18n.t();

  for (const route of site.ROUTES) {
    try {
      const html = serialize(await pages[route.page]({ route, lang, t }));

      if (!/<h1[^>]*>/.test(html)) note(`${lang}/${route.id}: page has no <h1>`);
      const suspect = html.match(/.{0,50}(undefined|\[object Object\]|NaN).{0,50}/);
      if (suspect) note(`${lang}/${route.id}: suspicious output near "${suspect[0]}"`);

      rendered.push(`  ${lang}/${route.id || '(home)'} — ${html.length} bytes`);
    } catch (error) {
      note(`${lang}/${route.id}: render failed — ${error.message}`);
    }
  }

  try {
    createHeader(document.getElementById('site-header')).update({ routeId: 'home', lang, t });
    createFooter(document.getElementById('site-footer')).update({ routeId: 'home', lang, t });
  } catch (error) {
    note(`${lang}: header/footer failed to render — ${error.message}`);
  }
}

/* == Report =============================================================== */

console.log(`modules      ${files.length}`);
console.log(`pages        ${dePages.length} per language`);
console.log(`images       ${images.size} referenced`);
console.log(`PDFs         ${docs.size} referenced`);
console.log(`references   ${references.length} entries`);
console.log(`block types  ${BLOCK_TYPES.join(', ')}`);
console.log(`\nrendered ${rendered.length} pages:\n${rendered.join('\n')}`);

if (problems.length) {
  console.log(`\n${problems.length} problem(s):`);
  for (const problem of problems) console.log(`  - ${problem}`);
  process.exit(1);
}

console.log('\nOK — no problems found.');
