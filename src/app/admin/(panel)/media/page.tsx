import { deleteMedia, updateMediaMeta, uploadMedia } from "@/app/admin/actions/content";
import {
  AdminDeleteDialog,
  AdminFormDialog,
  AdminRowActions,
} from "@/components/admin/AdminActions";
import { AdminPageHeader, AdminPanel } from "@/components/admin/AdminChrome";
import { adminControlClass, adminGhostButtonClass } from "@/components/admin/admin-styles";
import { AdminField, AdminSubmit } from "@/components/admin/AdminField";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { formatBytes, formatDateTime } from "@/lib/cms/format";
import { mediaSrc } from "@/lib/cms/media-url";
import type { MediaRecord } from "@/lib/cms/types";

export default async function AdminMediaPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string; q?: string }>;
}) {
  const { error, q } = await searchParams;
  const supabase = await createServerSupabaseClient();
  let query = supabase
    .from("media")
    .select("*, media_links(entity_type, role)")
    .eq("kind", "image")
    .order("created_at", { ascending: false });
  if (q) query = query.ilike("title", `%${q}%`);
  const { data } = await query;
  const items = (data ?? []) as Array<
    MediaRecord & { media_links?: { entity_type: string; role: string }[] }
  >;

  return (
    <div className="space-y-8">
      <AdminPageHeader eyebrow="Médiathèque" title="Images" />
      {error ? (
        <p className="border border-copper/30 bg-copper/5 px-3 py-2 text-sm text-copper">
          Import refusé (type, taille ou erreur d’upload). Images max 10 Mo.
        </p>
      ) : null}
      <form className="flex flex-wrap items-end gap-3">
        <label className="min-w-[200px] flex-1">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-plan">
            Recherche
          </span>
          <input
            name="q"
            defaultValue={q}
            placeholder="Rechercher"
            className={adminControlClass}
          />
        </label>
        <button className={adminGhostButtonClass}>Filtrer</button>
      </form>
      <AdminPanel title="Importer" className="max-w-xl">
        <form action={uploadMedia} className="grid gap-4">
          <input type="file" name="file" accept="image/*" required />
          <AdminField label="Titre" name="title" />
          <AdminField label="Texte alternatif" name="alt" />
          <AdminField label="Description" name="description" textarea rows={2} />
          <AdminSubmit>Importer</AdminSubmit>
        </form>
      </AdminPanel>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {items.map((item) => {
          const src = mediaSrc(item);
          const usage = (item.media_links ?? [])
            .map((link) => `${link.entity_type}/${link.role}`)
            .join(", ");
          const label = item.title || item.original_name || "Image";
          return (
            <article key={item.id} className="border border-ink/10 bg-paper p-3">
              {src ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={src} alt={item.alt ?? ""} className="aspect-video w-full object-cover" />
              ) : (
                <div className="grid aspect-video place-items-center bg-paper-2 text-xs text-mute">
                  Aperçu indisponible
                </div>
              )}
              <div className="mt-3 flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium">{label}</p>
                  <p className="font-mono text-[11px] text-mute">
                    {item.mime_type} · {formatBytes(item.size_bytes)} ·{" "}
                    {formatDateTime(item.created_at)}
                  </p>
                  <p className="mt-1 text-xs text-mute">Usage : {usage || "non lié"}</p>
                </div>
                <AdminRowActions>
                  <AdminFormDialog action={updateMediaMeta} title="Modifier l’image">
                    <input type="hidden" name="id" value={item.id} />
                    <AdminField label="Titre" name="title" defaultValue={item.title} />
                    <AdminField label="Texte alternatif" name="alt" defaultValue={item.alt} />
                    <AdminField
                      label="Description"
                      name="description"
                      textarea
                      defaultValue={item.description}
                    />
                  </AdminFormDialog>
                  <AdminDeleteDialog action={deleteMedia} name={label}>
                    <input type="hidden" name="id" value={item.id} />
                  </AdminDeleteDialog>
                </AdminRowActions>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
