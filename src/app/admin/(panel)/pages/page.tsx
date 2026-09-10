import {
  deletePage,
  ensureContactPage,
  savePage,
} from "@/app/admin/actions/content";
import {
  AdminDeleteDialog,
  AdminEditLink,
  AdminFormDialog,
  AdminRowActions,
  AdminToggleDialog,
} from "@/components/admin/AdminActions";
import { AdminEmpty, AdminPageHeader, AdminPanel } from "@/components/admin/AdminChrome";
import { AdminCheck, AdminField, AdminSubmit } from "@/components/admin/AdminField";
import { TranslationFields } from "@/components/admin/TranslationFields";
import { TranslationStatusBadges } from "@/components/admin/TranslationStatusBadges";
import { listAdminPages } from "@/lib/cms/pages";
import { cmsTranslationStatus } from "@/lib/i18n/content";
import { parseTranslations } from "@/lib/i18n/localize";

function PageTranslationFields({
  title,
  metaTitle,
  metaDescription,
  translations,
}: {
  title?: string;
  metaTitle?: string | null;
  metaDescription?: string | null;
  translations?: unknown;
}) {
  return (
    <TranslationFields
      translations={parseTranslations(translations)}
      fields={[
        {
          key: "title",
          frName: "title",
          labelFr: "Titre (FR)",
          labelEn: "Title (EN)",
          labelAr: "العنوان (AR)",
          required: true,
          frDefault: title,
        },
        {
          key: "meta_title",
          frName: "meta_title",
          labelFr: "Meta title (FR)",
          labelEn: "Meta title (EN)",
          labelAr: "Meta title (AR)",
          frDefault: metaTitle,
        },
        {
          key: "meta_description",
          frName: "meta_description",
          labelFr: "Meta description (FR)",
          labelEn: "Meta description (EN)",
          labelAr: "Meta description (AR)",
          textarea: true,
          frDefault: metaDescription,
        },
      ]}
    />
  );
}

export default async function AdminPagesPage() {
  const pages = await listAdminPages();
  const contactPage = pages.find((page) => page.slug === "contact");

  return (
    <div className="space-y-8">
      <AdminPageHeader
        eyebrow="Contenus"
        title="Pages"
        description="Pages publiées indexées dans la recherche globale. Coordonnées du site : page « Coordonnées » (slug contact)."
      />
      {!contactPage ? (
        <AdminPanel title="Coordonnées du site">
          <p className="text-sm leading-6 text-mute">
            La page CMS des coordonnées n’existe pas encore. Créez-la pour
            contrôler téléphones, e-mail, adresse et carte depuis le
            back-office.
          </p>
          <form action={ensureContactPage} className="mt-4">
            <AdminSubmit>Initialiser les coordonnées</AdminSubmit>
          </form>
        </AdminPanel>
      ) : (
        <AdminPanel title="Coordonnées du site">
          <p className="text-sm leading-6 text-mute">
            Page prête :{" "}
            <span className="font-medium text-ink">{contactPage.title}</span>{" "}
            ({contactPage.is_published ? "publiée" : "brouillon"}).
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <AdminEditLink href={`/admin/pages/${contactPage.id}`} />
            <form action={ensureContactPage}>
              <button
                type="submit"
                className="border border-ink/15 px-4 py-2 text-sm text-ink hover:border-plan hover:text-plan"
              >
                Compléter les sections manquantes
              </button>
            </form>
          </div>
        </AdminPanel>
      )}
      <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
        <AdminPanel title="Liste">
          {pages.length === 0 ? (
            <AdminEmpty>Aucune page.</AdminEmpty>
          ) : (
            <ul className="divide-y divide-ink/10">
              {pages.map((page) => (
                <li
                  key={page.id}
                  className="flex items-center justify-between gap-4 py-4 first:pt-0 last:pb-0"
                >
                  <div>
                    <p className="font-medium">{page.title}</p>
                    <p className="font-mono text-[11px] text-mute">
                      {page.slug} · {page.is_published ? "publiée" : "brouillon"}
                    </p>
                    <TranslationStatusBadges
                      status={cmsTranslationStatus(
                        {
                          title: page.title,
                          meta_title: page.meta_title,
                          meta_description: page.meta_description,
                        },
                        parseTranslations(page.translations),
                        ["title"],
                      )}
                    />
                  </div>
                  <AdminRowActions>
                    <AdminEditLink href={`/admin/pages/${page.id}`} />
                    <AdminFormDialog action={savePage} title="Modifier la page">
                      <input type="hidden" name="id" value={page.id} />
                      <PageTranslationFields
                        title={page.title}
                        metaTitle={page.meta_title}
                        metaDescription={page.meta_description}
                        translations={page.translations}
                      />
                      <AdminField label="Slug" name="slug" defaultValue={page.slug} />
                      <AdminCheck
                        label="Publiée"
                        name="is_published"
                        defaultChecked={page.is_published}
                      />
                    </AdminFormDialog>
                    <AdminToggleDialog
                      name={page.title}
                      active={page.is_published}
                      entity="pages"
                      id={page.id}
                      deactivateLabel="Dépublier"
                      activateLabel="Publier"
                      deactivateHint={`${page.title} ne sera plus visible sur le site.`}
                      activateHint={`${page.title} redeviendra visible sur le site.`}
                    />
                    <AdminDeleteDialog action={deletePage} name={page.title}>
                      <input type="hidden" name="id" value={page.id} />
                    </AdminDeleteDialog>
                  </AdminRowActions>
                </li>
              ))}
            </ul>
          )}
        </AdminPanel>
        <AdminPanel title="Nouvelle page">
          <form action={savePage} className="space-y-4">
            <PageTranslationFields />
            <AdminField label="Slug" name="slug" />
            <AdminCheck label="Publiée" name="is_published" defaultChecked />
            <AdminSubmit>Créer</AdminSubmit>
          </form>
        </AdminPanel>
      </div>
    </div>
  );
}
