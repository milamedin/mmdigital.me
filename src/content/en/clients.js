import { site } from '../site.js';

export default {
  path: '/en/clients/',
  lang: 'en',
  title: 'Clients — MM Digital | Brands that trusted us',
  description:
    'Clients and partners of MM Digital agency — hotels, restaurants, local government, boutiques, agencies. Brands we do design, marketing and websites for in Montenegro.',

  schema: [
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'Clients and partners — MM Digital',
      url: `${site.url}/en/clients/`,
      mainEntity: { '@type': 'Organization', name: 'MM Digital', url: site.url },
    },
  ],

  blocks: [
    {
      type: 'hero',
      label: 'Clients',
      title: 'Brands that *trusted us*.',
      subtitle:
        'Hotels, restaurants, local government, boutiques, agencies — we have worked with businesses of different sizes and industries. Each had its own problem and its own solution.',
      cta: [{ label: 'Become next', href: '/en/contact/' }],
      image: 'heroes/handshake-1.jpg',
      imageAlt: 'Handshake after a business meeting',
    },

    {
      type: 'clientsGrid',
      auto: true,
      label: 'All clients',
      title: 'Collaboration that *shows*.',
      intro:
        'A logo represents a brand, but each one has a story behind it — a campaign, design, website, or all at once. We respect discretion, so we discuss specific projects in person.',
    },

    {
      type: 'text',
      theme: 'light',
      label: 'Industries',
      title: 'Who we *work with* (and who we do not).',
      paragraphs: [
        'We have the most experience in **hospitality** (hotels, restaurants, cafés), **local government**, **retail** (boutiques, salons, shops) and **services** (rent-a-car, agencies, lawyers, architects, consultants). These are industries where we know how clients think, how they decide and what they actually expect from marketing.',
        'We have worked along the coast and in Podgorica, with family businesses and with companies that have dozens of employees. With those just opening their doors and those that have operated for decades. **Size does not concern us — the intention to do honest work does.**',
        'We do not work with businesses selling something we do not believe in. We do not work with people who want "guaranteed results" overnight. We do not work without transparent contracts and clear expectations on both sides. It is better to refuse work at the start than for the client and us to waste time on something that leads nowhere.',
        'If your business belongs to one of the industries above, or is something else but you know what you are doing, [let us talk](/en/contact/). The consultation is free and lasts 30 minutes. No sales pitch.',
      ],
      align: 'left',
    },

    {
      type: 'values',
      label: 'Our approach',
      title: 'What you get when you become *our client*.',
      items: [
        { title: 'One team, one call.', text: 'You do not need to coordinate three freelancers, two agencies and one cousin. We do everything — from strategy to production. Responsibility does not fall between chairs.' },
        { title: 'Honest reports.', text: 'You get the numbers monthly. What worked, what did not, what we are changing. No decoration. If a campaign does not bring results, we will be the first to tell you and propose what to do next.' },
        { title: 'An approach that grows with you.', text: 'You start with one website, the next month you add Instagram, later Google Ads. You do not have to know everything from day one. We build a plan that adapts to the speed of your business.' },
      ],
    },

    {
      type: 'ctaSection',
      title: 'Ready to become the next client?',
      text: 'Book a free consultation. 30 minutes of conversation and you get a real estimate of what you need and how much it costs.',
      button: { label: 'Book a free consultation', href: '/en/contact/' },
    },
  ],
};
