import { site } from '../site.js';

export default {
  path: '/usluge/video-produkcija/',
  title: 'Video Produkcija Crna Gora | Videograf Podgorica | MM Digital',
  description:
    'Profesionalna video produkcija u Crnoj Gori. Promo videi, Reels, drone, event video. MM Digital, video koji priča priču i donosi rezultate.',

  schema: [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: 'Video produkcija',
      provider: { '@type': 'Organization', name: 'MM Digital', url: site.url },
      areaServed: { '@type': 'Country', name: 'Crna Gora' },
      name: 'Video produkcija, MM Digital',
      description:
        'Promo videi, Instagram Reels, drone snimanje, korporativni i event video.',
      url: `${site.url}/usluge/video-produkcija/`,
    },
  ],

  blocks: [
    {
      type: 'hero',
      label: 'Usluga · Video produkcija',
      title: '15 sekundi videa može donijeti više klijenata nego *100 slika*.',
      subtitle:
        'Promo videi, Reels, drone snimci, behind the scenes. Video koji ne samo pokazuje vaš biznis, nego tjera ljude da reaguju.',
      cta: [{ label: 'Zakaži snimanje' }],
      image: 'heroes/smartphone-1.jpg',
      imageAlt: 'Video kamera na tronožcu u studiju',
    },

    {
      type: 'text',
      label: 'Problem',
      title: 'Zašto vaš video *ne radi*.',
      paragraphs: [
        'Snimili ste video. Lijepa muzika, slow motion, drone kadrovi. 200 pregleda. 3 lajka. **0 poziva.**',
        'Problem nije u kvalitetu snimka. Problem je u strukturi. Video bez hook-a u prvih 2 sekunde je video koji niko ne gleda. Video bez priče je video koji niko ne pamti. Video bez CTA-a je video koji ne donosi ništa.',
        'Mi ne pravimo "lijepe videe". **Pravimo videe koji imaju posao da obave.**',
      ],
      align: 'left',
    },

    {
      type: 'cards',
      label: 'Šta snimamo',
      title: 'Naše usluge *video produkcije*',
      cols: 3,
      cards: [
        { icon: '▶', title: 'Promo videi', text: '30-60 sekundi koji kažu sve o vašem biznisu. S hook-om i CTA-om.' },
        { icon: '#', title: 'Reels / TikTok', text: 'Kratki, dinamični, optimizovani za algoritam. Jedan dan snimanja = 10-15 videa za mjesec.' },
        { icon: '◐', title: 'Behind the scenes', text: 'Proces, tim, svakodnevica. Najautentičniji content koji postoji.' },
        { icon: '◈', title: 'Drone snimanje', text: 'Perspektiva iz vazduha. Za hotele, nekretnine, evente, turizam.' },
        { icon: '◳', title: 'Korporativni video', text: 'Za prezentacije, sajmove, investitore. Profesionalno, ali ne sterilno.' },
        { icon: '✦', title: 'Testimonijal videi', text: 'Vaši zadovoljni klijenti govore o iskustvu. Najjači social proof.' },
      ],
      alt: true,
    },

    {
      type: 'values',
      label: 'Formula',
      title: 'Kako snimamo, *E-P-R formula*',
      items: [
        { title: 'E, Emocija', text: 'Prve 2 sekunde. Hook koji zaustavlja scroll. Iznenađenje, radoznalost, intriga.' },
        { title: 'P, Proces', text: 'Sredina. Nešto što gledaoc nije očekivao. Proces je hipnotičan, ljudi ne mogu prestati gledati.' },
        { title: 'R, Rezultat', text: 'Kraj. Gotov proizvod, zadovoljan klijent, konkretan ishod. I CTA.' },
      ],
    },

    {
      type: 'ctaSection',
      title: 'Vaša priča *čeka da bude ispričana*.',
      button: { label: 'Zakaži snimanje' },
    },
  ],
};
