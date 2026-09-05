import Link from "next/link";
import { deleteProduct } from "@/app/admin/actions/content";
import {
  AdminDeleteDialog,
  AdminEditLink,
  AdminRowActions,
  AdminToggleDialog,
} from "@/components/admin/AdminActions";
import { AdminEmpty, AdminPageHeader } from "@/components/admin/AdminChrome";
import { listAdminProducts } from "@/lib/cms/products";
import { formatMoney } from "@/lib/cms/format";

export default async function AdminProductsPage() {
  const products = await listAdminProducts();
  return (
    <div className="space-y-8">
      <AdminPageHeader
        eyebrow="Catalogue"
        title="Produits"
        action={
          <Link
            href="/admin/products/new"
            className="inline-flex bg-copper px-4 py-2 text-sm uppercase tracking-[0.14em] text-paper"
          >
            Ajouter
          </Link>
        }
      />
      {products.length === 0 ? (
        <AdminEmpty>Aucun produit. Ajoutez une fiche ou lancez le seed.</AdminEmpty>
      ) : (
        <div className="overflow-x-auto border border-ink/10 bg-paper">
          <table className="w-full min-w-[720px] text-left text-sm">
            <thead className="bg-paper-2 font-mono text-[11px] uppercase tracking-[0.16em] text-mute">
              <tr>
                <th className="px-4 py-3">Nom</th>
                <th className="px-4 py-3">Statut</th>
                <th className="px-4 py-3">Prix</th>
                <th className="px-4 py-3">Flags</th>
                <th className="px-4 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => {
                const price = Array.isArray(product.product_prices)
                  ? product.product_prices[0]
                  : product.product_prices;
                return (
                  <tr key={product.id} className="border-t border-ink/10">
                    <td className="px-4 py-3">
                      <Link
                        href={`/admin/products/${product.id}`}
                        className="hover:text-plan"
                      >
                        {product.name}
                      </Link>
                      <p className="font-mono text-[11px] text-mute">{product.slug}</p>
                    </td>
                    <td className="px-4 py-3">
                      {product.is_active ? "Actif" : "Inactif"} · {product.availability}
                    </td>
                    <td className="px-4 py-3">
                      {price?.is_visible
                        ? formatMoney(Number(price.amount), price.currency) ?? "—"
                        : "Masqué"}
                    </td>
                    <td className="px-4 py-3 text-xs text-mute">
                      {[
                        product.is_featured ? "Vedette" : null,
                        product.is_new ? "Nouveau" : null,
                        product.is_promo ? "Promo" : null,
                      ]
                        .filter(Boolean)
                        .join(" · ") || "—"}
                    </td>
                    <td className="px-4 py-3">
                      <AdminRowActions>
                        <AdminEditLink href={`/admin/products/${product.id}`} />
                        <AdminToggleDialog
                          name={product.name}
                          active={product.is_active}
                          entity="products"
                          id={product.id}
                        />
                        <AdminDeleteDialog action={deleteProduct} name={product.name}>
                          <input type="hidden" name="id" value={product.id} />
                        </AdminDeleteDialog>
                      </AdminRowActions>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
