import { deleteBrand, saveBrand } from "@/app/admin/actions/content";
import {
  AdminDeleteDialog,
  AdminFormDialog,
  AdminRowActions,
  AdminToggleDialog,
} from "@/components/admin/AdminActions";
import { AdminEmpty, AdminPageHeader, AdminPanel } from "@/components/admin/AdminChrome";
import { AdminCheck, AdminField, AdminSubmit } from "@/components/admin/AdminField";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import type { BrandRecord } from "@/lib/cms/types";

export default async function AdminBrandsPage() {
  const supabase = await createServerSupabaseClient();
  const { data } = await supabase.from("brands").select("*").order("name");
  const brands = (data ?? []) as BrandRecord[];

  return (
    <div className="space-y-8">
      <AdminPageHeader
        eyebrow="Référentiel"
        title="Marques"
        description="Marques actives indexées dans la recherche globale (renvoi vers Téléphonie)."
      />
      <div className="grid gap-8 lg:grid-cols-[1fr_300px]">
        <AdminPanel title="Liste">
          {brands.length === 0 ? (
            <AdminEmpty>Aucune marque.</AdminEmpty>
          ) : (
            <ul className="divide-y divide-ink/10">
              {brands.map((brand) => (
                <li key={brand.id} className="flex items-center justify-between gap-4 py-4 first:pt-0 last:pb-0">
                  <div>
                    <p className="font-medium">{brand.name}</p>
                    <p className="font-mono text-[11px] text-mute">
                      {brand.slug} · {brand.is_active ? "active" : "inactive"}
                    </p>
                  </div>
                  <AdminRowActions>
                    <AdminFormDialog action={saveBrand} title="Modifier la marque">
                      <input type="hidden" name="id" value={brand.id} />
                      <AdminField label="Nom" name="name" defaultValue={brand.name} required />
                      <AdminField label="Slug" name="slug" defaultValue={brand.slug} />
                      <AdminCheck label="Active" name="is_active" defaultChecked={brand.is_active} />
                    </AdminFormDialog>
                    <AdminToggleDialog
                      name={brand.name}
                      active={brand.is_active}
                      entity="brands"
                      id={brand.id}
                    />
                    <AdminDeleteDialog action={deleteBrand} name={brand.name}>
                      <input type="hidden" name="id" value={brand.id} />
                    </AdminDeleteDialog>
                  </AdminRowActions>
                </li>
              ))}
            </ul>
          )}
        </AdminPanel>
        <AdminPanel title="Ajouter">
          <form action={saveBrand} className="space-y-4">
            <AdminField label="Nom" name="name" required />
            <AdminField label="Slug" name="slug" />
            <AdminCheck label="Active" name="is_active" defaultChecked />
            <AdminSubmit>Enregistrer</AdminSubmit>
          </form>
        </AdminPanel>
      </div>
    </div>
  );
}
