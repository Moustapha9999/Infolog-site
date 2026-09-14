-- Réseaux sociaux : CRUD back-office (table dédiée)
do $$ begin
  create type public.social_network as enum (
    'facebook',
    'instagram',
    'tiktok',
    'whatsapp',
    'linkedin'
  );
exception
  when duplicate_object then null;
end $$;

create table if not exists public.social_links (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  network public.social_network not null,
  label text not null,
  href text not null default '',
  group_key text not null default 'autre',
  sort_order integer not null default 0,
  is_active boolean not null default true,
  show_footer boolean not null default true,
  show_contact boolean not null default false,
  show_national_cash boolean not null default false,
  show_izi_shop boolean not null default false,
  show_telephonie boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists social_links_sort_idx on public.social_links (sort_order, created_at);
create index if not exists social_links_active_idx on public.social_links (is_active);

drop trigger if exists social_links_set_updated_at on public.social_links;
create trigger social_links_set_updated_at
  before update on public.social_links
  for each row execute function public.set_updated_at();

grant select on table public.social_links to anon, authenticated;
grant select, insert, update, delete on table public.social_links to authenticated;

alter table public.social_links enable row level security;

drop policy if exists social_links_public_read on public.social_links;
create policy social_links_public_read on public.social_links
  for select
  using (is_active = true or public.is_staff());

drop policy if exists social_links_staff_write on public.social_links;
create policy social_links_staff_write on public.social_links
  for all
  using (public.is_staff())
  with check (public.is_staff());

insert into public.social_links (
  slug, network, label, href, group_key, sort_order,
  show_footer, show_contact, show_national_cash, show_izi_shop, show_telephonie
) values
  (
    'facebook-infolog-shop', 'facebook', 'Infolog Shop / SAV',
    'https://www.facebook.com/share/18U8aSBb79/', 'infolog', 10,
    true, true, false, false, true
  ),
  (
    'linkedin-infolog', 'linkedin', 'LinkedIn INFOLOG',
    'https://www.linkedin.com/in/infolog-mauritanie-146538254', 'infolog', 20,
    true, true, false, false, false
  ),
  (
    'facebook-national-cash', 'facebook', 'National Cash',
    'https://www.facebook.com/share/19VowcwVxw/', 'national-cash', 30,
    true, false, true, false, false
  ),
  (
    'instagram-national-cash', 'instagram', 'National Cash',
    'https://www.instagram.com/national___cash', 'national-cash', 40,
    true, false, true, false, false
  ),
  (
    'facebook-izicall', 'facebook', 'IZICALL Mauritanie',
    'https://www.facebook.com/share/1DRMFBXQD9/', 'izicall', 50,
    true, false, false, true, false
  ),
  (
    'whatsapp-izicall', 'whatsapp', 'WhatsApp IZICALL',
    'https://wa.me/221771705741', 'izicall', 60,
    true, false, false, true, true
  ),
  (
    'tiktok-izicall-mr', 'tiktok', 'IZICALL Mauritanie',
    'https://www.tiktok.com/@izicallmauritanie', 'izicall', 70,
    true, false, false, true, false
  ),
  (
    'tiktok-izicall-ci', 'tiktok', 'IZICALL Côte d''Ivoire',
    'https://www.tiktok.com/@izicall.cotedivoire', 'izicall', 80,
    true, false, false, true, false
  ),
  (
    'tiktok-izicall-sn', 'tiktok', 'IZICALL Sénégal',
    'https://www.tiktok.com/@izicalllebalma', 'izicall', 90,
    true, false, false, true, false
  ),
  (
    'tiktok-izicall-ml', 'tiktok', 'IZICALL Mali',
    'https://www.tiktok.com/@izicallmali2', 'izicall', 100,
    true, false, false, true, false
  )
on conflict (slug) do nothing;
