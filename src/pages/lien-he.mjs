import { icon } from '../lib.mjs';
import { site } from '../data/site.mjs';

// 34 tỉnh, thành phố sau sắp xếp đơn vị hành chính (từ 01/7/2025).
const provinces = [
  'TP. Hà Nội', 'TP. Hồ Chí Minh', 'TP. Hải Phòng', 'TP. Đà Nẵng', 'TP. Cần Thơ', 'TP. Huế',
  'An Giang', 'Bắc Ninh', 'Cà Mau', 'Cao Bằng', 'Đắk Lắk', 'Điện Biên', 'Đồng Nai', 'Đồng Tháp', 'Gia Lai', 'Hà Tĩnh',
  'Hưng Yên', 'Khánh Hòa', 'Lai Châu', 'Lâm Đồng', 'Lạng Sơn', 'Lào Cai', 'Nghệ An', 'Ninh Bình', 'Phú Thọ', 'Quảng Ngãi',
  'Quảng Ninh', 'Quảng Trị', 'Sơn La', 'Tây Ninh', 'Thái Nguyên', 'Thanh Hóa', 'Tuyên Quang', 'Vĩnh Long',
];

const mapSrc = 'https://www.google.com/maps?q=' + encodeURIComponent('85 Lạc Long Quân, Phường Bình Thới, TP. Hồ Chí Minh') + '&output=embed';

const field = (id, label, input, { req = true, opt = '', hint = '', err = '' } = {}) => `
  <div class="f"><label for="${id}">${label}${req ? ' <span class="req" aria-hidden="true">*</span>' : opt ? ` <span class="opt">${opt}</span>` : ''}</label>${input}${hint ? `<p class="hint" id="${id}-hint">${hint}</p>` : ''}${err ? `<p class="err" id="${id}-err">${err}</p>` : ''}</div>`;

const form = `
<div class="form-card">
  <form id="survey-form" class="form" novalidate>
    <h2 data-form-title>Nhập thông tin liên hệ</h2>
    ${field('f-name', 'Họ tên', '<input id="f-name" name="name" type="text" autocomplete="name" placeholder="Nguyễn Văn A" required aria-describedby="f-name-err">', { err: 'Vui lòng nhập họ tên' })}
    ${field('f-org', 'Cơ quan / đơn vị', '<input id="f-org" name="org" type="text" autocomplete="organization" placeholder="VD: Sở Nội vụ tỉnh…" required aria-describedby="f-org-err">', { err: 'Vui lòng nhập tên cơ quan, đơn vị' })}
    <div class="f-row">
      ${field('f-tel', 'Điện thoại', '<input id="f-tel" name="phone" type="tel" inputmode="tel" autocomplete="tel" placeholder="09xx xxx xxx" required aria-describedby="f-tel-err">', { err: 'Số điện thoại không hợp lệ' })}
      ${field('f-mail', 'Email', '<input id="f-mail" name="email" type="email" autocomplete="email" placeholder="email@donvi.gov.vn" aria-describedby="f-mail-hint f-mail-err">', { req: false, opt: '(không bắt buộc)', hint: 'Điền nếu đơn vị muốn nhận dự toán bằng văn bản.', err: 'Email không hợp lệ' })}
    </div>
    ${field('f-need', 'Nhu cầu', '<textarea id="f-need" name="need" rows="3" placeholder="VD: chỉnh lý khoảng 300 mét giá hồ sơ hành chính, cần hoàn thành trong năm nay" required aria-describedby="f-need-err"></textarea>', { err: 'Vui lòng mô tả ngắn nhu cầu của đơn vị' })}
    <details class="opt-group" open><summary>Thông tin thêm (không bắt buộc)${icon.chev('#1f5fd0')}</summary>
      <div class="f-row">
        ${field('f-vol', 'Khối lượng ước tính', '<input id="f-vol" name="volume" type="text" placeholder="Mét giá hoặc số trang">', { req: false })}
        ${field('f-prov', 'Tỉnh / thành phố', `<select id="f-prov" name="province"><option value="">Chọn tỉnh / thành phố</option>${provinces.map((p) => `<option>${p}</option>`).join('')}</select>`, { req: false })}
      </div>
    </details>
    <input class="hp" type="text" name="_honey" tabindex="-1" autocomplete="off" aria-hidden="true">
    <p class="form-msg" role="alert"></p>
    <button class="btn btn-p btn-lg" type="submit">Gửi yêu cầu khảo sát</button>
    <p class="form-note">Thông tin chỉ dùng để liên hệ tư vấn, không chia sẻ cho bên thứ ba.</p>
  </form>
  <div class="form-ok" aria-live="polite">
    <div class="ok-ic">${icon.check()}</div>
    <h2>Đã nhận yêu cầu</h2>
    <p>Chuyên viên sẽ gọi lại trong 24 giờ làm việc. Mã theo dõi: <span class="code"></span><span data-email-note> — đã gửi kèm email nếu đơn vị đã điền email</span>.</p>
  </div>
</div>`;

export default {
  path: '/lien-he/',
  nav: 'lien-he',
  crumb: [{ t: 'Liên hệ' }],
  title: 'Liên hệ',
  description: `Liên hệ HT DATA: hotline ${site.hotline}, ${site.email}. Gửi yêu cầu khảo sát — chuyên viên phản hồi trong 24 giờ làm việc.`,
  body: `
<section class="hero"><div class="wrap">
  <h1 style="max-width:26ch">Liên hệ HT DATA</h1>
  <p class="lead" style="max-width:62ch">Gọi hotline hoặc để lại 4 thông tin — chuyên viên phản hồi trong 24 giờ làm việc.</p>
</div></section>
<section class="sec" style="padding-top:44px"><div class="wrap contact">
  <div>
    <div class="cinfo">
      <div class="hot-block"><span class="label">Hotline</span><a class="hot" href="tel:${site.hotlineTel}">${site.hotline}</a><p class="note">${site.hoursLong}</p></div>
      <div><span class="label">Email</span><p><a href="mailto:${site.email}">${site.email}</a></p></div>
      <div><span class="label">Trụ sở</span><p>${site.address}</p></div>
      <div><span class="label">Pháp nhân</span><p>${site.legalName} — MST ${site.taxId}</p></div>
    </div>
    <div class="map"><iframe src="${mapSrc}" title="Bản đồ trụ sở HT DATA — ${site.address}" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
  </div>
  <div class="form-col">${form}
    <div class="card" id="ho-so-nang-luc" style="margin-top:18px">
      <p class="card-t">Cần hồ sơ năng lực bản có dấu, hoặc tài liệu phục vụ mời thầu?</p>
      <p class="card-d">Liên hệ Bộ phận Dự án — Hồ sơ năng lực: <a href="tel:${site.hotlineTel}">${site.hotline}</a> · <a href="mailto:${site.email}">${site.email}</a>. Bản có dấu gửi qua đường công văn trong 2 ngày làm việc.</p>
      <p style="margin-top:14px"><a class="btn btn-s" href="mailto:${site.email}?subject=${encodeURIComponent('Yêu cầu hồ sơ năng lực HT DATA')}">Gửi yêu cầu qua email</a></p>
    </div>
  </div>
</div></section>`,
};
