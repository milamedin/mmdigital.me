// Block renderers — svaki blok je dio stranice (hero, kartice, koraci…)
// Tipovi: hero, text, cards, values, steps, pricing, contact, ctaSection, breadcrumb

const esc = (s) =>
  String(s ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

// Inline format: *kurziv* → <em>, **bold** → <strong>
// Koristi se u naslovima i kratkim tekstovima.
const inline = (s) =>
  esc(s)
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>');

// Paragraph format — escapes, prepoznaje **bold** i [tekst](url).
const paragraph = (s) =>
  esc(s)
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');

// ─── Breadcrumb ───
export const breadcrumb = ({ items }) => {
  if (!items || !items.length) return '';
  return `
  <nav class="breadcrumb" aria-label="Putanja">
    <div class="container">
      ${items
        .map((it, i) => {
          const sep = i > 0 ? '<span class="breadcrumb-sep">/</span>' : '';
          return it.href
            ? `${sep}<a href="${esc(it.href)}">${esc(it.label)}</a>`
            : `${sep}<span>${esc(it.label)}</span>`;
        })
        .join('')}
    </div>
  </nav>`;
};

// ─── Hero ───
// data: { label, title, subtitle, cta, meta, image?, imageAlt?, visualText? }
//   image — putanja do slike (npr. 'heroes/camera-2.jpg'). Ako nije zadato, koristi gradient + visualText.
export const hero = ({ label, title, subtitle, cta, meta, image, imageAlt, visualText }) => `
  <section class="hero">
    <div class="container">
      <div class="hero-grid">
        <div class="hero-content reveal">
          ${label ? `<span class="label">${inline(label)}</span>` : ''}
          <h1>${inline(title)}</h1>
          ${subtitle ? `<p>${inline(subtitle)}</p>` : ''}
          ${cta
            ? `<div class="hero-cta-row">
                ${(Array.isArray(cta) ? cta : [cta])
                  .map(
                    (c, i) =>
                      `<a href="${esc(c.href || '/kontakt/')}" class="btn ${
                        i === 0 ? 'btn--primary' : 'btn--ghost'
                      } btn-arrow">${esc(c.label)}</a>`
                  )
                  .join('')}
              </div>`
            : ''}
          ${meta ? `<p class="hero-meta">${inline(meta)}</p>` : ''}
        </div>
        <div class="hero-visual ${image ? 'hero-visual--image' : ''} reveal" ${imageAlt ? `role="img" aria-label="${esc(imageAlt)}"` : 'aria-hidden="true"'}>
          ${image
            ? (() => {
                const isJpg = /\.jpe?g$/i.test(image);
                const avif = isJpg ? image.replace(/\.jpe?g$/i, '.avif') : null;
                return `<picture>
              ${avif ? `<source srcset="/images/${esc(avif)}" type="image/avif">` : ''}
              <img src="/images/${esc(image)}" alt="${esc(imageAlt || '')}" loading="eager" fetchpriority="high" decoding="async" width="900" height="1100">
            </picture>
            <div class="hero-visual-overlay" aria-hidden="true"></div>`;
              })()
            : `<div class="hero-visual-mark" aria-hidden="true">${esc(visualText || 'mm.')}</div>`}
        </div>
      </div>
    </div>
  </section>
`;

// ─── Tekstualna sekcija ───
// data: { label?, title?, paragraphs: [str], list?: [str], alt?: bool }
export const text = ({ label, title, paragraphs = [], list, alt = false, theme = 'dark', align = 'center' }) => `
  <section class="section ${theme === 'light' ? 'section--light' : alt ? 'section--alt' : ''}">
    <div class="container">
      <div class="prose ${align === 'left' ? 'prose--left' : ''} reveal">
        ${label ? `<span class="label">${inline(label)}</span>` : ''}
        ${title ? `<h2>${inline(title)}</h2>` : ''}
        ${paragraphs.map((p) => `<p>${paragraph(p)}</p>`).join('')}
        ${list && list.length ? `<ul>${list.map((li) => `<li>${paragraph(li)}</li>`).join('')}</ul>` : ''}
      </div>
    </div>
  </section>
`;

// ─── Cards grid ───
// data: { label?, title?, intro?, cards: [{title, text, href?, icon?}], cols?: 2|3|4, alt? }
export const cards = ({ label, title, intro, cards: items = [], cols = 3, alt = false, theme = 'dark' }) => `
  <section class="section ${theme === 'light' ? 'section--light' : alt ? 'section--alt' : ''}">
    <div class="container">
      ${title || intro
        ? `<div class="section-head reveal">
            ${label ? `<span class="label">${inline(label)}</span>` : ''}
            ${title ? `<h2>${inline(title)}</h2>` : ''}
            ${intro ? `<p>${paragraph(intro)}</p>` : ''}
          </div>`
        : ''}
      <div class="cards ${cols === 2 ? 'cards--2' : cols === 4 ? 'cards--4' : ''}">
        ${items
          .map(
            (c, i) => `
          <article class="card reveal" style="transition-delay:${(i % 4) * 60}ms">
            ${c.icon ? `<div class="card-icon">${c.icon}</div>` : ''}
            <h3>${inline(c.title)}</h3>
            <p>${paragraph(c.text)}</p>
            ${c.href ? `<a href="${esc(c.href)}" class="card-link">Saznaj više</a>` : ''}
          </article>`
          )
          .join('')}
      </div>
    </div>
  </section>
`;

// ─── Values (2-col blokovi s naslovom + tekstom) ───
// data: { label?, title?, intro?, items: [{title, text}], alt? }
export const values = ({ label, title, intro, items = [], alt = false, theme = 'dark' }) => `
  <section class="section ${theme === 'light' ? 'section--light' : alt ? 'section--alt' : ''}">
    <div class="container">
      ${title || intro
        ? `<div class="section-head reveal">
            ${label ? `<span class="label">${inline(label)}</span>` : ''}
            ${title ? `<h2>${inline(title)}</h2>` : ''}
            ${intro ? `<p>${paragraph(intro)}</p>` : ''}
          </div>`
        : ''}
      <div class="values">
        ${items
          .map(
            (it, i) => `
          <div class="value-item reveal" style="transition-delay:${(i % 2) * 80}ms">
            <h3>${inline(it.title)}</h3>
            <p>${paragraph(it.text)}</p>
          </div>`
          )
          .join('')}
      </div>
    </div>
  </section>
`;

// ─── Steps (numbered process) ───
// data: { label?, title?, intro?, steps: [{title, text}], alt? }
export const steps = ({ label, title, intro, steps: items = [], alt = false, theme = 'dark' }) => {
  const cols = items.length === 4 ? 'steps--4' : items.length === 5 ? 'steps--5' : '';
  return `
  <section class="section ${theme === 'light' ? 'section--light' : alt ? 'section--alt' : ''}">
    <div class="container">
      ${title || intro
        ? `<div class="section-head reveal">
            ${label ? `<span class="label">${inline(label)}</span>` : ''}
            ${title ? `<h2>${inline(title)}</h2>` : ''}
            ${intro ? `<p>${paragraph(intro)}</p>` : ''}
          </div>`
        : ''}
      <div class="steps ${cols}">
        ${items
          .map(
            (s, i) => `
          <div class="step reveal" style="transition-delay:${(i % 4) * 60}ms">
            <h3>${inline(s.title)}</h3>
            <p>${paragraph(s.text)}</p>
          </div>`
          )
          .join('')}
      </div>
    </div>
  </section>`;
};

// ─── Pricing / tabela ───
// data: { label?, title?, intro?, columns: [str], rows: [[cell, cell, cell]], note?, alt? }
export const pricing = ({ label, title, intro, columns = [], rows = [], note, alt = false, theme = 'dark' }) => `
  <section class="section ${theme === 'light' ? 'section--light' : alt ? 'section--alt' : ''}">
    <div class="container">
      ${title || intro
        ? `<div class="section-head reveal">
            ${label ? `<span class="label">${inline(label)}</span>` : ''}
            ${title ? `<h2>${inline(title)}</h2>` : ''}
            ${intro ? `<p>${paragraph(intro)}</p>` : ''}
          </div>`
        : ''}
      <div class="table-wrap reveal">
        <table class="pricing">
          <thead>
            <tr>${columns.map((c) => `<th>${inline(c)}</th>`).join('')}</tr>
          </thead>
          <tbody>
            ${rows
              .map(
                (r) => `<tr>${r.map((cell) => `<td>${inline(cell)}</td>`).join('')}</tr>`
              )
              .join('')}
          </tbody>
        </table>
      </div>
      ${note ? `<p class="center" style="margin-top:18px;font-size:14px;color:var(--muted-2);font-style:italic">${paragraph(note)}</p>` : ''}
    </div>
  </section>
`;

// ─── CTA section ───
// data: { title, text?, button: {label, href}, meta? }
export const ctaSection = ({ title, text: tx, button, meta }) => `
  <section class="cta-section reveal">
    <div class="container">
      <h2>${inline(title)}</h2>
      ${tx ? `<p>${paragraph(tx)}</p>` : ''}
      <a href="${esc((button && button.href) || '/kontakt/')}" class="btn btn--primary btn-arrow">${esc((button && button.label) || 'Zakaži besplatnu konsultaciju')}</a>
      ${meta ? `<p class="cta-section-meta">${inline(meta)}</p>` : ''}
    </div>
  </section>
`;

// ─── Contact (info + forma sa Google Apps Script integracijom) ───
// data: {
//   contact: { email, phone, phoneHref, instagram, instagramUrl, address: {street, city, postal, country} },
//   endpoint: ''   // URL Google Apps Script web app-a (ako prazno, forma koristi mailto fallback)
// }
export const contact = ({ contact: c, endpoint = '' }) => {
  const fallbackAction = `mailto:${c.email}?subject=${encodeURIComponent('Upit sa sajta')}&body=${encodeURIComponent('Ime: \nEmail: \nTelefon: \nBiznis: \nUsluga: \n\nPoruka: \n')}`;
  const action = endpoint || fallbackAction;
  const method = endpoint ? 'POST' : 'GET';
  return `
  <section class="section">
    <div class="container">
      <div class="contact-grid">
        <form class="contact-form reveal" name="kontakt" method="${method}" action="${esc(action)}" data-endpoint="${esc(endpoint)}" novalidate>
          <p class="form-hp" aria-hidden="true"><label>Ne popunjavajte ovo polje:<input tabindex="-1" autocomplete="off" name="website" value=""></label></p>

          <div class="form-row form-row--2">
            <div>
              <label class="form-label" for="ime">Ime i prezime *</label>
              <input class="form-input" id="ime" name="ime" type="text" required autocomplete="name">
            </div>
            <div>
              <label class="form-label" for="email">Email *</label>
              <input class="form-input" id="email" name="email" type="email" required autocomplete="email">
            </div>
          </div>

          <div class="form-row form-row--2">
            <div>
              <label class="form-label" for="telefon">Telefon</label>
              <input class="form-input" id="telefon" name="telefon" type="tel" autocomplete="tel">
            </div>
            <div>
              <label class="form-label" for="biznis">Naziv biznisa</label>
              <input class="form-input" id="biznis" name="biznis" type="text" autocomplete="organization">
            </div>
          </div>

          <div class="form-row form-row--2">
            <div>
              <label class="form-label" for="industrija">Industrija</label>
              <select class="form-input" id="industrija" name="industrija">
                <option value="">Izaberi…</option>
                <option>Ugostiteljstvo</option>
                <option>IT</option>
                <option>Retail</option>
                <option>Usluge</option>
                <option>Građevina</option>
                <option>Zdravstvo</option>
                <option>Drugo</option>
              </select>
            </div>
            <div>
              <label class="form-label" for="usluga">Šta vas zanima?</label>
              <select class="form-input" id="usluga" name="usluga">
                <option value="">Izaberi uslugu…</option>
                <option>Digitalni marketing</option>
                <option>Vođenje društvenih mreža</option>
                <option>Marketing strategija</option>
                <option>Marketing konsultacije</option>
                <option>Izrada sajta</option>
                <option>Grafički dizajn</option>
                <option>Logo dizajn</option>
                <option>Fotografija</option>
                <option>Video produkcija</option>
                <option>SEO optimizacija</option>
                <option>Google oglašavanje</option>
                <option>Brendiranje</option>
                <option>Kurs / Obuka</option>
                <option>Sve / nisam siguran</option>
              </select>
            </div>
          </div>

          <div class="form-row">
            <label class="form-label" for="poruka">Poruka</label>
            <textarea class="form-input" id="poruka" name="poruka" rows="5" placeholder="Recite nam ukratko o vašem biznisu i šta tražite…"></textarea>
          </div>

          <div class="form-row">
            <button type="submit" class="btn btn--primary btn-arrow">Pošalji poruku</button>
            <p class="form-status" data-form-status hidden></p>
          </div>
        </form>

        <aside class="contact-info reveal">
          <h3>Direktan kontakt</h3>
          <div class="contact-info-item">
            <span class="contact-info-label">Email</span>
            <span class="contact-info-value"><a href="mailto:${esc(c.email)}">${esc(c.email)}</a></span>
          </div>
          <div class="contact-info-item">
            <span class="contact-info-label">Telefon</span>
            <span class="contact-info-value"><a href="tel:${esc(c.phoneHref)}">${esc(c.phone)}</a></span>
          </div>
          <div class="contact-info-item">
            <span class="contact-info-label">Instagram</span>
            <span class="contact-info-value"><a href="${esc(c.instagramUrl)}" target="_blank" rel="noopener">${esc(c.instagram)}</a></span>
          </div>
          <div class="contact-info-item">
            <span class="contact-info-label">Adresa</span>
            <span class="contact-info-value">${esc(c.address.street)}<br>${esc(c.address.postal)} ${esc(c.address.city)}<br>${esc(c.address.country)}</span>
          </div>
          <div class="contact-info-item">
            <span class="contact-info-label">Radno vrijeme</span>
            <span class="contact-info-value">Pon – Pet: 09:00 – 18:00<br>Sub – Ned: po dogovoru</span>
          </div>
        </aside>
      </div>
    </div>
  </section>
`;
};

// ─── Clients / partneri marquee ───
// data: { label?, title?, intro?, logos: [str], split?: bool, speed?: number, alt?: bool }
//   logos       — niz fajl-naziva u /images/portfolio/ (auto-popunjeno ako je `auto: true`)
//   split       — true = dvije trake, donja u suprotnom smjeru
//   speed       — sekundi za jednu rotaciju (default 80)
export const clients = ({ label, title, intro, logos = [], split = true, speed = 80, alt = false, theme = 'dark' }) => {
  if (!logos.length) return '';
  const renderLogo = (l) =>
    `<div class="client-logo"><img src="/images/portfolio/${encodeURIComponent(l)}" alt="" loading="lazy" decoding="async" width="200" height="120"></div>`;

  const half = Math.ceil(logos.length / 2);
  const row1 = logos.slice(0, split ? half : logos.length);
  const row2 = split ? logos.slice(half) : [];
  const renderRow = (row, dir) => {
    const items = row.map(renderLogo).join('');
    return `<div class="clients-marquee">
      <div class="clients-track ${dir}" style="--speed:${speed}s">${items}${items}</div>
    </div>`;
  };

  return `
    <section class="section clients-section ${theme === 'light' ? 'section--light' : alt ? 'section--alt' : ''}">
      <div class="container">
        ${title || intro
          ? `<div class="section-head reveal">
              ${label ? `<span class="label">${inline(label)}</span>` : ''}
              ${title ? `<h2>${inline(title)}</h2>` : ''}
              ${intro ? `<p>${paragraph(intro)}</p>` : ''}
            </div>`
          : ''}
      </div>
      ${renderRow(row1, 'is-rtl')}
      ${row2.length ? renderRow(row2, 'is-ltr') : ''}
    </section>
  `;
};

// ─── Klijenti grid (full lista) ───
export const clientsGrid = ({ label, title, intro, logos = [], alt = false, theme = 'dark' }) => {
  if (!logos.length) return '';
  return `
    <section class="section ${theme === 'light' ? 'section--light' : alt ? 'section--alt' : ''}">
      <div class="container">
        ${title || intro
          ? `<div class="section-head reveal">
              ${label ? `<span class="label">${inline(label)}</span>` : ''}
              ${title ? `<h2>${inline(title)}</h2>` : ''}
              ${intro ? `<p>${paragraph(intro)}</p>` : ''}
            </div>`
          : ''}
        <div class="clients-grid">
          ${logos
            .map(
              (l, i) => `
            <div class="client-grid-item reveal" style="transition-delay:${(i % 6) * 40}ms">
              <img src="/images/portfolio/${encodeURIComponent(l)}" alt="" loading="lazy" decoding="async" width="240" height="160">
            </div>`
            )
            .join('')}
        </div>
      </div>
    </section>
  `;
};

// ─── Founder / Person bio block ───
// data: { label?, name, role, image, imageAlt, paragraphs: [str], links?: [{label, href, external?}] }
export const founder = ({ label, name, role, image, imageAlt, paragraphs = [], links = [], alt = false, theme = 'dark' }) => `
  <section class="section ${theme === 'light' ? 'section--light' : alt ? 'section--alt' : ''}">
    <div class="container">
      <div class="founder reveal">
        <div class="founder-photo">
          ${(() => {
            const isJpg = /\.jpe?g$/i.test(image);
            const avif = isJpg ? image.replace(/\.jpe?g$/i, '.avif') : null;
            return `<picture>
            ${avif ? `<source srcset="/images/${esc(avif)}" type="image/avif">` : ''}
            <img src="/images/${esc(image)}" alt="${esc(imageAlt || name)}" loading="lazy" decoding="async" width="800" height="1000">
          </picture>`;
          })()}
        </div>
        <div class="founder-bio">
          ${label ? `<span class="label">${inline(label)}</span>` : ''}
          <h2>${inline(name)}</h2>
          ${role ? `<p class="founder-role">${inline(role)}</p>` : ''}
          ${paragraphs.map((p) => `<p>${paragraph(p)}</p>`).join('')}
          ${links.length
            ? `<div class="founder-links">${links
                .map(
                  (l) =>
                    `<a href="${esc(l.href)}"${l.external ? ' target="_blank" rel="noopener"' : ''}>${esc(l.label)} →</a>`
                )
                .join('')}</div>`
            : ''}
        </div>
      </div>
    </div>
  </section>
`;

// ─── Render generic — uzima niz blokova i poziva odgovarajući renderer ───
const renderers = { hero, text, cards, values, steps, pricing, ctaSection, breadcrumb, contact, founder, clients, clientsGrid };

export function renderBlocks(blocks = []) {
  return blocks
    .map((b) => {
      const fn = renderers[b.type];
      if (!fn) {
        console.warn(`Nepoznat tip bloka: ${b.type}`);
        return '';
      }
      return fn(b);
    })
    .join('\n');
}
