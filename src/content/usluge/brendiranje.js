import { site } from '../site.js';

export default {
  path: '/usluge/brendiranje/',
  title: 'Brendiranje Crna Gora | Vizuelni Identitet | MM Digital',
  description:
    'Profesionalno brendiranje u Crnoj Gori. Vizuelni identitet, brendiranje izloga, prostora, vozila, uniformi. MM Digital, brend koji se pamti.',

  schema: [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: 'Brendiranje',
      provider: { '@type': 'Organization', name: 'MM Digital', url: site.url },
      areaServed: { '@type': 'Country', name: 'Crna Gora' },
      name: 'Brendiranje, MM Digital',
      description:
        'Vizuelni identitet, brendiranje izloga, prostora, vozila, uniformi i promo materijala.',
      url: `${site.url}/usluge/brendiranje/`,
    },
  ],

  blocks: [
    {
      type: 'hero',
      label: 'Usluga · Brendiranje',
      title: 'Brendiranje nije logo na zidu. *Brendiranje je osjećaj koji ostavljate.*',
      subtitle:
        'Vizuelni identitet, brendiranje izloga, prostora, vozila, uniformi. Da vas prepoznaju, i zapamte.',
      cta: [{ label: 'Zakaži konsultaciju' }],
      image: 'heroes/camera-1.jpg',
      imageAlt: 'Profesionalna oprema, snaga vizuelnog identiteta',
    },

    {
      type: 'text',
      label: 'Šta je',
      title: 'Brendiranje, više od *vizuelnog identiteta*.',
      paragraphs: [
        'Brendiranje nije samo logo, boje i fontovi. To je način na koji se ljudi osjećaju kad pomisle na vaš biznis.',
        'Svaki detalj, od izloga do vizit karte, od sajta do uniforme, govori priču. **Pitanje je: da li je to priča koju želite da ispričate?**',
      ],
      align: 'left',
    },

    {
      type: 'text',
      label: 'Izlog',
      title: 'Brendiranje izloga, prvi utisak *koji ne možete ponoviti*.',
      paragraphs: [
        'Vaš izlog je vaš najvažniji oglas. Radi 24/7, ne košta po kliku i vidi ga svako ko prođe.',
        'Brendirani izlog priča priču. Boje, materijali, osvjetljenje, tipografija, sve komunicira ko ste i za koga ste. Prolaznik u djeliću sekunde odlučuje: "Ovo je za mene" ili "Ovo nije za mene."',
        'Mi dizajniramo izloge koji kažu: **"Ovo je za tebe. Uđi."**',
      ],
      alt: true,
    },

    {
      type: 'cards',
      label: 'Šta brendiramo',
      title: 'Naše usluge *brendiranja*',
      cols: 3,
      cards: [
        { icon: '✦', title: 'Vizuelni identitet', text: 'Logo, boje, fontovi, brand guidelines. Sistem koji čini sve dosljednim.' },
        { icon: '◰', title: 'Brendiranje izloga', text: 'Dizajn, materijali, osvjetljenje. Vaš izlog kao 24/7 oglas.' },
        { icon: '◳', title: 'Brendiranje enterijera', text: 'Zidovi, signalizacija, detalji. Da prostor priča vašu priču.' },
        { icon: '◈', title: 'Brendiranje vozila', text: 'Dostava, servisna vozila, flota. Mobilni bilbord.' },
        { icon: '◇', title: 'Brendiranje uniformi', text: 'Majice, kecelje, kape. Profesionalan i prepoznatljiv tim.' },
        { icon: '✎', title: 'Promo materijal', text: 'Vizit karte, flajeri, katalozi, baneri. Sve u jedinstvenom stilu.' },
      ],
    },

    {
      type: 'ctaSection',
      title: 'Vaš brend zaslužuje da bude *prepoznat*.',
      button: { label: 'Zakaži besplatnu konsultaciju' },
    },
  ],
};
