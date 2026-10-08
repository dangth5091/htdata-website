// Dựng site tĩnh: node build.mjs  →  dist/
// Không phụ thuộc thư viện ngoài. Cấu hình trong site.config.mjs (có thể ghi đè bằng biến môi trường).
import { readdirSync, mkdirSync, writeFileSync, rmSync, cpSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import config from './site.config.mjs';
import { layout } from './src/lib.mjs';

const ROOT = dirname(fileURLToPath(import.meta.url));
const SRC = join(ROOT, 'src');
const OUT = join(ROOT, 'dist');

const cfg = {
  ...config,
  siteUrl: (process.env.SITE_URL || config.siteUrl).replace(/\/$/, ''),
  basePath: (process.env.BASE_PATH ?? config.basePath).replace(/\/$/, ''),
  preview: process.env.PREVIEW ? process.env.PREVIEW === 'true' : config.preview,
  version: Date.now().toString(36),
};

// Khi site nằm trong thư mục con (vd. GitHub Pages không tên miền riêng), thêm tiền tố cho mọi đường dẫn tuyệt đối.
const withBase = (html) =>
  cfg.basePath ? html.replace(/(href|src|action)="\/(?!\/)/g, `$1="${cfg.basePath}/`) : html;

rmSync(OUT, { recursive: true, force: true });
mkdirSync(OUT, { recursive: true });

const pages = [];
for (const f of readdirSync(join(SRC, 'pages')).filter((f) => f.endsWith('.mjs')).sort()) {
  const mod = await import(pathToFileURL(join(SRC, 'pages', f)).href);
  const list = Array.isArray(mod.default) ? mod.default : [mod.default];
  pages.push(...list);
}

for (const page of pages) {
  const html = withBase(layout(page, { ...cfg, siteUrl: cfg.siteUrl + cfg.basePath }));
  const file = page.file || join(page.path, 'index.html');
  const dest = join(OUT, file);
  mkdirSync(dirname(dest), { recursive: true });
  writeFileSync(dest, html);
}

cpSync(join(SRC, 'assets'), join(OUT, 'assets'), { recursive: true });
if (existsSync(join(SRC, 'static'))) cpSync(join(SRC, 'static'), OUT, { recursive: true });

const indexable = pages.filter((p) => !p.noindex && !p.file);
writeFileSync(
  join(OUT, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${indexable
    .map((p) => `  <url><loc>${cfg.siteUrl}${cfg.basePath}${p.path}</loc></url>`)
    .join('\n')}\n</urlset>\n`,
);
writeFileSync(
  join(OUT, 'robots.txt'),
  cfg.preview ? 'User-agent: *\nDisallow: /\n' : `User-agent: *\nAllow: /\n\nSitemap: ${cfg.siteUrl}${cfg.basePath}/sitemap.xml\n`,
);
writeFileSync(join(OUT, '.nojekyll'), '');

console.log(`✓ ${pages.length} trang → dist/  (preview: ${cfg.preview}, base: "${cfg.basePath || '/'}", url: ${cfg.siteUrl})`);
