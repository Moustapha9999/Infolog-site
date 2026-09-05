import { deleteCategory, saveCategory } from "@/app/admin/actions/content";
import {
  AdminDeleteDialog,
  AdminFormDialog,
  AdminRowActions,
  AdminToggleDialog,
} from "@/components/admin/AdminActions";
import { AdminEmpty, AdminPageHeader, AdminPanel } from "@/components/admin/AdminChrome";
import { AdminCheck, AdminField, AdminSubmit } from "@/components/admin/AdminField";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import type { CategoryRecord } from "@/lib/cms/types";

export default async function AdminCategoriesPage() {
  const supabase = await createServerSupabaseClient();
  const { data } = await supabase.from("categories").select("*").order("sort_order");
  const categories = (data ?? []) as CategoryRecord[];

  return (
    <div className="space-y-8">
      <AdminPageHeader eyebrow="Référentiel" title="Catégories" />
      <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
        <AdminPanel title="Liste">
          {categories.length === 0 ? (
            <AdminEmpty>Aucune catégorie.</AdminEmpty>
          ) : (
            <ul className="divide-y divide-ink/10">
              {categories.map((category) => (
                <li
                  key={category.id}
                  className="flex items-center justify-between gap-4 py-4 first:pt-0 last:pb-0"
                >
                  <div>
                    <p className="font-medium">{category.name}</p>
                    <p className="text-xs text-mute">
                      {category.description || category.slug} ·{" "}
                      {category.is_active ? "active" : "inactive"}
                    </p>
                  </div>
                  <AdminRowActions>
                    <AdminFormDialog action={saveCategory} title="Modifier la catégorie">
                      <input type="hidden" name="id" value={category.id} />
                      <AdminField label="Nom" name="name" defaultValue={category.name} required />
                      <AdminField label="Slug" name="slug" defaultValue={category.slug} />
                      <AdminField
                        label="Description"
                        name="description"
                        textarea
                        defaultValue={category.description}
                      />
                      <AdminField
                        label="Ordre"
                        name="sort_order"
                        type="number"
                        defaultValue={category.sort_order}
                      />
                      <AdminCheck
                        label="Active"
                        name="is_active"
                        defaultChecked={category.is_active}
                      />
                    </AdminFormDialog>
                    <AdminToggleDialog
                      name={category.name}
                      active={category.is_active}
                      entity="categories"
                      id={category.id}
                    />
                    <AdminDeleteDialog action={deleteCategory} name={category.name}>
                      <input type="hidden" name="id" value={category.id} />
                    </AdminDeleteDialog>
                  </AdminRowActions>
                </li>
              ))}
            </ul>
          )}
        </AdminPanel>
        <AdminPanel title="Ajouter">
          <form action={saveCategory} className="space-y-4">
            <AdminField label="Nom" name="name" required />
            <AdminField label="Slug" name="slug" />
            <AdminField label="Description" name="description" textarea />
            <AdminField label="Ordre" name="sort_order" type="number" defaultValue={0} />
            <AdminCheck label="Active" name="is_active" defaultChecked />
            <AdminSubmit>Enregistrer</AdminSubmit>
          </form>
        </AdminPanel>
      </div>
    </div>
  );
}
