import { site } from '../site.js';

const c = site.contact;

export default {
  path: '/en/contact/',
  lang: 'en',
  title: 'Contact — MM Digital | Marketing Agency Montenegro',
  description:
    'Contact MM Digital. Free consultation, no obligations. We respond within 24 hours.',

  schema: [
    {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      name: 'Contact MM Digital',
      url: `${site.url}/en/contact/`,
      mainEntity: {
        '@type': 'Organization',
        name: 'MM Digital',
        email: c.email,
        telephone: c.phoneHref,
      },
    },
  ],

  blocks: [
    {
      type: 'hero',
      label: 'Contact',
      title: "Let's talk about *your business*.",
      subtitle:
        'Free consultation. 30 minutes. No obligations. No sales pitch. Just an honest conversation about how we can help.',
      meta: 'We respond within 24 hours.',
      image: 'heroes/letter-1.jpg',
      imageAlt: 'Letter and coffee, the start of a conversation',
    },

    {
      type: 'contact',
      contact: c,
      endpoint: site.formEndpoint,
      lang: 'en',
    },

    {
      type: 'steps',
      theme: 'light',
      label: 'What next',
      title: 'What happens after you *send a message*?',
      steps: [
        { title: 'Reply', text: 'We respond within 24 hours (usually faster).' },
        { title: 'Consultation', text: 'We schedule a free consultation (30 min, online or in person).' },
        { title: 'Analysis', text: 'We analyze your current marketing and tell you exactly where the opportunities are.' },
        { title: 'Proposal', text: 'If we agree we can help, we send a proposal with prices and a plan.' },
      ],
    },

    {
      type: 'text',
      paragraphs: [
        '*No pressure. No "limited offer". No sales tricks. Just an honest conversation.*',
      ],
    },
  ],
};
