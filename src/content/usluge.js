import { site } from './site.js';

export default {
  path: '/usluge/',
  title: 'Usluge, MM Digital | Marketing, Sajtovi, Dizajn, Foto, Video',
  description:
    'Sve naše usluge na jednom mjestu. Digitalni marketing, izrada sajtova, grafički dizajn, logo, fotografija, video, SEO, Google Ads i brendiranje. MM Digital Crna Gora.',

  schema: [
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'Usluge MM Digital',
      url: `${site.url}/usluge/`,
      hasPart: site.nav
        .find((n) => n.label === 'Usluge')
        .children.map((c) => ({
          '@type': 'Service',
          name: c.label,
          url: `${site.url}${c.href}`,
        })),
    },
  ],

  blocks: [
    {
      type: 'hero',
      label: 'Usluge',
      title: 'Sve što vam treba, *jedan tim*.',
      subtitle:
        'Ne trebate jednog freelancera za dizajn, drugog za sajt, trećeg za Instagram. Trebate jedan tim koji razumije vaš biznis, i koji sve radi da se uklapa.',
      cta: [{ label: 'Razgovarajmo' }],
      image: 'heroes/workspace-4.jpg',
      imageAlt: 'MacBook, kreativni rad u tihim časovima',
    },

    {
      type: 'cards',
      label: 'Marketing',
      title: 'Strategija, kampanje i *vođenje*',
      cols: 2,
      cards: [
        { icon: '✦', title: 'Digitalni marketing', text: 'Strategija, kampanje, oglasi, analitika. Sistem koji donosi klijente.', href: '/usluge/digitalni-marketing/' },
        { icon: '#', title: 'Vođenje društvenih mreža', text: 'Instagram, Facebook, LinkedIn, TikTok, svakodnevno. Vaše mreže, naša briga.', href: '/usluge/vodjenje-mreza/' },
        { icon: '◇', title: 'Marketing strategija', text: 'Kompletna strategija prilagođena vašem biznisu. Audit, pozicioniranje, plan.', href: '/usluge/marketing-strategija/' },
        { icon: '?', title: 'Marketing konsultacije', text: 'Imate tim, ali vam treba smjer? Savjetovanje po satu ili projektu.', href: '/usluge/konsultacije/' },
      ],
    },

    {
      type: 'cards',
      theme: 'light',
      label: 'Dizajn i brend',
      title: 'Vizuelni *identitet*',
      cols: 3,
      cards: [
        { icon: '◉', title: 'Logo dizajn', text: 'Logo koji se pamti. Brand guidelines uključene.', href: '/usluge/logo-dizajn/' },
        { icon: '◰', title: 'Grafički dizajn', text: 'Vizit karte, flajeri, meniji, katalozi, promo materijal.', href: '/usluge/graficki-dizajn/' },
        { icon: '✺', title: 'Brendiranje', text: 'Vizuelni identitet, izlozi, prostori, vozila, uniforme.', href: '/usluge/brendiranje/' },
      ],
    },

    {
      type: 'cards',
      label: 'Web i SEO',
      title: 'Vaš sajt kao *najbolji prodavac*',
      cols: 2,
      cards: [
        { icon: '◧', title: 'Izrada sajtova', text: 'Brzi, mobilni, SEO-optimizovani sajtovi koji konvertuju.', href: '/usluge/izrada-sajtova/' },
        { icon: '⌖', title: 'SEO optimizacija', text: 'Da vas Google nađe prije konkurencije. Organske posjete koje rastu.', href: '/usluge/seo-optimizacija/' },
        { icon: 'G', title: 'Google oglašavanje', text: 'Google Ads kampanje. Ljudi koji aktivno traže baš vas.', href: '/usluge/google-oglasavanje/' },
      ],
    },

    {
      type: 'cards',
      label: 'Foto i video',
      title: 'Slike i video *koji prodaju*',
      cols: 2,
      cards: [
        { icon: '◉', title: 'Fotografija', text: 'Product, food, ambijent, portreti. Studio + lokacija. Podgorica i primorje.', href: '/usluge/fotografija/' },
        { icon: '▶', title: 'Video produkcija', text: 'Promo videi, Reels, drone, korporativni i event video.', href: '/usluge/video-produkcija/' },
      ],
      alt: true,
    },

    {
      type: 'ctaSection',
      title: 'Ne znate gdje *početi*?',
      text: 'Zakažite besplatnu konsultaciju, analiziramo vaš biznis i predlažemo gdje su prilike. Bez obaveza.',
      button: { label: 'Zakaži besplatnu konsultaciju' },
      meta: 'Odgovaramo u roku od 24 sata.',
    },
  ],
};
