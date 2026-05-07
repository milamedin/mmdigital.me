import { site } from '../../site.js';

export default {
  path: '/en/services/marketing-strategy/',
  lang: 'en',
  title: 'Marketing Strategy Montenegro | Strategic Planning | MM Digital',
  description:
    'Complete marketing strategy tailored to your business. Analysis, planning, implementation. MM Digital — strategy that brings results.',

  schema: [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: 'Marketing strategy',
      provider: { '@type': 'Organization', name: 'MM Digital', url: site.url },
      areaServed: { '@type': 'Country', name: 'Montenegro' },
      name: 'Marketing strategy — MM Digital',
      url: `${site.url}/en/services/marketing-strategy/`,
    },
  ],

  blocks: [
    {
      type: 'hero',
      label: 'Service · Marketing strategy',
      title: 'Without strategy, marketing is just *spending money on hope*.',
      subtitle:
        'Complete marketing strategy tailored to your business, your industry and your goals. Not a template. Not a generic plan. Your strategy.',
      cta: [{ label: 'Book a strategy call', href: '/en/contact/' }],
      image: 'heroes/strategy-2.jpg',
      imageAlt: 'Blue growth chart, marketing strategy visualization',
    },

    {
      type: 'text',
      label: 'The problem',
      title: 'Why your marketing *does not work*.',
      paragraphs: [
        'You post on Instagram. You have a website. You may even pay for ads. But the results are — none. Or unpredictable. One month good, the next a disaster.',
        'The problem is not in the tactics. **The problem is that you do not have a strategy.** You do things without a plan, then wonder why it does not work.',
        'Marketing without strategy is like driving without a map. You can drive fast, but if you do not know where you are going, speed does not help.',
        'We make the map.',
      ],
      align: 'left',
    },

    {
      type: 'cards',
      label: 'What you get',
      title: 'What our *marketing strategy* includes',
      cols: 4,
      cards: [
        { icon: '◉', title: 'Audit of current state', text: 'A complete analysis of everything you do: website, social, SEO, ads, email, competition. Where you are now, no sugar coating.' },
        { icon: '◈', title: 'Audience analysis', text: 'Who are your ideal clients? Where are they online? What motivates them? What turns them off? Not assumptions — research.' },
        { icon: '⌖', title: 'Competitor analysis', text: 'What is your competition doing? Where are they strong? Where are they weak? Where are the opportunities they do not see?' },
        { icon: '✦', title: 'Positioning', text: 'How do you differ from the competition? What is your unique story? Why would someone choose you, not them?' },
        { icon: '◐', title: 'Channels and tactics', text: 'Which channels make sense for your business? Instagram, LinkedIn, Google, email, blog? Not all of them — the right ones.' },
        { icon: '✎', title: 'Content strategy', text: 'What to post, when, for whom and why. Content pillars, formats, frequency, tone of voice.' },
        { icon: '€', title: 'Budget and ROI', text: 'How much to invest, where and what to expect. Realistic numbers, not promises.' },
        { icon: '◳', title: 'Action plan', text: 'Step by step, what to do in month 1, 2, 3. With deadlines and responsible people.' },
      ],
      alt: true,
    },

    {
      type: 'values',
      theme: 'light',
      label: 'For whom',
      title: 'Who is *this service* for?',
      items: [
        { title: 'For businesses just starting out', text: 'And want to do the right thing from day one, not waste money on guesswork.' },
        { title: 'For businesses that are growing', text: 'And whose current approach no longer works. What worked when you had 10 clients does not work when you have 100.' },
        { title: 'For businesses with a team', text: 'But the team has no direction. Strategy provides the framework within which your team can work efficiently.' },
        { title: 'For businesses changing agencies', text: 'And want the new agency (us or someone else) to have a clear plan from day one.' },
      ],
    },

    {
      type: 'steps',
      label: 'Process',
      title: 'How the *process* looks',
      steps: [
        { title: 'Discovery', text: 'Week 1. We talk to you. Understand the business, goals, challenges, budget. You fill out a strategic questionnaire.' },
        { title: 'Research', text: 'Week 2. We analyze the market, competition, target audience, current state. We dig deep, not surface-level.' },
        { title: 'Creation', text: 'Week 3. We write the strategy. 20-40 pages of a concrete plan with numbers, deadlines and recommendations.' },
        { title: 'Presentation', text: 'Week 4. We present the strategy to you. Explain every part. Answer questions. Adjust if needed.' },
      ],
      alt: true,
    },

    {
      type: 'ctaSection',
      title: 'Stop guessing. Start *planning*.',
      button: { label: 'Book a strategy call', href: '/en/contact/' },
    },
  ],
};
