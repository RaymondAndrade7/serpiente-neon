// Revisa la sintaxis del JavaScript incrustado en index.html con `node --check`.
// Se rellenan saltos de línea antes de cada <script> para que los errores
// apunten a la misma línea que en index.html.
import { readFileSync, writeFileSync, mkdtempSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const file = process.argv[2] ?? 'index.html';
const html = readFileSync(file, 'utf8');
const dir = mkdtempSync(join(tmpdir(), 'check-js-'));
const re = /<script(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/gi;

let count = 0, failed = false;
for (const m of html.matchAll(re)) {
  count++;
  const offset = html.slice(0, m.index + m[0].indexOf('>') + 1).split('\n').length - 1;
  const tmp = join(dir, `${file.replace(/\W/g, '_')}-script${count}.js`);
  writeFileSync(tmp, '\n'.repeat(offset) + m[1]);
  const r = spawnSync(process.execPath, ['--check', tmp], { encoding: 'utf8' });
  if (r.status !== 0) {
    failed = true;
    console.error(`❌ Error de sintaxis en el <script> #${count} de ${file}:\n${r.stderr.replaceAll(tmp, file)}`);
  }
}

if (!count) { console.error(`❌ No se encontró ningún <script> en ${file}`); process.exit(1); }
if (failed) process.exit(1);
console.log(`✅ ${count} bloque(s) <script> sin errores de sintaxis en ${file}`);
