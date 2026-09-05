import { notFound } from "next/navigation";
import { AdminPageHeader, AdminPanel } from "@/components/admin/AdminChrome";
import { ProductForm } from "@/components/admin/ProductForm";
import { getAdminProduct } from "@/lib/cms/products";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import type { BrandRecord, CategoryRecord } from "@/lib/cms/types";

export default async function EditProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = await getAdminProduct(id);
  if (!product) notFound();
  const supabase = await createServerSupabaseClient();
  const [{ data: brands }, { data: categories }] = await Promise.all([
    supabase.from("brands").select("*").order("name"),
    supabase.from("categories").select("*").order("sort_order"),
  ]);
  return (
    <div className="space-y-8">
      <AdminPageHeader
        eyebrow="Catalogue"
        title={product.name}
        description={`/telephonie/${product.slug}`}
      />
      <AdminPanel>
        <ProductForm
          product={product}
          brands={(brands ?? []) as BrandRecord[]}
          categories={(categories ?? []) as CategoryRecord[]}
        />
      </AdminPanel>
    </div>
  );
}
