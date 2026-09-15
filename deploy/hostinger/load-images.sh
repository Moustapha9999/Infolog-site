#!/bin/bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/../.." && pwd)"
cd "$ROOT"

ARCHIVE="${1:-infolog-images.tar.gz}"
if [ ! -f "$ARCHIVE" ]; then
  echo "Archive introuvable : $ARCHIVE"
  exit 1
fi

gunzip -c "$ARCHIVE" | docker load
docker image ls | grep infolog || true
echo "Images chargées. Lancez : SKIP_BUILD=1 bash deploy/hostinger/deploy.sh"
