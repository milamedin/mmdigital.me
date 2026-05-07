import { site } from '../../site.js';

export default {
  path: '/en/services/video-production/',
  lang: 'en',
  title: 'Video Production Montenegro | Videographer Podgorica | MM Digital',
  description:
    'Professional video production in Montenegro. Promo videos, Reels, drone, event video. MM Digital — video that tells a story and brings results.',

  schema: [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: 'Video production',
      provider: { '@type': 'Organization', name: 'MM Digital', url: site.url },
      areaServed: { '@type': 'Country', name: 'Montenegro' },
      name: 'Video production — MM Digital',
      url: `${site.url}/en/services/video-production/`,
    },
  ],

  blocks: [
    {
      type: 'hero',
      label: 'Service · Video production',
      title: '15 seconds of video can bring more clients than *100 photos*.',
      subtitle:
        'Promo videos, Reels, drone shots, behind the scenes. Video that not only shows your business, but makes people react.',
      cta: [{ label: 'Book a shoot', href: '/en/contact/' }],
      image: 'heroes/smartphone-1.jpg',
      imageAlt: 'Video camera on a tripod in a studio',
    },

    {
      type: 'text',
      label: 'The problem',
      title: 'Why your video *does not work*.',
      paragraphs: [
        'You shot a video. Nice music, slow motion, drone shots. 200 views. 3 likes. **0 calls.**',
        'The problem is not the quality of the footage. The problem is the structure. A video without a hook in the first 2 seconds is a video no one watches. A video without a story is a video no one remembers. A video without a CTA is a video that brings nothing.',
        'We do not make "pretty videos". **We make videos that have a job to do.**',
      ],
      align: 'left',
    },

    {
      type: 'cards',
      label: 'What we shoot',
      title: 'Our *video production* services',
      cols: 3,
      cards: [
        { icon: '▶', title: 'Promo videos', text: '30-60 seconds that say everything about your business. With a hook and a CTA.' },
        { icon: '#', title: 'Reels / TikTok', text: 'Short, dynamic, optimized for the algorithm. One day of shooting = 10-15 videos for the month.' },
        { icon: '◐', title: 'Behind the scenes', text: 'Process, team, daily life. The most authentic content there is.' },
        { icon: '◈', title: 'Drone shots', text: 'Aerial perspective. For hotels, real estate, events, tourism.' },
        { icon: '◳', title: 'Corporate video', text: 'For presentations, fairs, investors. Professional, but not sterile.' },
        { icon: '✦', title: 'Testimonial videos', text: 'Your satisfied clients talking about the experience. The strongest social proof.' },
      ],
      alt: true,
    },

    {
      type: 'values',
      theme: 'light',
      label: 'Formula',
      title: 'How we shoot, *the E-P-R formula*',
      items: [
        { title: 'E, Emotion', text: 'First 2 seconds. A hook that stops the scroll. Surprise, curiosity, intrigue.' },
        { title: 'P, Process', text: 'The middle. Something the viewer did not expect. Process is hypnotic — people cannot stop watching.' },
        { title: 'R, Result', text: 'The end. Finished product, satisfied client, concrete outcome. And a CTA.' },
      ],
    },

    {
      type: 'ctaSection',
      title: 'Your story is *waiting to be told*.',
      button: { label: 'Book a shoot', href: '/en/contact/' },
    },
  ],
};
