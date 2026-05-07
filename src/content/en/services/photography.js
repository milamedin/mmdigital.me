import { site } from '../../site.js';

export default {
  path: '/en/services/photography/',
  lang: 'en',
  title: 'Photographer Podgorica & Budva | Photo Studio | MM Digital',
  description:
    'Professional photography in Podgorica and Budva. Business photos, products, food, ambient, team. MM Digital — photos that sell.',

  schema: [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: 'Professional photography',
      provider: { '@type': 'Organization', name: 'MM Digital', url: site.url },
      areaServed: [
        { '@type': 'City', name: 'Podgorica' },
        { '@type': 'City', name: 'Budva' },
      ],
      name: 'Photo studio — MM Digital',
      url: `${site.url}/en/services/photography/`,
    },
  ],

  blocks: [
    {
      type: 'hero',
      label: 'Service · Photography',
      title: 'Photos that *sell*, not just look pretty.',
      subtitle:
        'Business photos, products, food, ambient, team. Professional photos that turn visitors into clients.',
      cta: [{ label: 'Book a shoot', href: '/en/contact/' }],
      image: 'heroes/fotografija-1.jpg',
      imageAlt: 'Professional photo studio with camera and lighting',
    },

    {
      type: 'text',
      label: 'The problem',
      title: 'Your photos *cost you clients*. And you do not know it.',
      paragraphs: [
        'You know that product photo you took with your phone in bad light? The one with the yellow tint and a hand shadow? That photo is on your website. On Instagram. On Google.',
        'Every time a potential client sees that photo, they make a decision. Not consciously — subconsciously. **"This does not look professional."** Scroll. They are gone. To the competition that has better photos.',
        'Good news: you do not need a professional photographer every day. You need them once, to make photos that will work for you for months.',
      ],
      align: 'left',
    },

    {
      type: 'text',
      label: 'Podgorica',
      title: 'Photo studio *Podgorica*, professional photography for your business',
      paragraphs: [
        'Our photo studio in Podgorica is equipped for all kinds of business photography. Product shots, business portraits, food photography, ambient — everything in one place.',
        'But we do not only work in the studio. **We come to you.** Because your space, your team, your products look best in their natural environment.',
      ],
    },

    {
      type: 'text',
      label: 'Budva and the coast',
      title: 'Photographer *Budva*, seasonal and tourism photography',
      paragraphs: [
        'Budva, Kotor, Tivat, Bar, Petrovac — the Montenegrin coast is the stage for your business. We do seasonal shoots when the light is best and your spaces are full of life. **One session = material for a whole season.**',
      ],
      alt: true,
    },

    {
      type: 'cards',
      theme: 'light',
      label: 'What we shoot',
      title: 'Our *photography* services',
      cols: 3,
      cards: [
        { icon: '◉', title: 'Product photography', text: 'Your products in the best light. For website, catalog, social media.' },
        { icon: '◍', title: 'Food photography', text: 'Food that looks delicious in a photo brings guests. We know how.' },
        { icon: '✦', title: 'Business portraits', text: 'Team, owner, management. People want to see who is behind the business.' },
        { icon: '◳', title: 'Ambient and interior', text: 'The atmosphere of your space in a photo. For hotels, restaurants, offices, salons.' },
        { icon: '◈', title: 'Event photography', text: 'Openings, conferences, fairs, corporate events.' },
        { icon: '#', title: 'Photos for web and social', text: 'A set of photos optimized for all channels. One day of shooting = material for 3-6 months.' },
      ],
    },

    {
      type: 'text',
      label: 'Why MM Digital',
      title: 'A photographer takes pretty photos. We make photos that *sell*.',
      paragraphs: [
        'The difference? We think about how that photo will look on Instagram, on Google, on a website. Which format for which channel. Which photo will make someone click, call, buy.',
        '**Because we are not just photographers. We are marketers who know how to shoot.**',
      ],
    },

    {
      type: 'ctaSection',
      title: 'Your business deserves *better photos*.',
      button: { label: 'Book a shoot', href: '/en/contact/' },
    },
  ],
};
