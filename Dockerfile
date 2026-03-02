# Explicit Dockerfile for static HTML/JS/CSS site (no buildpack detection).
# Cloud Run expects port 8080.

FROM nginx:alpine

# Use our nginx config that listens on 8080
RUN rm -f /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy static site files
COPY index.html /usr/share/nginx/html/
COPY css/ /usr/share/nginx/html/css/
COPY js/ /usr/share/nginx/html/js/
COPY content/ /usr/share/nginx/html/content/
COPY fonts/ /usr/share/nginx/html/fonts/
COPY images/ /usr/share/nginx/html/images/
COPY docs/ /usr/share/nginx/html/docs/

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
