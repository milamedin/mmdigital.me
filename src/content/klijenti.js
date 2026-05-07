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
        'Najviše iskustva imamo u **ugostiteljstvu** (hoteli, restorani, kafići), **lokalnoj samoupravi**, **maloprodaji** (butici, saloni, prodavnice) i **uslužnim djelatnostima** (rent-a-car, agencije, advokati, arhitekti, konsultanti). To su industrije u kojima znamo kako klijenti razmišljaju, kako se odlučuju i šta od marketinga zaista očekuju.',
        'Radili smo na primorju i u Podgorici, sa porodičnim biznisima i sa firmama koje imaju desetine zaposlenih. Sa onima koji tek otvaraju vrata i sa onima koji posluju decenijama. **Veličina nas ne brine, namjera da se radi pošteno, da.**',
        'Ne radimo s biznisima koji prodaju nešto u šta ne vjerujemo. Ne radimo s ljudima koji žele "garantovane rezultate" preko noći. Ne radimo bez transparentnih ugovora i jasnih očekivanja na obje strane. Bolje je da odbijemo posao na samom početku, nego da klijent i mi gubimo vrijeme na nešto što ne vodi nigdje.',
        'Ako vaš biznis pripada nekoj od industrija gore, ili je nešto sasvim drugo ali znate šta radite, [razgovarajmo](/kontakt/). Konsultacija je besplatna i traje 30 minuta. Bez prodajnog pitcha.',
      ],
      align: 'left',
    },

    {
      type: 'values',
      label: 'Pristup',
      title: 'Šta dobijate kad postanete *naš klijent*.',
      items: [
        { title: 'Jedan tim, jedan poziv.', text: 'Ne morate da koordinišete tri freelancera, dva agencije i jednog rođaka. Sve, od strategije do produkcije, radimo mi. Odgovornost ne pada između stolica.' },
        { title: 'Iskreni izvještaji.', text: 'Mjesečno dobijate brojeve. Šta je radilo, šta nije, šta mijenjamo. Bez ukrasa. Ako kampanja ne donosi rezultat, prvi ćemo vam reći i predložiti šta dalje.' },
        { title: 'Pristup koji raste s vama.', text: 'Krenete s jednim sajtom, narednog mjeseca dodate Instagram, kasnije Google oglase. Ne morate od prvog dana znati sve. Mi gradimo plan koji se prilagođava brzini vašeg biznisa.' },
      ],
    },

    {
      type: 'ctaSection',
      title: 'Spremni da postanete sljedeći klijent?',
      text: 'Zakažite besplatnu konsultaciju. 30 minuta razgovora i dobijete realnu procjenu šta vam treba i koliko košta.',
      button: { label: 'Zakaži besplatnu konsultaciju' },
    },
  ],
};
