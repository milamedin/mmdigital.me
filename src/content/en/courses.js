import { site } from '../site.js';

export default {
  path: '/en/courses/',
  lang: 'en',
  title: 'Marketing Courses | Digital Marketing Training | MM Digital',
  description:
    'Learn digital marketing from professionals. Online courses from basics to advanced strategies. MM Digital — knowledge that brings results.',

  schema: [
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'MM Digital Courses',
      url: `${site.url}/en/courses/`,
      about: 'Marketing courses and trainings',
    },
  ],

  blocks: [
    {
      type: 'hero',
      label: 'Courses',
      title: 'You do not need an agency. You need *knowledge*.',
      subtitle:
        'If you do not have the budget for an agency, or if you want to understand marketing before hiring someone, these courses are for you.',
      cta: [{ label: 'See courses', href: '#courses' }],
      image: 'heroes/course-2.jpg',
      imageAlt: 'Laptop and coffee, online course and learning',
    },

    {
      type: 'text',
      label: 'For whom',
      title: 'Who are *these courses* for?',
      paragraphs: [
        'For business owners running marketing themselves and not knowing what to do. For marketing managers who know something is not working but do not know what. For freelancers who want to expand their knowledge. For students who want practical skills, not theory.',
        'Every lesson is practical, **with examples, templates and checklists** you can apply the same day.',
      ],
      align: 'left',
    },

    {
      type: 'cards',
      theme: 'light',
      label: 'Courses',
      title: 'Choose your *level*',
      cols: 3,
      cards: [
        {
          icon: '◇',
          title: 'STARTER',
          text: '**€29**, Basics of digital marketing. 5 modules, 2-3 hours. For complete beginners. You will understand how everything works without technical jargon.',
        },
        {
          icon: '◆',
          title: 'MAIN COURSE',
          text: '**€297**, Complete marketing strategy. 8 modules, 12-15 hours. For those serious about it. Step by step, from strategy to implementation.',
        },
        {
          icon: '✦',
          title: 'MASTER PROGRAM',
          text: '**€797**, Advanced strategies + group coaching. For professionals. Monthly sessions, personal feedback, access to a closed community.',
        },
      ],
    },

    {
      type: 'text',
      paragraphs: [
        'The courses are currently being finalized. Sign up to be the first to get access when they go live — **early signups get 30% off**.',
      ],
    },

    {
      type: 'ctaSection',
      title: 'Invest in knowledge, *not in guesswork*.',
      text: 'Leave your contact and we will let you know as soon as the courses launch. No spam.',
      button: { label: 'Sign me up', href: '/en/contact/' },
    },
  ],
};
