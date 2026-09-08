"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Check, Lock, LockKeyhole } from "lucide-react";
import { updatePasswordAction } from "@/app/admin/actions/auth";
import {
  AdminAuthAlert,
  AdminAuthHeader,
  AdminAuthSteps,
} from "@/components/admin/AdminAuthLayout";
import {
  AdminAuthField,
  AdminAuthPasswordToggle,
  AdminAuthSubmit,
} from "@/components/admin/AdminAuthField";
import { ADMIN_LOGIN_PATH } from "@/lib/cms/admin-path";
import { MIN_PASSWORD_LENGTH } from "@/lib/cms/password-recovery";
import { createBrowserSupabaseClient } from "@/lib/supabase/client";

const ERRORS: Record<string, string> = {
  session: "Lien invalide ou expiré. Demandez une nouvelle réinitialisation.",
  mismatch: "Les deux mots de passe ne correspondent pas.",
  weak: `Le mot de passe doit contenir au moins ${MIN_PASSWORD_LENGTH} caractères.`,
  update: "La mise à jour a échoué. Réessayez avec un mot de passe plus robuste.",
};

export function AdminResetPasswordForm({
  error,
  ok,
  hasSession,
  email,
}: {
  error?: string;
  ok?: boolean;
  hasSession: boolean;
  email?: string;
}) {
  const [showPassword, setShowPassword] = useState(false);
  const [ready, setReady] = useState(hasSession || ok);
  const [sessionOk, setSessionOk] = useState(hasSession);

  useEffect(() => {
    if (ok || hasSession) return;

    let cancelled = false;
    async function bootstrap() {
      const supabase = createBrowserSupabaseClient();
      const url = new URL(window.location.href);
      const code = url.searchParams.get("code");
      const hash = new URLSearchParams(window.location.hash.replace(/^#/, ""));
      const accessToken = hash.get("access_token");
      const refreshToken = hash.get("refresh_token");

      if (code) {
        await supabase.auth.exchangeCodeForSession(code);
        url.searchParams.delete("code");
        window.history.replaceState({}, "", `${url.pathname}${url.search}`);
      } else if (accessToken && refreshToken) {
        await supabase.auth.setSession({
          access_token: accessToken,
          refresh_token: refreshToken,
        });
        window.history.replaceState({}, "", `${url.pathname}${url.search}`);
      }

      const { data } = await supabase.auth.getClaims();
      if (!cancelled) {
        setSessionOk(Boolean(data?.claims));
        setReady(true);
      }
    }

    void bootstrap();
    return () => {
      cancelled = true;
    };
  }, [hasSession, ok]);

  if (ok) {
    return (
      <div className="space-y-6">
        <AdminAuthHeader
          icon={<Check strokeWidth={1.25} className="h-7 w-7" />}
          title="Mot de passe enregistré"
          eyebrow="Sécurité"
        />
        <AdminAuthSteps current={3} />
        <AdminAuthAlert tone="ok">
          Le mot de passe a été mis à jour. Vous pouvez ouvrir la console avec ce nouveau
          mot de passe.
        </AdminAuthAlert>
        <Link
          href="/admin"
          className="flex w-full items-center justify-center bg-copper px-5 py-3.5 text-sm font-medium uppercase tracking-[0.2em] text-paper"
        >
          Accéder à la console
        </Link>
      </div>
    );
  }

  if (!ready) {
    return (
      <div className="space-y-6">
        <AdminAuthHeader
          icon={<LockKeyhole strokeWidth={1.25} className="h-7 w-7" />}
          title="Nouveau mot de passe"
          eyebrow="Sécurité"
        />
        <p className="text-center text-sm text-mute">Vérification du lien…</p>
      </div>
    );
  }

  if (!sessionOk) {
    return (
      <div className="space-y-6">
        <AdminAuthHeader
          icon={<LockKeyhole strokeWidth={1.25} className="h-7 w-7" />}
          title="Lien expiré"
          eyebrow="Sécurité"
        />
        <AdminAuthAlert>
          {ERRORS.session}
        </AdminAuthAlert>
        <Link
          href="/admin/mot-de-passe-oublie"
          className="flex w-full items-center justify-center bg-copper px-5 py-3.5 text-sm font-medium uppercase tracking-[0.2em] text-paper"
        >
          Demander un nouveau lien
        </Link>
        <p className="text-center text-sm text-mute">
          <Link href={ADMIN_LOGIN_PATH} className="hover:text-plan">
            Retour à la connexion
          </Link>
        </p>
      </div>
    );
  }

  return (
    <form action={updatePasswordAction} className="space-y-4">
      <AdminAuthHeader
        icon={<LockKeyhole strokeWidth={1.25} className="h-7 w-7" />}
        title="Nouveau mot de passe"
        eyebrow="Sécurité"
      />
      <AdminAuthSteps current={3} />
      {email ? (
        <p className="border border-ink/10 bg-paper-2 px-3 py-2 font-mono text-[11px] text-mute">
          Compte · {email}
        </p>
      ) : null}
      <p className="text-sm leading-6 text-mute">
        Choisissez un mot de passe d’au moins {MIN_PASSWORD_LENGTH} caractères, puis
        confirmez-le.
      </p>
      <AdminAuthField
        name="password"
        type={showPassword ? "text" : "password"}
        placeholder="Nouveau mot de passe"
        autoComplete="new-password"
        minLength={MIN_PASSWORD_LENGTH}
        icon={<Lock strokeWidth={1.25} className="h-4 w-4" />}
        right={
          <AdminAuthPasswordToggle
            show={showPassword}
            onToggle={() => setShowPassword((value) => !value)}
          />
        }
      />
      <AdminAuthField
        name="confirm"
        type={showPassword ? "text" : "password"}
        placeholder="Confirmer le mot de passe"
        autoComplete="new-password"
        minLength={MIN_PASSWORD_LENGTH}
        icon={<Lock strokeWidth={1.25} className="h-4 w-4" />}
      />
      {error && ERRORS[error] ? <AdminAuthAlert>{ERRORS[error]}</AdminAuthAlert> : null}
      <div className="pt-2">
        <AdminAuthSubmit idle="Enregistrer" pending="Enregistrement…" />
      </div>
    </form>
  );
}
