export const dynamic = "force-dynamic";

import { AdminShell } from "@/components/admin/AdminShell";
import { requireAdminSession } from "@/lib/cms/auth";
import { getUnreadCount } from "@/lib/cms/dashboard";
import { isSupabaseConfigured } from "@/lib/supabase/env";
import Link from "next/link";

export default async function AdminPanelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  if (!isSupabaseConfigured()) {
    return (
      <div className="grid min-h-screen place-items-center bg-paper px-6">
        <div className="frame-corners max-w-lg border border-ink/10 bg-paper p-8">
          <span className="frame-corners-bl" aria-hidden />
          <span className="frame-corners-br" aria-hidden />
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-plan">
            Console CMS
          </p>
          <h1 className="mt-3 text-2xl font-medium">Back-office non configuré</h1>
          <p className="mt-4 text-sm leading-7 text-mute">
            Créez un projet Supabase, copiez <code>.env.example</code> vers{" "}
            <code>.env.local</code>, puis exécutez la migration{" "}
            <code>supabase/migrations/20260905120000_init_cms.sql</code>.
          </p>
          <Link href="/admin/login" className="mt-6 inline-block text-sm text-plan">
            Page de connexion
          </Link>
        </div>
      </div>
    );
  }

  const session = await requireAdminSession();
  const unread = await getUnreadCount();
  return (
    <AdminShell session={session} unread={unread}>
      {children}
    </AdminShell>
  );
}
