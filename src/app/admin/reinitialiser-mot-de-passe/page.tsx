import type { Metadata } from "next";
import Link from "next/link";
import { AdminResetPasswordForm } from "@/components/admin/AdminResetPasswordForm";
import {
  AdminAuthConfigMissing,
  AdminAuthLayout,
} from "@/components/admin/AdminAuthLayout";
import { ADMIN_LOGIN_PATH } from "@/lib/cms/admin-path";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { isSupabaseConfigured } from "@/lib/supabase/env";

export const metadata: Metadata = {
  title: "Nouveau mot de passe",
};

export default async function ResetPasswordPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string; ok?: string }>;
}) {
  const params = await searchParams;
  const configured = isSupabaseConfigured();

  let email: string | undefined;
  let hasSession = false;

  if (configured) {
    const supabase = await createServerSupabaseClient();
    const { data } = await supabase.auth.getClaims();
    const claims = data?.claims as { sub?: string; email?: string } | undefined;
    if (claims?.sub) {
      hasSession = true;
      email = claims.email;
    }
  }

  return (
    <AdminAuthLayout>
      {!configured ? (
        <AdminAuthConfigMissing />
      ) : (
        <AdminResetPasswordForm
          error={params.error}
          ok={params.ok === "1"}
          hasSession={hasSession}
          email={email}
        />
      )}
      {params.ok === "1" ? null : (
        <p className="mt-6 text-center text-sm text-mute">
          <Link href={ADMIN_LOGIN_PATH} className="hover:text-plan">
            Retour à la connexion
          </Link>
        </p>
      )}
    </AdminAuthLayout>
  );
}
