import { site } from '../../site.js';

export default {
  path: '/en/services/google-ads/',
  lang: 'en',
  title: 'Google Ads Montenegro | Google Advertising | MM Digital',
  description:
    'Professional Google Ads in Montenegro. Campaigns that bring clients searching right now for what you offer. MM Digital.',

  schema: [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: 'Google Ads campaigns',
      provider: { '@type': 'Organization', name: 'MM Digital', url: site.url },
      areaServed: { '@type': 'Country', name: 'Montenegro' },
      name: 'Google Ads — MM Digital',
      url: `${site.url}/en/services/google-ads/`,
    },
  ],

  blocks: [
    {
      type: 'hero',
      label: 'Service · Google Ads',
      title: 'You only pay when someone clicks. *And that someone is searching for you.*',
      subtitle:
        'Google Ads that brings people who are actively searching for what you offer. Precise. Measurable. Profitable.',
      cta: [{ label: 'Book a consultation', href: '/en/contact/' }],
      image: 'heroes/analytics-3.jpg',
      imageAlt: 'Google Analytics dashboard with metrics',
    },

    {
      type: 'text',
      label: 'How it works',
      title: 'How Google Ads works, *without complications*.',
      paragraphs: [
        'Someone opens their phone and types in what you offer. Google shows them results. At the top — your ad. They click. They see your offer. They call. They buy.',
        '**You only pay when someone clicks.** Not for impressions, for interest.',
        'The difference between Google Ads and Instagram ads? On Instagram you interrupt someone watching something else. On Google you appear in front of someone actively searching for what you offer. **That is the difference between an ad and an answer to a question.**',
      ],
      align: 'left',
    },

    {
      type: 'cards',
      theme: 'light',
      label: 'Campaign types',
      title: 'Our *Google Ads* services',
      cols: 3,
      cards: [
        { icon: '⌖', title: 'Search campaigns', text: 'Your ad when someone searches for your services. Precise targeting by keywords and location.' },
        { icon: '◍', title: 'Local campaigns', text: 'Target people in a radius around your business. Ideal for restaurants, salons, services.' },
        { icon: '◈', title: 'Display campaigns', text: 'Visual ads on websites your target audience visits.' },
        { icon: '↻', title: 'Remarketing', text: 'Someone visited the site but did not buy? Your ad follows and reminds them.' },
        { icon: '▶', title: 'YouTube Ads', text: 'Video ads in front of the right audience. The most suitable format for new brands.' },
        { icon: '◳', title: 'Performance Max', text: 'Google AI optimizes the campaign across all channels at once for maximum ROI.' },
      ],
    },

    {
      type: 'steps',
      label: 'Approach',
      title: 'How we *run campaigns*',
      steps: [
        { title: 'Week 1', text: 'Research, competitor analysis, setup. We structure campaigns for maximum efficiency.' },
        { title: 'Weeks 2-4', text: 'Testing, optimization, A/B testing. We quickly find what works, kill what does not.' },
        { title: 'Month 2+', text: 'Scaling what works, killing what does not. Weekly reports — you know exactly where every euro went.' },
      ],
    },

    {
      type: 'ctaSection',
      title: 'Ready for Google to *show you first*?',
      button: { label: 'Book a free consultation', href: '/en/contact/' },
    },
  ],
};
