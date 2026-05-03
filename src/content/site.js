// Globalna konfiguracija sajta, kontakt, navigacija, SEO defaults
// Ovdje mijenjaš podatke koji se pojavljuju na svim stranicama.

export const site = {
  name: 'MM Digital',
  tagline: 'Creative Agency',
  url: 'https://mmdigital.me',
  defaultLocale: 'sr_Latn_ME',
  description:
    'Full-service marketing agencija u Crnoj Gori. Digitalni marketing, izrada sajtova, grafički dizajn, fotografija, video, SEO. Za biznise koji znaju šta rade.',

  contact: {
    email: 'info@mmdigital.me',
    phone: '+382 68 583 483',
    phoneHref: '+38268583483',
    instagram: '@mmdigital.me',
    instagramUrl: 'https://www.instagram.com/mmdigital.me/',
    address: {
      street: 'XV ulica, broj 18',
      city: 'Petrovac na Moru',
      postal: '85300',
      country: 'Crna Gora',
    },
  },

  // Kontakt forma, URL Google Apps Script-a (vidi google-apps-script.gs i README)
  // Ostavi prazno dok ne deploy-uješ skriptu, forma će tada raditi sa mailto: fallback-om.
  // Nakon deploy-a, ovdje paste-uj URL koji ti Google Apps Script da (završava se sa /exec).
  formEndpoint: 'https://script.google.com/macros/s/AKfycbzqn_QOLXC0r-st49Cy2MFPmtF2chJYATubIYuLLaXZqluohcWprTssGOm24AFkwZ6nhQ/exec',
  formNotifyEmail: 'milamedin@gmail.com',

  // Glavna navigacija
  nav: [
    { label: 'O nama', href: '/o-nama/' },
    {
      label: 'Usluge',
      href: '/usluge/',
      children: [
        { label: 'Digitalni marketing', href: '/usluge/digitalni-marketing/' },
        { label: 'Vođenje društvenih mreža', href: '/usluge/vodjenje-mreza/' },
        { label: 'Marketing strategija', href: '/usluge/marketing-strategija/' },
        { label: 'Marketing konsultacije', href: '/usluge/konsultacije/' },
        { label: 'Grafički dizajn', href: '/usluge/graficki-dizajn/' },
        { label: 'Logo dizajn', href: '/usluge/logo-dizajn/' },
        { label: 'Izrada sajtova', href: '/usluge/izrada-sajtova/' },
        { label: 'Fotografija', href: '/usluge/fotografija/' },
        { label: 'Video produkcija', href: '/usluge/video-produkcija/' },
        { label: 'SEO optimizacija', href: '/usluge/seo-optimizacija/' },
        { label: 'Google oglašavanje', href: '/usluge/google-oglasavanje/' },
        { label: 'Brendiranje', href: '/usluge/brendiranje/' },
      ],
    },
    { label: 'Blog', href: '/blog/' },
    { label: 'Kursevi', href: '/kursevi/' },
    { label: 'Kontakt', href: '/kontakt/' },
  ],

  // Footer kolone
  footer: {
    intro:
      'Full-service marketing agencija iz Crne Gore. Sajtovi, dizajn, fotografija, video, mreže, oglasi, SEO, sve pod jednim krovom.',
    columns: [
      {
        title: 'Agencija',
        links: [
          { label: 'O nama', href: '/o-nama/' },
          { label: 'Klijenti', href: '/klijenti/' },
          { label: 'Blog', href: '/blog/' },
          { label: 'Kursevi', href: '/kursevi/' },
          { label: 'Kontakt', href: '/kontakt/' },
        ],
      },
      {
        title: 'Usluge',
        links: [
          { label: 'Digitalni marketing', href: '/usluge/digitalni-marketing/' },
          { label: 'Izrada sajtova', href: '/usluge/izrada-sajtova/' },
          { label: 'Grafički dizajn', href: '/usluge/graficki-dizajn/' },
          { label: 'Fotografija', href: '/usluge/fotografija/' },
          { label: 'SEO optimizacija', href: '/usluge/seo-optimizacija/' },
        ],
      },
    ],
  },
};
