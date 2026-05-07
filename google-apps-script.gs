/**
 * MM DIGITAL — Backend forme za upite
 *
 * Ovaj kod se postavlja u Google Apps Script i deploy-uje kao Web App.
 * Kad neko popuni formu na sajtu, ovaj script:
 *   1. Upiše red u tvoj Google Sheet
 *   2. Pošalje ti email obavještenje
 *
 * SETUP — KORAK PO KORAK:
 *
 * 1. Otvori https://sheets.google.com i kreiraj novi spreadsheet, npr. "MM Digital — Upiti".
 * 2. U spreadsheet-u, klikni "Extensions" → "Apps Script".
 * 3. Obriši sve što je u Code.gs i kopiraj cijeli ovaj fajl unutra.
 * 4. (Opciono) Promijeni NOTIFY_EMAIL ispod ako želiš da ide na drugi email.
 * 5. Sačuvaj (Ctrl+S / Cmd+S), nazovi projekat "MM Digital Forma".
 * 6. Klikni "Deploy" → "New deployment".
 *    - Type: Web app (klikni zupčanik pored "Select type" pa "Web app")
 *    - Description: "v1"
 *    - Execute as: Me (tvoj email)
 *    - Who has access: Anyone   ← VAŽNO, mora biti "Anyone" da forma može slati
 * 7. Klikni "Deploy". Google će tražiti dozvole — odobri ih.
 * 8. Kopiraj URL koji ti da (završava sa /exec).
 * 9. Otvori src/content/site.js u sajt projektu i paste-uj URL u `formEndpoint: ''`.
 *    Primjer:  formEndpoint: 'https://script.google.com/macros/s/AKfycb.../exec',
 * 10. Pokreni `npm run build` i deploy-uj sajt na Netlify.
 *
 * Nakon ovoga, svaki put kad neko popuni formu:
 *   - Red se doda u sheet
 *   - Stigne ti mail s detaljima (sa Reply-To podešenim na podnosioca)
 *
 * Ako kasnije promijeniš ovaj kod, moraš ponovo "Deploy" → "Manage deployments"
 * → klikni olovku → "New version" → Deploy. URL ostaje isti.
 */

const NOTIFY_EMAIL = 'milamedin@gmail.com';
const SHEET_NAME = 'Upiti';

function doPost(e) {
  try {
    const params = (e && e.parameter) ? e.parameter : {};

    // ─── ANTI-SPAM PROVJERE ────────────────────────────────
    // 1. Honeypot polja — bot popunio neko od skrivenih polja
    if ((params.website && params.website.trim() !== '') ||
        (params.url && params.url.trim() !== '')) {
      return jsonResponse({ status: 'spam', reason: 'honeypot' });
    }

    // 2. Vrijeme popunjavanja — bot popunio formu za <3s ili nema timestamp
    const startedAt = Number(params.form_loaded_at || 0);
    if (!startedAt) {
      return jsonResponse({ status: 'spam', reason: 'no_timestamp' });
    }
    const elapsed = Date.now() - startedAt;
    if (elapsed < 3000 || elapsed > 6 * 60 * 60 * 1000) {
      return jsonResponse({ status: 'spam', reason: 'timing' });
    }

    // 3. Ćirilica / arapsko / kinesko pismo u poruci ili imenu
    const messageText = (params.poruka || '') + ' ' + (params.ime || '') + ' ' + (params.biznis || '');
    if (/[Ѐ-ӿ֐-׿؀-ۿऀ-ॿ一-鿿぀-ヿ]/.test(messageText)) {
      return jsonResponse({ status: 'spam', reason: 'foreign_script' });
    }

    // 4. Spam fraze (često iz auto-translated form spamova)
    const spamPhrases = [
      'kende din pris', 'votre prix', 'din pris',                  // skandinavski/francuski "tvoja cijena"
      'casino', 'viagra', 'cialis', 'crypto', 'bitcoin',            // klasični spam
      'seo backlink', 'guest post', 'link exchange', 'link building service',
      'rank your site', 'rank your website', 'increase traffic',
      'http://', 'https://',                                        // linkovi u poruci = sumnjivo
    ];
    const lowerMsg = (params.poruka || '').toLowerCase();
    for (const phrase of spamPhrases) {
      if (lowerMsg.indexOf(phrase) !== -1) {
        return jsonResponse({ status: 'spam', reason: 'phrase:' + phrase });
      }
    }

    // 5. Telefon — Crna Gora tel je 8-12 cifara. Više od 14 = sumnjivo (RU/UA/CN bot)
    const phoneDigits = (params.telefon || '').replace(/\D/g, '');
    if (phoneDigits.length > 14) {
      return jsonResponse({ status: 'spam', reason: 'phone_format' });
    }

    // 6. Mora postojati ime i poruka, i moraju imati razumnu dužinu
    if (!params.ime || params.ime.trim().length < 2 || params.ime.trim().length > 80) {
      return jsonResponse({ status: 'spam', reason: 'name_length' });
    }

    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = ss.getSheetByName(SHEET_NAME);
    if (!sheet) {
      sheet = ss.insertSheet(SHEET_NAME);
    }

    // Postavi zaglavlja ako su prazna
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        'Datum',
        'Ime',
        'Email',
        'Telefon',
        'Biznis',
        'Industrija',
        'Usluga',
        'Poruka',
        'IP / User Agent'
      ]);
      sheet.getRange(1, 1, 1, 9).setFontWeight('bold');
      sheet.setFrozenRows(1);
    }

    const datum = new Date();
    const userAgent = (e && e.parameter && e.parameter.userAgent) || '';

    sheet.appendRow([
      datum,
      (params.ime || '').toString().trim(),
      (params.email || '').toString().trim(),
      (params.telefon || '').toString().trim(),
      (params.biznis || '').toString().trim(),
      (params.industrija || '').toString().trim(),
      (params.usluga || '').toString().trim(),
      (params.poruka || '').toString().trim(),
      userAgent
    ]);

    // Auto-resize prve nekoliko kolona
    try { sheet.autoResizeColumns(1, 8); } catch (_) {}

    // Pošalji email obavještenje
    sendNotificationEmail(params);

    return jsonResponse({ status: 'ok' });
  } catch (err) {
    console.error(err);
    return jsonResponse({ status: 'error', message: err.toString() });
  }
}

function doGet() {
  // Za testiranje da li je deployment uspješan
  return jsonResponse({ status: 'ready', service: 'MM Digital forma' });
}

function sendNotificationEmail(p) {
  const ime = p.ime || '—';
  const email = p.email || '';
  const telefon = p.telefon || '—';
  const biznis = p.biznis || '—';
  const industrija = p.industrija || '—';
  const usluga = p.usluga || 'opšti upit';
  const poruka = p.poruka || '—';

  const subject = '🟣 Novi upit: ' + ime + ' — ' + usluga;
  const body =
    'Novi upit sa mmdigital.me\n' +
    '═══════════════════════════════════\n\n' +
    'Ime:        ' + ime + '\n' +
    'Email:      ' + email + '\n' +
    'Telefon:    ' + telefon + '\n' +
    'Biznis:     ' + biznis + '\n' +
    'Industrija: ' + industrija + '\n' +
    'Usluga:     ' + usluga + '\n\n' +
    'Poruka:\n' +
    '───────────────────────────────────\n' +
    poruka + '\n' +
    '───────────────────────────────────\n\n' +
    'Datum: ' + new Date().toLocaleString('sr-Latn-ME', { timeZone: 'Europe/Podgorica' }) + '\n\n' +
    '— Automatski mail iz Google Apps Script-a';

  const options = {
    name: 'MM Digital — Forma',
  };
  if (email) options.replyTo = email;

  MailApp.sendEmail(NOTIFY_EMAIL, subject, body, options);
}

function jsonResponse(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
