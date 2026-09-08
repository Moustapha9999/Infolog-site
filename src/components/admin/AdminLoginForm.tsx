"use client";

import { useState } from "react";
import Link from "next/link";
import { Lock, Mail, Users } from "lucide-react";
import { loginAction } from "@/app/admin/actions/auth";
import {
  AdminAuthAlert,
  AdminAuthHeader,
} from "@/components/admin/AdminAuthLayout";
import {
  AdminAuthField,
  AdminAuthPasswordToggle,
  AdminAuthSubmit,
} from "@/components/admin/AdminAuthField";
import { FORGOT_PASSWORD_PATH } from "@/lib/cms/admin-path";

export function AdminLoginForm({
  next,
  error,
}: {
  next: string;
  error?: string;
}) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form action={loginAction} className="space-y-4">
      <input type="hidden" name="next" value={next} />
      <AdminAuthHeader
        icon={<Users strokeWidth={1.25} className="h-7 w-7" />}
        title="Connexion"
        eyebrow="Authentification"
      />
      <AdminAuthField
        name="email"
        type="email"
        placeholder="E-mail"
        autoComplete="username"
        icon={<Mail strokeWidth={1.25} className="h-4 w-4" />}
      />
      <AdminAuthField
        name="password"
        type={showPassword ? "text" : "password"}
        placeholder="Mot de passe"
        autoComplete="current-password"
        icon={<Lock strokeWidth={1.25} className="h-4 w-4" />}
        right={
          <AdminAuthPasswordToggle
            show={showPassword}
            onToggle={() => setShowPassword((value) => !value)}
          />
        }
      />
      <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-2 pt-1">
        <label className="flex items-center gap-2 text-xs text-mute">
          <input
            type="checkbox"
            name="remember"
            value="1"
            defaultChecked
            className="h-3.5 w-3.5 accent-plan"
          />
          Rester connecté
        </label>
        <Link
          href={FORGOT_PASSWORD_PATH}
          className="font-mono text-[10px] uppercase tracking-[0.14em] text-mute hover:text-plan"
        >
          Mot de passe oublié ?
        </Link>
      </div>
      {error === "role" ? (
        <AdminAuthAlert>
          Compte reconnu, mais le rôle administrateur n’est pas encore attribué.
        </AdminAuthAlert>
      ) : error ? (
        <AdminAuthAlert>
          Identifiants invalides. Vérifiez l’e-mail et le mot de passe.
        </AdminAuthAlert>
      ) : null}
      <div className="pt-2">
        <AdminAuthSubmit idle="Connexion" pending="Connexion…" />
      </div>
    </form>
  );
}
