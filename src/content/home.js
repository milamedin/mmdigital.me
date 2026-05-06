// Home, mmdigital.me/
// Mijenjaš tekst tako što urediš stringove ispod, pa pokreneš `npm run build`.

import { site } from './site.js';

export default {
  path: '/',
  title: 'MM Digital, Marketing Agencija Crna Gora | Full-Service Digitalni Marketing',
  description:
    'Full-service marketing agencija u Crnoj Gori. Digitalni marketing, izrada sajtova, grafički dizajn, fotografija, video, SEO. Za biznise koji znaju šta rade, i trebaju da budu viđeni.',

  schema: [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'MM Digital',
      alternateName: 'MMDigital Creative Agency',
      url: site.url,
      logo: `${site.url}/images/logo.svg`,
      description:
        'Full-service marketing agencija u Crnoj Gori. Digitalni marketing, izrada sajtova, dizajn, fotografija, video, SEO.',
      email: site.contact.email,
      telephone: site.contact.phoneHref,
      address: {
        '@type': 'PostalAddress',
        streetAddress: site.contact.address.street,
        addressLocality: site.contact.address.city,
        postalCode: site.contact.address.postal,
        addressCountry: 'ME',
      },
      sameAs: [site.contact.instagramUrl],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      '@id': `${site.url}/#localbusiness`,
      name: 'MM Digital',
      image: `${site.url}/images/og-default.svg`,
      url: site.url,
      telephone: site.contact.phoneHref,
      email: site.contact.email,
      priceRange: '€€',
      address: {
        '@type': 'PostalAddress',
        streetAddress: site.contact.address.street,
        addressLocality: site.contact.address.city,
        postalCode: site.contact.address.postal,
        addressCountry: 'ME',
      },
      areaServed: ['Crna Gora', 'Podgorica', 'Budva', 'Petrovac', 'Bar', 'Tivat', 'Kotor'],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      url: site.url,
      name: 'MM Digital',
      inLanguage: 'sr-Latn-ME',
    },
  ],

  blocks: [
    {
      type: 'hero',
      label: 'MM Digital · Marketing agencija Crna Gora',
      title: 'Vaš biznis radi posao. Mi radimo da to svi *vide*.',
      subtitle:
        'Full-service marketing agencija u Crnoj Gori. Za biznise koji znaju šta rade, ali im treba neko ko zna kako da to pokaže svijetu.',
      cta: [
        { label: 'Razgovarajmo', href: '/kontakt/' },
        { label: 'Pogledaj usluge', href: '/usluge/' },
      ],
      meta: 'Besplatna konsultacija. Bez obaveza. Bez prodajnog pitcha.',
      image: 'heroes/bts-3.jpg',
      imageAlt: 'Behind the scenes, videograf na snimanju',
    },

    {
      type: 'text',
      label: 'Problem',
      title: 'Imate odličan biznis. Ali to znate *samo vi*.',
      paragraphs: [
        'Vaš proizvod je dobar. Vaša usluga je kvalitetna. Vaši klijenti su zadovoljni. Ali novi klijenti vas ne nalaze. Google vas ne poznaje. Instagram vam izgleda kao da ga vodi neko ko to radi "između ostalog". Sajt imate, ali ne radi ništa osim što postoji.',
        'Niste vi problem. Problem je što dobar posao nije dovoljan. Trebate da budete viđeni. **Na pravom mjestu, u pravo vrijeme, pred pravim ljudima.**',
        'To je naš posao.',
      ],
      align: 'left',
    },

    {
      type: 'cards',
      label: 'Šta radimo',
      title: 'Sve što vam treba. *Jedan tim. Jedan poziv.*',
      intro:
        'Ne trebate jednog freelancera za dizajn, drugog za sajt, trećeg za Instagram i četvrtog za fotografije. Trebate jedan tim koji razumije vaš biznis, i koji sve radi da se uklapa.',
      cols: 3,
      cards: [
        {
          icon: '✦',
          title: 'Digitalni marketing',
          text: 'Strategija, kampanje, oglasi, analitika. Ne "objavljivanje postova", nego sistem koji donosi klijente dok vi radite svoj posao.',
          href: '/usluge/digitalni-marketing/',
        },
        {
          icon: '◆',
          title: 'Vođenje društvenih mreža',
          text: 'Instagram, Facebook, LinkedIn, TikTok. Svakodnevno, od planiranja sadržaja do odgovaranja na komentare. Vaše mreže, naša briga.',
          href: '/usluge/vodjenje-mreza/',
        },
        {
          icon: '✱',
          title: 'Marketing strategija',
          text: 'Kompletna strategija prilagođena vašem biznisu. Ne template, nego plan napravljen za vas, vašu industriju i vaše ciljeve.',
          href: '/usluge/marketing-strategija/',
        },
        {
          icon: '◇',
          title: 'Marketing konsultacije',
          text: 'Imate tim, ali vam treba smjer? Sjedamo s vama, analiziramo, savjetujemo. Bez ugovora, po satu ili po projektu.',
          href: '/usluge/konsultacije/',
        },
        {
          icon: '✧',
          title: 'Grafički dizajn',
          text: 'Logo, vizit karte, meni, flajeri, promo materijal. Vizuelni identitet koji govori umjesto vas.',
          href: '/usluge/graficki-dizajn/',
        },
        {
          icon: '⬡',
          title: 'Logo dizajn',
          text: 'Logo koji se pamti. Ne generički simbol, nego znak koji predstavlja vašu priču.',
          href: '/usluge/logo-dizajn/',
        },
        {
          icon: '◐',
          title: 'Izrada sajtova',
          text: 'Sajtovi koji ne samo lijepo izgledaju, nego pretvaraju posjetioce u klijente. Brzi, mobilni, optimizovani.',
          href: '/usluge/izrada-sajtova/',
        },
        {
          icon: '◉',
          title: 'Fotografija',
          text: 'Poslovne fotografije, produkti, ambijent, tim. Slike koje prodaju, ne samo koje lijepo izgledaju.',
          href: '/usluge/fotografija/',
        },
        {
          icon: '▶',
          title: 'Video produkcija',
          text: 'Promo videi, Reels, drone, behind the scenes. Video koji priča priču i pokreće akciju.',
          href: '/usluge/video-produkcija/',
        },
        {
          icon: '⌖',
          title: 'SEO optimizacija',
          text: 'Da vas Google nađe prije konkurencije. Organske posjete koje ne koštaju po kliku, i koje rastu svaki mjesec.',
          href: '/usluge/seo-optimizacija/',
        },
        {
          icon: '◈',
          title: 'Google oglašavanje',
          text: 'Google Ads kampanje koje dovode ljude koji upravo traže ono što vi nudite. Precizno. Mjerljivo.',
          href: '/usluge/google-oglasavanje/',
        },
        {
          icon: '✺',
          title: 'Brendiranje',
          text: 'Vizuelni identitet, brendiranje prostora, vozila, uniformi. Da vas prepoznaju, i zapamte.',
          href: '/usluge/brendiranje/',
        },
      ],
    },

    {
      type: 'clients',
      auto: true,
      label: 'Saradnici i klijenti',
      title: 'Brendovi koji su nam *ukazali povjerenje*.',
      intro:
        'Hoteli, restorani, lokalna samouprava, butici, agencije, birali su nas zato što smo isporučili rezultate. [Pogledaj sve →](/klijenti/)',
      split: true,
      speed: 100,
    },

    {
      type: 'values',
      theme: 'light',
      label: 'Zašto MM Digital',
      title: 'Zašto baš *MM Digital*?',
      items: [
        {
          title: 'Ne radimo za svakoga.',
          text: 'Radimo za biznise koji zaslužuju da budu viđeni. Biramo klijente s kojima možemo postići rezultate. Ako ne možemo pomoći, reći ćemo vam. Iskreno. Jer naša reputacija vrijedi više od jednog ugovora.',
        },
        {
          title: 'Mjerimo rezultate, ne aktivnost.',
          text: 'Broj objava, reach, impressions, to su brojevi za izvještaje. Mi mjerimo ono što zaista vrijedi: koliko novih klijenata, koliko upita, koliko je vaš biznis porastao. Ako naš rad ne donosi rezultate, prvi ćemo vam reći.',
        },
        {
          title: 'Sve pod jednim krovom.',
          text: 'Dizajn, sajt, fotografije, video, mreže, oglasi, SEO, jedan tim koji sve radi usklađeno. Nema "to nije naš dio" ili "pitajte drugog freelancera". Sve je naše. I sve se uklapa.',
        },
        {
          title: 'Nismo savršeni. Ali smo iskreni.',
          text: 'Nećemo vam obećati "garantovane rezultate" ili "prvu poziciju na Google-u za 7 dana". Reći ćemo vam šta je realno, koliko traje i koliko košta. Bez iznenađenja.',
        },
      ],
      alt: true,
    },

    {
      type: 'text',
      label: 'Za koga radimo',
      title: 'Radimo s biznisima koji *ozbiljno misle*.',
      paragraphs: [
        'Ne s veličinom, nego s namjerom.',
        'Radili smo s restoranima koji imaju 10 stolova i hotelima koji imaju 100 soba. S butik brendovima koji tek počinju i firmama koje postoje 20 godina. S advokatskim kancelarijama, kozmetičkim salonima, IT kompanijama, građevinskim firmama, turističkim agencijama.',
        'Zajedničko im je jedno: znaju da rade dobar posao. **I žele da to vidi ostatak svijeta.**',
        'Ako ste vi takvi, [razgovarajmo](/kontakt/).',
      ],
    },

    {
      type: 'steps',
      label: 'Proces',
      title: 'Kako radimo, *3 koraka*',
      steps: [
        {
          title: 'Dijagnoza',
          text: 'Analiziramo vaš trenutni marketing, sajt, mreže, Google, konkurenciju. Kažemo vam tačno gdje gubite klijente i gdje su prilike. Besplatno.',
        },
        {
          title: 'Plan',
          text: 'Na osnovu dijagnoze, pravimo konkretan plan. S brojevima, rokovima i očekivanjima. Ne generički "social media paket", nego strategija za vaš biznis.',
        },
        {
          title: 'Implementacija',
          text: 'Radimo. Svake sedmice vidite šta smo uradili i kakve rezultate donosi. Bez iznenađenja. Bez skrivenih troškova.',
        },
      ],
      alt: true,
    },

    {
      type: 'ctaSection',
      title: 'Vaš biznis zaslužuje da bude *viđen*.',
      text: 'Svaki dan bez strategije je dan kad vaša konkurencija preuzima vaše klijente. Zakažite besplatnu konsultaciju, 30 minuta, bez obaveza. Samo iskrena analiza i konkretan prijedlog.',
      button: { label: 'Zakaži besplatnu konsultaciju', href: '/kontakt/' },
      meta: 'Odgovaramo u roku od 24 sata.',
    },
  ],
};
