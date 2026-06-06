import { site } from '../site.js';

export default {
  path: '/usluge/fotografija/',
  title: 'Fotograf Crna Gora | Profesionalna Fotografija | MM Digital',
  description:
    'Profesionalni fotograf u Crnoj Gori — Podgorica, Budva, Bar i primorje. Product, food, ambijent, poslovni portreti. Slike koje prodaju, ne samo lijepo izgledaju.',

  schema: [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: 'Profesionalna fotografija',
      provider: { '@type': 'Organization', name: 'MM Digital', url: site.url },
      areaServed: [
        { '@type': 'Country', name: 'Montenegro' },
        { '@type': 'City', name: 'Podgorica' },
        { '@type': 'City', name: 'Budva' },
        { '@type': 'City', name: 'Bar' },
        { '@type': 'City', name: 'Kotor' },
        { '@type': 'City', name: 'Tivat' },
        { '@type': 'City', name: 'Petrovac' },
      ],
      name: 'Profesionalna fotografija, MM Digital',
      description:
        'Product, food, ambijent, poslovne portrete, event i hotelska fotografija širom Crne Gore — Podgorica, Budva, Bar i cijelo primorje.',
      url: `${site.url}/usluge/fotografija/`,
    },
  ],

  blocks: [
    {
      type: 'hero',
      label: 'Usluga · Fotografija',
      title: 'Fotograf u *Crnoj Gori*. Slike koje prodaju.',
      subtitle:
        'Poslovne fotografije, produkti, food, ambijent, tim. Radimo u Podgorici, Budvi, Baru i na cijelom primorju. Profesionalne slike koje pretvaraju posjetioce u klijente.',
      cta: [{ label: 'Zakaži snimanje' }],
      visualText: 'Crna Gora',
    },

    {
      type: 'text',
      label: 'Problem',
      title: 'Vaše slike *koštaju vas klijente*. I ne znate to.',
      paragraphs: [
        'Znate onu sliku proizvoda koju ste snimili telefonom u lošem svjetlu? Onu s žutom nijansom i sjenom od ruke? Ta slika je na vašem sajtu. Na Instagramu. Na Google-u.',
        'Svaki put kad potencijalni klijent vidi tu sliku, donosi odluku. Ne svjesno, podsvjesno. **"Ovo ne izgleda profesionalno."** Scroll. Otišao je. Kod konkurencije koja ima bolje slike.',
        'Dobra vijest: ne trebate profesionalnog fotografa svaki dan. Trebate ga jednom, da napravi slike koje će raditi za vas mjesecima.',
      ],
      align: 'left',
    },

    {
      type: 'cards',
      theme: 'light',
      label: 'Gdje radimo',
      title: 'Fotograf u *vašem gradu*',
      cols: 3,
      cards: [
        { icon: '◉', title: 'Fotograf Podgorica', text: 'Snimamo na lokaciji vašeg biznisa u glavnom gradu. Product, korporativni portreti, food, ambijent.', href: '/usluge/fotografija/podgorica/' },
        { icon: '☀', title: 'Fotograf Budva', text: 'Hotelska, ugostiteljska i sezonska fotografija na primorju. Materijal za cijelu sezonu iz jedne sesije.', href: '/usluge/fotografija/budva/' },
        { icon: '⚓', title: 'Fotograf Bar', text: 'Poslovna i produktna fotografija u Baru i okolini. Manja konkurencija, vi se istaknete prvi.', href: '/usluge/fotografija/bar/' },
      ],
    },

    {
      type: 'cards',
      label: 'Šta fotografišemo',
      title: 'Naše usluge *fotografije*',
      cols: 3,
      cards: [
        { icon: '◉', title: 'Product fotografija', text: 'Vaši proizvodi u najboljem svjetlu. Za sajt, katalog, social media.' },
        { icon: '◍', title: 'Food fotografija', text: 'Jelo koje izgleda ukusno na slici donosi goste. Znamo kako.' },
        { icon: '✦', title: 'Poslovni portreti', text: 'Tim, vlasnik, menadžment. Ljudi žele da vide ko stoji iza biznisa.' },
        { icon: '◳', title: 'Ambijent i enterijer', text: 'Atmosfera vašeg prostora na slici. Za hotele, restorane, kancelarije, salone.' },
        { icon: '◈', title: 'Event fotografija', text: 'Otvaranja, konferencije, sajmovi, korporativni eventi.' },
        { icon: '#', title: 'Slike za web i social', text: 'Komplet fotografija optimizovanih za sve kanale. Jedan dan snimanja = materijal za 3-6 mjeseci.' },
      ],
    },

    {
      type: 'text',
      label: 'Zašto MM Digital',
      title: 'Fotograf pravi lijepe slike. Mi pravimo slike koje *prodaju*.',
      paragraphs: [
        'Razlika? Mi razmišljamo o tome kako će ta slika izgledati na Instagramu, na Google-u, na sajtu. Koji format za koji kanal. Koja slika će natjerati nekoga da klikne, pozove, kupi.',
        '**Jer mi nismo samo fotografi. Mi smo marketeri koji znaju da fotografišu.** Trebate i da te slike negdje žive? Radimo [izradu sajtova](/usluge/izrada-sajtova/) i [vođenje društvenih mreža](/usluge/vodjenje-mreza/) — slike i kanal iz iste ruke.',
      ],
    },

    {
      type: 'ctaSection',
      title: 'Vaš biznis zaslužuje *bolje slike*.',
      button: { label: 'Zakaži snimanje' },
    },
  ],
};
