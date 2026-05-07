import { site } from '../../site.js';

export default {
  path: '/en/services/marketing-consulting/',
  lang: 'en',
  title: 'Marketing Consulting Montenegro | Advisory | MM Digital',
  description:
    'Professional marketing consulting in Montenegro. Advisory by the hour or by the project. MM Digital — experience you can rent.',

  schema: [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: 'Marketing consulting',
      provider: { '@type': 'Organization', name: 'MM Digital', url: site.url },
      areaServed: { '@type': 'Country', name: 'Montenegro' },
      name: 'Marketing consulting — MM Digital',
      url: `${site.url}/en/services/marketing-consulting/`,
    },
  ],

  blocks: [
    {
      type: 'hero',
      label: 'Service · Consulting',
      title: 'You do not need an agency. You need someone who *knows*.',
      subtitle:
        'Marketing consulting for businesses that have a team but need direction, a second opinion, or expertise they do not have in-house.',
      cta: [{ label: 'Book a consultation', href: '/en/contact/' }],
      image: 'heroes/konsultacije-1.jpg',
      imageAlt: 'Business meeting with a tablet showing charts and analysis',
    },

    {
      type: 'text',
      label: 'For whom',
      title: 'When you need *consulting*, not an agency.',
      paragraphs: [
        'You have a marketing manager. Or even a small team. They do good work. But sometimes they get stuck. They do not know if the strategy is right. They do not know if the ads are optimized. They do not know what the competition is doing differently.',
        'You do not need an agency to take everything over. You need someone to sit with your team, look at what they do, and tell them: **"This is great. Change this. Try this."**',
        'That is consulting. Experience you can rent, by the hour or by the project.',
      ],
      align: 'left',
    },

    {
      type: 'cards',
      label: 'Areas',
      title: 'Areas where we *advise*',
      cols: 4,
      cards: [
        { icon: '◆', title: 'Digital strategy', text: 'Complete analysis and recommendations for your online marketing.' },
        { icon: '#', title: 'Social media', text: 'Profile audit, content strategy, algorithm, growth tactics.' },
        { icon: '◈', title: 'Paid advertising', text: 'Meta Ads, Google Ads, campaign audit, optimization, scaling.' },
        { icon: '⌖', title: 'SEO', text: 'Technical audit, keyword strategy, content plan, link building.' },
        { icon: '✦', title: 'Branding', text: 'Positioning, visual identity, tone of voice.' },
        { icon: '◐', title: 'Sales funnel', text: 'From first touch to conversion — where you lose people and how to fix it.' },
        { icon: '✉', title: 'Email marketing', text: 'Strategy, automation, segmentation, A/B testing.' },
        { icon: '◳', title: 'Analytics', text: 'Google Analytics, Meta Pixel, attribution, understanding the data.' },
      ],
      alt: true,
    },

    {
      type: 'pricing',
      theme: 'light',
      label: 'Models',
      title: 'How *consulting works*',
      columns: ['Model', 'What it is', 'For whom'],
      rows: [
        ['One-time session', '60-90 min, focus on one problem', 'When you need a quick answer or second opinion'],
        ['Monthly retainer', '2-4 sessions per month + email support', 'When you need a permanent advisor for the team'],
        ['Project engagement', 'Defined scope, deadline and deliverables', 'A specific project (launch, rebrand, campaign)'],
        ['Team workshop', 'Half day or full day, hands-on', 'When you want to upgrade the team\'s knowledge'],
      ],
    },

    {
      type: 'text',
      label: 'Why MM Digital',
      title: 'Because we do not sell theory. We sell *experience*.',
      paragraphs: [
        'Every piece of advice we give is tested in practice — on our campaigns, with our clients, with our budgets. We do not read to you from a book. **We tell you what works because we tried it.**',
        'And one more thing: we are not biased. If you do not need a new service, we will not sell it to you. If your team does good work, we will tell you. Our job is to help you, not to sell to you.',
      ],
    },

    {
      type: 'ctaSection',
      title: 'Have a question? *Book a session.*',
      button: { label: 'Book a consultation', href: '/en/contact/' },
    },
  ],
};
