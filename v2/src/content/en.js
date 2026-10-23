/**
 * English copy.
 *
 * ▸ Mirrors the structure of `de.js` exactly — same page ids, same block
 *   order. If you add a page or a block here, add it there too (and vice
 *   versa), otherwise one language will be missing content.
 *
 * ▸ Only text changes here, never code. See README.md, section "Blocks",
 *   for what each block type accepts.
 */

export default {
  lang: 'en',

  siteName: 'LUXbell',
  siteTagline: 'Windows · Doors · Sun Protection',
  siteDescription:
    'LUXbell Bauelemente Handels GmbH – windows, doors and sun protection. Project business with construction firms, housing cooperatives and architects.',

  /* --- Navigation ------------------------------------------------------- */

  nav: {
    home: 'Home',
    'holz-produkte': 'Wood Products',
    'holz-alu-produkte': 'Wood-Alu Products',
    'kunststoff-produkte': 'PVC Products',
    sonnenschutz: 'Sun Protection',
    haustueren: 'Entrance Doors',
    'pflege-wartung': 'Care & Maintenance',
    'ueber-uns': 'About Us',
    referenzen: 'References',
    kontakt: 'Contact',
    impressum: 'Imprint',
  },

  navGroups: {
    produkte: 'Products',
    unternehmen: 'Company',
  },

  /* --- Interface strings ------------------------------------------------- */

  ui: {
    skipToContent: 'Skip to content',
    mainNav: 'Main navigation',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    langSwitchTo: 'Auf Deutsch wechseln',
    langSwitchLabel: 'DE',
    callUs: 'Call us',
    emailUs: 'Send an email',
    phoneLabel: 'Phone',
    emailLabel: 'Email',
    addressLabel: 'Address',
    downloadPdf: 'Download PDF',
    infoFlyer: 'Info / flyer',
    backHome: 'Back to home',
  },

  footer: {
    tagline:
      'For years we have been working in the windows and doors industry with precision, technical sensitivity and extensive experience – with enthusiasm and motivation.',
    contactHeading: 'Contact',
    legalHeading: 'Legal',
    copyright: 'All rights reserved.',
    labels: {
      tradeRegister: 'Company register',
      vatId: 'VAT ID',
      gisa: 'GISA',
      authority: 'Authority',
    },
  },

  /* --- References page (table + filter) ---------------------------------- */

  references: {
    searchLabel: 'Search references',
    searchPlaceholder: 'Client, location or type …',
    filterLabel: 'Type',
    filterAll: 'All types',
    resultsOne: '1 reference',
    resultsMany: '{n} references',
    empty: 'No references found. Try adjusting the search or filter.',
    loadError: 'The references could not be loaded. Please reload the page.',
    columns: {
      auftraggeber: 'Client',
      bauvorhaben: 'Project',
      ausfuehrungsart: 'Type',
      beschreibung: 'Description',
    },
  },

  notFound: {
    title: 'Page not found',
    text: 'The page you requested does not exist (any more). The home page may help.',
  },

  errorPage: {
    title: 'Something went wrong',
    text: 'This page could not be loaded. Please reload and try again.',
  },

  /* ======================================================================
     PAGES
     ====================================================================== */

  pages: {
    /* ------------------------------------------------------------------ */
    home: {
      title: 'Windows · Doors · Sun Protection',
      metaTitle: 'LUXbell – Windows, Doors, Sun Protection',
      description:
        'LUXbell Bauelemente Handels GmbH – windows, doors and sun protection. Project business with construction firms, housing cooperatives and architects.',
      hero: {
        image: 'Bau-Banner.png',
        kicker: 'Bauelemente Handels GmbH',
        headline: 'Windows · Doors · Sun Protection',
        lead: 'Technical expertise, solid value for money and short lead times – in the project business since 2002.',
        size: 'large',
        actions: [
          { label: 'View products', anchor: 'produkte', variant: 'primary' },
          { label: 'Get in touch', route: 'kontakt', variant: 'ghost' },
        ],
      },
      blocks: [
        {
          type: 'heading',
          align: 'center',
          width: 'narrow',
          kicker: 'Welcome',
          title: 'Your partner on site',
          intro:
            'We focus on the project business for windows and doors, working with construction firms, housing cooperatives and architects. Technical expertise, solid value for money and short lead times make us an attractive partner for those executing construction projects.',
        },
        {
          type: 'stats',
          section: 'plain',
          items: [
            { value: 'since 2002', label: 'in business' },
            { value: '30+', label: 'years of experience in the team' },
            { value: '40+', label: 'documented project references' },
          ],
        },
        {
          type: 'cards',
          id: 'produkte',
          section: 'sand',
          kicker: 'Range',
          title: 'Our products',
          items: [
            {
              route: 'holz-produkte',
              image: 'Holz-Banner.png',
              title: 'Wood windows',
              text: 'Nature and technology as one – high-quality materials and a long service life.',
            },
            {
              route: 'holz-alu-produkte',
              image: 'Alu-Banner.png',
              title: 'Wood-alu windows',
              text: 'The beauty of wood inside, the durability of aluminium outside.',
            },
            {
              route: 'kunststoff-produkte',
              image: 'Kunst-Banner.png',
              title: 'PVC windows',
              text: 'Resource-efficient, energy-saving and with excellent sound insulation.',
            },
            {
              route: 'sonnenschutz',
              image: 'Sonne-Banner.png',
              title: 'Sun protection',
              text: 'Roller shutters, external blinds, shutters, indoor blinds and insect screens.',
            },
            {
              route: 'haustueren',
              image: 'Referenz-Banner.png',
              title: 'Entrance doors',
              text: 'The calling card of your house – design and modern technology.',
            },
          ],
        },
        {
          type: 'split',
          side: 'left',
          image: 'Uns-Banner.png',
          alt: 'The LUXbell team planning a project',
          kicker: 'About us',
          heading: 'A team of window enthusiasts',
          text: [
            'Luxbell Bauelemente Handels GmbH has been in business since 2002. We focus on the project business for windows and doors with construction firms, housing cooperatives and architects.',
            'For years we have been working in the windows and doors industry with precision, technical sensitivity and extensive experience – with enthusiasm and motivation.',
          ],
          actions: [{ label: 'More about us', route: 'ueber-uns', variant: 'secondary' }],
        },
        {
          type: 'cta',
          title: 'Feel free to contact us with your requirements.',
          text: 'We reply quickly – by phone or email.',
        },
      ],
    },

    /* ------------------------------------------------------------------ */
    'holz-produkte': {
      title: 'WOOD Windows',
      description:
        'Wood windows by WKF from the Pielachtal – nature and technology in one, with a long service life and minimal maintenance.',
      hero: {
        image: 'Holz-Banner.png',
        kicker: 'Products',
        headline: 'WOOD Windows',
        lead: 'Wood is one of the most important and sustainable materials that nature provides.',
      },
      blocks: [
        {
          type: 'prose',
          width: 'narrow',
          text: [
            'Wood windows combine nature and technology in a single unit. Using the finest materials and strict quality standards achieves this harmony. Modern surface technology ensures long life and lasting beauty with minimal maintenance.',
          ],
        },
        {
          type: 'split',
          section: 'sand',
          side: 'right',
          image: 'Exklusiv78_Holz.png',
          alt: 'Exklusiv 78 wood window cross-section',
          heading: 'WKF from the Pielachtal',
          text: [
            'Our wood windows and doors come exclusively from the WKF brand in the Pielachtal. As a window dealer we have found no other partner in Austria that manufactures such high-quality, faultlessly finished windows.',
            'For example, WKF windows and doors use glass beads made and fixed invisibly in the frame – a mark of quality that makes the whole product more stable.',
          ],
        },
        {
          type: 'cta',
          title: 'Questions about wood windows?',
          text: 'Feel free to contact us with your requirements.',
        },
      ],
    },

    /* ------------------------------------------------------------------ */
    'holz-alu-produkte': {
      title: 'WOOD-ALU Windows',
      description:
        'Wood/aluminium windows combine the insulation and comfort of wood with the weather resistance of aluminium.',
      hero: {
        image: 'Alu-Banner.png',
        kicker: 'Products',
        headline: 'WOOD-ALU Windows',
        lead: 'Wood/aluminium windows combine the advantages of both materials.',
      },
      blocks: [
        {
          type: 'prose',
          width: 'narrow',
          text: [
            'The visual appeal and stability of wood, with high thermal and acoustic insulation, combined with the proven durability of aluminium in a refined finish. High-quality materials and modern technology ensure longevity and safety for generations.',
          ],
        },
        {
          type: 'gallery',
          section: 'sand',
          items: [
            { src: 'Aluline_alles.png', alt: 'Aluline profile overview' },
            { src: 'Eline_alles.png', alt: 'Eline profile overview' },
          ],
        },
        {
          type: 'prose',
          width: 'narrow',
          text: [
            'Our wood-alu products combine the benefits of wood windows with the weather resistance of aluminium. You get a high-quality natural product with all-weather protection.',
          ],
        },
        {
          type: 'split',
          side: 'left',
          image: 'HolzAlu_Fenster.png',
          alt: 'Construction of a wood-alu window',
          heading: 'Robust outside, comfortable inside',
          text: [
            'Robust aluminium profiles on the outside of windows resist wind, rain and snow and give the window an individual design. Wood on the inside creates a comfortable atmosphere and a healthy indoor climate.',
            'Innovative sealing and mounting systems provide high thermal performance and prevent cold and heat bridges.',
          ],
        },
        {
          type: 'prose',
          section: 'sand',
          width: 'narrow',
          align: 'center',
          text: [
            'A wide range of colours and forms offers maximum freedom to design your windows with different aluminium cladding and glass bead options.',
          ],
        },
        {
          type: 'cta',
          title: 'Interested in wood-alu windows?',
          text: 'Feel free to contact us with your requirements.',
        },
      ],
    },

    /* ------------------------------------------------------------------ */
    'kunststoff-produkte': {
      title: 'PVC Windows',
      description:
        'PVC windows by aluplast – energy-saving, with excellent sound insulation and optional aluminium cladding.',
      hero: {
        image: 'Kunst-Banner.png',
        kicker: 'Products',
        headline: 'PVC Windows',
        lead: 'PVC windows are ideal for resource-efficient, energy-saving architecture and offer excellent sound insulation.',
      },
      blocks: [
        {
          type: 'prose',
          width: 'narrow',
          text: [
            'PVC windows offer an attractive modern design, high-quality manufacturing technology and excellent thermal performance.',
          ],
        },
        {
          type: 'products',
          section: 'sand',
          items: [
            {
              name: 'Aluplast IDEAL 5000',
              image: 'IDEAL5000_Fenster_quadratisch.jpg',
              alt: 'Aluplast IDEAL 5000 window',
              pdf: 'Flyer_IDEAL5000.pdf',
              features: [
                'Uf value 1.2 W/m²K',
                'Central sealing system with three sealing planes for improved burglar resistance',
                'Glazing thickness up to 41 mm',
                'Design variety (Classic-line fv | Classic-line hfv | Soft-line hfv | Round-line hfv)',
                'RC2 (WK2): certified burglar resistance',
                'Concealed drainage possible',
                'Excellent sound insulation up to class IV',
                'Available in many decor variants',
                'Aluminium cladding aluskin® available',
              ],
            },
          ],
        },
        {
          type: 'prose',
          width: 'narrow',
          text: [
            'The durable PVC profiles offer long-term resistance to weather and guarantee reliability and peace of mind for many years. Products at the highest technical level.',
          ],
        },
        {
          type: 'gallery',
          items: [
            { src: '8000.jpg', alt: 'IDEAL 8000 window system' },
            { src: '5000.jpg', alt: 'IDEAL 5000 window system' },
          ],
        },
        {
          type: 'split',
          section: 'sand',
          side: 'right',
          image: 'pvc-alu_klein.jpg',
          alt: 'PVC window with aluminium cladding',
          pdf: 'Flyer_IDEAL5000.pdf',
          heading: 'Smart technology – elegant design',
          text: [
            'The look of aluminium is very much on trend. Your windows can be upgraded too with aluplast aluminium cladding. The combination brings together the outstanding thermal performance of PVC windows with a modern aluminium look.',
            'Coating of the aluminium cladding in all RAL colours is possible.',
          ],
        },
        {
          type: 'prose',
          width: 'narrow',
          text: [
            'Specially developed multi-chamber profiles give PVC windows excellent thermal and sound insulation values, creating ideal conditions for a comfortable indoor climate and lower heating costs.',
          ],
        },
        {
          type: 'image',
          src: 'Banner_Alu_Kunststoff_900.png',
          alt: 'Aluminium and PVC compared',
          wide: true,
        },
        {
          type: 'cta',
          title: 'Questions about PVC windows?',
          text: 'Feel free to contact us with your requirements.',
        },
      ],
    },

    /* ------------------------------------------------------------------ */
    sonnenschutz: {
      title: 'Sun Protection',
      description:
        'Roller shutters, external venetian blinds, shutters, indoor blinds and insect screens – sun protection inside and out.',
      hero: {
        image: 'Sonne-Banner.png',
        kicker: 'Products',
        headline: 'Sun Protection',
        lead: 'Control the light, keep the heat out, gain privacy – inside and out.',
      },
      blocks: [
        {
          type: 'features',
          items: [
            {
              title: 'ROLLER SHUTTERS',
              text: 'Roller shutters give you similar light control to curtains and underline your interior style.',
              sub: 'They reduce daylight and avoid glare from the sun.',
            },
            {
              title: 'EXTERNAL VENETIAN BLINDS',
              text: 'External venetian blinds are installed outside. As they are more exposed to wind and weather than indoor blinds, they are usually track- or cable-guided.',
              sub: 'Our external blinds can remain extended in winds up to 25 m/s (Beaufort 10). A wind sensor retracts them automatically in stronger winds.',
            },
            {
              title: 'SHUTTERS',
              text: 'Emphasise the character of your home with aluminium or PVC shutters.',
              sub: 'Shutters (often called louvred shutters) control light entering the room and provide an attractive look and privacy.',
            },
            {
              title: 'INDOOR BLINDS',
              text: 'Indoor blinds allow precise control of light.',
              sub: 'Slats can be adjusted continuously to control the amount of light and provide glare protection, privacy and heat insulation.',
            },
            {
              title: 'INSECT SCREENS',
              text: 'Windows, doors, roof windows and light wells are popular entry points for insects.',
              sub: 'With the insect screens we offer, you can sleep with the window open in summer without mosquitoes and other pests indoors.',
            },
          ],
        },
        {
          type: 'cta',
          section: 'sand',
          title: 'Which sun protection suits your project?',
          text: 'Feel free to contact us with your requirements.',
        },
      ],
    },

    /* ------------------------------------------------------------------ */
    haustueren: {
      title: 'Entrance Doors',
      description:
        'Entrance doors with appealing design and modern technology – the calling card of your house.',
      hero: {
        image: 'Bau-Banner.png',
        kicker: 'Products',
        headline: 'Entrance Doors',
        lead: 'The calling card of your house.',
      },
      blocks: [
        {
          type: 'prose',
          width: 'narrow',
          align: 'center',
          text: ['Doors with appealing design and modern technology.'],
        },
        {
          type: 'downloads',
          section: 'sand',
          title: 'Catalogue',
          items: [
            {
              label: 'Entrance door catalogue',
              file: 'Haustuerenkatalog.pdf',
              size: '23.6 MB',
              note: 'Large download – best opened over Wi-Fi.',
            },
          ],
        },
        {
          type: 'cta',
          title: 'Looking for the right entrance door?',
          text: 'Feel free to contact us with your requirements.',
        },
      ],
    },

    /* ------------------------------------------------------------------ */
    'pflege-wartung': {
      title: 'Care & Maintenance',
      description:
        'Instructions for cleaning, maintaining and ventilating your windows, doors and roller shutters – including PDF downloads.',
      hero: {
        image: 'Wartungs-Banner.png',
        kicker: 'Service',
        headline: 'Care & Maintenance',
        lead: 'Instructions for cleaning, maintaining and ventilating your windows, doors and roller shutters',
      },
      blocks: [
        {
          type: 'downloads',
          title: 'Instructions to download',
          items: [
            {
              label: 'PVC window maintenance',
              file: 'PVC_Pflege_und_Wartungsanleitung.pdf',
              size: '95 KB',
            },
            {
              label: 'Wood window maintenance',
              file: 'WKF_Wartung_und_Pflege.pdf',
              size: '5.7 MB',
            },
            {
              label: 'Roller shutter maintenance',
              file: 'Schlotterer_Wartung_und_Pflege.pdf',
              size: '760 KB',
            },
          ],
        },
        {
          type: 'accordion',
          section: 'sand',
          title: 'Good to know',
          items: [
            {
              title: 'Maintenance',
              open: true,
              text: [
                'To keep tilt-turn hardware working correctly, the following maintenance should be carried out at least once a year:',
              ],
              list: [
                'Safety-relevant hardware should be checked regularly for wear.',
                'All moving parts should be lubricated with a drop of oil; lock points with acid-free grease or technical vaseline.',
                'Only use cleaning and care products that do not affect the corrosion protection of the hardware.',
              ],
            },
            {
              title: 'Ventilation and heating',
              text: [
                'Older windows were often leaky, allowing natural air exchange that improved comfort but increased heating costs. Modern windows are designed to reduce heating costs, draughts and noise. They are so well sealed that no natural air exchange occurs. The resulting moisture can be avoided simply by ventilating properly.',
                'If you ensure adequate air exchange, you can save on heating costs and maintain a healthy indoor climate with modern windows. Cross-ventilation (opening windows on opposite sides) is quick and effective, as a single open window is often not enough. Five minutes is enough for an air change. Short burst ventilation takes about 10 minutes. Trickle vents can also be fitted to support automatic air exchange – your window specialist can advise.',
              ],
            },
          ],
        },
      ],
    },

    /* ------------------------------------------------------------------ */
    'ueber-uns': {
      title: 'About Us',
      description:
        'Luxbell Bauelemente Handels GmbH has been in business since 2002 – a team of window enthusiasts with over 30 years of experience.',
      hero: {
        image: 'Uns-Banner.png',
        kicker: 'Company',
        headline: 'About Us',
        lead: 'A team of “window enthusiasts” – in the project business since 2002.',
      },
      blocks: [
        {
          type: 'prose',
          width: 'narrow',
          text: [
            'Luxbell Bauelemente Handels GmbH has been in business since 2002. We focus on the project business for windows and doors with construction firms, housing cooperatives and architects. Technical expertise, solid value for money and short lead times make us an attractive partner on site.',
            'We are a team of “window enthusiasts”; most of us have been in the window industry for over 30 years. So there is no shortage of experience and attention to detail.',
          ],
        },
        {
          type: 'stats',
          section: 'sand',
          items: [
            { value: 'since 2002', label: 'in business' },
            { value: '30+', label: 'years of experience in the team' },
            { value: '40+', label: 'documented project references' },
          ],
        },
        {
          type: 'contact',
          title: 'How to reach us',
        },
        {
          type: 'cta',
          section: 'sand',
          title: 'Feel free to contact us with your requirements.',
          text: 'For years we have been working in the windows and doors industry with precision, technical sensitivity and extensive experience – with enthusiasm and motivation.',
        },
      ],
    },

    /* ------------------------------------------------------------------ */
    referenzen: {
      title: 'References',
      description:
        'Selected project references from our windows and doors business in Vienna and the surrounding area.',
      hero: {
        image: 'Referenz-Banner.png',
        kicker: 'Company',
        headline: 'References',
        lead: 'Selected project references from our windows and doors business.',
      },
      blocks: [],
    },

    /* ------------------------------------------------------------------ */
    kontakt: {
      title: 'Contact',
      description:
        'LUXbell Bauelemente Handels GmbH, Prießnitzgasse 6/1/3, 2340 Mödling, Austria. Phone +43 676 88 58 38 88.',
      hero: {
        image: 'Uns-Banner.png',
        kicker: 'Contact',
        headline: 'Contact',
        lead: 'Feel free to contact us with your requirements.',
      },
      blocks: [
        {
          type: 'prose',
          width: 'narrow',
          align: 'center',
          text: [
            'For years we have been working in the windows and doors industry with precision, technical sensitivity and extensive experience. And with enthusiasm and motivation.',
          ],
        },
        {
          type: 'contact',
        },
        {
          type: 'legal',
          section: 'sand',
        },
      ],
    },

    /* ------------------------------------------------------------------ */
    impressum: {
      title: 'Imprint',
      description: 'Imprint and disclosure for Luxbell Bauelemente Handels GmbH.',
      hero: null,
      blocks: [
        {
          type: 'imprint',
          width: 'narrow',
          wkoLabel: 'WKO entry',
          mediaOwnerHeading: 'Media owner and publisher',
          detailsHeading: 'Company details',
          privacyHeading: 'Privacy',
          privacyText:
            'This website sets no cookies, uses no tracking or analytics services and loads no third-party content. No personal data is collected. If you contact us by email or phone, we use your details solely to answer your enquiry.',
          privacyNote:
            'Editorial note: add a complete, legally reviewed privacy policy here if required.',
        },
      ],
    },
  },
};
