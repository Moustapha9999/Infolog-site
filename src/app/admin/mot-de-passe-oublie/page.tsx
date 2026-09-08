import type { Metadata } from "next";
import Link from "next/link";
import { AdminForgotPasswordForm } from "@/components/admin/AdminForgotPasswordForm";
import {
  AdminAuthConfigMissing,
  AdminAuthLayout,
} from "@/components/admin/AdminAuthLayout";
import { ADMIN_LOGIN_PATH } from "@/lib/cms/admin-path";
import { isSupabaseConfigured } from "@/lib/supabase/env";

export const metadata: Metadata = {
  title: "Mot de passe oublié",
};

export default async function ForgotPasswordPage({
  searchParams,
}: {
  searchParams: Promise<{ sent?: string; error?: string }>;
}) {
  const params = await searchParams;
  const configured = isSupabaseConfigured();

  return (
    <AdminAuthLayout>
      {!configured ? (
        <AdminAuthConfigMissing />
      ) : (
        <AdminForgotPasswordForm sent={params.sent === "1"} error={params.error} />
      )}
      <p className="mt-6 text-center text-sm text-mute">
        <Link href={ADMIN_LOGIN_PATH} className="hover:text-plan">
          Retour à la connexion
        </Link>
        <span className="mx-2 text-ink/20" aria-hidden>
          ·
        </span>
        <Link href="/" className="hover:text-plan">
          Retour au site
        </Link>
      </p>
    </AdminAuthLayout>
  );
}
