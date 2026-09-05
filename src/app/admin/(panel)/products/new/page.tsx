import { AdminPageHeader, AdminPanel } from "@/components/admin/AdminChrome";
import { ProductForm } from "@/components/admin/ProductForm";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import type { BrandRecord, CategoryRecord } from "@/lib/cms/types";

export default async function NewProductPage() {
  const supabase = await createServerSupabaseClient();
  const [{ data: brands }, { data: categories }] = await Promise.all([
    supabase.from("brands").select("*").order("name"),
    supabase.from("categories").select("*").order("sort_order"),
  ]);
  return (
    <div className="space-y-8">
      <AdminPageHeader eyebrow="Catalogue" title="Nouveau produit" />
      <AdminPanel>
        <ProductForm
          brands={(brands ?? []) as BrandRecord[]}
          categories={(categories ?? []) as CategoryRecord[]}
        />
      </AdminPanel>
    </div>
  );
}
