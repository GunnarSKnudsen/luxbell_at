# LUXbell Website

Modernized static website for LUXbell Bauelemente Handels GmbH (Fenster, Türen, Sonnenschutz).

## Structure

```
luxbell_website/
├── index.html          # Single entry page
├── css/
│   └── styles.css      # All styles (colors, layout, components)
├── js/
│   └── app.js          # Navigation and content rendering (no need to edit for text changes)
├── content/
│   └── content.js      # All editable text and page content → edit this to update copy
├── images/             # All images (logos, banners, icons, references)
└── README.md
```

## Updating text

**All page text lives in `content/content.js`.**  
Edit the `LUXBELL_CONTENT` object:

- **Contact/legal:** `contact`, `legal`, `impressum`
- **Navigation:** `nav` (add/remove/reorder menu items)
- **Page content:** `pages.home`, `pages['holz-produkte']`, etc.

Keep the same property names and structure; only change the string values.  
After saving, refresh the browser to see changes.

## Adding PDFs (e.g. Pflege & Wartung)

1. Put PDF files in a folder, e.g. `docs/`.
2. In `content/content.js`, under `pages['pflege-wartung'].downloads`, set each `url` to the path, e.g. `url: 'docs/PVC_Pflege_und_Wartungsanleitung.pdf'`.

## References page

The Referenzen page is filled from **`references.json`** (extracted table data). The app loads **`content/references-data.js`**, which is generated from that JSON. After editing `references.json`, regenerate the data file:

```bash
python3 -c "
import json
with open('references.json') as f: r = json.load(f)
out = [{'auftraggeber': x['auftraggeber'], 'bauvorhaben': x['bauvorhaben'], 'ausfuehrungsart': x.get('ausfuehrungsart',''), 'beschreibung': x['beschreibung']} for x in r]
with open('content/references-data.js', 'w') as f:
    f.write('/* Extracted reference data - source: references.json */\nconst LUXBELL_REFERENCES = ')
    f.write(json.dumps(out, indent=2, ensure_ascii=False))
    f.write(';\n')
"
```

## Running locally

Open `index.html` in a browser, or serve the folder with any static server, e.g.:

```bash
# Python 3
python3 -m http.server 8000

# Node (npx)
npx serve .
```

Then open `http://localhost:8000`.

## Color scheme (from original site)

- Background: `#C9C2B3` (beige)
- Accent/links: `#d4be8d` (gold)
- Dark: `#363D4C` (nav/headings)

Defined as CSS variables in `css/styles.css` for easy tweaking.
