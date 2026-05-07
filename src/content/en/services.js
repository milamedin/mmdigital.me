import { site } from '../site.js';

export default {
  path: '/en/services/',
  lang: 'en',
  title: 'Services — MM Digital | Marketing, Websites, Design, Photo, Video',
  description:
    'All our services in one place. Digital marketing, website development, graphic design, logo, photography, video, SEO, Google Ads and branding. MM Digital Montenegro.',

  schema: [
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'MM Digital Services',
      url: `${site.url}/en/services/`,
      hasPart: site.en.nav
        .find((n) => n.label === 'Services')
        .children.map((c) => ({
          '@type': 'Service',
          name: c.label,
          url: `${site.url}${c.href}`,
        })),
    },
  ],

  blocks: [
    {
      type: 'hero',
      label: 'Services',
      title: 'Everything you need, *one team*.',
      subtitle:
        'You do not need one freelancer for design, another for the website, a third for Instagram. You need one team that understands your business, where everything fits.',
      cta: [{ label: "Let's talk", href: '/en/contact/' }],
      image: 'heroes/workspace-4.jpg',
      imageAlt: 'MacBook, creative work in quiet hours',
    },

    {
      type: 'cards',
      label: 'Marketing',
      title: 'Strategy, campaigns and *management*',
      cols: 2,
      cards: [
        { icon: '✦', title: 'Digital marketing', text: 'Strategy, campaigns, ads, analytics. A system that brings clients.', href: '/en/services/digital-marketing/' },
        { icon: '#', title: 'Social media management', text: 'Instagram, Facebook, LinkedIn, TikTok — daily. Your channels, our care.', href: '/en/services/social-media-management/' },
        { icon: '◇', title: 'Marketing strategy', text: 'Complete strategy tailored to your business. Audit, positioning, plan.', href: '/en/services/marketing-strategy/' },
        { icon: '?', title: 'Marketing consulting', text: 'Have a team but need direction? Consulting by the hour or project.', href: '/en/services/marketing-consulting/' },
      ],
    },

    {
      type: 'cards',
      theme: 'light',
      label: 'Design and brand',
      title: 'Visual *identity*',
      cols: 3,
      cards: [
        { icon: '◉', title: 'Logo design', text: 'A logo people remember. Brand guidelines included.', href: '/en/services/logo-design/' },
        { icon: '◰', title: 'Graphic design', text: 'Business cards, flyers, menus, catalogs, promo material.', href: '/en/services/graphic-design/' },
        { icon: '✺', title: 'Branding', text: 'Visual identity, storefronts, spaces, vehicles, uniforms.', href: '/en/services/branding/' },
      ],
    },

    {
      type: 'cards',
      label: 'Web and SEO',
      title: 'Your website as *the best salesperson*',
      cols: 2,
      cards: [
        { icon: '◧', title: 'Website development', text: 'Fast, mobile, SEO-optimized websites that convert.', href: '/en/services/website-development/' },
        { icon: '⌖', title: 'SEO services', text: 'So Google finds you before the competition. Organic traffic that grows.', href: '/en/services/seo-services/' },
        { icon: 'G', title: 'Google Ads', text: 'Google Ads campaigns. People actively searching for exactly what you offer.', href: '/en/services/google-ads/' },
      ],
    },

    {
      type: 'cards',
      label: 'Photo and video',
      title: 'Photos and video *that sell*',
      cols: 2,
      cards: [
        { icon: '◉', title: 'Photography', text: 'Product, food, ambient, portraits. Studio + on location. Podgorica and the coast.', href: '/en/services/photography/' },
        { icon: '▶', title: 'Video production', text: 'Promo videos, Reels, drone, corporate and event video.', href: '/en/services/video-production/' },
      ],
      alt: true,
    },

    {
      type: 'ctaSection',
      title: 'Not sure where to *start*?',
      text: 'Book a free consultation — we analyze your business and propose where the opportunities are. No obligations.',
      button: { label: 'Book a free consultation', href: '/en/contact/' },
      meta: 'We respond within 24 hours.',
    },
  ],
};
