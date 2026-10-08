import { btns } from '../lib.mjs';

export default {
  path: '/tin-tuc/',
  nav: 'tin-tuc',
  crumb: [{ t: 'Tin tức' }],
  title: 'Tin tức',
  description: 'Tin tức và tài liệu chuyên môn của HT DATA về chỉnh lý, số hóa và quản lý hồ sơ.',
  body: `
<section class="hero"><div class="wrap">
  <p class="kicker">Tin tức</p>
  <h1>Tin tức đang được cập nhật</h1>
  <p class="lead" style="max-width:62ch">Chuyên mục tin tức và tài liệu chuyên môn của HT DATA sẽ sớm ra mắt. Trong thời gian này, đơn vị có thể xem các dự án đã thực hiện hoặc liên hệ trực tiếp để được tư vấn.</p>
  ${btns([{ text: 'Xem dự án đã thực hiện', href: '/du-an/' }, { text: 'Liên hệ HT DATA', href: '/lien-he/', primary: false }])}
</div></section>`,
};
