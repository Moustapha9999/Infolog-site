import { notFound } from "next/navigation";
import { Mail, MailOpen } from "lucide-react";
import { deleteMessage, toggleMessageRead } from "@/app/admin/actions/content";
import {
  AdminDeleteDialog,
  AdminIconSubmit,
  AdminRowActions,
} from "@/components/admin/AdminActions";
import { AdminPageHeader, AdminPanel } from "@/components/admin/AdminChrome";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { formatDateTime } from "@/lib/cms/format";
import type { ContactMessage } from "@/lib/cms/types";

export default async function AdminMessageDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const supabase = await createServerSupabaseClient();
  const { data } = await supabase
    .from("contact_messages")
    .select("*")
    .eq("id", id)
    .maybeSingle();
  if (!data) notFound();
  const message = data as ContactMessage;

  return (
    <div className="max-w-2xl space-y-8">
      <AdminPageHeader
        eyebrow="Contact"
        title={message.subject}
        description={`${message.name} · ${message.email}${message.phone ? ` · ${message.phone}` : ""} · ${formatDateTime(message.created_at)}`}
        action={
          <AdminRowActions>
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
        }
      />
      <AdminPanel>
        <p className="whitespace-pre-wrap text-sm leading-7">{message.message}</p>
      </AdminPanel>
    </div>
  );
}
