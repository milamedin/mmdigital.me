import { site } from '../site.js';

export default {
  path: '/usluge/digitalni-marketing/',
  title: 'Digitalni Marketing Crna Gora | MM Digital Podgorica',
  description:
    'Profesionalne usluge digitalnog marketinga u Crnoj Gori. Strategija, kampanje, oglasi, analitika. MM Digital, za biznise koji žele rezultate, ne izvještaje.',

  schema: [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: 'Digitalni marketing',
      provider: { '@type': 'Organization', name: 'MM Digital', url: site.url },
      areaServed: { '@type': 'Country', name: 'Crna Gora' },
      name: 'Digitalni marketing, MM Digital',
      description:
        'Strategija, kampanje, oglasi, analitika. Sistem koji donosi klijente, ne objavljivanje postova.',
      url: `${site.url}/usluge/digitalni-marketing/`,
    },
  ],

  blocks: [
    {
      type: 'hero',
      label: 'Usluga · Digitalni marketing',
      title: 'Digitalni marketing koji se mjeri u *klijentima*, ne u lajkovima.',
      subtitle:
        'Strategija, kampanje, oglasi, analitika. Ne "objavljivanje postova", nego sistem koji donosi klijente dok vi radite svoj posao.',
      cta: [{ label: 'Zakaži besplatnu konsultaciju', href: '/kontakt/' }],
      image: 'heroes/analytics-1.jpg',
      imageAlt: 'Marketing dashboard sa metrikama i grafovima',
    },

    {
      type: 'text',
      label: 'Šta je',
      title: 'Šta je digitalni marketing, i šta *NIJE*.',
      paragraphs: [
        'Digitalni marketing nije "objavljivanje na Instagramu". To je samo jedan mali dio.',
        'Digitalni marketing je sistem. Počinje od trenutka kad neko na Google-u ukuca ono što vi nudite, i završava kad taj čovjek postane vaš klijent. Između te dvije tačke postoji 20 koraka. Većina biznisa radi 2-3 od njih. **I onda se čude zašto ne radi.**',
        'Mi radimo svih 20. Od prvog klika do potpisa ugovora. Od prvog pregleda do ponovne kupovine.',
      ],
      align: 'left',
    },

    {
      type: 'cards',
      theme: 'light',
      label: 'Šta radimo',
      title: 'Naše usluge digitalnog marketinga',
      cols: 3,
      cards: [
        {
          icon: '◆',
          title: 'Strategija i planiranje',
          text: 'Sve počinje planom. Analiziramo vaš biznis, konkurenciju, ciljnu grupu, i pravimo strategiju koja ima smisla za vas. Ne za "biznise generalno", za VAS.',
        },
        {
          icon: '◈',
          title: 'Kampanje i oglasi',
          text: 'Meta Ads, Google Ads, LinkedIn Ads. Kampanje koje ciljaju prave ljude s pravom porukom u pravo vrijeme. Svaki euro prati se do rezultata.',
        },
        {
          icon: '✉',
          title: 'Email marketing',
          text: 'Kanal koji donosi 42x ROI, a većina biznisa ga ne koristi. Gradimo vašu email listu i pretvaramo je u klijente koji se vraćaju.',
        },
        {
          icon: '✎',
          title: 'Content marketing',
          text: 'Blog postovi, vodiči, case studies. Sadržaj koji pozicionira vas kao eksperta u vašoj industriji, i koji Google voli.',
        },
        {
          icon: '⌖',
          title: 'Analytics i reporting',
          text: 'Svake sedmice znate tačno šta smo uradili, koliko je koštalo i kakve rezultate donosi. Brojevi, ne priče.',
        },
        {
          icon: '◇',
          title: 'Konverzija i optimizacija',
          text: 'Više nije dovoljno dovesti ljude na sajt, treba ih i pretvoriti u klijente. Optimizacija landing stranica, formi i toka kupovine.',
        },
      ],
    },

    {
      type: 'text',
      label: 'Lokalno',
      title: 'Digitalni marketing u *Podgorici*, lokalno znanje, globalne taktike.',
      paragraphs: [
        'Crna Gora nije Amerika. Ono što radi u New Yorku ne mora da radi u Podgorici. Mi znamo lokalno tržište, navike, platforme, način na koji Crnogorci donose odluke.',
        'Ali koristimo globalne taktike. Iste strategije koje koriste agencije u Londonu i Berlinu, prilagođene za naše tržište. **Ta kombinacija je ono što nas razlikuje** od agencija koje kopiraju američke tutorijale i od onih koje rade "po osjećaju".',
      ],
    },

    {
      type: 'ctaSection',
      title: 'Vaš marketing zaslužuje *sistem*, ne improvizaciju.',
      text: '30 minuta razgovora. Nakon njega znate gdje gubite klijente i gdje su prilike. Bez obaveza.',
      button: { label: 'Zakaži besplatnu konsultaciju' },
      meta: 'Odgovaramo u roku od 24 sata.',
    },
  ],
};
