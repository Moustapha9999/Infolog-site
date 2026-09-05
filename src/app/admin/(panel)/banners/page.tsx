import { deleteBanner, saveBanner } from "@/app/admin/actions/content";
import {
  AdminDeleteDialog,
  AdminFormDialog,
  AdminRowActions,
  AdminToggleDialog,
} from "@/components/admin/AdminActions";
import { AdminEmpty, AdminPageHeader, AdminPanel } from "@/components/admin/AdminChrome";
import { AdminCheck, AdminField, AdminSelect, AdminSubmit } from "@/components/admin/AdminField";
import { listAdminBanners } from "@/lib/cms/banners";
import { toDatetimeLocal } from "@/lib/cms/format";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import type { BannerRecord, MediaRecord } from "@/lib/cms/types";

function BannerFields({
  banner,
  images,
  videos,
}: {
  banner?: BannerRecord;
  images: Pick<MediaRecord, "id" | "title" | "kind">[];
  videos: Pick<MediaRecord, "id" | "title" | "kind">[];
}) {
  return (
    <>
      <AdminField label="Titre" name="title" defaultValue={banner?.title} required />
      <AdminField label="Sous-titre" name="subtitle" defaultValue={banner?.subtitle} />
      <AdminField
        label="Description"
        name="description"
        textarea
        defaultValue={banner?.description}
      />
      <AdminField
        label="Texte du bouton"
        name="button_label"
        defaultValue={banner?.button_label}
      />
      <AdminField label="URL du bouton" name="button_href" defaultValue={banner?.button_href} />
      <AdminField
        label="Ordre"
        name="sort_order"
        type="number"
        defaultValue={banner?.sort_order ?? 0}
      />
      <AdminField
        label="Début"
        name="starts_at"
        type="datetime-local"
        defaultValue={toDatetimeLocal(banner?.starts_at)}
      />
      <AdminField
        label="Fin"
        name="ends_at"
        type="datetime-local"
        defaultValue={toDatetimeLocal(banner?.ends_at)}
      />
      <AdminSelect label="Image desktop" name="desktop_media_id">
        <option value="">—</option>
        {images.map((item) => (
          <option key={item.id} value={item.id}>
            {item.title || item.id}
          </option>
        ))}
      </AdminSelect>
      <AdminSelect label="Image mobile" name="mobile_media_id">
        <option value="">—</option>
        {images.map((item) => (
          <option key={item.id} value={item.id}>
            {item.title || item.id}
          </option>
        ))}
      </AdminSelect>
      <AdminSelect label="Vidéo" name="video_media_id">
        <option value="">—</option>
        {videos.map((item) => (
          <option key={item.id} value={item.id}>
            {item.title || item.id}
          </option>
        ))}
      </AdminSelect>
      <AdminCheck label="Active" name="is_active" defaultChecked={banner?.is_active} />
    </>
  );
}

export default async function AdminBannersPage() {
  const banners = await listAdminBanners();
  const supabase = await createServerSupabaseClient();
  const { data } = await supabase
    .from("media")
    .select("id, title, kind")
    .order("created_at", { ascending: false })
    .limit(80);
  const media = (data ?? []) as Pick<MediaRecord, "id" | "title" | "kind">[];
  const images = media.filter((item) => item.kind === "image");
  const videos = media.filter((item) => item.kind === "video");

  return (
    <div className="space-y-8">
      <AdminPageHeader eyebrow="Accueil" title="Bannières" />
      <AdminPanel title="Liste">
        {banners.length === 0 ? (
          <AdminEmpty>Aucune bannière.</AdminEmpty>
        ) : (
          <ul className="divide-y divide-ink/10">
            {banners.map((banner) => (
              <li
                key={banner.id}
                className="flex items-center justify-between gap-4 py-4 first:pt-0 last:pb-0"
              >
                <div>
                  <p className="font-medium">{banner.title}</p>
                  <p className="text-xs text-mute">
                    {banner.is_active ? "Active" : "Inactive"} · ordre {banner.sort_order}
                  </p>
                </div>
                <AdminRowActions>
                  <AdminFormDialog action={saveBanner} title="Modifier la bannière" wide>
                    <input type="hidden" name="id" value={banner.id} />
                    <BannerFields banner={banner} images={images} videos={videos} />
                  </AdminFormDialog>
                  <AdminToggleDialog
                    name={banner.title}
                    active={banner.is_active}
                    entity="banners"
                    id={banner.id}
                  />
                  <AdminDeleteDialog action={deleteBanner} name={banner.title}>
                    <input type="hidden" name="id" value={banner.id} />
                  </AdminDeleteDialog>
                </AdminRowActions>
              </li>
            ))}
          </ul>
        )}
      </AdminPanel>
      <AdminPanel title="Nouvelle bannière" className="max-w-2xl">
        <form action={saveBanner} className="grid gap-4">
          <BannerFields images={images} videos={videos} />
          <AdminSubmit>Créer</AdminSubmit>
        </form>
      </AdminPanel>
    </div>
  );
}
