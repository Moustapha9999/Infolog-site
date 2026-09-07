import Link from "next/link";
import { Mail, MailOpen } from "lucide-react";
import { deleteMessage, deleteProduct, toggleMessageRead } from "@/app/admin/actions/content";
import {
  AdminDeleteDialog,
  AdminEditLink,
  AdminIconSubmit,
  AdminRowActions,
  AdminToggleDialog,
} from "@/components/admin/AdminActions";
import { AdminEmpty, AdminPanel } from "@/components/admin/AdminChrome";
import { getDashboardStats } from "@/lib/cms/dashboard";
import { formatDateTime } from "@/lib/cms/format";

export default async function AdminDashboardPage() {
  const stats = await getDashboardStats();
  const inactive = Math.max(stats.products - stats.productsActive, 0);
  const kpis = [
    { label: "Produits", value: stats.products, hint: "fiches catalogue" },
    { label: "Produits actifs", value: stats.productsActive, hint: "visibles sur le site" },
    { label: "Messages non lus", value: stats.unread, hint: "à traiter" },
    { label: "Médias", value: stats.images + stats.videos, hint: "images et vidéos" },
  ];
  const mix = [
    { label: "Produits", value: stats.products },
    { label: "Marques", value: stats.brands },
    { label: "Services", value: stats.services },
    { label: "Pages", value: stats.pages },
    { label: "Slides accueil", value: stats.banners },
    { label: "Images", value: stats.images },
  ];
  const mixMax = Math.max(...mix.map((item) => item.value), 1);
  const stages = [
    { label: "Actifs", value: stats.productsActive },
    { label: "Promotion", value: stats.productsPromo },
    { label: "Inactifs", value: inactive },
  ];
  const stageTotal = Math.max(stats.products, 1);

  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {kpis.map((card) => (
          <div key={card.label} className="frame-corners border border-ink/10 bg-paper p-4">
            <span className="frame-corners-bl" aria-hidden />
            <span className="frame-corners-br" aria-hidden />
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-mute">
              {card.label}
            </p>
            <p className="mt-3 text-3xl font-medium tabular-nums">{card.value}</p>
            <p className="mt-1 text-xs text-mute">{card.hint}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.4fr_1fr]">
        <AdminPanel title="Répartition des contenus">
          <ul className="space-y-4">
            {mix.map((item) => (
              <li key={item.label}>
                <div className="mb-1 flex items-baseline justify-between text-sm">
                  <span>{item.label}</span>
                  <span className="font-mono text-xs text-mute">{item.value}</span>
                </div>
                <div className="h-1.5 bg-paper-2">
                  <div
                    className="h-full bg-plan"
                    style={{ width: `${Math.round((item.value / mixMax) * 100)}%` }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </AdminPanel>
        <AdminPanel title="État du catalogue">
          <ul className="space-y-4">
            {stages.map((item) => (
              <li key={item.label}>
                <div className="mb-1 flex items-baseline justify-between text-sm">
                  <span>{item.label}</span>
                  <span className="font-mono text-xs text-mute">
                    {item.value} · {Math.round((item.value / stageTotal) * 100)}%
                  </span>
                </div>
                <div className="h-1.5 bg-paper-2">
                  <div
                    className="h-full bg-copper"
                    style={{ width: `${Math.round((item.value / stageTotal) * 100)}%` }}
                  />
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.16em] text-mute">
            Total produits · {stats.products}
          </p>
        </AdminPanel>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <AdminPanel title="Derniers produits">
          {stats.latestProducts.length === 0 ? (
            <AdminEmpty>Aucun produit pour le moment.</AdminEmpty>
          ) : (
            <ul className="space-y-3">
              {stats.latestProducts.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center justify-between gap-3 border-b border-ink/10 pb-3 last:border-0 last:pb-0"
                >
                  <div className="min-w-0">
                    <Link href={`/admin/products/${item.id}`} className="text-sm hover:text-plan">
                      {item.name}
                    </Link>
                    <p className="font-mono text-[11px] text-mute">
                      {formatDateTime(item.created_at)}
                      {item.is_featured ? " · vedette" : ""}
                    </p>
                  </div>
                  <AdminRowActions>
                    <AdminEditLink href={`/admin/products/${item.id}`} />
                    <AdminToggleDialog
                      name={item.name}
                      active={item.is_active}
                      entity="products"
                      id={item.id}
                      next="/admin"
                    />
                    <AdminDeleteDialog action={deleteProduct} name={item.name}>
                      <input type="hidden" name="id" value={item.id} />
                      <input type="hidden" name="next" value="/admin" />
                    </AdminDeleteDialog>
                  </AdminRowActions>
                </li>
              ))}
            </ul>
          )}
        </AdminPanel>
        <AdminPanel title="Derniers messages">
          {stats.latestMessages.length === 0 ? (
            <AdminEmpty>Aucun message.</AdminEmpty>
          ) : (
            <ul className="space-y-3">
              {stats.latestMessages.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center justify-between gap-3 border-b border-ink/10 pb-3 last:border-0 last:pb-0"
                >
                  <div className="min-w-0">
                    <Link href={`/admin/messages/${item.id}`} className="text-sm hover:text-plan">
                      {item.name} — {item.subject}
                    </Link>
                    <p className="font-mono text-[11px] text-mute">
                      {formatDateTime(item.created_at)}
                      {item.read_at ? "" : " · non lu"}
                    </p>
                  </div>
                  <AdminRowActions>
                    <AdminEditLink href={`/admin/messages/${item.id}`} />
                    <form action={toggleMessageRead}>
                      <input type="hidden" name="id" value={item.id} />
                      <input type="hidden" name="read" value={item.read_at ? "0" : "1"} />
                      <AdminIconSubmit
                        label={item.read_at ? "Marquer non lu" : "Marquer lu"}
                        icon={item.read_at ? Mail : MailOpen}
                      />
                    </form>
                    <AdminDeleteDialog action={deleteMessage} name={item.subject}>
                      <input type="hidden" name="id" value={item.id} />
                      <input type="hidden" name="next" value="/admin" />
                    </AdminDeleteDialog>
                  </AdminRowActions>
                </li>
              ))}
            </ul>
          )}
        </AdminPanel>
        <AdminPanel title="Dernières actions">
          {stats.latestLogs.length === 0 ? (
            <AdminEmpty>Aucune action enregistrée.</AdminEmpty>
          ) : (
            <ul className="space-y-3">
              {stats.latestLogs.map((item) => (
                <li key={item.id} className="border-b border-ink/10 pb-3 last:border-0 last:pb-0">
                  <p className="text-sm">
                    {item.action} · {item.entity_type}
                  </p>
                  <p className="font-mono text-[11px] text-mute">
                    {formatDateTime(item.created_at)}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </AdminPanel>
      </div>
    </div>
  );
}
