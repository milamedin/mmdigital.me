// Blog renderer — pretvara Istok-style markdown u HTML.
// Podržano u tijelu posta:
//   ## naslov          → <h2>
//   ### podnaslov      → <h3>
//   > citat            → <blockquote>
//   **tekst**          → <strong>
//   *tekst*            → <em>  (ljubičasti accent)
//   [tekst](url)       → <a href="url">
//   prazan red         → novi paragraf

const esc = (s) =>
  String(s ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

function inlineFormat(s) {
  // Mora ići redom — link prvo, pa bold/em
  let html = esc(s);
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_, t, u) => {
    const ext = /^https?:\/\//.test(u);
    return `<a href="${u}"${ext ? ' target="_blank" rel="noopener"' : ''}>${t}</a>`;
  });
  html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/\*([^*]+)\*/g, '<em>$1</em>');
  return html;
}

export function renderArticleBody(body) {
  if (!body || typeof body !== 'string') return '';
  // Razdijeli na blokove (prazni redovi)
  const blocks = body.replace(/\r\n/g, '\n').split(/\n\s*\n/);
  return blocks
    .map((block) => {
      const trimmed = block.trim();
      if (!trimmed) return '';

      // Headings
      if (trimmed.startsWith('### ')) {
        return `<h3>${inlineFormat(trimmed.slice(4))}</h3>`;
      }
      if (trimmed.startsWith('## ')) {
        return `<h2>${inlineFormat(trimmed.slice(3))}</h2>`;
      }

      // Blockquote (multi-line podržano)
      if (trimmed.startsWith('> ')) {
        const lines = trimmed
          .split('\n')
          .map((l) => l.replace(/^>\s?/, ''))
          .join(' ');
        return `<blockquote>${inlineFormat(lines)}</blockquote>`;
      }

      // Obični paragraf — sačuvaj soft newlines kao razmake
      const text = trimmed.split('\n').map((l) => l.trim()).join(' ');
      return `<p>${inlineFormat(text)}</p>`;
    })
    .filter(Boolean)
    .join('\n');
}

// Procjena vremena čitanja (200 riječi/min — sporo zbog crnogorskog)
export function readingTime(body) {
  if (!body) return '';
  const words = body.replace(/[#>*_\[\]()]/g, '').split(/\s+/).filter(Boolean).length;
  const min = Math.max(2, Math.round(words / 200));
  return `${min} min čitanja`;
}

// Format datuma za prikaz
export function formatDate(iso) {
  if (!iso) return '';
  const d = new Date(iso);
  const months = ['januar', 'februar', 'mart', 'april', 'maj', 'jun', 'jul', 'avgust', 'septembar', 'oktobar', 'novembar', 'decembar'];
  return `${d.getDate()}. ${months[d.getMonth()]} ${d.getFullYear()}`;
}

// Render hero za blog post
export function renderArticleHero({ label, title, subtitle, image, imageAlt, date, author, readTimeText, category }) {
  return `
  <section class="hero hero--article">
    <div class="container">
      <div class="article-hero-grid">
        <div class="article-hero-content reveal">
          ${category ? `<span class="label">${esc(category)}</span>` : ''}
          <h1>${inlineFormat(title)}</h1>
          ${subtitle ? `<p class="article-lead">${inlineFormat(subtitle)}</p>` : ''}
          <div class="article-meta">
            ${author ? `<span><strong>${esc(author)}</strong></span>` : ''}
            ${date ? `<span>·</span><span>${esc(formatDate(date))}</span>` : ''}
            ${readTimeText ? `<span>·</span><span>${esc(readTimeText)}</span>` : ''}
          </div>
        </div>
        ${image
          ? (() => {
              const isJpg = /\.jpe?g$/i.test(image);
              const avif = isJpg ? image.replace(/\.jpe?g$/i, '.avif') : null;
              const jpgMobile = image.replace(/(\.jpe?g)$/i, '-600$1');
              const avifMobile = avif ? avif.replace(/(\.avif)$/i, '-600$1') : null;
              const sizes = '(max-width: 880px) 100vw, 880px';
              return `<div class="article-hero-image reveal">
              <picture>
                ${avif ? `<source type="image/avif" sizes="${sizes}" srcset="/images/${esc(avifMobile)} 600w, /images/${esc(avif)} 900w">` : ''}
                <source type="image/jpeg" sizes="${sizes}" srcset="/images/${esc(jpgMobile)} 600w, /images/${esc(image)} 900w">
                <img src="/images/${esc(image)}" alt="${esc(imageAlt || '')}" loading="eager" fetchpriority="high" decoding="async" width="900" height="600">
              </picture>
              <div class="hero-visual-overlay" aria-hidden="true"></div>
            </div>`;
            })()
          : ''}
      </div>
    </div>
  </section>`;
}

// Render kartice za blog index
export function renderArticleCard(post) {
  return `
    <a href="${esc(post.path)}" class="article-card reveal">
      <div class="article-card-image">
        ${post.hero?.image
          ? (() => {
              const img = post.hero.image;
              const isJpg = /\.jpe?g$/i.test(img);
              const avif = isJpg ? img.replace(/\.jpe?g$/i, '.avif') : null;
              return `<picture>
            ${avif ? `<source srcset="/images/${esc(avif)}" type="image/avif">` : ''}
            <img src="/images/${esc(img)}" alt="${esc(post.hero.imageAlt || post.title)}" loading="lazy" decoding="async" width="600" height="400">
          </picture>`;
            })()
          : ''}
      </div>
      <div class="article-card-body">
        ${post.category ? `<span class="article-card-cat">${esc(post.category)}</span>` : ''}
        <h3>${inlineFormat(post.cardTitle || post.hero?.title || post.title)}</h3>
        ${post.excerpt ? `<p>${inlineFormat(post.excerpt)}</p>` : ''}
        <div class="article-card-meta">
          ${post.date ? `<span>${esc(formatDate(post.date))}</span>` : ''}
          ${post.readTimeText ? `<span>·</span><span>${esc(post.readTimeText)}</span>` : ''}
        </div>
      </div>
    </a>
  `;
}

// Render related posts grid
export function renderRelated(posts) {
  if (!posts || !posts.length) return '';
  return `
    <section class="section section--alt">
      <div class="container">
        <div class="section-head reveal section-head--left">
          <span class="label">Pročitajte još</span>
          <h2>Slični tekstovi</h2>
        </div>
        <div class="cards">
          ${posts.map((p) => renderArticleCard(p)).join('')}
        </div>
      </div>
    </section>
  `;
}
