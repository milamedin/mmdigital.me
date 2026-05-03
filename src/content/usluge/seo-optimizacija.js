import { site } from '../site.js';

export default {
  path: '/usluge/seo-optimizacija/',
  title: 'SEO Optimizacija Crna Gora | Optimizacija Sajta | MM Digital',
  description:
    'Profesionalna SEO optimizacija u Crnoj Gori. Povećajte vidljivost na Google-u. MM Digital, SEO koji donosi organski trafik.',

  schema: [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: 'SEO optimizacija',
      provider: { '@type': 'Organization', name: 'MM Digital', url: site.url },
      areaServed: { '@type': 'Country', name: 'Crna Gora' },
      name: 'SEO optimizacija, MM Digital',
      description:
        'Technical SEO, on-page i off-page optimizacija, lokalni SEO, content strategija, za stabilan rast organskog trafika.',
      url: `${site.url}/usluge/seo-optimizacija/`,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Šta je SEO optimizacija?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'SEO je proces koji pomaže vašem sajtu da se pojavi na Google-u kada neko traži ono što vi nudite. Sistematičan rad, ne magija ni trik.',
          },
        },
        {
          '@type': 'Question',
          name: 'Koliko košta SEO optimizacija?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'SEO audit od 200€, mjesečni SEO od 400€/mj, lokalni SEO od 250€/mj. SEO + sajt od 1.500€.',
          },
        },
        {
          '@type': 'Question',
          name: 'Kada ću vidjeti rezultate od SEO-a?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Prvi mjesec, audit i optimizacija. Mjesec 2-3, pojavljujete se za 10-15 ključnih riječi. Mjesec 4-6, prva strana za 5-10 ključnih riječi. Mjesec 6-12, stabilan rast organskog trafika.',
          },
        },
      ],
    },
  ],

  blocks: [
    {
      type: 'hero',
      label: 'Usluga · SEO optimizacija',
      title: 'Kad neko ukuca ono što vi nudite, *da li se vi pojavljujete*?',
      subtitle:
        'SEO optimizacija koja vas stavlja ispred konkurencije na Google-u. Organski trafik koji ne košta po kliku, i koji raste svaki mjesec.',
      cta: [{ label: 'Zakaži besplatnu SEO analizu' }],
      image: 'heroes/analytics-2.jpg',
      imageAlt: 'Analytics dashboard sa SEO metrikama',
    },

    {
      type: 'text',
      label: 'Šta je SEO',
      title: 'Šta je SEO optimizacija, *jednostavno*.',
      paragraphs: [
        'SEO je proces koji pomaže vašem sajtu da se pojavi na Google-u kada neko traži ono što vi nudite.',
        'Zamislite Google kao ogromnu biblioteku. Vaš sajt je jedna knjiga. SEO je način na koji kažete bibliotekaru: **"Kada neko traži ovo, daj mu moju knjigu."**',
        'Bez SEO-a, vaša knjiga je na zadnjoj polici. S SEO-om, na prvom mjestu.',
        'Nije magija. Nije trik. Sistematičan rad koji daje rezultate. Ali treba vremena. **Ako vam neko obećava "prvu poziciju za 7 dana", laže vas.**',
      ],
      align: 'left',
    },

    {
      type: 'text',
      label: 'Zašto je važan',
      title: '*75%* ljudi nikada ne ode dalje od prve strane Google-a.',
      paragraphs: [
        'To znači da ako vaš sajt nije na prvoj strani, za 75% potencijalnih klijenata vi ne postojite. Nikada vas neće naći. Nikada neće vidjeti šta nudite.',
        'A znate ko jeste na prvoj strani? **Vaša konkurencija koja je uložila u SEO.**',
        'SEO nije opcija. SEO je pitanje vidljivosti, ili nevidljivosti.',
      ],
      alt: true,
    },

    {
      type: 'cards',
      label: 'SEO usluge',
      title: 'Naše *SEO usluge*',
      cols: 3,
      cards: [
        { icon: '⚙', title: 'Technical SEO', text: 'Brzina, mobilna verzija, struktura, sitemap. Tehnički temelj koji omogućava sve ostalo.' },
        { icon: '✎', title: 'On-Page SEO', text: 'Meta tagovi, headings, ključne riječi, internal linking, slike. Optimizacija stranica.' },
        { icon: '⌘', title: 'Off-Page SEO', text: 'Backlinks, direktorijumi, PR, gostujući članci. Autoritet u Google-ovim očima.' },
        { icon: '◍', title: 'Lokalni SEO', text: 'Google Business Profile, lokalne ključne riječi, recenzije. Da vas nađu u vašem gradu.' },
        { icon: '◳', title: 'Content SEO', text: 'Blog postovi, vodiči, FAQ. Sadržaj koji Google voli i koji odgovara na pitanja vaših klijenata.' },
        { icon: '⌖', title: 'SEO audit', text: 'Kompletna analiza vašeg sajta i konkurencije. Konkretne preporuke s prioritetima.' },
      ],
    },

    {
      type: 'pricing',
      label: 'Cijene',
      title: 'Koliko košta *SEO optimizacija*?',
      columns: ['Usluga', 'Cijena', 'Šta je uključeno'],
      rows: [
        ['SEO Audit', 'od 200€', 'Kompletna analiza sajta i konkurencije'],
        ['Mjesečni SEO', 'od 400€/mj', 'On-page + off-page + content + reporting'],
        ['Lokalni SEO', 'od 250€/mj', 'GBP + lokalne KW + recenzije'],
        ['SEO + Sajt', 'od 1.500€', 'Sajt optimizovan od prvog dana'],
      ],
      alt: true,
    },

    {
      type: 'pricing',
      label: 'Očekivanja',
      title: 'Kada ću *vidjeti rezultate*?',
      columns: ['Vrijeme', 'Šta se dešava'],
      rows: [
        ['Mjesec 1', 'Audit, optimizacija, prvi sadržaj'],
        ['Mjesec 2-3', 'Pojavljujete se za 10-15 ključnih riječi'],
        ['Mjesec 4-6', 'Prva strana za 5-10 ključnih riječi'],
        ['Mjesec 6-12', 'Stabilna pozicija, organski trafik raste'],
      ],
    },

    {
      type: 'ctaSection',
      title: 'Spremni da vas Google *nađe*?',
      button: { label: 'Zakaži besplatnu SEO analizu' },
    },
  ],
};
