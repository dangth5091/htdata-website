import { section, cards, steps, listCards, linkCards, spec, faq, cta, callBtn, img, btns } from '../lib.mjs';

const hero = `
<section class="hero"><div class="wrap hero-app">
  <div>
    <p class="kicker">Phần mềm</p>
    <h1>Quản lý mượn – trả</h1>
    <p class="lead">Phần mềm quản lý toàn bộ quá trình yêu cầu, phê duyệt, giao nhận và hoàn trả hồ sơ, giúp đơn vị giảm thất lạc và kiểm soát lịch sử sử dụng.</p>
    ${btns([{ text: 'Đăng ký demo', href: '/lien-he/?demo' }])}
  </div>
  <figure style="margin:0">
    <div class="zoomable" title="Bấm để phóng to">${img('pm-muon-tra', 'Ảnh giao diện: danh sách yêu cầu mượn với trạng thái, người mượn, ngày nhận và hạn trả', '16-9', 'app-shot')}</div>
    <figcaption style="font-size:13px;line-height:21px;color:var(--muted);margin-top:10px">Phiếu chia theo trạng thái chờ duyệt, đang giữ, quá hạn</figcaption>
  </figure>
</div></section>`;

export default {
  path: '/phan-mem/quan-ly-muon-tra/',
  nav: 'phan-mem',
  crumb: [{ t: 'Phần mềm' }, { t: 'Quản lý mượn – trả' }],
  title: 'Phần mềm quản lý mượn – trả hồ sơ',
  description: 'Phần mềm mượn – trả của HT DATA quản lý toàn bộ quá trình yêu cầu, phê duyệt, giao nhận và hoàn trả hồ sơ, giúp đơn vị giảm thất lạc và kiểm soát lịch sử sử dụng.',
  body: [
    hero,
    section({
      title: 'Tính năng',
      lead: 'Quản lý yêu cầu, phê duyệt, giao nhận, hạn trả và lịch sử sử dụng hồ sơ.',
      body: cards([
        { t: 'Tạo yêu cầu mượn', d: 'Người dùng chọn hồ sơ, nêu mục đích và thời gian dự kiến sử dụng.' },
        { t: 'Phê duyệt theo thẩm quyền', d: 'Yêu cầu được chuyển đến người có trách nhiệm xem xét trước khi giao hồ sơ.' },
        { t: 'Giao nhận hồ sơ', d: 'Ghi nhận người nhận, thời điểm giao và tình trạng hồ sơ khi đưa ra khỏi kho.' },
        { t: 'Theo dõi hạn trả', d: 'Hiển thị hồ sơ đang được mượn, sắp đến hạn hoặc đã quá hạn.' },
        { t: 'Xác nhận hoàn trả', d: 'Cập nhật thời điểm, tình trạng và vị trí hồ sơ sau khi trả về kho.' },
        { t: 'Lưu lịch sử sử dụng', d: 'Theo dõi toàn bộ yêu cầu, phê duyệt, giao nhận và hoàn trả của từng hồ sơ.' },
      ]),
    }),
    section({
      tone: 'soft',
      title: 'Cách hoạt động',
      lead: 'Mỗi yêu cầu được theo dõi từ lúc tạo đến khi hồ sơ trở về đúng vị trí.',
      body: steps([
        { t: 'Gửi yêu cầu', d: 'Người dùng tìm hồ sơ, chọn thời gian mượn và gửi yêu cầu trên hệ thống.' },
        { t: 'Phê duyệt', d: 'Người có thẩm quyền xem thông tin và quyết định chấp thuận hoặc từ chối.' },
        { t: 'Giao hồ sơ', d: 'Nhân sự kho xác nhận giao nhận, người mượn và tình trạng hồ sơ.' },
        { t: 'Hoàn trả', d: 'Nhân sự kho kiểm tra, xác nhận trả và đưa hồ sơ về đúng vị trí lưu trữ.' },
      ]),
    }),
    section({
      title: 'Thông tin triển khai',
      lead: 'Cấu hình theo cơ cấu phê duyệt, số người dùng và quy trình mượn – trả.',
      body: spec([
        ['Phù hợp với', 'Đơn vị có hồ sơ giấy được khai thác thường xuyên'],
        ['Đầu vào', 'Danh mục hồ sơ, người dùng và quy trình phê duyệt'],
        ['Chức năng chính', 'Yêu cầu, phê duyệt, giao nhận, nhắc hạn và hoàn trả'],
        ['Triển khai', 'Trên hạ tầng của đơn vị hoặc môi trường do HT DATA vận hành'],
        ['Cách tính', 'Theo số người dùng, số lượng hồ sơ và phạm vi triển khai'],
      ]),
    }),
    section({
      tone: 'soft',
      title: 'Trường hợp sử dụng',
      lead: 'Phù hợp với đơn vị có hồ sơ giấy được khai thác thường xuyên.',
      body: cards(
        [
          { t: 'Không biết ai đang giữ hồ sơ', d: 'Thông tin mượn nằm trên phiếu giấy, tin nhắn hoặc bảng theo dõi riêng nên khó kiểm tra trạng thái hiện tại.' },
          { t: 'Hồ sơ thường xuyên trả muộn', d: 'Đơn vị chưa có công cụ theo dõi hạn trả và tổng hợp những hồ sơ đang quá hạn.' },
          { t: 'Quy trình phê duyệt chưa thống nhất', d: 'Mỗi bộ phận đang áp dụng một cách yêu cầu, giao nhận và lưu bằng chứng khác nhau.' },
        ],
        { cols: 3 },
      ),
    }),
    section({
      title: 'Bàn giao và tích hợp',
      lead: 'Bàn giao phần mềm, luồng phê duyệt, dữ liệu hồ sơ và tài liệu sử dụng.',
      body: listCards([
        { t: 'Hệ thống mượn – trả', items: ['Phần mềm được cài đặt và cấu hình', 'Luồng yêu cầu và phê duyệt', 'Tài khoản, vai trò và quyền sử dụng'] },
        { t: 'Dữ liệu vận hành', items: ['Danh mục hồ sơ có thể yêu cầu', 'Trạng thái mượn – trả', 'Lịch sử giao nhận và sử dụng'] },
        { t: 'Tài liệu sử dụng', items: ['Hướng dẫn quản trị và người dùng', 'Quy trình vận hành trên hệ thống', 'Biên bản bàn giao theo phạm vi hợp đồng'] },
      ]),
    }),
    section({
      tone: 'soft',
      title: 'Kiểm soát mượn – trả',
      lead: 'Mỗi lần phê duyệt, giao nhận và hoàn trả đều có người chịu trách nhiệm.',
      body: cards([
        { t: 'Chỉ mượn hồ sơ được phép', d: 'Hệ thống kiểm tra phạm vi hồ sơ và quyền của người gửi yêu cầu.' },
        { t: 'Phê duyệt có người chịu trách nhiệm', d: 'Mỗi quyết định được gắn với người xử lý và thời điểm thực hiện.' },
        { t: 'Giao nhận có xác nhận', d: 'Thông tin người nhận, thời gian và tình trạng hồ sơ được ghi lại khi bàn giao.' },
        { t: 'Hoàn trả đúng vị trí', d: 'Hồ sơ được xác nhận đã trả và cập nhật lại vị trí trước khi kết thúc phiếu.' },
      ]),
    }),
    section({
      title: 'An toàn và bảo mật',
      lead: 'Quyền yêu cầu, phê duyệt và giao hồ sơ được tách theo từng vai trò.',
      body: cards([
        { t: 'Phân quyền theo vai trò', d: 'Quyền yêu cầu, phê duyệt, giao nhận và quản trị được tách theo nhiệm vụ.' },
        { t: 'Giới hạn phạm vi hồ sơ', d: 'Người dùng chỉ tìm và yêu cầu những hồ sơ thuộc phạm vi được phép khai thác.' },
        { t: 'Nhật ký hoạt động', d: 'Các thao tác quan trọng được ghi nhận để phục vụ kiểm tra và truy vết.' },
        { t: 'Bảo vệ thông tin người dùng', d: 'Thông tin tài khoản và lịch sử sử dụng được quản lý theo chính sách của đơn vị.' },
      ]),
    }),
    section({
      tone: 'soft',
      title: 'Phần mềm liên quan',
      lead: 'Kết nối với phần mềm quản lý kho và tra cứu hồ sơ số.',
      body: linkCards([
        { t: 'Phần mềm quản lý kho lưu trữ', d: 'Xác định vị trí lấy hồ sơ và cập nhật lại vị trí sau khi hoàn trả.', href: '/phan-mem/quan-ly-kho-luu-tru/', cta: 'Xem phần mềm →' },
        { t: 'Phần mềm tra cứu hồ sơ', d: 'Cho phép xem bản số trước khi quyết định yêu cầu mượn bản giấy.', href: '/phan-mem/tra-cuu-ho-so/', cta: 'Xem phần mềm →' },
        { t: 'Phần mềm số hóa tài liệu', d: 'Tạo bản số để giảm nhu cầu sử dụng trực tiếp hồ sơ gốc.', href: '/phan-mem/so-hoa/', cta: 'Xem phần mềm →' },
      ]),
    }),
    section({
      title: 'Câu hỏi thường gặp',
      body: faq([
        { q: 'Có thể cấu hình nhiều cấp phê duyệt không?', a: 'Quy trình có thể được cấu hình theo cơ cấu và thẩm quyền của đơn vị. Số cấp và điều kiện chuyển duyệt cần được xác nhận trong giai đoạn khảo sát.' },
        { q: 'Phần mềm có tự động nhắc hạn trả không?', a: 'Có thể cấu hình cảnh báo trên hệ thống và các hình thức thông báo được hỗ trợ.' },
        { q: 'Có thể quản lý việc gia hạn mượn không?', a: 'Có thể bổ sung bước yêu cầu và phê duyệt gia hạn, đồng thời lưu lại thời hạn cũ và thời hạn mới trong lịch sử phiếu.' },
        { q: 'Hồ sơ bị trả thiếu hoặc hư hỏng được ghi nhận thế nào?', a: 'Nhân sự kho có thể ghi nhận tình trạng khi hoàn trả và chuyển trường hợp cần xử lý đến người có trách nhiệm.' },
        { q: 'Phần mềm có kết nối với quản lý kho không?', a: 'Có thể liên kết dữ liệu hồ sơ và vị trí với phần mềm quản lý kho để hỗ trợ lấy, giao và đưa hồ sơ về đúng vị trí.' },
      ]),
    }),
    cta({
      title: 'Đăng ký demo',
      text: 'Gửi quy trình hiện tại để HT DATA cấu hình và trình diễn luồng mượn – trả.',
      buttons: [callBtn, { text: 'Đăng ký demo', href: '/lien-he/?demo', lg: true }],
    }),
  ].join('\n'),
};
