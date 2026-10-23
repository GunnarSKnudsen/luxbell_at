/**
 * LUXbell Website Content (DE/EN)
 * Edit text here. Structure: LUXBELL_CONTENT[lang].*
 */
const LUXBELL_CONTENT = {
  de: {
    siteTitle: 'LUXbell - Fenster - Türen - Sonnenschutz',
    companyName: 'LUXbell',
    companySubtitle: 'Fenster und Türen Handels GmbH',

    contact: {
      phone: '+43 676 88 58 38 88',
      address: 'Feldgasse 46',
      postalCode: '3130',
      city: 'Herzogenburg',
      email: 'office@luxbell.at',
      web: 'www.luxbell-fenster.at',
    },

    legal: {
      tradeRegister: 'Firmenbuchnummer: FN 674264',
      vatId: 'UID-Nummer: ATU83068543',
      gisa: 'GISA Zahl: 39419538',
      taxNumber: 'Steuernummer: 29 247/1732',
      authority: 'Bezirkshauptmannschaft St. Pölten',
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
            name: 'Aluplast IDEAL NEO',
            image: 'IDEAL_NEO_Fenster.jpg',
            features: [
              '76 mm Bautiefe',
              'Mitteldichtungssystem mit drei Dichtebenen für einen erhöhten Einbruchschutz',
              'Glasleisten – Qube-line',
              'Verglasungsstärke Flügel max. 53 mm',
              'RC2 geprüfte Einbruchsicherheit möglich',
              'Nicht sichtbare Entwässerung möglich',
            ],
          },
          {
            name: 'Aluplast IDEAL 8000',
            image: 'IDEAL8000_Fenster_quadratisch.jpg',
            features: [
              '85 mm Bautiefe',
              'Hoch wärmegedämmtes 6-Kammer-Profilsystem mit RAL-Gütezeichen',
              'Uf-Wert 1,0 W/m²K',
              'Mitteldichtungssystem mit drei Dichtebenen',
              'Verglasungsstärke von 20 bis 51 mm',
              'Dreifachverglasung bis Ug-Wert 0,6 W/m²K',
              'Ausführung in Weiß oder Dekor',
              'Bis zu 97 % recycelbare Materialien',
            ],
          },
        ],
        body2: 'Die langlebigen Kunststoffprofile zeichnen sich durch langjährige Beständigkeit gegen Witterungsverhältnisse aus und garantieren Ihnen Zuverlässigkeit und Sorgenfreiheit über viele Jahre. Produkte auf höchstem technischen Niveau.',
        body3: 'Clevere Technik – edles Design: Die elegante Optik von Aluminium liegt voll im Trend. Auch der Look Ihrer Fenster lässt sich veredeln: mit Aluminiumvorsatzschalen von aluplast. Die Kombination vereint die herausragenden Wärmedämmeigenschaften des Kunststofffensters mit dem modernen Look von Aluminium. Eine Beschichtung der Aluminiumvorsatzschalen in allen RAL-Farben ist möglich.',
        aluImage: 'pvc-alu_klein.jpg',
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
          { label: 'Katalog Alutüren und Zubehör – Download', url: 'docs/Katalog_Alutueren_und_Zubehoer.pdf' },
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
        body: 'Die Firma LUXBELL Fenster und Türen Handels GmbH besteht seit 2026 und unser Schwerpunkt liegt im Objektgeschäft von Fenstern und Türen, das wir mit Baufirmen, Genossenschaften und - oder Architekten abwickeln. Technisches Know-how, ein solides Preis-Leistungsgefüge sowie rasche Durchführungszeiten lassen uns als Partner für den Ausführenden am Bau interessant sein.',
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
      companyFull: 'LUXBELL Fenster und Türen Handels GmbH',
      wkoLink: 'https://firmen.wko.at/luxbell-fenster-und-t%C3%BCren-handels-gmbh/nieder%C3%B6sterreich/?firmaid=b0ec4c80-3695-4468-abab-4c4807aec2b4',
      wkoLabel: 'WKO Eintrag',
    },

    // Datenschutzerklärung. Contact details of the controller are filled in from `contact` by app.js.
    datenschutz: {
      title: 'Datenschutzerklärung',
      intro: 'Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir verarbeiten Ihre Daten ausschließlich auf Grundlage der gesetzlichen Bestimmungen (DSGVO, DSG, TKG 2021). In dieser Datenschutzerklärung informieren wir Sie über die wichtigsten Aspekte der Datenverarbeitung im Rahmen unserer Website.',
      controllerTitle: 'Verantwortlicher',
      sections: [
        {
          heading: 'Hosting und Server-Logfiles',
          paragraphs: [
            'Diese Website wird bei der Hetzner Online GmbH, Industriestr. 25, 91710 Gunzenhausen, Deutschland, gehostet. Mit dem Anbieter besteht ein Vertrag zur Auftragsverarbeitung gemäß Art. 28 DSGVO; die Server befinden sich in der EU.',
            'Beim Aufruf der Website werden vom Webserver automatisch technisch notwendige Informationen gespeichert: IP-Adresse, Datum und Uhrzeit des Zugriffs, aufgerufene Seite bzw. Datei, übertragene Datenmenge, Referrer-URL sowie Browsertyp und Betriebssystem. Diese Daten dienen ausschließlich dem sicheren und stabilen Betrieb der Website und werden nicht mit anderen Datenquellen zusammengeführt. Rechtsgrundlage ist unser berechtigtes Interesse gemäß Art. 6 Abs. 1 lit. f DSGVO. Die Logfiles werden nur so lange gespeichert, wie es für diesen Zweck erforderlich ist, und anschließend gelöscht.',
          ],
        },
        {
          heading: 'Cookies und lokale Speicherung',
          paragraphs: [
            'Diese Website verwendet keine Cookies. Wenn Sie die Sprache (Deutsch/Englisch) umschalten, wird Ihre Auswahl im lokalen Speicher Ihres Browsers (Local Storage) abgelegt, damit die Website beim nächsten Besuch in der gewählten Sprache angezeigt wird. Diese Information wird nicht an uns übertragen und kann jederzeit über die Browsereinstellungen gelöscht werden. Die Speicherung ist für die von Ihnen gewünschte Funktion unbedingt erforderlich (§ 165 Abs. 3 TKG 2021).',
          ],
        },
        {
          heading: 'Keine Analyse- und Tracking-Dienste',
          paragraphs: [
            'Wir setzen keine Webanalyse-, Tracking- oder Werbedienste und keine Social-Media-Plugins ein. Schriftarten werden lokal von unserem Server geladen; es werden dabei keine Daten an Dritte übermittelt.',
          ],
        },
        {
          heading: 'Kontaktaufnahme',
          paragraphs: [
            'Wenn Sie uns per E-Mail oder Telefon kontaktieren, verarbeiten wir die von Ihnen übermittelten Daten (z. B. Name, Kontaktdaten, Inhalt Ihrer Anfrage) zur Bearbeitung Ihres Anliegens und für mögliche Anschlussfragen. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Anbahnung bzw. Erfüllung eines Vertrags) bzw. unser berechtigtes Interesse an der Beantwortung von Anfragen (Art. 6 Abs. 1 lit. f DSGVO). Die Daten werden gelöscht, sobald sie nicht mehr erforderlich sind, sofern keine gesetzlichen Aufbewahrungspflichten (z. B. nach UGB oder BAO) entgegenstehen.',
          ],
        },
        {
          heading: 'Links zu anderen Websites',
          paragraphs: [
            'Unsere Website enthält Links zu externen Websites (z. B. WKO Firmen A-Z). Für die Datenverarbeitung auf diesen Websites ist der jeweilige Betreiber verantwortlich.',
          ],
        },
        {
          heading: 'Ihre Rechte',
          paragraphs: [
            'Ihnen stehen grundsätzlich die Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch zu. Wenden Sie sich dazu bitte an die oben angegebenen Kontaktdaten.',
            'Wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht verstößt, können Sie sich bei der Aufsichtsbehörde beschweren. In Österreich ist dies die Datenschutzbehörde, Barichgasse 40–42, 1030 Wien, <a href="https://www.dsb.gv.at" target="_blank" rel="noopener">www.dsb.gv.at</a>.',
          ],
        },
      ],
      updated: 'Stand: Oktober 2026',
    },

    langLabel: 'DE',
    langSwitch: 'EN',
    refLabels: { auftraggeber: 'Auftraggeber', bauvorhaben: 'Bauvorhaben', ausfuehrungsart: 'Ausführungsart', beschreibung: 'Beschreibung' },
  },

  en: {
    siteTitle: 'LUXbell - Windows - Doors - Sun Protection',
    companyName: 'LUXbell',
    companySubtitle: 'Fenster und Türen Handels GmbH',

    contact: {
      phone: '+43 676 88 58 38 88',
      address: 'Feldgasse 46',
      postalCode: '3130',
      city: 'Herzogenburg',
      email: 'office@luxbell.at',
      web: 'www.luxbell-fenster.at',
    },

    legal: {
      tradeRegister: 'Company register: FN 674264',
      vatId: 'VAT ID: ATU83068543',
      gisa: 'GISA: 39419538',
      taxNumber: 'Tax number: 29 247/1732',
      authority: 'Bezirkshauptmannschaft St. Pölten',
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
            name: 'Aluplast IDEAL NEO',
            image: 'IDEAL_NEO_Fenster.jpg',
            features: [
              '76 mm frame depth',
              'Central sealing system with three sealing planes for improved burglar resistance',
              'Glazing beads – Qube-line',
              'Sash glazing thickness up to 53 mm',
              'RC2 certified burglar resistance possible',
              'Concealed drainage possible',
            ],
          },
          {
            name: 'Aluplast IDEAL 8000',
            image: 'IDEAL8000_Fenster_quadratisch.jpg',
            features: [
              '85 mm frame depth',
              'Highly insulated 6-chamber profile system with RAL quality mark',
              'Uf value 1.0 W/m²K',
              'Central sealing system with three sealing planes',
              'Glazing thickness from 20 to 51 mm',
              'Triple glazing down to Ug 0.6 W/m²K',
              'Available in white or decor finishes',
              'Up to 97 % recyclable materials',
            ],
          },
        ],
        body2: 'The durable PVC profiles offer long-term resistance to weather and guarantee reliability and peace of mind for many years. Products at the highest technical level.',
        body3: 'Smart technology – elegant design: The look of aluminium is very much on trend. Your windows can be upgraded too with aluplast aluminium cladding. The combination brings together the outstanding thermal performance of PVC windows with a modern aluminium look. Coating of the aluminium cladding in all RAL colours is possible.',
        aluImage: 'pvc-alu_klein.jpg',
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
          { label: 'Aluminium doors and accessories catalogue – Download', url: 'docs/Katalog_Alutueren_und_Zubehoer.pdf' },
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
        body: 'LUXBELL Fenster und Türen Handels GmbH has been in business since 2026. We focus on the project business for windows and doors with construction firms, housing cooperatives and architects. Technical expertise, solid value for money and short lead times make us an attractive partner on site.',
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
      companyFull: 'LUXBELL Fenster und Türen Handels GmbH',
      wkoLink: 'https://firmen.wko.at/luxbell-fenster-und-t%C3%BCren-handels-gmbh/nieder%C3%B6sterreich/?firmaid=b0ec4c80-3695-4468-abab-4c4807aec2b4',
      wkoLabel: 'WKO entry',
    },

    // Privacy policy. Contact details of the controller are filled in from `contact` by app.js.
    datenschutz: {
      title: 'Privacy Policy',
      intro: 'Protecting your personal data is important to us. We process your data exclusively on the basis of the applicable legal provisions (GDPR, Austrian DSG, TKG 2021). This privacy policy explains the most important aspects of data processing on our website.',
      controllerTitle: 'Controller',
      sections: [
        {
          heading: 'Hosting and server log files',
          paragraphs: [
            'This website is hosted by Hetzner Online GmbH, Industriestr. 25, 91710 Gunzenhausen, Germany. A data processing agreement pursuant to Art. 28 GDPR is in place with the provider; the servers are located in the EU.',
            'When you visit the website, the web server automatically stores technically necessary information: IP address, date and time of access, page or file requested, amount of data transferred, referrer URL, and browser type and operating system. This data is used solely to operate the website securely and reliably and is not combined with other data sources. The legal basis is our legitimate interest pursuant to Art. 6(1)(f) GDPR. Log files are kept only as long as necessary for this purpose and are then deleted.',
          ],
        },
        {
          heading: 'Cookies and local storage',
          paragraphs: [
            'This website does not use cookies. If you switch the language (German/English), your choice is saved in your browser\'s local storage so that the website is shown in that language on your next visit. This information is not transmitted to us and can be deleted at any time in your browser settings. Storing it is strictly necessary for the function you requested (§ 165(3) TKG 2021).',
          ],
        },
        {
          heading: 'No analytics or tracking',
          paragraphs: [
            'We do not use web analytics, tracking or advertising services, or social media plugins. Fonts are loaded locally from our own server; no data is transferred to third parties.',
          ],
        },
        {
          heading: 'Contacting us',
          paragraphs: [
            'If you contact us by email or phone, we process the data you provide (e.g. name, contact details, content of your enquiry) to handle your request and any follow-up questions. The legal basis is Art. 6(1)(b) GDPR (pre-contractual measures or performance of a contract) or our legitimate interest in answering enquiries (Art. 6(1)(f) GDPR). The data is deleted once it is no longer needed, unless statutory retention obligations (e.g. under the Austrian UGB or BAO) apply.',
          ],
        },
        {
          heading: 'Links to other websites',
          paragraphs: [
            'Our website contains links to external websites (e.g. the WKO company directory). The respective operator is responsible for data processing on those websites.',
          ],
        },
        {
          heading: 'Your rights',
          paragraphs: [
            'You have the right to access, rectification, erasure, restriction of processing, data portability and objection. To exercise these rights, please use the contact details above.',
            'If you believe that the processing of your data violates data protection law, you can lodge a complaint with the supervisory authority. In Austria, this is the Datenschutzbehörde, Barichgasse 40–42, 1030 Vienna, <a href="https://www.dsb.gv.at" target="_blank" rel="noopener">www.dsb.gv.at</a>.',
          ],
        },
      ],
      updated: 'Last updated: October 2026',
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
