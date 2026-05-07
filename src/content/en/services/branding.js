import { site } from '../../site.js';

export default {
  path: '/en/services/branding/',
  lang: 'en',
  title: 'Branding Montenegro | Visual Identity | MM Digital',
  description:
    'Professional branding in Montenegro. Visual identity, branding of storefronts, spaces, vehicles, uniforms. MM Digital — a brand that is remembered.',

  schema: [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: 'Branding',
      provider: { '@type': 'Organization', name: 'MM Digital', url: site.url },
      areaServed: { '@type': 'Country', name: 'Montenegro' },
      name: 'Branding — MM Digital',
      url: `${site.url}/en/services/branding/`,
    },
  ],

  blocks: [
    {
      type: 'hero',
      label: 'Service · Branding',
      title: 'Branding is not a logo on the wall. *Branding is the feeling you leave behind.*',
      subtitle:
        'Visual identity, branding of storefronts, spaces, vehicles, uniforms. So they recognize you, and remember you.',
      cta: [{ label: 'Book a consultation', href: '/en/contact/' }],
      image: 'heroes/brendiranje-1.jpg',
      imageAlt: 'Colorful shelf with branded products in a store',
    },

    {
      type: 'text',
      label: 'What it is',
      title: 'Branding, more than *visual identity*.',
      paragraphs: [
        'Branding is not just a logo, colors and fonts. It is the way people feel when they think of your business.',
        'Every detail — from the storefront to the business card, from the website to the uniform — tells a story. **The question is: is it the story you want to tell?**',
      ],
      align: 'left',
    },

    {
      type: 'text',
      label: 'Storefront',
      title: 'Storefront branding, the first impression *you cannot repeat*.',
      paragraphs: [
        'Your storefront is your most important ad. It works 24/7, does not cost per click, and is seen by everyone passing by.',
        'A branded storefront tells a story. Colors, materials, lighting, typography — everything communicates who you are and who you are for. A passerby decides in a fraction of a second: "This is for me" or "This is not for me."',
        'We design storefronts that say: **"This is for you. Come in."**',
      ],
      alt: true,
    },

    {
      type: 'cards',
      theme: 'light',
      label: 'What we brand',
      title: 'Our *branding* services',
      cols: 3,
      cards: [
        { icon: '✦', title: 'Visual identity', text: 'Logo, colors, fonts, brand guidelines. A system that makes everything consistent.' },
        { icon: '◰', title: 'Storefront branding', text: 'Design, materials, lighting. Your storefront as a 24/7 ad.' },
        { icon: '◳', title: 'Interior branding', text: 'Walls, signage, details. So the space tells your story.' },
        { icon: '◈', title: 'Vehicle branding', text: 'Delivery, service vehicles, fleet. A mobile billboard.' },
        { icon: '◇', title: 'Uniform branding', text: 'T-shirts, aprons, caps. A professional and recognizable team.' },
        { icon: '✎', title: 'Promo material', text: 'Business cards, flyers, catalogs, banners. All in a unified style.' },
      ],
    },

    {
      type: 'ctaSection',
      title: 'Your brand deserves to be *recognized*.',
      button: { label: 'Book a free consultation', href: '/en/contact/' },
    },
  ],
};
