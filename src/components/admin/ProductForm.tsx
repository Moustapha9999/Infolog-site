import {
  AdminCheck,
  AdminField,
  AdminSelect,
  AdminSubmit,
} from "@/components/admin/AdminField";
import { saveProduct } from "@/app/admin/actions/content";
import type { BrandRecord, CategoryRecord, ProductRecord } from "@/lib/cms/types";

function firstPrice(product?: ProductRecord | null) {
  const raw = product?.product_prices;
  if (Array.isArray(raw)) return raw[0];
  return raw ?? null;
}

export function ProductForm({
  product,
  brands,
  categories,
}: {
  product?: ProductRecord | null;
  brands: BrandRecord[];
  categories: CategoryRecord[];
}) {
  const price = firstPrice(product);
  const details = product?.details ?? {};
  const specs = Array.isArray(details.specs)
    ? (details.specs as { label: string; value: string }[])
        .map((item) => `${item.label}|${item.value}`)
        .join("\n")
    : "";
  const highlights = Array.isArray(details.highlights)
    ? (details.highlights as string[]).join("\n")
    : "";
  const variants = Array.isArray(details.variants)
    ? (details.variants as string[]).join("\n")
    : "";

  return (
    <form action={saveProduct} className="grid max-w-3xl gap-5">
      {product ? <input type="hidden" name="id" value={product.id} /> : null}
      <AdminField label="Nom" name="name" required defaultValue={product?.name} />
      <AdminField
        label="Slug"
        name="slug"
        defaultValue={product?.slug}
        hint="Laisser vide pour générer. URL publique : /telephonie/{slug}"
      />
      <AdminSelect label="Marque" name="brand_id" defaultValue={product?.brand_id ?? ""}>
        <option value="">—</option>
        {brands.map((brand) => (
          <option key={brand.id} value={brand.id}>
            {brand.name}
          </option>
        ))}
      </AdminSelect>
      <AdminSelect
        label="Catégorie"
        name="category_id"
        defaultValue={product?.category_id ?? ""}
      >
        <option value="">—</option>
        {categories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </AdminSelect>
      <AdminField label="Accroche" name="tagline" defaultValue={product?.tagline} />
      <AdminField
        label="Description"
        name="description"
        textarea
        rows={6}
        defaultValue={product?.description}
      />
      <AdminField
        label="Points forts (une ligne chacun)"
        name="highlights"
        textarea
        defaultValue={highlights}
      />
      <AdminField
        label="Configurations (une ligne chacun)"
        name="variants"
        textarea
        defaultValue={variants}
      />
      <AdminField
        label="Caractéristiques (libellé|valeur)"
        name="specs"
        textarea
        defaultValue={specs}
      />
      <div className="grid gap-4 sm:grid-cols-2">
        <AdminField
          label="Prix"
          name="amount"
          type="number"
          defaultValue={price?.amount ?? ""}
          hint="Ne rien inventer. Laisser vide si le tarif n’est pas fourni."
        />
        <AdminField
          label="Ancien prix"
          name="compare_at_amount"
          type="number"
          defaultValue={price?.compare_at_amount ?? ""}
        />
        <AdminField
          label="Devise"
          name="currency"
          defaultValue={price?.currency ?? "MRU"}
        />
        <AdminField
          label="Début promo"
          name="promo_starts_at"
          type="datetime-local"
          defaultValue={price?.promo_starts_at?.slice(0, 16)}
        />
        <AdminField
          label="Fin promo"
          name="promo_ends_at"
          type="datetime-local"
          defaultValue={price?.promo_ends_at?.slice(0, 16)}
        />
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <AdminCheck label="Actif" name="is_active" defaultChecked={product?.is_active ?? true} />
        <AdminCheck label="Mettre en avant" name="is_featured" defaultChecked={product?.is_featured} />
        <AdminCheck label="Nouveau" name="is_new" defaultChecked={product?.is_new} />
        <AdminCheck label="En promotion" name="is_promo" defaultChecked={product?.is_promo} />
        <AdminCheck
          label="Afficher le prix"
          name="price_visible"
          defaultChecked={price?.is_visible}
        />
      </div>
      <AdminSelect
        label="Disponibilité"
        name="availability"
        defaultValue={product?.availability ?? "available"}
      >
        <option value="available">Disponible</option>
        <option value="out_of_stock">Rupture de stock</option>
        <option value="hidden">Masqué</option>
      </AdminSelect>
      <AdminField
        label="Ordre"
        name="sort_order"
        type="number"
        defaultValue={product?.sort_order ?? 0}
      />
      <AdminField label="Meta title" name="meta_title" defaultValue={product?.meta_title} />
      <AdminField
        label="Meta description"
        name="meta_description"
        textarea
        defaultValue={product?.meta_description}
      />
      <AdminSubmit>{product ? "Enregistrer" : "Créer le produit"}</AdminSubmit>
    </form>
  );
}
