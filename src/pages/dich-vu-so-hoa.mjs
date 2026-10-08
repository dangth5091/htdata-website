import { section, cards, steps, listCards, projectCards, faq, cta, factStrip, img, btns } from '../lib.mjs';
import { projects } from '../data/site.mjs';

const hero = `
<section class="hero"><div class="wrap hero-split">
  <div>
    <p class="kicker">Dịch vụ</p>
    <h1>Số hóa tài liệu</h1>
    <p class="lead">HT DATA chuyển đổi hồ sơ giấy thành dữ liệu số có tổ chức, được kiểm tra chất lượng và đặt chỉ mục để phục vụ tìm kiếm, tra cứu và quản lý lâu dài.</p>
    ${btns([
      { text: 'Yêu cầu khảo sát', href: '/lien-he/' },
      { text: 'Xem dự án số hóa', href: '/du-an/?dich-vu=so-hoa', primary: false },
    ])}
  </div>
  ${img('dv-so-hoa', 'Ảnh thật: nhân sự vận hành máy scan hoặc kiểm tra hình ảnh sau quét', '4-3')}
</div></section>`;

// Khối navy dạng dải: tiêu đề + mô tả + liên kết, không có lưới thẻ (navyBlock không phù hợp).
const navyBanner = `
<section class="sec navy"><div class="wrap" style="display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:20px 44px">
  <div style="flex:1 1 520px"><h2 style="max-width:none">AI và tự động hóa trong quá trình số hóa</h2><p class="lead" style="max-width:72ch;margin-bottom:0">AI và OCR hỗ trợ nhận dạng nội dung, trích xuất mục lục và đề xuất tiêu đề hồ sơ. Kết quả được nhân sự soát lỗi trước khi đưa vào bộ dữ liệu bàn giao.</p></div>
  <div class="btns"><a class="btn btn-ghost" href="/phan-mem/so-hoa/">Xem phần mềm số hóa →</a></div>
</div></section>`;

const related = projects.filter((p) => p.dichVu === 'so-hoa');

export default {
  path: '/dich-vu/so-hoa-tai-lieu/',
  nav: 'dich-vu',
  crumb: [{ t: 'Dịch vụ' }, { t: 'Số hóa tài liệu' }],
  title: 'Số hóa tài liệu',
  description:
    'HT DATA chuyển đổi hồ sơ giấy thành dữ liệu số có tổ chức, được kiểm tra chất lượng và đặt chỉ mục để phục vụ tìm kiếm, tra cứu và quản lý lâu dài.',
  body: [
    hero,
    factStrip([
      ['Phù hợp với', 'Cơ quan nhà nước'],
      ['Đơn vị tính', 'Trang A4'],
      ['Triển khai', 'Tại đơn vị'],
      ['Loại tài liệu', 'Hồ sơ, sổ, bản vẽ'],
      ['Bàn giao chính', 'File scan và mục lục'],
    ]),
    section({
      tone: 'soft',
      title: 'Phạm vi dịch vụ',
      lead: 'Các hạng mục từ chuẩn bị bản gốc đến tổ chức dữ liệu bàn giao.',
      body: cards([
        { t: 'Khảo sát và thiết kế đầu ra', d: 'Kiểm tra loại tài liệu, khổ giấy, chất lượng bản gốc; thống nhất độ phân giải, định dạng file và trường chỉ mục.' },
        { t: 'Chuẩn bị tài liệu', d: 'Kiểm đếm, giao nhận, phân lô và chuẩn bị tài liệu trước khi quét; tháo ghim hoặc xử lý gáy khi cần thiết.' },
        { t: 'Quét và xử lý hình ảnh', d: 'Sử dụng thiết bị phù hợp với từng loại tài liệu; thực hiện xoay, cắt, căn chỉnh và xử lý hình ảnh sau quét.' },
        { t: 'Nhận dạng và soát lỗi OCR', d: 'Ứng dụng OCR và AI để nhận dạng nội dung; nhân sự đối chiếu và sửa các lỗi nhận dạng theo phạm vi dự án.' },
        { t: 'Đặt chỉ mục và tổ chức file', d: 'Nhập hoặc trích xuất các trường thông tin, đặt tên và sắp xếp file theo cấu trúc đã thống nhất.' },
        { t: 'Kiểm tra và bàn giao', d: 'Đối chiếu số lượng, kiểm tra chất lượng hình ảnh và dữ liệu trước khi đóng gói, nghiệm thu và bàn giao.' },
      ]),
    }),
    section({
      title: 'Quy trình số hóa',
      lead: 'Tài liệu được xử lý theo 4 giai đoạn, từ khảo sát đến bàn giao.',
      body: steps([
        { t: 'Khảo sát và thiết kế đầu ra', d: 'Xác định loại tài liệu, khổ giấy, chất lượng bản gốc, trường chỉ mục và định dạng bàn giao.' },
        { t: 'Chuẩn bị và scan tài liệu', d: 'Giao nhận, kiểm đếm, tháo ghim khi cần và scan bằng thiết bị phù hợp với từng loại tài liệu.' },
        { t: 'OCR và lập mục lục', d: 'Xử lý hình ảnh, nhận dạng ký tự, trích xuất mục lục và xác định tiêu đề hồ sơ.' },
        { t: 'Kiểm tra và bàn giao', d: 'Tổ chức file, đối chiếu dữ liệu, đóng gói và bàn giao theo cấu trúc đã thống nhất.' },
      ]),
    }),
    section({
      tone: 'soft',
      title: 'Sản phẩm bàn giao',
      lead: 'File số, dữ liệu chỉ mục và tài liệu nghiệm thu theo cấu trúc thống nhất.',
      body: listCards([
        { t: 'File số', items: ['File ảnh hoặc tài liệu số theo định dạng thống nhất', 'Dữ liệu OCR nếu thuộc phạm vi dự án', 'Cấu trúc thư mục và quy tắc đặt tên file'] },
        { t: 'Chỉ mục và danh mục', items: ['Danh mục hồ sơ đã số hóa', 'Dữ liệu chỉ mục theo trường đã thống nhất', 'Liên kết giữa chỉ mục và file số'] },
        { t: 'Hồ sơ nghiệm thu', items: ['Báo cáo kiểm tra chất lượng', 'Biên bản giao nhận trước và sau số hóa', 'Tài liệu nghiệm thu theo phạm vi hợp đồng'] },
      ]),
    }),
    section({
      title: 'An toàn và bảo mật',
      lead: 'Bản gốc và dữ liệu số được kiểm soát trong suốt quá trình xử lý.',
      body: cards([
        { t: 'Bảo vệ bản gốc', d: 'Thiết bị quét được chọn theo tình trạng tài liệu; không tháo gáy khi chưa được đơn vị đồng ý.' },
        { t: 'Kiểm tra chất lượng ảnh', d: 'Kiểm tra đủ trang, đúng chiều và khả năng đọc trước khi chuyển sang bước tiếp theo.' },
        { t: 'Theo dõi theo lô', d: 'Lịch sử xử lý được ghi nhận theo lô để đối chiếu bản gốc và file số.' },
        { t: 'Kiểm soát dữ liệu trung gian', d: 'Dữ liệu trung gian được bàn giao hoặc xử lý theo thỏa thuận bảo mật.' },
      ]),
    }),
    navyBanner,
    section({
      tone: 'soft',
      title: 'Dự án liên quan',
      lead: 'Các dự án số hóa theo nhiều loại tài liệu và yêu cầu đầu ra khác nhau.',
      more: { text: 'Toàn bộ dự án →', href: '/du-an/?dich-vu=so-hoa' },
      body: projectCards(related.length ? related : projects.slice(0, 3)),
    }),
    section({
      title: 'Câu hỏi thường gặp',
      body: faq([
        { q: 'HT DATA có thể số hóa những loại tài liệu nào?', a: ['HT DATA có thể xử lý hồ sơ rời, tài liệu đóng tập, sổ đóng gáy, sách, bản đồ và bản vẽ nhiều khổ giấy.', 'Thiết bị và phương pháp quét được lựa chọn theo kích thước, chất liệu, tình trạng bản gốc và yêu cầu đầu ra. Tài liệu cũ, giòn hoặc dễ hư hỏng cần được khảo sát trước khi xác định phương án.'] },
        { q: 'Tài liệu có phải tháo gáy trước khi quét không?', a: ['Không phải tài liệu nào cũng cần tháo gáy. Hồ sơ rời có thể quét bằng máy nạp giấy khi tình trạng cho phép; sổ, sách và tài liệu không thể tháo gáy được quét bằng thiết bị mặt phẳng hoặc thiết bị chuyên dụng.', 'Việc tháo ghim, kẹp hoặc gáy chỉ được thực hiện khi cần thiết và đã thống nhất với đơn vị.'] },
        { q: 'OCR có thay thế hoàn toàn bước nhập và soát dữ liệu không?', a: ['Không. OCR và AI giúp nhận dạng nội dung, giảm thao tác nhập liệu và đề xuất các trường thông tin. Độ chính xác còn phụ thuộc vào chất lượng bản gốc, kiểu chữ, ngôn ngữ và bố cục tài liệu.', 'Các dữ liệu quan trọng vẫn cần được nhân sự đối chiếu và soát lỗi trước khi bàn giao.'] },
        { q: 'File được bàn giao dưới định dạng nào?', a: ['Định dạng đầu ra được thống nhất theo nhu cầu sử dụng của đơn vị. Các định dạng thường gặp gồm PDF, PDF/A, TIFF, JPEG và dữ liệu chỉ mục dạng Excel, CSV hoặc cấu trúc nhập vào hệ thống.', 'HT DATA sẽ tạo bộ mẫu để đơn vị kiểm tra trước khi triển khai trên toàn bộ khối tài liệu.'] },
        { q: 'Có thể số hóa tại trụ sở của đơn vị không?', a: ['Có. HT DATA có thể đưa nhân sự và thiết bị đến triển khai tại trụ sở khi tài liệu không được phép đưa ra ngoài hoặc cần được khai thác thường xuyên.', 'Phương án thi công tại chỗ sẽ được xây dựng theo không gian, nguồn điện, hạ tầng mạng và yêu cầu kiểm soát ra vào của đơn vị.'] },
      ]),
    }),
    cta({
      title: 'Cần xác định khối lượng và phương án số hóa?',
      text: 'HT DATA sẽ khảo sát mẫu tài liệu, đề xuất thiết bị, cấu trúc dữ liệu và phương án triển khai phù hợp.',
      buttons: [
        { text: 'Xem phần mềm số hóa', href: '/phan-mem/so-hoa/', primary: false },
        { text: 'Yêu cầu khảo sát', href: '/lien-he/', lg: true },
      ],
    }),
  ].join('\n'),
};
