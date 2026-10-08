import { section, cards, steps, listCards, navyBlock, projectCards, faq, cta, callBtn, factStrip, img, btns } from '../lib.mjs';
import { projects } from '../data/site.mjs';

const hero = `
<section class="hero"><div class="wrap hero-split">
  <div>
    <p class="kicker">Dịch vụ</p>
    <h1>Chỉnh lý tài liệu lưu trữ</h1>
    <p class="lead">HT DATA phân loại, lập hồ sơ, biên mục và hệ thống hóa khối tài liệu tồn đọng, giúp đơn vị quản lý khoa học hơn và thuận tiện cho việc tra cứu, giao nộp.</p>
    ${btns([
      { text: 'Yêu cầu khảo sát', href: '/lien-he/' },
      { text: 'Xem dự án chỉnh lý', href: '/du-an/?dich-vu=chinh-ly', primary: false },
    ])}
  </div>
  ${img('dv-chinh-ly', 'Ảnh thật: nhân sự HT DATA đang phân loại hoặc biên mục hồ sơ tại đơn vị', '4-3')}
</div></section>`;

export default {
  path: '/dich-vu/chinh-ly-tai-lieu/',
  nav: 'dich-vu',
  crumb: [{ t: 'Dịch vụ' }, { t: 'Chỉnh lý tài liệu' }],
  title: 'Chỉnh lý tài liệu lưu trữ',
  description:
    'HT DATA phân loại, lập hồ sơ, biên mục và hệ thống hóa khối tài liệu tồn đọng, bàn giao hồ sơ, mục lục và cơ sở dữ liệu phiếu tin cho cơ quan nhà nước.',
  body: [
    hero,
    factStrip([
      ['Phù hợp với', 'Cơ quan nhà nước'],
      ['Đơn vị tính', 'Mét giá'],
      ['Triển khai', 'Tại đơn vị'],
      ['Thời gian', 'Sau khảo sát'],
      ['Bàn giao chính', 'Hồ sơ, mục lục và CSDL'],
    ]),
    section({
      tone: 'soft',
      title: 'Phạm vi dịch vụ',
      lead: 'Các hạng mục được xác định theo tình trạng và mức độ hoàn thiện của tài liệu.',
      body: cards([
        { t: 'Khảo sát và bóc khối lượng', d: 'Kiểm tra tình trạng tài liệu, xác định số mét giá và mức độ hoàn thiện của hồ sơ.' },
        { t: 'Xây dựng hướng dẫn chỉnh lý', d: 'Xây dựng phương án phân loại, lập hồ sơ và xác định giá trị để đơn vị xem xét trước khi triển khai.' },
        { t: 'Phân loại và lập hồ sơ', d: 'Phân loại tài liệu, lập mới hoặc hoàn thiện hồ sơ theo hướng dẫn đã được thống nhất.' },
        { t: 'Biên mục và nhập phiếu tin', d: 'Biên mục hồ sơ, đánh số tờ và nhập các trường thông tin phục vụ quản lý, tra cứu.' },
        { t: 'Hoàn thiện và sắp xếp hồ sơ', d: 'Vào bìa, hộp, dán nhãn và sắp xếp hồ sơ theo cấu trúc, vị trí trong kho.' },
        { t: 'Lập mục lục và hồ sơ nghiệm thu', d: 'Hoàn thiện mục lục, cơ sở dữ liệu, danh mục tài liệu loại và tài liệu nghiệm thu theo phạm vi hợp đồng.' },
      ]),
    }),
    section({
      title: 'Quy trình chỉnh lý',
      lead: 'Tài liệu được xử lý theo 4 giai đoạn, với điểm kiểm tra tại từng bước.',
      body: steps([
        { t: 'Khảo sát và chuẩn bị', d: 'Giao nhận, kiểm tra tình trạng tài liệu, xác định khối lượng và xây dựng phương án phân loại.' },
        { t: 'Phân loại và lập hồ sơ', d: 'Phân loại tài liệu, lập mới hoặc hoàn thiện hồ sơ, xác định tiêu đề và thời hạn bảo quản.' },
        { t: 'Biên mục và hệ thống hóa', d: 'Biên mục, đánh số, vào bìa, hộp và sắp xếp hồ sơ theo phương án đã được phê duyệt.' },
        { t: 'Nghiệm thu và bàn giao', d: 'Hoàn thiện mục lục, cơ sở dữ liệu, danh mục tài liệu loại và các tài liệu nghiệm thu theo phạm vi hợp đồng.' },
      ]),
    }),
    navyBlock({
      title: 'Chỉnh lý nhanh hơn nhờ OCR và AI',
      lead: 'HT DATA ứng dụng công nghệ OCR, AI để hỗ trợ đọc và biên soạn tiêu đề hồ sơ. Kết quả do AI đề xuất được nhân sự nghiệp vụ kiểm tra trước khi cập nhật vào phiếu tin.',
      cta: { text: 'Xem phần mềm →', href: '/phan-mem/so-hoa/' },
      numbered: true,
      items: [
        { t: 'Quét và nhận dạng văn bản', d: 'Tài liệu được quét và nhận dạng bằng OCR, tạo lớp văn bản để hệ thống có thể đọc, tìm kiếm và xử lý nội dung.' },
        { t: 'AI trích xuất thông tin', d: 'AI nhận diện tên loại, số ký hiệu, ngày tháng, cơ quan ban hành và trích yếu, giúp giảm khối lượng đọc và nhập liệu thủ công.' },
        { t: 'AI đề xuất tiêu đề hồ sơ', d: 'AI phân tích nội dung và đề xuất tiêu đề theo quy tắc nghiệp vụ đã thống nhất với đơn vị.' },
        { t: 'Nhân sự nghiệp vụ kiểm tra', d: 'Nhân sự đối chiếu với tài liệu gốc, điều chỉnh và phê duyệt trước khi ghi vào phiếu tin.' },
      ],
    }),
    section({
      tone: 'soft',
      title: 'Sản phẩm bàn giao',
      lead: 'Hồ sơ giấy, công cụ tra cứu và tài liệu nghiệm thu được bàn giao đồng bộ.',
      body: listCards([
        { t: 'Hồ sơ giấy', items: ['Hồ sơ đã được phân loại và biên mục', 'Bìa, hộp và nhãn theo cấu trúc thống nhất', 'Tài liệu được sắp xếp theo vị trí trong kho'] },
        { t: 'Mục lục và dữ liệu', items: ['Mục lục hồ sơ bản in và bản mềm', 'Cơ sở dữ liệu phiếu tin', 'Danh mục tài liệu hết giá trị để đơn vị xem xét'] },
        { t: 'Hồ sơ nghiệm thu', items: ['Biên bản giao nhận trước và sau chỉnh lý', 'Báo cáo kết quả thực hiện', 'Tài liệu nghiệm thu theo phạm vi hợp đồng'] },
      ]),
    }),
    section({
      title: 'An toàn và bảo mật',
      lead: 'Tài liệu được kiểm soát từ khi tiếp nhận đến lúc nghiệm thu và bàn giao.',
      body: cards([
        { t: 'Giao nhận có biên bản', d: 'Tài liệu được kiểm đếm và xác nhận khi tiếp nhận, di chuyển và bàn giao theo từng lô.' },
        { t: 'Kiểm soát người tiếp cận', d: 'Nhân sự được phân công theo nhiệm vụ và thực hiện cam kết bảo mật trước khi tham gia dự án.' },
        { t: 'Theo dõi theo mã hồ sơ', d: 'Sai lệch và lịch sử xử lý được ghi nhận theo mã lô, hộp hoặc hồ sơ để thuận tiện đối chiếu.' },
        { t: 'Kiểm tra độc lập', d: 'Người thực hiện và người kiểm tra được phân công độc lập tại những công đoạn cần kiểm soát chất lượng.' },
      ]),
    }),
    section({
      tone: 'soft',
      title: 'Dự án liên quan',
      lead: 'Các dự án thể hiện khối lượng, phạm vi và kết quả HT DATA đã thực hiện.',
      more: { text: 'Toàn bộ dự án →', href: '/du-an/?dich-vu=chinh-ly' },
      body: projectCards(projects.slice(0, 3)),
    }),
    section({
      title: 'Câu hỏi thường gặp',
      body: faq([
        { q: 'Chi phí chỉnh lý được tính như thế nào?', a: ['Chi phí thường được xác định theo số mét giá tài liệu và mức độ hoàn thiện của hồ sơ. Tài liệu rời, lẫn nhiều năm hoặc chưa được phân loại sẽ có khối lượng công việc khác với tài liệu đã được sắp xếp sơ bộ.', 'Sau khi khảo sát, HT DATA sẽ bóc tách từng hạng mục và lập dự toán theo khối lượng thực tế, yêu cầu nghiệp vụ và điều kiện thi công của đơn vị.'] },
        { q: 'Tài liệu có bắt buộc phải đưa ra khỏi trụ sở không?', a: ['Không. HT DATA có thể bố trí nhân sự và thiết bị để chỉnh lý ngay tại trụ sở của đơn vị.', 'Với tài liệu được phép đưa ra ngoài, hai bên có thể lựa chọn triển khai tại trung tâm vận hành của HT DATA. Hình thức giao nhận, vận chuyển và bảo mật sẽ được thống nhất trước khi thực hiện.'] },
        { q: 'Đơn vị vẫn có thể tra cứu hồ sơ trong thời gian thi công không?', a: ['Có. Tài liệu thường được chia thành từng lô để vừa thi công vừa duy trì khả năng tra cứu.', 'Khi đơn vị cần sử dụng một hồ sơ đang được xử lý, nhân sự dự án sẽ xác định vị trí và thực hiện giao nhận theo quy trình đã thống nhất. Thời gian cung cấp phụ thuộc vào quy mô dự án và mức độ khẩn cấp của yêu cầu.'] },
        { q: 'Tài liệu rách, ẩm mốc hoặc mối mọt được xử lý như thế nào?', a: ['HT DATA sẽ đánh giá tình trạng tài liệu trong quá trình khảo sát và tách riêng những hồ sơ cần xử lý đặc biệt.', 'Các công việc như vệ sinh, làm phẳng, khử nấm mốc, kiểm soát côn trùng hoặc phục hồi tài liệu sẽ được đề xuất thành hạng mục riêng khi cần. Không tự ý can thiệp vào tài liệu hư hỏng khi chưa có phương án được đơn vị chấp thuận.'] },
        { q: 'Sau chỉnh lý có cần số hóa ngay không?', a: ['Không bắt buộc. Chỉnh lý giúp tài liệu được phân loại, lập hồ sơ và xây dựng công cụ tra cứu ngay cả khi đơn vị chưa số hóa.', 'Tuy nhiên, thực hiện chỉnh lý trước sẽ giúp quá trình số hóa sau đó chính xác và tiết kiệm hơn vì tài liệu đã có cấu trúc, thứ tự và thông tin hồ sơ rõ ràng.'] },
      ]),
    }),
    cta({
      title: 'Khối tài liệu của đơn vị chưa được phân loại?',
      text: 'HT DATA sẽ khảo sát hiện trạng, xác định khối lượng và đề xuất phương án chỉnh lý phù hợp.',
      buttons: [callBtn, { text: 'Yêu cầu khảo sát', href: '/lien-he/', lg: true }],
    }),
  ].join('\n'),
};
