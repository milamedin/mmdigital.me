import { site } from './site.js';

export default {
  path: '/o-nama/',
  title: 'O Nama, MM Digital | Marketing Agencija Crna Gora · Mila Medin',
  description:
    'MM Digital je full-service marketing agencija iz Crne Gore. Osnivačica i izvršna direktorica, Mila Medin. Naša priča, vrijednosti i pristup radu.',

  schema: [
    {
      '@context': 'https://schema.org',
      '@type': 'AboutPage',
      name: 'O nama, MM Digital',
      url: `${site.url}/o-nama/`,
      mainEntity: { '@type': 'Organization', name: 'MM Digital', url: site.url },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Person',
      '@id': `${site.url}/o-nama/#mila-medin`,
      name: 'Mila Medin',
      givenName: 'Mila',
      familyName: 'Medin',
      jobTitle: 'Founder & Executive Director',
      worksFor: {
        '@type': 'Organization',
        name: 'MM Digital',
        url: site.url,
      },
      alumniOf: {
        '@type': 'CollegeOrUniversity',
        name: 'Fakultet organizacionih nauka (FON), Univerzitet u Beogradu',
        url: 'https://fon.bg.ac.rs/',
      },
      knowsAbout: [
        'Digitalni marketing',
        'Web dizajn',
        'Brendiranje',
        'SEO optimizacija',
        'Social media marketing',
      ],
      url: `${site.url}/o-nama/`,
      image: `${site.url}/images/team/mila-medin.jpg`,
      sameAs: [site.contact.instagramUrl],
    },
  ],

  blocks: [
    {
      type: 'hero',
      label: 'O nama',
      title: 'Nismo počeli s planom. Počeli smo s *frustracijom*.',
      subtitle:
        'Vidjeli smo odlične biznise u Crnoj Gori koji propadaju, ne zato što su loši, nego zato što ih niko ne vidi. Restorane s nevjerovatnom hranom i praznim stolovima. Firme s odličnim proizvodima i nula online prisustva. Profesionalce koji su bolji od konkurencije, ali konkurencija ima bolji marketing.',
      cta: [{ label: 'Razgovarajmo' }],
      meta: 'To nas je iznerviralo. I to je razlog zašto MM Digital postoji.',
      image: 'heroes/workspace-3.jpg',
      imageAlt: 'Radni sto agencije, laptop i notes',
    },

    {
      type: 'text',
      label: 'Ko smo',
      title: 'Ko smo, *bez korporativnog žargona*.',
      paragraphs: [
        'MM Digital je full-service marketing agencija iz Crne Gore. To znači da radimo sve, od strategije do implementacije, od dizajna do oglasa, od fotografije do SEO-a.',
        'Ali to nije ono što nas definiše. **Ono što nas definiše je pristup.**',
        'Ne prodajemo pakete. Ne šaljemo generičke izvještaje. Ne obećavamo nemoguće. Umjesto toga, sjedamo s vama, razumijemo vaš biznis i pravimo plan koji zaista ima smisla. Ako nešto ne radi, mijenjamo. Ako nešto radi, skaliramo.',
        'Zvuči jednostavno? Jeste. Ali iznenadili biste se koliko agencija to ne radi.',
      ],
      align: 'left',
    },

    {
      type: 'founder',
      label: 'Osnivačica',
      name: 'Mila Medin',
      role: 'Founder & Executive Director',
      image: 'team/mila-medin.jpg',
      imageAlt: 'Mila Medin, osnivačica i izvršna direktorica MM Digital',
      paragraphs: [
        '**Mila Medin** je osnivačica i izvršna direktorica MM Digital Creative Agency. Diplomirala je Informacione sisteme i tehnologije na **Fakultetu organizacionih nauka (FON)** Univerziteta u Beogradu. Taj spoj tehničkog razumijevanja i godina rada u kreativnoj industriji odredio je ono što agencija danas jeste.',
        'Vodi tim koji ne pravi *"lijepe stvari"*. Pravi stvari koje rade. Strategiju koja se mjeri u klijentima, sajtove koji prodaju i sadržaj koji se pamti. Ne zato što "tako rade i drugi", nego zato što je to ono što vašem biznisu zaista treba.',
      ],
      links: [
        { label: 'Instagram', href: site.contact.instagramUrl, external: true },
        { label: 'Email', href: `mailto:${site.contact.email}` },
      ],
      alt: true,
    },

    {
      type: 'values',
      theme: 'light',
      label: 'Vrijednosti',
      title: 'Tri stvari u koje *vjerujemo*.',
      items: [
        { title: 'Iskrenost iznad svega.', text: 'Ako vaš sajt ne valja, reći ćemo vam. Ako vaš logo treba promjenu, reći ćemo vam. Ako mislimo da vam ne trebamo, reći ćemo vam i to. Nismo tu da ugađamo. Tu smo da pomognemo.' },
        { title: 'Rezultati, ne aktivnost.', text: '100 objava mjesečno bez rezultata je gore od 10 objava koje donose klijente. Ne mjerimo koliko radimo, mjerimo šta postižemo.' },
        { title: 'Partnerstvo, ne usluga.', text: 'Ne radimo ZA vas. Radimo S vama. Vaš uspjeh je naš uspjeh. Vaš problem je naš problem. Kad vi rastete, mi rastemo.' },
      ],
    },

    {
      type: 'text',
      label: 'Naša priča',
      title: 'Priča koja nije savršena, *i to je poenta*.',
      paragraphs: [
        'Nećemo vam pričati bajku o tome kako smo od prvog dana imali viziju i sve je išlo glatko. Nije.',
        'Prve kampanje nisu bile savršene. Učili smo na greškama, i to je ono što nas čini boljim od agencija koje vam prodaju "garantovane rezultate". **Mi znamo šta NE radi jer smo to probali.** Znamo da široko ciljanje ponekad pobjeđuje detaljno. Znamo da email s "ružnim" naslovom ponekad ima više otvaranja od "savršenog". Znamo da profesionalna fotografija ponekad gubi od slike snimljene telefonom.',
        'To iskustvo ne možete kupiti. Možete ga samo steći.',
      ],
    },

    {
      type: 'text',
      label: 'Za koga',
      title: 'Radimo s ljudima koji *ozbiljno misle*.',
      paragraphs: [
        'MM Digital nije za svakoga. Radimo s biznisima koji:',
      ],
      list: [
        'Razumiju da marketing nije trošak, nego investicija',
        'Spremni su da budu strpljivi (rezultati ne dolaze preko noći)',
        'Žele partnera, ne izvršioca narudžbi',
        'Znaju da rade dobar posao, i žele da to vidi ostatak svijeta',
      ],
      alt: true,
    },

    {
      type: 'text',
      paragraphs: [
        'Ako tražite nekoga ko će vam napraviti "par lijepih slika" i nestati, nismo mi.',
        'Ako tražite nekoga ko će sjesti s vama, razumjeti vaš biznis i napraviti plan koji zaista radi, **[javite se](/kontakt/)**.',
      ],
    },

    {
      type: 'ctaSection',
      title: 'Hajde da se *upoznamo*.',
      text: '30 minuta. Bez obaveza. Bez prodajnog pitcha. Samo iskren razgovor o vašem biznisu i o tome kako možemo pomoći.',
      button: { label: 'Zakaži konsultaciju' },
    },
  ],
};
