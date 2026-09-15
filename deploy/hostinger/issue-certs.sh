#!/bin/bash
set -euo pipefail
# DNS infolog.digital, www et admin.infolog.digital doivent déjà pointer ici.

ROOT="$(cd "$(dirname "$0")/../.." && pwd)"
cd "$ROOT"

set -a
# shellcheck disable=SC1091
source .env
set +a

EMAIL="${LETSENCRYPT_EMAIL:-commercial@infolog.mr}"
DOMAIN="${PUBLIC_HOST:-infolog.digital}"
ADMIN="${ADMIN_HOST:-admin.infolog.digital}"

docker compose --profile certs run --rm certbot certonly \
  --webroot -w /var/www/certbot \
  --email "$EMAIL" --agree-tos --no-eff-email --keep-until-expiry \
  -d "$DOMAIN" -d "www.$DOMAIN" -d "$ADMIN"

if grep -q '^ENABLE_HTTPS_REDIRECT=' .env; then
  sed -i 's/^ENABLE_HTTPS_REDIRECT=.*/ENABLE_HTTPS_REDIRECT=1/' .env
else
  echo 'ENABLE_HTTPS_REDIRECT=1' >> .env
fi

if ! grep -q '^SSL_CERTIFICATE=' .env; then
  echo "SSL_CERTIFICATE=/etc/letsencrypt/live/${DOMAIN}/fullchain.pem" >> .env
  echo "SSL_CERTIFICATE_KEY=/etc/letsencrypt/live/${DOMAIN}/privkey.pem" >> .env
fi

docker compose up -d nginx --force-recreate
echo
echo "Certificats actifs. Test :"
echo "  curl -sSI https://${DOMAIN}/api/health"
echo "  curl -sSI https://${ADMIN}/admin/login"
