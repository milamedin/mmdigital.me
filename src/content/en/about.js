import { site } from '../site.js';

export default {
  path: '/en/about/',
  lang: 'en',
  title: 'About — MM Digital | Marketing Agency Montenegro · Mila Medin',
  description:
    'MM Digital is a full-service marketing agency from Montenegro. Founder and Executive Director, Mila Medin. Our story, values and approach.',

  schema: [
    {
      '@context': 'https://schema.org',
      '@type': 'AboutPage',
      name: 'About MM Digital',
      url: `${site.url}/en/about/`,
      mainEntity: { '@type': 'Organization', name: 'MM Digital', url: site.url },
    },
  ],

  blocks: [
    {
      type: 'hero',
      label: 'About us',
      title: 'We did not start with a plan. We started with *frustration*.',
      subtitle:
        'We saw great businesses in Montenegro fail — not because they were bad, but because no one saw them. Restaurants with incredible food and empty tables. Companies with great products and zero online presence. Professionals better than the competition, but the competition has better marketing.',
      cta: [{ label: "Let's talk", href: '/en/contact/' }],
      meta: 'It pissed us off. And that is the reason MM Digital exists.',
      image: 'heroes/workspace-3.jpg',
      imageAlt: 'Agency workspace, laptop and notes',
    },

    {
      type: 'text',
      label: 'Who we are',
      title: 'Who we are, *without corporate jargon*.',
      paragraphs: [
        'MM Digital is a full-service marketing agency from Montenegro. That means we do everything — from strategy to implementation, from design to ads, from photography to SEO.',
        "But that is not what defines us. **What defines us is the approach.**",
        "We do not sell packages. We do not send generic reports. We do not promise the impossible. Instead, we sit with you, understand your business and build a plan that actually makes sense. If something does not work, we change it. If something works, we scale it.",
        "Sounds simple? It is. But you would be surprised how many agencies do not do it.",
      ],
      align: 'left',
    },

    {
      type: 'founder',
      label: 'Founder',
      name: 'Mila Medin',
      role: 'Founder & Executive Director',
      image: 'team/mila-medin.jpg',
      imageAlt: 'Mila Medin, founder and executive director of MM Digital',
      paragraphs: [
        '**Mila Medin** is the founder and executive director of MM Digital Creative Agency. She graduated in Information Systems and Technologies from the **Faculty of Organizational Sciences (FON)**, University of Belgrade. That blend of technical understanding and years in the creative industry shaped what the agency is today.',
        'She leads a team that does not make *"pretty things"*. It makes things that work. Strategy measured in clients, websites that sell, content that is remembered. Not because "everyone else does it that way", but because that is what your business actually needs.',
      ],
      links: [
        { label: 'Instagram', href: site.contact.instagramUrl, external: true },
        { label: 'Email', href: `mailto:${site.contact.email}` },
      ],
      alt: true,
    },

    {
      type: 'values',
      theme: 'light',
      label: 'Values',
      title: 'Three things we *believe in*.',
      items: [
        { title: 'Honesty above all.', text: 'If your website is bad, we will tell you. If your logo needs a change, we will tell you. If we think you do not need us, we will tell you that too. We are not here to please. We are here to help.' },
        { title: 'Results, not activity.', text: '100 posts a month with no results is worse than 10 posts that bring clients. We do not measure how much we work — we measure what we achieve.' },
        { title: 'Partnership, not service.', text: 'We do not work FOR you. We work WITH you. Your success is our success. Your problem is our problem. When you grow, we grow.' },
      ],
    },

    {
      type: 'text',
      label: 'Our story',
      title: 'A story that is not perfect, *and that is the point*.',
      paragraphs: [
        "We will not tell you a fairy tale about how we had a vision from day one and everything went smoothly. It did not.",
        'The first campaigns were not perfect. We learned from mistakes, and that is what makes us better than agencies that sell you "guaranteed results". **We know what does NOT work because we tried it.** We know broad targeting sometimes beats detailed targeting. We know an email with an "ugly" subject line sometimes has a better open rate than the "perfect" one. We know professional photography sometimes loses to a phone snapshot.',
        'You cannot buy that experience. You can only earn it.',
      ],
    },

    {
      type: 'text',
      label: 'For whom',
      title: 'We work with people who *mean it*.',
      paragraphs: [
        'MM Digital is not for everyone. We work with businesses that:',
      ],
      list: [
        'Understand that marketing is not a cost, but an investment',
        'Are willing to be patient (results do not come overnight)',
        'Want a partner, not an order taker',
        'Know they do good work and want the rest of the world to see it',
      ],
      alt: true,
    },

    {
      type: 'text',
      paragraphs: [
        'If you are looking for someone to take "a few pretty pictures" and disappear, we are not it.',
        'If you are looking for someone to sit with you, understand your business and build a plan that actually works, **[get in touch](/en/contact/)**.',
      ],
    },

    {
      type: 'ctaSection',
      title: "Let's *get to know* each other.",
      text: '30 minutes. No obligations. No sales pitch. Just an honest conversation about your business and how we can help.',
      button: { label: 'Book a consultation', href: '/en/contact/' },
    },
  ],
};
