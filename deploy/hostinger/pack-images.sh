#!/bin/bash
set -euo pipefail
# À lancer sur le PC qui a déjà Docker (pas forcément le VPS).
# Produit infolog-images.tar.gz à copier sur le VPS si le build OOM.

ROOT="$(cd "$(dirname "$0")/../.." && pwd)"
cd "$ROOT"

if [ ! -f .env ]; then
  echo "Un .env (même local) est utile : les NEXT_PUBLIC_* sont injectés au build."
fi

docker compose build web nginx
docker save infolog-web infolog-nginx | gzip > infolog-images.tar.gz
ls -lh infolog-images.tar.gz
echo
echo "Envoyer sur le VPS :"
echo "  scp infolog-images.tar.gz root@IP_DU_VPS:/opt/infolog/"
echo "Puis sur le VPS :"
echo "  bash deploy/hostinger/load-images.sh"
echo "  SKIP_BUILD=1 bash deploy/hostinger/deploy.sh"
