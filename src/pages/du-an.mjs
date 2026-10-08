import { projectRows, cta } from '../lib.mjs';
import { projects, groups, serviceKeys } from '../data/site.mjs';

const count = (k) => projects.filter((p) => p.nhom === k).length;
const chips = `
<div class="chips" role="navigation" aria-label="Phân loại dự án">
  <span class="chips-lbl">Phân loại:</span>
  <a class="chip is-on" data-key="" href="/du-an/">Tất cả (${projects.length})</a>
  ${groups.map((g) => `<a class="chip" data-key="nhom=${g.key}" href="/du-an/?nhom=${g.key}">${g.t} (${count(g.key)})</a>`).join('')}
</div>
<p class="lead" style="font-size:14px;color:var(--muted);margin-top:12px" hidden data-filter-note ${serviceKeys.map((s) => `data-${s.key}="${s.t}"`).join(' ')}></p>`;

export default {
  path: '/du-an/',
  nav: 'du-an',
  crumb: [{ t: 'Dự án' }],
  title: 'Dự án đã thực hiện',
  description: 'Các dự án chỉnh lý, số hóa và xây dựng cơ sở dữ liệu do HT DATA triển khai cho cơ quan nhà nước.',
  body: `
<section class="hero"><div class="wrap">
  <p class="kicker">Dự án</p>
  <h1>Dự án HT DATA đã thực hiện</h1>
  <p class="lead" style="max-width:66ch">Các dự án chỉnh lý, số hóa và xây dựng cơ sở dữ liệu do HT DATA triển khai cho cơ quan nhà nước.</p>
</div></section>
<section class="sec" style="padding-bottom:48px"><div class="wrap">
  ${chips}
  <div style="margin-top:26px">${projectRows(projects)}</div>
</div></section>
${cta({
  title: 'Trao đổi về nhu cầu của đơn vị',
  text: 'HT DATA sẽ trao đổi về phạm vi, cách tính khối lượng và phương án triển khai phù hợp với thực tế của đơn vị.',
  buttons: [{ text: 'Liên hệ HT DATA', href: '/lien-he/', lg: true }],
})}`,
};
