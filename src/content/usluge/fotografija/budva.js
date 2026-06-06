import { site } from '../../site.js';

export default {
  path: '/usluge/fotografija/budva/',
  title: 'Fotograf Budva | Hotelska i Sezonska Fotografija | MM Digital',
  description:
    'Profesionalni fotograf u Budvi. Hotelska, ugostiteljska i sezonska fotografija — restorani, smještaj, ambijent, događaji. Jedna sesija = materijal za cijelu sezonu.',

  schema: [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: 'Profesionalna fotografija',
      provider: { '@type': 'Organization', name: 'MM Digital', url: site.url },
      areaServed: { '@type': 'City', name: 'Budva' },
      name: 'Fotograf Budva — MM Digital',
      description:
        'Hotelska, ugostiteljska i sezonska fotografija u Budvi i na primorju: smještaj, restorani, ambijent, event i produktna fotografija.',
      url: `${site.url}/usluge/fotografija/budva/`,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Kada je najbolje vrijeme za snimanje u Budvi?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Za hotele, restorane i smještaj idealno je snimati prije i tokom sezone — kada je svjetlo najbolje, a prostori uređeni i puni života. Preporučujemo da se snimanje zakaže prije početka sezone, da fotografije budu spremne za rezervacije i oglase na vrijeme.',
          },
        },
        {
          '@type': 'Question',
          name: 'Snimate li hotele i privatni smještaj u Budvi?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Da. Radimo fotografiju smještaja svih veličina — od privatnih apartmana i vila do hotela i restorana. Sobe, enterijer, eksterijer, pogled, ambijent i detalji koji prodaju rezervaciju.',
          },
        },
        {
          '@type': 'Question',
          name: 'Mogu li jednim snimanjem dobiti materijal za cijelu sezonu?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Upravo to i radimo. Jedna dobro isplanirana sesija daje komplet fotografija za sajt, Booking, Google i društvene mreže — dovoljno materijala da traje cijelu sezonu.',
          },
        },
      ],
    },
  ],

  blocks: [
    {
      type: 'hero',
      label: 'Fotografija · Budva',
      title: 'Fotograf *Budva*. Slike koje pune rezervacije.',
      subtitle:
        'Hotelska, ugostiteljska i sezonska fotografija na primorju. Smještaj, restorani, ambijent, događaji. Jedna sesija — materijal za cijelu sezonu.',
      cta: [{ label: 'Zakaži snimanje' }],
      visualText: 'Budva',
    },

    {
      type: 'text',
      label: 'Sezonska fotografija',
      title: 'Budva se *prodaje slikom*. Prije nego gost dođe.',
      paragraphs: [
        'Gost bira hotel, apartman ili restoran u Budvi prije nego što sjedne u auto — sa telefona, kroz fotografije na Bookingu, Google-u i Instagramu. Ako vaše slike ne izgledaju bolje od konkurencije na istoj ulici, rezervacija ide njima. U sezoni svaka slaba fotografija je izgubljena noć ili izgubljen sto.',
        'Radimo fotografiju smještaja i ugostiteljstva širom Budve i primorja — sobe, enterijer, eksterijer, pogled, bazen, restoran, ambijent. Snimamo kada je svjetlo najbolje i kada prostor izgleda onako kako želite da ga gost zapamti.',
        '**Jedna sesija = materijal za cijelu sezonu.** Komplet fotografija koji koristite na sajtu, Bookingu, Google profilu i mrežama — bez da jurite fotografa usred špice.',
      ],
      align: 'left',
    },

    {
      type: 'cards',
      theme: 'light',
      label: 'Šta snimamo u Budvi',
      title: 'Fotografija za *turizam i ugostiteljstvo*',
      cols: 3,
      cards: [
        { icon: '⌂', title: 'Smještaj', text: 'Hoteli, apartmani, vile. Sobe, enterijer, pogled i detalji koji prodaju rezervaciju.' },
        { icon: '◍', title: 'Restorani i kafići', text: 'Jelo, piće i ambijent. Slike zbog kojih gost bira baš vaš sto.' },
        { icon: '◳', title: 'Ambijent i eksterijer', text: 'Bazen, terasa, plaža, pogled. Atmosfera koju gost kupuje.' },
        { icon: '◈', title: 'Event fotografija', text: 'Svadbe, proslave, korporativni i sezonski događaji na primorju.' },
        { icon: '✦', title: 'Poslovni portreti i tim', text: 'Lice vašeg objekta — osoblje i vlasnik koji ulivaju povjerenje.' },
        { icon: '#', title: 'Slike za web i social', text: 'Komplet za sajt, Booking, Google i mreže. Optimizovano za svaki kanal.' },
      ],
    },

    {
      type: 'text',
      label: 'Zašto MM Digital',
      title: 'Mi ne snimamo samo lijepo. Snimamo da se *rezerviše*.',
      paragraphs: [
        'Mi smo marketinška agencija koja fotografiše. Znamo kako izgleda slika koja na Bookingu dobija klik, a koja se preskače. Razmišljamo o naslovnoj fotografiji, redoslijedu, formatu za svaki kanal — jer cilj nije lijep album, nego puna sezona.',
        'Trebate i da te slike rade? Pravimo i [sajtove](/usluge/izrada-sajtova/) i [vodimo društvene mreže](/usluge/vodjenje-mreza/) za hotele i ugostitelje — slika i kanal iz iste ruke.',
        'Radimo i u drugim gradovima: [fotograf Podgorica](/usluge/fotografija/podgorica/), [fotograf Bar](/usluge/fotografija/bar/) ili glavna stranica [fotograf Crna Gora](/usluge/fotografija/).',
      ],
    },

    {
      type: 'ctaSection',
      title: 'Snimite *prije sezone*. Rezervišite mirno.',
      text: 'Zakažite snimanje u Budvi na vrijeme i dočekajte sezonu sa slikama koje prodaju.',
      button: { label: 'Zakaži snimanje' },
    },
  ],
};
