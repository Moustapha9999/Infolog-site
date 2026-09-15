#!/bin/sh
set -eu

PUBLIC_HOST=${PUBLIC_HOST:-infolog.localhost}
ADMIN_HOST=${ADMIN_HOST:-admin.infolog.localhost}
PUBLIC_HOST_ALIASES=${PUBLIC_HOST_ALIASES:-}
ADMIN_HOST_ALIASES=${ADMIN_HOST_ALIASES:-}
ENABLE_HTTPS_REDIRECT=${ENABLE_HTTPS_REDIRECT:-0}
CERT_DIR=/etc/nginx/certs
SSL_CERTIFICATE=${SSL_CERTIFICATE:-/etc/nginx/certs/tls.crt}
SSL_CERTIFICATE_KEY=${SSL_CERTIFICATE_KEY:-/etc/nginx/certs/tls.key}
TEMPLATE_DIR=/etc/nginx/templates-infolog

mkdir -p "$CERT_DIR" /var/www/certbot

cert_key=$SSL_CERTIFICATE_KEY
cert_crt=$SSL_CERTIFICATE
if [ ! -f "$cert_crt" ] || [ ! -f "$cert_key" ]; then
  cert_key=$CERT_DIR/tls.key
  cert_crt=$CERT_DIR/tls.crt
  SSL_CERTIFICATE=$cert_crt
  SSL_CERTIFICATE_KEY=$cert_key
fi

if [ ! -f "$cert_crt" ] || [ ! -f "$cert_key" ]; then
  cat > /tmp/openssl-infolog.cnf <<EOF
[req]
distinguished_name = req_distinguished_name
x509_extensions = v3_req
prompt = no
[req_distinguished_name]
CN = ${PUBLIC_HOST}
[v3_req]
subjectAltName = DNS:${PUBLIC_HOST},DNS:${ADMIN_HOST},DNS:localhost
EOF
  openssl req -x509 -nodes -newkey rsa:2048 -days 825 \
    -keyout "$cert_key" \
    -out "$cert_crt" \
    -config /tmp/openssl-infolog.cnf \
    -extensions v3_req
fi

substitute() {
  src=$1
  dest=$2
  sed \
    -e "s|__PUBLIC_HOST_ALIASES__|${PUBLIC_HOST_ALIASES}|g" \
    -e "s|__ADMIN_HOST_ALIASES__|${ADMIN_HOST_ALIASES}|g" \
    -e "s|__PUBLIC_HOST__|${PUBLIC_HOST}|g" \
    -e "s|__ADMIN_HOST__|${ADMIN_HOST}|g" \
    -e "s|__SSL_CERTIFICATE_KEY__|${SSL_CERTIFICATE_KEY}|g" \
    -e "s|__SSL_CERTIFICATE__|${SSL_CERTIFICATE}|g" \
    -e "s|__CERT_DIR__|${CERT_DIR}|g" \
    "$src" > "$dest"
}

if [ "$ENABLE_HTTPS_REDIRECT" = "1" ]; then
  template="$TEMPLATE_DIR/default.redirect.conf"
else
  template="$TEMPLATE_DIR/default.dual.conf"
fi

substitute "$template" /etc/nginx/conf.d/default.conf
substitute "$TEMPLATE_DIR/public_admin_redirect.conf" /etc/nginx/snippets/public_admin_redirect.conf

for alias in $PUBLIC_HOST_ALIASES; do
  sed \
    -e "s|__ALIAS__|${alias}|g" \
    -e "s|__SSL_CERTIFICATE_KEY__|${SSL_CERTIFICATE_KEY}|g" \
    -e "s|__SSL_CERTIFICATE__|${SSL_CERTIFICATE}|g" \
    -e "s|__CERT_DIR__|${CERT_DIR}|g" \
    "$TEMPLATE_DIR/public_alias.conf" >> /etc/nginx/conf.d/default.conf
done
