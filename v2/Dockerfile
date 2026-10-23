# STANDALONE image for the v2 site.
#
# There is no build stage because there is no build: the source in this folder
# is exactly what the browser receives. Cloud Run expects port 8080.
#
# The combined preview (v1 at / and v2 at /v2/) is built from the parent
# folder's Dockerfile instead — see DEPLOY.md.

FROM nginx:alpine

RUN rm -f /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY index.html 404.html favicon.svg robots.txt sitemap.xml _redirects /usr/share/nginx/html/
COPY styles/ /usr/share/nginx/html/styles/
COPY src/    /usr/share/nginx/html/src/
COPY assets/ /usr/share/nginx/html/assets/

EXPOSE 8080

HEALTHCHECK --interval=30s --timeout=3s \
  CMD wget -qO- http://127.0.0.1:8080/healthz || exit 1

CMD ["nginx", "-g", "daemon off;"]
