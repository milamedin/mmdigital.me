import { site } from '../../site.js';

export default {
  path: '/en/services/seo-services/',
  lang: 'en',
  title: 'SEO Services Montenegro | SEO Optimization | MM Digital',
  description:
    'Professional SEO services in Montenegro. Increase visibility on Google. MM Digital — SEO that brings organic traffic to your website.',

  schema: [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: 'SEO services',
      provider: { '@type': 'Organization', name: 'MM Digital', url: site.url },
      areaServed: { '@type': 'Country', name: 'Montenegro' },
      name: 'SEO services — MM Digital',
      url: `${site.url}/en/services/seo-services/`,
    },
  ],

  blocks: [
    {
      type: 'hero',
      label: 'Service · SEO',
      title: 'When someone types in what you offer, *do you appear*?',
      subtitle:
        'SEO that puts you ahead of the competition on Google. Organic traffic that does not cost per click and grows every month.',
      cta: [{ label: 'Book a free SEO analysis', href: '/en/contact/' }],
      image: 'heroes/analytics-2.jpg',
      imageAlt: 'Analytics dashboard with SEO metrics',
    },

    {
      type: 'text',
      label: 'What SEO is',
      title: 'What SEO is, *simply*.',
      paragraphs: [
        'SEO is the process that helps your website appear on Google when someone searches for what you offer.',
        'Imagine Google as a huge library. Your website is one book. SEO is the way you tell the librarian: **"When someone asks for this, give them my book."**',
        'Without SEO, your book is on the back shelf. With SEO — in first place.',
        'It is not magic. It is not a trick. Systematic work that produces results. But it takes time. **If anyone promises you "first position in 7 days", they are lying.**',
      ],
      align: 'left',
    },

    {
      type: 'text',
      label: 'Why it matters',
      title: '*75%* of people never go past the first page of Google.',
      paragraphs: [
        'That means if your website is not on the first page, for 75% of potential clients you do not exist. They will never find you. They will never see what you offer.',
        'And you know who is on the first page? **Your competition that invested in SEO.**',
        'SEO is not optional. SEO is a question of visibility, or invisibility.',
      ],
      alt: true,
    },

    {
      type: 'cards',
      label: 'SEO services',
      title: 'Our *SEO services*',
      cols: 3,
      cards: [
        { icon: '⚙', title: 'Technical SEO', text: 'Speed, mobile version, structure, sitemap. The technical foundation that enables everything else.' },
        { icon: '✎', title: 'On-Page SEO', text: 'Meta tags, headings, keywords, internal linking, images. Optimization of pages.' },
        { icon: '⌘', title: 'Off-Page SEO', text: 'Backlinks, directories, PR, guest articles. Authority in the eyes of Google.' },
        { icon: '◍', title: 'Local SEO', text: 'Google Business Profile, local keywords, reviews. So they find you in your city.' },
        { icon: '◳', title: 'Content SEO', text: 'Blog posts, guides, FAQ. Content Google loves and that answers your clients\' questions.' },
        { icon: '⌖', title: 'SEO audit', text: 'Complete analysis of your website and competition. Concrete recommendations with priorities.' },
      ],
    },

    {
      type: 'pricing',
      theme: 'light',
      label: 'Pricing',
      title: 'How much does *SEO* cost?',
      columns: ['Service', 'Price', 'What is included'],
      rows: [
        ['SEO Audit', 'from €200', 'Complete analysis of website and competition'],
        ['Monthly SEO', 'from €400/mo', 'On-page + off-page + content + reporting'],
        ['Local SEO', 'from €250/mo', 'GBP + local keywords + reviews'],
        ['SEO + Website', 'from €1,500', 'Website optimized from day one'],
      ],
    },

    {
      type: 'pricing',
      label: 'Expectations',
      title: 'When will I *see results*?',
      columns: ['Time', 'What happens'],
      rows: [
        ['Month 1', 'Audit, optimization, first content'],
        ['Months 2-3', 'You appear for 10-15 keywords'],
        ['Months 4-6', 'First page for 5-10 keywords'],
        ['Months 6-12', 'Stable position, organic traffic grows'],
      ],
      alt: true,
    },

    {
      type: 'ctaSection',
      title: 'Ready for Google to *find you*?',
      button: { label: 'Book a free SEO analysis', href: '/en/contact/' },
    },
  ],
};
