import { site } from './site.js';

export default {
  path: '/klijenti/',
  title: 'Klijenti i Radovi, MM Digital | Dukley, Sumosan, Mogren, Hotel Huma...',
  description:
    'Radove potpisujemo imenom: Dukley Hotel & Resort, Sumosan, Mogren, Hotel Huma, HG Budvanska rivijera, Ruštulato... 20+ brendova — hoteli, restorani, saloni, agencije.',

  schema: [
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'Klijenti i radovi, MM Digital',
      url: `${site.url}/klijenti/`,
      mainEntity: { '@type': 'Organization', name: 'MM Digital', url: site.url },
    },
  ],

  blocks: [
    {
      type: 'hero',
      label: 'Klijenti i radovi',
      title: 'Radove potpisujemo *imenom*.',
      subtitle:
        'Dukley Hotel & Resort. Sumosan. Mogren. Hotel Huma. HG Budvanska rivijera. Nismo agencija koja krije za koga radi — jer je rad naš najbolji argument. Od hotelskih grupa do brendova izgrađenih od nule.',
      cta: [{ label: 'Postani sljedeći', href: '/kontakt/' }],
      image: 'heroes/handshake-1.jpg',
      imageAlt: 'Stisak ruke nakon poslovnog razgovora',
    },

    {
      type: 'cards',
      label: 'Hoteli i resorti',
      title: 'Brendovi koji pune *sobe i sezone*',
      cols: 3,
      cards: [
        { icon: '◆', title: 'Dukley Hotel & Resort', text: 'Budva · Brošura restoranske ponude i kalendar ljetnjih događaja za jedan od najekskluzivnijih resorta na Jadranu.' },
        { icon: '✦', title: 'Hotel Huma', text: 'Kotor · Bilbordi plasirani i van granica Crne Gore + social media. Brend koji se vidi u regionu.' },
        { icon: '◈', title: 'HG Budvanska rivijera', text: 'Hotelska grupa · Kampanje, bilbordi, social media i dizajn štanda za Sajam turizma u Beogradu.' },
        { icon: '◉', title: 'Hotel Slovenska Plaža', text: 'Budva · Digitalne kampanje, bilbordi i social media za jedan od najvećih hotelskih kompleksa u Budvi.' },
        { icon: '✧', title: 'Hotel Palas + Wellness & SPA', text: 'Petrovac · Kampanje i bilbordi za hotel, plus kompletan identitet SPA centra — logo sa zlatotiskom, brošura, foto produkcija.' },
        { icon: '◇', title: 'Hotel Aleksandar', text: 'Budva · Karta pića, social media i bilbord dizajn za promotivne kampanje.' },
      ],
    },

    {
      type: 'cards',
      theme: 'light',
      label: 'Restorani i barovi',
      title: 'Identiteti koji se *pamte i naručuju*',
      cols: 3,
      cards: [
        { icon: '✺', title: 'Sumosan', text: 'Budva · Social media, video animacije i najave DJ lineup-a za svjetski poznat contemporary Japanese brend.' },
        { icon: '◐', title: 'Mogren', text: 'Budva · Gradska kafana: dva menija, bilbordi, city lights, plakati, social — identitet nošen prepoznatljivim monogramom.' },
        { icon: '✱', title: 'Restoran Kole', text: 'Cetinje · Logo, meni, vinska karta i vizit karte — elegantan crno-krem identitet od prve do posljednje strane.' },
        { icon: '❋', title: 'Mademoiselle', text: 'Prčanj · Fine dining: standardni i specijalni meniji, vinska karta, podmetači, social media i promo materijali.' },
        { icon: '⬡', title: 'Lola Braza', text: 'Kotor · Sushi bar: bilbordi i social media koji privlače i lokalce i turiste.' },
        { icon: '✿', title: 'Pinus Maritimum · Pižun · Cuba · Levante · Benedict · Escape', text: 'Petrovac, Budva · Logoi, meniji, uniforme, signage, event kampanje — svaki sa identitetom koji priča svoju priču.' },
      ],
    },

    {
      type: 'cards',
      label: 'Brendovi od nule',
      title: 'Kad brend gradimo *od prve skice*',
      cols: 3,
      cards: [
        { icon: '◍', title: 'Ruštulato Gelato', text: 'Petrovac · Kompletan custom brend: logo, ilustracije, dizajn čaša, uniforme, karte ukusa, fotografija i video. Sve iz jedne ruke.' },
        { icon: '◳', title: 'Mali Trg Brunch & Pizza', text: 'Petrovac · Logo, ilustrovani meni, custom brending ilustracije, social media, foto i video produkcija.' },
        { icon: '⚜', title: 'Gradska kafana Palas Lux', text: 'Petrovac · Logo, meni, karta pića, signage, flajeri, bilbordi — ljubičasti identitet sa monogramom, do podmetača.' },
      ],
    },

    {
      type: 'text',
      theme: 'light',
      label: 'Rezultat koji volimo da citiramo',
      title: '*+60% rezervacija* za tri mjeseca.',
      paragraphs: [
        'Kozmetički salon u Podgorici. Postavili smo mjerenje, popravili landing stranicu, pokrenuli lokalne Google oglase sa budžetom od 5€ dnevno i prebacili sadržaj na format koji odgovara na prava pitanja klijentkinja.',
        'Rezultat: **60% više rezervacija za tri mjeseca.** Bez povećanja budžeta — samo sa sistemom koji radi.',
        'Detalje projekata, brojeve kampanja i interne materijale klijenata pokazujemo na sastanku. Diskreciju prema klijentima shvatamo ozbiljno — ali imena i radove ne krijemo.',
      ],
      align: 'left',
    },

    {
      type: 'text',
      label: 'Ne samo ugostiteljstvo',
      title: 'Ugostiteljstvo nas je *izbrusilo*. Ali tu ne stajemo.',
      paragraphs: [
        'Hoteli i restorani su najzahtjevnija škola marketinga: sezona ne prašta, gost odlučuje u tri sekunde, a brend se doživljava svim čulima — od bilborda do podmetača. **Ko nauči da radi za njih, zna da radi za svakoga.**',
        'Zato istim standardom radimo i za **nekretnine, health & beauty, maloprodaju, uslužne djelatnosti, event industriju, IT firme i NVO sektor.** Advokatska kancelarija i gelateria nemaju istu publiku — ali imaju istu potrebu: da ih pravi ljudi vide i zapamte.',
      ],
      alt: true,
    },

    {
      type: 'clientsGrid',
      auto: true,
      label: 'Svi klijenti',
      title: '...i još *40+ brendova*.',
      intro:
        'Svaki logo je projekat sa pričom — kampanja, identitet, sajt, ili sve odjednom.',
    },

    {
      type: 'values',
      label: 'Pristup',
      title: 'Šta dobijate kad postanete *naš klijent*.',
      items: [
        { title: 'Jedan tim, jedan poziv.', text: 'Ne morate da koordinišete tri freelancera, dva agencije i jednog rođaka. Sve, od strategije do produkcije, radimo mi. Odgovornost ne pada između stolica.' },
        { title: 'Iskreni izvještaji.', text: 'Mjesečno dobijate brojeve. Šta je radilo, šta nije, šta mijenjamo. Bez ukrasa. Ako kampanja ne donosi rezultat, prvi ćemo vam reći i predložiti šta dalje.' },
        { title: 'Pristup koji raste s vama.', text: 'Krenete s jednim sajtom, narednog mjeseca dodate Instagram, kasnije Google oglase. Ne morate od prvog dana znati sve. Mi gradimo plan koji se prilagođava brzini vašeg biznisa.' },
      ],
    },

    {
      type: 'ctaSection',
      title: 'Vaš brend na *ovoj stranici*?',
      text: 'Zakažite besplatnu konsultaciju. 30 minuta razgovora i dobijete realnu procjenu šta vam treba i koliko košta.',
      button: { label: 'Zakaži besplatnu konsultaciju' },
    },
  ],
};
