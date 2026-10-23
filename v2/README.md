# LUXbell — Website v2

Rebuilt website for **Luxbell Bauelemente Handels GmbH** (Fenster, Türen, Sonnenschutz).

Plain HTML, CSS and JavaScript. **No build step, no npm, no Python, no framework.** What is in this
folder is exactly what the browser receives, so deploying means copying these files to any web host.

German and English, clean URLs, and a content model where adding a paragraph never means touching code.

---

## Quick start

The site uses ES modules, so it has to be served over HTTP. **Opening `index.html` by double-clicking
it does not work** — browsers block modules on `file://`. Use any static server:

```bash
# Node — zero dependencies, handles deep links
node tools/serve.mjs               # → http://localhost:8080

# Docker
docker compose up                  # → http://localhost:8080
```

Serve from **this** folder, or from a parent folder and open the subpath (e.g.
`http://localhost:8000/v2/`) — the site detects where it is mounted either way.

### Why a plain file server is not enough

The site uses clean URLs, so `/kontakt` is a route, not a file. The server has to answer paths that
do not exist on disk with `index.html` — the "SPA fallback". Without it, clicking a link works
(the browser never asks the server) but **reloading that URL returns 404**.

`node tools/serve.mjs`, `docker compose up` and the production nginx all do this.
`python3 -m http.server` and VS Code Live Server do **not** — with those, start at the folder root and
navigate by clicking. See [DEPLOY.md](DEPLOY.md) for the one-line rule on nginx, Apache and Netlify.

Edits are picked up on refresh — there is nothing to rebuild.

---

## What lives where

```
v2/
├── index.html            page shell: <base>, <head>, three mount points, one <script>
├── 404.html              copy of index.html, for hosts that have no rewrite rules
├── _redirects            SPA fallback for Netlify / Cloudflare Pages
├── robots.txt            ← edit the host before going live
├── sitemap.xml           ← edit the host before going live
│
├── assets/
│   ├── images/           photos, banners, logo
│   ├── docs/             PDFs
│   ├── fonts/            Corbert (the original site's typeface)
│   └── data/
│       └── references.json      ← the Referenzen table, single source of truth
│
├── styles/
│   ├── main.css          imports the files below, in order — no rules of its own
│   ├── tokens.css        every colour, size, radius, shadow and duration
│   ├── reset.css, typography.css, layout.css
│   └── components/       one file per component, matching src/components/
│
├── src/
│   ├── main.js           entry point: header + footer + router, and nothing else
│   ├── core/             dom, paths, router, i18n, head, reveal
│   ├── components/       one file per visual component, each returns a DOM node
│   ├── blocks/
│   │   └── render-block.js       maps a block `type` to the component that draws it
│   ├── pages/            content-page (8 routes), references, status pages
│   └── content/
│       ├── site.js       addresses, legal data, routes, navigation order
│       ├── de.js         ← all German text
│       └── en.js         ← all English text
│
├── tools/
│   ├── serve.mjs         local dev server with the SPA fallback (node, no deps)
│   └── check.mjs         verifies content and renders every page (node, no deps)
├── Dockerfile            standalone container
├── nginx.conf            standalone web-server config
├── docker-compose.yml    local preview
└── DEPLOY.md             how to publish
```

The rule the whole project follows: **`content/` holds text, `components/` holds markup,
`styles/` holds appearance, `core/` holds mechanics.** No file reaches across those lines.

---

## Changing text

All text is in **`src/content/de.js`** and **`src/content/en.js`**. Change the string, save, refresh.

Nothing has to be escaped: `&`, `<`, `"` and quotes are inserted as text, never as HTML, so they cannot
break the page.

Every page has the same shape:

```js
'holz-produkte': {
  title:       'HOLZ Fenster',              // headline and browser tab
  description: 'Holzfenster von WKF …',     // Google and social previews
  hero: {
    image:    'Holz-Banner.png',            // file in assets/images/
    kicker:   'Produkte',                   // small label above the title
    headline: 'HOLZ Fenster',
    lead:     'Holz ist einer der …',
  },
  blocks: [ … ],                            // the page content, top to bottom
}
```

> **Keep `de.js` and `en.js` in step.** They must contain the same pages with the same blocks in the
> same order. `node tools/check.mjs` verifies this for you.

---

## Blocks

A page's `blocks` array is its content. Each entry has a `type`, and that type decides which component
draws it. To add a paragraph, add a block — no code changes.

Every block also accepts two optional keys:

| Key | Values | Effect |
|---|---|---|
| `section` | `plain`, `sand`, `alt`, `inverse` | background of the band |
| `width` | `narrow` | narrower, more readable column |
| `id` | any name | makes the block an anchor target, e.g. `id: 'produkte'` |

| `type` | What it renders | Main keys |
|---|---|---|
| `heading` | kicker + heading + intro, nothing else | `kicker`, `title`, `intro`, `align` |
| `prose` | one or more paragraphs | `text: ['…', '…']`, `align` |
| `list` | a bulleted list | `title`, `items: ['…']` |
| `image` | a single picture | `src`, `alt`, `caption`, `wide` |
| `gallery` | pictures side by side | `items: [{ src, alt }]` |
| `split` | picture beside text | `image`, `alt`, `side: 'left'\|'right'`, `heading`, `text: []`, `pdf`, `actions` |
| `cards` | linked cards with pictures | `items: [{ route, image, title, text }]` |
| `features` | plain text cards | `items: [{ title, text, sub }]` |
| `stats` | the figures band | `items: [{ value, label }]` |
| `products` | product card with a spec list | `items: [{ name, image, pdf, features: [] }]` |
| `downloads` | PDF download cards | `items: [{ label, file, size, note }]` |
| `accordion` | expand/collapse sections | `items: [{ title, text: [], list: [], open }]` |
| `contact` | phone / email / address cards | – (reads `site.js`) |
| `legal` | the legal identifiers strip | – (reads `site.js`) |
| `imprint` | the imprint page body | `mediaOwnerHeading`, `detailsHeading`, `privacyHeading`, … |
| `cta` | the closing call-to-action band | `title`, `text`, `actions` |

An **action** (in `actions`, or a card's link) looks like:

```js
{ label: 'Kontakt aufnehmen', route: 'kontakt',   variant: 'primary' }
{ label: 'Produkte ansehen',  anchor: 'produkte', variant: 'primary' }   // a block on the same page
{ label: 'Flyer',             href: 'assets/docs/Flyer_IDEAL5000.pdf', external: true }
```

`variant` is `primary` (gold), `secondary` (outlined), `ghost` (for use on photos) or `quiet` (text only).

### Adding a new block type

1. Write a component in `src/components/` that takes `(block, { t, lang })` and returns a DOM node.
2. Add one line to the table in `src/blocks/render-block.js`.
3. Add its styles in `styles/components/` and one `@import` in `styles/main.css`.

---

## Adding a page

1. **`src/content/site.js`** — add an entry to `ROUTES`:
   ```js
   { id: 'neue-seite', slug: 'neue-seite', page: 'content' },
   ```
   and, if it belongs in the menu, to `NAV` (or `FOOTER_NAV`).
2. **`src/content/de.js` and `en.js`** — add a `nav['neue-seite']` label and a `pages['neue-seite']`
   entry with `title`, `description`, `hero` and `blocks`.
3. Add the URL to `sitemap.xml`.

There is no step 4 — no renderer, router or navigation code has to change.

---

## Images and PDFs

- Images go in `assets/images/`; content files name the file only: `image: 'Holz-Banner.png'`.
- PDFs go in `assets/docs/`; content files name the file only: `file: 'Flyer_IDEAL5000.pdf'`.
- Download cards show a `size` string from the content file. When you replace a PDF, update that
  string — check the real size with `ls -lh assets/docs/`.

> **`Haustuerenkatalog.pdf` is 23.6 MB**, which is the largest single thing in the project and a slow
> download on a phone. If you would rather host it elsewhere, change the block in `de.js`/`en.js` from
> `{ label: …, file: 'Haustuerenkatalog.pdf', size: … }` to an action with an absolute
> `href` and `external: true`, and delete the file from `assets/docs/`.

---

## The Referenzen table

The Referenzen page reads **`assets/data/references.json`** directly. That file is the only copy of the
data — edit it and refresh, there is nothing to regenerate.

```json
{
  "auftraggeber": "Swietelsky Bau GesmbH",
  "bauvorhaben": "1210 Wien\nAm Bisamberg 77-79",
  "ausfuehrungsart": "Neubau",
  "beschreibung": "Kunststofffenster mit Aluschale"
}
```

`\n` inside a value becomes a line break. The page builds its filter dropdown from whatever
`ausfuehrungsart` values it finds, and shows a table on wide screens and stacked cards on phones.

---

## Languages

German is served without a prefix, English under `/en/`:

| | German | English |
|---|---|---|
| Home | `/` | `/en/` |
| Kontakt | `/kontakt` | `/en/kontakt` |

The language comes from the URL, so every link is shareable and each language can be indexed
separately. The DE/EN switch is a real link to the same page in the other language.

**Adding a third language:** copy `de.js` to e.g. `fr.js`, translate it, then register it in
`src/core/i18n.js` (`LANGS` and `DICTIONARIES`). Nothing else changes.

---

## Design

The three brand colours and the Corbert typeface are carried over from the original site; everything
else in `styles/tokens.css` is derived from them.

| Token | Value | Used for |
|---|---|---|
| `--c-sand-300` | `#C9C2B3` | the original beige |
| `--c-gold-500` | `#D4BE8D` | accent, links, primary buttons |
| `--c-ink-800` | `#363D4C` | headings, navigation, footer |

Change a token and it propagates everywhere. No colour, radius, shadow or duration is hard-coded
anywhere else in the stylesheet.

---

## Where it is mounted

**Nothing to configure.** The site works out where it lives, in the browser, on every page load.

The first thing in `index.html` is a small script that reads the current path and inserts the right
`<base href>` before anything else is parsed. Every other URL in the project — stylesheet, modules,
images, PDFs, generated links — is written relative and resolves against it.

So the same files work unchanged at:

| Mounted at | Example URL | Detected base |
|---|---|---|
| a web root | `/en/kontakt` | `/` |
| the preview subfolder | `/v2/en/kontakt` | `/v2/` |
| any other subfolder | `/preview/site/kontakt` | `/preview/site/` |

The rule it uses: a URL ending in `/` is a folder and therefore already the mount point; a URL that
does not is a route, so the last segment (and a language prefix in front of it) belong to the route.
`node tools/check.mjs` proves this for every route at three different mount points.

The only thing it needs to know in advance is the list of language codes, which is why `LANGS` is
repeated in that script — the check script fails if that copy ever drifts from
`src/core/i18n.js`.

> **Opening `index.html` directly from disk (`file://`) does not work** — browsers refuse to load ES
> modules over `file://` for security reasons. This is not specific to this site; use one of the
> local preview commands above.

---

## Checking your work

```bash
node tools/check.mjs
```

Optional and node-only — the site itself needs nothing. It verifies that all imports resolve, that the
two languages match, that every image, PDF and internal link actually exists, and that all 22 pages
(11 routes × 2 languages) still render.

---

## Deploying

See **[DEPLOY.md](DEPLOY.md)**: the Cloud Run preview that serves the current site and this one side by
side, and the hand-off to a normal hosting provider.
