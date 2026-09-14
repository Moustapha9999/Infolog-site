import {
  deleteSocialLink,
  saveSocialLink,
} from "@/app/admin/actions/content";
import {
  AdminDeleteDialog,
  AdminFormDialog,
  AdminRowActions,
} from "@/components/admin/AdminActions";
import {
  AdminEmpty,
  AdminPageHeader,
  AdminPanel,
} from "@/components/admin/AdminChrome";
import {
  AdminCheck,
  AdminField,
  AdminSelect,
  AdminSubmit,
} from "@/components/admin/AdminField";
import {
  isSocialLinksTableReady,
  listSocialLinks,
  SOCIAL_GROUPS,
  SOCIAL_NETWORKS,
  type SiteSocial,
} from "@/lib/cms/social-links";

const ERRORS: Record<string, string> = {
  label: "Indiquez un libellé.",
  network: "Choisissez un réseau valide.",
  save: "Enregistrement impossible. Vérifiez que la migration social_links est appliquée.",
  slug: "Ce slug existe déjà. Choisissez-en un autre.",
  delete: "Suppression impossible.",
  "not-found": "Lien introuvable.",
};

const SUCCESS: Record<string, string> = {
  created: "Réseau social ajouté.",
  updated: "Réseau social mis à jour.",
  deleted: "Réseau social supprimé.",
};

function PlacementFields({ social }: { social?: SiteSocial }) {
  return (
    <div className="grid gap-2 rounded border border-ink/10 bg-paper-2/40 p-3">
      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-plan">
        Affichage sur le site
      </p>
      <AdminCheck
        label="Pied de page"
        name="show_footer"
        defaultChecked={social?.showFooter ?? true}
      />
      <AdminCheck
        label="Contact / accueil (bloc INFOLOG)"
        name="show_contact"
        defaultChecked={social?.showContact ?? false}
      />
      <AdminCheck
        label="Page National Cash"
        name="show_national_cash"
        defaultChecked={social?.showNationalCash ?? false}
      />
      <AdminCheck
        label="Page IZI SHOP"
        name="show_izi_shop"
        defaultChecked={social?.showIziShop ?? false}
      />
      <AdminCheck
        label="Page Téléphonie"
        name="show_telephonie"
        defaultChecked={social?.showTelephonie ?? false}
      />
    </div>
  );
}

function SocialFields({ social }: { social?: SiteSocial }) {
  return (
    <>
      <AdminField
        label="Libellé"
        name="label"
        defaultValue={social?.label}
        required
      />
      <AdminSelect
        label="Réseau"
        name="network"
        defaultValue={social?.network ?? "facebook"}
      >
        {SOCIAL_NETWORKS.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </AdminSelect>
      <AdminField
        label="URL ou numéro WhatsApp"
        name="href"
        defaultValue={social?.href}
        hint="URL https://… ou numéro international pour WhatsApp"
      />
      <AdminSelect
        label="Groupe"
        name="group_key"
        defaultValue={social?.groupKey ?? "autre"}
      >
        {SOCIAL_GROUPS.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </AdminSelect>
      <AdminField
        label="Ordre"
        name="sort_order"
        type="number"
        defaultValue={social?.sortOrder ?? 0}
      />
      <AdminField
        label="Slug (optionnel)"
        name="slug"
        defaultValue={social?.slug}
        hint="Identifiant technique unique. Laissé vide = généré automatiquement."
      />
      <AdminCheck
        label="Actif (visible sur le site)"
        name="is_active"
        defaultChecked={social?.isActive ?? true}
      />
      <PlacementFields social={social} />
    </>
  );
}

function placementSummary(social: SiteSocial) {
  const parts: string[] = [];
  if (social.showFooter) parts.push("footer");
  if (social.showContact) parts.push("contact");
  if (social.showNationalCash) parts.push("National Cash");
  if (social.showIziShop) parts.push("IZI SHOP");
  if (social.showTelephonie) parts.push("Téléphonie");
  return parts.length ? parts.join(" · ") : "aucun emplacement";
}

export default async function AdminSocialsPage({
  searchParams,
}: {
  searchParams: Promise<{ ok?: string; error?: string }>;
}) {
  const { ok, error } = await searchParams;
  const tableReady = await isSocialLinksTableReady();
  const socials = await listSocialLinks();
  const grouped = SOCIAL_GROUPS.map((group) => ({
    ...group,
    items: socials.filter((social) => social.groupKey === group.value),
  })).filter((group) => group.items.length > 0 || group.value === "autre");

  return (
    <div className="space-y-8">
      <AdminPageHeader
        eyebrow="Vitrine"
        title="Réseaux sociaux"
        description="CRUD complet : ajoutez, modifiez ou supprimez les liens Facebook, Instagram, TikTok, WhatsApp et LinkedIn. Choisissez où chaque lien apparaît sur le site."
      />
      {!tableReady ? (
        <p className="border border-copper/40 bg-copper/10 px-4 py-3 text-sm leading-6 text-ink">
          Pour activer le CRUD, exécutez la migration SQL{" "}
          <code className="font-mono text-xs">
            supabase/migrations/20260914170000_social_links.sql
          </code>{" "}
          dans le{" "}
          <a
            href="https://supabase.com/dashboard/project/dprzflsngfgffdpulsfv/sql/new"
            target="_blank"
            rel="noopener noreferrer"
            className="text-plan underline"
          >
            SQL Editor Supabase
          </a>
          . En attendant, la liste ci-dessous est un aperçu en lecture seule.
        </p>
      ) : null}
      {error && ERRORS[error] ? (
        <p className="border border-copper/40 bg-copper/10 px-4 py-3 text-sm text-ink">
          {ERRORS[error]}
        </p>
      ) : null}
      {ok && SUCCESS[ok] ? (
        <p className="border border-plan/30 bg-plan/10 px-4 py-3 text-sm text-ink">
          {SUCCESS[ok]}
        </p>
      ) : null}

      <div className="grid gap-8 lg:grid-cols-[1fr_340px]">
        <div className="space-y-6">
          {socials.length === 0 ? (
            <AdminPanel title="Liste">
              <AdminEmpty>
                Aucun réseau. Créez le premier à droite après la migration.
              </AdminEmpty>
            </AdminPanel>
          ) : (
            grouped.map((group) => (
              <AdminPanel key={group.value} title={group.label}>
                {group.items.length === 0 ? (
                  <AdminEmpty>Aucun lien dans ce groupe.</AdminEmpty>
                ) : (
                  <ul className="divide-y divide-ink/10">
                    {group.items.map((social) => (
                      <li
                        key={social.id}
                        className="flex flex-wrap items-start justify-between gap-3 py-4 first:pt-0 last:pb-0"
                      >
                        <div className="flex min-w-0 items-start gap-3">
                          {/* eslint-disable-next-line @next/next/no-img-element -- brand PNG/SVG */}
                          <img
                            src={social.icon}
                            alt=""
                            width={36}
                            height={36}
                            className="size-9 rounded-[10px]"
                          />
                          <div className="min-w-0">
                            <p className="font-medium">{social.label}</p>
                            <p className="mt-0.5 truncate text-sm text-mute">
                              {social.href || "URL vide"}
                            </p>
                            <p className="mt-1 font-mono text-[11px] text-mute">
                              {social.network} · ordre {social.sortOrder} ·{" "}
                              {social.isActive ? "actif" : "inactif"}
                            </p>
                            <p className="mt-1 font-mono text-[11px] text-plan">
                              {placementSummary(social)}
                            </p>
                          </div>
                        </div>
                        {tableReady ? (
                          <AdminRowActions>
                            <AdminFormDialog
                              action={saveSocialLink}
                              title="Modifier le réseau"
                              wide
                            >
                              <input
                                type="hidden"
                                name="id"
                                value={social.id}
                              />
                              <SocialFields social={social} />
                            </AdminFormDialog>
                            <AdminDeleteDialog
                              action={deleteSocialLink}
                              name={social.label}
                            >
                              <input
                                type="hidden"
                                name="id"
                                value={social.id}
                              />
                            </AdminDeleteDialog>
                          </AdminRowActions>
                        ) : null}
                      </li>
                    ))}
                  </ul>
                )}
              </AdminPanel>
            ))
          )}
        </div>

        <AdminPanel title="Ajouter un réseau">
          {tableReady ? (
            <>
              <p className="text-sm leading-6 text-mute">
                Nouveau compte Facebook, Instagram, TikTok, WhatsApp ou
                LinkedIn.
              </p>
              <form action={saveSocialLink} className="mt-5 grid gap-4">
                <SocialFields />
                <AdminSubmit>Ajouter</AdminSubmit>
              </form>
            </>
          ) : (
            <p className="text-sm leading-6 text-mute">
              Appliquez d’abord la migration SQL pour pouvoir ajouter des
              liens.
            </p>
          )}
        </AdminPanel>
      </div>
    </div>
  );
}
