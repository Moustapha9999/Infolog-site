import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowUpRight,
  CheckCircle2,
  ClipboardList,
  ImageIcon,
  Mail,
  MailOpen,
  Package,
  Search,
  Sparkles,
} from "lucide-react";
import { deleteMessage, deleteProduct, toggleMessageRead } from "@/app/admin/actions/content";
import {
  AdminDeleteDialog,
  AdminEditLink,
  AdminIconSubmit,
  AdminRowActions,
  AdminToggleDialog,
} from "@/components/admin/AdminActions";
import { AdminEmpty, AdminPanel } from "@/components/admin/AdminChrome";
import { requireAdminSession } from "@/lib/cms/auth";
import { getDashboardStats } from "@/lib/cms/dashboard";
import { formatDateTime } from "@/lib/cms/format";
import { cn } from "@/lib/utils";

function displayName(email?: string) {
  const local = email?.split("@")[0] ?? "équipe";
  return local
    .split(/[._-]/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

const kpiToneClass = {
  plan: "bg-plan/10 text-plan",
  copper: "bg-copper/10 text-copper",
  ink: "bg-ink/8 text-ink",
  mute: "bg-[var(--admin-main)] text-plan-muted",
} as const;

function DashboardKpi({
  label,
  value,
  hint,
  href,
  icon: Icon,
  tone,
}: {
  label: string;
  value: number;
  hint: string;
  href: string;
  icon: LucideIcon;
  tone: keyof typeof kpiToneClass;
}) {
  return (
    <Link
      href={href}
      className="admin-card group flex h-full flex-col p-5 transition hover:border-plan/30 hover:shadow-[0_8px_28px_rgba(16,24,32,0.06)]"
    >
      <div className="flex items-start justify-between gap-3">
        <p className="text-sm font-medium text-mute">{label}</p>
        <span
          className={cn(
            "grid h-10 w-10 shrink-0 place-items-center rounded-xl transition group-hover:scale-105",
            kpiToneClass[tone],
          )}
        >
          <Icon strokeWidth={1.6} className="h-5 w-5" aria-hidden />
        </span>
      </div>
      <p className="mt-4 text-3xl font-semibold tabular-nums tracking-tight text-ink sm:text-4xl">
        {value}
      </p>
      <div className="mt-auto flex items-center justify-between gap-2 pt-3">
        <p className="text-xs text-mute">{hint}</p>
        <ArrowUpRight
          strokeWidth={1.6}
          className="h-4 w-4 text-mute opacity-0 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-plan group-hover:opacity-100"
          aria-hidden
        />
      </div>
    </Link>
  );
}

export default async function AdminDashboardPage() {
  const [session, stats] = await Promise.all([requireAdminSession(), getDashboardStats()]);
  const name = displayName(session.email);
  const inactive = Math.max(stats.products - stats.productsActive, 0);
  const kpis = [
    {
      label: "Produits",
      value: stats.products,
      hint: "fiches catalogue",
      href: "/admin/products",
      icon: Package,
      tone: "plan" as const,
    },
    {
      label: "Produits actifs",
      value: stats.productsActive,
      hint: "visibles sur le site",
      href: "/admin/products",
      icon: CheckCircle2,
      tone: "ink" as const,
    },
    {
      label: "Messages non lus",
      value: stats.unread,
      hint: "à traiter",
      href: "/admin/messages",
      icon: Mail,
      tone: "copper" as const,
    },
    {
      label: "Médias",
      value: stats.images + stats.videos,
      hint: "images et vidéos",
      href: "/admin/media",
      icon: ImageIcon,
      tone: "mute" as const,
    },
  ];
  const mix = [
    { label: "Produits", value: stats.products, color: "bg-plan" },
    { label: "Marques", value: stats.brands, color: "bg-plan/80" },
    { label: "Services", value: stats.services, color: "bg-plan/65" },
    { label: "Pages", value: stats.pages, color: "bg-plan/50" },
    { label: "Slides accueil", value: stats.banners, color: "bg-plan-muted" },
    { label: "Images", value: stats.images, color: "bg-copper/70" },
  ];
  const mixMax = Math.max(...mix.map((item) => item.value), 1);
  const stages = [
    { label: "Actifs", value: stats.productsActive, color: "bg-copper" },
    { label: "Promotion", value: stats.productsPromo, color: "bg-plan" },
    { label: "Inactifs", value: inactive, color: "bg-ink/25" },
  ];
  const stageTotal = Math.max(stats.products, 1);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-plan">Tableau de bord</p>
          <h1 className="mt-1 text-2xl font-semibold tracking-tight sm:text-3xl">
            Bonjour, {name}
          </h1>
          <p className="mt-1.5 text-sm text-mute">Voici l’état de la console aujourd’hui.</p>
        </div>
        <div className="inline-flex items-center gap-2 rounded-full border border-ink/8 bg-[var(--admin-card)] px-3 py-1.5 text-xs text-mute shadow-[var(--admin-shadow)]">
          <Sparkles strokeWidth={1.5} className="h-3.5 w-3.5 text-copper" aria-hidden />
          Console CMS · INFOLOG
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {kpis.map((card) => (
          <DashboardKpi key={card.label} {...card} />
        ))}
      </div>

      <AdminPanel>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-4">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-plan/10 text-plan">
              <Search strokeWidth={1.6} className="h-5 w-5" aria-hidden />
            </span>
            <div>
              <h2 className="text-sm font-semibold text-ink">Recherche globale INFOLOG</h2>
              <p className="mt-1 max-w-2xl text-sm leading-6 text-mute">
                Les contenus <span className="text-ink">actifs / publiés</span> alimentent la barre
                « Rechercher sur INFOLOG… » et{" "}
                <span className="font-mono text-xs text-ink">/recherche</span>.
              </p>
            </div>
          </div>
          <Link
            href="/recherche"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl border border-ink/10 bg-[var(--admin-main)] px-4 py-2.5 text-sm font-medium text-plan transition hover:border-plan/30 hover:bg-plan/5"
          >
            <Search className="h-4 w-4" aria-hidden />
            Tester la recherche
          </Link>
        </div>
      </AdminPanel>

      <div className="grid gap-6 xl:grid-cols-[1.4fr_1fr]">
        <AdminPanel title="Répartition des contenus">
          <ul className="space-y-4">
            {mix.map((item) => (
              <li key={item.label}>
                <div className="mb-1.5 flex items-baseline justify-between text-sm">
                  <span className="inline-flex items-center gap-2">
                    <span className={cn("h-2 w-2 rounded-full", item.color)} aria-hidden />
                    {item.label}
                  </span>
                  <span className="font-mono text-xs text-mute">{item.value}</span>
                </div>
                <div className="h-2.5 overflow-hidden rounded-full bg-[var(--admin-main)]">
                  <div
                    className={cn("h-full rounded-full transition-all", item.color)}
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
                <div className="mb-1.5 flex items-baseline justify-between text-sm">
                  <span className="inline-flex items-center gap-2">
                    <span className={cn("h-2 w-2 rounded-full", item.color)} aria-hidden />
                    {item.label}
                  </span>
                  <span className="font-mono text-xs text-mute">
                    {item.value} · {Math.round((item.value / stageTotal) * 100)}%
                  </span>
                </div>
                <div className="h-2.5 overflow-hidden rounded-full bg-[var(--admin-main)]">
                  <div
                    className={cn("h-full rounded-full", item.color)}
                    style={{ width: `${Math.round((item.value / stageTotal) * 100)}%` }}
                  />
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex items-center gap-2 rounded-xl bg-[var(--admin-main)]/70 px-3 py-2.5 text-xs text-mute">
            <ClipboardList strokeWidth={1.5} className="h-3.5 w-3.5 text-plan" aria-hidden />
            Total produits · <span className="font-semibold text-ink">{stats.products}</span>
          </div>
        </AdminPanel>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <AdminPanel
          title="Derniers produits"
          action={
            <Link href="/admin/products" className="text-sm font-medium text-plan hover:underline">
              Voir tout
            </Link>
          }
        >
          {stats.latestProducts.length === 0 ? (
            <AdminEmpty>Aucun produit pour le moment.</AdminEmpty>
          ) : (
            <ul className="space-y-3">
              {stats.latestProducts.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center justify-between gap-3 border-b border-ink/6 pb-3 last:border-0 last:pb-0"
                >
                  <div className="flex min-w-0 items-start gap-3">
                    <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-plan/10 text-plan">
                      <Package strokeWidth={1.5} className="h-3.5 w-3.5" aria-hidden />
                    </span>
                    <div className="min-w-0">
                      <Link
                        href={`/admin/products/${item.id}`}
                        className="text-sm font-medium hover:text-plan"
                      >
                        {item.name}
                      </Link>
                      <p className="mt-0.5 text-xs text-mute">
                        {formatDateTime(item.created_at)}
                        {item.is_featured ? " · vedette" : ""}
                      </p>
                    </div>
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
        <AdminPanel
          title="Derniers messages"
          action={
            <Link href="/admin/messages" className="text-sm font-medium text-plan hover:underline">
              Voir tout
            </Link>
          }
        >
          {stats.latestMessages.length === 0 ? (
            <AdminEmpty>Aucun message.</AdminEmpty>
          ) : (
            <ul className="space-y-3">
              {stats.latestMessages.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center justify-between gap-3 border-b border-ink/6 pb-3 last:border-0 last:pb-0"
                >
                  <div className="flex min-w-0 items-start gap-3">
                    <span
                      className={cn(
                        "mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg",
                        item.read_at ? "bg-ink/6 text-mute" : "bg-copper/10 text-copper",
                      )}
                    >
                      <Mail strokeWidth={1.5} className="h-3.5 w-3.5" aria-hidden />
                    </span>
                    <div className="min-w-0">
                      <Link
                        href={`/admin/messages/${item.id}`}
                        className="text-sm font-medium hover:text-plan"
                      >
                        {item.name} — {item.subject}
                      </Link>
                      <p className="mt-0.5 text-xs text-mute">
                        {formatDateTime(item.created_at)}
                        {item.read_at ? "" : " · non lu"}
                      </p>
                    </div>
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
                <li
                  key={item.id}
                  className="flex items-start gap-3 border-b border-ink/6 pb-3 last:border-0 last:pb-0"
                >
                  <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-[var(--admin-main)] text-plan">
                    <ClipboardList strokeWidth={1.5} className="h-3.5 w-3.5" aria-hidden />
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-medium">
                      {item.action} · {item.entity_type}
                    </p>
                    <p className="mt-0.5 text-xs text-mute">{formatDateTime(item.created_at)}</p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </AdminPanel>
      </div>
    </div>
  );
}
