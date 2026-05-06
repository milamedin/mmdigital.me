// MM Digital — static site generator
// Pokreće se s `node build.mjs` ili `npm run build`.
// Output: dist/

import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { renderPage } from './src/templates/base.js';
import { renderBlocks } from './src/templates/blocks.js';
import { renderArticleBody, renderArticleHero, readingTime, formatDate, renderArticleCard } from './src/templates/blog.js';
import { site } from './src/content/site.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SRC = path.join(__dirname, 'src');
const DIST = path.join(__dirname, 'dist');
const CONTENT = path.join(SRC, 'content');

// ─── Helpers ─────────────────────────────────────────────────
async function rmrf(p) {
  await fs.rm(p, { recursive: true, force: true });
}
async function ensure(dir) {
  await fs.mkdir(dir, { recursive: true });
}
async function copyDir(src, dst) {
  const stat = await fs.stat(src).catch(() => null);
  if (!stat) return;
  if (stat.isDirectory()) {
    await ensure(dst);
    for (const ent of await fs.readdir(src)) {
      await copyDir(path.join(src, ent), path.join(dst, ent));
    }
  } else {
    await ensure(path.dirname(dst));
    await fs.copyFile(src, dst);
  }
}
async function walkContent(dir) {
  const out = [];
  for (const ent of await fs.readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) {
      out.push(...(await walkContent(full)));
    } else if (ent.isFile() && ent.name.endsWith('.js') && ent.name !== 'site.js') {
      out.push(full);
    }
  }
  return out;
}

// Auto breadcrumb iz path-a
function breadcrumbItems(p) {
  if (p === '/') return null;
  const parts = p.split('/').filter(Boolean);
  const items = [{ label: 'Početna', href: '/' }];
  let cur = '';
  parts.forEach((seg, i) => {
    cur += `/${seg}`;
    const last = i === parts.length - 1;
    const label = labelize(seg);
    items.push(last ? { label } : { label, href: `${cur}/` });
  });
  return items;
}
function labelize(slug) {
  const map = {
    'o-nama': 'O nama',
    usluge: 'Usluge',
    kursevi: 'Kursevi',
    kontakt: 'Kontakt',
    'digitalni-marketing': 'Digitalni marketing',
    'vodjenje-mreza': 'Vođenje mreža',
    'marketing-strategija': 'Marketing strategija',
    konsultacije: 'Konsultacije',
    'graficki-dizajn': 'Grafički dizajn',
    'logo-dizajn': 'Logo dizajn',
    'izrada-sajtova': 'Izrada sajtova',
    fotografija: 'Fotografija',
    'video-produkcija': 'Video produkcija',
    'seo-optimizacija': 'SEO optimizacija',
    'google-oglasavanje': 'Google oglašavanje',
    brendiranje: 'Brendiranje',
  };
  return map[slug] || slug;
}

// ─── Build ───────────────────────────────────────────────────
async function build() {
  const t0 = Date.now();
  console.log('▶ Brišem dist/');
  await rmrf(DIST);
  await ensure(DIST);

  // Copy public assets
  console.log('▶ Kopiram public/');
  await copyDir(path.join(SRC, 'public'), DIST);

  // Copy CSS + JS as /assets/*
  await ensure(path.join(DIST, 'assets'));
  await fs.copyFile(path.join(SRC, 'styles', 'main.css'), path.join(DIST, 'assets', 'main.css'));
  await fs.copyFile(path.join(SRC, 'scripts', 'main.js'), path.join(DIST, 'assets', 'main.js'));

  // Discover and render pages
  console.log('▶ Učitavam content/');
  const files = await walkContent(CONTENT);
  const pages = [];
  for (const f of files) {
    const mod = await import(pathToFileURL(f).href);
    if (!mod.default) continue;
    pages.push({ file: f, ...mod.default });
  }
  pages.sort((a, b) => a.path.localeCompare(b.path));

  // Auto-discover client logos for `clients` / `clientsGrid` blocks with auto: true
  const clientLogos = await listClientLogos();
  for (const page of pages) {
    if (Array.isArray(page.blocks)) {
      for (const block of page.blocks) {
        if ((block.type === 'clients' || block.type === 'clientsGrid') && block.auto) {
          block.logos = clientLogos;
        }
      }
    }
  }

  // Razdijeli blog postove od ostalih stranica
  const blogPosts = pages
    .filter((p) => p.path.startsWith('/blog/') && p.path !== '/blog/')
    .sort((a, b) => (b.date || '').localeCompare(a.date || ''));

  // Auto-generiši /blog/ index ako nije ručno definisan
  if (!pages.some((p) => p.path === '/blog/') && blogPosts.length > 0) {
    pages.push(generateBlogIndex(blogPosts));
    pages.sort((a, b) => a.path.localeCompare(b.path));
  }

  console.log(`▶ Renderujem ${pages.length} stranica (od toga ${blogPosts.length} blog post${blogPosts.length === 1 ? '' : 'ova'})`);
  for (const page of pages) {
    let body;
    if (isArticle(page)) {
      body = renderArticle(page, blogPosts);
    } else {
      const blocks = [...(page.blocks || [])];
      // Inject auto-breadcrumb at top if not Home and no manual breadcrumb
      const hasBc = blocks.some((b) => b.type === 'breadcrumb');
      if (!hasBc && page.path !== '/') {
        const items = breadcrumbItems(page.path);
        if (items) {
          const heroIdx = blocks.findIndex((b) => b.type === 'hero');
          const bc = { type: 'breadcrumb', items };
          if (heroIdx >= 0) blocks.splice(heroIdx + 1, 0, bc);
          else blocks.unshift(bc);
        }
      }
      body = renderBlocks(blocks);
      // Special handling — blog index gets a card grid appended
      if (page.blogIndex && page.posts) {
        body += `<section class="section">
          <div class="container">
            <div class="cards">${page.posts
              .map((p) => renderArticleCard({ ...p, readTimeText: readingTime(p.body) }))
              .join('')}</div>
          </div>
        </section>`;
      }
    }
    // Auto-detect LCP image (first hero block) za preload
    let preloadImage = null;
    if (isArticle(page) && page.hero?.image) {
      preloadImage = `/images/${page.hero.image.replace(/\.jpe?g$/i, '.avif')}`;
    } else if (Array.isArray(page.blocks)) {
      const heroBlock = page.blocks.find((b) => b.type === 'hero' && b.image);
      if (heroBlock) {
        preloadImage = `/images/${heroBlock.image.replace(/\.jpe?g$/i, '.avif')}`;
      }
    }

    const html = renderPage({
      path: page.path,
      title: page.title,
      description: page.description,
      ogImage: page.ogImage,
      schema: enrichSchema(page),
      body,
      preloadImage,
    });
    const outDir = page.path === '/' ? DIST : path.join(DIST, page.path);
    await ensure(outDir);
    await fs.writeFile(path.join(outDir, 'index.html'), html, 'utf8');
    console.log(`  ✓ ${page.path}`);
  }

  // 404
  const html404 = renderPage({
    path: '/404/',
    title: 'Stranica ne postoji — MM Digital',
    description: 'Stranica koju tražite ne postoji ili je premještena.',
    body: `
      <section class="page-404">
        <div>
          <p class="label">404</p>
          <h1>Ovdje *nema* ničega.</h1>
          <p>Stranica koju tražite ne postoji ili je premještena. Vratite se na početnu i pogledajte šta nudimo.</p>
          <a href="/" class="btn btn--primary btn-arrow">Nazad na početnu</a>
        </div>
      </section>
    `,
  });
  await fs.writeFile(path.join(DIST, '404.html'), html404, 'utf8');
  console.log('  ✓ /404.html');

  // Sitemap
  const today = new Date().toISOString().split('T')[0];
  const urls = pages.map((p) => {
    const priority = p.path === '/' ? '1.0' : p.path.startsWith('/usluge/') ? '0.8' : '0.7';
    const changefreq = p.path === '/' ? 'weekly' : 'monthly';
    return `  <url>
    <loc>${site.url}${p.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
  });
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>
`;
  await fs.writeFile(path.join(DIST, 'sitemap.xml'), sitemap, 'utf8');
  console.log('  ✓ /sitemap.xml');

  console.log(`✓ Build gotov za ${((Date.now() - t0) / 1000).toFixed(2)}s · ${pages.length} stranica → dist/`);
}

// ─── Klijenti / portfolio helpers ─────────────────────────
async function listClientLogos() {
  const dir = path.join(SRC, 'public', 'images', 'portfolio');
  try {
    const files = await fs.readdir(dir);
    return files
      .filter((f) => /\.(png|jpe?g|svg|webp)$/i.test(f) && !f.startsWith('.'))
      .sort((a, b) => {
        // Sort numerically by trailing number ako je "Artboard X.png" format
        const ma = a.match(/(\d+)/);
        const mb = b.match(/(\d+)/);
        if (ma && mb) return parseInt(ma[1]) - parseInt(mb[1]);
        return a.localeCompare(b);
      });
  } catch {
    return [];
  }
}

// ─── Blog helpers ─────────────────────────────────────────
function isArticle(page) {
  return page.path.startsWith('/blog/') && page.path !== '/blog/' && page.body !== undefined;
}

function renderArticle(post, allPosts) {
  const readTimeText = readingTime(post.body);
  const heroHTML = renderArticleHero({
    label: 'Blog',
    title: post.hero?.title || post.title,
    subtitle: post.hero?.subtitle,
    image: post.hero?.image,
    imageAlt: post.hero?.imageAlt,
    date: post.date,
    author: post.author || 'Mila Medin',
    readTimeText,
    category: post.category,
  });
  const bodyHTML = renderArticleBody(post.body);
  // Auto-breadcrumb
  const bc = breadcrumbItems(post.path);
  const breadcrumbHTML = bc
    ? `<nav class="breadcrumb" aria-label="Putanja"><div class="container">${bc
        .map((it, i) => {
          const sep = i > 0 ? '<span class="breadcrumb-sep">/</span>' : '';
          return it.href
            ? `${sep}<a href="${it.href}">${it.label}</a>`
            : `${sep}<span>${it.label}</span>`;
        })
        .join('')}</div></nav>`
    : '';

  // Author bio at end
  const authorHTML = `
    <div class="article-author reveal">
      <div class="article-author-photo">
        <img src="/images/team/mila-medin.jpg" alt="Mila Medin" loading="lazy" decoding="async">
      </div>
      <div class="article-author-text">
        <h4>Autor</h4>
        <p><strong>${post.author || 'Mila Medin'}</strong> — osnivačica MM Digital agencije. Piše o marketingu koji zaista radi za biznise u Crnoj Gori.</p>
      </div>
    </div>
  `;

  // CTA at end
  const ctaHTML = `
    <section class="cta-section reveal">
      <div class="container">
        <h2>${post.cta?.title || 'Trebate pomoć s vašim marketingom?'}</h2>
        <p>${post.cta?.text || 'Zakažite besplatnu 30-minutnu konsultaciju. Bez obaveza, samo iskren razgovor o tome šta vašem biznisu zaista treba.'}</p>
        <a href="/kontakt/" class="btn btn--primary btn-arrow">Razgovarajmo</a>
      </div>
    </section>
  `;

  // Related — 3 latest excluding self
  const related = allPosts.filter((p) => p.path !== post.path).slice(0, 3);
  const relatedHTML = related.length
    ? `<section class="section section--alt">
        <div class="container">
          <div class="section-head reveal section-head--left">
            <span class="label">Pročitajte još</span>
            <h2>Slični tekstovi</h2>
          </div>
          <div class="cards">${related
            .map((p) => renderArticleCard({ ...p, readTimeText: readingTime(p.body) }))
            .join('')}</div>
        </div>
      </section>`
    : '';

  return `${heroHTML}${breadcrumbHTML}<article class="container"><div class="article-body">${bodyHTML}${authorHTML}</div></article>${ctaHTML}${relatedHTML}`;
}

function generateBlogIndex(posts) {
  return {
    path: '/blog/',
    title: 'Blog — MM Digital | Marketing, dizajn i sajtovi bez teorije',
    description:
      'Blog MM Digital agencije. Praktični vodiči o digitalnom marketingu, izradi sajtova, dizajnu i SEO-u — pisani za biznise u Crnoj Gori.',
    schema: [
      {
        '@context': 'https://schema.org',
        '@type': 'Blog',
        name: 'MM Digital Blog',
        url: `${site.url}/blog/`,
        publisher: { '@type': 'Organization', name: 'MM Digital', url: site.url },
        blogPost: posts.map((p) => ({
          '@type': 'BlogPosting',
          headline: p.title,
          url: `${site.url}${p.path}`,
          datePublished: p.date,
          author: { '@type': 'Person', name: p.author || 'Mila Medin' },
        })),
      },
    ],
    blocks: [
      {
        type: 'hero',
        label: 'Blog',
        title: 'Marketing, dizajn i sajtovi — *bez teorije*.',
        subtitle:
          'Praktični tekstovi o stvarima koje rade (i ne rade) u marketingu malih i srednjih biznisa u Crnoj Gori. Bez recikliranog AI sadržaja, bez "5 razloga zašto..." šablona.',
        cta: [{ label: 'Razgovarajmo' }],
        image: 'heroes/notebook-1.jpg',
        imageAlt: 'Nalivpero na notesu — pisanje',
      },
    ],
    // Custom — biće prepisano s blog index gridom u nastavku
    blogIndex: true,
    posts,
  };
}

function enrichSchema(page) {
  let schema = [...(page.schema || [])];
  // Auto-BreadcrumbList za sve sem Home
  if (page.path !== '/') {
    const items = breadcrumbItems(page.path);
    if (items && items.length > 1) {
      schema.push({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((it, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: it.label,
          item: it.href ? `${site.url}${it.href}` : undefined,
        })),
      });
    }
  }
  // Auto-Article schema za blog postove
  if (isArticle(page)) {
    schema.push({
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      mainEntityOfPage: { '@type': 'WebPage', '@id': `${site.url}${page.path}` },
      headline: page.hero?.title || page.title,
      description: page.description,
      image: page.hero?.image ? `${site.url}/images/${page.hero.image}` : `${site.url}/images/og-default.svg`,
      datePublished: page.date,
      dateModified: page.dateModified || page.date,
      author: { '@type': 'Person', name: page.author || 'Mila Medin', url: `${site.url}/o-nama/` },
      publisher: {
        '@type': 'Organization',
        name: 'MM Digital',
        logo: { '@type': 'ImageObject', url: `${site.url}/images/logo.svg` },
      },
      keywords: page.keywords,
      articleSection: page.category,
    });
  }
  return schema;
}

build().catch((e) => {
  console.error(e);
  process.exit(1);
});
