// Landing stranica za promo "Sajt za 72h"
// Nije u glavnoj navigaciji — samostalna stranica za promo kampanje
// (Instagram, Facebook Ads, Google Ads, email signature link)

import { site } from './site.js';

export default {
  path: '/sajt-za-72h/',
  title: 'Sajt za 72h — Profesionalan web sajt za tri radna dana | MM Digital',
  description:
    'Već mjesecima pričate da ćete napraviti sajt? Hajde — 72 sata. Profesionalan, mobilni, optimizovan za Google. Od dogovora do live verzije za tri radna dana. Cijena fiksna, scope jasan.',
  ogImage: '/images/og-default.svg',

  schema: [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: 'Brza izrada sajta',
      name: 'Sajt za 72h — MM Digital',
      provider: { '@type': 'Organization', name: 'MM Digital', url: site.url },
      areaServed: { '@type': 'Country', name: 'Crna Gora' },
      description: 'Profesionalan sajt od dogovora do launch-a za tri radna dana. Fiksna cijena, jasan obim, 30 dana podrške.',
      url: `${site.url}/sajt-za-72h/`,
      offers: {
        '@type': 'Offer',
        priceCurrency: 'EUR',
        price: '800',
        availability: 'https://schema.org/LimitedAvailability',
      },
    },
  ],

  blocks: [
    {
      type: 'hero',
      label: 'Promo · Sajt za 72h',
      title: 'Već *2 godine* pričate da ćete napraviti sajt. Hajde, *72 sata*.',
      subtitle:
        'Profesionalan, mobilni, brz sajt — od dogovora do live verzije za **tri radna dana**. Bez 17 sastanaka. Bez "razmislićemo". Bez tri mjeseca čekanja na agenciju koja se ne javlja.',
      cta: [{ label: 'Rezerviši svoj termin', href: '/kontakt/?usluga=sajt72h' }],
      meta: 'Slotovi limitirani — radim maksimum 2 ovakva sajta mjesečno. Kad popune se — popune se.',
      image: 'heroes/coding-1.jpg',
      imageAlt: 'Laptop sa kodom, brza izrada sajta',
    },

    {
      type: 'text',
      label: 'Zašto i dalje nemate sajt',
      title: 'Razlog nije *vrijeme*. Niti novac. Niti motivacija.',
      paragraphs: [
        'Niste lijeni. Niste neaktivni. Niste "neko ko ne može da donese odluku". Vaš problem je drugačiji: **niko vam nije ponudio iskustvo gdje od prvog razgovora tačno znate šta dobijate, koliko košta, i kad je gotovo.**',
        'Tipičan razgovor sa agencijom u Crnoj Gori izgleda ovako. Pošaljete upit. Odgovore vam za sedmicu. Sastanak. "Šta tačno trebate?" Vi ne znate. Oni vam šalju 4 različite ponude. Vi se predomišljate. Šest mjeseci kasnije i dalje govorite konkurentima "razmišljamo".',
        'Ovo **nije to**. Tri dana. Jedan paket. Fiksna cijena. Live verzija u ponedjeljak ako počnete u srijedu.',
        'Ako ste se ikad uhvatili kako govorite "samo da nađem vremena za sajt" — vrijeme niste imali zato što vam niko nije dao mogućnost da to bude pitanje od 30 minuta razgovora. Sad jeste.',
      ],
      align: 'left',
    },

    {
      type: 'cards',
      label: 'Šta dobijate',
      title: 'Šta je *uključeno* u "Sajt za 72h"',
      intro:
        'Sve što vam stvarno treba da pokrenete profesionalno online prisustvo. Bez dodataka koje vam niko nije objasnio.',
      cols: 3,
      cards: [
        {
          icon: '◧',
          title: 'Custom dizajn',
          text: 'Ne template. Pravim dizajn za vaš brend, vaše boje, vaš ton. Tri varijante prvog ekrana — birate kuda idemo.',
        },
        {
          icon: '◰',
          title: '5–7 stranica',
          text: 'Početna, O nama, Usluge/Proizvodi, Kontakt + 1–3 dodatne po potrebi. Sve napisano da prodaje, ne da "popunjava prostor".',
        },
        {
          icon: '⌖',
          title: 'SEO od prvog dana',
          text: 'Meta tagovi, schema, sitemap, brzina iznad 80 na PageSpeed. Google vas može pronaći od trenutka kad sajt ode live.',
        },
        {
          icon: '◈',
          title: 'Kontakt forma',
          text: 'Ne mailto link. Prava forma sa anti-spam zaštitom, upiti vam stižu na email u realnom vremenu.',
        },
        {
          icon: '⚡',
          title: 'Mobile-first',
          text: '70% vaših posjetilaca dolazi sa telefona. Sajt je dizajniran prvo za njih, pa onda za desktop. Ne obrnuto.',
        },
        {
          icon: '✓',
          title: '30 dana podrške',
          text: 'Promjene teksta, ispravke, sitne dorade — uključeno mjesec dana nakon launcha. Bez dodatnog naplaćivanja.',
        },
      ],
      alt: true,
    },

    {
      type: 'steps',
      label: 'Proces · Tri dana',
      title: 'Kako *funkcioniše*',
      steps: [
        {
          title: 'Dan 1 · Brif',
          text: '60-minutni discovery razgovor (online). Definišemo ciljeve, stranice, ton, vizuelni stil. Vi mi šaljete tekstove i slike koje imate. **Do kraja dana — imate kompletan brief koji potvrđujete.**',
        },
        {
          title: 'Dan 2 · Dizajn + razvoj',
          text: 'Pravim dizajn, pišem fale tekstove, postavljam strukturu, programiram. Vi imate jedan touchpoint oko podneva — 15 min poziv da vidite prvi screen. **Do kraja dana — sajt je 80% gotov.**',
        },
        {
          title: 'Dan 3 · Launch',
          text: 'Završne ispravke, testiranje na svim uređajima, Google Analytics + Search Console setup, sitemap, domain povezan. **Sajt je live do 18h.** Vi gledate.',
        },
      ],
    },

    {
      type: 'pricing',
      theme: 'light',
      label: 'Cijena',
      title: 'Koliko *košta*',
      columns: ['', 'Detalji'],
      rows: [
        ['Sajt za 72h (5–7 stranica)', '800€'],
        ['+ Dodatne stranice (do 10 ukupno)', '+ 60€/stranica'],
        ['+ Logo dizajn (ako nemate)', '+ 350€'],
        ['+ Custom foto-sesija (pola dana)', '+ 250€'],
        ['+ Tekstovi (ako nemate)', '+ 150€'],
        ['Godišnji hosting + domen + SSL', '60€/god (kod hosting provajdera, ne ja)'],
      ],
      note: 'Cijena je fiksna, ne mijenja se. Avans 400€, ostatak po launchu. Ne plaćate ništa unaprijed dok ne potvrdimo da krećemo.',
    },

    {
      type: 'text',
      label: 'Šta vam treba od vas',
      title: 'Šta meni *vi šaljete*',
      paragraphs: [
        'Da bismo zaista završili za 72h, vi morate biti dostupni i pripremljeni. Konkretno:',
      ],
      list: [
        '**Tekstove** (ili priznanje "nemam tekstove" pa ih ja pišem) — po stranici 200–400 riječi',
        '**Slike** (foto-portfolio, proizvodi, prostor, tim) — ili pristup ako koristimo stock',
        '**Logo** u vektoru (.svg, .ai, .pdf) — ili rješenje "nemam, treba mi"',
        '**Brend smjernice** ako postoje (boje, font, ton) — ili sloboda da ja odlučim',
        '**60 minuta dnevno** dostupnost za pitanja — Viber, email, šta vam je lakše',
        '**Domen** kupljen ili spremnost da ga kupimo (oko 10€)',
      ],
    },

    {
      type: 'values',
      label: 'Portfolio',
      title: 'Sajtovi koje sam *radila ranije*',
      intro: 'Da vidite kako izgleda krajnji rezultat, ne samo obećanje. Klikni na karticu za live verziju sajta.',
      items: [
        // PLACEHOLDER — Mila, dodaj svoje sajtove ovdje:
        // Svaki item: { title: 'Ime klijenta', text: 'Opis — industrija, šta smo radili, [pogledaj sajt →](https://...)' }
        {
          title: 'Klijent 1',
          text: 'Industrija / vrsta posla. Šta smo radili. [Pogledaj sajt →](https://link-do-sajta)',
        },
        {
          title: 'Klijent 2',
          text: 'Industrija / vrsta posla. Šta smo radili. [Pogledaj sajt →](https://link-do-sajta)',
        },
        {
          title: 'Klijent 3',
          text: 'Industrija / vrsta posla. Šta smo radili. [Pogledaj sajt →](https://link-do-sajta)',
        },
      ],
      alt: true,
    },

    {
      type: 'text',
      label: 'Za koga',
      title: 'Za koga je *ovo*',
      paragraphs: [
        'Sajt za 72h **nije** za svakoga. Realno je za:',
      ],
      list: [
        '**Vlasnike biznisa** koji znaju šta rade, ali nemaju online prisustvo, ili imaju loše',
        '**Freelancere i konsultante** koji do sada koriste samo Instagram',
        '**Male agencije i kancelarije** koje žele profesionalan sajt brzo, bez tri mjeseca prepiske',
        '**Brendove koji se rebrand-uju** i moraju imati novi sajt do određenog datuma',
        '**Restoran, salon, butik** koji se sprema za sezonu i nije stigao do sad',
      ],
    },

    {
      type: 'text',
      label: 'Za koga NIJE',
      title: '*Ne* uzimajte ovaj paket ako...',
      paragraphs: [
        'Iskreno, neke situacije ne odgovaraju formatu 72h. Ne uzimajte ako:',
      ],
      list: [
        '**Trebate e-commerce** sa katalogom od 100+ proizvoda. To je drugačiji projekat (3–6 sedmica).',
        '**Nemate ideju** šta uopšte želite — onda vam prvo treba strategija, ne sajt.',
        '**Niste dostupni 3 dana** za odgovore na pitanja. 72h zahtjeva vašu pažnju.',
        '**Tražite custom funkcionalnosti** (booking sistemi, plaćanja, kalendar integracije). Pravi obim, pravi rok.',
        '**Pregovarate o svakom euru** — cijena je fiksna, ako vam je 800€ previše, ovo nije pravi paket za sad.',
      ],
      alt: true,
    },

    {
      type: 'values',
      label: 'Česta pitanja',
      title: '*Pitanja* koja ljudi postavljaju',
      items: [
        {
          title: 'Šta ako mi se prvi dizajn ne svidi?',
          text: 'Uključena je jedna runa revizija u dan 2. Vraćamo se na brief, korigujemo, idemo dalje. Ako se nakon revizije i dalje ne slažemo — refundiram avans i razilazimo se prijateljski.',
        },
        {
          title: 'Šta ako prekoračimo rok?',
          text: 'Ako kasnim ja — popust 10% na finalnu cijenu. Ako kasnite vi (ne šaljete materijale na vrijeme) — produžava se rok bez kazne, ali sajt više nije "72h".',
        },
        {
          title: 'Šta je sa SEO-om nakon 72h?',
          text: 'Sajt je tehnički optimizovan od prvog dana. Za rangiranje na specifične ključne riječi treba kontinuirani SEO rad (od 400€/mj). To je opcionalno, dolazi nakon ovog paketa.',
        },
        {
          title: 'Mogu li sam mijenjati sadržaj kasnije?',
          text: 'Da — sajt ima CMS po potrebi (WordPress ili statički sa edit pristupom). Pokazujem vam kako se mijenja tekst, slika, cijene. Bez programera za sitne izmjene.',
        },
        {
          title: 'Šta ako trebaš sajt na engleskom takođe?',
          text: 'Dodaj 200€ na cijenu — radim oba jezika paralelno, isti dizajn, prevedeni tekstovi.',
        },
        {
          title: 'Da li nudite besplatnu probu / discovery?',
          text: 'Da. 30 minuta razgovora prije nego što potpišemo bilo šta. Da vidim da li ste pravi za format, da vi vidite jesam li ja prava za vas.',
        },
      ],
    },

    {
      type: 'ctaSection',
      title: 'Vrijeme za *izgovore je isteklo*.',
      text: 'Pošaljite poruku. Javim se za 24h. Ako se slažemo da radimo — krećemo. Ako ne — nema problema, niste mi ništa dužni.',
      button: { label: 'Rezerviši slot — krenimo', href: '/kontakt/?usluga=sajt72h' },
      meta: 'Najveća prijetnja vašem biznisu nije konkurencija. Najveća prijetnja je da svaki dan koji prolazi bez sajta — gubite klijente koji nikad neće znati da ste postojali.',
    },
  ],
};
