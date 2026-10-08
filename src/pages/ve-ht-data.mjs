import { section, cards, listCards, imageCards, dots, cta, v } from '../lib.mjs';

const panel = (items) => `<div class="card">${dots(items, 'two')}</div>`;

const cells = (rows) => `<div class="cells">${rows.map(([k, val]) => `<div><p class="label">${k}</p><p class="v">${val}</p></div>`).join('')}</div>`;

const statCards = (rows) =>
  `<div class="grid" style="--cols:4">${rows.map(([n, l]) => `<div class="card"><p class="stat-num">${n}</p><p class="stat-lbl" style="font-size:14px;line-height:22px;margin-top:8px">${l}</p></div>`).join('')}</div>`;

export default {
  path: '/ve-ht-data/',
  nav: 'gioi-thieu',
  crumb: [{ t: 'Giới thiệu' }],
  title: 'Giới thiệu HT DATA',
  description:
    'HT DATA cung cấp dịch vụ chỉnh lý, số hóa, xây dựng cơ sở dữ liệu và phần mềm quản lý hồ sơ cho cơ quan, tổ chức — kết hợp nghiệp vụ lưu trữ với công nghệ số.',
  body: [
    `<section class="hero hero-wide"><div class="wrap">
      <h1 style="max-width:26ch">Kết hợp nghiệp vụ lưu trữ với công nghệ số</h1>
      <p class="lead">HT DATA cung cấp dịch vụ chỉnh lý, số hóa, xây dựng cơ sở dữ liệu và phần mềm quản lý hồ sơ cho cơ quan, tổ chức. Mỗi dự án được triển khai bởi đội ngũ nghiệp vụ am hiểu tài liệu lưu trữ và đội ngũ công nghệ trực tiếp phát triển các công cụ xử lý, kiểm tra và khai thác dữ liệu.</p>
      <p class="lead">Từ hồ sơ giấy đến dữ liệu bàn giao, toàn bộ quá trình được kiểm soát theo từng lô, có người chịu trách nhiệm và có căn cứ nghiệm thu.</p>
    </div></section>`,
    section({
      title: 'Nhóm đơn vị HT DATA phục vụ',
      lead: 'HT DATA xây dựng phương án theo đặc điểm hồ sơ, yêu cầu nghiệp vụ và điều kiện triển khai của từng nhóm đơn vị.',
      body: cards(
        [
          { t: 'UBND tỉnh, huyện, xã', d: 'Hồ sơ hành chính của Văn phòng UBND, các Sở, ban, ngành và UBND cấp cơ sở.' },
          { t: 'Cơ quan Đảng', d: 'Tài liệu phông lưu trữ của Tỉnh ủy, Huyện ủy, Đảng ủy và các cơ quan tham mưu.' },
          { t: 'Tòa án', d: 'Hồ sơ vụ án hình sự, dân sự và hành chính đã kết thúc, cần số hóa và tổ chức tra cứu.' },
          { t: 'Cơ quan nhà nước khác', d: 'Ban quản lý dự án, đơn vị sự nghiệp công lập, cơ quan chuyên môn và tổ chức ngành dọc tại địa phương.' },
        ],
        { cols: 4 },
      ),
    }),
    section({
      tone: 'soft',
      title: 'Hai đội ngũ cùng tham gia một dự án',
      lead: 'Nghiệp vụ chính xác và công nghệ phù hợp phải được triển khai đồng thời. Vì vậy, các dự án của HT DATA luôn có sự phối hợp giữa đội ngũ nghiệp vụ và đội ngũ công nghệ.',
      body: listCards(
        [
          { t: 'Đội ngũ nghiệp vụ', items: ['Khảo sát hiện trạng và bóc tách khối lượng tài liệu.', 'Xây dựng phương án phân loại, lập hồ sơ và xác định thời hạn bảo quản.', 'Chỉnh lý, biên mục và kiểm tra sản phẩm theo từng lô.', 'Phối hợp với đơn vị trong quá trình giao nhận và nghiệm thu.'] },
          { t: 'Đội ngũ công nghệ', items: ['Phát triển phần mềm số hóa, tra cứu và quản lý hồ sơ.', 'Ứng dụng AI để nhận dạng, trích xuất dữ liệu và hỗ trợ phân loại tài liệu.', 'Xây dựng công cụ theo dõi tiến độ, đối soát và kiểm soát chất lượng.', 'Tích hợp dữ liệu với hạ tầng và hệ thống hiện có của đơn vị.'] },
        ],
        { cols: 2 },
      ),
    }),
    section({
      title: 'Ứng dụng AI trong xử lý tài liệu',
      lead: 'AI được sử dụng để tự động hóa những công việc có khối lượng lớn, đồng thời đưa các trường hợp chưa chắc chắn về cho nhân sự kiểm tra.',
      body: cards(
        [
          { t: 'Nhận dạng nội dung', d: 'OCR và ICR hỗ trợ chuyển nội dung trên ảnh quét thành văn bản có thể tìm kiếm.' },
          { t: 'Trích xuất mục lục', d: 'Hệ thống nhận diện các trường như số, ký hiệu, ngày văn bản, trích yếu, cơ quan ban hành và người ký.' },
          { t: 'Nhận diện biểu mẫu', d: 'Các mẫu tài liệu có cấu trúc cố định được nhận diện và bóc tách dữ liệu tự động.' },
          { t: 'Kiểm tra theo độ tin cậy', d: 'Dữ liệu có độ tin cậy thấp được đưa vào hàng chờ để nhân sự đối chiếu với bản quét trước khi bàn giao.' },
        ],
        { cols: 4 },
      ),
    }),
    section({
      tone: 'soft',
      title: 'Phần mềm được phát triển và nâng cấp thường xuyên',
      lead: 'HT DATA trực tiếp phát triển các phần mềm phục vụ số hóa, tra cứu và quản lý hồ sơ. Sản phẩm được cập nhật dựa trên yêu cầu triển khai thực tế, thay đổi nghiệp vụ và phản hồi từ người sử dụng.',
      body: panel([
        'Bổ sung tính năng theo nhu cầu quản lý của từng đơn vị.',
        'Cải tiến khả năng nhận dạng và trích xuất dữ liệu bằng AI.',
        'Tối ưu tốc độ xử lý đối với khối lượng hồ sơ lớn.',
        'Nâng cấp chức năng phân quyền, nhật ký thao tác và sao lưu.',
        'Hỗ trợ triển khai trên hạ tầng của đơn vị hoặc theo mô hình HT DATA vận hành.',
      ]),
    }),
    section({
      title: 'Nguồn lực triển khai',
      lead: 'Nguồn lực được bố trí theo khối lượng, loại tài liệu, yêu cầu tiến độ và địa điểm thực hiện của từng dự án.',
      body: cells([
        ['Nhân sự triển khai', `Hơn ${v('500')} nhân sự chính thức và nhân sự huy động theo dự án`],
        ['Cơ sở vận hành', `${v('03')} cơ sở xử lý và vận hành`],
        ['Khung giờ sản xuất', 'Có thể tổ chức hai ca từ 6 giờ đến 20 giờ'],
        ['Khổ tài liệu', 'Từ A0 đến A5, hồ sơ đóng gáy và bản vẽ khổ lớn'],
        ['Năng lực số hóa', `${v('[Công suất đã được xác minh]')} trang A4 quy đổi mỗi ngày`],
        ['Công nghệ', 'AI, OCR, ICR, OMR và các phần mềm do HT DATA phát triển'],
      ]),
    }),
    section({
      tone: 'soft',
      title: 'Khối lượng đã thực hiện',
      lead: `Số liệu được tổng hợp từ các dự án đã nghiệm thu và cập nhật đến ${v('[tháng/năm]')}.`,
      body: statCards([
        [v('[Số liệu]'), 'Trang A4 quy đổi đã số hóa'],
        [v('[Số liệu]'), 'Mét giá tài liệu đã chỉnh lý'],
        [v('[Số liệu]'), 'Hợp đồng đã hoàn thành'],
        [v('[Số liệu]'), 'Tỉnh, thành phố đã triển khai'],
      ]),
    }),
    section({
      title: 'Cơ sở vận hành',
      lead: 'HT DATA tổ chức khu vực tiếp nhận, xử lý và lưu giữ tài liệu phù hợp với từng loại dự án.',
      body: imageCards([
        { img: 'about-kho', alt: 'Ảnh thật: khu vực lưu giữ có kiểm soát', t: 'Khu vực lưu giữ có kiểm soát', d: 'Tài liệu được quản lý theo vị trí, mã lô và tình trạng bàn giao; việc ra vào được kiểm soát.' },
        { img: 'about-scan', alt: 'Ảnh thật: khu vực số hóa', t: 'Khu vực số hóa', d: 'Thiết bị được bố trí theo khổ và tình trạng tài liệu, từ hồ sơ A5 đến bản vẽ khổ A0.' },
        { img: 'about-chinh-ly', alt: 'Ảnh thật: khu vực chỉnh lý và nhập dữ liệu', t: 'Khu vực chỉnh lý và nhập dữ liệu', d: 'Nhân sự thực hiện phân loại, lập hồ sơ, biên mục và nhập phiếu tin theo từng lô công việc.' },
      ]),
    }),
    section({
      tone: 'soft',
      title: 'Kiểm soát chất lượng',
      lead: 'Mỗi lô tài liệu được theo dõi từ khi tiếp nhận đến khi nghiệm thu và bàn giao.',
      body: cards([
        { t: 'Quy trình được thống nhất trước khi triển khai', d: 'Phương án phân loại, trường dữ liệu, cách kiểm tra và tiêu chí nghiệm thu được xác nhận trước khi xử lý đại trà.' },
        { t: 'Người thực hiện và người kiểm tra độc lập', d: 'Sản phẩm được kiểm tra bởi nhân sự không trực tiếp thực hiện công đoạn đó.' },
        { t: 'Nghiệm thu theo từng lô', d: 'Đơn vị có thể kiểm tra và nghiệm thu từng phần, hạn chế sai lệch kéo dài đến cuối dự án.' },
        { t: 'Theo dõi tiến độ trên phần mềm', d: 'Khối lượng đã nhận, đang xử lý, cần kiểm tra và đã hoàn thành được cập nhật theo từng lô.' },
      ]),
    }),
    section({
      title: 'An toàn và bảo mật',
      lead: 'Các biện pháp bảo mật được áp dụng theo yêu cầu của từng đơn vị và mô hình triển khai.',
      body: panel([
        'Khu vực làm việc được kiểm soát ra vào và giám sát theo quy định.',
        'Nhân sự ký cam kết bảo mật và được phân quyền theo nhiệm vụ.',
        'Hồ sơ được theo dõi bằng mã lô, mã hộp và nhật ký thao tác.',
        'Thiết bị cá nhân bị hạn chế trong khu vực xử lý tài liệu.',
        'Dữ liệu trung gian được quản lý và xử lý sau nghiệm thu theo thỏa thuận.',
        'Cán bộ của đơn vị có thể giám sát tại địa điểm thi công.',
      ]),
    }),
    section({
      tone: 'soft',
      title: 'Chứng nhận đang duy trì',
      body: cards(
        [
          { t: 'ISO/IEC 27001:2022', d: 'Hệ thống quản lý an toàn thông tin.' },
          { t: 'ISO/IEC 20000-1:2018', d: 'Hệ thống quản lý dịch vụ công nghệ thông tin.' },
          { t: 'ISO 9001 và ISO 15489', d: 'Quản lý chất lượng và quản lý hồ sơ, tài liệu.' },
          { t: 'ISO 14001 và ISO 45001', d: 'Quản lý môi trường, an toàn và sức khỏe nghề nghiệp.' },
        ],
        { cols: 4 },
      ),
    }),
    cta({
      tone: 'white',
      title: 'Trao đổi về nhu cầu của đơn vị',
      text: 'Cung cấp loại hồ sơ, khối lượng dự kiến và yêu cầu triển khai để HT DATA đề xuất phương án phù hợp.',
      buttons: [{ text: 'Liên hệ tư vấn', href: '/lien-he/', lg: true }],
    }),
  ].join('\n'),
};
