# mmdigital.me

Statičan sajt za **MM Digital** marketing agenciju. Bez WordPress-a, bez baze, bez admin panela. Vanilla HTML/CSS/JS, gradi se Node skriptom i deploy-uje na Netlify.

---

## Šta je gdje (mapa foldera)

```
mmdigital.me/
├── build.mjs                       ← Skripta koja generiše sajt (ne diraj osim po potrebi)
├── package.json
├── netlify.toml                    ← Netlify konfiguracija
│
├── src/
│   ├── content/                    ← OVDJE MIJENJAŠ TEKSTOVE 👈
│   │   ├── site.js                 ← Telefon, email, adresa, navigacija, footer
│   │   ├── home.js                 ← Početna stranica
│   │   ├── o-nama.js
│   │   ├── usluge.js               ← Pregled svih usluga
│   │   ├── kursevi.js
│   │   ├── kontakt.js              ← Forma + kontakt info
│   │   └── usluge/
│   │       ├── digitalni-marketing.js
│   │       ├── vodjenje-mreza.js
│   │       ├── marketing-strategija.js
│   │       ├── konsultacije.js
│   │       ├── graficki-dizajn.js
│   │       ├── logo-dizajn.js
│   │       ├── izrada-sajtova.js
│   │       ├── fotografija.js
│   │       ├── video-produkcija.js
│   │       ├── seo-optimizacija.js
│   │       ├── google-oglasavanje.js
│   │       └── brendiranje.js
│   │
│   ├── styles/main.css             ← Boje, fontovi, layout (Amadeo style)
│   ├── scripts/main.js             ← Hamburger meni, dropdown, animacije
│   ├── templates/                  ← Šabloni — ne diraj osim ako ne mijenjaš strukturu
│   └── public/                     ← Slike, favicon, robots.txt — kopira se kao što jeste
│       └── images/
│           ├── logo.svg
│           ├── favicon.svg
│           └── og-default.svg
│
└── dist/                           ← Generisani sajt (ovo se uploaduje, ne piše ručno)
```

---

## Kako urediti tekst (najčešća stvar)

1. Otvori odgovarajući fajl u `src/content/` — npr. za izmjenu **"Naših usluga"** na Home stranici, otvori `src/content/home.js`.
2. Pronađi tekst koji želiš da promijeniš — sve je u običnim navodnicima.
3. Snimi.
4. Pokreni:
   ```bash
   npm run build
   ```
5. `dist/` folder je sad ažuran. Ako Netlify auto-deploy radi, samo pushuj na Git i sajt se osvježi.

### Specijalna formatiranja u tekstu

- `*tekst*` → *tekst* u **kurzivu i ljubičastoj boji** (za naglašene riječi u naslovima)
- `**tekst**` → **tekst** podebljan
- `[tekst](/neka-stranica/)` → link

Primjer:
```js
title: 'Vaš sajt ima *3 sekunde*. Ili osvoji klijenta — ili ga izgubi.',
paragraphs: [
  'Pravimo sajtove **brze, mobilne i SEO-optimizovane**.',
  'Više detalja na [stranici o sajtovima](/usluge/izrada-sajtova/).',
],
```

### Promjena kontakt podataka

Otvori `src/content/site.js` i promijeni objekat `contact`:
```js
contact: {
  email: 'info@mmdigital.me',
  phone: '+382 68 583 483',
  phoneHref: '+38268583483',
  ...
}
```
Jednom mijenjaš — primijeni se svuda (footer, kontakt stranica, schema).

---

## Razvoj (preview na lokalnom računaru)

```bash
# Prvi put — instaliraj alate (npm dolazi s Node.js)
# Treba ti Node.js 18+. Skini sa https://nodejs.org/

# Generiši sajt
npm run build

# Pokreni preview server na http://localhost:4321
npm run dev
```

Otvori `http://localhost:4321` u browseru.

---

## Deploy na Cloudflare Pages (preporučeno)

Sajt je konfigurisan za Cloudflare Pages (`_headers`, `_redirects`). Free tier, brz CDN, neograničena bandwidth.

### Opcija A — Drag & drop (najlakše, 2 minuta)

1. Pokreni `npm run build` lokalno.
2. Idi na [pages.cloudflare.com](https://pages.cloudflare.com) → **Sign up** (free).
3. Klikni **Create application** → tab **Direct Upload** → daj projektu ime npr. `mmdigital`.
4. Prevuci cijeli `dist/` folder u browser.
5. Klikni **Deploy site**. Cloudflare ti da privremeni URL (`mmdigital.pages.dev`).
6. Za custom domen: **Custom domains** → **Set up a custom domain** → unesi `mmdigital.me`.

### Opcija B — Git auto-deploy (preporučeno za stalan rad)

1. Inicijalizuj Git i pushuj na GitHub:
   ```bash
   cd /Users/milamedin/Documents/WORK/mmdigital.me
   git init
   git add .
   git commit -m "Inicijalna verzija sajta"
   gh repo create mmdigital.me --private --source=. --push
   ```
   Ako nemaš `gh` CLI, kreiraj prazan privatan repo na github.com pa:
   ```bash
   git remote add origin https://github.com/USERNAME/mmdigital.me.git
   git branch -M main
   git push -u origin main
   ```

2. U Cloudflare Pages dashboard-u:
   - **Create application** → tab **Connect to Git** → **GitHub** → autorizuj
   - Odaberi repo `mmdigital.me`
   - **Build settings:**
     - Framework preset: **None**
     - Build command: `node build.mjs`
     - Build output directory: `dist`
     - Root directory: ostavi prazno
   - **Save and Deploy**

3. Svaki put kad pushuješ commit na GitHub (`git push`), Cloudflare automatski rebuild-uje i deploy-uje.

### Custom domen mmdigital.me

Ako ti je domen kupljen kod **Cloudflare** (kao registrar):
1. **Custom domains** → **Set up a custom domain** → upiši `mmdigital.me` → **Activate**.
2. Cloudflare automatski podešava DNS (jer si i registrar i hosting kod njih).
3. SSL sertifikat se uključuje za par minuta.

Ako ti je domen kod drugog registrara (GoDaddy, Namecheap, mecom, itd.):
1. **Custom domains** → upiši `mmdigital.me` → Cloudflare ti pokazuje šta da dodaš u DNS.
2. Uloguj se kod tvog registrara, idi na DNS settings.
3. Dodaj **CNAME** zapis: `@` → `mmdigital.pages.dev` (ili kako Cloudflare kaže).
4. Ili još jednostavnije: prebaci nameservere na Cloudflare (Cloudflare ti da dva, npr. `nina.ns.cloudflare.com` i `tom.ns.cloudflare.com`) — pa onda Cloudflare upravlja svim DNS-om.
5. Sačekaj 10-30 min za propagaciju.

### Migracija s WordPress sajta na Cloudflare Pages

1. **Backup** stari WordPress sajt prije nego išta diraš (export iz cPanel-a, obavezno).
2. **Provjeri Google Search Console** — koje URL-ove imaš sad i koliko trafika dobijaju.
3. Deploy novi sajt na Cloudflare Pages (privremeni URL `mmdigital.pages.dev`) i provjeri da sve radi.
4. Ako URL strukture nisu iste kao stare, dodaj redirect-e u `src/public/_redirects`:
   ```
   /stari-url/  /novi-url/  301
   ```
   Pa rebuild i redeploy.
5. Tek onda promijeni DNS na Cloudflare Pages, pa **obriši** stari WordPress sajt na hostingu.
6. U Search Console-u submit-uj novi `https://mmdigital.me/sitemap.xml`.

---

## Deploy na Netlify (alternativa)

Sajt je takođe konfigurisan za Netlify (`netlify.toml`). Ako više voliš Netlify:

### Opcija A — Drag & drop (najlakša, bez Git-a)

1. Pokreni `npm run build` lokalno.
2. Otvori [https://app.netlify.com/drop](https://app.netlify.com/drop).
3. Prevuci `dist/` folder u browser.
4. Netlify ti daje URL (`xxx.netlify.app`).
5. U Netlify dashboard-u → **Domain settings** → dodaj `mmdigital.me`.
6. U DNS-u tvog domena (kod registrara), promijeni nameservere ili A record po Netlify uputstvu.

### Opcija B — Git auto-deploy (preporučeno)

1. Inicijalizuj Git i pushuj na GitHub:
   ```bash
   git init
   git add .
   git commit -m "Inicijalna verzija sajta"
   gh repo create mmdigital.me --private --source=. --push
   ```
   (Ako nemaš `gh` CLI, kreiraj repo ručno na github.com pa pushuj.)

2. U Netlify-u: **Add new site** → **Import existing project** → odaberi GitHub → pa svoj repo.
3. Build settings se automatski popune iz `netlify.toml`:
   - Build command: `node build.mjs`
   - Publish directory: `dist`
4. Klikni **Deploy**.
5. Dodaj custom domen `mmdigital.me` u Netlify dashboard-u.

Svaki put kad pushuješ commit na GitHub, Netlify automatski rebuild-uje i deploy-uje sajt.

### Kontakt forma → Google Sheet + email

Forma na `/kontakt/` šalje upite **direktno u tvoj Google Sheet** i šalje ti **email obavještenje**. Bez servera, besplatno, u tvom Google nalogu.

#### Setup (jednom, traje ~5 minuta)

1. Otvori [sheets.google.com](https://sheets.google.com) i kreiraj novi spreadsheet, npr. **"MM Digital — Upiti"**.
2. U njemu klikni **Extensions → Apps Script**.
3. Otvori fajl [google-apps-script.gs](google-apps-script.gs) iz ovog projekta i prekopiraj cijeli sadržaj u Apps Script editor (obriši default-ni `function myFunction() {}`).
4. Sačuvaj (`Cmd/Ctrl + S`), nazovi projekat npr. **"MM Digital Forma"**.
5. Klikni **Deploy → New deployment**.
   - Kraj "Select type" klikni zupčanik → **Web app**
   - Description: `v1`
   - Execute as: **Me**
   - Who has access: **Anyone**  ← važno
6. **Deploy** → autorizuj kad pita → kopiraj URL koji ti da (završava sa `/exec`).
7. Otvori `src/content/site.js` i paste-uj URL u red `formEndpoint: ''`:
   ```js
   formEndpoint: 'https://script.google.com/macros/s/AKfycb.../exec',
   ```
8. Pokreni `npm run build` i deploy-uj sajt.

Gotovo. Otkad to uradiš:
- Svaka popunjena forma → red u tvom Google Sheet-u (sa datumom i svim poljima)
- Email stigne na `milamedin@gmail.com` (mijenjaš u `google-apps-script.gs` ako treba)
- Reply na taj mail ide direktno klijentu (Reply-To je podešen)

**Dok ne podesiš Apps Script** — forma radi sa `mailto:` fallback-om: klik na "Pošalji" otvori klijentov email program s pre-popunjenim sadržajem. Manje udobno, ali radi odmah.

Spam zaštita: honeypot polje (skriveno polje koje samo botovi popunjavaju) automatski odbija bot upite.

---

## Migracija sa starog WordPress sajta

1. **Backup-uj stari sajt** prije nego išta diraš.
2. Provjeri **Google Search Console** — koje URL-ove imaš sad i koliko trafika dobijaju.
3. Ako URL strukture nisu iste, dodaj **301 redirect-e** u `netlify.toml`:
   ```toml
   [[redirects]]
     from = "/stari-url/"
     to = "/novi-url/"
     status = 301
   ```
4. Tek onda obriši stari WordPress sajt na hostingu.
5. Promijeni DNS da pokazuje na Netlify.
6. U Search Console-u submit-uj novi `https://mmdigital.me/sitemap.xml`.

---

## SEO — šta je već gotovo

- ✅ Meta title + description za svaku stranicu (po keyword mapping-u)
- ✅ Canonical URL na svakoj stranici
- ✅ Open Graph + Twitter Cards (za social sharing)
- ✅ JSON-LD strukturirani podaci:
  - Organization + LocalBusiness na Home
  - Service na svim service stranicama
  - FAQPage gdje ima Q&A
  - BreadcrumbList implicitno (kroz HTML breadcrumb)
- ✅ Auto-generisan `sitemap.xml` (svaki build)
- ✅ `robots.txt`
- ✅ Mobile-friendly + brz (statičan HTML)
- ✅ Semantic HTML (jedan H1 po stranici, H2 hijerarhija po keyword mapping-u)
- ✅ Preconnect + preload za Google Fonts

### Šta još treba uraditi nakon launcha:

- [ ] **Google Search Console** — verifikuj domen, submit sitemap (`https://mmdigital.me/sitemap.xml`)
- [ ] **Google Business Profile** — kreiraj/optimizuj profil (lokalni SEO)
- [ ] **Google Analytics 4** — dodaj GA4 tag (umetni snippet u `src/templates/base.js` u `<head>`)
- [ ] **Bing Webmaster Tools** — submit sitemap i tu
- [ ] **Backlink-ovi** — najvažnije za "izrada sajtova crna gora" (KD 44) i sl.

---

## Često postavljana pitanja

**Q: Mogu li dodati novu stranicu?**
Da. Napravi novi fajl u `src/content/` (ili `src/content/usluge/`), kopiraj strukturu iz neke postojeće, dodaj ga u navigaciju u `src/content/site.js` ako treba. Pokreni `npm run build`.

**Q: Mogu li promijeniti boje?**
Da, u `src/styles/main.css` na vrhu fajla je `:root` blok sa svim bojama. Promijeni hex vrijednost.

**Q: Kako dodati novi blog post?**
Trenutno blog nije implementiran (nije bio u prvoj fazi). Dodaću kad budeš spremna — to su informacione KW (npr. "šta je SEO optimizacija", "koliko košta web sajt"). Imaju nizak KD i lako rangiraju.

**Q: Šta ako sve sjebam?**
Ako koristiš Git — `git checkout -- .` vraća sve. Ako ne — drži sigurnosnu kopiju cijelog foldera prije većih izmjena.

---

## Tehnički detalji

- **Stack:** vanilla HTML/CSS/JS, Node.js samo za build
- **Bez runtime dependencies** — Netlify samo pokrene `node build.mjs` i upload-uje `dist/`
- **Bez baze** — sve je statično
- **Bez admin panela** — uređuje se direktno u JS fajlovima (ili kasnije možemo dodati git-based CMS poput Decap CMS)
- **Page speed:** ciljano > 95 (svi statični HTML, fontovi preload-ani, slike će biti optimizovane kad ih dodaš)

---

Pitanja? Pošalji poruku Claude-u u istom čatu.
