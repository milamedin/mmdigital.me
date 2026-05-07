import { site } from '../../site.js';

export default {
  path: '/en/services/logo-design/',
  lang: 'en',
  title: 'Logo Design Montenegro | Logo for Restaurant, Boutique, Salon | MM Digital',
  description:
    'Professional logo design in Montenegro. Logo for company, restaurant, boutique, beauty salon, construction firm. MM Digital — logos that are remembered.',

  schema: [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: 'Logo design',
      provider: { '@type': 'Organization', name: 'MM Digital', url: site.url },
      areaServed: { '@type': 'Country', name: 'Montenegro' },
      name: 'Logo design — MM Digital',
      url: `${site.url}/en/services/logo-design/`,
    },
  ],

  blocks: [
    {
      type: 'hero',
      label: 'Service · Logo design',
      title: 'A logo is not a picture. *A logo is a promise*.',
      subtitle:
        'Your logo is the first visual signal of who you are. We create logos that represent your story. No templates from a Fiverr catalog.',
      cta: [{ label: 'Book a consultation', href: '/en/contact/' }],
      image: 'heroes/sketch-1.jpg',
      imageAlt: 'Hand drawing a logo on a tablet',
    },

    {
      type: 'text',
      label: 'The problem',
      title: 'The problem with a *€20 logo*.',
      paragraphs: [
        'You can buy a logo online for €20. Or for €5 on Fiverr. You will get something. But that "something" is being used by another 500 companies. The same font, the same symbol, the same story — which is not yours.',
        'A logo is not a picture. **A logo is a promise.** When someone sees your logo, in a fraction of a second they decide: "Does this look like a company I can trust?"',
        'If your logo looks like it was made in 5 minutes, people assume your business works the same way.',
      ],
      align: 'left',
    },

    {
      type: 'values',
      theme: 'light',
      label: 'Rules',
      title: 'Logo for a company, *four rules*',
      items: [
        { title: 'Recognizability', text: 'It must stand out from the competition. If your logo looks like every other one in your industry, it is not doing its job.' },
        { title: 'Scalability', text: 'It must look good on a business card (3cm) and on a billboard (3m). Too much detail = lost on small formats.' },
        { title: 'Longevity', text: 'Trends pass. Your logo should look relevant 10 years from now too.' },
        { title: 'Functionality', text: 'It must work in a single color, on light and dark backgrounds, in horizontal and vertical versions.' },
      ],
    },

    {
      type: 'cards',
      label: 'Industries',
      title: 'Logo for *every industry*',
      cols: 3,
      cards: [
        { icon: '◍', title: 'Logo for restaurant', text: 'Communicates the type of cuisine, atmosphere and price range. Fine dining cannot have the same style as fast food.' },
        { icon: '✦', title: 'Logo for boutique', text: 'Elegance, style, exclusivity. Your clients make decisions based on aesthetics.' },
        { icon: '◇', title: 'Logo for beauty salon', text: 'Professionalism, cleanliness, modernity. Because your clients trust you with their appearance.' },
        { icon: '◈', title: 'Logo for construction firm', text: 'Strength, reliability, stability. Because you build things that last.' },
        { icon: '⌖', title: 'Logo for IT company', text: 'Innovation, precision, future. Because you work in an industry that changes every day.' },
        { icon: '⚖', title: 'Logo for law firm', text: 'Authority, trust, tradition. Because your clients trust you with the most important decisions.' },
      ],
    },

    {
      type: 'steps',
      label: 'Process',
      title: 'How we *create* a logo',
      steps: [
        { title: 'Questionnaire', text: 'You fill out a brand questionnaire that helps us understand your business and vision.' },
        { title: 'Research', text: 'We analyze the competition, industry and target audience.' },
        { title: 'Concepts', text: 'We create 3 different concepts. You choose the direction.' },
        { title: 'Finalization', text: 'We develop the chosen concept and prepare the final files + brand guidelines.' },
      ],
      alt: true,
    },

    {
      type: 'text',
      title: 'What you *get*',
      paragraphs: [
        '**A complete package** that includes everything you need to use the logo anywhere — from a business card to a billboard:',
      ],
      list: [
        'Logo in 3 versions (horizontal, vertical, icon)',
        'All formats (PNG, SVG, PDF, EPS)',
        'Brand guidelines (colors, fonts, usage rules)',
        'Versions for light and dark backgrounds',
        'Mockups for business cards, social media, signs',
      ],
    },

    {
      type: 'ctaSection',
      title: 'Ready for a logo that *represents you*?',
      button: { label: 'Book a free consultation', href: '/en/contact/' },
    },
  ],
};
