import { section, bulletCards, projectCards, navyBlock, steps, cta, callBtn, statStrip, img, btns, v } from '../lib.mjs';
import { projects } from '../data/site.mjs';

const hero = `
<section class="hero"><div class="wrap hero-home">
  <div>
    <h1>Chỉnh lý, số hóa và quản lý <br class="d-only">hồ sơ cho cơ quan nhà nước</h1>
    <p class="lead">HT DATA triển khai trọn gói từ khảo sát hiện trạng, chỉnh lý và số hóa tài liệu đến xây dựng cơ sở dữ liệu, phần mềm tra cứu và quản lý hồ sơ sau bàn giao.</p>
    ${btns([
      { text: 'Yêu cầu khảo sát', href: '/lien-he/', lg: true },
      { text: 'Dự án đã thực hiện', href: '/du-an/', primary: false, lg: true },
    ])}
  </div>
  ${img('home-hero', 'Ảnh thật: nhân sự HT DATA chỉnh lý hồ sơ tại kho của đơn vị', '4-3', 'framed')}
</div></section>`;

const stats = statStrip([
  { n: v('7+ năm'), l: 'Kinh nghiệm chỉnh lý và số hoá' },
  { n: v('1,2 triệu'), l: 'Trang tài liệu đã số hóa' },
  { n: v('3.400'), l: 'Mét giá đã chỉnh lý' },
  { n: v('500+'), l: 'Nhân sự chính thức và thời vụ' },
]);

const services = section({
  tone: 'soft',
  title: 'Dịch vụ',
  lead: 'HT DATA triển khai trọn gói hoặc theo từng hạng mục theo yêu cầu của từng đơn vị.',
  body: bulletCards([
    { t: 'Chỉnh lý tài liệu', href: '/dich-vu/chinh-ly-tai-lieu/', items: ['Phân loại, lập hồ sơ và xác định thời hạn bảo quản', 'Biên mục, hệ thống hóa, vào bìa và sắp xếp lên giá', 'Lập mục lục và cơ sở dữ liệu phiếu tin'] },
    { t: 'Số hóa tài liệu', href: '/dich-vu/so-hoa-tai-lieu/', items: ['Quét hồ sơ, sổ đóng gáy và bản vẽ từ khổ A5 đến A0', 'Xử lý hình ảnh, nhận dạng ký tự và soát lỗi OCR', 'Đặt chỉ mục, kiểm tra chất lượng và tổ chức file'] },
    { t: 'Quản lý và lưu trữ hồ sơ', href: '/dich-vu/quan-ly-luu-tru-ho-so/', items: ['Mã hóa vị trí theo kho, dãy, giá, hộp và hồ sơ', 'Quản lý tra cứu, mượn – trả và lịch sử sử dụng', 'Bảo quản tại kho của đơn vị hoặc trung tâm HT DATA'] },
    { t: 'Xây dựng cơ sở dữ liệu', href: '/dich-vu/xay-dung-co-so-du-lieu/', items: ['Trích xuất và nhập các trường thông tin từ hồ sơ', 'Chuẩn hóa, đối chiếu và soát lỗi dữ liệu', 'Chuyển đổi dữ liệu theo cấu trúc của hệ thống tiếp nhận'] },
  ]),
});

const audiences = section({
  title: 'Cơ quan HT DATA phục vụ',
  lead: 'Phương án triển khai được xây dựng theo yêu cầu, hướng dẫn và điều kiện thực tế của từng đơn vị.',
  body: bulletCards(
    [
      { t: 'Khối Đảng', href: '/du-an/?nhom=khoi-dang', items: ['Tài liệu của tỉnh ủy, đảng ủy và các ban xây dựng Đảng', 'Thực hiện theo hướng dẫn nghiệp vụ của khối Đảng', 'Thi công tại trụ sở khi tài liệu không được phép đưa ra ngoài'] },
      { t: 'Chính quyền địa phương', href: '/du-an/?nhom=ubnd', items: ['UBND các cấp, sở, ban, ngành và cơ quan chuyên môn', 'Chỉnh lý hồ sơ tồn đọng phục vụ quản lý và giao nộp', 'Số hóa, xây dựng cơ sở dữ liệu và phần mềm theo nhu cầu'] },
      { t: 'Cơ quan tư pháp', href: '/du-an/?nhom=toa-an', items: ['Hồ sơ vụ án hình sự, dân sự, hành chính và tài liệu nghiệp vụ', 'Yêu cầu chặt chẽ về bảo mật, phân quyền và nhật ký sử dụng', 'Tra cứu theo số thụ lý, loại án và các trường thông tin nghiệp vụ'] },
      { t: 'Cơ quan, đơn vị khác', href: '/du-an/?nhom=co-quan-khac', cta: 'Xem các dự án khác →', items: ['Ban quản lý dự án, đơn vị sự nghiệp công lập', 'Cơ quan chuyên môn, tổ chức ngành dọc tại địa phương', 'Khảo sát để lựa chọn dịch vụ và phần mềm phù hợp'] },
    ],
    { cols: 4, size: 'md', whole: false, cta: 'Xem dự án liên quan →' },
  ),
});

const work = section({
  tone: 'soft',
  title: 'Dự án đã thực hiện',
  lead: 'Kinh nghiệm được thể hiện bằng kết quả thực tế.',
  more: { text: 'Toàn bộ dự án →', href: '/du-an/' },
  body: projectCards(projects.slice(0, 3)),
});

const tech = navyBlock({
  title: 'Tối ưu quy trình nhờ công nghệ tự động hoá',
  lead: 'HT DATA ứng dụng AI, OCR và các công cụ tự phát triển vào từng công đoạn để giảm thao tác lặp lại, theo dõi tiến độ và kiểm soát dữ liệu xuyên suốt quá trình thực hiện.',
  cta: { text: 'Xem bộ phần mềm →', href: '/phan-mem/so-hoa/' },
  items: [
    { t: 'Nhận dạng và trích xuất dữ liệu', d: 'OCR và AI hỗ trợ nhận dạng nội dung, đề xuất trường thông tin và giảm khối lượng nhập liệu thủ công. Kết quả được nhân sự soát lỗi trước khi bàn giao.' },
    { t: 'Theo dõi tiến độ trực tuyến', d: 'Tiến độ được cập nhật theo từng công đoạn. Các sai lệch cần xử lý đều được ghi nhận và theo dõi đến khi hoàn tất.' },
    { t: 'Bàn giao đúng cấu trúc dữ liệu', d: 'Cấu trúc dữ liệu và định dạng bàn giao được thống nhất từ đầu, giúp hạn chế việc nhập lại hoặc chuyển đổi sau dự án.' },
    { t: 'Mã hóa, định vị hồ sơ giấy', d: 'Mỗi hồ sơ được liên kết với kho, phòng, dãy, giá và hộp, giúp xác định vị trí bản gốc khi cần khai thác.' },
  ],
});

const apps = section({
  tone: 'soft',
  title: 'Bộ phần mềm HT DATA',
  lead: 'Đơn vị có thể triển khai từng phần mềm hoặc kết nối thành một hệ thống duy nhất.',
  body: bulletCards(
    [
      { t: 'Số hóa tài liệu', href: '/phan-mem/so-hoa/', items: ['Nhận dạng ký tự bằng OCR và AI', 'Trích xuất, nhập và soát lỗi thông tin', 'Tạo file số và mục lục theo cấu trúc thống nhất'] },
      { t: 'Tra cứu hồ sơ', href: '/phan-mem/tra-cuu-ho-so/', items: ['Tìm kiếm theo trường thông tin hoặc nội dung toàn văn', 'Xem kết quả và mở đúng tài liệu cần tra cứu', 'Phân quyền truy cập theo người dùng hoặc đơn vị'] },
      { t: 'Quản lý mượn – trả', href: '/phan-mem/quan-ly-muon-tra/', items: ['Tạo và phê duyệt yêu cầu mượn hồ sơ', 'Theo dõi người đang giữ và thời hạn hoàn trả', 'Nhắc hạn và lưu lịch sử sử dụng hồ sơ'] },
      { t: 'Quản lý kho lưu trữ', href: '/phan-mem/quan-ly-kho-luu-tru/', items: ['Quản lý kho, phòng, dãy, giá, hộp và hồ sơ', 'Liên kết bản số với vị trí của hồ sơ giấy', 'Theo dõi tình trạng và lịch sử di chuyển'] },
    ],
    { cols: 4, size: 'sw', cta: 'Xem phần mềm →' },
  ),
});

const process = section({
  title: 'Quy trình triển khai',
  lead: 'Mỗi bước đều có phạm vi công việc, kết quả và tài liệu xác nhận rõ ràng.',
  body: steps(
    [
      { t: 'Khảo sát hiện trạng', d: 'Kiểm tra loại tài liệu, tình trạng hồ sơ, khối lượng dự kiến, nhu cầu tra cứu và điều kiện triển khai tại đơn vị.' },
      { t: 'Đề xuất và triển khai phương án', d: 'Thống nhất phạm vi dịch vụ, phần mềm, tiến độ và phương án kiểm soát chất lượng trước khi triển khai theo từng lô.' },
      { t: 'Nghiệm thu và bàn giao', d: 'Kiểm tra kết quả, hoàn thiện các nội dung cần điều chỉnh và bàn giao tài liệu, mục lục, cơ sở dữ liệu hoặc phần mềm theo hợp đồng.' },
    ],
    { cols: 3, acc: false },
  ),
});

export default {
  path: '/',
  nav: 'home',
  bodyClass: 'home',
  title: 'HT DATA — Chỉnh lý, số hóa và quản lý hồ sơ cho cơ quan nhà nước',
  description:
    'HT DATA triển khai trọn gói từ khảo sát hiện trạng, chỉnh lý và số hóa tài liệu đến xây dựng cơ sở dữ liệu, phần mềm tra cứu và quản lý hồ sơ sau bàn giao.',
  body: [
    hero,
    stats,
    services,
    audiences,
    work,
    tech,
    apps,
    process,
    cta({
      title: 'Đơn vị cần chỉnh lý, số hóa hay quản lý hồ sơ?',
      text: 'HT DATA sẽ khảo sát hiện trạng, xác định khối lượng và đề xuất phương án dịch vụ, phần mềm hoặc mô hình kết hợp phù hợp.',
      buttons: [{ text: 'Yêu cầu khảo sát', href: '/lien-he/', lg: true }, { ...callBtn, text: '0911.515.032', lg: true }],
    }),
  ].join('\n'),
};
