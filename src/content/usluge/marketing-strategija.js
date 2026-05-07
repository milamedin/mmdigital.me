import { site } from '../site.js';

export default {
  path: '/usluge/marketing-strategija/',
  title: 'Marketing Strategija Crna Gora | Strateško Planiranje | MM Digital',
  description:
    'Kompletna marketing strategija prilagođena vašem biznisu. Analiza, planiranje, implementacija. MM Digital, strategija koja donosi rezultate.',

  schema: [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: 'Marketing strategija',
      provider: { '@type': 'Organization', name: 'MM Digital', url: site.url },
      areaServed: { '@type': 'Country', name: 'Crna Gora' },
      name: 'Marketing strategija, MM Digital',
      description:
        'Kompletna marketing strategija prilagođena vašem biznisu, industriji i ciljevima. Audit, pozicioniranje, plan kanala, content i ROI projekcija.',
      url: `${site.url}/usluge/marketing-strategija/`,
    },
  ],

  blocks: [
    {
      type: 'hero',
      label: 'Usluga · Marketing strategija',
      title: 'Bez strategije, marketing je samo *trošenje novca s nadom*.',
      subtitle:
        'Kompletna marketing strategija prilagođena vašem biznisu, vašoj industriji i vašim ciljevima. Ne template. Ne generički plan. Vaša strategija.',
      cta: [{ label: 'Zakaži strateški razgovor' }],
      image: 'heroes/strategy-2.jpg',
      imageAlt: 'Plavi grafikon rasta, vizuelizacija marketing strategije',
    },

    {
      type: 'text',
      label: 'Problem',
      title: 'Zašto vaš marketing *ne radi*.',
      paragraphs: [
        'Objavljujete na Instagramu. Imate sajt. Možda čak i plaćate oglase. Ali rezultati su, nikakvi. Ili nepredvidivi. Jedan mjesec dobro, sljedeći katastrofa.',
        'Problem nije u taktikama. **Problem je što nemate strategiju.** Radite stvari bez plana, i onda se čudite kad ne funkcioniše.',
        'Marketing bez strategije je kao vožnja bez mape. Možete voziti brzo, ali ako ne znate kuda idete, brzina ne pomaže.',
        'Mi pravimo mapu.',
      ],
      align: 'left',
    },

    {
      type: 'cards',
      label: 'Šta dobijate',
      title: 'Šta uključuje naša *marketing strategija*',
      cols: 4,
      cards: [
        { icon: '◉', title: 'Audit trenutnog stanja', text: 'Kompletna analiza svega što radite: sajt, mreže, SEO, oglasi, email, konkurencija. Gdje ste sada, bez uljepšavanja.' },
        { icon: '◈', title: 'Analiza ciljne grupe', text: 'Ko su vaši idealni klijenti? Gdje su online? Šta ih motiviše? Šta ih odbija? Ne pretpostavke, istraživanje.' },
        { icon: '⌖', title: 'Analiza konkurencije', text: 'Šta radi vaša konkurencija? Gdje su jaki? Gdje su slabi? Gdje su prilike koje oni ne vide?' },
        { icon: '✦', title: 'Pozicioniranje', text: 'Kako se razlikujete od konkurencije? Šta je vaša jedinstvena priča? Zašto bi neko izabrao vas, a ne njih?' },
        { icon: '◐', title: 'Kanali i taktike', text: 'Koji kanali imaju smisla za vaš biznis? Instagram, LinkedIn, Google, email, blog? Ne svi, nego pravi.' },
        { icon: '✎', title: 'Content strategija', text: 'Šta objavljivati, kada, za koga i zašto. Content pillars, formati, frekvencija, ton komunikacije.' },
        { icon: '€', title: 'Budžet i ROI', text: 'Koliko uložiti, gdje i šta očekivati. Realne brojke, ne obećanja.' },
        { icon: '◳', title: 'Akcioni plan', text: 'Korak po korak, šta raditi prvog mjeseca, drugog, trećeg. S rokovima i odgovornim osobama.' },
      ],
      alt: true,
    },

    {
      type: 'values',
      theme: 'light',
      label: 'Za koga',
      title: 'Za koga je *ova usluga*?',
      items: [
        { title: 'Za biznise koji tek počinju', text: 'I žele da od prvog dana rade pravu stvar, ne da troše novac na pokušaje.' },
        { title: 'Za biznise koji rastu', text: 'I kojima trenutni pristup više ne funkcioniše. Ono što je radilo kad ste imali 10 klijenata ne radi kad imate 100.' },
        { title: 'Za biznise koji imaju tim', text: 'Ali tim nema smjer. Strategija daje okvir unutar kojeg vaš tim može raditi efikasno.' },
        { title: 'Za biznise koji mijenjaju agenciju', text: 'I žele da nova agencija (mi ili neko drugi) ima jasan plan od prvog dana.' },
      ],
    },

    {
      type: 'steps',
      label: 'Proces',
      title: 'Kako izgleda *proces*',
      steps: [
        { title: 'Discovery', text: 'Sedmica 1. Razgovaramo s vama. Razumijemo biznis, ciljeve, izazove, budžet. Popunjavate strateški upitnik.' },
        { title: 'Istraživanje', text: 'Sedmica 2. Analiziramo tržište, konkurenciju, ciljnu grupu, trenutno stanje. Kopamo duboko, ne površno.' },
        { title: 'Kreiranje', text: 'Sedmica 3. Pišemo strategiju. 20-40 stranica konkretnog plana s brojevima, rokovima i preporukama.' },
        { title: 'Prezentacija', text: 'Sedmica 4. Prezentujemo vam strategiju. Objašnjavamo svaki dio. Odgovaramo na pitanja. Prilagođavamo ako treba.' },
      ],
      alt: true,
    },

    {
      type: 'ctaSection',
      title: 'Prestanite da gadate. Počnite da *planirate*.',
      button: { label: 'Zakaži strateški razgovor' },
    },
  ],
};
