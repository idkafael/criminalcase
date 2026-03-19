const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const BACKUP_ROOT = path.resolve(process.cwd(), 'backup-full-site');
const PUBLIC_ROOT = path.resolve(process.cwd(), 'public');

const CASES = ['caso_margot', 'caso_emma', 'caso_philipwarren'];

function ensureDir(p) {
  fs.mkdirSync(p, { recursive: true });
}

function sha1(s) {
  return crypto.createHash('sha1').update(String(s)).digest('hex');
}

function getLatestRunDir() {
  if (!fs.existsSync(BACKUP_ROOT)) throw new Error(`Backup root not found: ${BACKUP_ROOT}`);
  const entries = fs.readdirSync(BACKUP_ROOT, { withFileTypes: true })
    .filter((e) => e.isDirectory())
    .map((e) => e.name)
    .sort();
  if (!entries.length) throw new Error('No backup run directories found');
  return entries[entries.length - 1];
}

function tryFindDownloadedFile(backupImagesDir, srcUrl) {
  const u = new URL(srcUrl);
  const basename = path.basename(u.pathname);
  const prefix = sha1(srcUrl).slice(0, 10);
  const expected = path.join(backupImagesDir, `${prefix}_${basename}`);
  if (fs.existsSync(expected)) return expected;

  // fallback: find any file ending with _{basename}
  if (!fs.existsSync(backupImagesDir)) return null;
  const files = fs.readdirSync(backupImagesDir);
  const match = files.find((f) => f.endsWith(`_${basename}`));
  if (!match) return null;
  return path.join(backupImagesDir, match);
}

(async function main() {
  const runDir = getLatestRunDir();
  const runPath = path.join(BACKUP_ROOT, runDir);

  if (!fs.existsSync(PUBLIC_ROOT)) ensureDir(PUBLIC_ROOT);

  for (const slug of CASES) {
    const htmlSrc = path.join(runPath, 'html', `${slug}.rendered.html`);
    const assetsJsonSrc = path.join(runPath, 'assets', `${slug}.assets.json`);
    const backupImagesDir = path.join(runPath, 'assets', slug, 'images');

    if (!fs.existsSync(htmlSrc)) throw new Error(`Missing rendered HTML for ${slug}: ${htmlSrc}`);
    if (!fs.existsSync(assetsJsonSrc)) throw new Error(`Missing assets JSON for ${slug}: ${assetsJsonSrc}`);

    // 1) Copiar HTML para `public/${slug}/index.html`
    const htmlDestDir = path.join(PUBLIC_ROOT, slug);
    ensureDir(htmlDestDir);
    fs.copyFileSync(htmlSrc, path.join(htmlDestDir, 'index.html'));

    // 2) Copiar assets (imagens) preservando o pathname original do domínio
    const assets = JSON.parse(fs.readFileSync(assetsJsonSrc, 'utf8'));
    const images = Array.isArray(assets.images) ? assets.images : [];

    for (const img of images) {
      const srcUrl = img && img.src;
      if (!srcUrl) continue;
      if (!/^https?:\/\//i.test(srcUrl)) continue;

      const u = new URL(srcUrl);
      const pathname = u.pathname; // e.g. /caso_emma/imagens/emma_cartaz1.png
      const dest = path.join(PUBLIC_ROOT, pathname); // => public/caso_emma/imagens/...
      ensureDir(path.dirname(dest));

      const downloadedFile = tryFindDownloadedFile(backupImagesDir, srcUrl);
      if (!downloadedFile) continue;

      // Copiar sempre para o nome original (sem hash prefix)
      fs.copyFileSync(downloadedFile, dest);
    }
  }

  console.log('Sync concluido para public/: caso assets + index.html');
  console.log('Run:', runDir);
})().catch((e) => {
  console.error(e);
  process.exit(1);
});

