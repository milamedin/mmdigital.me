import { site } from '../site.js';

export default {
  path: '/usluge/logo-dizajn/',
  title: 'Logo Dizajn Crna Gora | Logo Za Firmu, Restoran, Butik | MM Digital',
  description:
    'Profesionalni logo dizajn u Crnoj Gori. Logo za firmu, restoran, butik, kozmetički salon, građevinsku firmu. MM Digital, logoi koji se pamte.',

  schema: [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: 'Logo dizajn',
      provider: { '@type': 'Organization', name: 'MM Digital', url: site.url },
      areaServed: { '@type': 'Country', name: 'Crna Gora' },
      name: 'Logo dizajn, MM Digital',
      description:
        'Profesionalan logo dizajn za firme, restorane, butike, kozmetičke salone i druge industrije. Brand guidelines uključene.',
      url: `${site.url}/usluge/logo-dizajn/`,
    },
  ],

  blocks: [
    {
      type: 'hero',
      label: 'Usluga · Logo dizajn',
      title: 'Logo nije slika. *Logo je obećanje*.',
      subtitle:
        'Vaš logo je prvi vizuelni signal o tome ko ste. Kreiramo logoe koji predstavljaju vašu priču. Bez šablona iz Fiverr kataloga.',
      cta: [{ label: 'Zakaži konsultaciju' }],
      image: 'heroes/sketch-1.jpg',
      imageAlt: 'Ruka crta logo na tablet uređaju',
    },

    {
      type: 'text',
      label: 'Problem',
      title: 'Problem s logom od *20€*.',
      paragraphs: [
        'Na internetu možete kupiti logo za 20€. Ili za 5€ na Fiverr-u. Dobićete nešto. Ali to "nešto" koristi još 500 drugih firmi. Isti font, isti simbol, ista priča, koja nije vaša.',
        'Logo nije slika. **Logo je obećanje.** Kada neko vidi vaš logo, u djeliću sekunde donosi odluku: "Da li ovo izgleda kao firma kojoj mogu vjerovati?"',
        'Ako vaš logo izgleda kao da je napravljen za 5 minuta, ljudi pretpostavljaju da i vaš biznis radi tako.',
      ],
      align: 'left',
    },

    {
      type: 'values',
      label: 'Pravila',
      title: 'Logo za firmu, *tri pravila*',
      items: [
        { title: 'Prepoznatljivost', text: 'Mora se razlikovati od konkurencije. Ako vaš logo izgleda kao svaki drugi u vašoj industriji, ne radi svoj posao.' },
        { title: 'Skalabilnost', text: 'Mora izgledati dobro na vizit karti (3cm) i na bilbordu (3m). Previše detalja = gubi se na malim formatima.' },
        { title: 'Trajnost', text: 'Trendovi prolaze. Vaš logo treba da izgleda relevantno i za 10 godina.' },
        { title: 'Funkcionalnost', text: 'Mora raditi u jednoj boji, na svijetloj i tamnoj pozadini, u horizontalnoj i vertikalnoj verziji.' },
      ],
      alt: true,
    },

    {
      type: 'cards',
      label: 'Industrije',
      title: 'Logo za *svaku industriju*',
      cols: 3,
      cards: [
        { icon: '◍', title: 'Logo za restoran', text: 'Komunicira tip kuhinje, atmosferu i cjenovni rang. Fine dining ne može imati isti stil kao fast food.' },
        { icon: '✦', title: 'Logo za butik', text: 'Elegancija, stil, ekskluzivnost. Vaši klijenti donose odluke na osnovu estetike.' },
        { icon: '◇', title: 'Logo za kozmetički salon', text: 'Profesionalnost, čistoća, modernost. Jer vaši klijenti vam povjeravaju svoj izgled.' },
        { icon: '◈', title: 'Logo za građevinsku firmu', text: 'Snaga, pouzdanost, stabilnost. Jer gradite stvari koje traju.' },
        { icon: '⌖', title: 'Logo za IT kompaniju', text: 'Inovacija, preciznost, budućnost. Jer radite u industriji koja se mijenja svaki dan.' },
        { icon: '⚖', title: 'Logo za advokatsku kancelariju', text: 'Autoritet, povjerenje, tradicija. Jer vaši klijenti vam povjeravaju najvažnije odluke.' },
      ],
    },

    {
      type: 'steps',
      label: 'Proces',
      title: 'Kako *kreiramo* logo',
      steps: [
        { title: 'Upitnik', text: 'Popunjavate brend upitnik koji nam pomaže da razumijemo vaš biznis i viziju.' },
        { title: 'Istraživanje', text: 'Analiziramo konkurenciju, industriju i ciljnu grupu.' },
        { title: 'Koncepti', text: 'Kreiramo 3 različita koncepta. Vi birate pravac.' },
        { title: 'Finalizacija', text: 'Razvijamo odabrani koncept i pripremamo finalne fajlove + brand guidelines.' },
      ],
      alt: true,
    },

    {
      type: 'text',
      title: 'Šta *dobijate*',
      paragraphs: [
        '**Kompletan paket** koji uključuje sve što vam treba za korištenje logoa svuda, od vizit karte do bilborda:',
      ],
      list: [
        'Logo u 3 verzije (horizontalna, vertikalna, ikona)',
        'Svi formati (PNG, SVG, PDF, EPS)',
        'Brand guidelines (boje, fontovi, pravila korištenja)',
        'Verzije za svijetlu i tamnu pozadinu',
        'Mockup-ovi za vizit karte, social media, table',
      ],
    },

    {
      type: 'ctaSection',
      title: 'Spremni za logo koji vas *predstavlja*?',
      button: { label: 'Zakaži besplatnu konsultaciju' },
    },
  ],
};
