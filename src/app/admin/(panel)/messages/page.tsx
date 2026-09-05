import { Mail, MailOpen } from "lucide-react";
import { deleteMessage, toggleMessageRead } from "@/app/admin/actions/content";
import {
  AdminDeleteDialog,
  AdminEditLink,
  AdminIconSubmit,
  AdminRowActions,
  AdminViewDialog,
} from "@/components/admin/AdminActions";
import { AdminEmpty, AdminPageHeader, AdminPanel } from "@/components/admin/AdminChrome";
import { adminControlClass, adminGhostButtonClass } from "@/components/admin/admin-styles";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { formatDateTime } from "@/lib/cms/format";
import type { ContactMessage } from "@/lib/cms/types";

export default async function AdminMessagesPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; unread?: string }>;
}) {
  const { q, unread } = await searchParams;
  const supabase = await createServerSupabaseClient();
  let query = supabase
    .from("contact_messages")
    .select("*")
    .order("created_at", { ascending: false });
  if (unread === "1") query = query.is("read_at", null);
  if (q) query = query.or(`name.ilike.%${q}%,email.ilike.%${q}%,subject.ilike.%${q}%`);
  const { data } = await query;
  const messages = (data ?? []) as ContactMessage[];

  return (
    <div className="space-y-8">
      <AdminPageHeader eyebrow="Contact" title="Messages" />
      <form className="flex flex-wrap items-end gap-3">
        <label className="min-w-[200px] flex-1">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-plan">
            Recherche
          </span>
          <input
            name="q"
            defaultValue={q}
            placeholder="Nom, e-mail, sujet"
            className={adminControlClass}
          />
        </label>
        <label className="flex items-center gap-2 pb-2 text-sm">
          <input type="checkbox" name="unread" value="1" defaultChecked={unread === "1"} />
          Non lus
        </label>
        <button className={adminGhostButtonClass}>Filtrer</button>
      </form>
      <AdminPanel>
        {messages.length === 0 ? (
          <AdminEmpty>Aucun message.</AdminEmpty>
        ) : (
          <ul className="divide-y divide-ink/10">
            {messages.map((message) => (
              <li
                key={message.id}
                className="flex flex-wrap items-center justify-between gap-3 py-4 first:pt-0 last:pb-0"
              >
                <div>
                  <p className="font-medium">{message.subject}</p>
                  <p className="text-xs text-mute">
                    {message.name} · {message.email} · {formatDateTime(message.created_at)}
                    {message.read_at ? "" : " · non lu"}
                  </p>
                </div>
                <AdminRowActions>
                  <AdminViewDialog title={message.subject}>
                    <p className="text-xs text-mute">
                      {message.name} · {message.email}
                      {message.phone ? ` · ${message.phone}` : ""} ·{" "}
                      {formatDateTime(message.created_at)}
                    </p>
                    <p className="mt-4 whitespace-pre-wrap text-sm leading-7">{message.message}</p>
                  </AdminViewDialog>
                  <AdminEditLink href={`/admin/messages/${message.id}`} label="Ouvrir" />
                  <form action={toggleMessageRead}>
                    <input type="hidden" name="id" value={message.id} />
                    <input type="hidden" name="read" value={message.read_at ? "0" : "1"} />
                    <AdminIconSubmit
                      label={message.read_at ? "Marquer non lu" : "Marquer lu"}
                      icon={message.read_at ? Mail : MailOpen}
                    />
                  </form>
                  <AdminDeleteDialog action={deleteMessage} name={message.subject}>
                    <input type="hidden" name="id" value={message.id} />
                  </AdminDeleteDialog>
                </AdminRowActions>
              </li>
            ))}
          </ul>
        )}
      </AdminPanel>
    </div>
  );
}
