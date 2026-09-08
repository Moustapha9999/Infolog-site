import Link from "next/link";
import { redirect } from "next/navigation";
import { AdminLoginForm } from "@/components/admin/AdminLoginForm";
import {
  AdminAuthConfigMissing,
  AdminAuthLayout,
} from "@/components/admin/AdminAuthLayout";
import { getAdminSession } from "@/lib/cms/auth";
import { safeAdminNext } from "@/lib/cms/admin-path";
import { isSupabaseConfigured } from "@/lib/supabase/env";

export default async function AdminLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string; next?: string }>;
}) {
  const params = await searchParams;
  const configured = isSupabaseConfigured();
  const session = configured ? await getAdminSession() : null;
  if (session) {
    redirect(safeAdminNext(params.next));
  }

  return (
    <AdminAuthLayout>
      {!configured ? (
        <AdminAuthConfigMissing />
      ) : (
        <AdminLoginForm next={safeAdminNext(params.next)} error={params.error} />
      )}
      <p className="mt-6 text-center text-sm text-mute">
        <Link href="/" className="hover:text-plan">
          Retour au site
        </Link>
      </p>
    </AdminAuthLayout>
  );
}
