#!/bin/bash
set -euo pipefail
# Une fois sur le VPS Ubuntu Hostinger (root).

if [ "$(id -u)" -ne 0 ]; then
  echo "Relancer avec sudo."
  exit 1
fi

export DEBIAN_FRONTEND=noninteractive
apt-get update
apt-get install -y ca-certificates curl git ufw

if ! command -v docker >/dev/null 2>&1; then
  curl -fsSL https://get.docker.com | sh
fi

systemctl enable --now docker

if [ -n "${SUDO_USER:-}" ] && [ "$SUDO_USER" != "root" ]; then
  usermod -aG docker "$SUDO_USER" || true
fi

if ! swapon --show | grep -q .; then
  fallocate -l 4G /swapfile || dd if=/dev/zero of=/swapfile bs=1M count=4096
  chmod 600 /swapfile
  mkswap /swapfile
  swapon /swapfile
  grep -q '/swapfile' /etc/fstab || echo '/swapfile none swap sw 0 0' >> /etc/fstab
fi

ufw default deny incoming
ufw default allow outgoing
ufw allow OpenSSH
ufw allow 80/tcp
ufw allow 443/tcp
ufw --force enable

echo
echo "VPS prêt (Docker + swap 4G + firewall 22/80/443)."
echo "Ouvrir aussi 80 et 443 dans le firewall hPanel Hostinger si présent."
echo
echo "Ensuite :"
echo "  mkdir -p /opt/infolog && cd /opt/infolog"
echo "  git clone <URL_DU_DEPOT> ."
echo "  cp .env.hostinger.example .env && nano .env"
echo "  bash deploy/hostinger/deploy.sh"
