/**
 * LUXbell Website Content (DE/EN)
 * Edit text here. Structure: LUXBELL_CONTENT[lang].*
 */
const LUXBELL_CONTENT = {
  de: {
    siteTitle: 'LUXbell - Fenster - Türen - Sonnenschutz',
    companyName: 'LUXbell',
    companySubtitle: 'Bauelemente Handels GmbH',

    contact: {
      phone: '+43 676 88 58 38 88',
      address: 'Prießnitzgasse 6/1/3',
      postalCode: '2340',
      city: 'Mödling',
      email: 'office@luxbell.at',
    },

    legal: {
      tradeRegister: 'Firmenbuch Nr: 245939a',
      vatId: 'ID-Nummer: ATU57764501',
      gisa: 'GISA Zahl: 10118207',
      authority: 'Bezirkshauptmannschaft Mödling',
    },

    nav: [
      { id: 'home', label: 'Home' },
      { id: 'holz-produkte', label: 'Holz Produkte' },
      { id: 'holz-alu-produkte', label: 'Holz-Alu Produkte' },
      { id: 'kunststoff-produkte', label: 'Kunststoff Produkte' },
      { id: 'sonnenschutz', label: 'Sonnenschutz' },
      { id: 'haustueren', label: 'Haustüren' },
      { id: 'pflege-wartung', label: 'Pflege & Wartung' },
      { id: 'ueber-uns', label: 'Über Uns' },
      { id: 'referenzen', label: 'Referenzen' },
      { id: 'kontakt', label: 'Kontakt' },
    ],

    pages: {
      home: {
        title: 'Fenster I Türen I Sonnenschutz',
        heroImage: 'Bau-Banner.png',
        intro: 'Unser Schwerpunkt liegt im Objektgeschäft von Fenstern und Türen, das wir mit Baufirmen, Genossenschaften und - oder Architekten abwickeln. Technisches Know-how, ein solides Preis Leistungsgefüge sowie rasche Durchführungszeiten lassen uns als Partner für den Ausführenden am Bau interessant sein.',
        cta: 'Sprechen Sie mich einfach unverbindlich mit Ihrem Anliegen an.',
        footer: 'Seit Jahren sind wir mit akribischer Genauigkeit, technischem Feingefühl und jeder Menge Erfahrung in der Fenster und Türen Branche tätig - und das mit Freude und Motivation.',
      },

      'holz-produkte': {
        title: 'HOLZ Fenster',
        bannerImage: 'Holz-Banner.png',
        lead: 'Holz ist eines der wichtigsten und nachhaltigsten Werkstoffe, den uns die Natur zur Verfügung stellt.',
        body: 'Holzfenster vereinen Natur und Technik zur perfekten Einheit. Durch den Einsatz hochwertigster Materialien und strengsten Qualitätsrichtlinien ist diese Harmonie zu erreichen. Modernste Technologien in der Oberflächenbearbeitung garantieren auch bei einfacher Pflege lange Lebensdauer und anhaltende Schönheit!',
        productImage: 'Exklusiv78_Holz.png',
        body2: 'Die von uns angebotenen Holz-Fenster und Türen stammen ausschließlich von der Marke WKF aus dem Pielachtal. Als Fensterhändler haben wir keinen anderen Partner gefunden der so qualitativ hochwertige und fehlerfrei verarbeitete Fenster in Österreich herstellt. Bei WKF Fenster und Türen werden zB die Glasleisten in einem Rahmen gemacht und unsichtbar geschossen. Ein Qualitätsmerkmal, da die ganzheitliche Erzeugung stabiler ist.',
      },

      'holz-alu-produkte': {
        title: 'HOLZ-ALU Fenster',
        bannerImage: 'Alu-Banner.png',
        lead: 'Holz/Aluminium-Fenster vereinen perfekt die Vorteile zweier Werkstoffe.',
        body: 'Die optische Schönheit und Stabilität des Holzes mit höchster Wärme- und Schalldämmung in perfekter Einheit mit der bewährten Widerstandsfähigkeit von Aluminium in veredelter Oberfläche. Der Einsatz qualitativ hochwertiger Materialien und modernster Technologien garantieren Langlebigkeit und Sicherheit für Generationen!',
        images: ['Aluline_alles.png', 'Eline_alles.png'],
        body2: 'Die Holz-Alu Produkte kombinieren die vielen Vorzüge des Holzfensters mit der Witterungsbeständigkeit von Aluminium. Sie erhalten ein qualitativ hochwertiges Naturprodukt mit Allwetterschutz.',
        body3: 'Massive Alu-Profile auf der Außenseite von Fenstern widerstehen Wind, Regen und Schnee und verleihen dem Fenster ein individuelles Design. Der natürliche Werkstoff Holz sorgt in Ihren Wohnräumen für ein behagliches Raumgefühl und ein gesundes Raumklima. Innovative Dichtungs- und Montagesysteme schaffen höchste Wärmedämmungseigenschaften und verhindern Kälte- und Wärmebrücken.',
        productImage2: 'HolzAlu_Fenster.png',
        body4: 'Die breite Palette an Farben und Formen bietet ein Maximum an Freiheit zur individuellen Gestaltung Ihrer Fenster aus verschiedenen Alu-Vorsatzschalen und verschiedenen Glasleisten.',
      },

      'kunststoff-produkte': {
        title: 'KUNSTSTOFF-Fenster',
        bannerImage: 'Kunst-Banner.png',
        lead: 'Kunststofffenster sind perfekt für eine ressourcenschonende, energiesparende Architektur und überzeugen durch hervorragenden Schallschutz.',
        body: 'Kunststofffenster überzeugen durch ansprechendes modernes Design, qualitativ hochwertige Fertigungstechnik und beste thermische Eigenschaften.',
        products: [
          {
            name: 'Aluplast IDEAL 5000',
            image: 'IDEAL5000_Fenster_quadratisch.jpg',
            pdfUrl: 'docs/Flyer_IDEAL5000.pdf',
            features: [
              'Uf-Wert von 1,2 W/m²K',
              'Mitteldichtungssystem mit drei Dichtebenen für erhöhten Einbruchschutz',
              'Verglasungsstärke bis 41 mm',
              'Designvielfalt (Classic-line fv | Classic-line hfv | Soft-line hfv | Round-line hfv)',
              'RC2 (WK2): geprüfte Einbruchsicherheit',
              'Nicht sichtbare Entwässerung möglich',
              'Hervorragender Schallschutz bis Schallschutzklasse IV',
              'In zahlreichen Dekorvarianten verfügbar',
              'Aluminiumvorsatzschale aluskin® erhältlich',
            ],
          },
        ],
        body2: 'Die langlebigen Kunststoffprofile zeichnen sich durch langjährige Beständigkeit gegen Witterungsverhältnisse aus und garantieren Ihnen Zuverlässigkeit und Sorgenfreiheit über viele Jahre. Produkte auf höchstem technischen Niveau.',
        images: ['8000.jpg', '5000.jpg'],
        body3: 'Clevere Technik – edles Design: Die elegante Optik von Aluminium liegt voll im Trend. Auch der Look Ihrer Fenster lässt sich veredeln: mit Aluminiumvorsatzschalen von aluplast. Die Kombination vereint die herausragenden Wärmedämmeigenschaften des Kunststofffensters mit dem modernen Look von Aluminium. Eine Beschichtung der Aluminiumvorsatzschalen in allen RAL-Farben ist möglich.',
        aluImage: 'pvc-alu_klein.jpg',
        aluPdfUrl: 'docs/Flyer_IDEAL5000.pdf',
        body4: 'Durch speziell entwickelte Mehrkammerprofile werden bei Kunststofffenstern hervorragende thermische und Schallschutzwerte erreicht. Diese schaffen ideale Voraussetzungen für ein behagliches Raumklima und niedrige Heizkosten.',
        bannerAlu: 'Banner_Alu_Kunststoff_900.png',
      },

      sonnenschutz: {
        title: 'Sonnenschutz',
        bannerImage: 'Sonne-Banner.png',
        sections: [
          { heading: 'ROLLÄDEN', text: 'Mit Rollos erzielen Sie eine ähnliche Lichtbeeinflussung wie mit einem Vorhang und Sie unterstreichen Ihren Einrichtungsstil.', sub: 'Durch praktische Rolläden lässt sich das Tageslicht im Raum verringern und ein Blenden der Sonne vermeiden.' },
          { heading: 'RAFFSTORE', text: 'Raffstore gehören zu den außenliegenden Sonnenschutzprodukten. Da Raffstores höheren Belastungen durch Wind und Wetter ausgesetzt sind als Jalousien, sind sie gängigerweise schienen- oder seilgeführt.', sub: 'Unsere Raffstore können einer Windböe von bis zu 25 m/s (Windstärke 10 nach Beaufort) ausgefahren standhalten. Zum Schutz werden sie bei stärkerer Windbelastung automatisch durch einen "Windwächter" eingefahren.' },
          { heading: 'FENSTERLÄDEN', text: 'Unterstreichen Sie die Individualität Ihres Hauses mit Fensterläden aus Aluminium und Kunststoff.', sub: 'Die Fensterläden, oftmals auch Klappläden genannt, sind zur Steuerung des Lichteinfalls in den Raum gedacht und attraktiver Blickfang sowie Sichtschutz.' },
          { heading: 'INNENJALOUSIEN', text: 'Innenjalousien bieten den Vorteil, den Lichteinfall perfekt zu regulieren.', sub: 'Die Lamellen lassen sich stufenlos schließen oder öffnen, womit die Lichtmenge im Inneren eines Raumes exakt kontrolliert und gesteuert werden kann. Innenjalousien sind dekorativ und praktisch. Sie bieten Blendfreiheit, Sichtschutz und Hitzedämmung.' },
          { heading: 'INSEKTENSCHUTZ', text: 'Fenster, Türen, Dachflächenfenster oder Lichtschachtabdeckung – sind beliebte Eingänge für unerwünschte Insekten.', sub: 'Durch die verschiedenen Insektenschutzgitter die wir anbieten haben Sie jedoch die Möglichkeit im Sommer bei offenem Fenster zu schlafen ohne Gelsen und anderes Getier im Raum zu haben.' },
        ],
      },

      haustueren: {
        title: 'Haustüren',
        bannerImage: 'Bau-Banner.png',
        lead: 'Die Visitenkarte Ihres Hauses.',
        sub: 'Türen mit ansprechendem Design und modernster Technik.',
        downloads: [
          { label: 'Haustürenkatalog – Download', url: 'docs/Haustuerenkatalog.pdf' },
        ],
      },

      'pflege-wartung': {
        title: 'Pflege & Wartung',
        bannerImage: 'Wartungs-Banner.png',
        lead: 'Anleitungen zum Reinigen, Warten und Lüften Ihrer Fenster, Türen und Rollläden',
        downloads: [
          { label: 'Kunststoff Fenster Wartung', url: 'docs/PVC_Pflege_und_Wartungsanleitung.pdf' },
          { label: 'Holz Fenster Wartung', url: 'docs/WKF_Wartung_und_Pflege.pdf' },
          { label: 'Rollladen Wartung', url: 'docs/Schlotterer_Wartung_und_Pflege.pdf' },
        ],
        wartungTitle: 'Wartung',
        wartungIntro: 'Um die Funktion von Dreh-Kipp-Beschlägen für Fenster- und Türflügel zu erhalten, sind mindestens jährlich folgende Wartungsarbeiten durchzuführen:',
        wartungList: [
          'Beschlagsteile, die sicherheitsrelevanten Charakter haben, sind in regelmäßigen Abständen auf Verschleiß zu kontrollieren.',
          'Alle beweglichen Teile sind mit einem Tropfen Öl und Verschließstellen der Beschläge mit einem säurefreien Fett oder technischer Vaseline zu versehen.',
          'Es sind nur solche Reinigungs- und Pflegemittel zu verwenden, die den Korrosionsschutz der Beschlagsteile nicht beeinträchtigen.',
        ],
        lueftenTitle: 'Lüften und Heizen',
        lueftenBody: 'In früheren Jahren waren Fenster so undicht beschaffen, dass es immer zu einem natürlichen Luftaustausch kam, der für das angenehme Wohnklima sorgte, aber hohe Heizkosten verursachte. In dem Bestreben, Heizkosten, Zugerscheinungen und Lärmbelästigungen zu senken, wurden Fenster konstruiert, die den neuen Bedingungen Rechnung tragen. Diese modernen Fenster sind sowohl in sich als auch zum Baukörper hin so dicht, dass kein natürlicher Luftaustausch stattfinden kann. Die hieraus resultierende mögliche Überfeuchtung und Ihre unangenehmen Nachwirkungen lassen sich ganz einfach verhindern.',
        lueftenBody2: 'Wer für den erforderlichen Luftaustausch sorgt, kann mit den modernen Fenstern Heizkosten sparen und ein gesundes Raumklima erhalten. Schnell und effektiv ist die Querlüftung gegenüberliegender Fenster, da ein offenes Fenster allein manchmal nicht ausreicht. Fünf Minuten reichen für einen Luftaustausch. Für die Stoßlüftung braucht man etwa 10 Minuten. Zur Unterstützung des automatischen Luftaustausches können auch sogenannte Regel-Air®-Klappen im Fenster eingesetzt werden. Ihr Fenster-Fachmann berät Sie hierzu gerne.',
      },

      'ueber-uns': {
        title: 'Über Uns',
        bannerImage: 'Bau-Banner.png',
        body: 'Die Firma Luxbell Bauelemente Handels GmbH besteht seit 2002 und unser Schwerpunkt liegt im Objektgeschäft von Fenstern und Türen, das wir mit Baufirmen, Genossenschaften und - oder Architekten abwickeln. Technisches Know-how, ein solides Preis-Leistungsgefüge sowie rasche Durchführungszeiten lassen uns als Partner für den Ausführenden am Bau interessant sein.',
        body2: 'Wir sind ein Team von "Fensterfreaks" und die meisten von uns sind seit über 30 Jahren in der Fensterbranche tätig. Erfahrung und die Liebe zum Detail ist also mehr als ausreichend vorhanden.',
        cta: 'Sprechen Sie uns einfach unverbindlich mit Ihrem Anliegen an.',
        footer: 'Seit Jahren sind wir mit akribischer Genauigkeit, technischem Feingefühl und jeder Menge Erfahrung in der Fenster und Türen Branche tätig - und das mit Freude und Motivation.',
      },

      referenzen: {
        title: 'Referenzen',
        intro: 'Ausgewählte Objektreferenzen aus unserem Objektgeschäft mit Fenstern und Türen.',
        bannerImage: 'Referenz-Banner.png',
      },

      kontakt: {
        title: 'Kontakt',
        bannerImage: 'Uns-Banner.png',
        intro: 'Seit Jahren sind wir mit akribischer Genauigkeit, technischem Feingefühl und jeder Menge Erfahrung in der Fenster und Türen Branche tätig. Und das mit Freude und Motivation.',
        cta: 'Sprechen Sie mich einfach unverbindlich mit Ihrem Anliegen an.',
      },
    },

    impressum: {
      title: 'Impressum',
      companyFull: 'Luxbell Bauelemente Handels GmbH',
      wkoLink: 'https://firmen.wko.at/Web/DetailsKontakt.aspx?FirmaID=c700d5fe-99e5-43b3-845e-33ee6578b696',
      wkoLabel: 'WKO Eintrag',
    },

    langLabel: 'DE',
    langSwitch: 'EN',
    refLabels: { auftraggeber: 'Auftraggeber', bauvorhaben: 'Bauvorhaben', ausfuehrungsart: 'Ausführungsart', beschreibung: 'Beschreibung' },
  },

  en: {
    siteTitle: 'LUXbell - Windows - Doors - Sun Protection',
    companyName: 'LUXbell',
    companySubtitle: 'Bauelemente Handels GmbH',

    contact: {
      phone: '+43 676 88 58 38 88',
      address: 'Prießnitzgasse 6/1/3',
      postalCode: '2340',
      city: 'Mödling',
      email: 'office@luxbell.at',
    },

    legal: {
      tradeRegister: 'Company register: 245939a',
      vatId: 'VAT ID: ATU57764501',
      gisa: 'GISA: 10118207',
      authority: 'Bezirkshauptmannschaft Mödling',
    },

    nav: [
      { id: 'home', label: 'Home' },
      { id: 'holz-produkte', label: 'Wood Products' },
      { id: 'holz-alu-produkte', label: 'Wood-Alu Products' },
      { id: 'kunststoff-produkte', label: 'PVC Products' },
      { id: 'sonnenschutz', label: 'Sun Protection' },
      { id: 'haustueren', label: 'Entrance Doors' },
      { id: 'pflege-wartung', label: 'Care & Maintenance' },
      { id: 'ueber-uns', label: 'About Us' },
      { id: 'referenzen', label: 'References' },
      { id: 'kontakt', label: 'Contact' },
    ],

    pages: {
      home: {
        title: 'Windows | Doors | Sun Protection',
        heroImage: 'Bau-Banner.png',
        intro: 'We focus on the project business for windows and doors, working with construction firms, housing cooperatives and architects. Technical expertise, solid value for money and short lead times make us an attractive partner for those executing construction projects.',
        cta: 'Feel free to contact us with your requirements.',
        footer: 'For years we have been working in the windows and doors industry with precision, technical sensitivity and extensive experience – with enthusiasm and motivation.',
      },

      'holz-produkte': {
        title: 'WOOD Windows',
        bannerImage: 'Holz-Banner.png',
        lead: 'Wood is one of the most important and sustainable materials that nature provides.',
        body: 'Wood windows combine nature and technology in a single unit. Using the finest materials and strict quality standards achieves this harmony. Modern surface technology ensures long life and lasting beauty with minimal maintenance.',
        productImage: 'Exklusiv78_Holz.png',
        body2: 'Our wood windows and doors come exclusively from the WKF brand in the Pielachtal. As a window dealer we have found no other partner in Austria that manufactures such high-quality, faultlessly finished windows. For example, WKF windows and doors use glass beads made and fixed invisibly in the frame – a mark of quality that makes the whole product more stable.',
      },

      'holz-alu-produkte': {
        title: 'WOOD-ALU Windows',
        bannerImage: 'Alu-Banner.png',
        lead: 'Wood/aluminium windows combine the advantages of both materials.',
        body: 'The visual appeal and stability of wood, with high thermal and acoustic insulation, combined with the proven durability of aluminium in a refined finish. High-quality materials and modern technology ensure longevity and safety for generations.',
        images: ['Aluline_alles.png', 'Eline_alles.png'],
        body2: 'Our wood-alu products combine the benefits of wood windows with the weather resistance of aluminium. You get a high-quality natural product with all-weather protection.',
        body3: 'Robust aluminium profiles on the outside of windows resist wind, rain and snow and give the window an individual design. Wood on the inside creates a comfortable atmosphere and a healthy indoor climate. Innovative sealing and mounting systems provide high thermal performance and prevent cold and heat bridges.',
        productImage2: 'HolzAlu_Fenster.png',
        body4: 'A wide range of colours and forms offers maximum freedom to design your windows with different aluminium cladding and glass bead options.',
      },

      'kunststoff-produkte': {
        title: 'PVC Windows',
        bannerImage: 'Kunst-Banner.png',
        lead: 'PVC windows are ideal for resource-efficient, energy-saving architecture and offer excellent sound insulation.',
        body: 'PVC windows offer an attractive modern design, high-quality manufacturing technology and excellent thermal performance.',
        products: [
          {
            name: 'Aluplast IDEAL 5000',
            image: 'IDEAL5000_Fenster_quadratisch.jpg',
            pdfUrl: 'docs/Flyer_IDEAL5000.pdf',
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
          }

        ],
        body2: 'The durable PVC profiles offer long-term resistance to weather and guarantee reliability and peace of mind for many years. Products at the highest technical level.',
        images: ['8000.jpg', '5000.jpg'],
        body3: 'Smart technology – elegant design: The look of aluminium is very much on trend. Your windows can be upgraded too with aluplast aluminium cladding. The combination brings together the outstanding thermal performance of PVC windows with a modern aluminium look. Coating of the aluminium cladding in all RAL colours is possible.',
        aluImage: 'pvc-alu_klein.jpg',
        aluPdfUrl: 'docs/Flyer_IDEAL5000.pdf',
        body4: 'Specially developed multi-chamber profiles give PVC windows excellent thermal and sound insulation values, creating ideal conditions for a comfortable indoor climate and lower heating costs.',
        bannerAlu: 'Banner_Alu_Kunststoff_900.png',
      },

      sonnenschutz: {
        title: 'Sun Protection',
        bannerImage: 'Sonne-Banner.png',
        sections: [
          { heading: 'ROLLER SHUTTERS', text: 'Roller shutters give you similar light control to curtains and underline your interior style.', sub: 'They reduce daylight and avoid glare from the sun.' },
          { heading: 'EXTERNAL VENETIAN BLINDS', text: 'External venetian blinds are installed outside. As they are more exposed to wind and weather than indoor blinds, they are usually track- or cable-guided.', sub: 'Our external blinds can remain extended in winds up to 25 m/s (Beaufort 10). A wind sensor retracts them automatically in stronger winds.' },
          { heading: 'SHUTTERS', text: 'Emphasise the character of your home with aluminium or PVC shutters.', sub: 'Shutters (often called louvred shutters) control light entering the room and provide an attractive look and privacy.' },
          { heading: 'INDOOR BLINDS', text: 'Indoor blinds allow precise control of light.', sub: 'Slats can be adjusted continuously to control the amount of light and provide glare protection, privacy and heat insulation.' },
          { heading: 'INSECT SCREENS', text: 'Windows, doors, roof windows and light wells are popular entry points for insects.', sub: 'With the insect screens we offer, you can sleep with the window open in summer without mosquitoes and other pests indoors.' },
        ],
      },

      haustueren: {
        title: 'Entrance Doors',
        bannerImage: 'Bau-Banner.png',
        lead: 'The calling card of your house.',
        sub: 'Doors with appealing design and modern technology.',
        downloads: [
          { label: 'Entrance door catalogue – Download', url: 'docs/Haustuerenkatalog.pdf' },
        ],
      },

      'pflege-wartung': {
        title: 'Care & Maintenance',
        bannerImage: 'Wartungs-Banner.png',
        lead: 'Instructions for cleaning, maintaining and ventilating your windows, doors and roller shutters',
        downloads: [
          { label: 'PVC window maintenance', url: 'docs/PVC_Pflege_und_Wartungsanleitung.pdf' },
          { label: 'Wood window maintenance', url: 'docs/WKF_Wartung_und_Pflege.pdf' },
          { label: 'Roller shutter maintenance', url: 'docs/Schlotterer_Wartung_und_Pflege.pdf' },
        ],
        wartungTitle: 'Maintenance',
        wartungIntro: 'To keep tilt-turn hardware working correctly, the following maintenance should be carried out at least once a year:',
        wartungList: [
          'Safety-relevant hardware should be checked regularly for wear.',
          'All moving parts should be lubricated with a drop of oil; lock points with acid-free grease or technical vaseline.',
          'Only use cleaning and care products that do not affect the corrosion protection of the hardware.',
        ],
        lueftenTitle: 'Ventilation and heating',
        lueftenBody: 'Older windows were often leaky, allowing natural air exchange that improved comfort but increased heating costs. Modern windows are designed to reduce heating costs, draughts and noise. They are so well sealed that no natural air exchange occurs. The resulting moisture can be avoided simply by ventilating properly.',
        lueftenBody2: 'If you ensure adequate air exchange, you can save on heating costs and maintain a healthy indoor climate with modern windows. Cross-ventilation (opening windows on opposite sides) is quick and effective, as a single open window is often not enough. Five minutes is enough for an air change. Short burst ventilation takes about 10 minutes. Trickle vents can also be fitted to support automatic air exchange – your window specialist can advise.',
      },

      'ueber-uns': {
        title: 'About Us',
        bannerImage: 'Bau-Banner.png',
        body: 'Luxbell Bauelemente Handels GmbH has been in business since 2002. We focus on the project business for windows and doors with construction firms, housing cooperatives and architects. Technical expertise, solid value for money and short lead times make us an attractive partner on site.',
        body2: 'We are a team of “window enthusiasts”; most of us have been in the window industry for over 30 years. So there is no shortage of experience and attention to detail.',
        cta: 'Feel free to contact us with your requirements.',
        footer: 'For years we have been working in the windows and doors industry with precision, technical sensitivity and extensive experience – with enthusiasm and motivation.',
      },

      referenzen: {
        title: 'References',
        intro: 'Selected project references from our windows and doors business.',
        bannerImage: 'Referenz-Banner.png',
      },

      kontakt: {
        title: 'Contact',
        bannerImage: 'Uns-Banner.png',
        intro: 'For years we have been working in the windows and doors industry with precision, technical sensitivity and extensive experience. And with enthusiasm and motivation.',
        cta: 'Feel free to contact us with your requirements.',
      },
    },

    impressum: {
      title: 'Imprint',
      companyFull: 'Luxbell Bauelemente Handels GmbH',
      wkoLink: 'https://firmen.wko.at/Web/DetailsKontakt.aspx?FirmaID=c700d5fe-99e5-43b3-845e-33ee6578b696',
      wkoLabel: 'WKO entry',
    },

    langLabel: 'EN',
    langSwitch: 'DE',
    refLabels: { auftraggeber: 'Client', bauvorhaben: 'Project', ausfuehrungsart: 'Type', beschreibung: 'Description' },
  },
};

const LANG_KEY = 'luxbell-lang';
function getLang() {
  if (typeof window !== 'undefined' && window.localStorage) {
    var stored = window.localStorage.getItem(LANG_KEY);
    if (stored === 'en' || stored === 'de') return stored;
  }
  return 'de';
}
function setLang(lang) {
  if (typeof window !== 'undefined' && window.localStorage && (lang === 'de' || lang === 'en')) {
    window.localStorage.setItem(LANG_KEY, lang);
  }
}
