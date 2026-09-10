-- INFOLOG CMS — contenus multilingues (FR défaut + EN / AR)
-- Les colonnes FR existantes restent la source par défaut.
-- translations jsonb : { "en": { "title": "...", "description": "..." }, "ar": { ... } }

alter table public.services
  add column if not exists translations jsonb not null default '{}'::jsonb;

alter table public.pages
  add column if not exists translations jsonb not null default '{}'::jsonb;

alter table public.page_sections
  add column if not exists translations jsonb not null default '{}'::jsonb;

alter table public.banners
  add column if not exists translations jsonb not null default '{}'::jsonb;

alter table public.products
  add column if not exists translations jsonb not null default '{}'::jsonb;

alter table public.categories
  add column if not exists translations jsonb not null default '{}'::jsonb;

alter table public.brands
  add column if not exists translations jsonb not null default '{}'::jsonb;

comment on column public.services.translations is
  'Traductions EN/AR des champs texte (title, description, …). FR = colonnes natives.';
comment on column public.pages.translations is
  'Traductions EN/AR (title, meta_title, meta_description).';
comment on column public.page_sections.translations is
  'Traductions EN/AR (value).';
comment on column public.banners.translations is
  'Traductions EN/AR (title, subtitle, description, button_label).';
comment on column public.products.translations is
  'Traductions EN/AR (name, tagline, description, meta_title, meta_description).';
comment on column public.categories.translations is
  'Traductions EN/AR (name, description).';
comment on column public.brands.translations is
  'Traductions EN/AR (name).';
