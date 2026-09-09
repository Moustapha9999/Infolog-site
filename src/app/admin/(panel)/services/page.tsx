import { deleteService, saveService } from "@/app/admin/actions/content";
import {
  AdminDeleteDialog,
  AdminFormDialog,
  AdminRowActions,
  AdminToggleDialog,
} from "@/components/admin/AdminActions";
import { AdminEmpty, AdminPageHeader, AdminPanel } from "@/components/admin/AdminChrome";
import { AdminCheck, AdminField, AdminSubmit } from "@/components/admin/AdminField";
import { listAdminServices } from "@/lib/cms/services";

export default async function AdminServicesPage() {
  const services = await listAdminServices();
  return (
    <div className="space-y-8">
      <AdminPageHeader
        eyebrow="Contenus"
        title="Services"
        description="Services actifs indexés dans la recherche globale (lien vers Qui sommes-nous)."
      />
      <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
        <AdminPanel title="Liste">
          {services.length === 0 ? (
            <AdminEmpty>Aucun service.</AdminEmpty>
          ) : (
            <ul className="divide-y divide-ink/10">
              {services.map((service) => (
                <li
                  key={service.id}
                  className="flex items-center justify-between gap-4 py-4 first:pt-0 last:pb-0"
                >
                  <div>
                    <p className="font-medium">{service.title}</p>
                    <p className="text-xs text-mute">
                      {service.description || service.slug} ·{" "}
                      {service.is_active ? "actif" : "inactif"}
                    </p>
                  </div>
                  <AdminRowActions>
                    <AdminFormDialog action={saveService} title="Modifier le service">
                      <input type="hidden" name="id" value={service.id} />
                      <AdminField label="Titre" name="title" defaultValue={service.title} required />
                      <AdminField label="Slug" name="slug" defaultValue={service.slug} />
                      <AdminField
                        label="Description"
                        name="description"
                        textarea
                        defaultValue={service.description}
                      />
                      <AdminField label="Icône (nom lucide)" name="icon" defaultValue={service.icon} />
                      <AdminField
                        label="Ordre"
                        name="sort_order"
                        type="number"
                        defaultValue={service.sort_order}
                      />
                      <AdminCheck
                        label="Actif"
                        name="is_active"
                        defaultChecked={service.is_active}
                      />
                    </AdminFormDialog>
                    <AdminToggleDialog
                      name={service.title}
                      active={service.is_active}
                      entity="services"
                      id={service.id}
                    />
                    <AdminDeleteDialog action={deleteService} name={service.title}>
                      <input type="hidden" name="id" value={service.id} />
                    </AdminDeleteDialog>
                  </AdminRowActions>
                </li>
              ))}
            </ul>
          )}
        </AdminPanel>
        <AdminPanel title="Ajouter">
          <form action={saveService} className="space-y-4">
            <AdminField label="Titre" name="title" required />
            <AdminField label="Slug" name="slug" />
            <AdminField label="Description" name="description" textarea />
            <AdminField label="Icône (nom lucide)" name="icon" />
            <AdminField label="Ordre" name="sort_order" type="number" defaultValue={0} />
            <AdminCheck label="Actif" name="is_active" defaultChecked />
            <AdminSubmit>Enregistrer</AdminSubmit>
          </form>
        </AdminPanel>
      </div>
    </div>
  );
}
