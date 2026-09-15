# INFOLOG — site

Refonte du site [infolog.digital](https://infolog.digital).

## Local

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000) — back-office : [http://localhost:3000/admin](http://localhost:3000/admin).

Copier `.env.example` vers `.env.local` (clés Supabase). Sans ces variables, le site public lit `src/data`.

## Docker local

```bash
docker compose up --build -d web nginx
```

Hosts : `127.0.0.1 infolog.localhost admin.infolog.localhost`

## Production Hostinger

Guide complet : [deploy/hostinger/README.md](deploy/hostinger/README.md).

Sur le VPS : copier `.env.hostinger.example` vers `.env`, puis `bash deploy/hostinger/setup-vps.sh` et `bash deploy/hostinger/deploy.sh`.
