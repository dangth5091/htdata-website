import { section, cards, steps, listCards, projectCards, faq, cta, callBtn, factStrip, img, btns } from '../lib.mjs';
import { projects } from '../data/site.mjs';

const hero = `
<section class="hero"><div class="wrap hero-split">
  <div>
    <p class="kicker">Dịch vụ</p>
    <h1>Xây dựng cơ sở dữ liệu hồ sơ</h1>
    <p class="lead">Chuyển thông tin trong hồ sơ giấy hoặc bản scan thành dữ liệu có cấu trúc, có thể tìm kiếm, thống kê và đưa vào phần mềm quản lý.</p>
    ${btns([
      { text: 'Trao đổi nhu cầu dữ liệu', href: '/lien-he/' },
      { text: 'Xem dự án liên quan', href: '/du-an/?dich-vu=co-so-du-lieu', primary: false },
    ])}
  </div>
  ${img('dv-csdl', 'Ảnh thật: nhân sự nhập liệu hoặc màn hình kiểm tra dữ liệu (đã ẩn thông tin nhạy cảm)', '4-3')}
</div></section>`;

// Khối navy dạng dải: tiêu đề + mô tả + liên kết, không có lưới thẻ (navyBlock không phù hợp).
const navyBanner = `
<section class="sec navy"><div class="wrap" style="display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:20px 44px">
  <div style="flex:1 1 520px"><h2 style="max-width:none">Kết hợp AI với bước soát của con người</h2><p class="lead" style="max-width:72ch;margin-bottom:0">AI và OCR hỗ trợ nhận dạng, trích xuất và đề xuất dữ liệu. Nhân sự tiếp tục đối chiếu, soát lỗi và xử lý các trường hợp hệ thống không xác định chắc chắn.</p></div>
  <div class="btns"><a class="btn btn-ghost" href="/phan-mem/so-hoa/">Xem phần mềm số hóa →</a></div>
</div></section>`;

const related = projects.filter((p) => p.dichVu === 'co-so-du-lieu');

export default {
  path: '/dich-vu/xay-dung-co-so-du-lieu/',
  nav: 'dich-vu',
  crumb: [{ t: 'Dịch vụ' }, { t: 'Xây dựng cơ sở dữ liệu' }],
  title: 'Xây dựng cơ sở dữ liệu hồ sơ',
  description:
    'Chuyển thông tin trong hồ sơ giấy hoặc bản scan thành dữ liệu có cấu trúc, có thể tìm kiếm, thống kê và đưa vào phần mềm quản lý.',
  body: [
    hero,
    factStrip([
      ['Nguồn đầu vào', 'Giấy, scan, bảng tính'],
      ['Đơn vị tính', 'Trường hoặc bản ghi'],
      ['Phương pháp', 'Nhập liệu và OCR/AI'],
      ['Triển khai', 'Tại đơn vị'],
      ['Bàn giao chính', 'Bộ dữ liệu có cấu trúc'],
    ]),
    section({
      tone: 'soft',
      title: 'Phạm vi dịch vụ',
      lead: 'Từ thiết kế cấu trúc đến nhập, kiểm tra và chuẩn hóa dữ liệu.',
      body: cards([
        { t: 'Phân tích hồ sơ', d: 'Xác định các trường thông tin cần thu thập theo mục đích sử dụng.' },
        { t: 'Xây dựng biểu mẫu', d: 'Thiết lập biểu mẫu, quy tắc nhập và danh mục dùng chung.' },
        { t: 'Trích xuất và nhập liệu', d: 'Nhập thủ công, nhận dạng tự động hoặc kết hợp tùy chất lượng tài liệu.' },
        { t: 'Soát lỗi và đối chiếu', d: 'Đối chiếu các trường quan trọng với tài liệu gốc.' },
        { t: 'Chuẩn hóa dữ liệu', d: 'Thống nhất cách viết, mã danh mục và định dạng dữ liệu.' },
        { t: 'Chuyển đổi và nạp dữ liệu', d: 'Xuất theo định dạng thống nhất hoặc nhập vào hệ thống tiếp nhận.' },
      ]),
    }),
    section({
      title: 'Quy trình triển khai',
      lead: 'Cấu trúc dữ liệu được kiểm tra trên bộ mẫu trước khi xử lý toàn bộ.',
      body: steps([
        { t: 'Xác định cấu trúc dữ liệu', d: 'Làm rõ trường thông tin, quy tắc nhập, danh mục dùng chung và định dạng bàn giao.' },
        { t: 'Trích xuất và nhập dữ liệu', d: 'Thông tin được nhập thủ công, nhận dạng tự động hoặc kết hợp tùy theo chất lượng tài liệu.' },
        { t: 'Soát lỗi và chuẩn hóa', d: 'Đối chiếu dữ liệu với tài liệu gốc, sửa sai và thống nhất cách thể hiện thông tin.' },
        { t: 'Đối chiếu và bàn giao', d: 'Xuất dữ liệu theo định dạng thống nhất hoặc đưa vào phần mềm của đơn vị.' },
      ]),
    }),
    section({
      tone: 'soft',
      title: 'Sản phẩm bàn giao',
      lead: 'Bộ dữ liệu, tài liệu mô tả cấu trúc và báo cáo kiểm tra chất lượng.',
      body: listCards([
        { t: 'Bộ dữ liệu', items: ['Bộ dữ liệu theo cấu trúc đã phê duyệt', 'File hoặc gói dữ liệu theo định dạng tiếp nhận', 'Tài liệu mô tả cấu trúc dữ liệu nếu có'] },
        { t: 'Quy tắc và danh mục', items: ['Danh mục dùng chung đã chuẩn hóa', 'Quy tắc nhập và chuẩn hóa dữ liệu', 'Từ điển trường dữ liệu'] },
        { t: 'Báo cáo kiểm tra', items: ['Báo cáo số lượng bản ghi', 'Kết quả kiểm tra chất lượng dữ liệu', 'Danh sách trường hợp cần đơn vị xác minh'] },
      ]),
    }),
    section({
      title: 'An toàn và bảo mật',
      lead: 'Quyền truy cập và dữ liệu trung gian được kiểm soát trong quá trình xử lý.',
      body: cards([
        { t: 'Quy tắc thống nhất trước', d: 'Quy tắc nhập và tiêu chí kiểm tra được đơn vị duyệt trước khi triển khai.' },
        { t: 'Kiểm tra chéo', d: 'Các trường quan trọng có thể được nhập đối chiếu hoặc soát lại theo yêu cầu.' },
        { t: 'Ghi nhận sai lệch', d: 'Lỗi được ghi theo bản ghi và loại lỗi để dễ truy vết, sửa chữa.' },
        { t: 'Phân quyền truy cập', d: 'Quyền xem và sửa dữ liệu được phân theo nhiệm vụ; dữ liệu trung gian xử lý theo thỏa thuận.' },
      ]),
    }),
    navyBanner,
    section({
      tone: 'soft',
      title: 'Dự án liên quan',
      lead: 'Các dự án xây dựng dữ liệu theo từng loại hồ sơ và nghiệp vụ.',
      more: { text: 'Toàn bộ dự án →', href: '/du-an/?dich-vu=co-so-du-lieu' },
      body: projectCards(related.length ? related : projects.slice(0, 3)),
    }),
    section({
      title: 'Câu hỏi thường gặp',
      body: faq([
        { q: 'Đơn vị cần chuẩn bị gì trước khi nhập liệu?', a: ['Đơn vị nên xác định mục đích sử dụng dữ liệu, những thông tin cần tìm kiếm hoặc thống kê và hệ thống sẽ tiếp nhận dữ liệu sau bàn giao.', 'Nếu chưa có cấu trúc dữ liệu, HT DATA có thể khảo sát hồ sơ mẫu và đề xuất danh sách trường thông tin, quy tắc nhập và danh mục dùng chung để đơn vị xem xét.'] },
        { q: 'Dữ liệu có thể được bàn giao dưới những định dạng nào?', a: ['Dữ liệu có thể được bàn giao dưới dạng Excel, CSV, XML, JSON, tệp cơ sở dữ liệu hoặc định dạng phù hợp với hệ thống tiếp nhận.', 'Định dạng, tên trường, kiểu dữ liệu và quy tắc mã hóa sẽ được thống nhất trước khi nhập liệu chính thức.'] },
        { q: 'AI có thể tự động trích xuất toàn bộ thông tin không?', a: ['Không phải trong mọi trường hợp. AI hoạt động tốt hơn với tài liệu rõ nét, bố cục tương đối ổn định và trường thông tin có quy luật.', 'Với chữ viết tay, bản scan kém chất lượng hoặc biểu mẫu thay đổi nhiều, hệ thống cần kết hợp nhận dạng tự động với bước nhập và soát của con người.'] },
        { q: 'HT DATA kiểm soát sai sót dữ liệu như thế nào?', a: ['Quy tắc nhập và tiêu chí kiểm tra được xây dựng trước khi triển khai. Dữ liệu có thể được kiểm tra bằng điều kiện tự động, đối chiếu với danh mục chuẩn và soát lại các trường quan trọng.', 'Tần suất kiểm tra, tỷ lệ lấy mẫu hoặc cơ chế nhập đối chiếu được xác định theo yêu cầu chất lượng của từng dự án.'] },
        { q: 'Có thể nhập dữ liệu trực tiếp vào hệ thống hiện có không?', a: ['Có thể nếu hệ thống của đơn vị hỗ trợ nhập dữ liệu hoặc cung cấp phương thức kết nối phù hợp.', 'HT DATA sẽ phối hợp kiểm tra cấu trúc trường, định dạng và dữ liệu mẫu trước. Nếu chưa thể kết nối trực tiếp, dữ liệu sẽ được bàn giao dưới định dạng trung gian để đơn vị kiểm tra và nhập vào hệ thống.'] },
      ]),
    }),
    cta({
      title: 'Đã có bản scan nhưng chưa có dữ liệu để tra cứu?',
      text: 'Gửi cho HT DATA một bộ hồ sơ mẫu để xác định trường thông tin, phương pháp nhập và cấu trúc bàn giao phù hợp.',
      buttons: [
        callBtn,
        { text: 'Trao đổi nhu cầu dữ liệu', href: '/lien-he/', lg: true },
      ],
    }),
  ].join('\n'),
};
