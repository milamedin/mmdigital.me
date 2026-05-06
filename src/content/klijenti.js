import { site } from './site.js';

export default {
  path: '/klijenti/',
  title: 'Klijenti, MM Digital | Brendovi koji su nam ukazali povjerenje',
  description:
    'Klijenti i saradnici MM Digital agencije, hoteli, restorani, lokalna samouprava, butici, agencije. Brendovi za koje radimo dizajn, marketing i sajtove u Crnoj Gori.',

  schema: [
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'Klijenti i saradnici, MM Digital',
      url: `${site.url}/klijenti/`,
      mainEntity: { '@type': 'Organization', name: 'MM Digital', url: site.url },
    },
  ],

  blocks: [
    {
      type: 'hero',
      label: 'Klijenti',
      title: 'Brendovi koji su nam *ukazali povjerenje*.',
      subtitle:
        'Hoteli, restorani, lokalna samouprava, butici, agencije, radili smo s biznisima različitih veličina i industrija. Svaki je imao svoj problem i svoje rješenje.',
      cta: [{ label: 'Postani sljedeći', href: '/kontakt/' }],
      image: 'heroes/handshake-1.jpg',
      imageAlt: 'Stisak ruke nakon poslovnog razgovora',
    },

    {
      type: 'clientsGrid',
      auto: true,
      label: 'Svi klijenti',
      title: 'Saradnja koja se *vidi*.',
      intro:
        'Logo predstavlja brend, ali svaki od ovih ima priču iza sebe, kampanju, dizajn, sajt, ili sve odjednom. Diskreciju cijenimo, pa konkretne projekte pokazujemo na sastanku.',
    },

    {
      type: 'text',
      theme: 'light',
      label: 'Industrije',
      title: 'Sa kim *radimo* (i sa kim ne).',
      paragraphs: [
        'Najviše iskustva imamo u **ugostiteljstvu** (hoteli, restorani, kafići), **lokalnoj samoupravi**, **maloprodaji** (butici, salon, prodavnice) i **uslugama** (rent-a-car, agencije, profesionalci).',
        'Ne radimo s biznisima koji prodaju nešto u šta ne vjerujemo. Ne radimo s ljudima koji žele "garantovane rezultate" preko noći. Ne radimo bez transparentnih ugovora.',
        'Ako vaš biznis pripada nekoj od industrija gore, ili je nešto sasvim drugo ali znate šta radite, [razgovarajmo](/kontakt/).',
      ],
      align: 'left',
    },

    {
      type: 'ctaSection',
      title: 'Spremni da postanete sljedeći klijent?',
      text: 'Zakažite besplatnu konsultaciju. 30 minuta razgovora i dobijete realnu procjenu šta vam treba i koliko košta.',
      button: { label: 'Zakaži besplatnu konsultaciju' },
    },
  ],
};
