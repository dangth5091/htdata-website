// Case study: mọi dự án dùng chung một bố cục — thêm dự án mới là thêm một mục vào mảng `cases`.
import { section, cards, listCards, linkCards, spec, cta, callBtn, statStrip, gallery, img, v } from '../lib.mjs';

const cases = [
  {
    path: '/du-an/chinh-ly-khoi-ho-so-hanh-chinh-ton-dong-cua-mot-so/',
    crumb: 'Chỉnh lý hồ sơ hành chính tồn đọng',
    group: 'UBND tỉnh',
    service: 'Chỉnh lý',
    title: 'Chỉnh lý khối hồ sơ hành chính tồn đọng 20 năm của một Sở',
    lead: 'HT DATA chỉnh lý tại chỗ 1.200 mét giá tài liệu hành chính tồn đọng, chia 4 lô nghiệm thu. Đơn vị nhận mục lục, cơ sở dữ liệu phiếu tin và quyết toán trong năm ngân sách.',
    heroImg: ['cs1-hero', 'Ảnh thật: nhân sự HT DATA chỉnh lý hồ sơ tại khu vực thi công của Sở'],
    stats: [
      { n: v('38.000'), l: 'Hồ sơ đã lập và biên mục' },
      { n: v('7 tháng'), l: 'Đúng tiến độ hợp đồng' },
      { n: v('1 vòng'), l: 'Nghiệm thu, không làm lại' },
      { n: v('~40%'), l: 'Diện tích kho thu hồi' },
    ],
    stateLead: 'Khối tài liệu tồn đọng lâu năm cần chỉnh lý để giao nộp và quyết toán trong năm.',
    state: [
      ['Hiện trạng', 'Tài liệu gần 20 năm để rời trong thùng, chưa lập hồ sơ; đơn vị thiếu nhân sự nghiệp vụ'],
      ['Yêu cầu', 'Không đưa tài liệu ra khỏi cơ quan · vẫn phục vụ tra cứu hằng ngày · quyết toán trong năm'],
      ['Dịch vụ', 'Chỉnh lý tài liệu lưu trữ'],
      ['Loại tài liệu', 'Hồ sơ hành chính của Sở'],
      ['Khối lượng', `${v('1.200')} mét giá · ${v('38.000')} hồ sơ lập được`],
      ['Phạm vi thời gian', 'Tài liệu hình thành trong gần 20 năm'],
      ['Mô hình triển khai', 'Thi công tại đơn vị, chia 4 lô nghiệm thu'],
      ['Nhân sự huy động', `${v('22')} người`],
    ],
    plan: [
      { t: 'Dựng khu vực thi công trong khuôn viên', d: 'Tài liệu không ra khỏi cơ quan. Khu vực có kiểm soát, cán bộ đơn vị giám sát tại chỗ.' },
      { t: 'Văn bản hướng dẫn chỉnh lý được phê duyệt trước', d: 'Đơn vị duyệt phương án phân loại và thời hạn bảo quản trước, tránh làm lại.' },
      { t: 'Chia 4 lô theo phông và theo năm', d: 'Nghiệm thu từng lô. Hồ sơ cần gấp được cung cấp trong ngày.' },
    ],
    deliver: [
      { t: 'Hồ sơ giấy', items: ['Hồ sơ vật lý đã sắp xếp, vào bìa, vào hộp và dán nhãn'] },
      { t: 'Mục lục và dữ liệu', items: ['Mục lục hồ sơ bản in và bản mềm', 'Cơ sở dữ liệu phiếu tin'] },
      { t: 'Hồ sơ nghiệm thu', items: ['Danh mục và biên bản tài liệu hết giá trị', 'Biên bản bàn giao và hồ sơ nghiệm thu theo lô'] },
    ],
    gallery: ['Ảnh hiện trạng trước chỉnh lý', 'Ảnh quá trình thi công', 'Ảnh quá trình thi công', 'Ảnh kiểm tra, nghiệm thu', 'Ảnh kho sau chỉnh lý, hộp có nhãn', 'Ảnh kết quả sau khi hoàn thành'],
    related: [
      { k: 'Dịch vụ', t: 'Chỉnh lý tài liệu', d: 'Phân loại, lập hồ sơ, biên mục và lập mục lục theo phương án được duyệt.', href: '/dich-vu/chinh-ly-tai-lieu/', cta: 'Tìm hiểu dịch vụ →' },
      { k: 'Bước tiếp theo', t: 'Số hóa tài liệu', d: 'Số hóa khối hồ sơ đã chỉnh lý để tra cứu toàn văn.', href: '/dich-vu/so-hoa-tai-lieu/', cta: 'Tìm hiểu dịch vụ →' },
      { k: 'Dự án', t: 'Dự án chỉnh lý cùng loại', d: 'Các dự án chỉnh lý hồ sơ hành chính tại cơ quan nhà nước.', href: '/du-an/?dich-vu=chinh-ly', cta: 'Xem dự án →' },
    ],
  },
  {
    path: '/du-an/so-hoa-ho-so-hoan-cong-va-ban-ve-kho-lon/',
    crumb: 'Số hóa hồ sơ hoàn công, bản vẽ khổ lớn',
    group: 'Ban quản lý dự án',
    service: 'Số hóa',
    title: 'Số hóa hồ sơ hoàn công và bản vẽ khổ lớn của một ban quản lý dự án',
    lead: 'HT DATA số hóa 1,8 triệu trang hồ sơ hoàn công, trong đó có 24.000 bản vẽ khổ lớn. Bản gốc hoàn trả nguyên trạng, dữ liệu tra cứu được theo công trình và hạng mục.',
    heroImg: ['cs2-hero', 'Ảnh thật: quét bản vẽ khổ lớn trên máy mặt phẳng'],
    stats: [
      { n: v('1,8 triệu'), l: 'Trang A4 đã số hóa' },
      { n: v('6 tháng'), l: 'Đúng tiến độ hợp đồng' },
      { n: v('3 cấp'), l: 'Chỉ mục tra cứu' },
      { n: v('0 bản vẽ'), l: 'Bản vẽ hư hỏng thêm' },
    ],
    stateLead: 'Bản vẽ hoàn công khổ lớn khó tra cứu, cần số hóa mà không làm hư bản gốc.',
    state: [
      ['Hiện trạng', 'Bản vẽ A0 gấp nhiều lớp, mực phai; mỗi lần thanh tra mất vài ngày tìm bản gốc'],
      ['Yêu cầu', 'Không cắt rời hay ép nhiệt bản vẽ · vẫn tra cứu được khi thi công · tra theo công trình – hạng mục'],
      ['Dịch vụ', 'Số hóa tài liệu'],
      ['Loại tài liệu', 'Hồ sơ hoàn công, bản vẽ A0 – A5, sổ đóng gáy'],
      ['Khối lượng', `${v('1,8 triệu')} trang A4 quy đổi · ${v('24.000')} bản vẽ A0 – A3`],
      ['Phạm vi thời gian', v('[Giai đoạn hình thành tài liệu — chờ bổ sung]')],
      ['Mô hình triển khai', 'Tại trung tâm HT DATA, chuyển theo lô'],
      ['Nhân sự huy động', `${v('18')} người`],
    ],
    plan: [
      { t: 'Quét khổ lớn không tiếp xúc trục cuốn', d: 'Làm phẳng cơ học, quét trên máy mặt phẳng khổ lớn. Hoàn trả nguyên trạng trong bìa mới.' },
      { t: 'Chỉ mục 3 cấp theo công trình – hạng mục – ngày', d: 'Tra được theo công trình, hạng mục, ngày lập dù không biết tên file.' },
      { t: 'Chuyển theo lô, có biên bản giao nhận từng lô', d: 'Biên bản hai chiều cho mỗi lô. Hồ sơ cần gấp được quét trước trong ngày.' },
    ],
    deliver: [
      { t: 'File số và dữ liệu', items: ['Tệp PDF/A kèm siêu dữ liệu cho từng bản vẽ, hồ sơ', 'Chỉ mục 3 cấp: công trình · hạng mục · ngày lập'] },
      { t: 'Bản gốc', items: ['Bản gốc hoàn trả nguyên trạng trong bìa mới'] },
      { t: 'Hồ sơ nghiệm thu', items: ['Biên bản giao nhận hai chiều theo từng lô', 'Hồ sơ nghiệm thu theo phạm vi hợp đồng'] },
    ],
    gallery: ['Ảnh bản vẽ A0 gấp nhiều lớp trong kệ ống, trước khi số hóa', 'Ảnh quá trình thi công', 'Ảnh quá trình thi công', 'Ảnh kiểm tra, nghiệm thu', 'Ảnh màn tra cứu bản vẽ đã số hóa, bản gốc phẳng trong bìa mới', 'Ảnh kết quả sau khi hoàn thành'],
    related: [
      { k: 'Dịch vụ', t: 'Số hóa tài liệu', d: 'Quét hồ sơ, sổ đóng gáy và bản vẽ từ khổ A5 đến A0.', href: '/dich-vu/so-hoa-tai-lieu/', cta: 'Tìm hiểu dịch vụ →' },
      { k: 'Phần mềm', t: 'Tra cứu hồ sơ', d: 'Tìm theo trường thông tin hoặc toàn văn và mở đúng bản vẽ cần xem.', href: '/phan-mem/tra-cuu-ho-so/', cta: 'Xem phần mềm →' },
      { k: 'Dự án', t: 'Dự án số hóa cùng loại', d: 'Các dự án số hóa hồ sơ công trình và bản vẽ khổ lớn.', href: '/du-an/?dich-vu=so-hoa', cta: 'Xem dự án →' },
    ],
  },
];

const strip = (s) => (s && s.replace(/<[^>]+>/g, '')) || '';

export default cases.map((c, i) => ({
  path: c.path,
  nav: 'du-an',
  crumb: [{ t: 'Dự án', href: '/du-an/' }, { t: c.crumb }],
  title: c.title,
  description: strip(c.lead),
  body: [
    `<section class="hero"><div class="wrap hero-split">
      <div>
        <div class="hero-tags"><span class="label">${c.group}</span><span class="pill">${c.service}</span></div>
        <h1 class="h1-case">${c.title}</h1>
        <p class="lead" style="max-width:54ch">${c.lead}</p>
      </div>
      ${img(c.heroImg[0], c.heroImg[1], '4-3')}
    </div></section>`,
    statStrip(c.stats),
    section({ tone: 'soft', title: 'Hiện trạng và yêu cầu', lead: c.stateLead, body: spec(c.state) }),
    section({ title: 'Phương án triển khai', lead: 'Cách HT DATA tổ chức dự án dựa trên hiện trạng và yêu cầu của đơn vị.', body: cards(c.plan, { cols: 3, acc: false }) }),
    section({ tone: 'soft', title: 'Sản phẩm bàn giao', lead: 'Các sản phẩm đơn vị tiếp nhận sau dự án.', body: listCards(c.deliver, { acc: false }) }),
    section({
      title: 'Hình ảnh dự án',
      lead: 'Hiện trạng trước khi triển khai, quá trình thi công và kết quả bàn giao.',
      body: gallery(`cs${i + 1}-g`, c.gallery.map((cap) => ({ cap }))),
    }),
    section({ tone: 'soft', title: 'Dịch vụ và dự án liên quan', body: linkCards(c.related, { acc: false }) }),
    cta({
      title: 'Trao đổi về hồ sơ của đơn vị',
      text: 'HT DATA khảo sát hiện trạng, xác định khối lượng và đề xuất phương án triển khai phù hợp.',
      buttons: [callBtn, { text: 'Yêu cầu khảo sát', href: '/lien-he/', lg: true }],
    }),
  ].join('\n'),
}));
