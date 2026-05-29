import { site } from '../site.js';

export default {
  path: '/usluge/izrada-sajtova/',
  title: 'Izrada Sajtova Crna Gora | Web Dizajn Podgorica | MM Digital',
  description:
    'Profesionalna izrada sajtova u Crnoj Gori. Web dizajn, responsive sajtovi, e-commerce. MM Digital, sajtovi koji pretvaraju posjetioce u klijente.',

  schema: [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: 'Izrada sajtova',
      provider: { '@type': 'Organization', name: 'MM Digital', url: site.url },
      areaServed: { '@type': 'Country', name: 'Crna Gora' },
      name: 'Izrada sajtova, MM Digital',
      description:
        'Profesionalna izrada web sajtova u Crnoj Gori. Responsive dizajn, SEO optimizacija, sistem za konverziju.',
      url: `${site.url}/usluge/izrada-sajtova/`,
      offers: { '@type': 'Offer', priceCurrency: 'EUR', price: '500', priceSpecification: { '@type': 'PriceSpecification', price: '500', priceCurrency: 'EUR', valueAddedTaxIncluded: false } },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Koliko košta web sajt u Crnoj Gori?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Cijena zavisi od tipa sajta. Landing page od 500€, poslovni sajt od 1.200€, e-commerce od 2.500€. Custom projekti po dogovoru.',
          },
        },
        {
          '@type': 'Question',
          name: 'Koliko traje izrada sajta?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Standardni poslovni sajt traje 4 sedmice, od početnog razgovora do objavljivanja. Veći projekti i e-commerce mogu trajati 6-10 sedmica.',
          },
        },
        {
          '@type': 'Question',
          name: 'Šta je uključeno u izradu sajta?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Responsive dizajn, SEO optimizacija, sistem za konverziju, Google Analytics, brzina iznad 80 i CMS po potrebi, sve uključeno.',
          },
        },
      ],
    },
  ],

  blocks: [
    {
      type: 'hero',
      label: 'Usluga · Izrada sajtova',
      title: 'Vaš sajt ima *3 sekunde*. Ili osvoji klijenta, ili ga izgubi zauvijek.',
      subtitle:
        'Pravimo sajtove koji ne samo lijepo izgledaju, nego pretvaraju posjetioce u klijente. Brzi, mobilni, optimizovani za Google.',
      cta: [{ label: 'Zakaži konsultaciju' }],
      image: 'heroes/coding-1.jpg',
      imageAlt: 'Laptop sa kodom, razvoj web sajta',
    },

    {
      type: 'text',
      label: 'Problem',
      title: 'Istina o vašem sajtu *koju vam niko neće reći*.',
      paragraphs: [
        'Vaš sajt se učitava 5 sekundi. Na mobilnom izgleda kao da ga je neko stisnuo u kutiju. Google ga ne poznaje. Konkurencija se pojavljuje prije vas.',
        'I najgore, platili ste nekome da vam to napravi. Dobili ste "sajt". **Ali niste dobili alat koji radi za vas.**',
        'Sajt nije digitalna vizit karta. Sajt je vaš najbolji prodavac, radi 24 sata dnevno, 7 dana u sedmici, ne traži platu i ne ide na godišnji odmor. Ali samo ako je napravljen kako treba.',
      ],
      align: 'left',
    },

    {
      type: 'text',
      label: 'Lokalno',
      title: 'Izrada sajtova u *Podgorici*, ali ne bilo kakvih sajtova.',
      paragraphs: [
        'U Crnoj Gori možete naći nekoga ko će vam napraviti sajt za 300€. Možete naći i nekoga ko će naplatiti 5.000€. Razlika nije u tome koliko je lijep, **nego u tome koliko zarađuje.**',
        'Sajt od 300€ izgleda pristojno. Ali se učitava sporo, nije optimizovan za Google, nema jasnu strukturu za konverziju i na mobilnom je neupotrebljiv.',
        'Naši sajtovi su drugačiji. Svaka stranica, svako dugme, svaki tekst ima jedan cilj: da posjetilac postane klijent.',
      ],
    },

    {
      type: 'cards',
      label: 'Šta dobijate',
      title: 'Šta je *uključeno* u svaki sajt',
      cols: 3,
      cards: [
        { icon: '◰', title: 'Responsive dizajn', text: 'Savršeno na telefonu, tabletu i računaru. 70% posjetilaca dolazi s telefona.' },
        { icon: '⌖', title: 'SEO optimizacija', text: 'Meta tagovi, heading struktura, brzina, sitemap. Da vas Google nađe.' },
        { icon: '◈', title: 'Sistem za konverziju', text: 'Kontakt forme, booking sistemi, CTA dugmad. Svaka stranica vodi ka akciji.' },
        { icon: '◳', title: 'Google Analytics', text: 'Znate tačno koliko ljudi posjećuje sajt, odakle dolaze i šta rade.' },
        { icon: '⚡', title: 'Brzina', text: 'Page Speed score iznad 80. Svaka sekunda čekanja smanjuje konverziju za 7%.' },
        { icon: '✎', title: 'CMS (po potrebi)', text: 'Da sami možete mijenjati tekstove, slike i cijene bez programera.' },
      ],
      alt: true,
    },

    {
      type: 'pricing',
      theme: 'light',
      label: 'Cijene',
      title: 'Koliko košta *web sajt*?',
      columns: ['Tip sajta', 'Cijena', 'Šta je uključeno'],
      rows: [
        ['Landing page', 'od 500€', '1 stranica, CTA, kontakt forma'],
        ['Poslovni sajt', 'od 1.200€', '5-8 stranica, SEO, responsive, CMS'],
        ['E-commerce', 'od 2.500€', 'Online prodavnica, plaćanje, upravljanje'],
        ['Custom projekat', 'po dogovoru', 'Sve što vam treba'],
      ],
      note: 'Zakažite konsultaciju za tačnu ponudu prilagođenu vašem biznisu.',
    },

    {
      type: 'text',
      label: 'Brza opcija',
      title: 'Treba vam sajt *brzo*? Imamo poseban paket.',
      paragraphs: [
        'Za biznise koji trebaju profesionalan sajt **što prije**, imamo paket [Sajt za 72h](/sajt-za-72h/) — kompletan paket sa fiksnom cijenom od 799€, od dogovora do live verzije za tri radna dana.',
        'Custom dizajn (ne template), 3–5 stranica, hosting i standardni domen prvu godinu, SEO setup, prevod na engleski, 30 dana podrške. Sve uključeno, bez skrivenih troškova.',
        '[Pogledajte detalje paketa →](/sajt-za-72h/)',
      ],
      alt: true,
    },

    {
      type: 'steps',
      label: 'Proces',
      title: 'Naš proces *izrade sajta*',
      steps: [
        { title: 'Razgovor', text: 'Dan 1. Razumijemo vaš biznis i ciljeve.' },
        { title: 'Struktura i sadržaj', text: 'Sedmica 1. Planiramo strukturu, pišemo tekstove, biramo vizuale.' },
        { title: 'Dizajn', text: 'Sedmica 2. Vizuelni dizajn. Pokazujemo vam i tražimo feedback.' },
        { title: 'Razvoj', text: 'Sedmica 3. Kodiramo. Responsive, brz, optimizovan. Testiramo na svim uređajima.' },
        { title: 'Objavljivanje', text: 'Sedmica 4. Sajt je u prodaji. Google Analytics, Search Console, sitemap, sve konfigurisano.' },
      ],
      alt: true,
    },

    {
      type: 'text',
      label: 'Web dizajn',
      title: 'Web dizajn u *Crnoj Gori*, šta tražiti?',
      paragraphs: [
        'Kada birate nekoga za izradu sajta, pitajte tri stvari:',
      ],
      list: [
        '**"Možete li mi pokazati sajt koji ste napravili, i koliko posjetilaca ima?"** Ako ne mogu, bježite.',
        '**"Da li je sajt optimizovan za Google?"** Ako kažu "to je dodatna usluga", bježite.',
        '**"Šta se dešava nakon što sajt bude objavljen?"** Ako kažu "ništa, sajt je gotov", bježite.',
      ],
    },

    {
      type: 'ctaSection',
      title: 'Vaš sajt može *bolje*.',
      button: { label: 'Zakaži besplatnu konsultaciju' },
    },
  ],
};
