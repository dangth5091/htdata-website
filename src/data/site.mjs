// Thông tin dùng chung toàn site. Sửa ở đây là đổi trên mọi trang.

export const site = {
  legalName: 'CÔNG TY TNHH HT DATA',
  tagline: 'Giải pháp Chỉnh lý, Số hóa và Quản lý hồ sơ',
  description:
    'HT DATA triển khai trọn gói chỉnh lý, số hóa tài liệu, xây dựng cơ sở dữ liệu và phần mềm tra cứu, quản lý hồ sơ cho cơ quan nhà nước.',
  hotline: '0911.515.032',
  hotlineSpaced: '0911 515 032',
  hotlineTel: '0911515032',
  email: 'info.htdata@gmail.com',
  hours: '7h30 – 17h30, T2 – T7',
  hoursLong: '7h30 – 17h30, Thứ 2 – Thứ 7',
  address: '85 Lạc Long Quân, Phường Bình Thới, TP. Hồ Chí Minh',
  taxId: '0319150313',
  iso: 'ISO/IEC 27001:2022 · ISO/IEC 20000-1:2018',
  year: 2026,
};

export const services = [
  { t: 'Chỉnh lý tài liệu', href: '/dich-vu/chinh-ly-tai-lieu/' },
  { t: 'Số hóa tài liệu', href: '/dich-vu/so-hoa-tai-lieu/' },
  { t: 'Quản lý và lưu trữ hồ sơ', href: '/dich-vu/quan-ly-luu-tru-ho-so/' },
  { t: 'Xây dựng cơ sở dữ liệu', href: '/dich-vu/xay-dung-co-so-du-lieu/' },
];

export const software = [
  { t: 'Số hóa', short: 'Số hóa', href: '/phan-mem/so-hoa/' },
  { t: 'Tra cứu', short: 'Tra cứu', href: '/phan-mem/tra-cuu-ho-so/' },
  { t: 'Quản lý kho lưu trữ', short: 'Quản lý kho lưu trữ', href: '/phan-mem/quan-ly-kho-luu-tru/' },
  { t: 'Quản lý mượn – trả', short: 'Quản lý mượn – trả', href: '/phan-mem/quan-ly-muon-tra/' },
];

export const nav = [
  { key: 'home', t: 'Trang chủ', href: '/' },
  { key: 'dich-vu', t: 'Dịch vụ', children: services },
  { key: 'phan-mem', t: 'Phần mềm', children: software },
  { key: 'du-an', t: 'Dự án', href: '/du-an/' },
  { key: 'gioi-thieu', t: 'Giới thiệu', href: '/ve-ht-data/' },
  { key: 'tin-tuc', t: 'Tin tức', href: '/tin-tuc/' },
  { key: 'lien-he', t: 'Liên hệ', href: '/lien-he/', cta: true },
];

// Nhóm đơn vị — khóa dùng cho chip lọc /du-an/?nhom=…
export const groups = [
  { key: 'khoi-dang', t: 'Khối Đảng' },
  { key: 'ubnd', t: 'UBND tỉnh / xã' },
  { key: 'toa-an', t: 'Tòa án' },
  { key: 'co-quan-khac', t: 'Cơ quan khác' },
];

// Dịch vụ — khóa dùng cho /du-an/?dich-vu=…
export const serviceKeys = [
  { key: 'chinh-ly', t: 'Chỉnh lý' },
  { key: 'so-hoa', t: 'Số hóa' },
  { key: 'co-so-du-lieu', t: 'Xây dựng cơ sở dữ liệu' },
  { key: 'quan-ly-luu-tru', t: 'Quản lý và lưu trữ hồ sơ' },
];

/* Dự án. m = [mét giá, trang, hồ sơ, tháng] — số liệu chưa xác minh (nền vàng ở chế độ PREVIEW).
   href chỉ có khi đã dựng trang case study. */
export const projects = [
  {
    id: 'so',
    nhom: 'ubnd',
    dichVu: 'chinh-ly',
    group: 'UBND tỉnh',
    service: 'Chỉnh lý',
    title: 'Chỉnh lý khối hồ sơ hành chính tồn đọng của một Sở',
    short: 'Phân loại và lập hồ sơ cho khối tài liệu hình thành qua nhiều năm; bàn giao mục lục và cơ sở dữ liệu phục vụ quản lý, tra cứu.',
    desc: 'Khối tài liệu hình thành trong gần 20 năm chưa được lập hồ sơ và mục lục. HT DATA triển khai tại trụ sở theo 4 lô nghiệm thu, bàn giao hồ sơ đã chỉnh lý cùng cơ sở dữ liệu phiếu tin.',
    m: ['1.200', '9,8 triệu', '58.000', '7'],
    img: 'du-an-1',
    imgAlt: 'Ảnh thi công tại kho của Sở',
    href: '/du-an/chinh-ly-khoi-ho-so-hanh-chinh-ton-dong-cua-mot-so/',
  },
  {
    id: 'bqlda',
    nhom: 'co-quan-khac',
    dichVu: 'so-hoa',
    group: 'Ban quản lý dự án',
    service: 'Số hóa',
    title: 'Số hóa hồ sơ hoàn công và bản vẽ khổ lớn',
    short: 'Quét tài liệu theo từng lô, đặt chỉ mục và tổ chức dữ liệu theo công trình, hạng mục.',
    desc: 'Bản vẽ A0 gấp nhiều lớp, mực phai. Quét khổ lớn, đặt chỉ mục theo công trình, hạng mục.',
    m: ['190', '1,8 triệu', '12.400', '6'],
    img: 'du-an-2',
    imgAlt: 'Ảnh máy quét bản vẽ khổ A0',
    href: '/du-an/so-hoa-ho-so-hoan-cong-va-ban-ve-kho-lon/',
  },
  {
    id: 'toa-an',
    nhom: 'toa-an',
    dichVu: 'co-so-du-lieu',
    group: 'Tòa án',
    service: 'Số hóa',
    title: 'Số hóa và lập cơ sở dữ liệu hồ sơ vụ án',
    short: 'Số hóa hồ sơ tại trụ sở, nhập thông tin nghiệp vụ và đưa dữ liệu vào phần mềm để tìm kiếm theo phạm vi được phân quyền.',
    desc: 'Hồ sơ vụ án chỉ có bản giấy, tra cứu phải lục kho. Số hóa tại trụ sở, tra cứu theo số thụ lý, số bản án.',
    m: ['420', '3,4 triệu', '26.500', '5'],
    img: 'du-an-3',
    imgAlt: 'Ảnh số hóa hồ sơ vụ án tại trụ sở tòa',
  },
  {
    id: 'huyen-uy',
    nhom: 'khoi-dang',
    dichVu: 'chinh-ly',
    group: 'Khối Đảng',
    service: 'Chỉnh lý',
    title: 'Chỉnh lý tài liệu phông lưu trữ của một Huyện ủy',
    short: 'Tài liệu nhiều nhiệm kỳ chưa lập hồ sơ. Chỉnh lý tại trụ sở theo hướng dẫn của Văn phòng Trung ương Đảng.',
    desc: 'Tài liệu nhiều nhiệm kỳ chưa lập hồ sơ. Chỉnh lý tại trụ sở theo hướng dẫn của Văn phòng Trung ương Đảng.',
    m: ['380', '3,1 triệu', '18.200', '5'],
    img: 'du-an-4',
    imgAlt: 'Ảnh chỉnh lý tài liệu tại kho của Huyện ủy',
  },
];

export const projectById = (id) => projects.find((p) => p.id === id);
