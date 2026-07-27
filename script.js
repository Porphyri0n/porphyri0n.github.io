/* Erdoğan Başer — Portfolio
   1) EN/TR language support (default: English)
   2) Background: 3D solar system in the site's palette.
      Rotation accelerates while scrolling and slowly settles
      back to a calm base speed when idle. */
(function () {
  "use strict";

  /* =====================================================
     I18N
     ===================================================== */
  var I18N = {
    en: {
      "meta.title": "Erdoğan Başer — Game Developer",
      "meta.desc": "Erdoğan Başer — Game developer and computer engineer. Unity, artificial intelligence and game technologies.",

      "nav.about": "About",
      "nav.experience": "Experience",
      "nav.education": "Education",
      "nav.skills": "Skills",
      "nav.unityAssets": "Unity Assets",
      "nav.projects": "Projects",
      "nav.contact": "Contact",

      "hero.kicker": "Game Developer",
      "hero.role": "Computer Engineer — University of Turkish Aeronautical Association",
      "hero.desc": "I work in game development and artificial intelligence, with professional experience in Unity and a background in technology education.",
      "hero.cta": "Get in Touch",
      "hero.tools": "Unity Tools",
      "hero.status": "Open to new opportunities",

      "about.tag": "01 — About",
      "about.title": "Profile",
      "about.p1": "I graduated from Keçiören Science High School in 2022 and hold a degree in Computer Engineering from the University of Turkish Aeronautical Association.",
      "about.p2": "My professional experience covers Unity game development, artificial intelligence studies and mentoring at the T3 Foundation. I currently work as a Game Developer at Bug Production.",
      "about.p3": "In addition to technical work, I have experience in event organization and sponsorship management.",
      "about.stat1": "Organizations",
      "about.stat2": "Languages",
      "about.stat3": "Certifications",
      "about.stat4": "Years in technology",

      "exp.tag": "02 — Experience",
      "exp.title": "Professional Experience",
      "exp.current": "Current",
      "exp.bug.role": "Game Developer",
      "exp.bug.date": "September 2025 — Present · Ankara, Türkiye",
      "exp.bug.desc": "Development of commercial game projects.",
      "exp.ai.name": "Google AI and Technology Academy",
      "exp.ai.role": "Scholar",
      "exp.ai.date": "January 2025 — July 2025 · 7 months",
      "exp.ai.desc": "Intensive training and project development in artificial intelligence.",
      "exp.trend.role": "Unity 3D Developer",
      "exp.trend.date": "October 2024 — June 2025 · Ankara, Türkiye",
      "exp.trend.desc": "Development of 3D applications and games with Unity.",
      "exp.t3.name": "T3 Foundation",
      "exp.t3.role": "Instructor / Mentor",
      "exp.t3.date": "January 2024 — January 2025 · Ankara, Türkiye",
      "exp.t3.desc": "Technical training and mentorship for young technology students.",
      "exp.kliniker.role": "Unity Developer",
      "exp.kliniker.date": "January 2023 — May 2023 · 5 months",
      "exp.kliniker.desc": "Unity-based application development.",
      "exp.deneyap.role": "Phase 1 Graduate",
      "exp.deneyap.date": "June 2019 — June 2022 · 3 years",
      "exp.deneyap.desc": "Training in robotics, software and design.",

      "edu.tag": "03 — Education",
      "edu.title": "Education",
      "edu.uni.name": "University of Turkish Aeronautical Association",
      "edu.uni.degree": "B.Sc., Computer Engineering",
      "edu.uni.date": "2022 — June 2026",
      "edu.hs.name": "Keçiören Science High School",
      "edu.hs.degree": "High School",
      "edu.hs.date": "Graduated in 2022",

      "skills.tag": "04 — Skills",
      "skills.title": "Skills &amp; Qualifications",
      "skills.core": "Core Competencies",
      "skills.chip.gamedev": "Game Development",
      "skills.chip.ai": "Artificial Intelligence",
      "skills.chip.events": "Event Organization",
      "skills.chip.sponsor": "Sponsorship Management",
      "skills.chip.mentoring": "Mentoring",
      "skills.languages": "Languages",
      "skills.lang.tr": "Turkish",
      "skills.lang.tr.level": "Native",
      "skills.lang.en": "English",
      "skills.lang.en.level": "Full Professional",
      "skills.lang.fr": "French",
      "skills.lang.fr.level": "Limited Working",
      "skills.lang.de": "German",
      "skills.lang.de.level": "Elementary",
      "skills.certs": "Certifications",
      "skills.cert1": "Artificial Intelligence",
      "skills.cert2": "Cyber Security",
      "skills.cert3": "Energy Technologies",
      "skills.cert4": "Nanotechnology and Materials Science",
      "skills.awards": "Honors &amp; Awards",
      "skills.award.desc": "Third place with a CanSat / PocketQube project.",

      "projects.tag": "05 — Projects",
      "projects.title": "Projects",
      "projects.hrl.title": "Contour Radius Analysis",
      "projects.hrl.desc": "A single-page tool that reads a Heidenhain Klartext (.H) or ISO program and finds the DR range you may stay in when dialling stock, from three separate limits: where the control reports “tool radius too large”, where plunge and retract moves cut back the stock you left, and the outward-offset floor. Permanent damage, sharp inside corners and narrow passages are listed separately. Everything runs in the browser — the program is never uploaded.",
      "projects.hrl.open": "Open the tool",
      "projects.hrl.repo": "Source on GitHub",

      "contact.tag": "06 — Contact",
      "contact.title": "Get in Touch",
      "contact.desc": "For professional inquiries and collaboration, feel free to reach out.",

      "footer.text": "© 2026 Erdoğan Başer. All rights reserved.",

      "cookie.banner.title": "Your privacy choices",
      "cookie.banner.desc": "This site uses optional Google Analytics cookies to understand visits. You can accept them or review the settings.",
      "cookie.accept": "Accept cookies",
      "cookie.settings": "Cookie settings",
      "cookie.dialog.title": "Cookie settings",
      "cookie.dialog.desc": "Choose how this site may use cookies. You can change your choice at any time.",
      "cookie.necessary.title": "Necessary storage",
      "cookie.necessary.desc": "Used only to remember language and privacy choices. It does not track you.",
      "cookie.always": "Always active",
      "cookie.analytics.title": "Analytics cookies",
      "cookie.analytics.desc": "Google Analytics helps measure visits and page usage.",
      "cookie.optional": "Optional",
      "cookie.necessaryOnly": "Accept necessary only",
      "cookie.acceptAll": "Accept all",
      "cookie.reject": "Reject cookies",
      "cookie.close": "Close cookie settings"
    },
    tr: {
      "meta.title": "Erdoğan Başer — Oyun Geliştirici",
      "meta.desc": "Erdoğan Başer — Oyun geliştirici ve bilgisayar mühendisi. Unity, yapay zeka ve oyun teknolojileri.",

      "nav.about": "Hakkımda",
      "nav.experience": "Deneyim",
      "nav.education": "Eğitim",
      "nav.skills": "Yetenekler",
      "nav.unityAssets": "Unity Varlıkları",
      "nav.projects": "Projeler",
      "nav.contact": "İletişim",

      "hero.kicker": "Oyun Geliştirici",
      "hero.role": "Bilgisayar Mühendisi — Türk Hava Kurumu Üniversitesi",
      "hero.desc": "Oyun geliştirme ve yapay zeka alanlarında çalışıyorum. Unity ile profesyonel deneyime ve teknoloji eğitimi geçmişine sahibim.",
      "hero.cta": "İletişime Geçin",
      "hero.tools": "Unity Araçları",
      "hero.status": "Yeni fırsatlara açık",

      "about.tag": "01 — Hakkımda",
      "about.title": "Profil",
      "about.p1": "Orta öğrenimimi 2022 yılında Keçiören Fen Lisesi'nde tamamladıktan sonra, Türk Hava Kurumu Üniversitesi Bilgisayar Mühendisliği bölümünden lisans derecesiyle mezun oldum.",
      "about.p2": "Profesyonel deneyimim; Unity ile oyun geliştirme, yapay zeka alanındaki çalışmalar ve T3 Vakfı bünyesinde yürüttüğüm mentorluk faaliyetlerini kapsamaktadır. Halen Bug Production bünyesinde Oyun Geliştirici olarak görev yapmaktayım.",
      "about.p3": "Teknik çalışmalarımın yanı sıra etkinlik organizasyonu ve sponsorluk yönetimi alanlarında da deneyim sahibiyim.",
      "about.stat1": "Kurum",
      "about.stat2": "Dil",
      "about.stat3": "Sertifika",
      "about.stat4": "Yıllık teknoloji deneyimi",

      "exp.tag": "02 — Deneyim",
      "exp.title": "Profesyonel Deneyim",
      "exp.current": "Güncel",
      "exp.bug.role": "Oyun Geliştirici",
      "exp.bug.date": "Eylül 2025 — Halen · Ankara, Türkiye",
      "exp.bug.desc": "Ticari oyun projelerinin geliştirilmesi.",
      "exp.ai.name": "Google Yapay Zeka ve Teknoloji Akademisi",
      "exp.ai.role": "Bursiyer",
      "exp.ai.date": "Ocak 2025 — Temmuz 2025 · 7 ay",
      "exp.ai.desc": "Yapay zeka alanında yoğun eğitim ve proje geliştirme.",
      "exp.trend.role": "Unity 3D Geliştirici",
      "exp.trend.date": "Ekim 2024 — Haziran 2025 · Ankara, Türkiye",
      "exp.trend.desc": "Unity ile 3B uygulama ve oyun geliştirme.",
      "exp.t3.name": "T3 Vakfı",
      "exp.t3.role": "Eğitmen / Mentor",
      "exp.t3.date": "Ocak 2024 — Ocak 2025 · Ankara, Türkiye",
      "exp.t3.desc": "Genç teknoloji öğrencilerine teknik eğitim ve mentorluk.",
      "exp.kliniker.role": "Unity Geliştirici",
      "exp.kliniker.date": "Ocak 2023 — Mayıs 2023 · 5 ay",
      "exp.kliniker.desc": "Unity tabanlı uygulama geliştirme.",
      "exp.deneyap.role": "Faz 1 Mezunu",
      "exp.deneyap.date": "Haziran 2019 — Haziran 2022 · 3 yıl",
      "exp.deneyap.desc": "Robotik, yazılım ve tasarım eğitimleri.",

      "edu.tag": "03 — Eğitim",
      "edu.title": "Eğitim",
      "edu.uni.name": "Türk Hava Kurumu Üniversitesi",
      "edu.uni.degree": "Lisans, Bilgisayar Mühendisliği",
      "edu.uni.date": "2022 — Haziran 2026",
      "edu.hs.name": "Keçiören Fen Lisesi",
      "edu.hs.degree": "Lise",
      "edu.hs.date": "2022 Mezunu",

      "skills.tag": "04 — Yetenekler",
      "skills.title": "Yetenekler ve Nitelikler",
      "skills.core": "Temel Yetkinlikler",
      "skills.chip.gamedev": "Oyun Geliştirme",
      "skills.chip.ai": "Yapay Zeka",
      "skills.chip.events": "Etkinlik Organizasyonu",
      "skills.chip.sponsor": "Sponsorluk Yönetimi",
      "skills.chip.mentoring": "Mentorluk",
      "skills.languages": "Diller",
      "skills.lang.tr": "Türkçe",
      "skills.lang.tr.level": "Anadil",
      "skills.lang.en": "İngilizce",
      "skills.lang.en.level": "Tam Profesyonel",
      "skills.lang.fr": "Fransızca",
      "skills.lang.fr.level": "Sınırlı Çalışma",
      "skills.lang.de": "Almanca",
      "skills.lang.de.level": "Başlangıç",
      "skills.certs": "Sertifikalar",
      "skills.cert1": "Yapay Zeka",
      "skills.cert2": "Siber Güvenlik",
      "skills.cert3": "Enerji Teknolojileri",
      "skills.cert4": "Nanoteknoloji ve Malzeme Bilimi",
      "skills.awards": "Ödüller",
      "skills.award.desc": "CanSat / PocketQube projesi ile dünya üçüncülüğü.",

      "projects.tag": "05 — Projeler",
      "projects.title": "Projeler",
      "projects.hrl.title": "Kontur Yarıçap Analizi",
      "projects.hrl.desc": "Heidenhain Klartext (.H) veya ISO programını okuyup DR ile pay verirken hangi aralıkta kalabileceğini üç ayrı sınırdan bulan tek sayfalık araç: kumandanın “takım yarıçapı çok büyük” dediği nokta, dalış ve geri çekilme hareketlerinin bıraktığın payı geri kestiği sınır, ve dış ofset tabanı. Kalıcı hasar, keskin iç köşeler ve dar geçitler ayrıca listelenir. Her şey tarayıcıda çalışır — program hiçbir yere yüklenmez.",
      "projects.hrl.open": "Aracı aç",
      "projects.hrl.repo": "GitHub'da kaynak",

      "contact.tag": "06 — İletişim",
      "contact.title": "İletişime Geçin",
      "contact.desc": "Profesyonel talepleriniz ve iş birlikleri için iletişime geçebilirsiniz.",

      "footer.text": "© 2026 Erdoğan Başer. Tüm hakları saklıdır.",

      "cookie.banner.title": "Gizlilik tercihleriniz",
      "cookie.banner.desc": "Bu site, ziyaretleri anlamak için isteğe bağlı Google Analytics çerezleri kullanır. Çerezleri kabul edebilir veya ayarları inceleyebilirsiniz.",
      "cookie.accept": "Çerezleri kabul et",
      "cookie.settings": "Çerez ayarları",
      "cookie.dialog.title": "Çerez ayarları",
      "cookie.dialog.desc": "Bu sitenin çerezleri nasıl kullanabileceğini seçin. Tercihinizi istediğiniz zaman değiştirebilirsiniz.",
      "cookie.necessary.title": "Gerekli depolama",
      "cookie.necessary.desc": "Yalnızca dil ve gizlilik tercihlerinizi hatırlamak için kullanılır. Sizi takip etmez.",
      "cookie.always": "Her zaman etkin",
      "cookie.analytics.title": "Analitik çerezleri",
      "cookie.analytics.desc": "Google Analytics, ziyaretlerin ve sayfa kullanımının ölçülmesine yardımcı olur.",
      "cookie.optional": "İsteğe bağlı",
      "cookie.necessaryOnly": "Gerekli olanları kabul et",
      "cookie.acceptAll": "Hepsini kabul et",
      "cookie.reject": "Çerezleri reddet",
      "cookie.close": "Çerez ayarlarını kapat"
    }
  };

  /* Sub pages can extend / override the base dictionary by defining
     window.PAGE_I18N = { en: {...}, tr: {...} } before this script. */
  var pageI18n = window.PAGE_I18N || {};
  Object.keys(pageI18n).forEach(function (lang) {
    if (!I18N[lang]) I18N[lang] = {};
    Object.keys(pageI18n[lang]).forEach(function (key) {
      I18N[lang][key] = pageI18n[lang][key];
    });
  });

  var btnEn = document.getElementById("langEn");
  var btnTr = document.getElementById("langTr");

  function setLang(lang) {
    var dict = I18N[lang] || I18N.en;
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var value = dict[el.getAttribute("data-i18n")];
      if (value != null) el.innerHTML = value;
    });
    document.querySelectorAll("[data-i18n-aria-label]").forEach(function (el) {
      var value = dict[el.getAttribute("data-i18n-aria-label")];
      if (value != null) el.setAttribute("aria-label", value);
    });
    document.title = dict["meta.title"];
    var meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", dict["meta.desc"]);

    btnEn.classList.toggle("active", lang === "en");
    btnTr.classList.toggle("active", lang === "tr");
    btnEn.setAttribute("aria-pressed", String(lang === "en"));
    btnTr.setAttribute("aria-pressed", String(lang === "tr"));

    try { localStorage.setItem("lang", lang); } catch (e) { /* ignore */ }
  }

  btnEn.addEventListener("click", function () { setLang("en"); });
  btnTr.addEventListener("click", function () { setLang("tr"); });

  /* =====================================================
     Cookie consent
     ===================================================== */
  var consentStorageKey = "portfolio_cookie_consent_v1";
  var consentStyle = document.createElement("style");
  consentStyle.textContent = [
    ".cookie-consent [hidden]{display:none!important}",
    ".cookie-banner{position:fixed;z-index:1000;right:24px;bottom:24px;width:min(520px,calc(100% - 48px));padding:24px;background:linear-gradient(150deg,rgba(24,26,43,.97),rgba(12,14,25,.97));border:1px solid var(--border-strong);border-radius:22px;box-shadow:0 18px 60px rgba(0,0,0,.55),inset 0 1px 0 var(--highlight);backdrop-filter:blur(22px) saturate(160%);-webkit-backdrop-filter:blur(22px) saturate(160%)}",
    ".cookie-banner h2,.cookie-dialog h2{font-size:1.22rem;margin-bottom:8px}",
    ".cookie-banner p,.cookie-dialog>div>p{color:var(--text-dim);font-size:.92rem;line-height:1.55}",
    ".cookie-actions{display:flex;gap:10px;flex-wrap:wrap;margin-top:20px}",
    ".cookie-btn{flex:1 1 150px;min-height:44px;padding:10px 16px;border:1px solid var(--border-strong);border-radius:999px;background:rgba(255,255,255,.07);color:var(--text);font:600 .88rem var(--font-display);cursor:pointer}",
    ".cookie-btn:hover,.cookie-btn:focus-visible{background:rgba(124,92,255,.18);border-color:var(--accent-1);outline:none}",
    ".cookie-settings-trigger{position:fixed;z-index:999;left:18px;bottom:18px;padding:8px 13px;border:1px solid var(--border);border-radius:999px;background:rgba(10,12,22,.86);color:var(--text-dim);font:500 .76rem var(--font-display);cursor:pointer;backdrop-filter:blur(18px);-webkit-backdrop-filter:blur(18px)}",
    ".cookie-settings-trigger:hover,.cookie-settings-trigger:focus-visible{color:var(--text);border-color:var(--border-strong);outline:none}",
    ".cookie-dialog{position:fixed;z-index:1100;inset:0;display:grid;place-items:center;padding:24px;background:rgba(3,4,10,.72);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px)}",
    ".cookie-dialog-card{position:relative;width:min(620px,100%);max-height:calc(100svh - 48px);overflow:auto;padding:28px;background:linear-gradient(150deg,rgba(24,26,43,.99),rgba(12,14,25,.99));border:1px solid var(--border-strong);border-radius:24px;box-shadow:0 24px 80px rgba(0,0,0,.65),inset 0 1px 0 var(--highlight)}",
    ".cookie-close{position:absolute;top:15px;right:15px;width:38px;height:38px;border:1px solid var(--border);border-radius:50%;background:rgba(255,255,255,.05);color:var(--text);font-size:1.3rem;line-height:1;cursor:pointer}",
    ".cookie-close:hover,.cookie-close:focus-visible{border-color:var(--border-strong);outline:none}",
    ".cookie-categories{display:grid;gap:12px;margin-top:22px}",
    ".cookie-category{display:grid;grid-template-columns:1fr auto;gap:6px 16px;padding:17px 18px;border:1px solid var(--border);border-radius:16px;background:rgba(255,255,255,.035)}",
    ".cookie-category h3{font-size:.98rem}",
    ".cookie-category p{grid-column:1/-1;color:var(--text-dim);font-size:.84rem;line-height:1.5}",
    ".cookie-status{align-self:start;color:var(--accent-2);font:600 .72rem var(--font-display);text-transform:uppercase;letter-spacing:.06em}",
    ".cookie-dialog-actions{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-top:22px}",
    ".cookie-dialog-actions .cookie-btn{width:100%;padding-inline:12px}",
    "@media(max-width:640px){.cookie-banner{right:12px;bottom:12px;width:calc(100% - 24px);padding:20px}.cookie-actions{display:grid}.cookie-btn{width:100%}.cookie-dialog{padding:12px}.cookie-dialog-card{max-height:calc(100svh - 24px);padding:24px 18px}.cookie-dialog-actions{grid-template-columns:1fr}.cookie-settings-trigger{left:12px;bottom:12px}}"
  ].join("");
  document.head.appendChild(consentStyle);

  var consentUi = document.createElement("div");
  consentUi.className = "cookie-consent";
  consentUi.innerHTML = [
    '<section class="cookie-banner" id="cookieBanner" aria-labelledby="cookieBannerTitle" aria-live="polite" hidden>',
    '  <h2 id="cookieBannerTitle" data-i18n="cookie.banner.title">Your privacy choices</h2>',
    '  <p data-i18n="cookie.banner.desc">This site uses optional Google Analytics cookies to understand visits. You can accept them or review the settings.</p>',
    '  <div class="cookie-actions">',
    '    <button class="cookie-btn" id="cookieAccept" type="button" data-i18n="cookie.accept">Accept cookies</button>',
    '    <button class="cookie-btn" id="cookieOpenSettings" type="button" data-i18n="cookie.settings">Cookie settings</button>',
    "  </div>",
    "</section>",
    '<button class="cookie-settings-trigger" id="cookieSettingsTrigger" type="button" data-i18n="cookie.settings" hidden>Cookie settings</button>',
    '<section class="cookie-dialog" id="cookieDialog" role="dialog" aria-modal="true" aria-labelledby="cookieDialogTitle" hidden>',
    '  <div class="cookie-dialog-card">',
    '    <button class="cookie-close" id="cookieClose" type="button" data-i18n-aria-label="cookie.close" aria-label="Close cookie settings">×</button>',
    '    <h2 id="cookieDialogTitle" data-i18n="cookie.dialog.title">Cookie settings</h2>',
    '    <p data-i18n="cookie.dialog.desc">Choose how this site may use cookies. You can change your choice at any time.</p>',
    '    <div class="cookie-categories">',
    '      <div class="cookie-category">',
    '        <h3 data-i18n="cookie.necessary.title">Necessary storage</h3>',
    '        <span class="cookie-status" data-i18n="cookie.always">Always active</span>',
    '        <p data-i18n="cookie.necessary.desc">Used only to remember language and privacy choices. It does not track you.</p>',
    "      </div>",
    '      <div class="cookie-category">',
    '        <h3 data-i18n="cookie.analytics.title">Analytics cookies</h3>',
    '        <span class="cookie-status" data-i18n="cookie.optional">Optional</span>',
    '        <p data-i18n="cookie.analytics.desc">Google Analytics helps measure visits and page usage.</p>',
    "      </div>",
    "    </div>",
    '    <div class="cookie-dialog-actions">',
    '      <button class="cookie-btn" id="cookieNecessary" type="button" data-i18n="cookie.necessaryOnly">Accept necessary only</button>',
    '      <button class="cookie-btn" id="cookieAcceptAll" type="button" data-i18n="cookie.acceptAll">Accept all</button>',
    '      <button class="cookie-btn" id="cookieReject" type="button" data-i18n="cookie.reject">Reject cookies</button>',
    "    </div>",
    "  </div>",
    "</section>"
  ].join("");
  document.body.appendChild(consentUi);

  var cookieBanner = document.getElementById("cookieBanner");
  var cookieDialog = document.getElementById("cookieDialog");
  var cookieSettingsTrigger = document.getElementById("cookieSettingsTrigger");
  var cookieClose = document.getElementById("cookieClose");
  var previousCookieFocus = null;

  function getConsentChoice() {
    try { return localStorage.getItem(consentStorageKey); } catch (e) { return null; }
  }

  function setConsentChoice(choice) {
    try { localStorage.setItem(consentStorageKey, choice); } catch (e) { /* ignore */ }
  }

  function deleteAnalyticsCookies() {
    var names = ["_ga", "_ga_XT6B4GY7GV"];
    document.cookie.split(";").forEach(function (part) {
      var name = part.split("=")[0].trim();
      if (name.indexOf("_ga") === 0 && names.indexOf(name) === -1) names.push(name);
    });

    names.forEach(function (name) {
      document.cookie = name + "=; Max-Age=0; path=/; SameSite=Lax";
      document.cookie = name + "=; Max-Age=0; path=/; domain=" + location.hostname + "; SameSite=Lax";
      document.cookie = name + "=; Max-Age=0; path=/; domain=." + location.hostname + "; SameSite=Lax";
    });
  }

  function updateGoogleConsent(choice) {
    var state = choice === "all" ? "granted" : "denied";
    window.gtag("consent", "update", {
      ad_storage: state,
      ad_user_data: state,
      ad_personalization: state,
      analytics_storage: state
    });
    if (state === "denied") deleteAnalyticsCookies();
  }

  function finishConsent(choice) {
    setConsentChoice(choice);
    updateGoogleConsent(choice);
    cookieBanner.hidden = true;
    cookieDialog.hidden = true;
    cookieSettingsTrigger.hidden = false;
    cookieSettingsTrigger.focus();
  }

  function openCookieSettings() {
    previousCookieFocus = document.activeElement;
    cookieBanner.hidden = true;
    cookieSettingsTrigger.hidden = true;
    cookieDialog.hidden = false;
    document.getElementById("cookieNecessary").focus();
  }

  function closeCookieSettings() {
    cookieDialog.hidden = true;
    if (getConsentChoice()) {
      cookieSettingsTrigger.hidden = false;
    } else {
      cookieBanner.hidden = false;
    }
    if (previousCookieFocus) previousCookieFocus.focus();
  }

  document.getElementById("cookieAccept").addEventListener("click", function () { finishConsent("all"); });
  document.getElementById("cookieOpenSettings").addEventListener("click", openCookieSettings);
  cookieSettingsTrigger.addEventListener("click", openCookieSettings);
  cookieClose.addEventListener("click", closeCookieSettings);
  document.getElementById("cookieNecessary").addEventListener("click", function () { finishConsent("necessary"); });
  document.getElementById("cookieAcceptAll").addEventListener("click", function () { finishConsent("all"); });
  document.getElementById("cookieReject").addEventListener("click", function () { finishConsent("rejected"); });
  cookieDialog.addEventListener("click", function (event) {
    if (event.target === cookieDialog) closeCookieSettings();
  });
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && !cookieDialog.hidden) closeCookieSettings();
  });

  if (getConsentChoice()) {
    cookieSettingsTrigger.hidden = false;
  } else {
    cookieBanner.hidden = false;
  }

  var savedLang = "en";
  try { savedLang = localStorage.getItem("lang") || "en"; } catch (e) { /* ignore */ }
  if (savedLang !== "en") setLang(savedLang);

  /* =====================================================
     Navigation
     ===================================================== */
  var nav = document.getElementById("nav");
  function onNavScroll() { nav.classList.toggle("scrolled", window.scrollY > 24); }
  onNavScroll();
  window.addEventListener("scroll", onNavScroll, { passive: true });

  var toggle = document.getElementById("navToggle");
  var links = document.getElementById("navLinks");
  toggle.addEventListener("click", function () {
    var open = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  links.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", function () {
      links.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });

  /* =====================================================
     3D solar system background
     ===================================================== */
  var canvas = document.getElementById("scene");
  var ctx = canvas.getContext("2d");
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var W = 0, H = 0, DPR = 1;
  function resize() {
    DPR = Math.min(window.devicePixelRatio || 1, 2);
    W = window.innerWidth;
    H = window.innerHeight;
    canvas.width = Math.round(W * DPR);
    canvas.height = Math.round(H * DPR);
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
  }
  resize();
  window.addEventListener("resize", function () {
    resize();
    if (reduceMotion) render(0);
  });

  /* Orbit plane tilt (viewing angle) and perspective depth.
     A lower PERSPECTIVE value gives stronger foreshortening,
     so the 3D perspective of the scene is clearly visible. */
  var TILT = Math.PI / 4;        // 45° camera elevation
  var COS_T = Math.cos(TILT);
  var SIN_T = Math.sin(TILT);
  var ROLL = -Math.PI / 4;       // scene roll — camera sits up-left of the system
  var COS_R = Math.cos(ROLL);
  var SIN_R = Math.sin(ROLL);
  var PERSPECTIVE = 900;

  /* The eight planets in their own vivid colors — one flat
     color per planet (Mercury → Neptune). */
  var PLANETS = [
    { r: 0.14, size: 4,  color: "#cfd2dc", speed: 2.30 },              // Mercury
    { r: 0.22, size: 7,  color: "#ffc94d", speed: 1.60 },              // Venus
    { r: 0.31, size: 7,  color: "#3b8bff", speed: 1.15 },              // Earth
    { r: 0.40, size: 5,  color: "#ff5a36", speed: 0.90 },              // Mars
    { r: 0.53, size: 13, color: "#ffa14d", speed: 0.60 },              // Jupiter
    { r: 0.67, size: 11, color: "#ffd98a", speed: 0.45, ring: true },  // Saturn
    { r: 0.80, size: 8,  color: "#5ee6f0", speed: 0.34 },              // Uranus
    { r: 0.92, size: 8,  color: "#4f6dff", speed: 0.27 }               // Neptune
  ];

  /* Deterministic pseudo-random generator for the static fields. */
  var seed = 42;
  function rnd() { seed = (seed * 16807) % 2147483647; return seed / 2147483647; }

  /* Starfield — each star has its own twinkle rate and phase. */
  var STARS = [];
  (function () {
    for (var i = 0; i < 80; i++) {
      STARS.push({
        x: rnd(), y: rnd(),
        s: rnd() * 1.5 + 0.5,
        a: rnd() * 0.4 + 0.15,
        rate: rnd() * 1.6 + 0.4,
        phase: rnd() * Math.PI * 2
      });
    }
  })();

  /* Kuiper belt — a scattered ring of icy bodies beyond Neptune. */
  var KUIPER = [];
  (function () {
    for (var i = 0; i < 260; i++) {
      KUIPER.push({
        r: 1.04 + rnd() * 0.26,
        a0: rnd() * Math.PI * 2,
        size: rnd() * 1.3 + 0.4,
        alpha: rnd() * 0.3 + 0.12,
        speed: 0.17 + rnd() * 0.06
      });
    }
  })();

  var BASE_SPEED = 0.05;         // rad/s when idle
  var MAX_BOOST = 2.4;           // cap for scroll-driven extra speed
  var angle = 0;
  var boost = 0;
  var lastScrollY = window.scrollY;

  /* Scroll parallax — the whole system drifts gently toward the
     upper left as the page scrolls, easing after the scrollbar. */
  var PAR_X = -0.03;
  var PAR_Y = -0.08;
  var parX = window.scrollY * PAR_X;
  var parY = window.scrollY * PAR_Y;

  window.addEventListener("scroll", function () {
    var delta = Math.abs(window.scrollY - lastScrollY);
    lastScrollY = window.scrollY;
    boost = Math.min(boost + delta * 0.0045, MAX_BOOST);
  }, { passive: true });

  /* Orbit lies in the xz-plane; tilt it around the x-axis,
     project with perspective, then roll the screen-space result
     so the whole system reads as seen from the upper left. */
  function project(r, a, unit) {
    var px = Math.cos(a) * r;
    var pz = Math.sin(a) * r;
    var y = -pz * SIN_T;
    var z = pz * COS_T;
    var scale = PERSPECTIVE / (PERSPECTIVE + z * unit);
    var sx = px * unit * scale;
    var sy = y * unit * scale;
    return {
      x: sx * COS_R - sy * SIN_R,
      y: sx * SIN_R + sy * COS_R,
      scale: scale,
      depth: z
    };
  }

  function render(t) {
    ctx.clearRect(0, 0, W, H);

    var cx = W / 2 + parX;
    var cy = H * 0.46 + parY;
    var unit = Math.min(W, H) * 0.62;

    /* Stars — twinkling points with a soft glow halo */
    var i, sec = t / 1000;
    for (i = 0; i < STARS.length; i++) {
      var st = STARS[i];
      var tw = 0.65 + 0.35 * Math.sin(sec * st.rate + st.phase);
      var sx = st.x * W, sy = st.y * H;

      if (st.s > 1.1) {
        var halo = ctx.createRadialGradient(sx, sy, 0, sx, sy, st.s * 6);
        halo.addColorStop(0, "rgba(201, 210, 255, " + (st.a * tw * 0.5) + ")");
        halo.addColorStop(1, "rgba(201, 210, 255, 0)");
        ctx.fillStyle = halo;
        ctx.beginPath();
        ctx.arc(sx, sy, st.s * 6, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalAlpha = st.a * tw;
      ctx.fillStyle = "#dde4ff";
      ctx.beginPath();
      ctx.arc(sx, sy, st.s * 0.7, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;

    /* Orbit paths (sampled with the same projection as the planets) */
    ctx.strokeStyle = "rgba(140, 150, 220, 0.10)";
    ctx.lineWidth = 1;
    var STEPS = 72;
    for (i = 0; i < PLANETS.length; i++) {
      ctx.beginPath();
      for (var s = 0; s <= STEPS; s++) {
        var q = project(PLANETS[i].r, (s / STEPS) * Math.PI * 2, unit);
        if (s === 0) ctx.moveTo(cx + q.x, cy + q.y);
        else ctx.lineTo(cx + q.x, cy + q.y);
      }
      ctx.stroke();
    }

    /* Kuiper belt — icy bodies orbiting beyond the planets */
    ctx.fillStyle = "#aecbe8";
    for (i = 0; i < KUIPER.length; i++) {
      var k = KUIPER[i];
      var kp = project(k.r, k.a0 + angle * k.speed, unit);
      ctx.globalAlpha = k.alpha * (kp.depth > 0 ? 0.55 : 1);
      ctx.beginPath();
      ctx.arc(cx + kp.x, cy + kp.y, k.size * kp.scale, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;

    /* Positions */
    var back = [], front = [];
    for (i = 0; i < PLANETS.length; i++) {
      var pl = PLANETS[i];
      var p = project(pl.r, angle * pl.speed + i * 2.3, unit);
      p.planet = pl;
      (p.depth > 0 ? back : front).push(p);
    }
    back.sort(function (m, n) { return n.depth - m.depth; });
    front.sort(function (m, n) { return n.depth - m.depth; });

    function drawPlanet(p) {
      var x = cx + p.x;
      var y = cy + p.y;
      var size = p.planet.size * p.scale;
      var dim = p.depth > 0 ? 0.55 : 1;

      if (p.planet.ring) {
        ctx.strokeStyle = p.planet.color;
        ctx.globalAlpha = 0.45 * dim;
        ctx.lineWidth = 1.6 * p.scale;
        ctx.beginPath();
        ctx.ellipse(x, y, size * 2.1, size * 0.75, ROLL - 0.35, 0, Math.PI * 2);
        ctx.stroke();
        ctx.globalAlpha = 1;
      }

      /* Soft halo in the planet's own color, then a flat
         single-color body — no shading gradients. */
      var halo = ctx.createRadialGradient(x, y, size * 0.5, x, y, size * 2.6);
      halo.addColorStop(0, p.planet.color);
      halo.addColorStop(1, "rgba(0,0,0,0)");
      ctx.globalAlpha = 0.22 * dim;
      ctx.fillStyle = halo;
      ctx.beginPath();
      ctx.arc(x, y, size * 2.6, 0, Math.PI * 2);
      ctx.fill();

      ctx.globalAlpha = dim;
      ctx.fillStyle = p.planet.color;
      ctx.beginPath();
      ctx.arc(x, y, size, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalAlpha = 1;
    }

    back.forEach(drawPlanet);

    /* Sun — warm yellow core with a golden glow */
    var sunR = Math.max(unit * 0.055, 26);
    var glow = ctx.createRadialGradient(cx, cy, 0, cx, cy, sunR * 5);
    glow.addColorStop(0, "rgba(255, 200, 64, 0.55)");
    glow.addColorStop(0.35, "rgba(255, 150, 40, 0.14)");
    glow.addColorStop(1, "rgba(0, 0, 0, 0)");
    ctx.fillStyle = glow;
    ctx.beginPath();
    ctx.arc(cx, cy, sunR * 5, 0, Math.PI * 2);
    ctx.fill();

    var core = ctx.createRadialGradient(cx - sunR * 0.3, cy - sunR * 0.3, sunR * 0.1, cx, cy, sunR);
    core.addColorStop(0, "#fffbe6");
    core.addColorStop(0.35, "#ffe27a");
    core.addColorStop(0.75, "#ffc124");
    core.addColorStop(1, "#c97e00");
    ctx.fillStyle = core;
    ctx.beginPath();
    ctx.arc(cx, cy, sunR, 0, Math.PI * 2);
    ctx.fill();

    front.forEach(drawPlanet);

    /* Readability vignette over the scene */
    var vg = ctx.createRadialGradient(cx, cy, unit * 0.1, cx, cy, unit * 1.15);
    vg.addColorStop(0, "rgba(7, 8, 15, 0.18)");
    vg.addColorStop(1, "rgba(7, 8, 15, 0.62)");
    ctx.fillStyle = vg;
    ctx.fillRect(0, 0, W, H);
  }

  if (reduceMotion) {
    render(0);
  } else {
    var lastT = performance.now();
    (function frame(now) {
      var dt = Math.min((now - lastT) / 1000, 0.05);
      lastT = now;
      angle += (BASE_SPEED + boost) * dt;
      boost *= Math.pow(0.35, dt);   // ease back to base speed when idle
      var ease = 1 - Math.pow(0.002, dt);  // lag slightly behind the scrollbar
      parX += (lastScrollY * PAR_X - parX) * ease;
      parY += (lastScrollY * PAR_Y - parY) * ease;
      render(now);
      requestAnimationFrame(frame);
    })(lastT);
  }
})();
