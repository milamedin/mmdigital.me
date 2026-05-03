import { site } from '../site.js';

export default {
  path: '/usluge/graficki-dizajn/',
  title: 'Grafički Dizajn Crna Gora | Vizit Karte, Flajeri, Promo | MM Digital',
  description:
    'Profesionalni grafički dizajn u Crnoj Gori. Vizit karte, flajeri, pozivnice, promo materijal, dizajn knjiga. MM Digital, dizajn koji radi posao.',

  schema: [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: 'Grafički dizajn',
      provider: { '@type': 'Organization', name: 'MM Digital', url: site.url },
      areaServed: { '@type': 'Country', name: 'Crna Gora' },
      name: 'Grafički dizajn, MM Digital',
      description:
        'Vizit karte, flajeri, brošure, meniji, katalozi, promo materijal, dizajn za društvene mreže.',
      url: `${site.url}/usluge/graficki-dizajn/`,
    },
  ],

  blocks: [
    {
      type: 'hero',
      label: 'Usluga · Grafički dizajn',
      title: 'Dizajn koji *radi posao*, ne samo koji lijepo izgleda.',
      subtitle:
        'Vizit karte, flajeri, meniji, katalozi, promo materijal. Svaki dizajn ima jedan zadatak: da vaš biznis izgleda onoliko profesionalno koliko zaista jeste.',
      cta: [{ label: 'Zakaži konsultaciju' }],
      image: 'heroes/notebook-2.jpg',
      imageAlt: 'Olovka na otvorenom notesu, kreativni rad',
    },

    {
      type: 'text',
      label: 'Problem',
      title: 'Canva *nije* grafički dizajn.',
      paragraphs: [
        'Hajde da budemo iskreni. Canva je odličan alat. Za ljude koji prave prezentacije za školu.',
        'Ali kada vaša vizit karta izgleda kao template, to se vidi. Kada vaš flajer izgleda kao svaki drugi, niko ga ne pogleda dva puta. Kada vaš katalog izgleda amaterski, **klijent pretpostavlja da je i vaš biznis amaterski.**',
        'Grafički dizajn nije "napraviti nešto lijepo". Grafički dizajn je komunikacija. Svaka boja, svaki font, svaki razmak govori nešto o vašem biznisu. Pitanje je, šta govori vaš trenutni dizajn?',
      ],
      align: 'left',
    },

    {
      type: 'cards',
      label: 'Šta dizajniramo',
      title: 'Naše usluge *dizajna*',
      cols: 4,
      cards: [
        { icon: '◰', title: 'Vizit karte', text: 'Vaša vizit karta je prvi fizički kontakt s potencijalnim klijentom. Ako izgleda jeftino, oni pretpostavljaju da je i vaš biznis jeftin. Naše vizit karte se ne bacaju, čuvaju se.' },
        { icon: '✎', title: 'Flajeri i brošure', text: 'Flajer koji završi u smeću je bačen novac. Flajer koji neko zadrži i pokaže kolegi, to je marketing.' },
        { icon: '◳', title: 'Katalozi i prezentacije', text: 'Za firme koje trebaju profesionalan materijal za klijente, partnere ili investitore.' },
        { icon: '⌘', title: 'Meni dizajn', text: 'Za restorane i kafiće. Meni nije lista, meni je prodajni alat. Pravi dizajn može povećati prosječan račun za 15-25%.' },
        { icon: '◈', title: 'Promo materijal', text: 'Roll-up baneri, plakati, leci, table. Sve za sajmove, evente i promocije.' },
        { icon: '✉', title: 'Pozivnice', text: 'Za korporativne evente, otvaranja, specijalne prilike.' },
        { icon: '⌖', title: 'Knjige i publikacije', text: 'Korice, layout, tipografija. Za kuvare, vodiče, godišnje izvještaje, kataloge.' },
        { icon: '#', title: 'Social media dizajn', text: 'Post template-i, Story dizajn, highlight ikonice. Konzistentan vizuelni identitet na svim platformama.' },
      ],
      alt: true,
    },

    {
      type: 'text',
      label: 'Šta je dizajn',
      title: 'Šta je grafički dizajn, *zaista*?',
      paragraphs: [
        'Grafički dizajn je vizuelna komunikacija. To je način na koji vaš brend govori bez riječi.',
        'Dobar dizajn je nevidljiv. Klijent ne razmišlja "kakav lijep font", nego **osjeti da je firma profesionalna, pouzdana, vrijedna pažnje.** Loš dizajn je vidljiv, jer nešto "ne štima", ali klijent ne zna šta.',
        'Mi znamo šta. I znamo kako da to popravimo.',
      ],
    },

    {
      type: 'ctaSection',
      title: 'Vaš brend zaslužuje *bolji dizajn*.',
      button: { label: 'Zakaži besplatnu konsultaciju' },
    },
  ],
};
