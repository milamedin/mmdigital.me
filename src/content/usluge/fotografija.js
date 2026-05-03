import { site } from '../site.js';

export default {
  path: '/usluge/fotografija/',
  title: 'Fotograf Podgorica & Budva | Foto Studio | MM Digital',
  description:
    'Profesionalna fotografija u Podgorici i Budvi. Poslovne fotografije, produkti, food, ambijent, tim. MM Digital, slike koje prodaju.',

  schema: [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: 'Profesionalna fotografija',
      provider: { '@type': 'Organization', name: 'MM Digital', url: site.url },
      areaServed: [
        { '@type': 'City', name: 'Podgorica' },
        { '@type': 'City', name: 'Budva' },
        { '@type': 'City', name: 'Petrovac' },
        { '@type': 'City', name: 'Kotor' },
        { '@type': 'City', name: 'Tivat' },
      ],
      name: 'Foto studio, MM Digital',
      description:
        'Product, food, ambijent, poslovne portrete, event i hotelska fotografija u Podgorici, Budvi i na crnogorskom primorju.',
      url: `${site.url}/usluge/fotografija/`,
    },
  ],

  blocks: [
    {
      type: 'hero',
      label: 'Usluga · Fotografija',
      title: 'Slike koje *prodaju*, ne samo koje lijepo izgledaju.',
      subtitle:
        'Poslovne fotografije, produkti, food, ambijent, tim. Profesionalne slike koje pretvaraju posjetioce u klijente.',
      cta: [{ label: 'Zakaži snimanje' }],
      image: 'heroes/tripod-2.jpg',
      imageAlt: 'Fotoaparat na tronožcu uz zalazak sunca nad morem',
    },

    {
      type: 'text',
      label: 'Problem',
      title: 'Vaše slike *koštaju vas klijente*. I ne znate to.',
      paragraphs: [
        'Znate onu sliku proizvoda koju ste snimili telefonom u lošem svjetlu? Onu s žutom nijansom i sjenom od ruke? Ta slika je na vašem sajtu. Na Instagramu. Na Google-u.',
        'Svaki put kad potencijalni klijent vidi tu sliku, donosi odluku. Ne svjesno, podsvjesno. **"Ovo ne izgleda profesionalno."** Scroll. Otišao je. Kod konkurencije koja ima bolje slike.',
        'Dobra vijest: ne trebate profesionalnog fotografa svaki dan. Trebate ga jednom, da napravi slike koje će raditi za vas mjesecima.',
      ],
      align: 'left',
    },

    {
      type: 'text',
      label: 'Podgorica',
      title: 'Foto studio *Podgorica*, profesionalna fotografija za vaš biznis',
      paragraphs: [
        'Naš foto studio u Podgorici je opremljen za sve vrste poslovne fotografije. Product shots, poslovni portreti, food fotografija, ambijent, sve na jednom mjestu.',
        'Ali ne radimo samo u studiju. **Dolazimo kod vas.** Jer vaš prostor, vaš tim, vaši proizvodi, izgledaju najbolje u svom prirodnom okruženju.',
      ],
    },

    {
      type: 'text',
      label: 'Budva i primorje',
      title: 'Fotograf *Budva*, sezonska i turistička fotografija',
      paragraphs: [
        'Budva, Kotor, Tivat, Bar, Petrovac, crnogorsko primorje je pozornica za vaš biznis. Radimo sezonska snimanja kada je svjetlo najbolje i kada su vaši prostori puni života. **Jedna sesija = materijal za cijelu sezonu.**',
      ],
      alt: true,
    },

    {
      type: 'cards',
      label: 'Šta fotografišemo',
      title: 'Naše usluge *fotografije*',
      cols: 3,
      cards: [
        { icon: '◉', title: 'Product fotografija', text: 'Vaši proizvodi u najboljem svjetlu. Za sajt, katalog, social media.' },
        { icon: '◍', title: 'Food fotografija', text: 'Jelo koje izgleda ukusno na slici donosi goste. Znamo kako.' },
        { icon: '✦', title: 'Poslovni portreti', text: 'Tim, vlasnik, menadžment. Ljudi žele da vide ko stoji iza biznisa.' },
        { icon: '◳', title: 'Ambijent i enterijer', text: 'Atmosfera vašeg prostora na slici. Za hotele, restorane, kancelarije, salone.' },
        { icon: '◈', title: 'Event fotografija', text: 'Otvaranja, konferencije, sajmovi, korporativni eventi.' },
        { icon: '#', title: 'Slike za web i social', text: 'Komplet fotografija optimizovanih za sve kanale. Jedan dan snimanja = materijal za 3-6 mjeseci.' },
      ],
    },

    {
      type: 'text',
      label: 'Zašto MM Digital',
      title: 'Fotograf pravi lijepe slike. Mi pravimo slike koje *prodaju*.',
      paragraphs: [
        'Razlika? Mi razmišljamo o tome kako će ta slika izgledati na Instagramu, na Google-u, na sajtu. Koji format za koji kanal. Koja slika će natjerati nekoga da klikne, pozove, kupi.',
        '**Jer mi nismo samo fotografi. Mi smo marketeri koji znaju da fotografišu.**',
      ],
    },

    {
      type: 'ctaSection',
      title: 'Vaš biznis zaslužuje *bolje slike*.',
      button: { label: 'Zakaži snimanje' },
    },
  ],
};
