# MM Digital — Elementor Templates V3 (Amadeo Style)
## Uputstvo za import i postavljanje

---

## DIZAJN SISTEM

### Paleta boja
| Naziv | Hex | Upotreba |
|-------|-----|----------|
| Tamna pozadina | `#0A0A0A` | Glavna pozadina |
| Tamna alt | `#111111` | Alternativne sekcije |
| Kartica bg | `#161616` | Pozadina kartica |
| Kartica border | `#222222` | Okvir kartica |
| Bijela | `#FFFFFF` | Naslovi, CTA tekst |
| Muted tekst | `#999999` | Body tekst |
| Accent | `#B8A9FF` | Labele, linkovi, hover |
| Accent hover | `#D4C9FF` | Hover stanje |

### Tipografija
| Element | Font | Weight | Veličina |
|---------|------|--------|----------|
| H1 | Playfair Display | 700 | 56px (tablet: 42px, mobile: 32px) |
| H2 | Playfair Display | 700 | 42px (tablet: 32px, mobile: 26px) |
| H3 | Playfair Display | 700 | 22-24px |
| Body | Inter | 400 | 17px (mobile: 15px) |
| Label | Inter | 600 | 13px, uppercase, letter-spacing: 3px |
| Button | Inter | 600 | 15px |

### Dugmad
- **Pill shape:** border-radius 50px
- **Svijetla dugmad:** bijela pozadina, crn tekst → hover: ljubičasta pozadina
- **Accent dugmad:** ljubičasta pozadina, crn tekst → hover: bijela pozadina
- **Padding:** 18px 40px

### Kartice
- Background: `#161616`
- Border: 1px solid `#222222`
- Border-radius: 16px
- Padding: 36-40px
- Hover: border-color → `#B8A9FF`, translateY(-6px)

### Animacije
- Fade-in na scroll (fadeInUp)
- Delay: 100-400ms kaskadno
- Kartice: hover translateY(-6px) + border-color change
- Dugmad: smooth color transition 0.3s
- Slike: crno-bijele → boja na hover (filter transition)

---

## POTREBNI FONTOVI

Dodaj u `<head>` sekciju sajta (Appearance → Theme Editor → header.php):

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet">
```

---

## CUSTOM CSS

Dodaj u **Elementor → Custom CSS** ili **Appearance → Customize → Additional CSS**:

```css
/* ═══ MM DIGITAL — AMADEO STYLE V3 ═══ */

/* Global */
body {
  background-color: #0A0A0A;
  font-family: 'Inter', sans-serif;
}

/* Smooth scroll */
html {
  scroll-behavior: smooth;
}

/* Selection */
::selection {
  background: #B8A9FF;
  color: #0A0A0A;
}

/* Italic keywords in headings */
.elementor-heading-title em {
  font-family: 'Playfair Display', serif;
  font-style: italic;
  color: #B8A9FF;
}

/* Card hover */
.mm-card-hover {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1) !important;
}
.mm-card-hover:hover {
  border-color: #B8A9FF !important;
  transform: translateY(-6px) !important;
}

/* Button hover */
.mm-btn-hover .elementor-button {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
}

/* Image hover — B&W to color */
.mm-img-hover img {
  filter: grayscale(100%);
  transition: filter 0.6s cubic-bezier(0.4, 0, 0.2, 1) !important;
  border-radius: 16px;
}
.mm-img-hover:hover img {
  filter: grayscale(0%);
}

/* Fade-in animation */
.elementor-invisible {
  visibility: visible !important;
}

/* Scrollbar */
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  background: #0A0A0A;
}
::-webkit-scrollbar-thumb {
  background: #333;
  border-radius: 4px;
}
::-webkit-scrollbar-thumb:hover {
  background: #B8A9FF;
}

/* Responsive grid fix */
@media (max-width: 767px) {
  div[style*="grid-template-columns: repeat(3"] {
    grid-template-columns: 1fr !important;
  }
  div[style*="grid-template-columns: 1fr 1fr"] {
    grid-template-columns: 1fr !important;
  }
}
```

---

## KAKO IMPORTOVATI (KORAK PO KORAK)

### Korak 1: Priprema WordPress-a
1. Instaliraj **Elementor Pro** (obavezno za header/footer)
2. Instaliraj temu **Hello Elementor** (najčistija tema za Elementor)
3. Dodaj Google Fonts u header (vidi gore)
4. Dodaj Custom CSS (vidi gore)

### Korak 2: Elementor Global Settings
1. **Elementor → Settings → Style:**
   - Default Generic Fonts: Inter
   - Content Width: 1200px
   - Container Padding: 0
2. **Elementor → Settings → Advanced:**
   - CSS Print Method: Internal Embedding

### Korak 3: Import stranica
Za SVAKU stranicu:
1. WordPress → **Pages → Add New**
2. Upiši naziv stranice (npr. "Home")
3. Klikni **Edit with Elementor**
4. U Elementor editoru klikni **folder ikonu** (gore lijevo)
5. Klikni **My Templates** tab
6. Klikni **Import Templates** (ikona strelice)
7. Izaberi odgovarajući JSON fajl (npr. `01-home.json`)
8. Klikni **Insert**
9. **Page Settings** (donji lijevi ugao, zupčanik):
   - Page Layout: **Elementor Full Width**
   - Page Background: `#0A0A0A`
10. Klikni **Publish**

### Korak 4: Postavi navigaciju
1. WordPress → **Appearance → Menus**
2. Kreiraj novi meni "Glavni Meni"
3. Dodaj stranice po redoslijedu
4. Za "Usluge" koristi Custom Link kao parent, pa dodaj podstranice

### Korak 5: Header i Footer
Kreiraj header i footer kroz **Elementor → Theme Builder**:

**Header:**
- Sticky, tamna pozadina `#0A0A0A`
- Logo lijevo, navigacija desno
- CTA dugme "Razgovarajmo →" (pill shape, bijelo)
- Mobile: hamburger meni

**Footer:**
- Tamna pozadina `#0A0A0A`
- 4 kolone: O nama | Usluge | Kontakt | Social
- Copyright na dnu
- Border-top: 1px solid `#222222`

---

## IMENOVANJE SLIKA

| Slika | Naziv fajla | Dimenzije | Alt text |
|-------|-------------|-----------|----------|
| Hero Home | `mm-digital-hero-home.jpg` | 800×1000 | MM Digital marketing agencija Crna Gora |
| Hero O Nama | `mm-digital-hero-o-nama.jpg` | 800×1000 | MM Digital tim |
| Hero Digitalni Marketing | `mm-digital-hero-digitalni-marketing.jpg` | 800×1000 | Digitalni marketing strategija |
| Hero Vođenje Mreža | `mm-digital-hero-vodjenje-mreza.jpg` | 800×1000 | Vođenje društvenih mreža |
| Hero Marketing Strategija | `mm-digital-hero-marketing-strategija.jpg` | 800×1000 | Marketing strategija |
| Hero Konsultacije | `mm-digital-hero-konsultacije.jpg` | 800×1000 | Marketing konsultacije |
| Hero Grafički Dizajn | `mm-digital-hero-graficki-dizajn.jpg` | 800×1000 | Grafički dizajn |
| Hero Logo Dizajn | `mm-digital-hero-logo-dizajn.jpg` | 800×1000 | Logo dizajn |
| Hero Izrada Sajtova | `mm-digital-hero-izrada-sajtova.jpg` | 800×1000 | Izrada web sajtova |
| Hero Fotografija | `mm-digital-hero-fotografija.jpg` | 800×1000 | Profesionalna fotografija |
| Hero Video | `mm-digital-hero-video-produkcija.jpg` | 800×1000 | Video produkcija |
| Hero SEO | `mm-digital-hero-seo-optimizacija.jpg` | 800×1000 | SEO optimizacija |
| Hero Google Ads | `mm-digital-hero-google-oglasavanje.jpg` | 800×1000 | Google oglašavanje |
| Hero Brendiranje | `mm-digital-hero-brendiranje.jpg` | 800×1000 | Brendiranje izloga |
| Hero Kursevi | `mm-digital-hero-kursevi.jpg` | 800×1000 | Marketing kursevi |
| Hero Kontakt | `mm-digital-hero-kontakt.jpg` | 800×1000 | Kontakt MM Digital |

**Pravila za slike:**
- Sve slike u crno-bijelom tonu (CSS hover ih pretvara u boju)
- Visoka rezolucija (min 800px širina)
- Kompresovati na < 200KB (koristiti TinyPNG)
- WebP format za brzinu

---

## REDOSLJED POSTAVLJANJA

1. ✅ Instaliraj Elementor Pro + Hello Elementor temu
2. ✅ Dodaj Google Fonts u header
3. ✅ Dodaj Custom CSS
4. ✅ Postavi Global Settings
5. ✅ Importuj Home stranicu (01-home.json)
6. ✅ Importuj Kontakt stranicu (16-kontakt.json)
7. ✅ Importuj O Nama (02-o-nama.json)
8. ✅ Importuj Service pages po redu (03-15)
9. ✅ Kreiraj Header (Theme Builder)
10. ✅ Kreiraj Footer (Theme Builder)
11. ✅ Postavi navigaciju
12. ✅ Zamijeni placeholder slike
13. ✅ Ažuriraj kontakt podatke
14. ✅ Dodaj kontakt formu (Elementor Form widget)
15. ✅ Testiraj na mobilnom
16. ✅ Provjeri brzinu (PageSpeed Insights)
17. ✅ Objavi!

---

## PRE-LAUNCH CHECKLIST

- [ ] Svi fontovi se učitavaju (Playfair Display + Inter)
- [ ] Custom CSS je aktivan (hover efekti rade)
- [ ] Sve slike su zamijenjene (nema placeholder-a)
- [ ] Kontakt forma radi i šalje emailove
- [ ] Navigacija radi na svim stranicama
- [ ] Mobile responsive — testirano na telefonu
- [ ] Page Speed score > 80
- [ ] SSL certifikat aktivan (https://)
- [ ] Google Analytics postavljen
- [ ] Google Search Console povezan
- [ ] Sitemap generisan i submitovan
- [ ] Favicon postavljen
- [ ] Open Graph tagovi za social sharing
- [ ] 404 stranica kreirana
- [ ] Kontakt podaci tačni na svim stranicama
- [ ] Copyright godina ažurna u footeru
