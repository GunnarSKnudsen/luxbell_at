/**
 * LUXbell - Single-page app: navigation and content rendering
 */
(function () {
  'use strict';

  const IMG_PATH = 'images/';
  function getContent() {
    var lang = typeof getLang === 'function' ? getLang() : 'de';
    var data = typeof LUXBELL_CONTENT !== 'undefined' ? LUXBELL_CONTENT[lang] || LUXBELL_CONTENT.de : {};
    return data;
  }

  function getPageId() {
    var CONTENT = getContent();
    var hash = window.location.hash.slice(1) || 'home';
    var validIds = CONTENT.nav && CONTENT.nav.map(function (n) { return n.id; });
    if (validIds && validIds.indexOf(hash) !== -1) return hash;
    if (hash === 'impressum') return hash;
    return 'home';
  }

  function setActiveNav(pageId) {
    document.querySelectorAll('.nav-list a').forEach(function (a) {
      a.classList.toggle('active', a.getAttribute('data-page') === pageId);
    });
  }

  function renderContactCards(CONTENT) {
    var c = CONTENT.contact;
    if (!c) return '';
    return (
      '<div class="contact-cards">' +
      '<div class="contact-card"><img src="' + IMG_PATH + 'icon-telefon.png" alt="Telefon" loading="lazy"/><strong>' + (c.phone || '') + '</strong></div>' +
      '<div class="contact-card"><img src="' + IMG_PATH + 'icon-post.png" alt="Adresse" loading="lazy"/>' +
      '<strong>' + (c.address || '') + '<br>' + (c.postalCode || '') + ' ' + (c.city || '') + '</strong></div>' +
      '<div class="contact-card"><img src="' + IMG_PATH + 'icon-email.png" alt="E-Mail" loading="lazy"/>' +
      '<a href="mailto:' + (c.email || '') + '">' + (c.email || '') + '</a></div>' +
      '</div>'
    );
  }

  function legalIds(l) {
    return [l.tradeRegister, l.vatId, l.gisa, l.taxNumber].filter(Boolean).join(' | ');
  }

  function renderLegalFooter(CONTENT) {
    var l = CONTENT.legal;
    if (!l) return '';
    var footerText = CONTENT.pages && CONTENT.pages.home ? CONTENT.pages.home.footer || '' : '';
    return (
      '<div class="legal-footer">' +
      '<p>' + footerText + '</p>' +
      '<p>' + legalIds(l) + '</p>' +
      '<p>' + (l.authority || '') + '</p>' +
      '</div>'
    );
  }

  function renderPage(pageId) {
    var CONTENT = getContent();
    var pages = CONTENT.pages || {};
    var page = pages[pageId];
    var legal = CONTENT.legal || {};
    var notFoundText = CONTENT.langLabel === 'EN' ? 'Page not found.' : 'Seite nicht gefunden.';

    if (pageId === 'impressum') {
      var imp = CONTENT.impressum || {};
      return (
        '<div class="page-content impressum-page">' +
        '<h1 class="page-title">' + (imp.title || 'Impressum') + '</h1>' +
        '<div class="impressum-block">' +
        '<p><strong>' + (imp.companyFull || CONTENT.companyName) + '</strong></p>' +
        '<p>' + (CONTENT.contact ? CONTENT.contact.address + '<br>' + CONTENT.contact.postalCode + ' ' + CONTENT.contact.city : '') + '</p>' +
        '<p>Tel. ' + (CONTENT.contact ? CONTENT.contact.phone : '') + '<br>Web: ' + (CONTENT.contact ? CONTENT.contact.web : '') + '<br>Mail: ' + (CONTENT.contact ? CONTENT.contact.email : '') + '</p>' +
        (imp.wkoLink ? '<p><a href="' + imp.wkoLink + '" target="_blank" rel="noopener">' + (imp.wkoLabel || 'WKO Eintrag') + '</a></p>' : '') +
        '</div>' +
        '<div class="impressum-block">' +
        '<p>' + [legal.tradeRegister, legal.vatId, legal.gisa, legal.taxNumber].filter(Boolean).join('<br>') + '<br><br>' + (legal.authority || '') + '</p>' +
        '</div>' +
        '<p class="content-body"><small>Datenschutz: Bitte bei Bedarf eine eigene Datenschutzerklärung ergänzen (z.B. von einem Generator).</small></p>' +
        '</div>'
      );
    }

    if (!page) {
      return '<div class="page-content"><p>' + notFoundText + '</p></div>';
    }

    var html = '<div class="page-content">';
    html += '<h1 class="page-title">' + (page.title || '') + '</h1>';

    if (page.bannerImage) {
      html += '<img class="hero-image" src="' + IMG_PATH + page.bannerImage + '" alt="' + (page.title || '') + '"/>';
    } else if (page.heroImage) {
      html += '<img class="hero-image" src="' + IMG_PATH + page.heroImage + '" alt="' + (page.title || '') + '"/>';
    }

    if (page.lead) {
      html += '<p class="content-lead">' + page.lead + '</p>';
    }
    if (page.sub) {
      html += '<p class="content-body text-center">' + page.sub + '</p>';
    }
    if (page.intro) {
      html += '<p class="content-body">' + page.intro + '</p>';
    }
    if (page.cta) {
      html += '<p class="content-cta">' + page.cta + '</p>';
    }

    if (pageId === 'home') {
      html += renderContactCards(CONTENT);
    }

    if (page.body) {
      html += '<div class="content-body"><p>' + page.body + '</p></div>';
    }
    // Products use the same image + text flow as the Holz / Holz-Alu pages
    if (page.products && page.products.length) {
      page.products.forEach(function (prod) {
        html += '<h2 class="product-title">' + (prod.name || '') + '</h2>';
        if (prod.image) {
          html += '<img class="product-image" src="' + IMG_PATH + prod.image + '" alt="' + (prod.name || '') + '" loading="lazy"/>';
        }
        if (prod.features && prod.features.length) {
          html += '<ul class="content-body product-features"><li>' + prod.features.join('</li><li>') + '</li></ul>';
        }
        if (prod.pdfUrl) {
          html += '<p class="content-body text-center"><a href="' + prod.pdfUrl + '" target="_blank" rel="noopener">Info / Flyer</a></p>';
        }
      });
    }
    if (page.productImage) {
      html += '<img class="product-image" src="' + IMG_PATH + page.productImage + '" alt="" loading="lazy"/>';
    }
    if (page.body2) {
      html += '<div class="content-body"><p>' + page.body2 + '</p></div>';
    }
    if (page.images && page.images.length && pageId !== 'referenzen') {
      page.images.forEach(function (src) {
        html += '<img class="product-image" src="' + IMG_PATH + src + '" alt="" loading="lazy"/>';
      });
    }
    if (page.body3) {
      html += '<div class="content-body"><p>' + page.body3 + '</p></div>';
    }
    if (page.productImage2) {
      html += '<img class="product-image" src="' + IMG_PATH + page.productImage2 + '" alt="" loading="lazy"/>';
    }
    if (page.body4) {
      html += '<div class="content-body"><p>' + page.body4 + '</p></div>';
    }
    if (page.aluImage) {
      var aluImg = '<img class="product-image" src="' + IMG_PATH + page.aluImage + '" alt="PVC Alu" loading="lazy"/>';
      if (page.aluPdfUrl) {
        aluImg = '<a href="' + page.aluPdfUrl + '" target="_blank" rel="noopener">' + aluImg + '</a>';
      }
      html += '<div class="content-body">' + aluImg + '</div>';
    }
    if (page.bannerAlu) {
      html += '<img class="hero-image" src="' + IMG_PATH + page.bannerAlu + '" alt="" loading="lazy"/>';
    }
    if (page.sections && page.sections.length) {
      html += '<div class="section-blocks">';
      page.sections.forEach(function (s) {
        html += '<div class="section-block">';
        html += '<h4>' + s.heading + '</h4>';
        html += '<p>' + s.text + '</p>';
        if (s.sub) html += '<p class="sub">' + s.sub + '</p>';
        html += '</div>';
      });
      html += '</div>';
    }

    if (page.downloads && page.downloads.length) {
      html += '<ul class="download-list">';
      page.downloads.forEach(function (d) {
        html += '<li><a href="' + (d.url || '#') + '" target="_blank" rel="noopener">' + (d.label || '') + '</a></li>';
      });
      html += '</ul>';
    }
    if (page.wartungTitle) {
      html += '<h3 class="content-cta">' + page.wartungTitle + '</h3>';
      html += '<p class="content-body">' + page.wartungIntro + '</p>';
      if (page.wartungList && page.wartungList.length) {
        html += '<ul class="content-body"><li>' + page.wartungList.join('</li><li>') + '</li></ul>';
      }
    }
    if (page.lueftenTitle) {
      html += '<h3 class="content-cta">' + page.lueftenTitle + '</h3>';
      html += '<p class="content-body">' + page.lueftenBody + '</p>';
      if (page.lueftenBody2) {
        html += '<p class="content-body">' + page.lueftenBody2 + '</p>';
      }
    }

    if (pageId === 'ueber-uns' || pageId === 'kontakt') {
      html += renderContactCards(CONTENT);
    }

    if (pageId === 'referenzen') {
      var refs = typeof LUXBELL_REFERENCES !== 'undefined' ? LUXBELL_REFERENCES : [];
      var labels = CONTENT.refLabels || { auftraggeber: 'Auftraggeber', bauvorhaben: 'Bauvorhaben', ausfuehrungsart: 'Ausführungsart', beschreibung: 'Beschreibung' };
      function esc(s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
      function nl2br(s) { return esc(s).replace(/\n/g, '<br>'); }
      if (refs.length) {
        html += '<table class="referenzen-table">';
        html += '<thead><tr>';
        html += '<th>' + esc(labels.auftraggeber) + '</th>';
        html += '<th>' + esc(labels.bauvorhaben) + '</th>';
        html += '<th>' + esc(labels.ausfuehrungsart) + '</th>';
        html += '<th>' + esc(labels.beschreibung) + '</th>';
        html += '</tr></thead><tbody>';
        refs.forEach(function (ref) {
          html += '<tr>';
          html += '<td class="referenz-auftraggeber"><strong>' + nl2br(ref.auftraggeber) + '</strong></td>';
          html += '<td>' + nl2br(ref.bauvorhaben) + '</td>';
          html += '<td>' + nl2br(ref.ausfuehrungsart || '') + '</td>';
          html += '<td>' + nl2br(ref.beschreibung) + '</td>';
          html += '</tr>';
        });
        html += '</tbody></table>';
      } else if (page.intro) {
        html += '<p class="content-body">' + page.intro + '</p>';
      }
    }

    if (pageId === 'home' || pageId === 'ueber-uns') {
      html += renderLegalFooter(CONTENT);
    }
    if (pageId === 'kontakt') {
      html += '<div class="legal-footer"><p>' + legalIds(legal) + '</p><p>' + (legal.authority || '') + '</p></div>';
    }

    html += '</div>';
    return html;
  }

  function initNav() {
    var CONTENT = getContent();
    var nav = CONTENT.nav;
    if (!nav) return;

    var listHtml = '';
    nav.forEach(function (item) {
      listHtml += '<li><a href="#' + item.id + '" data-page="' + item.id + '">' + item.label + '</a></li>';
    });
    var impLabel = CONTENT.impressum && CONTENT.impressum.title ? CONTENT.impressum.title : 'Impressum';
    listHtml += '<li><a href="#impressum" data-page="impressum">' + impLabel + '</a></li>';

    var listEl = document.getElementById('nav-list');
    if (listEl) listEl.innerHTML = listHtml;
  }

  function updateLangSwitcher() {
    var CONTENT = getContent();
    var otherLang = CONTENT.langLabel === 'EN' ? 'de' : 'en';
    var label = CONTENT.langSwitch || (otherLang === 'de' ? 'DE' : 'EN');
    var el = document.getElementById('lang-switcher');
    if (!el) return;
    el.textContent = label;
    el.setAttribute('data-lang', otherLang);
    el.setAttribute('aria-label', otherLang === 'de' ? 'Deutsch' : 'English');
  }

  function updateContent() {
    var CONTENT = getContent();
    var pageId = getPageId();
    var container = document.getElementById('main-content');
    if (container) {
      container.innerHTML = renderPage(pageId);
    }
    setActiveNav(pageId);
    if (typeof document.documentElement !== 'undefined') {
      document.documentElement.lang = typeof getLang === 'function' ? getLang() : 'de';
    }
    var page = CONTENT.pages && CONTENT.pages[pageId];
    if (page) {
      document.title = (page.title || '') + ' - ' + (CONTENT.siteTitle || 'LUXbell');
    } else if (pageId === 'impressum') {
      document.title = (CONTENT.impressum && CONTENT.impressum.title ? CONTENT.impressum.title : 'Impressum') + ' - ' + (CONTENT.siteTitle || 'LUXbell');
    } else {
      document.title = CONTENT.siteTitle || 'LUXbell';
    }
    updateLangSwitcher();
  }

  function init() {
    initNav();
    updateContent();

    window.addEventListener('hashchange', updateContent);

    var toggle = document.getElementById('nav-toggle');
    var nav = document.getElementById('nav');
    if (toggle && nav) {
      toggle.addEventListener('click', function () {
        nav.classList.toggle('is-open');
      });
    }

    var langSwitcher = document.getElementById('lang-switcher');
    if (langSwitcher && typeof setLang === 'function') {
      langSwitcher.addEventListener('click', function () {
        var to = langSwitcher.getAttribute('data-lang');
        if (to === 'de' || to === 'en') {
          setLang(to);
          initNav();
          updateContent();
        }
      });
    }

    document.addEventListener('click', function (e) {
      if (e.target.matches('.nav-list a') && window.innerWidth < 900) {
        var n = document.getElementById('nav');
        if (n) n.classList.remove('is-open');
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
