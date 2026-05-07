import { site } from '../../site.js';

export default {
  path: '/en/services/digital-marketing/',
  lang: 'en',
  title: 'Digital Marketing Montenegro | MM Digital Podgorica',
  description:
    'Professional digital marketing services in Montenegro. Strategy, campaigns, ads, analytics. MM Digital — for businesses that want results, not reports.',

  schema: [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: 'Digital marketing',
      provider: { '@type': 'Organization', name: 'MM Digital', url: site.url },
      areaServed: { '@type': 'Country', name: 'Montenegro' },
      name: 'Digital marketing — MM Digital',
      description:
        'Strategy, campaigns, ads, analytics. A system that brings clients, not posting on social media.',
      url: `${site.url}/en/services/digital-marketing/`,
    },
  ],

  blocks: [
    {
      type: 'hero',
      label: 'Service · Digital marketing',
      title: 'Digital marketing measured in *clients*, not in likes.',
      subtitle:
        'Strategy, campaigns, ads, analytics. Not "posting on social media", but a system that brings clients while you do your job.',
      cta: [{ label: 'Book a free consultation', href: '/en/contact/' }],
      image: 'heroes/analytics-1.jpg',
      imageAlt: 'Marketing dashboard with metrics and graphs',
    },

    {
      type: 'text',
      label: 'What it is',
      title: 'What digital marketing is, and what it *IS NOT*.',
      paragraphs: [
        'Digital marketing is not "posting on Instagram". That is just one small part.',
        'Digital marketing is a system. It starts the moment someone types into Google what you offer, and ends when that person becomes your client. Between those two points there are 20 steps. Most businesses do 2-3 of them. **And then wonder why it does not work.**',
        'We do all 20. From the first click to the signed contract. From the first view to the repeat purchase.',
      ],
      align: 'left',
    },

    {
      type: 'cards',
      theme: 'light',
      label: 'What we do',
      title: 'Our digital marketing services',
      cols: 3,
      cards: [
        {
          icon: '◆',
          title: 'Strategy and planning',
          text: 'It all starts with a plan. We analyze your business, competition, target audience, and build a strategy that makes sense for you. Not for "businesses in general", for YOU.',
        },
        {
          icon: '◈',
          title: 'Campaigns and ads',
          text: 'Meta Ads, Google Ads, LinkedIn Ads. Campaigns that target the right people with the right message at the right time. Every euro is tracked to results.',
        },
        {
          icon: '✉',
          title: 'Email marketing',
          text: 'A channel that returns 42x ROI, and most businesses do not use it. We build your email list and turn it into clients who come back.',
        },
        {
          icon: '✎',
          title: 'Content marketing',
          text: 'Blog posts, guides, case studies. Content that positions you as an expert in your industry, and that Google loves.',
        },
        {
          icon: '⌖',
          title: 'Analytics and reporting',
          text: 'Every week you know exactly what we did, how much it cost and what results it brings. Numbers, not stories.',
        },
        {
          icon: '◇',
          title: 'Conversion and optimization',
          text: 'It is no longer enough to bring people to the website — you have to convert them into clients. Optimization of landing pages, forms and the buying flow.',
        },
      ],
    },

    {
      type: 'text',
      label: 'Local',
      title: 'Digital marketing in *Podgorica* — local knowledge, global tactics.',
      paragraphs: [
        'Montenegro is not America. What works in New York does not have to work in Podgorica. We know the local market — habits, platforms, the way Montenegrins make decisions.',
        'But we use global tactics. The same strategies used by agencies in London and Berlin, adapted for our market. **That combination is what separates us** from agencies that copy American tutorials and from those that work "by feeling".',
      ],
    },

    {
      type: 'ctaSection',
      title: 'Your marketing deserves a *system*, not improvisation.',
      text: '30 minutes of conversation. After it, you know where you are losing clients and where the opportunities are. No obligations.',
      button: { label: 'Book a free consultation', href: '/en/contact/' },
      meta: 'We respond within 24 hours.',
    },
  ],
};
