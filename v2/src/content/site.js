/**
 * Language-neutral site configuration: facts that are identical in every
 * language (address, legal identifiers) and the structure of the site
 * (routes, navigation order).
 *
 * Translatable text lives in `de.js` / `en.js` — never here.
 */

export const CONTACT = {
  phone: '+43 676 88 58 38 88',
  phoneHref: 'tel:+436768858388',
  address: 'Prießnitzgasse 6/1/3',
  postalCode: '2340',
  city: 'Mödling',
  country: 'Österreich',
  email: 'office@luxbell.at',
  website: 'www.luxbell.at',
};

export const LEGAL = {
  companyFull: 'Luxbell Bauelemente Handels GmbH',
  tradeRegister: '245939a',
  vatId: 'ATU57764501',
  gisa: '10118207',
  authority: 'Bezirkshauptmannschaft Mödling',
  wkoLink:
    'https://firmen.wko.at/Web/DetailsKontakt.aspx?FirmaID=c700d5fe-99e5-43b3-845e-33ee6578b696',
  foundedYear: 2002,
};

/**
 * The route table.
 *
 * `id`   — stable key; also the key used in the per-language `pages` object
 *          and in the `nav` label dictionary.
 * `slug` — URL segment, shared across languages (English is distinguished by
 *          an `/en/` prefix, not by translated slugs, which keeps link
 *          rewriting between languages trivial).
 * `page` — which page module renders it (see `src/pages/index.js`).
 *
 * Adding a page = one entry here + one entry per language file. No renderer
 * code changes.
 */
export const ROUTES = [
  { id: 'home', slug: '', page: 'content' },
  { id: 'holz-produkte', slug: 'holz-produkte', page: 'content' },
  { id: 'holz-alu-produkte', slug: 'holz-alu-produkte', page: 'content' },
  { id: 'kunststoff-produkte', slug: 'kunststoff-produkte', page: 'content' },
  { id: 'sonnenschutz', slug: 'sonnenschutz', page: 'content' },
  { id: 'haustueren', slug: 'haustueren', page: 'content' },
  { id: 'pflege-wartung', slug: 'pflege-wartung', page: 'content' },
  { id: 'ueber-uns', slug: 'ueber-uns', page: 'content' },
  { id: 'referenzen', slug: 'referenzen', page: 'references' },
  { id: 'kontakt', slug: 'kontakt', page: 'content' },
  { id: 'impressum', slug: 'impressum', page: 'content' },
];

/**
 * Main navigation. An entry with `children` renders as a dropdown on desktop
 * and as an expanded group inside the mobile drawer; its `id` is looked up in
 * the `navGroups` dictionary rather than in `pages`.
 */
export const NAV = [
  { id: 'home' },
  {
    id: 'produkte',
    children: [
      'holz-produkte',
      'holz-alu-produkte',
      'kunststoff-produkte',
      'sonnenschutz',
      'haustueren',
    ],
  },
  { id: 'pflege-wartung' },
  { id: 'referenzen' },
  { id: 'ueber-uns' },
  { id: 'kontakt' },
];

/** Footer link columns, by heading key + route ids. */
export const FOOTER_NAV = [
  {
    id: 'produkte',
    children: [
      'holz-produkte',
      'holz-alu-produkte',
      'kunststoff-produkte',
      'sonnenschutz',
      'haustueren',
    ],
  },
  {
    id: 'unternehmen',
    children: ['ueber-uns', 'referenzen', 'pflege-wartung', 'kontakt', 'impressum'],
  },
];

/** Where the References page loads its data from. */
export const REFERENCES_DATA = 'data/references.json';

/** Image used for social previews and as the default hero. */
export const SOCIAL_IMAGE = 'Bau-Banner.png';

const ROUTES_BY_ID = new Map(ROUTES.map((route) => [route.id, route]));
const ROUTES_BY_SLUG = new Map(ROUTES.map((route) => [route.slug, route]));

export function routeById(id) {
  return ROUTES_BY_ID.get(id) ?? null;
}

export function routeBySlug(slug) {
  return ROUTES_BY_SLUG.get(slug) ?? null;
}
