import { site } from '../site.js';

export default {
  path: '/usluge/konsultacije/',
  title: 'Marketing Konsultacije Crna Gora | Savjetovanje | MM Digital',
  description:
    'Profesionalne marketing konsultacije u Crnoj Gori. Savjetovanje po satu ili projektu. MM Digital, iskustvo koje možete iznajmiti.',

  schema: [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: 'Marketing konsultacije',
      provider: { '@type': 'Organization', name: 'MM Digital', url: site.url },
      areaServed: { '@type': 'Country', name: 'Crna Gora' },
      name: 'Marketing konsultacije, MM Digital',
      description:
        'Marketing savjetovanje za biznise koji imaju tim, po satu, mjesečnom retainer-u ili projektu.',
      url: `${site.url}/usluge/konsultacije/`,
    },
  ],

  blocks: [
    {
      type: 'hero',
      label: 'Usluga · Konsultacije',
      title: 'Ne trebate agenciju. Trebate nekoga ko *zna*.',
      subtitle:
        'Marketing konsultacije za biznise koji imaju tim, ali im treba smjer, drugo mišljenje ili ekspertiza koju nemaju in-house.',
      cta: [{ label: 'Zakaži konsultaciju' }],
      image: 'heroes/konsultacije-1.jpg',
      imageAlt: 'Poslovni sastanak uz tablet sa grafikonima i analizu',
    },

    {
      type: 'text',
      label: 'Za koga',
      title: 'Kada vam trebaju *konsultacije*, a ne agencija.',
      paragraphs: [
        'Imate marketing menadžera. Ili čak mali tim. Rade dobar posao. Ali ponekad zapnu. Ne znaju da li je strategija prava. Ne znaju da li su oglasi optimizovani. Ne znaju šta konkurencija radi drugačije.',
        'Ne trebate agenciju koja će preuzeti sve. Trebate nekoga ko će sjesti s vašim timom, pogledati šta rade, i reći im: **"Ovo je odlično. Ovo promijenite. Ovo probajte."**',
        'To su konsultacije. Iskustvo koje možete iznajmiti, po satu ili po projektu.',
      ],
      align: 'left',
    },

    {
      type: 'cards',
      label: 'Oblasti',
      title: 'Oblasti u kojima *savjetujemo*',
      cols: 4,
      cards: [
        { icon: '◆', title: 'Digitalna strategija', text: 'Kompletna analiza i preporuke za vaš online marketing.' },
        { icon: '#', title: 'Social media', text: 'Audit profila, content strategija, algoritam, taktike rasta.' },
        { icon: '◈', title: 'Paid advertising', text: 'Meta Ads, Google Ads, audit kampanja, optimizacija, skaliranje.' },
        { icon: '⌖', title: 'SEO', text: 'Tehnički audit, keyword strategija, content plan, link building.' },
        { icon: '✦', title: 'Branding', text: 'Pozicioniranje, vizuelni identitet, ton komunikacije.' },
        { icon: '◐', title: 'Sales funnel', text: 'Od prvog kontakta do konverzije, gdje gubite ljude i kako to popraviti.' },
        { icon: '✉', title: 'Email marketing', text: 'Strategija, automatizacija, segmentacija, A/B testiranje.' },
        { icon: '◳', title: 'Analitika', text: 'Google Analytics, Meta Pixel, attribution, razumijevanje podataka.' },
      ],
      alt: true,
    },

    {
      type: 'pricing',
      theme: 'light',
      label: 'Modeli',
      title: 'Kako *funkcionišu* konsultacije',
      columns: ['Model', 'Šta je', 'Za koga'],
      rows: [
        ['Jednokratna sesija', '60-90 min, fokus na jedan problem', 'Kad vam treba brz odgovor ili drugo mišljenje'],
        ['Mjesečni retainer', '2-4 sesije mjesečno + email podrška', 'Kad vam treba stalni savjetnik za tim'],
        ['Projektni angažman', 'Definisan obim, rok i isporuke', 'Konkretan projekat (objava, rebrand, kampanja)'],
        ['Workshop za tim', 'Pola dana ili cijeli dan, hands-on', 'Kad želite da unaprijedite znanje tima'],
      ],
    },

    {
      type: 'text',
      label: 'Zašto MM Digital',
      title: 'Jer ne prodajemo teoriju. Prodajemo *iskustvo*.',
      paragraphs: [
        'Svaki savjet koji dajemo je testiran u praksi, na našim kampanjama, s našim klijentima, s našim budžetima. Ne čitamo vam iz knjige. **Govorimo vam šta radi, jer smo to probali.**',
        'I još nešto: nismo pristrasni. Ako vam ne treba nova usluga, nećemo vam je prodavati. Ako vaš tim radi dobar posao, reći ćemo vam. Naš posao je da vam pomognemo, ne da vam prodamo.',
      ],
    },

    {
      type: 'ctaSection',
      title: 'Imate pitanje? *Zakažite sesiju.*',
      button: { label: 'Zakaži konsultaciju' },
    },
  ],
};
