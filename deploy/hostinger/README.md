# Déploiement Hostinger — INFOLOG (`infolog.digital`)

Le site tourne en **Docker** (`nginx` + `web`) sur un **VPS Ubuntu**. L’hébergement mutualisé Hostinger ne convient pas.

Ne **supprime pas** l’ancien site tant que `https://infolog.digital` ne répond pas sur le nouveau VPS.

## 1. Demander à INFOLOG

- Où est l’ancien site (panel, VPS, WordPress…).
- Qui gère le DNS de `infolog.digital`.
- IP + SSH du **nouveau VPS** (4 Go RAM conseillé ; 2 Go possible avec swap + images pré-construites).
- Ouvrir **22 / 80 / 443** dans hPanel (firewall Hostinger) en plus de `ufw`.

## 2. Préparer le VPS

```bash
sudo bash deploy/hostinger/setup-vps.sh
```

Installe Docker, 4 Go de swap, firewall (SSH + 80 + 443).

```bash
sudo mkdir -p /opt/infolog
sudo git clone <URL_DU_DEPOT> /opt/infolog
cd /opt/infolog
sudo cp .env.hostinger.example .env
sudo nano .env   # coller les clés Supabase
```

## 3. Premier lancement (DNS encore sur l’ancien site)

**Option A — build sur le VPS**

```bash
cd /opt/infolog
sudo bash deploy/hostinger/deploy.sh
```

**Option B — build sur ton PC** (si le VPS manque de RAM)

Sur Windows, dans le dépôt :

```powershell
.\deploy\hostinger\pack-images.ps1
scp infolog-images.tar.gz root@IP_DU_VPS:/opt/infolog/
```

Sur le VPS :

```bash
bash deploy/hostinger/load-images.sh
SKIP_BUILD=1 bash deploy/hostinger/deploy.sh
```

Test **sans changer le DNS** :

```bash
curl -H "Host: infolog.digital" http://IP_DU_VPS/api/health
```

Doit renvoyer `{"ok":true,"service":"infolog-web"}`.

## 4. DNS (TTL 300 s si possible)

| Nom | Type | Valeur |
|---|---|---|
| `@` / `infolog.digital` | A | IP du VPS |
| `www` | A ou CNAME | IP du VPS ou `infolog.digital` |
| `admin` | A | **même** IP |

L’ancien site continue jusqu’à ce que le DNS bascule.

## 5. HTTPS

Quand le DNS pointe bien ici :

```bash
sudo bash deploy/hostinger/issue-certs.sh
```

Puis :

- https://infolog.digital
- https://admin.infolog.digital/admin/login

Renouvellement (crontab root, une fois) :

```bash
echo "0 3 * * * /opt/infolog/deploy/hostinger/renew-certs.sh >> /var/log/infolog-certbot.log 2>&1" | crontab -
```

## 6. Après validation

1. Arrêter / supprimer **l’ancien** hébergement.
2. Supabase → Authentication → URL : `https://infolog.digital` et `https://admin.infolog.digital` (site + redirects).
3. Cloudflare (plus tard) : nameservers, puis A orange-cloud vers la même IP, SSL Full (strict).

## Commandes

```bash
cd /opt/infolog
bash deploy/hostinger/status.sh
docker compose logs -f --tail=100 web nginx
sudo bash deploy/hostinger/deploy.sh
```
