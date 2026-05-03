import { site } from '../site.js';

export default {
  path: '/usluge/google-oglasavanje/',
  title: 'Google Oglašavanje Crna Gora | Google Ads | MM Digital',
  description:
    'Profesionalno Google oglašavanje u Crnoj Gori. Google Ads kampanje koje dovode klijente koji upravo traže ono što vi nudite. MM Digital.',

  schema: [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: 'Google Ads kampanje',
      provider: { '@type': 'Organization', name: 'MM Digital', url: site.url },
      areaServed: { '@type': 'Country', name: 'Crna Gora' },
      name: 'Google oglašavanje, MM Digital',
      description:
        'Search, Local, Display, Remarketing i YouTube kampanje. Precizno ciljanje, mjerljivi rezultati.',
      url: `${site.url}/usluge/google-oglasavanje/`,
    },
  ],

  blocks: [
    {
      type: 'hero',
      label: 'Usluga · Google Ads',
      title: 'Plaćate samo kad neko klikne. *I taj neko traži baš vas.*',
      subtitle:
        'Google oglašavanje koje dovodi ljude koji aktivno traže ono što vi nudite. Precizno. Mjerljivo. Profitabilno.',
      cta: [{ label: 'Zakaži konsultaciju' }],
      image: 'heroes/analytics-3.jpg',
      imageAlt: 'Google Analytics dashboard sa metrikama',
    },

    {
      type: 'text',
      label: 'Kako radi',
      title: 'Kako radi Google oglašavanje, *bez komplikacija*.',
      paragraphs: [
        'Neko otvori telefon i ukuca ono što vi nudite. Google mu pokaže rezultate. Na vrhu, vaš oglas. Klikne. Vidi vašu ponudu. Pozove. Kupi.',
        '**Plaćate samo kad neko klikne.** Ne za prikazivanje, za interes.',
        'Razlika između Google Ads-a i Instagram oglasa? Na Instagramu prekidate nekoga ko gleda nešto drugo. Na Google-u se pojavljujete nekome ko aktivno traži ono što vi nudite. **To je razlika između reklame i odgovora na pitanje.**',
      ],
      align: 'left',
    },

    {
      type: 'cards',
      label: 'Tipovi kampanja',
      title: 'Naše usluge *Google oglašavanja*',
      cols: 3,
      cards: [
        { icon: '⌖', title: 'Search kampanje', text: 'Vaš oglas kad neko traži vaše usluge. Precizno ciljanje po ključnim riječima i lokaciji.' },
        { icon: '◍', title: 'Local kampanje', text: 'Ciljate ljude u radijusu od vašeg biznisa. Idealno za restorane, salone, servise.' },
        { icon: '◈', title: 'Display kampanje', text: 'Vizuelni oglasi na sajtovima koje vaša ciljna grupa posjećuje.' },
        { icon: '↻', title: 'Remarketing', text: 'Neko je posjetio sajt ali nije kupio? Vaš oglas ga prati i podsjeća.' },
        { icon: '▶', title: 'YouTube Ads', text: 'Video oglasi pred pravom publikom. Najpogodniji format za nove brendove.' },
        { icon: '◳', title: 'Performance Max', text: 'Google AI optimizuje kampanju kroz sve kanale istovremeno za maksimalan ROI.' },
      ],
      alt: true,
    },

    {
      type: 'steps',
      label: 'Pristup',
      title: 'Kako *vodimo kampanje*',
      steps: [
        { title: 'Sedmica 1', text: 'Istraživanje, analiza konkurencije, postavljanje. Strukturiramo kampanje za maksimalnu efikasnost.' },
        { title: 'Sedmica 2-4', text: 'Testiranje, optimizacija, A/B testiranje. Brzo otkrivamo šta radi, gasimo šta ne.' },
        { title: 'Mjesec 2+', text: 'Skaliranje onoga što radi, gašenje onoga što ne radi. Sedmični izvještaj, svaki euro znate na šta je otišao.' },
      ],
    },

    {
      type: 'ctaSection',
      title: 'Spremni da vas Google *pokaže prvima*?',
      button: { label: 'Zakaži besplatnu konsultaciju' },
    },
  ],
};
