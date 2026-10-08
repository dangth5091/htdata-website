import { section, cards, steps, listCards, projectCards, faq, cta, callBtn, factStrip, img, btns } from '../lib.mjs';
import { projects } from '../data/site.mjs';

const hero = `
<section class="hero"><div class="wrap hero-split">
  <div>
    <p class="kicker">Dịch vụ</p>
    <h1>Quản lý và lưu trữ hồ sơ</h1>
    <p class="lead">Tổ chức kho hồ sơ theo vị trí rõ ràng, kiểm soát quá trình tra cứu và mượn – trả, đồng thời bảo quản tài liệu theo phương án phù hợp với đơn vị.</p>
    ${btns([
      { text: 'Yêu cầu khảo sát kho', href: '/lien-he/' },
      { text: 'Xem phần mềm quản lý hồ sơ', href: '/phan-mem/quan-ly-kho-luu-tru/', primary: false },
    ])}
  </div>
  ${img('dv-luu-tru', 'Ảnh thật: kho hồ sơ có mã vị trí, hộp và giá được sắp xếp rõ ràng', '4-3')}
</div></section>`;

// Khối navy dạng dải: tiêu đề + mô tả + liên kết, không có lưới thẻ (navyBlock không phù hợp).
const navyBanner = `
<section class="sec navy"><div class="wrap" style="display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:20px 44px">
  <div style="flex:1 1 520px"><h2 style="max-width:none">Biết hồ sơ nằm ở đâu và đang được ai sử dụng</h2><p class="lead" style="max-width:72ch;margin-bottom:0">Phần mềm quản lý kho liên kết hồ sơ với vị trí vật lý. Phần mềm mượn – trả giúp đơn vị theo dõi yêu cầu, người đang giữ, hạn trả và lịch sử sử dụng.</p></div>
  <div class="btns"><a class="btn btn-ghost" href="/phan-mem/quan-ly-kho-luu-tru/">Xem phần mềm quản lý kho →</a><a class="btn btn-ghost" href="/phan-mem/quan-ly-muon-tra/">Xem phần mềm mượn – trả →</a></div>
</div></section>`;

const related = projects.filter((p) => p.dichVu === 'quan-ly-luu-tru');

export default {
  path: '/dich-vu/quan-ly-luu-tru-ho-so/',
  nav: 'dich-vu',
  crumb: [{ t: 'Dịch vụ' }, { t: 'Quản lý và lưu trữ hồ sơ' }],
  title: 'Quản lý và lưu trữ hồ sơ',
  description:
    'Tổ chức kho hồ sơ theo vị trí rõ ràng, kiểm soát quá trình tra cứu và mượn – trả, đồng thời bảo quản tài liệu theo phương án phù hợp với đơn vị.',
  body: [
    hero,
    factStrip([
      ['Phù hợp với', 'Đơn vị có kho hồ sơ'],
      ['Đơn vị tính', 'Hồ sơ, hộp, mét giá'],
      ['Triển khai', 'Tại đơn vị'],
      ['Công cụ', 'Phần mềm quản lý kho'],
      ['Bàn giao chính', 'Sơ đồ và mã vị trí'],
    ]),
    section({
      tone: 'soft',
      title: 'Phạm vi dịch vụ',
      lead: 'Kiểm đếm, mã hóa, sắp xếp và quản lý vị trí hồ sơ.',
      body: cards([
        { t: 'Kiểm đếm và mã hóa', d: 'Kiểm đếm, lập danh mục và gán mã cho từng hồ sơ, hộp.' },
        { t: 'Thiết lập cấu trúc kho', d: 'Quy hoạch kho, phòng, dãy, giá và hộp theo diện tích và khối lượng.' },
        { t: 'Sắp xếp theo vị trí', d: 'Đưa hồ sơ vào đúng vị trí đã quy hoạch và cập nhật lên phần mềm.' },
        { t: 'Quản lý tra cứu, mượn – trả', d: 'Tiếp nhận yêu cầu, giao nhận hồ sơ và theo dõi hạn hoàn trả.' },
        { t: 'Theo dõi lịch sử hồ sơ', d: 'Ghi nhận tình trạng và lịch sử di chuyển của từng hồ sơ.' },
        { t: 'Bảo quản tài liệu', d: 'Vệ sinh, bảo quản và kiểm soát nguy cơ gây hại theo phạm vi thỏa thuận.' },
      ]),
    }),
    section({
      title: 'Quy trình triển khai',
      lead: 'Hồ sơ được tổ chức, đưa vào quản lý và theo dõi trong quá trình sử dụng.',
      body: steps([
        { t: 'Khảo sát kho và hồ sơ', d: 'Kiểm tra số lượng, tình trạng tài liệu, không gian kho và nhu cầu khai thác.' },
        { t: 'Kiểm đếm và mã hóa', d: 'Lập danh mục, gán mã cho hồ sơ, hộp, giá và vị trí bảo quản.' },
        { t: 'Sắp xếp và đưa vào quản lý', d: 'Bố trí hồ sơ theo sơ đồ kho và nhập dữ liệu vị trí vào phần mềm.' },
        { t: 'Vận hành và báo cáo', d: 'Tiếp nhận yêu cầu tra cứu, kiểm soát mượn – trả và cập nhật trạng thái hồ sơ.' },
      ]),
    }),
    section({
      tone: 'soft',
      title: 'Sản phẩm bàn giao',
      lead: 'Hồ sơ đã sắp xếp, danh mục vị trí và quy trình vận hành kho.',
      body: listCards([
        { t: 'Kho và vị trí', items: ['Sơ đồ kho, dãy, giá và vị trí bảo quản', 'Mã định danh cho từng hồ sơ hoặc hộp', 'Hồ sơ được sắp xếp theo vị trí'] },
        { t: 'Danh mục và dữ liệu', items: ['Danh mục hồ sơ và hộp lưu trữ', 'Dữ liệu quản lý vị trí trên phần mềm', 'Liên kết hồ sơ giấy với bản số nếu có'] },
        { t: 'Quy trình và báo cáo', items: ['Quy trình tra cứu và mượn – trả', 'Báo cáo tình trạng và khối lượng hồ sơ', 'Biên bản giao nhận theo từng đợt'] },
      ]),
    }),
    section({
      title: 'An toàn và bảo mật',
      lead: 'Hoạt động lưu giữ, tra cứu và mượn – trả đều được ghi nhận.',
      body: cards([
        { t: 'Giao nhận có biên bản', d: 'Hồ sơ được kiểm đếm và xác nhận mỗi lần tiếp nhận, di chuyển hoặc hoàn trả.' },
        { t: 'Phân quyền tiếp cận', d: 'Chỉ người được đơn vị chỉ định mới được yêu cầu và tiếp nhận hồ sơ.' },
        { t: 'Lưu lịch sử sử dụng', d: 'Mọi lượt tra cứu, mượn và hoàn trả đều được ghi lại theo mã hồ sơ.' },
        { t: 'Kiểm soát điều kiện kho', d: 'Điều kiện kho và sự cố tài liệu được xử lý theo phương án đã thống nhất.' },
      ]),
    }),
    navyBanner,
    section({
      tone: 'soft',
      title: 'Dự án liên quan',
      lead: 'Các dự án tổ chức kho, mã hóa vị trí và quản lý hồ sơ tập trung.',
      more: { text: 'Toàn bộ dự án →', href: '/du-an/?dich-vu=quan-ly-luu-tru' },
      body: projectCards(related.length ? related : projects.slice(0, 3)),
    }),
    section({
      title: 'Câu hỏi thường gặp',
      body: faq([
        { q: 'Hồ sơ có bắt buộc phải chuyển đến kho HT DATA không?', a: ['Không. HT DATA có thể tổ chức và quản lý hồ sơ ngay tại kho của đơn vị, lưu trữ tại trung tâm của HT DATA hoặc kết hợp hai hình thức.', 'Phương án phù hợp phụ thuộc vào diện tích kho, tần suất khai thác, yêu cầu bảo mật và quy định quản lý tài liệu của đơn vị.'] },
        { q: 'Đơn vị có thể tiếp tục sử dụng hồ sơ trong thời gian tổ chức kho không?', a: ['Có. Hồ sơ được kiểm đếm và xử lý theo từng khu vực hoặc từng lô để hạn chế ảnh hưởng đến hoạt động thường xuyên.', 'Những hồ sơ cần sử dụng trong quá trình triển khai được xác định vị trí và giao nhận theo quy trình tạm thời đã thống nhất.'] },
        { q: 'Thời gian tìm và cung cấp một hồ sơ được xác định như thế nào?', a: ['Thời gian phụ thuộc vào hình thức lưu trữ, mức độ hoàn thiện của danh mục, vị trí hồ sơ và yêu cầu giao nhận.', 'Sau khi hồ sơ đã được mã hóa đầy đủ, người dùng có thể tra cứu vị trí trên phần mềm. Thời gian cung cấp và phương thức bàn giao sẽ được quy định trong thỏa thuận dịch vụ.'] },
        { q: 'Phần mềm có quản lý được cả hồ sơ giấy và bản số không?', a: ['Có. Phần mềm có thể quản lý thông tin mô tả của hồ sơ, vị trí bản giấy trong kho và liên kết với file số tương ứng.', 'Quyền xem file, quyền yêu cầu mượn bản giấy và lịch sử sử dụng được cấu hình theo vai trò của từng người dùng.'] },
        { q: 'Tài liệu ẩm mốc hoặc có dấu hiệu côn trùng được xử lý ra sao?', a: ['Tài liệu có dấu hiệu hư hỏng sẽ được tách khỏi khu vực lưu trữ chung để hạn chế lây lan. HT DATA sẽ đánh giá tình trạng và đề xuất phương án vệ sinh, kiểm soát côn trùng hoặc xử lý chuyên môn phù hợp.', 'Việc xử lý chỉ được thực hiện sau khi đơn vị chấp thuận phạm vi và phương pháp áp dụng.'] },
      ]),
    }),
    cta({
      title: 'Cần tổ chức lại hoặc đưa kho hồ sơ vào quản lý?',
      text: 'HT DATA sẽ khảo sát hiện trạng, xác định khối lượng và đề xuất mô hình quản lý tại đơn vị, lưu trữ thuê ngoài hoặc kết hợp.',
      // Khung gốc có 2 nút cùng nhãn "Yêu cầu khảo sát" (/lien-he/?demo và /lien-he/) — nút phụ thay bằng nút gọi như trang Chỉnh lý.
      buttons: [callBtn, { text: 'Yêu cầu khảo sát', href: '/lien-he/', lg: true }],
    }),
  ].join('\n'),
};
