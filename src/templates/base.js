// Base HTML wrapper — head, header, footer
// Sve stranice prolaze kroz ovaj template (SR + EN).

import { site } from '../content/site.js';

const esc = (s) =>
  String(s ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

// Vraća konfiguraciju nav/footer/ui za zadati jezik.
function localeConfig(lang) {
  if (lang === 'en') {
    return {
      htmlLang: 'en',
      ogLocale: site.en.defaultLocale,
      nav: site.en.nav,
      footer: site.en.footer,
      ui: site.en.ui,
      ctaNav: site.en.ui.ctaNav,
      ctaHref: '/en/contact/',
      langSwitch: { label: 'ME', title: 'Pročitaj na crnogorskom', aria: 'Pročitaj na crnogorskom' },
      navAria: 'Main navigation',
      menuOpenAria: 'Open menu',
      menuCloseAria: 'Close',
      logoAria: 'MM Digital — home',
      copy: 'All rights reserved.',
      made: 'Made in Montenegro',
      contactCol: 'Contact',
      hoursLabel: site.en.ui.contactLabelHours,
      hoursValue: site.en.ui.contactHoursValue,
      modalCloseAria: 'Close',
      modalTitle: 'Thanks! Your message was <em>sent</em>.',
      modalText: site.en.ui.modalThanksText,
      modalOk: site.en.ui.modalOk,
    };
  }
  // Default = SR / Crnogorski
  return {
    htmlLang: 'sr-Latn-ME',
    ogLocale: site.defaultLocale,
    nav: site.nav,
    footer: site.footer,
    ui: null,
    ctaNav: 'Razgovarajmo →',
    ctaHref: '/kontakt/',
    langSwitch: { label: 'EN', title: 'Read in English', aria: 'Read in English' },
    navAria: 'Glavna navigacija',
    menuOpenAria: 'Otvori meni',
    menuCloseAria: 'Zatvori',
    logoAria: 'MM Digital — početna',
    copy: 'Sva prava zadržana.',
    made: 'Made in Crna Gora',
    contactCol: 'Kontakt',
    hoursLabel: 'Radno vrijeme',
    hoursValue: 'Pon – Pet: 09:00 – 18:00<br>Sub – Ned: po dogovoru',
    modalCloseAria: 'Zatvori',
    modalTitle: 'Hvala! Poruka je <em>poslana</em>.',
    modalText: 'Odgovaramo u roku od 24 sata. U međuvremenu — vratite se na ono što najbolje radite.',
    modalOk: 'U redu',
  };
}

// Inline italic format (samo *kurziv*) — koristimo u modalu.
const inlineEm = (s) => esc(s).replace(/\*(.+?)\*/g, '<em>$1</em>');

function navHTML(currentPath, locale, alternate) {
  const isActive = (href) =>
    href === '/' || href === '/en/'
      ? currentPath === href
      : currentPath.startsWith(href);
  return /* html */ `
    <ul class="nav-links" id="primary-nav">
      ${locale.nav
        .map((item) => {
          if (item.children && item.children.length) {
            return `
              <li class="nav-dropdown">
                <button type="button">${esc(item.label)}</button>
                <div class="nav-dropdown-menu">
                  ${item.children
                    .map(
                      (c) =>
                        `<a href="${esc(c.href)}"${
                          isActive(c.href) ? ' class="is-active"' : ''
                        }>${esc(c.label)}</a>`
                    )
                    .join('')}
                </div>
              </li>`;
          }
          return `<li><a href="${esc(item.href)}"${
            isActive(item.href) ? ' class="is-active"' : ''
          }>${esc(item.label)}</a></li>`;
        })
        .join('')}
      <li><a href="${esc(alternate || (locale.htmlLang === 'en' ? '/' : '/en/'))}" class="nav-lang" title="${esc(locale.langSwitch.title)}" aria-label="${esc(locale.langSwitch.aria)}">${esc(locale.langSwitch.label)}</a></li>
      <li><a href="${esc(locale.ctaHref)}" class="btn btn--primary btn--sm nav-cta">${esc(locale.ctaNav)}</a></li>
    </ul>
  `;
}

function headerHTML(currentPath, locale, alternate) {
  const homeHref = locale.htmlLang === 'en' ? '/en/' : '/';
  return /* html */ `
  <header class="site-header">
    <div class="container">
      <nav class="nav" aria-label="${esc(locale.navAria)}">
        <a href="${homeHref}" class="nav-logo" aria-label="${esc(locale.logoAria)}">
          <img src="/images/logo.svg" alt="MM Digital" width="787" height="200">
        </a>
        ${navHTML(currentPath, locale, alternate)}
        <button class="nav-toggle" type="button" aria-controls="primary-nav" aria-expanded="false" aria-label="${esc(locale.menuOpenAria)}">
          <span></span><span></span><span></span>
        </button>
      </nav>
    </div>
  </header>`;
}

function footerHTML(locale) {
  const c = site.contact;
  const homeHref = locale.htmlLang === 'en' ? '/en/' : '/';
  return /* html */ `
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <a href="${homeHref}" class="nav-logo" aria-label="${esc(locale.logoAria)}">
            <img src="/images/logo.svg" alt="MM Digital" width="787" height="200" style="height:42px">
          </a>
          <p>${esc(locale.footer.intro)}</p>
        </div>
        ${locale.footer.columns
          .map(
            (col) => `
          <div class="footer-col">
            <h4>${esc(col.title)}</h4>
            <ul>${col.links
              .map((l) => `<li><a href="${esc(l.href)}">${esc(l.label)}</a></li>`)
              .join('')}</ul>
          </div>`
          )
          .join('')}
        <div class="footer-col">
          <h4>${esc(locale.contactCol)}</h4>
          <ul>
            <li><a href="mailto:${esc(c.email)}">${esc(c.email)}</a></li>
            <li><a href="tel:${esc(c.phoneHref)}">${esc(c.phone)}</a></li>
            <li><a href="${esc(c.instagramUrl)}" target="_blank" rel="noopener">Instagram: ${esc(c.instagram)}</a></li>
            <li>${esc(c.address.street)}<br>${esc(c.address.postal)} ${esc(c.address.city)}<br>${esc(c.address.country)}</li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span>&copy; <span data-year>2026</span> MM Digital. ${esc(locale.copy)}</span>
        <span><a href="/sitemap.xml">Sitemap</a> · ${esc(locale.made)}</span>
      </div>
    </div>
  </footer>`;
}

/**
 * Render page with shared head/header/footer.
 * @param {object} opts
 * @param {string} opts.path        - URL path
 * @param {string} opts.title       - <title>
 * @param {string} opts.description - meta description
 * @param {string} opts.body        - rendered <body> HTML
 * @param {string} [opts.lang]      - 'sr' (default) or 'en'
 * @param {string} [opts.alternate] - alternate-language URL (za hreflang i prebacivač)
 */
export function renderPage(opts) {
  const {
    path,
    title,
    description,
    body,
    canonical,
    schema = [],
    ogImage = '/images/og-default.svg',
    bodyClass = '',
    preloadImage = null,
    preloadImageMobile = null,
    preloadSizes = null,
    noindex = false,
    lang = 'sr',
    alternate = null,
  } = opts;

  const locale = localeConfig(lang);
  const canonHref = canonical || `${site.url}${path}`;
  const ogImageAbs = ogImage.startsWith('http') ? ogImage : `${site.url}${ogImage}`;

  // hreflang tagovi za parove
  const hreflangTags = alternate
    ? [
        `<link rel="alternate" hreflang="${lang === 'en' ? 'en' : 'sr-Latn-ME'}" href="${esc(canonHref)}">`,
        `<link rel="alternate" hreflang="${lang === 'en' ? 'sr-Latn-ME' : 'en'}" href="${esc(site.url + alternate)}">`,
        `<link rel="alternate" hreflang="x-default" href="${esc(site.url + (lang === 'en' ? alternate : path))}">`,
      ].join('\n')
    : '';

  return /* html */ `<!doctype html>
<html lang="${esc(locale.htmlLang)}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<meta name="theme-color" content="#0A0A0A">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<link rel="canonical" href="${esc(canonHref)}">
${hreflangTags}
<meta name="robots" content="${noindex ? 'noindex,nofollow' : 'index,follow,max-image-preview:large'}">
<meta name="author" content="MM Digital">

<meta property="og:type" content="website">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${esc(canonHref)}">
<meta property="og:site_name" content="MM Digital">
<meta property="og:locale" content="${esc(locale.ogLocale)}">
<meta property="og:image" content="${esc(ogImageAbs)}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(title)}">
<meta name="twitter:description" content="${esc(description)}">
<meta name="twitter:image" content="${esc(ogImageAbs)}">

<link rel="icon" href="/favicon.ico" sizes="48x48">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="icon" href="/icons/favicon-16.png" sizes="16x16" type="image/png">
<link rel="icon" href="/icons/favicon-32.png" sizes="32x32" type="image/png">
<link rel="icon" href="/icons/favicon-48.png" sizes="48x48" type="image/png">
<link rel="icon" href="/icons/favicon-96.png" sizes="96x96" type="image/png">
<link rel="icon" href="/icons/favicon-192.png" sizes="192x192" type="image/png">
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="manifest" href="/site.webmanifest">

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&display=swap">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&display=swap" media="print" onload="this.media='all'">
<noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&display=swap"></noscript>
<link rel="stylesheet" href="/assets/main.css">
${preloadImage
  ? (preloadImageMobile && preloadSizes
      ? `<link rel="preload" as="image" type="image/avif" fetchpriority="high" imagesrcset="${esc(preloadImageMobile)} 600w, ${esc(preloadImage)} 900w" imagesizes="${esc(preloadSizes)}">`
      : `<link rel="preload" as="image" href="${esc(preloadImage)}" type="image/avif" fetchpriority="high">`)
  : ''}
${schema
  .map(
    (s) =>
      `<script type="application/ld+json">${JSON.stringify(s).replace(/</g, '\\u003c')}</script>`
  )
  .join('\n')}
${site.googleAnalyticsId
  ? `<!-- Google Analytics 4 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=${esc(site.googleAnalyticsId)}"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', '${esc(site.googleAnalyticsId)}');
</script>`
  : ''}
</head>
<body class="${esc(bodyClass)}">
${headerHTML(path, locale, alternate)}
<main id="main">${body}</main>
${footerHTML(locale)}

<div class="modal" id="thanks-modal" hidden role="dialog" aria-labelledby="thanks-modal-title" aria-modal="true">
  <div class="modal-overlay" data-close></div>
  <div class="modal-card" role="document">
    <button class="modal-close" type="button" data-close aria-label="${esc(locale.modalCloseAria)}">×</button>
    <div class="modal-icon" aria-hidden="true">✓</div>
    <h2 id="thanks-modal-title">${locale.modalTitle}</h2>
    <p>${esc(locale.modalText)}</p>
    <button class="btn btn--primary" type="button" data-close>${esc(locale.modalOk)}</button>
  </div>
</div>

<script src="/assets/main.js" defer></script>
</body>
</html>`;
}
