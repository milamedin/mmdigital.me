import { site } from '../site.js';

export default {
  path: '/en/',
  lang: 'en',
  title: 'MM Digital — Marketing Agency Montenegro | Full-Service Digital Marketing',
  description:
    'Full-service marketing agency in Montenegro. Digital marketing, websites, graphic design, photography, video, SEO. For businesses that know what they do and need to be seen.',

  schema: [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'MM Digital',
      alternateName: 'MMDigital Creative Agency',
      url: site.url,
      logo: `${site.url}/images/logo.svg`,
      description:
        'Full-service marketing agency in Montenegro. Digital marketing, websites, design, photography, video, SEO.',
      email: site.contact.email,
      telephone: site.contact.phoneHref,
      address: {
        '@type': 'PostalAddress',
        streetAddress: site.contact.address.street,
        addressLocality: site.contact.address.city,
        postalCode: site.contact.address.postal,
        addressCountry: 'ME',
      },
      sameAs: [site.contact.instagramUrl],
    },
  ],

  blocks: [
    {
      type: 'hero',
      label: 'MM Digital · Marketing Agency Montenegro',
      title: 'Your business does the work. *We make sure everyone sees it.*',
      subtitle:
        'Full-service marketing agency in Montenegro. For businesses that know what they do, but need someone who knows how to show it to the world.',
      cta: [
        { label: "Let's talk", href: '/en/contact/' },
        { label: 'See services', href: '/en/services/' },
      ],
      meta: 'Free consultation. No obligations. No sales pitch.',
      image: 'heroes/bts-3.jpg',
      imageAlt: 'Behind the scenes, videographer at work',
    },

    {
      type: 'text',
      label: 'The problem',
      title: 'You have a great business. But *only you know it*.',
      paragraphs: [
        'Your product is good. Your service is quality. Your clients are satisfied. But new clients are not finding you. Google does not know you. Your Instagram looks like someone runs it "on the side". You have a website, but it does nothing except exist.',
        'You are not the problem. The problem is that doing good work is not enough. You need to be seen. **In the right place, at the right time, in front of the right people.**',
        "That is our job.",
      ],
      align: 'left',
    },

    {
      type: 'cards',
      label: 'What we do',
      title: 'Everything you need. *One team. One call.*',
      intro:
        'You do not need one freelancer for design, another for the website, a third for Instagram and a fourth for photos. You need one team that understands your business, where everything fits together.',
      cols: 3,
      cards: [
        {
          icon: '✦',
          title: 'Digital marketing',
          text: 'Strategy, campaigns, ads, analytics. Not "posting on social media", but a system that brings clients while you do your job.',
          href: '/en/services/digital-marketing/',
        },
        {
          icon: '◆',
          title: 'Social media management',
          text: 'Instagram, Facebook, LinkedIn, TikTok. Day-to-day, from content planning to replying to comments. Your channels, our care.',
          href: '/en/services/social-media-management/',
        },
        {
          icon: '✱',
          title: 'Marketing strategy',
          text: 'Complete strategy tailored to your business. Not a template, but a plan made for you, your industry and your goals.',
          href: '/en/services/marketing-strategy/',
        },
        {
          icon: '◇',
          title: 'Marketing consulting',
          text: 'Have a team but need direction? We sit with you, analyze, advise. No long contracts, by the hour or by the project.',
          href: '/en/services/marketing-consulting/',
        },
        {
          icon: '✧',
          title: 'Graphic design',
          text: 'Logos, business cards, menus, flyers, promo material. Visual identity that speaks for you.',
          href: '/en/services/graphic-design/',
        },
        {
          icon: '⬡',
          title: 'Logo design',
          text: 'A logo people remember. Not a generic symbol, but a mark that represents your story.',
          href: '/en/services/logo-design/',
        },
        {
          icon: '◐',
          title: 'Website development',
          text: 'Websites that not only look beautiful, but turn visitors into clients. Fast, mobile, optimized.',
          href: '/en/services/website-development/',
        },
        {
          icon: '◉',
          title: 'Photography',
          text: 'Business photos, product, ambient, team. Photos that sell, not just look pretty.',
          href: '/en/services/photography/',
        },
        {
          icon: '▶',
          title: 'Video production',
          text: 'Promo videos, Reels, drone, behind the scenes. Video that tells a story and drives action.',
          href: '/en/services/video-production/',
        },
        {
          icon: '⌖',
          title: 'SEO services',
          text: 'So Google finds you before the competition. Organic traffic that does not cost per click and grows every month.',
          href: '/en/services/seo-services/',
        },
        {
          icon: '◈',
          title: 'Google Ads',
          text: 'Google Ads campaigns that bring people who are right now searching for what you offer. Precise. Measurable.',
          href: '/en/services/google-ads/',
        },
        {
          icon: '✺',
          title: 'Branding',
          text: 'Visual identity, branding of spaces, vehicles, uniforms. So they recognize you, and remember you.',
          href: '/en/services/branding/',
        },
      ],
    },

    {
      type: 'clients',
      auto: true,
      label: 'Partners and clients',
      title: 'Brands that *trusted us*.',
      intro:
        'Hotels, restaurants, local government, boutiques, agencies — they chose us because we delivered results. [See all →](/en/clients/)',
      split: true,
      speed: 100,
    },

    {
      type: 'values',
      theme: 'light',
      label: 'Why MM Digital',
      title: 'Why *MM Digital*?',
      items: [
        {
          title: 'We do not work for everyone.',
          text: 'We work with businesses that deserve to be seen. We choose clients with whom we can achieve results. If we cannot help, we will tell you. Honestly. Because our reputation is worth more than one contract.',
        },
        {
          title: 'We measure results, not activity.',
          text: 'Number of posts, reach, impressions — those are numbers for reports. We measure what really matters: how many new clients, how many inquiries, how much your business has grown. If our work does not bring results, we will be the first to tell you.',
        },
        {
          title: 'Everything under one roof.',
          text: 'Design, website, photos, video, social, ads, SEO — one team that does everything in sync. No "that is not our part" or "ask another freelancer". Everything is ours. And everything fits.',
        },
        {
          title: 'We are not perfect. But we are honest.',
          text: 'We will not promise "guaranteed results" or "first position on Google in 7 days". We will tell you what is realistic, how long it takes and how much it costs. No surprises.',
        },
      ],
      alt: true,
    },

    {
      type: 'text',
      label: 'Who we work with',
      title: 'We work with businesses that *mean it*.',
      paragraphs: [
        'Not by size, but by intent.',
        'We have worked with restaurants that have 10 tables and hotels that have 100 rooms. With boutique brands just starting out and companies that have existed for 20 years. With law firms, beauty salons, IT companies, construction companies, travel agencies.',
        'They have one thing in common: they know they do good work. **And they want the rest of the world to see it.**',
        "If that is you, [let's talk](/en/contact/).",
      ],
    },

    {
      type: 'steps',
      label: 'Process',
      title: 'How we work, *3 steps*',
      steps: [
        {
          title: 'Diagnosis',
          text: 'We analyze your current marketing — website, social, Google, competitors. We tell you exactly where you are losing clients and where the opportunities are. Free.',
        },
        {
          title: 'Plan',
          text: 'Based on the diagnosis, we make a concrete plan. With numbers, deadlines and expectations. Not a generic "social media package", but a strategy for your business.',
        },
        {
          title: 'Implementation',
          text: 'We work. Every week you see what we did and what results it brings. No surprises. No hidden costs.',
        },
      ],
      alt: true,
    },

    {
      type: 'ctaSection',
      title: 'Your business deserves to be *seen*.',
      text: 'Every day without strategy is a day when your competition takes your clients. Book a free consultation, 30 minutes, no obligations. Just an honest analysis and a concrete proposal.',
      button: { label: 'Book a free consultation', href: '/en/contact/' },
      meta: 'We respond within 24 hours.',
    },
  ],
};
