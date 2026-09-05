import { deleteMedia, saveExternalVideo, updateMediaMeta, uploadMedia } from "@/app/admin/actions/content";
import {
  AdminDeleteDialog,
  AdminFormDialog,
  AdminRowActions,
} from "@/components/admin/AdminActions";
import { AdminEmpty, AdminPageHeader, AdminPanel } from "@/components/admin/AdminChrome";
import { AdminField, AdminSubmit } from "@/components/admin/AdminField";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { formatBytes, formatDateTime } from "@/lib/cms/format";
import { mediaSrc } from "@/lib/cms/media-url";
import type { MediaRecord } from "@/lib/cms/types";

export default async function AdminVideosPage() {
  const supabase = await createServerSupabaseClient();
  const { data } = await supabase
    .from("media")
    .select("*")
    .eq("kind", "video")
    .order("created_at", { ascending: false });
  const items = (data ?? []) as MediaRecord[];

  return (
    <div className="space-y-8">
      <AdminPageHeader eyebrow="Médiathèque" title="Vidéos" />
      <div className="grid gap-8 lg:grid-cols-2">
        <AdminPanel title="Fichier uploadé">
          <form action={uploadMedia} className="space-y-4">
            <input type="file" name="file" accept="video/mp4,video/webm" required />
            <AdminField label="Titre" name="title" />
            <AdminField label="Description" name="description" textarea rows={2} />
            <AdminSubmit>Importer</AdminSubmit>
          </form>
        </AdminPanel>
        <AdminPanel title="URL YouTube / Vimeo">
          <form action={saveExternalVideo} className="space-y-4">
            <AdminField label="Titre" name="title" required />
            <AdminField label="URL" name="external_url" required />
            <AdminField label="Description" name="description" textarea rows={2} />
            <AdminSubmit>Ajouter</AdminSubmit>
          </form>
        </AdminPanel>
      </div>
      <AdminPanel title="Bibliothèque">
        {items.length === 0 ? (
          <AdminEmpty>Aucune vidéo.</AdminEmpty>
        ) : (
          <ul className="divide-y divide-ink/10">
            {items.map((item) => {
              const label = item.title || "Sans titre";
              return (
                <li
                  key={item.id}
                  className="flex items-center justify-between gap-4 py-4 first:pt-0 last:pb-0"
                >
                  <div className="min-w-0">
                    <p className="font-medium">{label}</p>
                    <p className="truncate font-mono text-[11px] text-mute">
                      {mediaSrc(item)} · {formatBytes(item.size_bytes)} ·{" "}
                      {formatDateTime(item.created_at)}
                    </p>
                  </div>
                  <AdminRowActions>
                    <AdminFormDialog action={updateMediaMeta} title="Modifier la vidéo">
                      <input type="hidden" name="id" value={item.id} />
                      <input type="hidden" name="next" value="/admin/videos" />
                      <AdminField label="Titre" name="title" defaultValue={item.title} />
                      <AdminField
                        label="Description"
                        name="description"
                        textarea
                        defaultValue={item.description}
                      />
                    </AdminFormDialog>
                    <AdminDeleteDialog action={deleteMedia} name={label}>
                      <input type="hidden" name="id" value={item.id} />
                      <input type="hidden" name="next" value="/admin/videos" />
                    </AdminDeleteDialog>
                  </AdminRowActions>
                </li>
              );
            })}
          </ul>
        )}
      </AdminPanel>
    </div>
  );
}
