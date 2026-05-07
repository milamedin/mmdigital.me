import { site } from '../../site.js';

export default {
  path: '/en/services/graphic-design/',
  lang: 'en',
  title: 'Graphic Design Montenegro | Business Cards, Flyers, Promo | MM Digital',
  description:
    'Professional graphic design in Montenegro. Business cards, flyers, invitations, promo material, book design. MM Digital — design that does the job.',

  schema: [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: 'Graphic design',
      provider: { '@type': 'Organization', name: 'MM Digital', url: site.url },
      areaServed: { '@type': 'Country', name: 'Montenegro' },
      name: 'Graphic design — MM Digital',
      url: `${site.url}/en/services/graphic-design/`,
    },
  ],

  blocks: [
    {
      type: 'hero',
      label: 'Service · Graphic design',
      title: 'Design that *does the job*, not just looks pretty.',
      subtitle:
        'Business cards, flyers, menus, catalogs, promo material. Every design has one task: to make your business look as professional as it actually is.',
      cta: [{ label: 'Book a consultation', href: '/en/contact/' }],
      image: 'heroes/graficki-1.jpg',
      imageAlt: 'Designer drawing on a graphic tablet next to a laptop',
    },

    {
      type: 'text',
      label: 'The problem',
      title: 'Canva is *not* graphic design.',
      paragraphs: [
        "Let's be honest. Canva is a great tool. For people making presentations for school.",
        'But when your business card looks like a template, it shows. When your flyer looks like every other one, no one looks at it twice. When your catalog looks amateur, **the client assumes your business is amateur.**',
        'Graphic design is not "make something pretty". Graphic design is communication. Every color, every font, every space says something about your business. The question is — what does your current design say?',
      ],
      align: 'left',
    },

    {
      type: 'cards',
      theme: 'light',
      label: 'What we design',
      title: 'Our *design* services',
      cols: 4,
      cards: [
        { icon: '◰', title: 'Business cards', text: 'Your card is the first physical contact with a potential client. If it looks cheap, they assume your business is cheap. Our cards are not thrown away — they are kept.' },
        { icon: '✎', title: 'Flyers and brochures', text: 'A flyer that ends up in the trash is wasted money. A flyer someone keeps and shows to a colleague — that is marketing.' },
        { icon: '◳', title: 'Catalogs and presentations', text: 'For companies that need professional material for clients, partners or investors.' },
        { icon: '⌘', title: 'Menu design', text: 'For restaurants and cafés. A menu is not a list, a menu is a sales tool. The right design can lift the average bill by 15-25%.' },
        { icon: '◈', title: 'Promo material', text: 'Roll-up banners, posters, leaflets, signs. Everything for fairs, events and promotions.' },
        { icon: '✉', title: 'Invitations', text: 'For corporate events, openings, special occasions.' },
        { icon: '⌖', title: 'Books and publications', text: 'Covers, layout, typography. For cookbooks, guides, annual reports, catalogs.' },
        { icon: '#', title: 'Social media design', text: 'Post templates, story design, highlight icons. Consistent visual identity across all platforms.' },
      ],
    },

    {
      type: 'text',
      label: 'What design is',
      title: 'What graphic design *really* is.',
      paragraphs: [
        'Graphic design is visual communication. It is the way your brand speaks without words.',
        'Good design is invisible. The client does not think "what a beautiful font" — they **feel that the company is professional, reliable, worth attention.** Bad design is visible because something feels "off", but the client cannot say what.',
        'We know what. And we know how to fix it.',
      ],
    },

    {
      type: 'ctaSection',
      title: 'Your brand deserves *better design*.',
      button: { label: 'Book a free consultation', href: '/en/contact/' },
    },
  ],
};
