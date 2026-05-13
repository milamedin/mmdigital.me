// Landing stranica za promo "Sajt za 72h"
// Nije u glavnoj navigaciji, samostalna stranica za promo kampanje
// (Instagram, Facebook Ads, Google Ads, email signature link)

import { site } from './site.js';

export default {
  path: '/sajt-za-72h/',
  title: 'Sajt za 72h, profesionalan web sajt za tri radna dana | MM Digital',
  description:
    'Već mjesecima pričate da ćete napraviti sajt? Dajte nam 72 sata. Profesionalan, mobilni, optimizovan za Google. Od dogovora do live verzije za tri radna dana. Cijena fiksna, jasan obim.',
  ogImage: '/images/og-default.svg',

  schema: [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: 'Brza izrada sajta',
      name: 'Sajt za 72h, MM Digital',
      provider: { '@type': 'Organization', name: 'MM Digital', url: site.url },
      areaServed: { '@type': 'Country', name: 'Crna Gora' },
      description: 'Profesionalan sajt od dogovora do launch-a za tri radna dana. Fiksna cijena, jasan obim, 30 dana podrške.',
      url: `${site.url}/sajt-za-72h/`,
      offers: {
        '@type': 'Offer',
        priceCurrency: 'EUR',
        price: '799',
        availability: 'https://schema.org/LimitedAvailability',
      },
    },
  ],

  blocks: [
    {
      type: 'hero',
      label: 'Promo · Sajt za 72h',
      title: 'Već *mjesecima* pričate da ćete napraviti sajt. *Dajte nam 72 sata*.',
      subtitle:
        'Profesionalan, mobilni, brz sajt. Od dogovora do live verzije za **tri radna dana**. Bez 17 sastanaka. Bez "razmislićemo". Bez tri mjeseca čekanja na agenciju koja se ne javlja.',
      cta: [{ label: 'Rezerviši svoj termin', href: '#kontakt' }],
      meta: 'Mjesta su limitirana. Radimo maksimum 4 ovakva sajta mjesečno. Kad se popune, to je to.',
      image: 'heroes/coding-1.jpg',
      imageAlt: 'Laptop sa kodom, brza izrada sajta',
    },

    {
      type: 'text',
      label: 'Zašto i dalje nemate sajt',
      title: 'Razlog nije *vrijeme*. Niti novac. Niti motivacija.',
      paragraphs: [
        'Niste lijeni. Niste neaktivni. Niste "neko ko ne može da donese odluku". Vaš problem je drugačiji: niko vam do sada nije ponudio jasne smjernice i rokove, gdje od prvog razgovora tačno znate šta dobijate, koliko košta i kad je gotovo.',
        'Tipičan razgovor sa agencijom u Crnoj Gori izgleda ovako. Pošaljete upit. Odgovore vam za sedmicu. Sastanak. "Šta tačno trebate?" Vi ne znate. Oni vam šalju 4 različite ponude. Vi se predomišljate. Šest mjeseci kasnije i dalje niste sigurni šta ste se dogovorili sa agencijom i ko koga čeka.',
        'Ovo **nije to**. Tri dana. Jedan paket. Fiksna cijena. Live verzija u četvrtak, ako počnemo u ponedjeljak.',
      ],
      align: 'left',
    },

    {
      type: 'text',
      label: 'Tri istine',
      title: 'Tri stvari koje vam *niko ne govori* o sajtu',
      paragraphs: [
        '**Konkurencija koja ima loš sajt prolazi bolje od vas koji nemate.** Zato što barem postoji. Klijent koji kuca u Google ne pita sebe "ko najbolje radi". Pita se "ko uopšte radi". Ako vas tu nema, to pitanje ste izgubili.',
        '**Sajt koji je koštao 200€ izgleda kao da je koštao 200€.** Klijent to osjeti za pola sekunde. Brzina učitavanja, font, razmaci, slike, sve odaje koliko je ko ozbiljan. Loš sajt nije neutralan. Aktivno vam šteti.',
        '**Najveći trošak nije izrada sajta. Najveći trošak je propuštena godina.** Svaki mjesec bez sajta je mjesec u kome konkurencija dolazi do vaših klijenata prvi. Posle godinu dana, oni su brend, vi ste alternativa.',
      ],
      align: 'left',
      alt: true,
    },

    {
      type: 'cards',
      label: 'Šta dobijate',
      title: 'Šta je sve *uključeno* u cijenu',
      intro:
        'Pogledajte šta dobijate za 799€. Bez skrivenih troškova, bez "to je dodatna usluga", bez "to ćemo naplatiti poslije".',
      cols: 3,
      cards: [
        {
          icon: '◧',
          title: 'Custom dizajn za vaš brend',
          text: 'Ne template. Dizajn baš za vas: vaše boje, fontovi, ton. Vi dajete vizuelne reference, mi izvodimo. Tri varijante prvog ekrana, vi birate kuda idemo.',
        },
        {
          icon: '◰',
          title: '3–5 stranica koje prodaju',
          text: 'Početna, O nama, Usluge ili Proizvodi, Kontakt + 1 dodatna po potrebi. Svaka stranica napisana da pretvori posjetioca u klijenta.',
        },
        {
          icon: '⚡',
          title: 'Mobile-first dizajn',
          text: '70% vaših posjetilaca dolazi sa telefona. Sajt dizajniran prvo za njih, pa onda za desktop. Bez "pa stisnimo da stane na ekran".',
        },
        {
          icon: '⌖',
          title: 'SEO od prvog dana',
          text: 'Meta tagovi, schema markup, sitemap, optimizovani naslovi i ključne riječi za svaku stranicu. Google razumije šta nudite čim sajt ode live.',
        },
        {
          icon: '◳',
          title: 'Google Analytics + Search Console',
          text: 'Postavljeni, povezani, kalibrirani. Od prvog dana znate koliko ljudi vas posjećuje, odakle dolaze i koje stranice najviše gledaju.',
        },
        {
          icon: '◉',
          title: 'Hosting + domen prva godina',
          text: 'Sve uračunato za 12 mjeseci. Hosting, domen, SSL sertifikat. Bez dodatnih troškova prve godine. Od 2. godine 80€/god ako ostajete kod nas, ili prebacujete na svoj nalog.',
        },
        {
          icon: '◌',
          title: 'Prevod na druge jezike',
          text: 'Engleski (ili neki drugi jezik) je uključen u cijenu. Paralelne verzije, isti dizajn, profesionalan prevod, ne Google Translate.',
        },
        {
          icon: '◍',
          title: 'Stock fotografije',
          text: 'Ako nemate svoje slike, pronalazimo profesionalne royalty-free fotografije koje pristaju brendu. Bez kupovine licenci, bez "nemamo dobre slike".',
        },
        {
          icon: '✎',
          title: 'Lektura i korektura',
          text: 'Vaše tekstove čistimo gramatički, stilski i tonalno. Da svaka riječ na sajtu izgleda kao da je iz pera profesionalca.',
        },
        {
          icon: '◈',
          title: 'Kontakt forma sa anti-spam',
          text: 'Prava forma, ne mailto link. Anti-spam zaštita u 6 slojeva. Upiti stižu na email ili telefon u realnom vremenu.',
        },
        {
          icon: '◐',
          title: 'Favicon + OG slike',
          text: 'Ikonica koja se vidi u browser tabu i Google rezultatima. Custom slika koja se prikazuje kad neko podijeli vaš sajt na Facebook, WhatsApp, LinkedIn.',
        },
        {
          icon: '✓',
          title: '30 dana podrške',
          text: 'Mjesec dana nakon launcha, sve sitne ispravke i izmjene su uključene. Bez dodatnog naplaćivanja, bez ugovora.',
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
          text: '60-minutni discovery razgovor (online). Definišemo ciljeve, stranice, ton, vizuelni stil. Vi nam šaljete tekstove i slike koje imate. **Do kraja dana imate kompletan brief koji potvrđujete.**',
        },
        {
          title: 'Dan 2 · Dizajn + razvoj',
          text: 'Pravimo dizajn, pišemo tekstove (ukoliko ima potrebe), postavljamo strukturu, programiramo. Vi imate jednu konsultaciju da dobijete prve informacije o izgledu sajta i vidite prvi screen. **Do kraja dana sajt je 80% gotov.**',
        },
        {
          title: 'Dan 3 · Launch',
          text: 'Završne ispravke, testiranje na svim uređajima, Google Analytics + Search Console setup, sitemap, domen povezan. **Sajt je live.** Vi gledate.',
        },
      ],
    },

    {
      type: 'offer',
      theme: 'light',
      label: 'Cijena',
      title: 'Sajt za 72h, *kompletan paket*',
      items: [
        'Custom dizajn za vaš brend',
        '3–5 stranica koje prodaju',
        'Mobile-first dizajn',
        'SEO od prvog dana',
        'Google Analytics + Search Console',
        'Hosting + domen + SSL, prva godina',
        'Prevod na druge jezike',
        'Stock fotografije',
        'Lektura i korektura tekstova',
        'Kontakt forma + anti-spam zaštita',
        'Favicon + OG slike za društvene mreže',
        '30 dana podrške nakon launcha',
      ],
      price: '799€',
      priceLabel: 'Sve uključeno',
      priceNote: 'Cijena fiksna. Ne plaćate ništa unaprijed, tek kada dobijete konačan sajt.',
      addons: [
        { label: 'Dodatne stranice (preko 5, do 10 ukupno)', price: '+ 60€/stranica' },
        { label: 'Godišnje održavanje (od 2. godine, opcionalno)', price: '80€/god' },
      ],
    },

    {
      type: 'text',
      label: 'Šta nam treba od vas',
      title: 'Šta *vi šaljete nama*',
      paragraphs: [
        'Da bismo zaista završili za 72h, vi morate biti dostupni i pripremljeni. Konkretno:',
      ],
      list: [
        '**Tekstovi** ukoliko ih imate (mi lektorišemo i čistimo), ili nam dajte temu pa pišemo umjesto vas',
        '**Slike** ako ih imate (proizvodi, prostor, tim), ili odobrenje da koristimo stock fotografije koje pronalazimo mi',
        '**Logo** u vektorskom formatu (.svg, .ai, .pdf) ukoliko ga imate',
        '**Brend smjernice** ako postoje (boje, font, ton), ili sloboda da mi odlučimo',
        '**60 minuta dnevno** dostupnost za pitanja, Viber ili email',
      ],
    },

    {
      type: 'values',
      label: 'Portfolio',
      title: 'Sajtovi koje sam *radila ranije*',
      intro: 'Da vidite kako izgleda krajnji rezultat, ne samo obećanje. Klikni na karticu za live verziju sajta.',
      items: [
        {
          title: 'Taluma Rent a Car',
          text: 'Rent-a-car usluge u Crnoj Gori. Booking forma, galerija flote, lokacije. [Pogledaj sajt →](https://talumarentacar.me/)',
        },
        {
          title: 'Visit Petrovac',
          text: 'Turistički vodič za Petrovac. Smještaj, plaže, restorani, događaji. [Pogledaj sajt →](https://visitpetrovac.com/)',
        },
        {
          title: 'Escape Rent a Car',
          text: 'Rent-a-car servis, dvojezičan sajt, online rezervacije. [Pogledaj sajt →](https://escaperentacar.me/)',
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
        '**Trebate e-commerce** sa katalogom od 20+ proizvoda. To je drugačiji projekat (3 do 6 sedmica).',
        '**Nemate ideju** šta uopšte želite. Onda vam prvo treba strategija, ne sajt.',
        '**Niste dostupni 3 dana** za odgovore na pitanja. 72h zahtijeva vašu pažnju.',
        '**Tražite custom funkcionalnosti** (booking sistemi, plaćanja, kalendar integracije). Veći obim zahtjeva duži rok.',
        '**Pregovarate o svakom euru**. Cijena je fiksna, ako vam je 799€ previše, ovo nije pravi paket za sad.',
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
          text: 'Uključene su dvije runde revizije u dan 2. Vraćamo se na brief, korigujemo, idemo dalje. Ako se nakon revizije i dalje ne slažemo, razilazimo se prijateljski.',
        },
        {
          title: 'Šta ako prekoračimo rok?',
          text: 'Ako kasnim ja, popust 20% na finalnu cijenu. Ako kasnite vi (ne šaljete materijale na vrijeme), produžava se rok bez kazne, ali sajt više nije "72h".',
        },
        {
          title: 'Šta je sa SEO-om nakon 72h?',
          text: 'Sajt je tehnički optimizovan od prvog dana. Za rangiranje na specifične ključne riječi treba kontinuirani SEO rad (od 400€/mj). To je opcionalno, dolazi nakon ovog paketa.',
        },
        {
          title: 'Mogu li sam mijenjati sadržaj kasnije?',
          text: 'Ne. Sajt je custom build, nije template ni WordPress, tako da nećete moći. Za izmjene se javljate meni, možemo se dogovoriti za paket mjesečnog održavanja ili izmjene po satu.',
        },
        {
          title: 'Šta ako trebam sajt i na engleskom?',
          text: 'Engleski (ili drugi jezik) je uračunat u cijenu. Paralelne verzije, isti dizajn, profesionalan prevod, ne Google Translate. Za 3+ jezika javite se za posebnu ponudu.',
        },
        {
          title: 'Da li nudite besplatnu probu / discovery?',
          text: 'Da. 30 minuta razgovora prije nego što potpišemo bilo šta. Da vidim da li ste pravi za format, da vi vidite jesam li ja prava za vas.',
        },
      ],
    },

    {
      type: 'text',
      label: 'Kontakt',
      title: 'Pošaljite *poruku*',
      paragraphs: [
        'Popunite formu ispod. Javljamo se u najkraćem roku. Ako se slažemo da radimo, krećemo. Ako ne, nema problema, niste nam ništa dužni.',
      ],
    },

    // Anchor za hero CTA: linkuje na #kontakt
    {
      type: 'contact',
      contact: site.contact,
      endpoint: site.formEndpoint,
      preselect: 'Sajt za 72h',
      anchor: 'kontakt',
    },

    {
      type: 'ctaSection',
      title: 'Vrijeme za *izgovore* je isteklo.',
      text: 'Najveća prijetnja vašem biznisu nije konkurencija. Najveća prijetnja je da svaki dan koji prolazi bez sajta, gubite klijente koji nikad neće znati da ste postojali.',
      button: { label: 'Rezerviši slot, krenimo', href: '#kontakt' },
    },
  ],
};
