import { section, cards, steps, listCards, linkCards, spec, faq, cta, callBtn, img, btns } from '../lib.mjs';

const hero = `
<section class="hero"><div class="wrap hero-app">
  <div>
    <p class="kicker">Phần mềm</p>
    <h1>Quản lý kho lưu trữ</h1>
    <p class="lead">Phần mềm quản lý hồ sơ theo kho, phòng, dãy, giá và hộp; liên kết vị trí bản giấy với danh mục và tài liệu số tương ứng.</p>
    ${btns([{ text: 'Đăng ký demo', href: '/lien-he/?demo' }])}
  </div>
  <figure style="margin:0">
    <div class="zoomable" title="Bấm để phóng to">${img('pm-kho', 'Ảnh giao diện: sơ đồ kho hoặc màn hình thông tin hồ sơ cùng vị trí lưu trữ', '16-9', 'app-shot')}</div>
    <figcaption style="font-size:13px;line-height:21px;color:var(--muted);margin-top:10px">Chọn một hộp trên sơ đồ kho là thấy đủ hồ sơ bên trong</figcaption>
  </figure>
</div></section>`;

export default {
  path: '/phan-mem/quan-ly-kho-luu-tru/',
  nav: 'phan-mem',
  crumb: [{ t: 'Phần mềm' }, { t: 'Quản lý kho lưu trữ' }],
  title: 'Phần mềm quản lý kho lưu trữ — vị trí hồ sơ giấy',
  description: 'Phần mềm quản lý kho của HT DATA quản lý hồ sơ theo kho, phòng, dãy, giá và hộp; liên kết vị trí bản giấy với danh mục và tài liệu số tương ứng.',
  body: [
    hero,
    section({
      title: 'Tính năng',
      lead: 'Quản lý hồ sơ theo kho, phòng, dãy, giá, hộp và vị trí thực tế.',
      body: cards([
        { t: 'Thiết lập cấu trúc kho', d: 'Khai báo kho, phòng, dãy, giá, tầng và hộp theo cách tổ chức thực tế của đơn vị.' },
        { t: 'Quản lý danh mục hồ sơ', d: 'Lưu thông tin mô tả, thời gian, loại hồ sơ, tình trạng và các trường nghiệp vụ liên quan.' },
        { t: 'Gán vị trí lưu trữ', d: 'Liên kết từng hồ sơ hoặc hộp với một vị trí cụ thể trong kho.' },
        { t: 'Tra cứu vị trí bản gốc', d: 'Tìm hồ sơ và xác định nhanh nơi đang bảo quản bản giấy.' },
        { t: 'Theo dõi di chuyển hồ sơ', d: 'Ghi nhận việc chuyển hồ sơ giữa các vị trí và cập nhật trạng thái hiện tại.' },
        { t: 'Thống kê kho lưu trữ', d: 'Tổng hợp số lượng hồ sơ, hộp, vị trí đang sử dụng và dung lượng kho theo phạm vi được cấu hình.' },
      ]),
    }),
    section({
      tone: 'soft',
      title: 'Cách hoạt động',
      lead: 'Hồ sơ được nhập danh mục, gán mã vị trí và theo dõi trong quá trình di chuyển.',
      body: steps([
        { t: 'Thiết lập kho', d: 'Khai báo cấu trúc kho và các vị trí lưu trữ theo hiện trạng thực tế.' },
        { t: 'Nhập danh mục hồ sơ', d: 'Nạp dữ liệu hồ sơ và thông tin hộp từ bảng tính, cơ sở dữ liệu hoặc nguồn đã được chuẩn hóa.' },
        { t: 'Gán mã và vị trí', d: 'Liên kết hồ sơ với hộp, giá và vị trí lưu trữ tương ứng.' },
        { t: 'Vận hành và cập nhật', d: 'Tra cứu vị trí, điều chuyển hồ sơ và cập nhật trạng thái trong quá trình sử dụng.' },
      ]),
    }),
    section({
      title: 'Thông tin triển khai',
      lead: 'Cấu hình theo mô hình kho, số lượng hồ sơ và quy trình vận hành của đơn vị.',
      body: spec([
        ['Phù hợp với', 'Đơn vị có kho hồ sơ đang vận hành hoặc cần tổ chức lại'],
        ['Đầu vào', 'Danh mục hồ sơ, danh sách hộp và cấu trúc kho'],
        ['Chức năng chính', 'Quản lý vị trí, tình trạng và lịch sử di chuyển'],
        ['Triển khai', 'Trên hạ tầng của đơn vị hoặc môi trường do HT DATA vận hành'],
        ['Cách tính', 'Theo quy mô kho, số lượng hồ sơ và phạm vi chức năng'],
      ]),
    }),
    section({
      tone: 'soft',
      title: 'Trường hợp sử dụng',
      lead: 'Phù hợp với kho hồ sơ cần quản lý vị trí và liên kết bản giấy với bản số.',
      body: cards(
        [
          { t: 'Không xác định được vị trí hồ sơ', d: 'Thông tin vị trí nằm trong bảng tính, sổ theo dõi hoặc phụ thuộc vào kinh nghiệm của người quản lý kho.' },
          { t: 'Kho có nhiều phòng, giá và hộp', d: 'Quy mô kho lớn khiến việc cập nhật sơ đồ và kiểm kê thủ công mất nhiều thời gian.' },
          { t: 'Cần liên kết bản giấy với bản số', d: 'Đơn vị muốn tra cứu dữ liệu trên phần mềm nhưng vẫn xác định được vị trí của hồ sơ gốc trong kho.' },
        ],
        { cols: 3 },
      ),
    }),
    section({
      title: 'Bàn giao và tích hợp',
      lead: 'Bàn giao phần mềm, cấu trúc kho, dữ liệu vị trí và hướng dẫn vận hành.',
      body: listCards([
        { t: 'Hệ thống quản lý kho', items: ['Phần mềm được cài đặt và cấu hình', 'Cấu trúc kho, phòng, dãy, giá và hộp', 'Tài khoản và quyền sử dụng'] },
        { t: 'Dữ liệu quản lý', items: ['Danh mục hồ sơ và hộp', 'Mã vị trí và trạng thái hồ sơ', 'Liên kết với tài liệu số nếu thuộc phạm vi dự án'] },
        { t: 'Tài liệu vận hành', items: ['Hướng dẫn quản trị và sử dụng', 'Quy tắc mã hóa vị trí', 'Biên bản bàn giao theo phạm vi hợp đồng'] },
      ]),
    }),
    section({
      tone: 'soft',
      title: 'Kiểm soát nghiệp vụ',
      lead: 'Theo dõi thay đổi vị trí, kết quả kiểm kê và các trường hợp sai lệch.',
      body: cards([
        { t: 'Vị trí không trùng lặp', d: 'Hệ thống kiểm soát mã vị trí để hạn chế khai báo trùng hoặc sai cấu trúc.' },
        { t: 'Điều chuyển có ghi nhận', d: 'Mỗi lần thay đổi vị trí được cập nhật cùng người thực hiện và thời điểm xử lý.' },
        { t: 'Kiểm kê theo phạm vi', d: 'Đơn vị có thể kiểm tra hồ sơ theo kho, giá, hộp hoặc nhóm được lựa chọn.' },
        { t: 'Báo cáo sai lệch', d: 'Các trường hợp thiếu hồ sơ, sai vị trí hoặc chưa đủ thông tin được tổng hợp để xử lý.' },
      ]),
    }),
    section({
      title: 'An toàn và bảo mật',
      lead: 'Quyền xem và cập nhật dữ liệu kho được phân theo vai trò người dùng.',
      body: cards([
        { t: 'Phân quyền theo kho và nghiệp vụ', d: 'Người dùng chỉ xem hoặc cập nhật những kho và nhóm hồ sơ thuộc phạm vi được giao.' },
        { t: 'Nhật ký thay đổi', d: 'Các thao tác thêm, sửa và điều chuyển được ghi nhận để phục vụ đối chiếu.' },
        { t: 'Sao lưu dữ liệu', d: 'Phương án sao lưu và phục hồi được cấu hình theo hạ tầng và yêu cầu vận hành của đơn vị.' },
        { t: 'Triển khai nội bộ', d: 'Phần mềm có thể hoạt động trên hạ tầng của cơ quan khi thông tin kho không được phép lưu giữ bên ngoài.' },
      ]),
    }),
    section({
      tone: 'soft',
      title: 'Phần mềm liên quan',
      lead: 'Kết nối với phần mềm tra cứu, số hóa và quản lý mượn – trả.',
      body: linkCards([
        { t: 'Phần mềm tra cứu hồ sơ', d: 'Tìm kiếm dữ liệu và xem bản số trước khi yêu cầu sử dụng bản giấy.', href: '/phan-mem/tra-cuu-ho-so/', cta: 'Xem phần mềm →' },
        { t: 'Phần mềm quản lý mượn – trả', d: 'Kiểm soát việc đưa hồ sơ ra khỏi vị trí lưu trữ và theo dõi quá trình hoàn trả.', href: '/phan-mem/quan-ly-muon-tra/', cta: 'Xem phần mềm →' },
        { t: 'Phần mềm số hóa tài liệu', d: 'Tạo bản số và dữ liệu chỉ mục để liên kết với hồ sơ giấy trong kho.', href: '/phan-mem/so-hoa/', cta: 'Xem phần mềm →' },
      ]),
    }),
    section({
      title: 'Câu hỏi thường gặp',
      body: faq([
        { q: 'Có cần chỉnh lý hồ sơ trước khi đưa vào phần mềm không?', a: 'Không phải trong mọi trường hợp, nhưng hồ sơ cần có danh mục và thông tin nhận diện tối thiểu. HT DATA sẽ kiểm tra dữ liệu hiện có trước khi đề xuất phương án.' },
        { q: 'Phần mềm có thể quản lý nhiều kho không?', a: 'Có thể cấu hình nhiều kho và nhiều cấp vị trí theo cơ cấu của đơn vị. Phạm vi cụ thể được xác nhận trong quá trình khảo sát.' },
        { q: 'Có thể nhập dữ liệu từ Excel không?', a: 'Có thể nếu bảng dữ liệu có cấu trúc đủ rõ. HT DATA sẽ đối chiếu trường và xử lý bộ mẫu trước khi nhập toàn bộ.' },
        { q: 'Phần mềm có quản lý bản số không?', a: 'Phần mềm có thể liên kết hồ sơ giấy với file số hoặc phần mềm tra cứu, tùy theo mô hình triển khai.' },
        { q: 'Khi chuyển hồ sơ sang vị trí khác, hệ thống có lưu lịch sử không?', a: 'Các lần điều chuyển có thể được ghi nhận cùng vị trí cũ, vị trí mới, người thực hiện và thời điểm cập nhật.' },
      ]),
    }),
    cta({
      title: 'Đăng ký demo',
      text: 'Gửi sơ đồ kho và danh mục mẫu để HT DATA cấu hình thử hệ thống.',
      buttons: [callBtn, { text: 'Đăng ký demo', href: '/lien-he/?demo', lg: true }],
    }),
  ].join('\n'),
};
