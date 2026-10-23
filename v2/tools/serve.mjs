#!/usr/bin/env node
/**
 * Local development server.
 *
 *   node tools/serve.mjs            → http://localhost:8080
 *   node tools/serve.mjs 3000       → a different port
 *
 * Zero dependencies. The one thing it does that `python3 -m http.server` does
 * not is the SPA fallback: a request for /kontakt has no matching file on
 * disk, so it is answered with index.html and the app renders the page.
 * Without that, reloading any URL other than the root returns 404 — which is
 * a property of the server, not of the site.
 *
 * This mirrors what nginx does in production via `try_files`.
 */

import { createReadStream, existsSync, statSync } from 'node:fs';
import { createServer } from 'node:http';
import { dirname, extname, join, normalize, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const PORT = Number(process.argv[2]) || 8080;

const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.pdf': 'application/pdf',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
};

const server = createServer((request, response) => {
  const { pathname } = new URL(request.url, `http://${request.headers.host}`);

  // Resolve inside ROOT only — never serve anything above it.
  const decoded = decodeURIComponent(pathname);
  const candidate = join(ROOT, normalize(decoded).replace(/^(\.\.[/\\])+/, ''));

  let file = null;

  if (existsSync(candidate) && statSync(candidate).isFile()) {
    file = candidate;
  } else if (existsSync(join(candidate, 'index.html'))) {
    file = join(candidate, 'index.html');
  } else if (!extname(decoded)) {
    file = join(ROOT, 'index.html'); // SPA fallback
  }

  if (!file || !file.startsWith(ROOT)) {
    response.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    response.end('404 Not Found\n');
    return;
  }

  response.writeHead(200, {
    'Content-Type': TYPES[extname(file).toLowerCase()] ?? 'application/octet-stream',
    'Cache-Control': 'no-cache',
  });
  createReadStream(file).pipe(response);
});

server.listen(PORT, () => {
  console.log(`LUXbell v2  →  http://localhost:${PORT}`);
  console.log('Serving', ROOT, '— deep links and reloads work. Ctrl+C to stop.');
});
