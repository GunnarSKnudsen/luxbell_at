* ~~References is quite bad. Should not be images, but instead extract the information~~ → Done: Referenzen is now a structured list (year, title, description) in content.js; no large images.
* ~~Toggle for multiple languages~~ → Done: DE/EN toggle in header; content in content/content.js under LUXBELL_CONTENT.de and LUXBELL_CONTENT.en.
* ~~Luxbell text is floating (and unneccesary) at the top of the page in desktop view~~ → Done: .logo-text is hidden on desktop (min-width: 900px).
* ~~Pflege und wartung: Missing PDFs. Would scrape them, and include the links as well. Possibly also render a page with them?~~ → Done: PDFs scraped to docs/; download links in content.js point to docs/…; page already renders with links and text.
* Haustüren: Missing a pdf. Do we want to keep the PDF? → No PDF found on original site; left as text-only. Add later if needed.


Questions for Mimi:
* Overall feedback?
* Where do you want the logo placed?
* Any additional languages?
* Will you be adding/removing pages/images/text?
* Overall; go through and let me know if the structure is okay
* Haustüren - Empty? Broken on old website.
* Referenzes is still missing! I need to add that back.
* Referenzes: Mobile view - overflow
* missing PDFs.
* Overall do we want pdfs?
* the housedoors pdf is expensive!

## Client feedback 2026-10-23 (new company: LUXBELL Fenster und Türen Handels GmbH)

Done:
* Address, FN, UID, GISA, new Steuernummer, BH St. Pölten (DE + EN); Impressum web → www.luxbell-fenster.at
* Über uns: new company name, "seit 2026"
* Kunststoff: IDEAL 5000 removed (card, images, flyer); IDEAL NEO added; IDEAL 8000 kept; layout now same image + text flow as Holz / Holz-Alu
* Haustüren: old catalogue removed, replaced by docs/Katalog_Alutueren_und_Zubehoer.pdf
* New logo with "Fenster und Türen Handels GmbH" (images/luxbell_logo.svg); faint logo watermark top-right on every page
* Logo files for the client in branding/ (SVG, PDF, PNG; plus variant with "LUXBELL" spelling)

Round 2 (client answers):
* Website watermark removed again – the logo watermark was meant for the PDFs, not the site
* Haustüren catalogue branded with the logo on every page (original kept in docs-src/, see README)
* Logo spelling: LUXBELL (branding/luxbell_logo.*, images/luxbell_logo.svg)
* Phone number confirmed unchanged
* IDEAL 8000 bullet points added (from the fensterversand.at product page)
* New WKO link in the Impressum
* Datenschutzerklärung page added (DE/EN, nav + link from Impressum) – draft, have the client check it

Open:
* Should the Pflege & Wartung PDFs (aluplast / Schlotterer / WKF) also get the logo? They are manufacturer documents with their own branding
* An additional PDF was mentioned but not received yet
* Email forwarding office@luxbell-fenster.at → office@luxbell.at: set up in Hetzner webmail, client to test
