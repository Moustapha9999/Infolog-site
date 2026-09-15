FROM nginx:1.27-alpine

RUN apk add --no-cache openssl curl

COPY nginx.conf /etc/nginx/nginx.conf
COPY conf.d/realip.conf /etc/nginx/realip.conf
COPY snippets/ /etc/nginx/snippets/
COPY templates/ /etc/nginx/templates-infolog/
COPY docker-entrypoint.d/25-render-infolog.sh /docker-entrypoint.d/25-render-infolog.sh

RUN sed -i 's/\r$//' /docker-entrypoint.d/25-render-infolog.sh \
  && chmod +x /docker-entrypoint.d/25-render-infolog.sh \
  && rm -f /etc/nginx/conf.d/default.conf
