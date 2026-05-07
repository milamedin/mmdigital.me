import { site } from '../../site.js';

export default {
  path: '/en/services/website-development/',
  lang: 'en',
  title: 'Website Development Montenegro | Web Design Podgorica | MM Digital',
  description:
    'Professional website development in Montenegro. Web design, responsive sites, e-commerce. MM Digital — websites that turn visitors into clients.',

  schema: [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: 'Website development',
      provider: { '@type': 'Organization', name: 'MM Digital', url: site.url },
      areaServed: { '@type': 'Country', name: 'Montenegro' },
      name: 'Website development — MM Digital',
      url: `${site.url}/en/services/website-development/`,
      offers: { '@type': 'Offer', priceCurrency: 'EUR', price: '500' },
    },
  ],

  blocks: [
    {
      type: 'hero',
      label: 'Service · Websites',
      title: 'Your website has *3 seconds*. Either win the client, or lose them forever.',
      subtitle:
        'We build websites that not only look beautiful, but turn visitors into clients. Fast, mobile, optimized for Google.',
      cta: [{ label: 'Book a consultation', href: '/en/contact/' }],
      image: 'heroes/coding-1.jpg',
      imageAlt: 'Laptop with code, web development',
    },

    {
      type: 'text',
      label: 'The problem',
      title: 'The truth about your website *no one will tell you*.',
      paragraphs: [
        'Your website loads in 5 seconds. On mobile it looks like someone squeezed it into a box. Google does not know it. The competition shows up before you.',
        'And the worst part — you paid someone to build it. You got a "website". **But you did not get a tool that works for you.**',
        "A website is not a digital business card. A website is your best salesperson — working 24 hours a day, 7 days a week, asking no salary and taking no holiday. But only if it is built right.",
      ],
      align: 'left',
    },

    {
      type: 'text',
      label: 'Local',
      title: 'Website development in *Podgorica*, but not just any website.',
      paragraphs: [
        'In Montenegro you can find someone to build a website for €300. You can also find someone who charges €5,000. The difference is not in how pretty it is, **but in how much it earns.**',
        'A €300 website looks decent. But it loads slowly, is not optimized for Google, has no clear conversion structure, and on mobile it is unusable.',
        'Our websites are different. Every page, every button, every text has one goal: that the visitor becomes a client.',
      ],
    },

    {
      type: 'cards',
      label: 'What you get',
      title: 'What is *included* in every website',
      cols: 3,
      cards: [
        { icon: '◰', title: 'Responsive design', text: 'Perfect on phone, tablet and computer. 70% of visitors come from a phone.' },
        { icon: '⌖', title: 'SEO optimization', text: 'Meta tags, heading structure, speed, sitemap. So Google finds you.' },
        { icon: '◈', title: 'Conversion system', text: 'Contact forms, booking systems, CTA buttons. Every page leads to action.' },
        { icon: '◳', title: 'Google Analytics', text: 'You know exactly how many people visit the site, where they come from and what they do.' },
        { icon: '⚡', title: 'Speed', text: 'Page Speed score above 80. Every second of delay drops conversion by 7%.' },
        { icon: '✎', title: 'CMS (if needed)', text: 'So you can edit text, images and prices yourself, without a developer.' },
      ],
      alt: true,
    },

    {
      type: 'pricing',
      theme: 'light',
      label: 'Pricing',
      title: 'How much does a *website* cost?',
      columns: ['Type', 'Price', 'What is included'],
      rows: [
        ['Landing page', 'from €500', '1 page, CTA, contact form'],
        ['Business website', 'from €1,200', '5-8 pages, SEO, responsive, CMS'],
        ['E-commerce', 'from €2,500', 'Online store, payment, management'],
        ['Custom project', 'on request', 'Whatever you need'],
      ],
      note: 'Book a consultation for an exact quote tailored to your business.',
    },

    {
      type: 'steps',
      label: 'Process',
      title: 'Our *website development* process',
      steps: [
        { title: 'Conversation', text: 'Day 1. We understand your business and goals.' },
        { title: 'Structure and content', text: 'Week 1. We plan the structure, write the texts, choose visuals.' },
        { title: 'Design', text: 'Week 2. Visual design. We show you and ask for feedback.' },
        { title: 'Development', text: 'Week 3. We code. Responsive, fast, optimized. We test on all devices.' },
        { title: 'Launch', text: 'Week 4. The site is live. Google Analytics, Search Console, sitemap — all configured.' },
      ],
      alt: true,
    },

    {
      type: 'text',
      label: 'Web design',
      title: 'Web design in *Montenegro*, what to look for?',
      paragraphs: [
        'When you choose someone to build your website, ask three things:',
      ],
      list: [
        '**"Can you show me a website you built, and how much traffic it has?"** If they cannot, run.',
        '**"Is the website optimized for Google?"** If they say "that is an extra service", run.',
        '**"What happens after the site is published?"** If they say "nothing, the site is done", run.',
      ],
    },

    {
      type: 'ctaSection',
      title: 'Your website can be *better*.',
      button: { label: 'Book a free consultation', href: '/en/contact/' },
    },
  ],
};
