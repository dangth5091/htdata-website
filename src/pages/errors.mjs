// Trang lỗi theo "HT DATA - Error pages.dc.html": 404, 500, 503.
// Mỗi trang đều để lại hotline — người dùng là cán bộ cơ quan cần liên hệ được ngay cả khi website lỗi.
// GitHub Pages chỉ tự dùng 404.html; 500.html và 503.html dành cho máy chủ (vd. nginx error_page) hoặc khi bật bảo trì.
import { btns, v } from '../lib.mjs';
import { site, services } from '../data/site.mjs';

const tel = `tel:${site.hotlineTel}`;
const mail = `mailto:${site.email}`;

const errPage = ({ code, title, lead, leadM, actions, side, after = '', maint = false }) => `
<section class="err${maint ? ' err-maint' : ''}"><div class="wrap err-grid">
  <div class="err-main">
    <h1>${title}</h1>
    <p class="lead${leadM ? ' d-only' : ''}">${lead}</p>${leadM ? `<p class="lead m-only">${leadM}</p>` : ''}
    ${actions}
  </div>
  <div class="err-side">${side}</div>
  ${after}
</div></section>`;

const contactRow = (label, value, note) =>
  `<div class="err-row"><p class="err-k">${label}</p>${value}${note ? `<p class="err-k" style="margin:4px 0 0">${note}</p>` : ''}</div>`;

const hotlineRow = contactRow('Hotline', `<a class="err-hot" href="${tel}">${site.hotline}</a>`, site.hoursLong);
const emailRow = contactRow('Email', `<a class="err-mail" href="${mail}">${site.email}</a>`);

const reloadBtn = `<button class="btn btn-p btn-lg" type="button" onclick="location.reload()">Tải lại trang</button>`;

const suggest = [...services, { t: 'Dự án đã thực hiện', href: '/du-an/' }];

const page404 = {
  path: '/404.html',
  file: '404.html',
  noindex: true,
  bodyClass: 'page-fill',
  title: 'Không tìm thấy trang',
  body: errPage({
    code: 404,
    title: 'Không tìm thấy trang',
    lead: 'Trang có thể đã được đổi địa chỉ hoặc không còn tồn tại. Kiểm tra lại đường dẫn, hoặc chọn một trang bên cạnh để tiếp tục.',
    leadM: 'Trang có thể đã được đổi địa chỉ hoặc không còn tồn tại. Kiểm tra lại đường dẫn, hoặc chọn một trang bên dưới.',
    actions: btns([
      { text: 'Về trang chủ', href: '/', lg: true },
      { text: 'Liên hệ HT DATA', href: '/lien-he/', primary: false, lg: true },
    ]),
    side: `
      <p class="label err-side-t">Có thể bạn đang tìm</p>
      <nav class="err-links" aria-label="Gợi ý">${suggest.map((s) => `<a href="${s.href}"><span>${s.t}</span><span aria-hidden="true">→</span></a>`).join('')}</nav>
      <p class="err-help d-only">Cần hỗ trợ ngay: <a href="${tel}">${site.hotline}</a></p>`,
  }),
};

const page500 = {
  path: '/500.html',
  file: '500.html',
  noindex: true,
  bodyClass: 'page-fill',
  mbar: false,
  title: 'Không thể tải trang',
  body: errPage({
    code: 500,
    title: 'Không thể tải trang',
    lead: 'Hệ thống đang tạm thời gián đoạn. Vui lòng tải lại trang hoặc thử lại sau ít phút.',
    actions: `<div class="btns">${reloadBtn}<a class="btn btn-s btn-lg" href="/">Về trang chủ</a></div>`,
    side: `
      <p class="label err-side-t">Cần trao đổi gấp</p>
      <div class="d-only">${hotlineRow}${emailRow}</div>
      <div class="m-only">
        <a class="btn btn-s err-call" href="${tel}">Gọi ${site.hotlineSpaced}</a>
        <p class="err-note">Hoặc email <a href="${mail}">${site.email}</a><br>${site.hoursLong}</p>
      </div>`,
  }),
};

const page503 = {
  path: '/503.html',
  file: '503.html',
  noindex: true,
  bodyClass: 'page-fill',
  header: 'minimal',
  mbar: false,
  title: 'Website đang được bảo trì',
  body: errPage({
    code: 503,
    maint: true,
    title: 'Website đang được bảo trì',
    lead: 'HT DATA đang nâng cấp hệ thống để phục vụ tốt hơn. Trong thời gian này, đơn vị vẫn có thể liên hệ qua hotline hoặc email.',
    leadM: 'HT DATA đang nâng cấp hệ thống. Trong thời gian này, đơn vị vẫn có thể liên hệ qua hotline hoặc email.',
    // Sửa giờ hoạt động lại ở đây trước mỗi lần bảo trì.
    actions: `<div class="err-eta"><span>Dự kiến hoạt động lại</span><strong>${v('[giờ, ngày/tháng/năm]')}</strong></div>`,
    side: `
      <p class="label err-side-t">Liên hệ trong thời gian bảo trì</p>
      ${hotlineRow}${emailRow}
      ${contactRow('Trụ sở', `<p class="err-addr">${site.address}</p>`)}`,
    after: `<div class="err-mbtns m-only"><a class="btn btn-p" href="${tel}">Gọi ${site.hotlineSpaced}</a><a class="btn btn-s" href="${mail}">Gửi email</a></div>`,
  }),
};

export default [page404, page500, page503];
