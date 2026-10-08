import { section, cards, steps, listCards, linkCards, spec, faq, cta, callBtn, img, btns } from '../lib.mjs';

const hero = `
<section class="hero"><div class="wrap hero-app">
  <div>
    <p class="kicker">Phần mềm</p>
    <h1>Số hóa tài liệu</h1>
    <p class="lead">Công nghệ OCR và AI tự động nhận dạng nội dung, trích xuất các trường mục lục và xác định tiêu đề hồ sơ.</p>
    ${btns([{ text: 'Đăng ký demo', href: '/lien-he/?demo' }])}
  </div>
  <figure style="margin:0" class="zoomable" title="Bấm để phóng to">${img('pm-so-hoa', 'Ảnh giao diện: bản quét bên trái, nội dung nhận dạng và các trường thông tin bên phải', '16-9', 'app-shot')}</figure>
</div></section>`;

export default {
  path: '/phan-mem/so-hoa/',
  nav: 'phan-mem',
  crumb: [{ t: 'Phần mềm' }, { t: 'Số hóa tài liệu' }],
  title: 'Phần mềm số hóa tài liệu — OCR và AI',
  description: 'Phần mềm số hóa của HT DATA dùng OCR và AI để nhận dạng nội dung, trích xuất các trường mục lục và đề xuất tiêu đề hồ sơ.',
  body: [
    hero,
    section({
      title: 'Tính năng',
      lead: 'Tự động nhận diện ký tự, trích xuất mục lục và xác định tiêu đề hồ sơ.',
      body: cards([
        { t: 'Tạo lớp văn bản có thể tìm kiếm', d: 'Nhận dạng chữ in và chữ đánh máy, tạo lớp văn bản trên file PDF (PDF/A 2 lớp) trong khi vẫn giữ nguyên hình ảnh bản gốc.' },
        { t: 'AI trích xuất mục lục', d: 'AI nhận diện số, ký hiệu, ngày ban hành, cơ quan ban hành, trích yếu và các trường thông tin theo yêu cầu của đơn vị.' },
        { t: 'AI đề xuất tiêu đề hồ sơ', d: 'AI phân tích nội dung tài liệu và đề xuất tiêu đề theo quy tắc nghiệp vụ đã thống nhất.' },
        { t: 'Tách tài liệu thành từng hồ sơ', d: 'Nhận biết trang phân cách hoặc dấu hiệu đã cấu hình để chia một lô nhiều ảnh scan thành các hồ sơ riêng.' },
        { t: 'Soát theo độ tin cậy', d: 'Những ký tự và trường thông tin có độ tin cậy thấp để nhân sự kiểm tra, thay vì soát lại toàn bộ dữ liệu.' },
        { t: 'Ghi nhận lịch sử chỉnh sửa', d: 'Lưu người thực hiện, thời điểm và nội dung thay đổi để phục vụ kiểm tra và truy vết khi cần.' },
      ]),
    }),
    section({
      tone: 'soft',
      title: 'Cách hoạt động',
      lead: 'AI đọc file scan, trích xuất dữ liệu và chuyển kết quả chưa chắc chắn cho nhân sự kiểm tra.',
      body: steps([
        { t: 'Tiếp nhận tài liệu số', d: 'Nạp file ảnh hoặc PDF, lựa chọn loại hồ sơ và cấu hình các trường thông tin cần trích xuất.' },
        { t: 'Nhận dạng và đề xuất', d: 'OCR tạo lớp văn bản; AI trích xuất dữ liệu mục lục và đề xuất tiêu đề hồ sơ theo quy tắc đã cấu hình.' },
        { t: 'Soát và phê duyệt', d: 'Hệ thống đưa các trường có độ tin cậy thấp vào hàng chờ. Nhân sự đối chiếu với ảnh quét, chỉnh sửa và phê duyệt kết quả.' },
        { t: 'Xuất và chuyển dữ liệu', d: 'File số, dữ liệu mục lục và tiêu đề đã duyệt được xuất theo cấu trúc thống nhất hoặc chuyển sang phần mềm quản lý.' },
      ]),
    }),
    section({
      title: 'Thông tin triển khai',
      lead: 'Cấu hình theo loại tài liệu, trường cần trích xuất, ngưỡng tin cậy và hạ tầng của đơn vị.',
      body: spec([
        ['Phù hợp với', 'Khối tài liệu vừa chỉnh lý hoặc đơn vị đã có file scan nhưng chưa có lớp văn bản, dữ liệu mục lục và tiêu đề hồ sơ'],
        ['Đầu vào', 'TIFF, JPEG, PNG hoặc PDF ảnh; hỗ trợ nhiều khổ giấy và loại tài liệu theo cấu hình'],
        ['Đầu ra', 'PDF có lớp văn bản, dữ liệu mục lục, tiêu đề hồ sơ đã duyệt và báo cáo kết quả xử lý'],
        ['Triển khai', 'Trên hạ tầng của đơn vị hoặc môi trường do HT DATA vận hành'],
        ['Cách tính', 'Theo số trang xử lý, số bản ghi, chức năng sử dụng hoặc phạm vi triển khai được thống nhất.'],
      ]),
    }),
    section({
      tone: 'soft',
      title: 'Trường hợp sử dụng',
      lead: 'Phù hợp với khối tài liệu lớn cần AI hỗ trợ nhận dạng và tạo dữ liệu chỉ mục.',
      body: cards(
        [
          { t: 'Có ảnh scan nhưng chưa thể tìm kiếm', d: 'File chỉ chứa hình ảnh, người dùng phải mở từng trang để đọc và chưa thể tìm kiếm theo tiêu đề, nội dung.' },
          { t: 'Cần mục lục cho khối lượng hồ sơ lớn', d: 'Đơn vị cần thu thập nhiều trường thông tin nhưng không đủ nhân sự để nhập lại toàn bộ bằng tay.' },
          { t: 'Cần hỗ trợ biên soạn tiêu đề hồ sơ', d: 'Khối tài liệu rời lẻ hoặc hồ sơ cũ chưa có tiêu đề thống nhất, cần phần mềm hỗ trợ để tiết kiệm thời gian và nhân lực.' },
        ],
        { cols: 3 },
      ),
    }),
    section({
      title: 'Bàn giao và tích hợp',
      lead: 'Bàn giao file số, dữ liệu do AI hỗ trợ trích xuất và cấu hình xử lý đã thống nhất.',
      body: listCards([
        { t: 'Tài liệu và dữ liệu', items: ['File số có lớp văn bản nếu thuộc phạm vi xử lý', 'Dữ liệu mục lục theo các trường đã cấu hình', 'Tiêu đề hồ sơ đã được nhân sự kiểm tra', 'Kết quả soát và trạng thái xử lý của từng lô'] },
        { t: 'Cấu hình và tài liệu sử dụng', items: ['Cấu hình mẫu hồ sơ và trường trích xuất', 'Tài khoản và quyền sử dụng theo vai trò', 'Hướng dẫn vận hành và soát dữ liệu'] },
        { t: 'Kết nối hệ thống', items: ['Xuất dữ liệu theo định dạng đã thống nhất', 'Chuyển dữ liệu sang phần mềm tra cứu hoặc quản lý hồ sơ của HT DATA', 'Tích hợp với hệ thống khác khi có phương thức kết nối phù hợp'] },
      ]),
    }),
    section({
      tone: 'soft',
      title: 'Kiểm soát chất lượng',
      lead: 'Kết quả AI được đánh giá theo độ tin cậy và soát lại tại các trường quan trọng.',
      body: cards([
        { t: 'Ngưỡng tin cậy theo trường dữ liệu', d: 'Mỗi trường có thể được thiết lập ngưỡng để xác định kết quả nào được chấp nhận và kết quả nào cần kiểm tra lại.' },
        { t: 'Hàng đợi soát tập trung', d: 'Nhân sự xử lý những ký tự hoặc trường chưa chắc chắn trong một màn hình, không cần mở lại toàn bộ hồ sơ.' },
        { t: 'Quy tắc kiểm tra dữ liệu', d: 'Hệ thống hỗ trợ kiểm tra trường bắt buộc, định dạng và giá trị không hợp lệ theo cấu hình.' },
        { t: 'Nhật ký chỉnh sửa', d: 'Mỗi thay đổi được gắn với người thực hiện và thời điểm xử lý để thuận tiện đối chiếu khi nghiệm thu.' },
      ]),
    }),
    section({
      title: 'An toàn và bảo mật',
      lead: 'Quyền truy cập, dữ liệu đầu vào và kết quả xử lý được kiểm soát theo vai trò.',
      body: cards([
        { t: 'Triển khai trên hạ tầng của đơn vị', d: 'Phần mềm có thể được cài đặt trong hệ thống nội bộ để dữ liệu được lưu giữ trong phạm vi do đơn vị quản lý.' },
        { t: 'Phân quyền theo vai trò', d: 'Người dùng chỉ được xem và xử lý những lô tài liệu phù hợp với nhiệm vụ được giao.' },
        { t: 'Ghi nhận hoạt động', d: 'Các thao tác nhập, soát và chỉnh sửa được lưu lại để phục vụ kiểm tra và truy vết.' },
        { t: 'Quản lý dữ liệu trung gian', d: 'Thời gian lưu giữ, sao lưu và xử lý dữ liệu trung gian được thực hiện theo cấu hình và thỏa thuận triển khai.' },
      ]),
    }),
    section({
      tone: 'soft',
      title: 'Phần mềm liên quan',
      lead: 'Dữ liệu sau số hóa có thể chuyển sang phần mềm tra cứu và quản lý hồ sơ.',
      body: linkCards([
        { t: 'Phần mềm tra cứu hồ sơ', d: 'Tìm kiếm theo trường thông tin hoặc nội dung toàn văn và mở đúng tài liệu cần xem.', href: '/phan-mem/tra-cuu-ho-so/', cta: 'Xem phần mềm →' },
        { t: 'Phần mềm quản lý kho lưu trữ', d: 'Liên kết bản số với hồ sơ, hộp, giá và vị trí của bản giấy trong kho.', href: '/phan-mem/quan-ly-kho-luu-tru/', cta: 'Xem phần mềm →' },
        { t: 'Phần mềm quản lý mượn – trả', d: 'Theo dõi yêu cầu, người đang giữ, thời hạn và lịch sử sử dụng hồ sơ.', href: '/phan-mem/quan-ly-muon-tra/', cta: 'Xem phần mềm →' },
      ]),
    }),
    section({
      title: 'Câu hỏi thường gặp',
      body: faq([
        { q: 'Phần mềm có thể cài trên hạ tầng của cơ quan không?', a: 'Có thể. Phần mềm có thể được triển khai trên hạ tầng của đơn vị hoặc môi trường do HT DATA vận hành. Cấu hình máy chủ, phương án truy cập và trách nhiệm quản trị sẽ được xác định sau khi khảo sát kỹ thuật.' },
        { q: 'Chi phí được tính theo số người dùng hay khối lượng tài liệu?', a: 'Chi phí phụ thuộc vào mô hình triển khai, khối lượng cần xử lý, số trường trích xuất, yêu cầu tích hợp và phạm vi hỗ trợ. HT DATA sẽ lập phương án sau khi kiểm tra bộ tài liệu mẫu và nhu cầu sử dụng thực tế.' },
        { q: 'Dữ liệu được lưu ở đâu và ai có thể xem?', a: 'Vị trí lưu dữ liệu phụ thuộc vào mô hình triển khai. Quyền xem, nhập, soát và quản trị được phân theo vai trò; các thao tác quan trọng được ghi nhận để phục vụ kiểm tra.' },
        { q: 'AI có thay thế hoàn toàn bước kiểm tra của con người không?', a: 'Không. AI và OCR giúp nhận dạng và đề xuất dữ liệu, nhưng kết quả còn phụ thuộc vào chất lượng bản quét, kiểu chữ và bố cục tài liệu. Các trường quan trọng hoặc có độ tin cậy thấp vẫn cần được nhân sự đối chiếu.' },
        { q: 'Phần mềm có nhận dạng được chữ viết tay không?', a: 'Khả năng nhận dạng phụ thuộc vào kiểu chữ, chất lượng hình ảnh và mẫu tài liệu. HT DATA cần kiểm tra một bộ mẫu thực tế trước khi xác định phạm vi và mức độ hỗ trợ.' },
        { q: 'Có thể tích hợp với hệ thống hiện có không?', a: 'Có thể nếu hệ thống tiếp nhận hỗ trợ định dạng nhập dữ liệu hoặc phương thức kết nối phù hợp. Hai bên sẽ thống nhất cấu trúc và thử nghiệm bằng một bộ dữ liệu mẫu trước khi triển khai chính thức.' },
        { q: 'AI đề xuất tiêu đề hồ sơ dựa trên thông tin nào?', a: 'AI phân tích nội dung tài liệu và các trường đã trích xuất để đề xuất tiêu đề từ những thành phần phù hợp như loại hồ sơ, cơ quan, đối tượng, nội dung, địa điểm và thời gian. Cấu trúc tiêu đề được thiết lập theo quy tắc nghiệp vụ đã thống nhất với đơn vị.' },
        { q: 'AI có tự ghi tiêu đề vào cơ sở dữ liệu không?', a: 'Không mặc định. Tiêu đề do AI đề xuất được đưa vào hàng chờ để nhân sự kiểm tra, điều chỉnh và phê duyệt trước khi cập nhật chính thức.' },
        { q: 'Có thể điều chỉnh cách AI đặt tiêu đề cho từng loại hồ sơ không?', a: 'Có. Các thành phần, thứ tự trình bày và quy tắc đặt tiêu đề có thể được cấu hình theo loại tài liệu và phương án nghiệp vụ của từng dự án.' },
      ]),
    }),
    cta({
      title: 'Đăng ký demo',
      text: 'Gửi tài liệu mẫu để thử khả năng nhận dạng và trích xuất dữ liệu bằng AI.',
      sub: 'Kết quả thử nghiệm giúp đơn vị đánh giá mức độ phù hợp trước khi quyết định phạm vi triển khai.',
      buttons: [callBtn, { text: 'Đăng ký demo', href: '/lien-he/?demo', lg: true }],
    }),
  ].join('\n'),
};
