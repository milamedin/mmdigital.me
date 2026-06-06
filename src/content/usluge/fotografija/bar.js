import { site } from '../../site.js';

export default {
  path: '/usluge/fotografija/bar/',
  title: 'Fotograf Bar | Poslovna i Produktna Fotografija | MM Digital',
  description:
    'Profesionalni fotograf u Baru. Poslovna, produktna i ugostiteljska fotografija — radnje, restorani, smještaj, tim. Manja konkurencija, vi se istaknete prvi.',

  schema: [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: 'Profesionalna fotografija',
      provider: { '@type': 'Organization', name: 'MM Digital', url: site.url },
      areaServed: { '@type': 'City', name: 'Bar' },
      name: 'Fotograf Bar — MM Digital',
      description:
        'Poslovna, produktna i ugostiteljska fotografija u Baru i okolini: radnje, restorani, smještaj, poslovni portreti i ambijent.',
      url: `${site.url}/usluge/fotografija/bar/`,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Dolazite li u Bar na snimanje?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Da. Dolazimo u Bar i okolinu — Sutomore, Stari Bar, Šušanj — na lokaciju vašeg biznisa: radnju, restoran, smještaj ili kancelariju. Donosimo opremu za čistu pozadinu i kontrolisano svjetlo kada to treba.',
          },
        },
        {
          '@type': 'Question',
          name: 'Koliko košta fotografisanje za biznis u Baru?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Cijena zavisi od obima i broja finalnih fotografija. Većinu poslovnih snimanja radimo po pola dana ili cijelom danu. Javite šta vam treba i dobićete jasnu ponudu bez obaveza.',
          },
        },
        {
          '@type': 'Question',
          name: 'Šta najčešće snimate u Baru?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Produktnu fotografiju za radnje i webshopove, ambijent i jelo za restorane i kafiće, smještaj za izdavanje, kao i poslovne portrete i fotografije tima. Sve optimizovano za sajt, Google i društvene mreže.',
          },
        },
      ],
    },
  ],

  blocks: [
    {
      type: 'hero',
      label: 'Fotografija · Bar',
      title: 'Fotograf *Bar*. Istaknite se prvi.',
      subtitle:
        'Poslovna, produktna i ugostiteljska fotografija u Baru i okolini. Radnje, restorani, smještaj, tim. Manja konkurencija znači da dobre slike ovdje vrijede još više.',
      cta: [{ label: 'Zakaži snimanje' }],
      visualText: 'Bar',
    },

    {
      type: 'text',
      label: 'Fotografija za biznis u Baru',
      title: 'U Baru dobra slika *više vrijedi* — jer je rjeđa.',
      paragraphs: [
        'Bar je grad u rastu: luka, tranzit, sve više radnji, restorana i smještaja. Ali većina lokalnih biznisa i dalje koristi slike snimljene telefonom. To je vaša prilika — sa profesionalnim fotografijama istaknete se prije nego što to urade drugi, i izgledate ozbiljnije od konkurencije na istom Google pretragu.',
        'Radimo poslovnu i produktnu fotografiju širom Bara i okoline — Sutomore, Stari Bar, Šušanj. Produkt za radnje i webshopove, ambijent i jelo za ugostiteljstvo, smještaj za izdavanje, poslovne portrete i fotografije tima.',
        'Dolazimo na lokaciju vašeg biznisa, sa opremom za čistu pozadinu i kontrolisano svjetlo kada to treba. Rezultat je komplet slika spreman za sajt, Google profil i društvene mreže.',
      ],
      align: 'left',
    },

    {
      type: 'cards',
      theme: 'light',
      label: 'Šta snimamo u Baru',
      title: 'Fotografija za *vaš biznis*',
      cols: 3,
      cards: [
        { icon: '◉', title: 'Product fotografija', text: 'Proizvodi za radnje i webshopove. Čista pozadina ili ambijent.' },
        { icon: '◍', title: 'Restorani i kafići', text: 'Jelo, piće i atmosfera. Slike zbog kojih gost bira baš vas.' },
        { icon: '⌂', title: 'Smještaj za izdavanje', text: 'Apartmani i sobe. Fotografije koje pune kalendar rezervacija.' },
        { icon: '✦', title: 'Poslovni portreti', text: 'Vlasnik i tim. Lice biznisa kojem se vjeruje.' },
        { icon: '◳', title: 'Ambijent i enterijer', text: 'Vaš prostor onako kako želite da ga klijent doživi.' },
        { icon: '#', title: 'Slike za web i social', text: 'Komplet za sajt, Google i mreže. Jedno snimanje, materijal za mjesece.' },
      ],
    },

    {
      type: 'text',
      label: 'Zašto MM Digital',
      title: 'Marketinška agencija koja *fotografiše*.',
      paragraphs: [
        'Ne pravimo samo lijepe slike — pravimo slike koje rade. Razmišljamo unaprijed gdje fotografija ide: na sajt, u Google oglas, na Instagram. Svaki kanal traži svoj format i svoju poruku, i to planiramo prije snimanja.',
        'Trebate i da te slike negdje žive? Radimo i [izradu sajtova](/usluge/izrada-sajtova/) i [vođenje društvenih mreža](/usluge/vodjenje-mreza/) — sve iz iste ruke.',
        'Radimo i u drugim gradovima: [fotograf Podgorica](/usluge/fotografija/podgorica/), [fotograf Budva](/usluge/fotografija/budva/) ili glavna stranica [fotograf Crna Gora](/usluge/fotografija/).',
      ],
    },

    {
      type: 'ctaSection',
      title: 'Budite biznis koji *najbolje izgleda* u Baru.',
      text: 'Zakažite snimanje i dobijte slike koje vas izdvajaju od konkurencije.',
      button: { label: 'Zakaži snimanje' },
    },
  ],
};
