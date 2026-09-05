# INFOLOG — site 

Refonte du site [infolog.digital](https://infolog.digital).


## Lancer en local

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

## Stack

Next.js (App Router) · TypeScript · Tailwind CSS · Framer Motion · Supabase (CMS)

## Back-office

Interface : [http://localhost:3000/admin](http://localhost:3000/admin)

1. Créez un projet Supabase.
2. Copiez `.env.example` vers `.env.local`.
3. Appliquez `supabase/migrations/20260905120000_init_cms.sql` (voir `supabase/README.md`).
4. Créez un utilisateur Auth et donnez-lui le rôle `admin`.
5. Optionnel : `npm run cms:seed` (importe les contenus existants, **sans inventer de prix**).

Sans variables Supabase, le site public continue de lire les fichiers `src/data` et `public/brand`.
