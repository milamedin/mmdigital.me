// Privatna cjenovnik stranica — NIJE u glavnoj navigaciji, nije u sitemap-u, ima noindex.
// Direktni link za dijeljenje: https://mmdigital.me/cjenovnik/

import { site } from './site.js';

export default {
  path: '/cjenovnik/',
  title: 'Cjenovnik usluga — MM Digital',
  description:
    'Privatni cjenovnik MM Digital agencije. Sve cijene su orijentacione, finalna ponuda zavisi od obima i specifičnih zahtjeva.',
  noindex: true,

  blocks: [
    {
      type: 'hero',
      label: 'Cjenovnik',
      title: 'Cijene usluga, *na jednom mjestu*.',
      subtitle:
        'Orijentacione cijene za sve naše usluge. Finalna ponuda uvijek zavisi od obima posla, kompleksnosti i specifičnih zahtjeva. Za precizan iznos, [zakažite besplatnu konsultaciju](/kontakt/).',
      meta: 'Cijene su izražene u EUR. Dokument je interni i nije javno objavljen.',
      visualText: '€',
    },

    {
      type: 'pricing',
      label: 'Izrada sajtova',
      title: '*Web sajtovi*',
      columns: ['Tip sajta', 'Cijena', 'Šta je uključeno'],
      rows: [
        ['Landing page', 'od 500€', '1 stranica, CTA, kontakt forma, mobile, SEO osnove'],
        ['Poslovni sajt', 'od 1.200€', '5–8 stranica, SEO, responsive, CMS po potrebi'],
        ['E-commerce', 'od 2.500€', 'Online prodavnica, plaćanje, upravljanje narudžbama'],
        ['Custom projekat', 'po dogovoru', 'Sve što vam treba, definisano u discovery fazi'],
      ],
      note: 'Poslovni sajtovi standardno traju 4 sedmice. E-commerce i veći projekti 6–10 sedmica.',
    },

    {
      type: 'pricing',
      theme: 'light',
      label: 'SEO',
      title: '*SEO optimizacija*',
      columns: ['Usluga', 'Cijena', 'Šta je uključeno'],
      rows: [
        ['SEO Audit', 'od 200€', 'Jednokratna kompletna analiza sajta i konkurencije'],
        ['Mjesečni SEO', 'od 400€/mj', 'On-page + off-page + content + izvještavanje'],
        ['Lokalni SEO', 'od 250€/mj', 'GBP + lokalne ključne riječi + recenzije'],
        ['SEO + Sajt', 'od 1.500€', 'Sajt optimizovan od prvog dana'],
      ],
      note: 'Minimum 6 mjeseci angažmana za stabilne rezultate.',
    },

    {
      type: 'pricing',
      label: 'Google oglašavanje',
      title: '*Google Ads*',
      columns: ['Usluga', 'Cijena', 'Šta je uključeno'],
      rows: [
        ['Setup kampanje', 'od 250€', 'Strategija, ključne riječi, struktura, copywriting oglasa'],
        ['Mjesečno upravljanje', 'od 300€/mj', 'Optimizacija, A/B testiranje, sedmični izvještaj'],
        ['Setup + 3 mj. upravljanja', 'od 1.000€', 'Paket za pokretanje, najpogodniji ROI'],
      ],
      note: 'Budžet za oglase plaća se zasebno (direktno Google-u, minimum preporučujemo 300€/mj).',
    },

    {
      type: 'pricing',
      theme: 'light',
      label: 'Vođenje društvenih mreža',
      title: '*Social media* paketi (mjesečno)',
      columns: ['', 'Starter', 'Growth', 'Premium'],
      rows: [
        ['Cijena', 'od 350€/mj', 'od 600€/mj', 'od 950€/mj'],
        ['Platforme', '1 platforma', '2 platforme', '3+ platforme'],
        ['Postovi mjesečno', '12 (3/sed.)', '20 (5/sed.)', '30+ (svaki dan)'],
        ['Reels mjesečno', '2', '4', '8+'],
        ['Stories', '—', '8/mj', 'Svaki dan'],
        ['Community management', 'Osnovno', 'Svakodnevno', 'Proaktivno'],
        ['Fotografisanje', '—', '1× mjesečno', '2× mjesečno'],
        ['Konsultacije', '—', '30 min/mj', '2× 60 min/mj'],
      ],
      note: 'Cijene zavise od industrije i obima. Dvomjesečna obaveza, mjesec dana otkaza.',
    },

    {
      type: 'pricing',
      label: 'Marketing strategija',
      title: '*Strategija i konsultacije*',
      columns: ['Usluga', 'Cijena', 'Šta je uključeno'],
      rows: [
        ['Marketing strategija', 'od 1.200€', 'Audit, ciljna grupa, pozicioniranje, kanali, akcioni plan (20–40 strana)'],
        ['Konsultacije, jednokratno', 'od 90€/sat', '60–90 min sesija, fokus na jedan problem'],
        ['Konsultacije, mjesečni retainer', 'od 400€/mj', '2–4 sesije + email podrška'],
        ['Workshop za tim', 'od 600€/dan', 'Pola dana ili cijeli dan, hands-on'],
      ],
    },

    {
      type: 'pricing',
      theme: 'light',
      label: 'Dizajn i brendiranje',
      title: '*Dizajn, logo, brend*',
      columns: ['Usluga', 'Cijena', 'Šta je uključeno'],
      rows: [
        ['Logo dizajn', 'od 350€', '3 koncepta, finalne datoteke, brand guidelines'],
        ['Vizuelni identitet (kompletan)', 'od 800€', 'Logo + boje + fontovi + brand book + 5 aplikacija'],
        ['**Premium brend paket** ✦', 'od 1.800€', 'Brend od nule, sve iz jedne ruke: logo, custom ilustracije, ambalaža/meni, uniforme, signage + foto i video produkcija (kao Ruštulato)'],
        ['Vizit karte', 'od 80€', 'Dizajn + priprema za štampu (štampa zasebno)'],
        ['Flajer / brošura', 'od 120€', 'Jednostrana ili dvostrana, A6–A4'],
        ['Meni dizajn', 'od 200€', 'Restorani, kafići, do 4 strane'],
        ['Katalog / publikacija', 'od 350€', 'Layout + tipografija, do 16 strana'],
        ['Brendiranje izloga', 'od 800€', 'Koncept, materijali, montaža (po lokaciji)'],
        ['Brendiranje vozila', 'od 400€', 'Dizajn + štampa folije po vozilu'],
        ['Brendiranje uniformi', 'po dogovoru', 'Dizajn + nabavka materijala (zavisi od količine)'],
      ],
    },

    {
      type: 'pricing',
      label: 'Fotografija',
      title: '*Foto produkcija*',
      columns: ['Usluga', 'Cijena', 'Šta je uključeno'],
      rows: [
        ['Product fotografija', 'od 250€', 'Do 20 proizvoda, do pola dana, obrada'],
        ['Food fotografija', 'od 300€', 'Do 15 jela, restoran ili studio, obrada'],
        ['Poslovni portreti', 'od 150€/osoba', 'Studio ili lokacija, 5 obrađenih slika'],
        ['Ambijent / enterijer', 'od 350€', 'Hotel, restoran, kancelarija, do 25 slika'],
        ['Event fotografija', 'od 400€', '2–4 sata, izbor 50–100 obrađenih slika'],
        ['Cjelodnevno snimanje (paket)', 'od 700€', 'Studio + lokacija, materijal za 3–6 mjeseci'],
      ],
      note: 'Putovanje van Podgorice/Petrovca obračunava se posebno (0.30€/km).',
    },

    {
      type: 'pricing',
      theme: 'light',
      label: 'Video',
      title: '*Video produkcija*',
      columns: ['Usluga', 'Cijena', 'Šta je uključeno'],
      rows: [
        ['Promo video', 'od 600€', '30–60 sek, scenario, snimanje, montaža, muzika'],
        ['Reels / TikTok paket', 'od 400€', '1 dan snimanja = 10–15 kratkih video formata'],
        ['Behind the scenes', 'od 350€', 'Pola dana snimanja + montaža'],
        ['Drone snimanje', 'od 250€', 'Pola dana, dostava raw + selekcija obrađenih klipova'],
        ['Korporativni / event video', 'od 800€', 'Cijeli dan, više kamera, montaža'],
        ['Testimonijal video', 'od 300€/po klijentu', 'Snimanje + montaža, do 2 minuta'],
      ],
    },

    {
      type: 'pricing',
      label: 'Sve pod jednim krovom',
      title: '*Mjesečni paketi*, kompletan marketing',
      intro:
        'Za biznise koji žele jednog partnera za sve — strategiju, sadržaj, oglase i produkciju. Jedan tim, jedan poziv, jedan izvještaj.',
      columns: ['', 'Prisustvo', 'Rast', 'Partner'],
      rows: [
        ['Cijena', 'od 550€/mj', 'od 950€/mj', 'od 1.500€/mj'],
        ['Za koga', 'Biznis koji hoće urednu prisutnost', 'Biznis koji aktivno raste', 'Biznis kojem smo marketing odjeljenje'],
        ['Društvene mreže', '1 platforma, 12 objava', '2 platforme, 20 objava + Reels', '3+ platforme, dnevni sadržaj'],
        ['Oglašavanje', '—', 'Google ili Meta kampanje', 'Google + Meta + remarketing'],
        ['Foto/video', '—', '1 snimanje mjesečno', '2 snimanja mjesečno'],
        ['Dizajn materijala', 'Osnovni (objave)', '+ promo materijali', 'Neograničeno u razumnom obimu'],
        ['SEO', '—', 'Osnovni on-page', 'Kompletan mjesečni SEO'],
        ['Strategija i konsultacije', 'Kvartalni pregled', 'Mjesečna sesija', 'Stalno dostupan tim'],
        ['Izvještavanje', 'Mjesečno', 'Mjesečno + preporuke', 'Sedmični pregled + mjesečni izvještaj'],
      ],
      note: 'Budžeti za oglase plaćaju se zasebno. Tromjesečna početna obaveza, zatim mjesec dana otkaza.',
    },

    {
      type: 'text',
      label: 'Plaćanje i uslovi',
      title: 'Kako *funkcioniše plaćanje*.',
      paragraphs: [
        '**Jednokratni projekti** (sajtovi, dizajn, fotografija, video): 50% avansno prije početka, 50% po isporuci. Za projekte preko 3.000€ moguća dinamika u tri rate.',
        '**Mjesečni angažmani** (SEO, vođenje mreža, Google Ads, retainer konsultacije): plaćanje do 5. u mjesecu za tekući mjesec. Prvi mjesec se naplaćuje pri potpisu ugovora.',
        '**Otkazni rok** za mjesečne usluge je 30 dana. Bez kazni i skrivenih troškova.',
        '**Faktura** stiže u prva 3 dana mjeseca, plaćanje na žiro račun u Crnoj Gori. Za inostrane klijente moguće SWIFT plaćanje (uz manju proviziju banke).',
      ],
      align: 'left',
    },

    {
      type: 'ctaSection',
      title: 'Spremni za *konkretnu ponudu*?',
      text: 'Cjenovnik je orijentacioni. Za precizan iznos prilagođen vašem biznisu, zakažite besplatnu konsultaciju. Razgovor traje 30 minuta, bez obaveza.',
      button: { label: 'Zakaži konsultaciju' },
      meta: 'Odgovaramo u roku od 24 sata.',
    },
  ],
};
