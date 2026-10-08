import { section, cards, steps, listCards, linkCards, spec, faq, cta, callBtn, img, btns } from '../lib.mjs';

const hero = `
<section class="hero"><div class="wrap hero-app">
  <div>
    <p class="kicker">Phần mềm</p>
    <h1>Tra cứu hồ sơ</h1>
    <p class="lead">Phần mềm cho phép tìm kiếm theo thông tin hồ sơ hoặc nội dung toàn văn, xem tài liệu số và khai thác dữ liệu theo quyền được cấp.</p>
    ${btns([{ text: 'Đăng ký demo', href: '/lien-he/?demo' }])}
  </div>
  <figure style="margin:0">
    <div class="zoomable" title="Bấm để phóng to">${img('pm-tra-cuu', 'Ảnh giao diện: kết quả tìm kiếm, bộ lọc bên trái và vùng xem tài liệu bên phải', '16-9', 'app-shot')}</div>
    <figcaption style="font-size:13px;line-height:21px;color:var(--muted);margin-top:10px">Kết quả mở thẳng trang chứa từ khóa, không phải tải file về</figcaption>
  </figure>
</div></section>`;

export default {
  path: '/phan-mem/tra-cuu-ho-so/',
  nav: 'phan-mem',
  crumb: [{ t: 'Phần mềm' }, { t: 'Tra cứu hồ sơ' }],
  title: 'Phần mềm tra cứu hồ sơ — tìm kiếm toàn văn',
  description: 'Phần mềm tra cứu của HT DATA cho phép tìm kiếm theo thông tin hồ sơ hoặc nội dung toàn văn, xem tài liệu số và khai thác dữ liệu theo quyền được cấp.',
  body: [
    hero,
    section({
      title: 'Tính năng',
      lead: 'Tìm kiếm theo trường thông tin hoặc toàn văn và mở đúng tài liệu cần xem.',
      body: cards([
        { t: 'Tìm kiếm theo trường thông tin', d: 'Tra cứu theo số, ký hiệu, thời gian, loại hồ sơ, cơ quan ban hành và các trường nghiệp vụ đã cấu hình.' },
        { t: 'Tìm kiếm toàn văn', d: 'Tìm từ hoặc cụm từ trong lớp văn bản được nhận dạng từ tài liệu quét.' },
        { t: 'Lọc và thu hẹp kết quả', d: 'Kết hợp nhiều điều kiện để giới hạn kết quả theo nhóm hồ sơ, thời gian hoặc trạng thái.' },
        { t: 'Xem tài liệu trực tuyến', d: 'Mở tài liệu số ngay trên trình duyệt và chuyển đến trang chứa nội dung cần tìm.' },
        { t: 'Phân quyền khai thác', d: 'Giới hạn phạm vi hồ sơ và thao tác theo người dùng, vai trò hoặc đơn vị.' },
        { t: 'Ghi nhận lịch sử sử dụng', d: 'Lưu các hoạt động xem, tìm kiếm hoặc tải tài liệu theo cấu hình của hệ thống.' },
      ]),
    }),
    section({
      tone: 'soft',
      title: 'Cách hoạt động',
      lead: 'Dữ liệu được lập chỉ mục, phân quyền và đưa vào khai thác trên cùng một giao diện.',
      body: steps([
        { t: 'Tiếp nhận dữ liệu', d: 'Nạp danh mục hồ sơ, trường thông tin và file số vào hệ thống.' },
        { t: 'Lập chỉ mục tìm kiếm', d: 'Hệ thống xử lý trường thông tin và lớp văn bản để tạo chỉ mục phục vụ tra cứu.' },
        { t: 'Phân quyền khai thác', d: 'Cấu hình nhóm người dùng, phạm vi hồ sơ và các thao tác được phép thực hiện.' },
        { t: 'Tìm kiếm và sử dụng', d: 'Người dùng nhập từ khóa, áp dụng bộ lọc và mở tài liệu từ danh sách kết quả.' },
      ]),
    }),
    section({
      title: 'Thông tin triển khai',
      lead: 'Cấu hình theo quy mô dữ liệu, số người dùng và các trường cần tra cứu.',
      body: spec([
        ['Phù hợp với', 'Đơn vị đã có tài liệu số và dữ liệu mục lục'],
        ['Đầu vào', 'Danh mục hồ sơ, dữ liệu chỉ mục và file tài liệu số'],
        ['Chức năng chính', 'Tìm kiếm, lọc, xem tài liệu và phân quyền khai thác'],
        ['Triển khai', 'Trên hạ tầng của đơn vị hoặc môi trường do HT DATA vận hành'],
        ['Cách tính', 'Theo quy mô dữ liệu, số người dùng và phạm vi triển khai'],
      ]),
    }),
    section({
      tone: 'soft',
      title: 'Trường hợp sử dụng',
      lead: 'Phù hợp khi tài liệu số đã có nhưng còn phân tán và khó tìm kiếm.',
      body: cards(
        [
          { t: 'Hồ sơ được lưu trong nhiều thư mục', d: 'Tài liệu đã có bản số nhưng phân tán, cách đặt tên không đồng nhất và khó xác định file cần tìm.' },
          { t: 'Cần tìm kiếm theo nhiều tiêu chí', d: 'Người dùng cần kết hợp số hồ sơ, thời gian, loại tài liệu và nội dung để thu hẹp kết quả.' },
          { t: 'Nhiều bộ phận cùng khai thác dữ liệu', d: 'Đơn vị cần phân quyền để mỗi nhóm chỉ xem và sử dụng những hồ sơ thuộc phạm vi được giao.' },
        ],
        { cols: 3 },
      ),
    }),
    section({
      title: 'Bàn giao và tích hợp',
      lead: 'Bàn giao hệ thống tra cứu, dữ liệu đã lập chỉ mục và tài liệu vận hành.',
      body: listCards([
        { t: 'Hệ thống tra cứu', items: ['Phần mềm đã được cài đặt và cấu hình', 'Tài khoản, vai trò và quyền sử dụng', 'Giao diện tìm kiếm và xem tài liệu'] },
        { t: 'Dữ liệu tra cứu', items: ['Danh mục hồ sơ được đưa vào hệ thống', 'File số được liên kết với dữ liệu chỉ mục', 'Chỉ mục tìm kiếm được khởi tạo'] },
        { t: 'Tài liệu vận hành', items: ['Hướng dẫn quản trị và sử dụng', 'Tài liệu cấu hình trường tra cứu', 'Biên bản bàn giao theo phạm vi hợp đồng'] },
      ]),
    }),
    section({
      tone: 'soft',
      title: 'Kiểm soát dữ liệu',
      lead: 'Kiểm tra trường bắt buộc, liên kết file và trạng thái lập chỉ mục.',
      body: cards([
        { t: 'Kiểm tra trường bắt buộc', d: 'Hệ thống phát hiện hồ sơ thiếu các thông tin cần thiết cho việc tìm kiếm.' },
        { t: 'Kiểm tra liên kết file', d: 'Dữ liệu mục lục được đối chiếu với tài liệu số để hạn chế file thiếu hoặc liên kết sai.' },
        { t: 'Cập nhật có kiểm soát', d: 'Việc sửa thông tin hồ sơ được thực hiện theo quyền và có thể ghi nhận lịch sử thay đổi.' },
        { t: 'Báo cáo dữ liệu', d: 'Quản trị viên có thể theo dõi số lượng hồ sơ, file và tình trạng lập chỉ mục theo phạm vi được cấu hình.' },
      ]),
    }),
    section({
      title: 'An toàn và bảo mật',
      lead: 'Phạm vi tìm kiếm, xem và tải tài liệu được phân quyền theo người dùng.',
      body: cards([
        { t: 'Phân quyền theo vai trò', d: 'Mỗi nhóm người dùng được cấu hình phạm vi hồ sơ và thao tác phù hợp.' },
        { t: 'Xác thực người dùng', d: 'Người dùng phải đăng nhập trước khi tìm kiếm và khai thác tài liệu.' },
        { t: 'Nhật ký hoạt động', d: 'Các thao tác quan trọng được ghi nhận để phục vụ kiểm tra và truy vết.' },
        { t: 'Triển khai trên hạ tầng nội bộ', d: 'Phần mềm có thể được cài đặt trên hạ tầng của đơn vị khi dữ liệu không được phép đưa ra ngoài.' },
      ]),
    }),
    section({
      tone: 'soft',
      title: 'Phần mềm liên quan',
      lead: 'Kết nối với phần mềm số hóa, quản lý kho và quản lý mượn – trả.',
      body: linkCards([
        { t: 'Phần mềm số hóa tài liệu', d: 'Nhận dạng nội dung và tạo dữ liệu chỉ mục từ tài liệu quét.', href: '/phan-mem/so-hoa/', cta: 'Xem phần mềm →' },
        { t: 'Phần mềm quản lý kho lưu trữ', d: 'Liên kết bản số với vị trí của hồ sơ giấy trong kho.', href: '/phan-mem/quan-ly-kho-luu-tru/', cta: 'Xem phần mềm →' },
        { t: 'Phần mềm quản lý mượn – trả', d: 'Tạo yêu cầu sử dụng bản giấy khi hồ sơ không thể khai thác hoàn toàn trên bản số.', href: '/phan-mem/quan-ly-muon-tra/', cta: 'Xem phần mềm →' },
      ]),
    }),
    section({
      title: 'Câu hỏi thường gặp',
      body: faq([
        { q: 'Phần mềm có tìm kiếm được nội dung bên trong bản scan không?', a: 'Có nếu tài liệu đã được nhận dạng và có lớp văn bản. Với file chỉ chứa hình ảnh, tài liệu cần được OCR trước khi có thể tìm kiếm toàn văn.' },
        { q: 'Có thể tìm kiếm theo các trường nghiệp vụ riêng không?', a: 'Có. Trường tìm kiếm được cấu hình theo cấu trúc hồ sơ và nhu cầu khai thác của đơn vị.' },
        { q: 'Người dùng có thể xem tất cả hồ sơ không?', a: 'Không nhất thiết. Phạm vi xem, tải hoặc chỉnh sửa được cấu hình theo vai trò, đơn vị và nhóm hồ sơ.' },
        { q: 'Phần mềm có thể sử dụng trên mạng nội bộ không?', a: 'Có thể triển khai trên hạ tầng nội bộ. Cấu hình máy chủ và phương án truy cập được xác định sau khi khảo sát kỹ thuật.' },
        { q: 'Có thể nhập dữ liệu từ hệ thống cũ không?', a: 'Có thể nếu dữ liệu hiện có đủ cấu trúc và có thể chuyển đổi. HT DATA sẽ kiểm tra một bộ mẫu trước khi xác định phương án nhập.' },
      ]),
    }),
    cta({
      title: 'Đăng ký demo',
      text: 'Gửi dữ liệu mẫu để HT DATA cấu hình và trình diễn kết quả tra cứu.',
      buttons: [callBtn, { text: 'Đăng ký demo', href: '/lien-he/?demo', lg: true }],
    }),
  ].join('\n'),
};
