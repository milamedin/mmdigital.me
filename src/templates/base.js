// Base HTML wrapper — head, header, footer
// Sve stranice prolaze kroz ovaj template.

import { site } from '../content/site.js';

const esc = (s) =>
  String(s ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

function navHTML(currentPath) {
  const isActive = (href) =>
    href === '/' ? currentPath === '/' : currentPath.startsWith(href);
  return /* html */ `
    <ul class="nav-links" id="primary-nav">
      ${site.nav
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
      <li><a href="/kontakt/" class="btn btn--primary btn--sm nav-cta">Razgovarajmo →</a></li>
    </ul>
  `;
}

function headerHTML(currentPath) {
  return /* html */ `
  <header class="site-header">
    <div class="container">
      <nav class="nav" aria-label="Glavna navigacija">
        <a href="/" class="nav-logo" aria-label="MM Digital — početna">
          <img src="/images/logo.svg" alt="MM Digital" width="787" height="200">
        </a>
        ${navHTML(currentPath)}
        <button class="nav-toggle" type="button" aria-controls="primary-nav" aria-expanded="false" aria-label="Otvori meni">
          <span></span><span></span><span></span>
        </button>
      </nav>
    </div>
  </header>`;
}

function footerHTML() {
  const c = site.contact;
  return /* html */ `
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <a href="/" class="nav-logo" aria-label="MM Digital — početna">
            <img src="/images/logo.svg" alt="MM Digital" width="787" height="200" style="height:42px">
          </a>
          <p>${esc(site.footer.intro)}</p>
        </div>
        ${site.footer.columns
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
          <h4>Kontakt</h4>
          <ul>
            <li><a href="mailto:${esc(c.email)}">${esc(c.email)}</a></li>
            <li><a href="tel:${esc(c.phoneHref)}">${esc(c.phone)}</a></li>
            <li><a href="${esc(c.instagramUrl)}" target="_blank" rel="noopener">Instagram: ${esc(c.instagram)}</a></li>
            <li>${esc(c.address.street)}<br>${esc(c.address.postal)} ${esc(c.address.city)}<br>${esc(c.address.country)}</li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span>&copy; <span data-year>2026</span> MM Digital. Sva prava zadržana.</span>
        <span><a href="/sitemap.xml">Sitemap</a> · Made in Crna Gora</span>
      </div>
    </div>
  </footer>`;
}

/**
 * Render page with shared head/header/footer.
 * @param {object} opts
 * @param {string} opts.path        - URL path, e.g. '/', '/usluge/seo-optimizacija/'
 * @param {string} opts.title       - <title>
 * @param {string} opts.description - meta description
 * @param {string} opts.body        - rendered <body> HTML (without header/footer)
 * @param {string} [opts.canonical] - canonical URL (defaults to site.url + path)
 * @param {object[]} [opts.schema]  - JSON-LD schema objects
 * @param {string} [opts.ogImage]   - absolute or root-relative
 * @param {string} [opts.bodyClass] - extra class on <body>
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
  } = opts;

  const canonHref = canonical || `${site.url}${path}`;
  const ogImageAbs = ogImage.startsWith('http') ? ogImage : `${site.url}${ogImage}`;

  return /* html */ `<!doctype html>
<html lang="sr-Latn-ME">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<meta name="theme-color" content="#0A0A0A">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<link rel="canonical" href="${esc(canonHref)}">
<meta name="robots" content="index,follow,max-image-preview:large">
<meta name="author" content="MM Digital">

<meta property="og:type" content="website">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${esc(canonHref)}">
<meta property="og:site_name" content="MM Digital">
<meta property="og:locale" content="${esc(site.defaultLocale)}">
<meta property="og:image" content="${esc(ogImageAbs)}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(title)}">
<meta name="twitter:description" content="${esc(description)}">
<meta name="twitter:image" content="${esc(ogImageAbs)}">

<link rel="icon" href="/favicon.png" sizes="32x32" type="image/png">
<link rel="icon" href="/icons/favicon-16.png" sizes="16x16" type="image/png">
<link rel="icon" href="/icons/favicon-32.png" sizes="32x32" type="image/png">
<link rel="icon" href="/icons/favicon-96.png" sizes="96x96" type="image/png">
<link rel="icon" href="/icons/favicon-192.png" sizes="192x192" type="image/png">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
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
${headerHTML(path)}
<main id="main">${body}</main>
${footerHTML()}

<div class="modal" id="thanks-modal" hidden role="dialog" aria-labelledby="thanks-modal-title" aria-modal="true">
  <div class="modal-overlay" data-close></div>
  <div class="modal-card" role="document">
    <button class="modal-close" type="button" data-close aria-label="Zatvori">×</button>
    <div class="modal-icon" aria-hidden="true">✓</div>
    <h2 id="thanks-modal-title">Hvala! Poruka je <em>poslana</em>.</h2>
    <p>Odgovaramo u roku od 24 sata. U međuvremenu — vratite se na ono što najbolje radite.</p>
    <button class="btn btn--primary" type="button" data-close>U redu</button>
  </div>
</div>

<script src="/assets/main.js" defer></script>
</body>
</html>`;
}
