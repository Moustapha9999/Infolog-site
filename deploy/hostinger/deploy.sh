#!/bin/bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/../.." && pwd)"
cd "$ROOT"

if [ ! -f .env ]; then
  echo "Fichier .env manquant. Copiez .env.hostinger.example vers .env et remplissez les secrets."
  exit 1
fi

need() {
  local key=$1
  local value
  value="$(grep -E "^${key}=" .env | tail -n1 | cut -d= -f2- | tr -d '\r' || true)"
  if [ -z "$value" ]; then
    echo "Variable vide ou absente dans .env : $key"
    exit 1
  fi
}

need PUBLIC_HOST
need ADMIN_HOST
need SITE_URL
need NEXT_PUBLIC_SUPABASE_URL
need NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY

if ! grep -Eq '^(SUPABASE_SECRET_KEY|SUPABASE_SERVICE_ROLE_KEY)=.+' .env; then
  echo "Manque SUPABASE_SECRET_KEY (ou SUPABASE_SERVICE_ROLE_KEY) dans .env"
  exit 1
fi

if [ -d .git ] && git remote get-url origin >/dev/null 2>&1; then
  git pull --ff-only
fi

if [ "${SKIP_BUILD:-0}" = "1" ]; then
  docker compose up -d web nginx
else
  docker compose up --build -d web nginx
fi

docker compose ps
echo
echo "Test local (avant DNS) :"
echo "  curl -sS -H \"Host: infolog.digital\" http://127.0.0.1/api/health"
echo "  curl -sS -H \"Host: infolog.digital\" http://IP_DU_VPS/api/health"
