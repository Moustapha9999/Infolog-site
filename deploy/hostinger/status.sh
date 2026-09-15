#!/bin/bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/../.." && pwd)"
cd "$ROOT"

docker compose ps
echo
curl -sS -H "Host: infolog.digital" http://127.0.0.1/api/health || true
echo
docker compose logs --tail=40 web nginx
