import { site } from '../site.js';

export default {
  path: '/usluge/vodjenje-mreza/',
  title: 'Vođenje Društvenih Mreža Crna Gora | Social Media | MM Digital',
  description:
    'Profesionalno vođenje društvenih mreža u Crnoj Gori. Instagram, Facebook, LinkedIn, TikTok. Svakodnevno upravljanje, content, community management. MM Digital.',

  schema: [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: 'Vođenje društvenih mreža',
      provider: { '@type': 'Organization', name: 'MM Digital', url: site.url },
      areaServed: { '@type': 'Country', name: 'Crna Gora' },
      name: 'Vođenje društvenih mreža, MM Digital',
      description:
        'Instagram, Facebook, LinkedIn, TikTok, svakodnevno vođenje, planiranje sadržaja, community management.',
      url: `${site.url}/usluge/vodjenje-mreza/`,
    },
  ],

  blocks: [
    {
      type: 'hero',
      label: 'Usluga · Vođenje mreža',
      title: 'Vaše mreže. Naša briga. *Vaši rezultati.*',
      subtitle:
        'Instagram, Facebook, LinkedIn, TikTok, svakodnevno vođenje, od planiranja sadržaja do odgovaranja na komentare. Vi se fokusirate na posao. Mi se fokusiramo na to da vas svi vide.',
      cta: [{ label: 'Zakaži konsultaciju' }],
      image: 'heroes/smartphone-2.jpg',
      imageAlt: 'Telefon sa ikonama društvenih mreža',
    },

    {
      type: 'text',
      label: 'Problem',
      title: '"Nemam vremena za *Instagram*."',
      paragraphs: [
        'Čujemo to svaki dan. I razumijemo. Vodite biznis. Imate klijente, zaposlene, račune, probleme. Instagram je posljednja stvar na listi.',
        'Pa objavljujete kad se sjetite. Jednom sedmično. Ili jednom mjesečno. Slika proizvoda, opis od tri riječi, par hashtagova. **Nula komentara. Nula poruka. Nula klijenata odatle.**',
        'Problem nije što nemate vremena. Problem je što društvene mreže zahtijevaju konzistentnost, strategiju i razumijevanje algoritma. To je posao za sebe. I mi ga radimo umjesto vas.',
      ],
      align: 'left',
    },

    {
      type: 'cards',
      label: 'Šta dobijate',
      title: 'Šta dobijate s mjesečnim *vođenjem mreža*',
      cols: 4,
      cards: [
        { icon: '✎', title: 'Content kreiranje', text: 'Planiramo, pišemo i dizajniramo sadržaj za cijeli mjesec unaprijed. Svaki post ima razlog zašto postoji, nije random slika s opisom.' },
        { icon: '◳', title: 'Content kalendar', text: 'Mjesečni plan sadržaja koji vi odobravate prije objave. Znate tačno šta ide, kada i zašto.' },
        { icon: '◇', title: 'Dizajn i vizuali', text: 'Svaki post je dizajniran da izgleda profesionalno i konzistentno s vašim brendom. Ne Canva template-i, nego custom dizajn.' },
        { icon: '✦', title: 'Copywriting', text: 'Tekstovi koji angažuju. Hook koji zaustavlja scroll, priča koja drži pažnju, CTA koji pokreće akciju.' },
        { icon: '✉', title: 'Community management', text: 'Odgovaramo na komentare, DM-ove, mentions. Svaki neodgovoreni komentar je izgubljeni klijent. Mi ne propuštamo nijedan.' },
        { icon: '#', title: 'Hashtag strategija', text: 'Ne nasumični hashtagovi, nego istraživani, relevantni, optimizovani za doseg i angažovanost.' },
        { icon: '▶', title: 'Reels i video', text: 'Kratki video formati koji algoritam favorizuje. Planiramo, snimamo ili editujemo, zavisno od paketa.' },
        { icon: '⌖', title: 'Mjesečni izvještaj', text: 'Na kraju svakog mjeseca dobijate izvještaj: šta smo uradili, šta je radilo, šta ćemo promijeniti.' },
      ],
      alt: true,
    },

    {
      type: 'pricing',
      theme: 'light',
      label: 'Paketi',
      title: 'Odaberite paket koji vam *odgovara*',
      columns: ['', 'Starter', 'Growth', 'Premium'],
      rows: [
        ['Platforme', '1 platforma', '2 platforme', '3+ platforme'],
        ['Postovi mjesečno', '12 (3/sedmično)', '20 (5/sedmično)', '30+ (svaki dan)'],
        ['Reels mjesečno', '2', '4', '8+'],
        ['Stories', '—', '8/mj', 'Svaki dan'],
        ['Community management', 'Osnovno', 'Svakodnevno', 'Proaktivno'],
        ['Content kalendar', 'Da', 'Da', 'Da'],
        ['Mjesečni izvještaj', 'Da', 'Da + analiza', 'Da + strategija'],
        ['Fotografisanje', '—', '1× mjesečno', '2× mjesečno'],
        ['Konsultacije', '—', '30 min/mj', '2× 60 min/mj'],
      ],
      note: 'Tačne cijene zavise od industrije, obima posla i specifičnih zahtjeva. [Zakažite konsultaciju](/kontakt/) za ponudu.',
    },

    {
      type: 'steps',
      label: 'Proces',
      title: 'Naš mjesečni *proces*',
      steps: [
        { title: 'Onboarding', text: 'Upoznajemo vaš biznis, brend, ton komunikacije, ciljnu grupu. Popunjavate brend upitnik. Dogovaramo pravila igre.' },
        { title: 'Planiranje', text: 'Početkom svakog mjeseca kreiramo content kalendar za cijeli mjesec. Vi odobravate. Ako nešto ne odgovara, mijenjamo.' },
        { title: 'Implementacija', text: 'Objavljujemo po planu. Odgovaramo na komentare i poruke. Pratimo šta radi i šta ne radi. Prilagođavamo u hodu.' },
        { title: 'Izvještaj', text: 'Šta smo uradili, šta je radilo, šta ćemo promijeniti sljedeći mjesec. Bez "kreativnog" tumačenja brojeva.' },
      ],
      alt: true,
    },

    {
      type: 'text',
      title: 'Zašto ne angažovati freelancera za *200€*?',
      paragraphs: [
        'Možete. I dobićete nekoga ko objavljuje slike s opisom. Možda čak i lijepe slike.',
        'Ali nećete dobiti strategiju. Nećete dobiti nekoga ko razumije algoritam i zna zašto Reel od 7 sekundi radi bolje od onog od 30. Nećete dobiti nekoga ko odgovara na komentare u roku od sat vremena. **Nećete dobiti tim.** Dobićete jednu osobu koja radi za 15 klijenata istovremeno i vašem profilu posvećuje 20 minuta dnevno.',
        'Mi posvećujemo pažnju. Jer vaš profil je vaš izlog, i zaslužuje više od 20 minuta.',
      ],
    },

    {
      type: 'ctaSection',
      title: 'Prestanite da se brinete o *Instagramu*.',
      text: 'Prepustite mreže nama. Vi se fokusirajte na ono u čemu ste najbolji.',
      button: { label: 'Zakaži besplatnu konsultaciju' },
    },
  ],
};
