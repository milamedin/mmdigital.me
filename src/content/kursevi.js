import { site } from './site.js';

export default {
  path: '/kursevi/',
  title: 'Marketing Kursevi | Digitalni Marketing Obuka | MM Digital',
  description:
    'Naučite digitalni marketing od profesionalaca. Online kursevi od osnova do naprednih strategija. MM Digital, znanje koje donosi rezultate.',

  schema: [
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'MM Digital Kursevi',
      url: `${site.url}/kursevi/`,
      about: 'Marketing kursevi i obuke',
    },
  ],

  blocks: [
    {
      type: 'hero',
      label: 'Kursevi',
      title: 'Ne trebate agenciju. Trebate *znanje*.',
      subtitle:
        'Ako nemate budžet za agenciju, ili ako želite da razumijete marketing prije nego angažujete nekoga, ovi kursevi su za vas.',
      cta: [{ label: 'Pogledaj kurseve', href: '#kursevi' }],
      image: 'heroes/course-2.jpg',
      imageAlt: 'Laptop i kafa, online kurs i učenje',
    },

    {
      type: 'text',
      label: 'Za koga',
      title: 'Za koga su *ovi kursevi*?',
      paragraphs: [
        'Za vlasnike biznisa koji sami vode marketing i ne znaju šta da rade. Za marketing menadžere koji znaju da nešto ne radi, ali ne znaju šta. Za freelancere koji žele da prošire znanje. Za studente koji žele praktično znanje, ne teoriju.',
        'Svaka lekcija je praktična, **s primjerima, šablonima i checklistama** koje možete primijeniti istog dana.',
      ],
      align: 'left',
    },

    {
      type: 'cards',
      label: 'Kursevi',
      title: 'Odaberite svoj *nivo*',
      cols: 3,
      cards: [
        {
          icon: '◇',
          title: 'STARTER',
          text: '**29€**, Osnove digitalnog marketinga. 5 modula, 2-3 sata. Za potpune početnike. Razumjećete kako sve funkcioniše bez tehničkog žargona.',
        },
        {
          icon: '◆',
          title: 'GLAVNI KURS',
          text: '**297€**, Kompletna marketing strategija. 8 modula, 12-15 sati. Za ozbiljne. Korak po korak, od strategije do implementacije.',
        },
        {
          icon: '✦',
          title: 'MASTER PROGRAM',
          text: '**797€**, Napredne strategije + grupni coaching. Za profesionalce. Mjesečne sesije, lični feedback, pristup zatvorenoj zajednici.',
        },
      ],
      alt: true,
    },

    {
      type: 'text',
      paragraphs: [
        'Kursevi su trenutno u finalizaciji. Prijavite se da budete prvi koji će dobiti pristup kad budu live, ranciji bookersi dobijaju **30% popusta**.',
      ],
    },

    {
      type: 'ctaSection',
      title: 'Investirajte u znanje, *ne u pokušaje*.',
      text: 'Ostavite svoj kontakt i obavijestićemo vas čim kursevi krenu. Bez spam-a.',
      button: { label: 'Prijavi me za kurs' },
    },
  ],
};
