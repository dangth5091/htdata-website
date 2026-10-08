// Thành phần dùng chung để dựng trang. Mỗi hàm trả về chuỗi HTML.
import { existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { site, nav } from './data/site.mjs';

const ROOT = dirname(fileURLToPath(import.meta.url));
const IMG_DIR = join(ROOT, 'assets', 'img');

export const esc = (s = '') => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const attr = (s = '') => esc(String(s).replace(/<[^>]+>/g, ''));
const join_ = (arr, fn) => (arr || []).map(fn).join('');

/** Số liệu cần đối chiếu: nền vàng gạch chân nét đứt ở chế độ PREVIEW. */
export const v = (s) => `<span class="vf">${s}</span>`;

// ── Icon (Lucide, nét 2px) ─────────────────────────────
export const icon = {
  chev: (c = 'currentColor', s = 16) => `<svg class="chev" width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="${c}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>`,
  left: () => `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#102a4c" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 6l-6 6 6 6"/></svg>`,
  right: () => `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#102a4c" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 6l6 6-6 6"/></svg>`,
  up: () => `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#102a4c" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 15l6-6 6 6"/></svg>`,
  close: () => `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#102a4c" stroke-width="2.2" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>`,
  menu: () => `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#102a4c" stroke-width="2.2" stroke-linecap="round" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg>`,
  image: () => `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.1-3.1a2 2 0 0 0-2.8 0L6 21"/></svg>`,
  phone: (c = '#7f9dc4') => `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="${c}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2Z"/></svg>`,
  mail: (c = '#7f9dc4') => `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="${c}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>`,
  clock: (c = '#7f9dc4') => `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="${c}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>`,
  pin: (c = '#7f9dc4') => `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="${c}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>`,
  check: () => `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1e8e3e" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>`,
};

export const logo = (size = 32, light = false) =>
  `<svg width="${size}" height="${size}" viewBox="0 0 48 48" fill="none" aria-hidden="true"><path d="M0 0H12V20H16V16H28V48H16V28H0Z M0 32H12V48H0Z" fill="${light ? '#4e9af5' : '#1f5fd0'}"/><path d="M11.94 0H48V12H11.94Z M32 16H48V24H44V48H32Z" fill="${light ? '#ffffff' : '#102a4c'}"/></svg>`;

// ── Ảnh: dùng ảnh thật nếu có file assets/img/<id>.*, nếu chưa thì khung chờ ──
export function img(id, alt, ratio = '4-3', cls = '') {
  const file = ['webp', 'jpg', 'jpeg', 'png'].map((e) => `${id}.${e}`).find((f) => existsSync(join(IMG_DIR, f)));
  const inner = file
    ? `<img src="/assets/img/${file}" alt="${attr(alt)}" loading="lazy" decoding="async">`
    : `<div class="ph" role="img" aria-label="${attr(alt)}">${icon.image()}<span>${esc(alt)}</span></div>`;
  return `<div class="media r-${ratio} ${cls}">${inner}</div>`;
}

// ── Khối chữ ──────────────────────────────────────────
export const secHead = ({ title, lead, more }) => `
  <div class="sec-head${more ? ' row' : ''}"><div><h2>${title}</h2>${lead ? `<p class="lead">${lead}</p>` : ''}</div>${more ? `<a class="more" href="${more.href}">${more.text}</a>` : ''}</div>`;

/** Section toàn bề rộng. tone: '' | 'soft' | 'navy' */
export const section = ({ tone = '', id = '', title, lead, more, body, cls = '' }) => `
<section class="sec ${tone} ${cls}"${id ? ` id="${id}"` : ''}><div class="wrap">${title ? secHead({ title, lead, more }) : ''}${body}</div></section>`;

export const dots = (items, cls = '') => `<ul class="dots ${cls}">${join_(items, (t) => `<li>${t}</li>`)}</ul>`;

export const btn = (b) => `<a class="btn ${b.primary === false ? 'btn-s' : 'btn-p'}${b.lg ? ' btn-lg' : ''}" href="${b.href}">${b.text}</a>`;
export const btns = (list = []) => (list.length ? `<div class="btns">${list.map(btn).join('')}</div>` : '');

// ── Thẻ: desktop là thẻ, mobile là accordion (theo khung 375) ──
const accWrap = (acc, cls, summary, body, i) =>
  acc
    ? `<details class="card acc ${cls}" open><summary>${summary}${icon.chev('#1f5fd0')}</summary><div class="acc-body">${body}</div></details>`
    : `<div class="card ${cls}">${summary}${body}</div>`;

/** Thẻ tiêu đề + mô tả. */
export const cards = (items, { cols = 2, acc = true } = {}) => `
  <div class="grid${acc ? ' acc-grid' : ''}" style="--cols:${cols}">${items
    .map((it, i) => accWrap(acc, '', `<p class="card-t">${it.t}</p>`, `<p class="card-d">${it.d}</p>`, i))
    .join('')}</div>`;

/** Thẻ bước có số thứ tự. */
export const steps = (items, { cols = 4, acc = true } = {}) => `
  <div class="grid${acc ? ' acc-grid' : ''}" style="--cols:${cols}">${items
    .map((it, i) => {
      const n = String(i + 1).padStart(2, '0');
      if (!acc) return `<div class="card step card-flex"><span class="num">${n}</span><p class="card-t">${it.t}</p><p class="card-d">${it.d}</p></div>`;
      return `<details class="card acc step card-flex" open><summary><span class="num">${n}</span><p class="card-t">${it.t}</p>${icon.chev('#1f5fd0')}</summary><div class="acc-body"><p class="card-d">${it.d}</p></div></details>`;
    })
    .join('')}</div>`;

/** Thẻ tiêu đề + danh sách chấm. */
export const listCards = (items, { cols = 3, acc = true } = {}) => `
  <div class="grid gap-18${acc ? ' acc-grid' : ''}" style="--cols:${cols}">${items
    .map((it, i) => accWrap(acc, '', `<p class="list-t">${it.t}</p>`, dots(it.items), i))
    .join('')}</div>`;

/** Thẻ liên kết: (nhãn) + tiêu đề + mô tả + CTA. */
export const linkCards = (items, { cols = 3, acc = true } = {}) => `
  <div class="grid${acc ? ' acc-grid' : ''}" style="--cols:${cols}">${items
    .map((it, i) => {
      const k = it.k ? `<span class="label" style="display:block;margin-bottom:8px">${it.k}</span>` : '';
      if (!acc)
        return `<a class="card card-flex" href="${it.href}">${k}<span class="card-t">${it.t}</span><span class="card-d" style="flex:1;margin-bottom:16px">${it.d}</span><span class="card-cta">${it.cta || 'Xem chi tiết →'}</span></a>`;
      return `<details class="card acc card-flex" open><summary>${it.k ? `<span class="label d-only" style="display:block;margin-bottom:8px">${it.k}</span>` : ''}<p class="card-t">${it.t}</p>${icon.chev('#1f5fd0')}</summary><div class="acc-body card-flex" style="flex:1"><p class="card-d" style="flex:1;margin-bottom:16px">${it.d}</p><a class="card-cta" href="${it.href}">${it.cta || 'Xem chi tiết →'}</a></div></details>`;
    })
    .join('')}</div>`;

/** Thẻ trang chủ: tiêu đề + bullet + CTA. whole=true → cả thẻ là link. */
export const bulletCards = (items, { cols = 2, size = '', whole = true, cta = 'Tìm hiểu dịch vụ →' } = {}) => `
  <div class="grid${cols === 2 ? ' gap-18' : ''}" style="--cols:${cols}">${items
    .map((it) =>
      whole
        ? `<a class="card card-flex bcard ${size}" href="${it.href}"><span class="card-t">${it.t}</span>${dots(it.items, 'sm')}<span class="card-cta">${it.cta || cta}</span></a>`
        : `<div class="card card-flex bcard ${size}"><p class="card-t">${it.t}</p>${dots(it.items, 'sm')}<a class="card-link" href="${it.href}">${it.cta || cta}</a></div>`,
    )
    .join('')}</div>`;

/** Ảnh + tiêu đề + mô tả (cơ sở vận hành). */
export const imageCards = (items, { cols = 3, acc = true } = {}) => `
  <div class="grid gap-18${acc ? ' acc-grid' : ''}" style="--cols:${cols}">${items
    .map((it, i) => {
      if (!acc) return `<div class="card icard">${img(it.img, it.alt, '16-10')}<div class="icard-b"><p class="card-t">${it.t}</p><p class="card-d">${it.d}</p></div></div>`;
      return `<details class="card acc icard" open><summary class="m-only"><p class="card-t">${it.t}</p>${icon.chev('#1f5fd0')}</summary><div class="acc-body">${img(it.img, it.alt, '16-10')}<div class="icard-b"><p class="card-t d-only">${it.t}</p><p class="card-d">${it.d}</p></div></div></details>`;
    })
    .join('')}</div>`;

/** Khối nền navy: tiêu đề + mô tả + nút bên trái, lưới thẻ bên phải. */
export const navyBlock = ({ title, lead, cta, items, numbered = false }) => `
<section class="sec navy"><div class="wrap split">
  <div><h2>${title}</h2><p class="lead">${lead}</p>${cta ? `<div class="nav-more d-only"><a class="btn btn-ghost" href="${cta.href}">${cta.text}</a></div>` : ''}</div>
  <div class="grid" style="--cols:2">${items
    .map((it, i) => `<div class="ncard">${numbered ? `<span class="n">${String(i + 1).padStart(2, '0')}</span>` : ''}<p class="t">${it.t}</p><p class="d">${it.d}</p></div>`)
    .join('')}</div>
  ${cta ? `<div class="nav-more m-only"><a class="btn btn-ghost" href="${cta.href}">${cta.text}</a></div>` : ''}
</div></section>`;

/** Bảng nhãn – giá trị. */
export const spec = (rows) => `<dl class="spec">${rows.map(([k, val]) => `<div><dt>${k}</dt><dd>${val}</dd></div>`).join('')}</dl>`;

export const faq = (items) => `
  <div class="faq">${items
    .map((q, i) => `<details${i === 0 ? ' open' : ''}><summary><span>${q.q}</span>${icon.chev('#1f5fd0')}</summary><div class="a">${(Array.isArray(q.a) ? q.a : [q.a]).map((p) => `<p>${p}</p>`).join('')}</div></details>`)
    .join('')}</div>`;

/** CTA cuối trang. */
export const cta = ({ title, text, sub, buttons }) => `
<section class="cta"><div class="wrap">
  <div><h2>${title}</h2><p>${text}</p>${sub ? `<p class="sub">${sub}</p>` : ''}</div>
  <div class="btns">${buttons.map(btn).join('')}</div>
</div></section>`;

export const callBtn = { text: site.hotlineSpaced, href: `tel:${site.hotlineTel}`, primary: false };

/** Dải số liệu / thông tin ngắn. */
export const statStrip = (items) => `
<div class="strip"><div class="wrap" style="--n:${items.length}">${items
  .map((s) => `<div><p class="stat-num">${s.n}</p><p class="stat-lbl">${s.l}</p></div>`)
  .join('')}</div></div>`;

export const factStrip = (items) => `
<div class="strip facts"><div class="wrap" style="--n:${items.length}">${items
  .map(([k, val]) => `<div><p class="label">${k}</p><p class="fact-val">${val}</p></div>`)
  .join('')}</div></div>`;

// ── Dự án ─────────────────────────────────────────────
const metric = (n, unit) => `<span><strong>${v(n)}</strong> <span>${unit}</span></span>`;

/** Thẻ dự án nhỏ (trang chủ, trang dịch vụ). Mobile: trượt ngang. */
export const projectCards = (list) => `
  <div class="grid gap-18 hscroll" style="--cols:3" data-hscroll>${list
    .map((p) => {
      const tag = p.href ? 'a' : 'div';
      return `<${tag} class="pcard"${p.href ? ` href="${p.href}"` : ''}>${img(p.img, p.imgAlt, '16-10')}<div class="pcard-b"><div class="tags"><span class="label">${p.group}</span><span class="pill">${p.service}</span></div><p class="pcard-t">${p.title}</p><p class="pcard-d">${p.short}</p><div class="pcard-m">${metric(p.m[0], 'mét giá')}${metric(p.m[1], 'trang')}${metric(p.m[2], 'hồ sơ')}${metric(p.m[3], 'tháng')}</div></div></${tag}>`;
    })
    .join('')}</div><div class="hs-dots m-only" aria-hidden="true"></div>`;

/** Thẻ dự án ngang (trang danh sách dự án). */
export const projectRows = (list) => `
  <div class="plist" data-plist>${list
    .map((p) => {
      const tag = p.href ? 'a' : 'div';
      const ms = [
        [v(p.m[0]), 'Mét giá tài liệu'],
        [v(p.m[1]), 'Trang đã xử lý'],
        [v(p.m[2]), 'Hồ sơ đã lập / số hóa'],
        [`${v(p.m[3])} <small>tháng</small>`, 'Thời gian hoàn thành'],
      ];
      return `<${tag} class="prow"${p.href ? ` href="${p.href}"` : ''} data-nhom="${p.nhom}" data-dich-vu="${p.dichVu}">${img(p.img, p.imgAlt, '4-3')}<div class="prow-b"><div class="tags"><span class="label">${p.groupLong || p.group}</span><span class="pill">${p.service}</span></div><p class="prow-t">${p.titleLong || p.title}</p><p class="prow-d">${p.desc}</p><div class="prow-m">${ms.map(([val, l]) => `<div><p class="v">${val}</p><p class="l">${l}</p></div>`).join('')}</div>${p.href ? '<span class="prow-more">Xem chi tiết dự án →</span>' : ''}</div></${tag}>`;
    })
    .join('')}<p class="empty" hidden data-empty>Chưa có dự án công bố trong nhóm này. <a href="/du-an/">Xem toàn bộ dự án</a> hoặc <a href="/lien-he/">liên hệ HT DATA</a> để nhận dự án tham chiếu tương tự.</p></div>`;

/** Thư viện ảnh (case study). */
export const gallery = (prefix, slides) => `
  <div class="gallery" data-gallery>
    <div class="gallery-main media r-16-8">
      ${slides.map((s, i) => `<div class="g-slide${i === 0 ? ' is-on' : ''} zoomable" data-cap="${attr(s.cap)}">${img(`${prefix}-${i + 1}`, s.cap, '16-8')}</div>`).join('')}
      <button class="g-nav g-prev" type="button" aria-label="Ảnh trước">${icon.left()}</button>
      <button class="g-nav g-next" type="button" aria-label="Ảnh sau">${icon.right()}</button>
      <span class="g-count"><span data-i>1</span> / ${slides.length}</span>
    </div>
    <div class="g-thumbs">${slides.map((s, i) => `<button class="g-thumb${i === 0 ? ' is-on' : ''}" type="button" aria-label="Xem ảnh ${i + 1}: ${attr(s.cap)}">${img(`${prefix}-${i + 1}`, s.cap, '4-3')}</button>`).join('')}</div>
  </div>`;

// ── Khung trang ───────────────────────────────────────
export const breadcrumb = (items) => {
  if (!items) return '';
  const all = [{ t: 'Trang chủ', href: '/' }, ...items];
  return `<nav class="crumb" aria-label="Breadcrumb"><div class="wrap"><ol>${all
    .map((c, i) => (c.href && i < all.length - 1 ? `<li><a href="${c.href}">${c.t}</a></li>` : `<li${i === all.length - 1 ? ' aria-current="page"' : ''}>${c.t}</li>`))
    .join('')}</ol></div></nav>`;
};

function header(active, activeHref) {
  const item = (n) => {
    if (n.children) {
      const on = n.key === active;
      return `<div class="nav-dd${on ? ' is-active' : ''}"><button type="button" aria-expanded="false" aria-haspopup="true">${n.t}${icon.chev('currentColor', 14)}</button><div class="dd-menu">${n.children
        .map((c) => `<a href="${c.href}"${c.href === activeHref ? ' class="is-active" aria-current="page"' : ''}>${c.t}</a>`)
        .join('')}</div></div>`;
    }
    const on = n.key === active;
    return `<a href="${n.href}" class="${n.cta ? 'nav-cta' : ''}${on ? ' is-active' : ''}"${on ? ' aria-current="page"' : ''}>${n.t}</a>`;
  };
  const mItem = (n) =>
    n.children
      ? `<details${n.key === active ? ' open' : ''}><summary>${n.t}${icon.chev('#1f5fd0')}</summary>${n.children
          .map((c) => `<a href="${c.href}"${c.href === activeHref ? ' class="is-active"' : ''}>${c.t}</a>`)
          .join('')}</details>`
      : n.cta
        ? `<a class="btn btn-p" href="${n.href}">Yêu cầu khảo sát</a>`
        : `<a href="${n.href}"${n.key === active ? ' class="is-active"' : ''}>${n.t}</a>`;
  return `
<header class="site-header"><div class="wrap">
  <a class="brand" href="/" aria-label="HT DATA — Trang chủ">${logo(32)}<span>HT DATA</span></a>
  <nav class="nav" aria-label="Menu chính">${nav.map(item).join('')}</nav>
  <button class="menu-btn" type="button" aria-label="Mở menu" aria-expanded="false" aria-controls="mnav"><span>${icon.menu()}</span></button>
</div></header>
<nav class="mnav" id="mnav" aria-label="Menu">${nav.map(mItem).join('')}</nav>`;
}

function footer() {
  const s = site;
  return `
<footer class="site-footer">
  <div class="wrap f-grid">
    <div><div class="f-brand">${logo(34, true)}<p>${s.legalName}</p></div><p class="f-tag">${s.tagline}</p></div>
    <div class="f-col"><p class="label">Dịch vụ</p><ul>${nav[1].children.map((c) => `<li><a href="${c.href}">${c.t}</a></li>`).join('')}</ul></div>
    <div class="f-col"><p class="label">Phần mềm</p><ul>${nav[2].children.map((c) => `<li><a href="${c.href}">${c.short || c.t}</a></li>`).join('')}</ul></div>
    <div class="f-col"><p class="label">Liên hệ</p><ul class="f-contact">
      <li>${icon.phone()}<a href="tel:${s.hotlineTel}">${s.hotline}</a></li>
      <li>${icon.mail()}<a href="mailto:${s.email}">${s.email}</a></li>
      <li>${icon.clock()}<span>${s.hours}</span></li>
      <li>${icon.pin()}<span>${s.address}</span></li>
    </ul></div>
  </div>
  <div class="f-bottom"><div class="wrap"><span>© ${s.year} Công ty TNHH HT DATA — ${s.tagline}</span><span>${s.iso}</span></div></div>
</footer>`;
}

const mbar = () => `
<div class="mbar"><a class="call" href="tel:${site.hotlineTel}">${icon.phone('#1f5fd0')}${site.hotline}</a><a class="go" href="/lien-he/">Yêu cầu khảo sát</a></div>
<a class="to-top" href="#top" aria-label="Lên đầu trang">${icon.up()}</a>`;

/** Ghép thành trang HTML hoàn chỉnh. */
export function layout(page, cfg) {
  const url = cfg.siteUrl + page.path;
  const title = page.path === '/' ? page.title : `${page.title} | HT DATA`;
  const desc = page.description || site.description;
  const ld = page.path === '/' ? `<script type="application/ld+json">${JSON.stringify({
    '@context': 'https://schema.org', '@type': 'Organization', name: site.legalName, alternateName: 'HT DATA', url: cfg.siteUrl + '/',
    telephone: '+84' + site.hotlineTel.slice(1), email: site.email, taxID: site.taxId,
    address: { '@type': 'PostalAddress', streetAddress: '85 Lạc Long Quân, Phường Bình Thới', addressLocality: 'TP. Hồ Chí Minh', addressCountry: 'VN' },
  })}</script>` : '';
  return `<!doctype html>
<html lang="vi"${cfg.preview ? ' class="show-verify"' : ''}>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${attr(desc)}">
${cfg.preview ? '<meta name="robots" content="noindex, nofollow">' : ''}
<link rel="canonical" href="${url}">
<meta property="og:type" content="website">
<meta property="og:locale" content="vi_VN">
<meta property="og:site_name" content="HT DATA">
<meta property="og:title" content="${attr(title)}">
<meta property="og:description" content="${attr(desc)}">
<meta property="og:url" content="${url}">
<meta name="theme-color" content="#102a4c">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;500;600;700&display=swap&subset=vietnamese" rel="stylesheet">
<link rel="stylesheet" href="/assets/css/site.css?v=${cfg.version}">
${ld}
</head>
<body class="${page.bodyClass || ''}" id="top">
<a class="skip" href="#main">Bỏ qua menu</a>
${header(page.nav, page.path)}
${breadcrumb(page.crumb)}
<main id="main">
${page.body}
</main>
${footer()}
${mbar()}
<div class="lb" role="dialog" aria-modal="true" aria-label="Xem ảnh"><button class="lb-close" type="button" aria-label="Đóng">${icon.close()}</button><div class="lb-inner"></div></div>
<script>window.HT=${JSON.stringify({ form: cfg.formEndpoint, email: site.email })}</script>
<script src="/assets/js/site.js?v=${cfg.version}" defer></script>
</body>
</html>`;
}
