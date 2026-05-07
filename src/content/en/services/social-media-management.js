import { site } from '../../site.js';

export default {
  path: '/en/services/social-media-management/',
  lang: 'en',
  title: 'Social Media Management Montenegro | Instagram, Facebook | MM Digital',
  description:
    'Professional social media management in Montenegro. Instagram, Facebook, LinkedIn, TikTok. Daily content, community management. MM Digital.',

  schema: [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: 'Social media management',
      provider: { '@type': 'Organization', name: 'MM Digital', url: site.url },
      areaServed: { '@type': 'Country', name: 'Montenegro' },
      name: 'Social media management — MM Digital',
      url: `${site.url}/en/services/social-media-management/`,
    },
  ],

  blocks: [
    {
      type: 'hero',
      label: 'Service · Social media',
      title: 'Your channels. Our care. *Your results.*',
      subtitle:
        'Instagram, Facebook, LinkedIn, TikTok — daily management, from content planning to replying to comments. You focus on the business. We focus on making sure everyone sees you.',
      cta: [{ label: 'Book a consultation', href: '/en/contact/' }],
      image: 'heroes/smartphone-2.jpg',
      imageAlt: 'Phone with social media icons',
    },

    {
      type: 'text',
      label: 'The problem',
      title: '"I have no time for *Instagram*."',
      paragraphs: [
        'We hear it every day. And we get it. You run a business. You have clients, employees, bills, problems. Instagram is the last thing on the list.',
        'So you post when you remember. Once a week. Or once a month. A product photo, a three-word caption, a few hashtags. **Zero comments. Zero messages. Zero clients from there.**',
        'The problem is not that you have no time. The problem is that social media requires consistency, strategy and understanding of the algorithm. That is a job in itself. And we do it for you.',
      ],
      align: 'left',
    },

    {
      type: 'cards',
      theme: 'light',
      label: 'What you get',
      title: 'What you get with monthly *social media management*',
      cols: 4,
      cards: [
        { icon: '✎', title: 'Content creation', text: 'We plan, write and design content for the entire month in advance. Every post has a reason to exist — not a random photo with a caption.' },
        { icon: '◳', title: 'Content calendar', text: 'A monthly content plan you approve before publishing. You know exactly what is going out, when and why.' },
        { icon: '◇', title: 'Design and visuals', text: 'Every post is designed to look professional and consistent with your brand. Not Canva templates, but custom design.' },
        { icon: '✦', title: 'Copywriting', text: 'Text that engages. A hook that stops the scroll, a story that holds attention, a CTA that drives action.' },
        { icon: '✉', title: 'Community management', text: 'We respond to comments, DMs, mentions. Every unanswered comment is a lost client. We do not miss a single one.' },
        { icon: '#', title: 'Hashtag strategy', text: 'Not random hashtags — researched, relevant, optimized for reach and engagement.' },
        { icon: '▶', title: 'Reels and video', text: 'Short video formats the algorithm favors. We plan, shoot or edit, depending on the package.' },
        { icon: '⌖', title: 'Monthly report', text: 'At the end of every month you get a report: what we did, what worked, what we will change.' },
      ],
    },

    {
      type: 'pricing',
      label: 'Packages',
      title: 'Choose the package that *fits you*',
      columns: ['', 'Starter', 'Growth', 'Premium'],
      rows: [
        ['Platforms', '1 platform', '2 platforms', '3+ platforms'],
        ['Posts per month', '12 (3/week)', '20 (5/week)', '30+ (every day)'],
        ['Reels per month', '2', '4', '8+'],
        ['Stories', '—', '8/month', 'Every day'],
        ['Community management', 'Basic', 'Daily', 'Proactive'],
        ['Content calendar', 'Yes', 'Yes', 'Yes'],
        ['Monthly report', 'Yes', 'Yes + analysis', 'Yes + strategy'],
        ['Photoshoots', '—', '1× monthly', '2× monthly'],
        ['Consultations', '—', '30 min/month', '2× 60 min/month'],
      ],
      note: 'Exact prices depend on industry, scope and specific requirements. [Book a consultation](/en/contact/) for an offer.',
      alt: true,
    },

    {
      type: 'steps',
      label: 'Process',
      title: 'Our monthly *process*',
      steps: [
        { title: 'Onboarding', text: 'We get to know your business, brand, tone of voice, target audience. You fill out a brand questionnaire. We agree on rules of the game.' },
        { title: 'Planning', text: 'At the beginning of every month we create a content calendar for the whole month. You approve it. If something does not fit, we change it.' },
        { title: 'Implementation', text: 'We post according to the plan. We answer comments and messages. We track what works and what does not. We adjust on the fly.' },
        { title: 'Report', text: 'What we did, what worked, what we will change next month. No "creative" interpretation of the numbers.' },
      ],
    },

    {
      type: 'text',
      title: 'Why not hire a freelancer for *€200*?',
      paragraphs: [
        'You can. And you will get someone who posts photos with captions. Maybe even pretty photos.',
        'But you will not get a strategy. You will not get someone who understands the algorithm and knows why a 7-second Reel performs better than a 30-second one. You will not get someone who answers comments within an hour. **You will not get a team.** You will get one person working for 15 clients at the same time, giving your profile 20 minutes a day.',
        'We give attention. Because your profile is your storefront, and it deserves more than 20 minutes.',
      ],
      alt: true,
    },

    {
      type: 'ctaSection',
      title: 'Stop worrying about *Instagram*.',
      text: 'Hand over your social media to us. You focus on what you do best.',
      button: { label: 'Book a free consultation', href: '/en/contact/' },
    },
  ],
};
