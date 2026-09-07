import { deleteBanner, saveBanner } from "@/app/admin/actions/content";
import {
  AdminDeleteDialog,
  AdminFormDialog,
  AdminRowActions,
  AdminToggleDialog,
} from "@/components/admin/AdminActions";
import { AdminEmpty, AdminPageHeader, AdminPanel } from "@/components/admin/AdminChrome";
import { AdminCheck, AdminField, AdminSelect, AdminSubmit } from "@/components/admin/AdminField";
import { listAdminBanners, type AdminBanner } from "@/lib/cms/banners";
import { toDatetimeLocal } from "@/lib/cms/format";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import type { MediaRecord } from "@/lib/cms/types";

function BannerFields({
  banner,
  images,
  videos,
}: {
  banner?: AdminBanner;
  images: Pick<MediaRecord, "id" | "title" | "kind">[];
  videos: Pick<MediaRecord, "id" | "title" | "kind">[];
}) {
  return (
    <>
      <AdminField
        label="Titre"
        name="title"
        defaultValue={banner?.title}
        required
        hint="Nom affiché sur le slide (ex. Infogérance)."
      />
      <AdminField label="Sous-titre" name="subtitle" defaultValue={banner?.subtitle} />
      <AdminField
        label="Description"
        name="description"
        textarea
        defaultValue={banner?.description}
        hint="Texte sous le titre du slide."
      />
      <AdminField
        label="Texte du bouton"
        name="button_label"
        defaultValue={banner?.button_label}
        hint="Laisser vide pour « Découvrir » + titre."
      />
      <AdminField
        label="URL du bouton"
        name="button_href"
        defaultValue={banner?.button_href}
        hint="Ex. /infogerance, /btp, /contact."
      />
      <AdminField
        label="Ordre"
        name="sort_order"
        type="number"
        defaultValue={banner?.sort_order ?? 0}
        hint="Du plus petit au plus grand dans le carrousel."
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
      <AdminSelect
        label="Image du slide"
        name="desktop_media_id"
        defaultValue={banner?.desktop_media_id}
        hint="Obligatoire pour le carrousel d’accueil. Sans image, la bannière apparaît comme actualité au-dessus du hero."
      >
        <option value="">—</option>
        {images.map((item) => (
          <option key={item.id} value={item.id}>
            {item.title || item.id}
          </option>
        ))}
      </AdminSelect>
      <AdminSelect
        label="Image mobile"
        name="mobile_media_id"
        defaultValue={banner?.mobile_media_id}
      >
        <option value="">—</option>
        {images.map((item) => (
          <option key={item.id} value={item.id}>
            {item.title || item.id}
          </option>
        ))}
      </AdminSelect>
      <AdminSelect
        label="Vidéo (optionnel)"
        name="video_media_id"
        defaultValue={banner?.video_media_id}
      >
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
      <AdminPageHeader
        eyebrow="Accueil"
        title="Carrousel d’accueil"
        description="Après l’écran d’accueil (texte + réseau), les bannières avec image défilent en haut du site. Sans bannière image active, le site affiche les 6 activités par défaut (Infogérance, Monétique, ERP, BTP, Téléphonie, Électroménager). Le texte du welcome se règle dans Pages → Accueil (hero.title, hero.lead, hero.welcome_ms, hero.slide_ms)."
      />
      <AdminPanel title="Liste">
        {banners.length === 0 ? (
          <AdminEmpty>Aucune bannière. Le site utilise alors les 6 visuels d’activités par défaut.</AdminEmpty>
        ) : (
          <ul className="divide-y divide-ink/10">
            {banners.map((banner) => (
              <li
                key={banner.id}
                className="flex items-center justify-between gap-4 py-4 first:pt-0 last:pb-0"
              >
                <div className="flex min-w-0 items-center gap-3">
                  {banner.desktopSrc ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={banner.desktopSrc}
                      alt=""
                      className="h-12 w-20 shrink-0 object-cover"
                    />
                  ) : (
                    <span className="grid h-12 w-20 shrink-0 place-items-center border border-dashed border-ink/15 font-mono text-[10px] uppercase tracking-[0.12em] text-mute">
                      Texte
                    </span>
                  )}
                  <div className="min-w-0">
                    <p className="font-medium">{banner.title}</p>
                    <p className="text-xs text-mute">
                      {banner.is_active ? "Active" : "Inactive"} ·{" "}
                      {banner.desktopSrc ? "carrousel" : "actualité"} · ordre{" "}
                      {banner.sort_order}
                    </p>
                  </div>
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
