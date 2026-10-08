/* HT DATA — tương tác phía trình duyệt. Không phụ thuộc thư viện. */
(function () {
  'use strict';
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var mq = window.matchMedia('(max-width: 1023.98px)');

  /* ── Dropdown menu (desktop) ─────────────────────── */
  var dds = $$('.nav-dd');
  function closeDd(except) {
    dds.forEach(function (d) {
      if (d === except) return;
      d.classList.remove('open');
      $('button', d).setAttribute('aria-expanded', 'false');
    });
  }
  // Chuột: click giống hover — click chỉ mở, rời chuột khỏi mục menu là đóng.
  // Bàn phím / màn cảm ứng (không có hover): click bật/tắt như cũ.
  var canHover = window.matchMedia('(hover: hover) and (pointer: fine)');
  dds.forEach(function (d) {
    var b = $('button', d);
    d.addEventListener('mouseleave', function () {
      if (!canHover.matches) return;
      closeDd();
      if (d.contains(document.activeElement)) document.activeElement.blur();
    });
    b.addEventListener('click', function (e) {
      e.stopPropagation();
      var byMouse = e.detail > 0 && canHover.matches;
      var open = byMouse ? true : !d.classList.contains('open');
      closeDd(d);
      d.classList.toggle('open', open);
      b.setAttribute('aria-expanded', String(open));
      if (open) { var first = $('.dd-menu a', d); if (first && e.detail === 0) first.focus(); }
    });
    d.addEventListener('focusout', function (e) { if (!d.contains(e.relatedTarget)) closeDd(); });
  });
  document.addEventListener('click', function () { closeDd(); });
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    var openDd = $('.nav-dd.open');
    closeDd();
    if (openDd) $('button', openDd).focus();
    setMenu(false);
    closeLb();
  });

  /* ── Menu mobile ─────────────────────────────────── */
  var menuBtn = $('.menu-btn');
  function setMenu(open) {
    if (!menuBtn) return;
    document.documentElement.classList.toggle('menu-open', open);
    menuBtn.setAttribute('aria-expanded', String(open));
    menuBtn.setAttribute('aria-label', open ? 'Đóng menu' : 'Mở menu');
  }
  if (menuBtn) menuBtn.addEventListener('click', function () {
    setMenu(!document.documentElement.classList.contains('menu-open'));
  });

  /* ── Thẻ → accordion trên mobile: chỉ mở thẻ đầu ─── */
  function syncAcc() {
    $$('.acc-grid').forEach(function (g) {
      $$(':scope > .acc', g).forEach(function (d, i) {
        if (mq.matches) d.open = i === 0; else d.open = true;
      });
    });
    $$('.opt-group').forEach(function (d) { d.open = !mq.matches; });
  }
  syncAcc();
  if (mq.addEventListener) mq.addEventListener('change', syncAcc); else mq.addListener(syncAcc);

  /* ── Dải thẻ trượt ngang + chỉ báo vị trí ────────── */
  $$('[data-hscroll]').forEach(function (row) {
    var dots = row.nextElementSibling;
    if (!dots || !dots.classList.contains('hs-dots')) return;
    var n = row.children.length;
    dots.innerHTML = new Array(n + 1).join('<span></span>');
    var spans = $$('span', dots);
    function upd() {
      var w = row.children[0] ? row.children[0].getBoundingClientRect().width + 12 : 1;
      var i = Math.min(n - 1, Math.round(row.scrollLeft / w));
      spans.forEach(function (s, k) { s.classList.toggle('is-on', k === i); });
    }
    row.addEventListener('scroll', upd, { passive: true });
    upd();
  });

  /* ── Lọc dự án theo ?nhom= / ?dich-vu= ───────────── */
  var plist = $('[data-plist]');
  if (plist) {
    var q = new URLSearchParams(location.search);
    var nhom = q.get('nhom'), dv = q.get('dich-vu');
    var shown = 0;
    $$('.prow', plist).forEach(function (r) {
      var ok = (!nhom || r.getAttribute('data-nhom') === nhom) && (!dv || r.getAttribute('data-dich-vu') === dv);
      r.hidden = !ok;
      if (ok) shown++;
    });
    $('[data-empty]', plist).hidden = shown > 0;
    var key = nhom ? 'nhom=' + nhom : dv ? 'dich-vu=' + dv : '';
    $$('.chips .chip').forEach(function (c) {
      var on = (c.getAttribute('data-key') || '') === key;
      c.classList.toggle('is-on', on);
      if (on) c.setAttribute('aria-current', 'true'); else c.removeAttribute('aria-current');
    });
    var extra = $('[data-filter-note]');
    if (extra && dv && !nhom) {
      var lbl = extra.getAttribute('data-' + dv);
      if (lbl) { extra.textContent = 'Đang lọc theo dịch vụ: ' + lbl + '. '; extra.hidden = false; }
    }
  }

  /* ── Lightbox ────────────────────────────────────── */
  var lb = $('.lb'), lastFocus = null;
  function openLb(node) {
    if (!lb) return;
    lastFocus = document.activeElement;
    var media = node.querySelector('.media') || node;
    var clone = media.cloneNode(true);
    clone.className = 'media';
    $('.lb-inner', lb).innerHTML = '';
    $('.lb-inner', lb).appendChild(clone);
    lb.classList.add('open');
    $('.lb-close', lb).focus();
  }
  function closeLb() {
    if (!lb || !lb.classList.contains('open')) return;
    lb.classList.remove('open');
    if (lastFocus) lastFocus.focus();
  }
  if (lb) {
    lb.addEventListener('click', function (e) { if (e.target === lb || e.target.closest('.lb-close')) closeLb(); });
  }
  $$('.zoomable').forEach(function (z) {
    z.setAttribute('tabindex', '0');
    z.setAttribute('role', 'button');
    z.setAttribute('aria-label', 'Phóng to ảnh');
    z.addEventListener('click', function () { openLb(z); });
    z.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openLb(z); } });
  });

  /* ── Thư viện ảnh case study ─────────────────────── */
  $$('[data-gallery]').forEach(function (g) {
    var slides = $$('.g-slide', g), thumbs = $$('.g-thumb', g), idx = 0;
    var counter = $('[data-i]', g);
    function go(i) {
      idx = (i + slides.length) % slides.length;
      slides.forEach(function (s, k) { s.classList.toggle('is-on', k === idx); });
      thumbs.forEach(function (t, k) { t.classList.toggle('is-on', k === idx); });
      if (counter) counter.textContent = idx + 1;
    }
    $('.g-prev', g).addEventListener('click', function () { go(idx - 1); });
    $('.g-next', g).addEventListener('click', function () { go(idx + 1); });
    thumbs.forEach(function (t, k) { t.addEventListener('click', function () { go(k); }); });
    var x0 = null;
    var main = $('.gallery-main', g);
    main.addEventListener('touchstart', function (e) { x0 = e.touches[0].clientX; }, { passive: true });
    main.addEventListener('touchend', function (e) {
      if (x0 === null) return;
      var dx = e.changedTouches[0].clientX - x0;
      if (Math.abs(dx) > 40) go(idx + (dx < 0 ? 1 : -1));
      x0 = null;
    });
  });

  /* ── Lên đầu trang ───────────────────────────────── */
  var top = $('.to-top');
  if (top) {
    var onScroll = function () { top.classList.toggle('show', window.scrollY > 700); };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ── Form liên hệ ────────────────────────────────── */
  var form = $('#survey-form');
  if (form) {
    var q2 = new URLSearchParams(location.search);
    var need = form.elements.need;
    if (q2.has('demo') && need && !need.value) {
      need.value = 'Đăng ký demo phần mềm: ';
      var t = $('[data-form-title]');
      if (t) t.textContent = 'Đăng ký demo phần mềm';
    }
    var rules = {
      name: function (v) { return v.trim().length >= 2; },
      org: function (v) { return v.trim().length >= 2; },
      phone: function (v) { var d = v.replace(/[\s.\-()]/g, ''); return /^(\+?84|0)\d{9,10}$/.test(d); },
      email: function (v) { return !v.trim() || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()); },
      need: function (v) { return v.trim().length >= 5; },
    };
    function check(name) {
      var el = form.elements[name];
      if (!el || !rules[name]) return true;
      var ok = rules[name](el.value);
      var box = el.closest('.f');
      box.classList.toggle('invalid', !ok);
      el.setAttribute('aria-invalid', String(!ok));
      return ok;
    }
    Object.keys(rules).forEach(function (n) {
      var el = form.elements[n];
      if (!el) return;
      el.addEventListener('blur', function () { if (el.value) check(n); });
      el.addEventListener('input', function () { if (el.closest('.f').classList.contains('invalid')) check(n); });
    });
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var bad = Object.keys(rules).filter(function (n) { return !check(n); });
      var msg = $('.form-msg', form);
      if (bad.length) {
        form.elements[bad[0]].focus();
        msg.textContent = 'Vui lòng kiểm tra các trường được đánh dấu.';
        return;
      }
      if (form.elements._honey && form.elements._honey.value) return;
      msg.textContent = '';
      var btnEl = $('button[type=submit]', form);
      var label = btnEl.textContent;
      btnEl.disabled = true;
      btnEl.textContent = 'Đang gửi…';
      var now = new Date();
      var code = 'KS-' + ('0' + now.getDate()).slice(-2) + ('0' + (now.getMonth() + 1)).slice(-2) + '-' + String(Math.floor(Math.random() * 900) + 100);
      var data = {};
      new FormData(form).forEach(function (val, k) { data[k] = val; });
      data['Mã theo dõi'] = code;
      data._subject = 'Yêu cầu khảo sát ' + code + ' — ' + (data.org || '');
      data._template = 'table';
      data._captcha = 'false';
      fetch(window.HT.form, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
      })
        .then(function (r) { return r.json().catch(function () { return {}; }).then(function (j) { if (!r.ok || j.success === 'false' || j.success === false) throw new Error(j.message || 'send'); }); })
        .then(function () {
          form.hidden = true;
          var ok = $('.form-ok');
          $('.code', ok).textContent = code;
          $('[data-email-note]', ok).hidden = !data.email;
          ok.classList.add('show');
          ok.setAttribute('tabindex', '-1');
          ok.focus();
        })
        .catch(function () {
          btnEl.disabled = false;
          btnEl.textContent = label;
          msg.innerHTML = 'Chưa gửi được yêu cầu. Vui lòng gọi <a href="tel:0911515032">0911.515.032</a> hoặc gửi email tới <a href="mailto:' + window.HT.email + '">' + window.HT.email + '</a>.';
        });
    });
  }
})();
