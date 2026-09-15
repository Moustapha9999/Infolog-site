#!/bin/bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/../.." && pwd)"
cd "$ROOT"

docker compose --profile certs run --rm certbot renew --webroot -w /var/www/certbot
docker compose exec nginx nginx -s reload
echo "Renouvellement Let's Encrypt terminé."
