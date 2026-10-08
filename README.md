# HT DATA — Website

Site tĩnh dựng từ bản thiết kế `HT DATA - Website.dc.html` (v3). Không phụ thuộc thư viện: chỉ cần Node 18+.

```bash
npm run build      # dựng vào dist/
npm run dev        # dựng rồi chạy thử ở http://localhost:4173
```

Mỗi lần đẩy lên nhánh `main`, GitHub Actions tự dựng và triển khai lên GitHub Pages (`.github/workflows/deploy.yml`).

## Cấu trúc

| Đường dẫn | Nội dung |
|---|---|
| `site.config.mjs` | Địa chỉ site, chế độ PREVIEW, nơi nhận form |
| `src/data/site.mjs` | Hotline, email, địa chỉ, menu, **danh sách dự án** |
| `src/pages/*.mjs` | Mỗi file một trang (hoặc một nhóm trang, vd. `case-studies.mjs`) |
| `src/lib.mjs` | Thành phần dùng chung: header, footer, thẻ, FAQ, CTA… |
| `src/assets/css/site.css` | Toàn bộ giao diện. Điểm chuyển duy nhất: 1024px |
| `src/assets/js/site.js` | Menu, accordion mobile, lọc dự án, thư viện ảnh, form |
| `src/assets/img/` | Ảnh thật (xem bên dưới) |

## Thay ảnh

Mọi vị trí ảnh đang là khung chờ có chú thích. Muốn thay, đặt file vào `src/assets/img/` với đúng tên mã ảnh (đuôi `.webp`, `.jpg` hoặc `.png`), rồi build lại — không cần sửa code. Nên nén ảnh, rộng tối đa ~1600px.

| Mã ảnh | Vị trí |
|---|---|
| `home-hero` | Ảnh lớn trang chủ (4:3) |
| `du-an-1` … `du-an-4` | Ảnh thẻ dự án |
| `dv-chinh-ly`, `dv-so-hoa`, `dv-luu-tru`, `dv-csdl` | Ảnh đầu trang 4 dịch vụ (4:3) |
| `pm-so-hoa`, `pm-tra-cuu`, `pm-kho`, `pm-muon-tra` | Ảnh giao diện 4 phần mềm (16:9) |
| `cs1-hero`, `cs2-hero` | Ảnh đầu trang 2 case study |
| `cs1-g-1` … `cs1-g-6`, `cs2-g-1` … `cs2-g-6` | Thư viện ảnh case study |
| `about-kho`, `about-scan`, `about-chinh-ly` | Cơ sở vận hành, trang Giới thiệu |

## Trước khi lên sóng chính thức

1. Đối chiếu mọi số liệu đang tô vàng (bọc bằng `v('…')` trong code) và thay các chỗ `[Số liệu]`, `[tháng/năm]`.
2. Đặt `preview: false` trong `site.config.mjs` → bỏ tô vàng, cho phép Google lập chỉ mục.
3. Form liên hệ dùng FormSubmit: lần gửi đầu tiên, hộp thư `info.htdata@gmail.com` nhận email kích hoạt — bấm xác nhận một lần.

## Gắn tên miền riêng (vd. htdata.vn)

1. Ở nhà cung cấp tên miền, tạo bản ghi DNS:
   - `A` cho `@` → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `CNAME` cho `www` → `<tài-khoản>.github.io`
2. GitHub → repo → Settings → Pages → Custom domain: nhập `htdata.vn`, bật **Enforce HTTPS** khi có chứng chỉ.
3. Chạy lại workflow (hoặc đẩy một commit) — đường dẫn tự chuyển về gốc tên miền.

## Thêm dự án / case study

- Dự án mới: thêm một mục vào `projects` trong `src/data/site.mjs` (thẻ ở trang chủ, trang dịch vụ, trang Dự án và chip lọc tự cập nhật).
- Case study: thêm một mục vào mảng `cases` trong `src/pages/case-studies.mjs`, rồi gán `href` tương ứng cho dự án.
