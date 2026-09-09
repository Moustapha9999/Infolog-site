import Link from "next/link";
import { notFound } from "next/navigation";
import { deleteSection, savePage, saveSection } from "@/app/admin/actions/content";
import {
  AdminDeleteDialog,
  AdminFormDialog,
  AdminRowActions,
} from "@/components/admin/AdminActions";
import { AdminPageHeader, AdminPanel } from "@/components/admin/AdminChrome";
import { AdminCheck, AdminField, AdminSubmit } from "@/components/admin/AdminField";
import { getAdminPage } from "@/lib/cms/pages";

export default async function AdminPageDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const { page, sections } = await getAdminPage(id);
  if (!page) notFound();

  return (
    <div className="space-y-8">
      <AdminPageHeader eyebrow="Contenus" title={page.title} />
      {page.slug === "home" ? (
        <p className="max-w-2xl text-sm leading-6 text-mute">
          Accueil : <code className="font-mono text-xs">hero.title</code> et{" "}
          <code className="font-mono text-xs">hero.lead</code> alimentent
          l’écran d’accueil.{" "}
          <code className="font-mono text-xs">hero.welcome_ms</code> (durée du
          welcome) et <code className="font-mono text-xs">hero.slide_ms</code>{" "}
          (durée de chaque visuel) sont en millisecondes. Les images du
          carrousel se gèrent dans{" "}
          <Link href="/admin/banners" className="text-plan underline">
            Carrousel accueil
          </Link>
          .
        </p>
      ) : null}
      {page.slug === "contact" ? (
        <p className="max-w-2xl text-sm leading-6 text-mute">
          Coordonnées affichées sur l’accueil, le pied de page, le menu mobile
          et la page Contact. Clés :{" "}
          <code className="font-mono text-xs">phone_1</code>,{" "}
          <code className="font-mono text-xs">phone_2</code>,{" "}
          <code className="font-mono text-xs">phone_1_href</code> /{" "}
          <code className="font-mono text-xs">phone_2_href</code> (ex.{" "}
          <code className="font-mono text-xs">tel:+222…</code>),{" "}
          <code className="font-mono text-xs">email</code>,{" "}
          <code className="font-mono text-xs">address</code>,{" "}
          <code className="font-mono text-xs">plus_code</code>,{" "}
          <code className="font-mono text-xs">maps_href</code>,{" "}
          <code className="font-mono text-xs">maps_embed</code>,{" "}
          <code className="font-mono text-xs">geo_lat</code> /{" "}
          <code className="font-mono text-xs">geo_lng</code>. Laissez la page
          publiée pour que le site vitrine les utilise.
        </p>
      ) : null}
      <AdminPanel title="Métadonnées" className="max-w-xl">
        <form action={savePage} className="grid gap-4">
          <input type="hidden" name="id" value={page.id} />
          <AdminField label="Titre" name="title" defaultValue={page.title} required />
          <AdminField label="Slug" name="slug" defaultValue={page.slug} />
          <AdminField label="Meta title" name="meta_title" defaultValue={page.meta_title} />
          <AdminField
            label="Meta description"
            name="meta_description"
            textarea
            defaultValue={page.meta_description}
          />
          <AdminCheck label="Publiée" name="is_published" defaultChecked={page.is_published} />
          <AdminSubmit>Enregistrer la page</AdminSubmit>
        </form>
      </AdminPanel>
      <AdminPanel title="Sections">
        <ul className="divide-y divide-ink/10">
          {sections.map((section) => (
            <li
              key={section.id}
              className="flex items-start justify-between gap-4 py-4 first:pt-0 last:pb-0"
            >
              <div className="min-w-0">
                <p className="font-medium">{section.key}</p>
                <p className="mt-1 line-clamp-2 text-sm text-mute">{section.value}</p>
                <p className="mt-1 font-mono text-[11px] text-mute">
                  {section.kind} · ordre {section.sort_order}
                </p>
              </div>
              <AdminRowActions>
                <AdminFormDialog action={saveSection} title="Modifier la section" wide>
                  <input type="hidden" name="id" value={section.id} />
                  <input type="hidden" name="page_id" value={page.id} />
                  <AdminField label="Clé" name="key" defaultValue={section.key} />
                  <AdminField label="Type" name="kind" defaultValue={section.kind} />
                  <AdminField
                    label="Valeur"
                    name="value"
                    textarea
                    defaultValue={section.value}
                  />
                  <AdminField label="Lien" name="href" defaultValue={section.href} />
                  <AdminField
                    label="Ordre"
                    name="sort_order"
                    type="number"
                    defaultValue={section.sort_order}
                  />
                </AdminFormDialog>
                <AdminDeleteDialog action={deleteSection} name={section.key}>
                  <input type="hidden" name="id" value={section.id} />
                  <input type="hidden" name="page_id" value={page.id} />
                </AdminDeleteDialog>
              </AdminRowActions>
            </li>
          ))}
        </ul>
        <form action={saveSection} className="mt-6 grid max-w-xl gap-3 border-t border-ink/10 pt-6">
          <input type="hidden" name="page_id" value={page.id} />
          <h3 className="font-medium">Ajouter une section</h3>
          <AdminField label="Clé (ex. hero.title)" name="key" required />
          <AdminField label="Type" name="kind" defaultValue="paragraph" />
          <AdminField label="Valeur" name="value" textarea required />
          <AdminField label="Lien" name="href" />
          <AdminSubmit>Ajouter</AdminSubmit>
        </form>
      </AdminPanel>
    </div>
  );
}
