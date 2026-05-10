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

  // Google Analytics 4 — ostavi prazno da isključiš tracking
  // Dobićeš novi ID na https://analytics.google.com (počinje sa G-)
  googleAnalyticsId: 'G-J2Z17DBGXR',

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

  // ─── ENGLISH VERSION ─────────────────────────────────────
  // Sve stranice na /en/ koriste ovu konfiguraciju.
  en: {
    defaultLocale: 'en_US',
    description:
      'Full-service marketing agency in Montenegro. Digital marketing, websites, graphic design, photography, video, SEO. For businesses that know what they do.',
    nav: [
      { label: 'About', href: '/en/about/' },
      {
        label: 'Services',
        href: '/en/services/',
        children: [
          { label: 'Digital marketing', href: '/en/services/digital-marketing/' },
          { label: 'Social media management', href: '/en/services/social-media-management/' },
          { label: 'Marketing strategy', href: '/en/services/marketing-strategy/' },
          { label: 'Marketing consulting', href: '/en/services/marketing-consulting/' },
          { label: 'Graphic design', href: '/en/services/graphic-design/' },
          { label: 'Logo design', href: '/en/services/logo-design/' },
          { label: 'Website development', href: '/en/services/website-development/' },
          { label: 'Photography', href: '/en/services/photography/' },
          { label: 'Video production', href: '/en/services/video-production/' },
          { label: 'SEO services', href: '/en/services/seo-services/' },
          { label: 'Google Ads', href: '/en/services/google-ads/' },
          { label: 'Branding', href: '/en/services/branding/' },
        ],
      },
      { label: 'Clients', href: '/en/clients/' },
      { label: 'Courses', href: '/en/courses/' },
      { label: 'Contact', href: '/en/contact/' },
    ],
    footer: {
      intro:
        'Full-service marketing agency from Montenegro. Websites, design, photography, video, social media, ads, SEO — all under one roof.',
      columns: [
        {
          title: 'Agency',
          links: [
            { label: 'About', href: '/en/about/' },
            { label: 'Clients', href: '/en/clients/' },
            { label: 'Courses', href: '/en/courses/' },
            { label: 'Contact', href: '/en/contact/' },
          ],
        },
        {
          title: 'Services',
          links: [
            { label: 'Digital marketing', href: '/en/services/digital-marketing/' },
            { label: 'Website development', href: '/en/services/website-development/' },
            { label: 'Graphic design', href: '/en/services/graphic-design/' },
            { label: 'Photography', href: '/en/services/photography/' },
            { label: 'SEO services', href: '/en/services/seo-services/' },
          ],
        },
      ],
    },
    // UI strings (form labels, breadcrumbs, etc.)
    ui: {
      ctaNav: "Let's talk →",
      breadcrumbHome: 'Home',
      formName: 'Full name',
      formEmail: 'Email',
      formPhone: 'Phone',
      formBusiness: 'Business name',
      formIndustry: 'Industry',
      formIndustryChoose: 'Choose…',
      formService: 'What are you interested in?',
      formServiceChoose: 'Choose service…',
      formMessage: 'Message',
      formMessagePlaceholder: 'Briefly tell us about your business and what you are looking for…',
      formSubmit: 'Send message',
      formSending: 'Sending…',
      formError: 'Failed to send. Please try again or write to info@mmdigital.me.',
      contactDirectTitle: 'Direct contact',
      contactLabelEmail: 'Email',
      contactLabelPhone: 'Phone',
      contactLabelInstagram: 'Instagram',
      contactLabelAddress: 'Address',
      contactLabelHours: 'Hours',
      contactHoursValue: 'Mon – Fri: 09:00 – 18:00<br>Sat – Sun: by appointment',
      industries: ['Hospitality', 'IT', 'Retail', 'Services', 'Construction', 'Healthcare', 'Other'],
      services: [
        'Digital marketing',
        'Social media management',
        'Marketing strategy',
        'Marketing consulting',
        'Website development',
        'Graphic design',
        'Logo design',
        'Photography',
        'Video production',
        'SEO services',
        'Google Ads',
        'Branding',
        'Course / Training',
        'All / not sure',
      ],
      modalThanksTitle: 'Thanks! Your message was *sent*.',
      modalThanksText: 'We respond within 24 hours. In the meantime — back to what you do best.',
      modalOk: 'Got it',
      footerCopy: 'All rights reserved.',
      footerMade: 'Made in Montenegro',
      pageNotFoundLabel: '404',
      pageNotFoundTitle: 'There is *nothing* here.',
      pageNotFoundText: 'The page you are looking for does not exist or has been moved. Go back to the home page and see what we offer.',
      pageNotFoundCta: 'Back to home',
    },
  },
};
