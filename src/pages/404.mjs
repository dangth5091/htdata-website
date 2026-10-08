import { btns } from '../lib.mjs';

export default {
  path: '/404.html',
  file: '404.html',
  noindex: true,
  bodyClass: 'page-fill',
  title: 'Không tìm thấy trang',
  body: `
<section class="blank"><div class="wrap">
  <p class="kicker">Lỗi 404</p>
  <h1>Không tìm thấy trang</h1>
  <p>Trang bạn tìm có thể đã được đổi địa chỉ hoặc không còn tồn tại.</p>
  ${btns([{ text: 'Về trang chủ', href: '/' }, { text: 'Liên hệ HT DATA', href: '/lien-he/', primary: false }])}
</div></section>`,
};
