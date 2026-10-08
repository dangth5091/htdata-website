// Cấu hình dựng site. Biến môi trường SITE_URL, BASE_PATH, PREVIEW ghi đè các giá trị dưới đây.
export default {
  // Địa chỉ gốc của site (dùng cho canonical, sitemap).
  siteUrl: 'https://htdata.vn',

  // Thư mục con khi site không nằm ở gốc tên miền. Khi deploy bằng GitHub Actions, giá trị này được lấy tự động.
  basePath: '',

  // PREVIEW = true: chặn công cụ tìm kiếm (noindex) và tô vàng các số liệu chưa xác minh.
  // Chuyển sang false khi đã đối chiếu xong bảng số liệu và sẵn sàng lên sóng chính thức.
  preview: true,

  // Nơi nhận form liên hệ. FormSubmit gửi nội dung form về hộp thư; lần gửi đầu tiên cần bấm xác nhận trong email.
  formEndpoint: 'https://formsubmit.co/ajax/info.htdata@gmail.com',
};
