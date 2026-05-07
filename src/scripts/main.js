// MM Digital — UI interakcije

(function () {
  'use strict';

  // Mobile nav toggle
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const open = links.classList.toggle('is-open');
      toggle.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', String(open));
      document.body.style.overflow = open ? 'hidden' : '';
    });
    // Zatvori meni na klik linka (mobile)
    links.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        if (window.innerWidth <= 880) {
          links.classList.remove('is-open');
          toggle.classList.remove('is-open');
          document.body.style.overflow = '';
        }
      });
    });
  }

  // Dropdown (Usluge)
  document.querySelectorAll('.nav-dropdown').forEach(dd => {
    const btn = dd.querySelector('button');
    if (!btn) return;
    btn.setAttribute('aria-haspopup', 'true');
    btn.setAttribute('aria-expanded', 'false');
    btn.addEventListener('click', e => {
      e.preventDefault();
      const open = dd.classList.toggle('is-open');
      btn.setAttribute('aria-expanded', String(open));
    });
  });
  document.addEventListener('click', e => {
    document.querySelectorAll('.nav-dropdown.is-open').forEach(dd => {
      if (!dd.contains(e.target)) {
        dd.classList.remove('is-open');
        const btn = dd.querySelector('button');
        if (btn) btn.setAttribute('aria-expanded', 'false');
      }
    });
  });

  // Header scroll state
  const header = document.querySelector('.site-header');
  if (header) {
    const onScroll = () => {
      header.classList.toggle('is-scrolled', window.scrollY > 8);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // Scroll reveal
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));
  } else {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('is-visible'));
  }

  // Footer godina
  const yearEl = document.querySelector('[data-year]');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ─── Modal (zahvalnost) ───────────────────────────────────
  const modal = document.getElementById('thanks-modal');
  function openModal() {
    if (!modal) return;
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
    requestAnimationFrame(() => modal.classList.add('is-open'));
    const focusTarget = modal.querySelector('.btn');
    if (focusTarget) focusTarget.focus();
  }
  function closeModal() {
    if (!modal) return;
    modal.classList.remove('is-open');
    setTimeout(() => { modal.hidden = true; document.body.style.overflow = ''; }, 250);
  }
  if (modal) {
    modal.querySelectorAll('[data-close]').forEach(el => el.addEventListener('click', closeModal));
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && !modal.hidden) closeModal();
    });
  }

  // ─── Kontakt forma ────────────────────────────────────────
  const form = document.querySelector('form.contact-form');
  if (form) {
    const status = form.querySelector('[data-form-status]');
    const setStatus = (msg, type) => {
      if (!status) return;
      status.textContent = msg || '';
      status.hidden = !msg;
      status.dataset.type = type || '';
    };

    // Vrijeme učitavanja forme — server provjerava da prošlo bar 3 sekunde
    const loadedAtField = form.elements.form_loaded_at;
    if (loadedAtField) loadedAtField.value = String(Date.now());
    // Track koje polje je posljednje fokusirano (bot često ne fokusira polja)
    const filledForField = form.elements.form_filled_for;
    form.querySelectorAll('input,select,textarea').forEach((el) => {
      el.addEventListener('focus', () => {
        if (filledForField && el.name && !/^(website|url|form_)/.test(el.name)) {
          filledForField.value = el.name;
        }
      });
    });

    form.addEventListener('submit', async (e) => {
      // Honeypot polja — bot popunio
      if (form.elements.website && form.elements.website.value) { e.preventDefault(); return; }
      if (form.elements.url && form.elements.url.value) { e.preventDefault(); return; }
      // Vrijeme popunjavanja, manje od 3s = bot
      const startedAt = Number(loadedAtField?.value || 0);
      if (startedAt && Date.now() - startedAt < 3000) { e.preventDefault(); return; }

      const endpoint = form.dataset.endpoint;
      // Bez Apps Script endpoint-a — pusti browser da otvori mailto: action
      if (!endpoint) return;

      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      const original = btn ? btn.textContent : '';
      if (btn) { btn.disabled = true; btn.textContent = 'Šaljem…'; }
      setStatus('', '');

      try {
        const params = new URLSearchParams(new FormData(form));
        const res = await fetch(endpoint, {
          method: 'POST',
          body: params,
          headers: { 'Accept': 'application/json' },
        });
        // Apps Script uglavnom vraća 200 sa JSON-om; ako ne pukne — smatraj OK
        if (!res.ok) throw new Error('Greška pri slanju (' + res.status + ')');
        form.reset();
        openModal();
      } catch (err) {
        console.error('Form submit error:', err);
        setStatus('Greška pri slanju. Pokušajte ponovo ili pišite na info@mmdigital.me.', 'error');
      } finally {
        if (btn) { btn.disabled = false; btn.textContent = original; }
      }
    });
  }
})();
