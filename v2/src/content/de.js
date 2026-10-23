/**
 * Deutsche Texte.
 *
 * ▸ Nur Text ändern — niemals Code. Die Struktur ist überall dieselbe:
 *
 *     'seiten-id': {
 *       title:       Überschrift der Seite
 *       description: Text für Google / Social Media
 *       hero:        { image, kicker, lead }     großes Bild oben
 *       blocks:      [ ... ]                     Inhalt der Seite, von oben nach unten
 *     }
 *
 * ▸ Jeder Block hat ein `type`. Welche Typen es gibt und was sie können,
 *   steht in README.md unter „Bausteine". Ein neuer Absatz ist ein neuer
 *   Eintrag in `blocks` — am Renderer muss nichts geändert werden.
 *
 * ▸ Bilder liegen in `assets/images/`, PDFs in `assets/docs/`.
 *   Hier wird nur der Dateiname angegeben.
 */

export default {
  lang: 'de',

  siteName: 'LUXbell',
  siteTagline: 'Fenster · Türen · Sonnenschutz',
  siteDescription:
    'LUXbell Bauelemente Handels GmbH – Fenster, Türen und Sonnenschutz. Objektgeschäft mit Baufirmen, Genossenschaften und Architekten.',

  /* --- Navigation ------------------------------------------------------- */

  nav: {
    home: 'Home',
    'holz-produkte': 'Holz Produkte',
    'holz-alu-produkte': 'Holz-Alu Produkte',
    'kunststoff-produkte': 'Kunststoff Produkte',
    sonnenschutz: 'Sonnenschutz',
    haustueren: 'Haustüren',
    'pflege-wartung': 'Pflege & Wartung',
    'ueber-uns': 'Über Uns',
    referenzen: 'Referenzen',
    kontakt: 'Kontakt',
    impressum: 'Impressum',
  },

  navGroups: {
    produkte: 'Produkte',
    unternehmen: 'Unternehmen',
  },

  /* --- Oberfläche (Buttons, Beschriftungen) ------------------------------ */

  ui: {
    skipToContent: 'Zum Inhalt springen',
    mainNav: 'Hauptnavigation',
    openMenu: 'Menü öffnen',
    closeMenu: 'Menü schließen',
    langSwitchTo: 'Switch to English',
    langSwitchLabel: 'EN',
    callUs: 'Anrufen',
    emailUs: 'E-Mail schreiben',
    phoneLabel: 'Telefon',
    emailLabel: 'E-Mail',
    addressLabel: 'Adresse',
    downloadPdf: 'PDF herunterladen',
    infoFlyer: 'Info / Flyer',
    backHome: 'Zur Startseite',
  },

  footer: {
    tagline:
      'Seit Jahren sind wir mit akribischer Genauigkeit, technischem Feingefühl und jeder Menge Erfahrung in der Fenster und Türen Branche tätig – und das mit Freude und Motivation.',
    contactHeading: 'Kontakt',
    legalHeading: 'Rechtliches',
    copyright: 'Alle Rechte vorbehalten.',
    labels: {
      tradeRegister: 'Firmenbuch Nr.',
      vatId: 'ID-Nummer',
      gisa: 'GISA Zahl',
      authority: 'Behörde',
    },
  },

  /* --- Referenzen-Seite (Tabelle + Filter) ------------------------------- */

  references: {
    searchLabel: 'Referenzen durchsuchen',
    searchPlaceholder: 'Auftraggeber, Ort oder Ausführung …',
    filterLabel: 'Ausführungsart',
    filterAll: 'Alle Ausführungsarten',
    resultsOne: '1 Referenz',
    resultsMany: '{n} Referenzen',
    empty: 'Keine Referenzen gefunden. Bitte Suche oder Filter anpassen.',
    loadError: 'Die Referenzen konnten nicht geladen werden. Bitte Seite neu laden.',
    columns: {
      auftraggeber: 'Auftraggeber',
      bauvorhaben: 'Bauvorhaben',
      ausfuehrungsart: 'Ausführungsart',
      beschreibung: 'Beschreibung',
    },
  },

  notFound: {
    title: 'Seite nicht gefunden',
    text: 'Die aufgerufene Seite existiert nicht (mehr). Vielleicht hilft die Startseite weiter.',
  },

  errorPage: {
    title: 'Es ist ein Fehler aufgetreten',
    text: 'Beim Laden dieser Seite ist etwas schiefgelaufen. Bitte laden Sie die Seite neu.',
  },

  /* ======================================================================
     SEITEN
     ====================================================================== */

  pages: {
    /* ------------------------------------------------------------------ */
    home: {
      title: 'Fenster · Türen · Sonnenschutz',
      metaTitle: 'LUXbell – Fenster, Türen, Sonnenschutz',
      description:
        'LUXbell Bauelemente Handels GmbH – Fenster, Türen und Sonnenschutz. Objektgeschäft mit Baufirmen, Genossenschaften und Architekten.',
      hero: {
        image: 'Bau-Banner.png',
        kicker: 'Bauelemente Handels GmbH',
        headline: 'Fenster · Türen · Sonnenschutz',
        lead: 'Technisches Know-how, ein solides Preis-Leistungsgefüge und rasche Durchführungszeiten – seit 2002 im Objektgeschäft.',
        size: 'large',
        actions: [
          { label: 'Produkte ansehen', anchor: 'produkte', variant: 'primary' },
          { label: 'Kontakt aufnehmen', route: 'kontakt', variant: 'ghost' },
        ],
      },
      blocks: [
        {
          type: 'heading',
          align: 'center',
          width: 'narrow',
          kicker: 'Willkommen',
          title: 'Ihr Partner am Bau',
          intro:
            'Unser Schwerpunkt liegt im Objektgeschäft von Fenstern und Türen, das wir mit Baufirmen, Genossenschaften und - oder Architekten abwickeln. Technisches Know-how, ein solides Preis Leistungsgefüge sowie rasche Durchführungszeiten lassen uns als Partner für den Ausführenden am Bau interessant sein.',
        },
        {
          type: 'stats',
          section: 'plain',
          items: [
            { value: 'seit 2002', label: 'am Markt' },
            { value: '30+', label: 'Jahre Erfahrung im Team' },
            { value: '40+', label: 'dokumentierte Objektreferenzen' },
          ],
        },
        {
          type: 'cards',
          id: 'produkte',
          section: 'sand',
          kicker: 'Sortiment',
          title: 'Unsere Produkte',
          items: [
            {
              route: 'holz-produkte',
              image: 'Holz-Banner.png',
              title: 'Holz Fenster',
              text: 'Natur und Technik als perfekte Einheit – hochwertige Materialien, lange Lebensdauer.',
            },
            {
              route: 'holz-alu-produkte',
              image: 'Alu-Banner.png',
              title: 'Holz-Alu Fenster',
              text: 'Die Schönheit des Holzes innen, die Widerstandsfähigkeit von Aluminium außen.',
            },
            {
              route: 'kunststoff-produkte',
              image: 'Kunst-Banner.png',
              title: 'Kunststoff Fenster',
              text: 'Ressourcenschonend, energiesparend und mit hervorragendem Schallschutz.',
            },
            {
              route: 'sonnenschutz',
              image: 'Sonne-Banner.png',
              title: 'Sonnenschutz',
              text: 'Rollläden, Raffstore, Fensterläden, Innenjalousien und Insektenschutz.',
            },
            {
              route: 'haustueren',
              image: 'Referenz-Banner.png',
              title: 'Haustüren',
              text: 'Die Visitenkarte Ihres Hauses – Design und modernste Technik.',
            },
          ],
        },
        {
          type: 'split',
          side: 'left',
          image: 'Uns-Banner.png',
          alt: 'Das LUXbell Team bei der Projektplanung',
          kicker: 'Über uns',
          heading: 'Ein Team von Fensterfreaks',
          text: [
            'Die Firma Luxbell Bauelemente Handels GmbH besteht seit 2002 und unser Schwerpunkt liegt im Objektgeschäft von Fenstern und Türen, das wir mit Baufirmen, Genossenschaften und - oder Architekten abwickeln.',
            'Seit Jahren sind wir mit akribischer Genauigkeit, technischem Feingefühl und jeder Menge Erfahrung in der Fenster und Türen Branche tätig - und das mit Freude und Motivation.',
          ],
          actions: [{ label: 'Mehr über uns', route: 'ueber-uns', variant: 'secondary' }],
        },
        {
          type: 'cta',
          title: 'Sprechen Sie mich einfach unverbindlich mit Ihrem Anliegen an.',
          text: 'Wir melden uns rasch – telefonisch oder per E-Mail.',
        },
      ],
    },

    /* ------------------------------------------------------------------ */
    'holz-produkte': {
      title: 'HOLZ Fenster',
      description:
        'Holzfenster von WKF aus dem Pielachtal – Natur und Technik in perfekter Einheit, mit langer Lebensdauer bei einfacher Pflege.',
      hero: {
        image: 'Holz-Banner.png',
        kicker: 'Produkte',
        headline: 'HOLZ Fenster',
        lead: 'Holz ist eines der wichtigsten und nachhaltigsten Werkstoffe, den uns die Natur zur Verfügung stellt.',
      },
      blocks: [
        {
          type: 'prose',
          width: 'narrow',
          text: [
            'Holzfenster vereinen Natur und Technik zur perfekten Einheit. Durch den Einsatz hochwertigster Materialien und strengsten Qualitätsrichtlinien ist diese Harmonie zu erreichen. Modernste Technologien in der Oberflächenbearbeitung garantieren auch bei einfacher Pflege lange Lebensdauer und anhaltende Schönheit!',
          ],
        },
        {
          type: 'split',
          section: 'sand',
          side: 'right',
          image: 'Exklusiv78_Holz.png',
          alt: 'Holzfenster Exklusiv 78 im Querschnitt',
          heading: 'WKF aus dem Pielachtal',
          text: [
            'Die von uns angebotenen Holz-Fenster und Türen stammen ausschließlich von der Marke WKF aus dem Pielachtal. Als Fensterhändler haben wir keinen anderen Partner gefunden der so qualitativ hochwertige und fehlerfrei verarbeitete Fenster in Österreich herstellt.',
            'Bei WKF Fenster und Türen werden zB die Glasleisten in einem Rahmen gemacht und unsichtbar geschossen. Ein Qualitätsmerkmal, da die ganzheitliche Erzeugung stabiler ist.',
          ],
        },
        {
          type: 'cta',
          title: 'Fragen zu Holzfenstern?',
          text: 'Sprechen Sie mich einfach unverbindlich mit Ihrem Anliegen an.',
        },
      ],
    },

    /* ------------------------------------------------------------------ */
    'holz-alu-produkte': {
      title: 'HOLZ-ALU Fenster',
      description:
        'Holz/Aluminium-Fenster vereinen Wärmedämmung und Wohnkomfort des Holzes mit der Witterungsbeständigkeit von Aluminium.',
      hero: {
        image: 'Alu-Banner.png',
        kicker: 'Produkte',
        headline: 'HOLZ-ALU Fenster',
        lead: 'Holz/Aluminium-Fenster vereinen perfekt die Vorteile zweier Werkstoffe.',
      },
      blocks: [
        {
          type: 'prose',
          width: 'narrow',
          text: [
            'Die optische Schönheit und Stabilität des Holzes mit höchster Wärme- und Schalldämmung in perfekter Einheit mit der bewährten Widerstandsfähigkeit von Aluminium in veredelter Oberfläche. Der Einsatz qualitativ hochwertiger Materialien und modernster Technologien garantieren Langlebigkeit und Sicherheit für Generationen!',
          ],
        },
        {
          type: 'gallery',
          section: 'sand',
          items: [
            { src: 'Aluline_alles.png', alt: 'Aluline Profilübersicht' },
            { src: 'Eline_alles.png', alt: 'Eline Profilübersicht' },
          ],
        },
        {
          type: 'prose',
          width: 'narrow',
          text: [
            'Die Holz-Alu Produkte kombinieren die vielen Vorzüge des Holzfensters mit der Witterungsbeständigkeit von Aluminium. Sie erhalten ein qualitativ hochwertiges Naturprodukt mit Allwetterschutz.',
          ],
        },
        {
          type: 'split',
          side: 'left',
          image: 'HolzAlu_Fenster.png',
          alt: 'Aufbau eines Holz-Alu Fensters',
          heading: 'Außen robust, innen behaglich',
          text: [
            'Massive Alu-Profile auf der Außenseite von Fenstern widerstehen Wind, Regen und Schnee und verleihen dem Fenster ein individuelles Design. Der natürliche Werkstoff Holz sorgt in Ihren Wohnräumen für ein behagliches Raumgefühl und ein gesundes Raumklima.',
            'Innovative Dichtungs- und Montagesysteme schaffen höchste Wärmedämmungseigenschaften und verhindern Kälte- und Wärmebrücken.',
          ],
        },
        {
          type: 'prose',
          section: 'sand',
          width: 'narrow',
          align: 'center',
          text: [
            'Die breite Palette an Farben und Formen bietet ein Maximum an Freiheit zur individuellen Gestaltung Ihrer Fenster aus verschiedenen Alu-Vorsatzschalen und verschiedenen Glasleisten.',
          ],
        },
        {
          type: 'cta',
          title: 'Interesse an Holz-Alu Fenstern?',
          text: 'Sprechen Sie mich einfach unverbindlich mit Ihrem Anliegen an.',
        },
      ],
    },

    /* ------------------------------------------------------------------ */
    'kunststoff-produkte': {
      title: 'KUNSTSTOFF-Fenster',
      description:
        'Kunststofffenster von aluplast – energiesparend, mit hervorragendem Schallschutz und optional mit Aluminiumvorsatzschale.',
      hero: {
        image: 'Kunst-Banner.png',
        kicker: 'Produkte',
        headline: 'KUNSTSTOFF-Fenster',
        lead: 'Kunststofffenster sind perfekt für eine ressourcenschonende, energiesparende Architektur und überzeugen durch hervorragenden Schallschutz.',
      },
      blocks: [
        {
          type: 'prose',
          width: 'narrow',
          text: [
            'Kunststofffenster überzeugen durch ansprechendes modernes Design, qualitativ hochwertige Fertigungstechnik und beste thermische Eigenschaften.',
          ],
        },
        {
          type: 'products',
          section: 'sand',
          items: [
            {
              name: 'Aluplast IDEAL 5000',
              image: 'IDEAL5000_Fenster_quadratisch.jpg',
              alt: 'Aluplast IDEAL 5000 Fenster',
              pdf: 'Flyer_IDEAL5000.pdf',
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
        },
        {
          type: 'prose',
          width: 'narrow',
          text: [
            'Die langlebigen Kunststoffprofile zeichnen sich durch langjährige Beständigkeit gegen Witterungsverhältnisse aus und garantieren Ihnen Zuverlässigkeit und Sorgenfreiheit über viele Jahre. Produkte auf höchstem technischen Niveau.',
          ],
        },
        {
          type: 'gallery',
          items: [
            { src: '8000.jpg', alt: 'Fenstersystem IDEAL 8000' },
            { src: '5000.jpg', alt: 'Fenstersystem IDEAL 5000' },
          ],
        },
        {
          type: 'split',
          section: 'sand',
          side: 'right',
          image: 'pvc-alu_klein.jpg',
          alt: 'Kunststofffenster mit Aluminiumvorsatzschale',
          pdf: 'Flyer_IDEAL5000.pdf',
          heading: 'Clevere Technik – edles Design',
          text: [
            'Die elegante Optik von Aluminium liegt voll im Trend. Auch der Look Ihrer Fenster lässt sich veredeln: mit Aluminiumvorsatzschalen von aluplast. Die Kombination vereint die herausragenden Wärmedämmeigenschaften des Kunststofffensters mit dem modernen Look von Aluminium.',
            'Eine Beschichtung der Aluminiumvorsatzschalen in allen RAL-Farben ist möglich.',
          ],
        },
        {
          type: 'prose',
          width: 'narrow',
          text: [
            'Durch speziell entwickelte Mehrkammerprofile werden bei Kunststofffenstern hervorragende thermische und Schallschutzwerte erreicht. Diese schaffen ideale Voraussetzungen für ein behagliches Raumklima und niedrige Heizkosten.',
          ],
        },
        {
          type: 'image',
          src: 'Banner_Alu_Kunststoff_900.png',
          alt: 'Aluminium und Kunststoff im Vergleich',
          wide: true,
        },
        {
          type: 'cta',
          title: 'Fragen zu Kunststofffenstern?',
          text: 'Sprechen Sie mich einfach unverbindlich mit Ihrem Anliegen an.',
        },
      ],
    },

    /* ------------------------------------------------------------------ */
    sonnenschutz: {
      title: 'Sonnenschutz',
      description:
        'Rollläden, Raffstore, Fensterläden, Innenjalousien und Insektenschutz – Sonnenschutz für innen und außen.',
      hero: {
        image: 'Sonne-Banner.png',
        kicker: 'Produkte',
        headline: 'Sonnenschutz',
        lead: 'Licht regulieren, Hitze draußen halten, Sichtschutz schaffen – innen wie außen.',
      },
      blocks: [
        {
          type: 'features',
          items: [
            {
              title: 'ROLLÄDEN',
              text: 'Mit Rollos erzielen Sie eine ähnliche Lichtbeeinflussung wie mit einem Vorhang und Sie unterstreichen Ihren Einrichtungsstil.',
              sub: 'Durch praktische Rolläden lässt sich das Tageslicht im Raum verringern und ein Blenden der Sonne vermeiden.',
            },
            {
              title: 'RAFFSTORE',
              text: 'Raffstore gehören zu den außenliegenden Sonnenschutzprodukten. Da Raffstores höheren Belastungen durch Wind und Wetter ausgesetzt sind als Jalousien, sind sie gängigerweise schienen- oder seilgeführt.',
              sub: 'Unsere Raffstore können einer Windböe von bis zu 25 m/s (Windstärke 10 nach Beaufort) ausgefahren standhalten. Zum Schutz werden sie bei stärkerer Windbelastung automatisch durch einen "Windwächter" eingefahren.',
            },
            {
              title: 'FENSTERLÄDEN',
              text: 'Unterstreichen Sie die Individualität Ihres Hauses mit Fensterläden aus Aluminium und Kunststoff.',
              sub: 'Die Fensterläden, oftmals auch Klappläden genannt, sind zur Steuerung des Lichteinfalls in den Raum gedacht und attraktiver Blickfang sowie Sichtschutz.',
            },
            {
              title: 'INNENJALOUSIEN',
              text: 'Innenjalousien bieten den Vorteil, den Lichteinfall perfekt zu regulieren.',
              sub: 'Die Lamellen lassen sich stufenlos schließen oder öffnen, womit die Lichtmenge im Inneren eines Raumes exakt kontrolliert und gesteuert werden kann. Innenjalousien sind dekorativ und praktisch. Sie bieten Blendfreiheit, Sichtschutz und Hitzedämmung.',
            },
            {
              title: 'INSEKTENSCHUTZ',
              text: 'Fenster, Türen, Dachflächenfenster oder Lichtschachtabdeckung – sind beliebte Eingänge für unerwünschte Insekten.',
              sub: 'Durch die verschiedenen Insektenschutzgitter die wir anbieten haben Sie jedoch die Möglichkeit im Sommer bei offenem Fenster zu schlafen ohne Gelsen und anderes Getier im Raum zu haben.',
            },
          ],
        },
        {
          type: 'cta',
          section: 'sand',
          title: 'Welcher Sonnenschutz passt zu Ihrem Objekt?',
          text: 'Sprechen Sie mich einfach unverbindlich mit Ihrem Anliegen an.',
        },
      ],
    },

    /* ------------------------------------------------------------------ */
    haustueren: {
      title: 'Haustüren',
      description:
        'Haustüren mit ansprechendem Design und modernster Technik – die Visitenkarte Ihres Hauses.',
      hero: {
        image: 'Bau-Banner.png',
        kicker: 'Produkte',
        headline: 'Haustüren',
        lead: 'Die Visitenkarte Ihres Hauses.',
      },
      blocks: [
        {
          type: 'prose',
          width: 'narrow',
          align: 'center',
          text: ['Türen mit ansprechendem Design und modernster Technik.'],
        },
        {
          type: 'downloads',
          section: 'sand',
          title: 'Katalog',
          items: [
            {
              label: 'Haustürenkatalog',
              file: 'Haustuerenkatalog.pdf',
              size: '23,6 MB',
              note: 'Großer Download – am besten über WLAN öffnen.',
            },
          ],
        },
        {
          type: 'cta',
          title: 'Auf der Suche nach der passenden Haustür?',
          text: 'Sprechen Sie mich einfach unverbindlich mit Ihrem Anliegen an.',
        },
      ],
    },

    /* ------------------------------------------------------------------ */
    'pflege-wartung': {
      title: 'Pflege & Wartung',
      description:
        'Anleitungen zum Reinigen, Warten und Lüften Ihrer Fenster, Türen und Rollläden – inklusive PDF-Downloads.',
      hero: {
        image: 'Wartungs-Banner.png',
        kicker: 'Service',
        headline: 'Pflege & Wartung',
        lead: 'Anleitungen zum Reinigen, Warten und Lüften Ihrer Fenster, Türen und Rollläden',
      },
      blocks: [
        {
          type: 'downloads',
          title: 'Anleitungen zum Download',
          items: [
            {
              label: 'Kunststoff Fenster Wartung',
              file: 'PVC_Pflege_und_Wartungsanleitung.pdf',
              size: '95 KB',
            },
            {
              label: 'Holz Fenster Wartung',
              file: 'WKF_Wartung_und_Pflege.pdf',
              size: '5,7 MB',
            },
            {
              label: 'Rollladen Wartung',
              file: 'Schlotterer_Wartung_und_Pflege.pdf',
              size: '760 KB',
            },
          ],
        },
        {
          type: 'accordion',
          section: 'sand',
          title: 'Gut zu wissen',
          items: [
            {
              title: 'Wartung',
              open: true,
              text: [
                'Um die Funktion von Dreh-Kipp-Beschlägen für Fenster- und Türflügel zu erhalten, sind mindestens jährlich folgende Wartungsarbeiten durchzuführen:',
              ],
              list: [
                'Beschlagsteile, die sicherheitsrelevanten Charakter haben, sind in regelmäßigen Abständen auf Verschleiß zu kontrollieren.',
                'Alle beweglichen Teile sind mit einem Tropfen Öl und Verschließstellen der Beschläge mit einem säurefreien Fett oder technischer Vaseline zu versehen.',
                'Es sind nur solche Reinigungs- und Pflegemittel zu verwenden, die den Korrosionsschutz der Beschlagsteile nicht beeinträchtigen.',
              ],
            },
            {
              title: 'Lüften und Heizen',
              text: [
                'In früheren Jahren waren Fenster so undicht beschaffen, dass es immer zu einem natürlichen Luftaustausch kam, der für das angenehme Wohnklima sorgte, aber hohe Heizkosten verursachte. In dem Bestreben, Heizkosten, Zugerscheinungen und Lärmbelästigungen zu senken, wurden Fenster konstruiert, die den neuen Bedingungen Rechnung tragen. Diese modernen Fenster sind sowohl in sich als auch zum Baukörper hin so dicht, dass kein natürlicher Luftaustausch stattfinden kann. Die hieraus resultierende mögliche Überfeuchtung und Ihre unangenehmen Nachwirkungen lassen sich ganz einfach verhindern.',
                'Wer für den erforderlichen Luftaustausch sorgt, kann mit den modernen Fenstern Heizkosten sparen und ein gesundes Raumklima erhalten. Schnell und effektiv ist die Querlüftung gegenüberliegender Fenster, da ein offenes Fenster allein manchmal nicht ausreicht. Fünf Minuten reichen für einen Luftaustausch. Für die Stoßlüftung braucht man etwa 10 Minuten. Zur Unterstützung des automatischen Luftaustausches können auch sogenannte Regel-Air®-Klappen im Fenster eingesetzt werden. Ihr Fenster-Fachmann berät Sie hierzu gerne.',
              ],
            },
          ],
        },
      ],
    },

    /* ------------------------------------------------------------------ */
    'ueber-uns': {
      title: 'Über Uns',
      description:
        'Luxbell Bauelemente Handels GmbH besteht seit 2002 – ein Team von Fensterfreaks mit über 30 Jahren Branchenerfahrung.',
      hero: {
        image: 'Uns-Banner.png',
        kicker: 'Unternehmen',
        headline: 'Über Uns',
        lead: 'Ein Team von „Fensterfreaks" – seit 2002 im Objektgeschäft.',
      },
      blocks: [
        {
          type: 'prose',
          width: 'narrow',
          text: [
            'Die Firma Luxbell Bauelemente Handels GmbH besteht seit 2002 und unser Schwerpunkt liegt im Objektgeschäft von Fenstern und Türen, das wir mit Baufirmen, Genossenschaften und - oder Architekten abwickeln. Technisches Know-how, ein solides Preis-Leistungsgefüge sowie rasche Durchführungszeiten lassen uns als Partner für den Ausführenden am Bau interessant sein.',
            'Wir sind ein Team von "Fensterfreaks" und die meisten von uns sind seit über 30 Jahren in der Fensterbranche tätig. Erfahrung und die Liebe zum Detail ist also mehr als ausreichend vorhanden.',
          ],
        },
        {
          type: 'stats',
          section: 'sand',
          items: [
            { value: 'seit 2002', label: 'am Markt' },
            { value: '30+', label: 'Jahre Erfahrung im Team' },
            { value: '40+', label: 'dokumentierte Objektreferenzen' },
          ],
        },
        {
          type: 'contact',
          title: 'So erreichen Sie uns',
        },
        {
          type: 'cta',
          section: 'sand',
          title: 'Sprechen Sie uns einfach unverbindlich mit Ihrem Anliegen an.',
          text: 'Seit Jahren sind wir mit akribischer Genauigkeit, technischem Feingefühl und jeder Menge Erfahrung in der Fenster und Türen Branche tätig - und das mit Freude und Motivation.',
        },
      ],
    },

    /* ------------------------------------------------------------------ */
    referenzen: {
      title: 'Referenzen',
      description:
        'Ausgewählte Objektreferenzen aus unserem Objektgeschäft mit Fenstern und Türen in Wien und Umgebung.',
      hero: {
        image: 'Referenz-Banner.png',
        kicker: 'Unternehmen',
        headline: 'Referenzen',
        lead: 'Ausgewählte Objektreferenzen aus unserem Objektgeschäft mit Fenstern und Türen.',
      },
      blocks: [],
    },

    /* ------------------------------------------------------------------ */
    kontakt: {
      title: 'Kontakt',
      description:
        'LUXbell Bauelemente Handels GmbH, Prießnitzgasse 6/1/3, 2340 Mödling. Telefon +43 676 88 58 38 88.',
      hero: {
        image: 'Uns-Banner.png',
        kicker: 'Kontakt',
        headline: 'Kontakt',
        lead: 'Sprechen Sie mich einfach unverbindlich mit Ihrem Anliegen an.',
      },
      blocks: [
        {
          type: 'prose',
          width: 'narrow',
          align: 'center',
          text: [
            'Seit Jahren sind wir mit akribischer Genauigkeit, technischem Feingefühl und jeder Menge Erfahrung in der Fenster und Türen Branche tätig. Und das mit Freude und Motivation.',
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
      title: 'Impressum',
      description: 'Impressum und Offenlegung der Luxbell Bauelemente Handels GmbH.',
      hero: null,
      blocks: [
        {
          type: 'imprint',
          width: 'narrow',
          wkoLabel: 'WKO Eintrag',
          mediaOwnerHeading: 'Medieninhaber und Herausgeber',
          detailsHeading: 'Unternehmensdaten',
          privacyHeading: 'Datenschutz',
          privacyText:
            'Diese Website setzt keine Cookies, verwendet keine Tracking- oder Analyse-Dienste und lädt keine Inhalte von Drittanbietern. Es werden keine personenbezogenen Daten erhoben. Wenn Sie uns per E-Mail oder Telefon kontaktieren, verwenden wir Ihre Angaben ausschließlich zur Bearbeitung Ihrer Anfrage.',
          privacyNote:
            'Hinweis für die Redaktion: Bei Bedarf hier eine vollständige, juristisch geprüfte Datenschutzerklärung ergänzen.',
        },
      ],
    },
  },
};
