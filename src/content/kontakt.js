import { site } from './site.js';

const c = site.contact;

export default {
  path: '/kontakt/',
  title: 'Kontakt, MM Digital | Marketing Agencija Crna Gora',
  description:
    'Kontaktirajte MM Digital. Besplatna konsultacija, bez obaveza. Odgovaramo u roku od 24 sata.',

  schema: [
    {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      name: 'Kontakt, MM Digital',
      url: `${site.url}/kontakt/`,
      mainEntity: {
        '@type': 'Organization',
        name: 'MM Digital',
        email: c.email,
        telephone: c.phoneHref,
        address: {
          '@type': 'PostalAddress',
          streetAddress: c.address.street,
          addressLocality: c.address.city,
          postalCode: c.address.postal,
          addressCountry: 'ME',
        },
      },
    },
  ],

  blocks: [
    {
      type: 'hero',
      label: 'Kontakt',
      title: 'Hajde da razgovaramo o *vašem biznisu*.',
      subtitle:
        'Besplatna konsultacija. 30 minuta. Bez obaveza. Bez prodajnog pitcha. Samo iskren razgovor o tome kako možemo pomoći.',
      meta: 'Odgovaramo u roku od 24 sata.',
      image: 'heroes/letter-1.jpg',
      imageAlt: 'Pismo i kafa, početak razgovora',
    },

    {
      type: 'contact',
      contact: c,
      endpoint: site.formEndpoint,
    },

    {
      type: 'steps',
      theme: 'light',
      label: 'Šta dalje',
      title: 'Šta se dešava nakon što *pošaljete poruku*?',
      steps: [
        { title: 'Odgovor', text: 'Odgovaramo u roku od 24 sata (obično brže).' },
        { title: 'Konsultacija', text: 'Zakazujemo besplatnu konsultaciju (30 min, online ili uživo).' },
        { title: 'Analiza', text: 'Analiziramo vaš trenutni marketing i kažemo vam tačno gdje su prilike.' },
        { title: 'Prijedlog', text: 'Ako se slažemo da možemo pomoći, šaljemo prijedlog s cijenama i planom.' },
      ],
    },

    {
      type: 'text',
      paragraphs: [
        '*Nema pritiska. Nema "ograničene ponude". Nema prodajnih trikova. Samo iskren razgovor.*',
      ],
    },
  ],
};
