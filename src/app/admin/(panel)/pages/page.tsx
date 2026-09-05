import { deletePage, savePage } from "@/app/admin/actions/content";
import {
  AdminDeleteDialog,
  AdminEditLink,
  AdminFormDialog,
  AdminRowActions,
  AdminToggleDialog,
} from "@/components/admin/AdminActions";
import { AdminEmpty, AdminPageHeader, AdminPanel } from "@/components/admin/AdminChrome";
import { AdminCheck, AdminField, AdminSubmit } from "@/components/admin/AdminField";
import { listAdminPages } from "@/lib/cms/pages";

export default async function AdminPagesPage() {
  const pages = await listAdminPages();
  return (
    <div className="space-y-8">
      <AdminPageHeader eyebrow="Contenus" title="Pages" />
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
                  </div>
                  <AdminRowActions>
                    <AdminEditLink href={`/admin/pages/${page.id}`} />
                    <AdminFormDialog action={savePage} title="Modifier la page">
                      <input type="hidden" name="id" value={page.id} />
                      <AdminField label="Titre" name="title" defaultValue={page.title} required />
                      <AdminField label="Slug" name="slug" defaultValue={page.slug} />
                      <AdminField
                        label="Meta title"
                        name="meta_title"
                        defaultValue={page.meta_title}
                      />
                      <AdminField
                        label="Meta description"
                        name="meta_description"
                        textarea
                        defaultValue={page.meta_description}
                      />
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
            <AdminField label="Titre" name="title" required />
            <AdminField label="Slug" name="slug" />
            <AdminField label="Meta title" name="meta_title" />
            <AdminField label="Meta description" name="meta_description" textarea />
            <AdminCheck label="Publiée" name="is_published" defaultChecked />
            <AdminSubmit>Créer</AdminSubmit>
          </form>
        </AdminPanel>
      </div>
    </div>
  );
}
