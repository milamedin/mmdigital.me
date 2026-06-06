import { site } from '../../site.js';

export default {
  path: '/usluge/fotografija/podgorica/',
  title: 'Fotograf Podgorica | Poslovna Fotografija | MM Digital',
  description:
    'Profesionalni fotograf u Podgorici. Snimamo kod vas — product, food, poslovni portreti, ambijent. Slike koje vašem biznisu donose klijente.',

  schema: [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: 'Profesionalna fotografija',
      provider: { '@type': 'Organization', name: 'MM Digital', url: site.url },
      areaServed: { '@type': 'City', name: 'Podgorica' },
      name: 'Fotograf Podgorica — MM Digital',
      description:
        'Poslovna fotografija u Podgorici: product, food, poslovni portreti, ambijent i event fotografija. Snimamo na lokaciji vašeg biznisa.',
      url: `${site.url}/usluge/fotografija/podgorica/`,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Koliko košta fotograf u Podgorici?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Cijena zavisi od obima snimanja i broja finalnih fotografija. Za većinu poslovnih snimanja radimo po pola dana ili cijelom danu, a tačnu ponudu dobijete poslije kratkog razgovora o tome šta vam treba. Zakažite besplatnu konsultaciju i dobićete jasnu cijenu bez obaveza.',
          },
        },
        {
          '@type': 'Question',
          name: 'Dolazite li na lokaciju u Podgorici?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Da. Dolazimo kod vas — u kancelariju, restoran, prodavnicu ili salon — jer prostor, tim i proizvodi izgledaju najbolje u svom okruženju. Donosimo opremu za čistu pozadinu i kontrolisano svjetlo kada vam treba product ili portret.',
          },
        },
        {
          '@type': 'Question',
          name: 'Koliko brzo dobijam fotografije?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Obrađene fotografije isporučujemo u roku od nekoliko radnih dana od snimanja. Ako vam treba hitno za kampanju ili lansiranje, dogovorimo ubrzanu isporuku.',
          },
        },
      ],
    },
  ],

  blocks: [
    {
      type: 'hero',
      label: 'Fotografija · Podgorica',
      title: 'Fotograf *Podgorica*. Slike koje rade za vaš biznis.',
      subtitle:
        'Snimamo na lokaciji vašeg biznisa u glavnom gradu. Product, food, poslovni portreti, ambijent. Profesionalne slike za sajt, Google i društvene mreže.',
      cta: [{ label: 'Zakaži snimanje' }],
      visualText: 'Podgorica',
    },

    {
      type: 'text',
      label: 'Fotografija Podgorica',
      title: 'Profesionalna fotografija u *glavnom gradu*',
      paragraphs: [
        'Vaši proizvodi, vaš prostor i vaš tim moraju da izgledaju onako kako zaista posluju: profesionalno. Loša slika na sajtu ili Google profilu tjera klijenta prije nego što stigne da pročita ijednu riječ.',
        '**Dolazimo kod vas** — u kancelariju, restoran, prodavnicu ili salon — i snimamo sve vrste poslovne fotografije: product shots na čistoj pozadini, korporativne portrete, food fotografiju, ambijent. Donosimo opremu za kontrolisano svjetlo na vašoj lokaciji.',
        'Radimo za firme svih veličina u Podgorici — od lokalnih radnji i ugostiteljskih objekata do agencija i kompanija kojima treba ujednačen vizuelni identitet kroz sve kanale.',
      ],
      align: 'left',
    },

    {
      type: 'cards',
      theme: 'light',
      label: 'Šta snimamo u Podgorici',
      title: 'Fotografija za *svaki dio* vašeg biznisa',
      cols: 3,
      cards: [
        { icon: '◉', title: 'Product fotografija', text: 'Proizvodi na čistoj pozadini ili u ambijentu. Za webshop, katalog i oglase.' },
        { icon: '✦', title: 'Korporativni portreti', text: 'Tim i menadžment. Za sajt, LinkedIn i medije. Ujednačeno, profesionalno.' },
        { icon: '◍', title: 'Food fotografija', text: 'Za restorane, kafiće i dostavu u Podgorici. Jelo koje izgleda ukusno na slici puni stolove.' },
        { icon: '◳', title: 'Ambijent i enterijer', text: 'Vaš prostor onako kako ga klijent treba doživjeti — prije nego što uđe.' },
        { icon: '◈', title: 'Event i poslovni skupovi', text: 'Otvaranja, konferencije, sajmovi i korporativni eventi u gradu.' },
        { icon: '#', title: 'Slike za web i social', text: 'Komplet optimizovan za sajt, Google i mreže. Jedan dan snimanja = materijal za mjesece.' },
      ],
    },

    {
      type: 'text',
      label: 'Zašto MM Digital',
      title: 'Ne pravimo samo lijepe slike. Pravimo slike koje *prodaju*.',
      paragraphs: [
        'Mi smo marketinška agencija koja fotografiše. To znači da prije nego pritisnemo okidač razmišljamo gdje ta slika ide: na koji format, za koji kanal, s kojom porukom. Slika za Google oglas, slika za Instagram i slika za naslovnu sajta nisu ista slika — i mi to znamo unaprijed.',
        'Trebate i da te slike negdje žive i rade? Radimo i [izradu sajtova](/usluge/izrada-sajtova/), [vođenje društvenih mreža](/usluge/vodjenje-mreza/) i [Google oglašavanje](/usluge/google-oglasavanje/) — sve iz iste ruke.',
        'Radimo i van Podgorice: pogledajte [fotograf Budva](/usluge/fotografija/budva/), [fotograf Bar](/usluge/fotografija/bar/) ili glavnu stranicu [fotograf Crna Gora](/usluge/fotografija/).',
      ],
    },

    {
      type: 'ctaSection',
      title: 'Spremni za slike koje *donose klijente*?',
      text: 'Zakažite snimanje u Podgorici. Reci nam šta ti treba, mi predlažemo kako da izgleda.',
      button: { label: 'Zakaži snimanje' },
    },
  ],
};
