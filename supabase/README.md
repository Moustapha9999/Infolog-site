# Supabase — INFOLOG CMS

Projet cloud : **INFOLOG CMS0** (`dprzflsngfgffdpulsfv`).

Dashboard : [SQL Editor](https://supabase.com/dashboard/project/dprzflsngfgffdpulsfv/sql/new) · [Auth](https://supabase.com/dashboard/project/dprzflsngfgffdpulsfv/auth/users) · [API Keys](https://supabase.com/dashboard/project/dprzflsngfgffdpulsfv/settings/api-keys)

## 1. Créer le projet

1. Créez un projet sur [supabase.com](https://supabase.com).
2. Désactivez les inscriptions publiques (Authentication → Providers → Email : pas de signup ouvert, ou invite only).
3. Copiez l’URL et la **publishable key** dans `.env.local` (voir `.env.example`).

## 2. Appliquer la migration

**Recommandé** — SQL Editor du dashboard, collez tout le fichier :

`supabase/migrations/20260905120000_init_cms.sql`

La connexion directe `db.*.supabase.co` est en IPv6. Depuis un réseau IPv4, utilisez le **Session pooler** (Connect → Session pooler, port 5432) ou le SQL Editor.

Ou en CLI (après `npx supabase login`) :

```bash
npx supabase login
npx supabase link --project-ref dprzflsngfgffdpulsfv
npx supabase db push
```

## 3. Premier administrateur

1. Authentication → Add user (email + mot de passe).
2. SQL :

```sql
update auth.users
set raw_app_meta_data = coalesce(raw_app_meta_data, '{}'::jsonb) || '{"role":"admin"}'::jsonb
where email = 'VOTRE_EMAIL';

insert into public.profiles (id, display_name, role)
select id, email, 'admin'::public.user_role
from auth.users
where email = 'VOTRE_EMAIL'
on conflict (id) do update set role = 'admin';
```

3. Connectez-vous sur `/admin/login`.

Ou en CLI :

```bash
npx tsx --env-file=.env.local scripts/grant-admin.ts VOTRE_EMAIL
```

## 4. Seed (optionnel)

```bash
npx tsx scripts/seed-cms.ts
```

Aucun prix n’est inventé. Les 9 téléphones existants sont importés avec prix masqués.
