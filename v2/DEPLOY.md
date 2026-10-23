# Deploying LUXbell v2

Two things are described here:

1. **The preview** — one Cloud Run service that serves the current site *and* this one, so the client
   can compare them without a second deployment.
2. **The hand-off** — giving this folder to a hosting provider when the new site goes live.

> None of the commands below have been run. They are written out so you can copy them when you are
> signed in to the right account.

---

## 1. Preview: both versions, one Cloud Run service

```
https://<service>.run.app/        current site   (luxbell_at/)
https://<service>.run.app/v2/     rebuilt site   (luxbell_at/v2/)
```

Deploy from the **parent** folder (`luxbell_at/`, not this one):

```bash
cd luxbell_at

gcloud run deploy luxbell-website \
  --source . \
  --region europe-west1 \
  --allow-unauthenticated \
  --port 8080
```

That is the same command as before — the existing `Dockerfile` now also copies `v2/`, and
`nginx.conf` routes `/v2/` to it. Nothing about the current site changes.

### What makes `/v2/` work

Nothing, on the server side, beyond the usual SPA fallback:

```nginx
location /v2/ {
    try_files $uri $uri/ /v2/index.html;                  # clean URLs

    add_header X-Robots-Tag "noindex, nofollow" always;   # never index a preview
}
```

v2 detects its own mount point in the browser: a small script at the top of `index.html` reads the
current path and sets `<base href>` to `/v2/` here, or `/` when the same files sit at a web root. So
the preview and the production copy are byte-for-byte identical — nothing to rewrite, undo or
remember at hand-off time.

### Test it locally first

```bash
cd luxbell_at
docker build -t luxbell-combined .
docker run --rm -p 8080:8080 luxbell-combined
```

Then check:

| URL | Expect |
|---|---|
| `http://localhost:8080/` | the current site, unchanged |
| `http://localhost:8080/v2/` | the new site |
| `http://localhost:8080/v2/en/referenzen` | loads directly on a hard refresh (not a 404) |
| dev tools → Elements, on `/v2/` | an injected `<base href="/v2/">` at the top of `<head>` |

### A note on image size

The PDFs are ~30 MB and are currently present twice — once for each version. That is fine for a
preview. If you want to avoid it, point the v2 PDF path at v1's copy instead of shipping a second one:

```nginx
location /v2/assets/docs/ {
    alias /usr/share/nginx/html/docs/;
}
```

and drop `COPY v2/assets/docs/` from the build. Only worth doing if build times start to hurt.

---

## 2. Hand-off: publishing v2 on its own

**Copy the contents of this folder to the document root.** Not the folder itself — its contents, so
that `index.html` lands at the root.

Include: `index.html`, `404.html`, `favicon.svg`, `robots.txt`, `sitemap.xml`, `_redirects`,
`assets/`, `styles/`, `src/`.

Leave out (development only): `README.md`, `DEPLOY.md`, `Dockerfile`, `nginx.conf`,
`docker-compose.yml`, `.dockerignore`, `tools/`.

Before going live, edit the host name in **`robots.txt`** and **`sitemap.xml`**.

### The one server requirement

The site uses clean URLs (`/kontakt`, not `/#kontakt`), so the server must answer unknown paths with
`index.html` instead of a 404. Every common host can do this:

**nginx**
```nginx
location / {
    try_files $uri $uri/ /index.html;
}
```

**Apache** — create `.htaccess` in the document root:
```apache
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

**Netlify / Cloudflare Pages** — nothing to do, the included `_redirects` file handles it.

**A host with no rewrite support at all** — the included `404.html` is a copy of `index.html`, so the
site still works; the server just reports the wrong status code on deep links.

**Mounting it in a subfolder instead of the root** — nothing to do. The site detects the subfolder
itself.

### Hosting it as a container instead

This folder is self-sufficient:

```bash
cd v2
docker build -t luxbell-v2 .
docker run --rm -p 8080:8080 luxbell-v2      # → http://localhost:8080

gcloud run deploy luxbell-v2 \
  --source . \
  --region europe-west1 \
  --allow-unauthenticated \
  --port 8080
```

`v2/nginx.conf` handles the rewrite, gzip, cache headers, a `/healthz` endpoint and the security
headers (including a strict `Content-Security-Policy`, which is possible because the site loads
nothing from third parties).

---

## Checklist before going live

- [ ] Host name updated in `robots.txt` and `sitemap.xml`
- [ ] Server rewrites unknown paths to `index.html`
- [ ] `node tools/check.mjs` passes
- [ ] Deep links work on a hard refresh, in both languages
- [ ] The five PDFs open
- [ ] Imprint reviewed — the privacy section carries a placeholder note for the client's own text
