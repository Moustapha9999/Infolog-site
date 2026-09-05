-- INFOLOG CMS — schéma initial
-- Rôles dans auth.users.raw_app_meta_data.role (jamais user_metadata).
-- Tables exposées à la Data API + RLS systématique.

create schema if not exists private;

create extension if not exists "pgcrypto";

-- ---------------------------------------------------------------------------
-- Types
-- ---------------------------------------------------------------------------

create type public.user_role as enum ('admin', 'editor');
create type public.media_kind as enum ('image', 'video');
create type public.availability_status as enum ('available', 'out_of_stock', 'hidden');
create type public.section_kind as enum (
  'title',
  'subtitle',
  'paragraph',
  'richtext',
  'image',
  'button',
  'link',
  'icon'
);

-- ---------------------------------------------------------------------------
-- JWT helpers (SECURITY INVOKER — lecture du claim uniquement)
-- ---------------------------------------------------------------------------

create or replace function public.jwt_role()
returns text
language sql
stable
as $$
  select coalesce((select auth.jwt() -> 'app_metadata' ->> 'role'), '');
$$;

create or replace function public.is_staff()
returns boolean
language sql
stable
as $$
  select public.jwt_role() in ('admin', 'editor');
$$;

create or replace function public.is_admin()
returns boolean
language sql
stable
as $$
  select public.jwt_role() = 'admin';
$$;

-- ---------------------------------------------------------------------------
-- updated_at
-- ---------------------------------------------------------------------------

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

-- ---------------------------------------------------------------------------
-- Profiles + sync rôle → app_metadata
-- ---------------------------------------------------------------------------

create table public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  display_name text,
  role public.user_role,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create trigger profiles_updated_at
  before update on public.profiles
  for each row execute function public.set_updated_at();

create or replace function private.sync_profile_role()
returns trigger
language plpgsql
security definer
set search_path = private
as $$
begin
  update auth.users
  set raw_app_meta_data =
    coalesce(raw_app_meta_data, '{}'::jsonb) || jsonb_build_object('role', new.role::text)
  where id = new.id;
  return new;
end;
$$;

revoke all on function private.sync_profile_role() from public;

create trigger profiles_sync_role
  after insert or update of role on public.profiles
  for each row
  when (new.role is not null)
  execute function private.sync_profile_role();

create or replace function private.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = private
as $$
declare
  incoming_role text;
begin
  incoming_role := new.raw_app_meta_data ->> 'role';
  insert into public.profiles (id, display_name, role)
  values (
    new.id,
    coalesce(new.raw_user_meta_data ->> 'name', split_part(new.email, '@', 1)),
    case
      when incoming_role in ('admin', 'editor') then incoming_role::public.user_role
      else null
    end
  );
  return new;
end;
$$;

revoke all on function private.handle_new_user() from public;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function private.handle_new_user();

-- ---------------------------------------------------------------------------
-- Media library
-- ---------------------------------------------------------------------------

create table public.media (
  id uuid primary key default gen_random_uuid(),
  kind public.media_kind not null default 'image',
  title text,
  alt text,
  description text,
  original_name text,
  generated_name text,
  storage_path text,
  public_url text,
  external_url text,
  mime_type text,
  size_bytes bigint,
  width integer,
  height integer,
  duration_seconds numeric,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint media_has_source check (
    public_url is not null
    or storage_path is not null
    or external_url is not null
  )
);

create trigger media_updated_at
  before update on public.media
  for each row execute function public.set_updated_at();

create index media_kind_idx on public.media (kind);
create index media_created_idx on public.media (created_at desc);

create table public.media_links (
  id uuid primary key default gen_random_uuid(),
  media_id uuid not null references public.media (id) on delete cascade,
  entity_type text not null,
  entity_id uuid not null,
  role text not null default 'gallery',
  position integer not null default 0,
  created_at timestamptz not null default now(),
  unique (media_id, entity_type, entity_id, role)
);

create index media_links_entity_idx on public.media_links (entity_type, entity_id, position);

-- ---------------------------------------------------------------------------
-- Brands / categories
-- ---------------------------------------------------------------------------

create table public.brands (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text not null unique,
  logo_id uuid references public.media (id) on delete set null,
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create trigger brands_updated_at
  before update on public.brands
  for each row execute function public.set_updated_at();

create table public.categories (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text not null unique,
  description text,
  image_id uuid references public.media (id) on delete set null,
  is_active boolean not null default true,
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create trigger categories_updated_at
  before update on public.categories
  for each row execute function public.set_updated_at();

-- ---------------------------------------------------------------------------
-- Products + prices
-- ---------------------------------------------------------------------------

create table public.products (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  name text not null,
  brand_id uuid references public.brands (id) on delete set null,
  category_id uuid references public.categories (id) on delete set null,
  tagline text,
  description text,
  details jsonb not null default '{}'::jsonb,
  is_active boolean not null default true,
  is_featured boolean not null default false,
  is_new boolean not null default false,
  is_promo boolean not null default false,
  availability public.availability_status not null default 'available',
  sort_order integer not null default 0,
  meta_title text,
  meta_description text,
  seo_image_id uuid references public.media (id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create trigger products_updated_at
  before update on public.products
  for each row execute function public.set_updated_at();

create index products_active_idx on public.products (is_active, sort_order);
create index products_brand_idx on public.products (brand_id);
create index products_category_idx on public.products (category_id);

create table public.product_prices (
  id uuid primary key default gen_random_uuid(),
  product_id uuid not null unique references public.products (id) on delete cascade,
  amount numeric(12, 2),
  compare_at_amount numeric(12, 2),
  currency text not null default 'MRU',
  promo_starts_at timestamptz,
  promo_ends_at timestamptz,
  is_visible boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create trigger product_prices_updated_at
  before update on public.product_prices
  for each row execute function public.set_updated_at();

-- ---------------------------------------------------------------------------
-- Banners / services / pages
-- ---------------------------------------------------------------------------

create table public.banners (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  subtitle text,
  description text,
  button_label text,
  button_href text,
  sort_order integer not null default 0,
  is_active boolean not null default false,
  starts_at timestamptz,
  ends_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create trigger banners_updated_at
  before update on public.banners
  for each row execute function public.set_updated_at();

create table public.services (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  description text,
  icon text,
  sort_order integer not null default 0,
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create trigger services_updated_at
  before update on public.services
  for each row execute function public.set_updated_at();

create table public.pages (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  meta_title text,
  meta_description text,
  is_published boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create trigger pages_updated_at
  before update on public.pages
  for each row execute function public.set_updated_at();

create table public.page_sections (
  id uuid primary key default gen_random_uuid(),
  page_id uuid not null references public.pages (id) on delete cascade,
  key text not null,
  kind public.section_kind not null default 'paragraph',
  value text,
  href text,
  media_id uuid references public.media (id) on delete set null,
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (page_id, key)
);

create trigger page_sections_updated_at
  before update on public.page_sections
  for each row execute function public.set_updated_at();

-- ---------------------------------------------------------------------------
-- Contact + audit
-- ---------------------------------------------------------------------------

create table public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text,
  subject text not null,
  message text not null,
  read_at timestamptz,
  created_at timestamptz not null default now()
);

create index contact_messages_unread_idx on public.contact_messages (created_at desc)
  where read_at is null;

create table public.audit_logs (
  id uuid primary key default gen_random_uuid(),
  actor_id uuid references public.profiles (id) on delete set null,
  action text not null,
  entity_type text not null,
  entity_id text,
  meta jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create index audit_logs_created_idx on public.audit_logs (created_at desc);

-- ---------------------------------------------------------------------------
-- Storage
-- ---------------------------------------------------------------------------

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'media',
  'media',
  true,
  83886080,
  array[
    'image/jpeg',
    'image/png',
    'image/webp',
    'image/avif',
    'image/gif',
    'image/svg+xml',
    'video/mp4',
    'video/webm'
  ]
)
on conflict (id) do nothing;

-- ---------------------------------------------------------------------------
-- Grants (tables newly created are not auto-exposed)
-- ---------------------------------------------------------------------------

grant usage on schema public to anon, authenticated;

grant select on table
  public.brands,
  public.categories,
  public.products,
  public.product_prices,
  public.media,
  public.media_links,
  public.banners,
  public.services,
  public.pages,
  public.page_sections
to anon, authenticated;

grant select, insert, update, delete on table
  public.brands,
  public.categories,
  public.products,
  public.product_prices,
  public.media,
  public.media_links,
  public.banners,
  public.services,
  public.pages,
  public.page_sections,
  public.contact_messages,
  public.audit_logs,
  public.profiles
to authenticated;

grant select on table public.profiles to authenticated;
grant insert on table public.contact_messages to anon;
grant select on table public.contact_messages to authenticated;
grant insert on table public.audit_logs to authenticated;

-- ---------------------------------------------------------------------------
-- RLS
-- ---------------------------------------------------------------------------

alter table public.profiles enable row level security;
alter table public.media enable row level security;
alter table public.media_links enable row level security;
alter table public.brands enable row level security;
alter table public.categories enable row level security;
alter table public.products enable row level security;
alter table public.product_prices enable row level security;
alter table public.banners enable row level security;
alter table public.services enable row level security;
alter table public.pages enable row level security;
alter table public.page_sections enable row level security;
alter table public.contact_messages enable row level security;
alter table public.audit_logs enable row level security;

-- Profiles
create policy profiles_select_own_or_staff on public.profiles
  for select to authenticated
  using ((select auth.uid()) = id or public.is_staff());

create policy profiles_update_admin on public.profiles
  for update to authenticated
  using (public.is_admin())
  with check (public.is_admin());

-- Published content: anon + authenticated read
create policy brands_public_read on public.brands
  for select to anon, authenticated
  using (is_active = true or public.is_staff());

create policy brands_staff_write on public.brands
  for all to authenticated
  using (public.is_staff())
  with check (public.is_staff());

create policy categories_public_read on public.categories
  for select to anon, authenticated
  using (is_active = true or public.is_staff());

create policy categories_staff_write on public.categories
  for all to authenticated
  using (public.is_staff())
  with check (public.is_staff());

create policy products_public_read on public.products
  for select to anon, authenticated
  using (is_active = true or public.is_staff());

create policy products_staff_write on public.products
  for all to authenticated
  using (public.is_staff())
  with check (public.is_staff());

create policy prices_public_read on public.product_prices
  for select to anon, authenticated
  using (
    exists (
      select 1 from public.products p
      where p.id = product_id and (p.is_active = true or public.is_staff())
    )
  );

create policy prices_staff_write on public.product_prices
  for all to authenticated
  using (public.is_staff())
  with check (public.is_staff());

create policy media_public_read on public.media
  for select to anon, authenticated
  using (true);

create policy media_staff_write on public.media
  for all to authenticated
  using (public.is_staff())
  with check (public.is_staff());

create policy media_links_public_read on public.media_links
  for select to anon, authenticated
  using (true);

create policy media_links_staff_write on public.media_links
  for all to authenticated
  using (public.is_staff())
  with check (public.is_staff());

create policy banners_public_read on public.banners
  for select to anon, authenticated
  using (
    (
      is_active = true
      and (starts_at is null or starts_at <= now())
      and (ends_at is null or ends_at >= now())
    )
    or public.is_staff()
  );

create policy banners_staff_write on public.banners
  for all to authenticated
  using (public.is_staff())
  with check (public.is_staff());

create policy services_public_read on public.services
  for select to anon, authenticated
  using (is_active = true or public.is_staff());

create policy services_staff_write on public.services
  for all to authenticated
  using (public.is_staff())
  with check (public.is_staff());

create policy pages_public_read on public.pages
  for select to anon, authenticated
  using (is_published = true or public.is_staff());

create policy pages_staff_write on public.pages
  for all to authenticated
  using (public.is_staff())
  with check (public.is_staff());

create policy page_sections_public_read on public.page_sections
  for select to anon, authenticated
  using (
    exists (
      select 1 from public.pages p
      where p.id = page_id and (p.is_published = true or public.is_staff())
    )
  );

create policy page_sections_staff_write on public.page_sections
  for all to authenticated
  using (public.is_staff())
  with check (public.is_staff());

create policy contact_insert_public on public.contact_messages
  for insert to anon, authenticated
  with check (true);

create policy contact_staff_read on public.contact_messages
  for select to authenticated
  using (public.is_staff());

create policy contact_staff_update on public.contact_messages
  for update to authenticated
  using (public.is_staff())
  with check (public.is_staff());

create policy contact_staff_delete on public.contact_messages
  for delete to authenticated
  using (public.is_staff());

create policy audit_staff_read on public.audit_logs
  for select to authenticated
  using (public.is_staff());

create policy audit_staff_insert on public.audit_logs
  for insert to authenticated
  with check (public.is_staff());

-- Storage: lecture publique du bucket, écriture staff (upsert = insert+select+update)
create policy media_bucket_public_read on storage.objects
  for select to anon, authenticated
  using (bucket_id = 'media');

create policy media_bucket_staff_insert on storage.objects
  for insert to authenticated
  with check (bucket_id = 'media' and public.is_staff());

create policy media_bucket_staff_update on storage.objects
  for update to authenticated
  using (bucket_id = 'media' and public.is_staff())
  with check (bucket_id = 'media' and public.is_staff());

create policy media_bucket_staff_delete on storage.objects
  for delete to authenticated
  using (bucket_id = 'media' and public.is_staff());
