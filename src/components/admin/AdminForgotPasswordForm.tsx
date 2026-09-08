"use client";

import { KeyRound, Mail } from "lucide-react";
import { requestPasswordResetAction } from "@/app/admin/actions/auth";
import {
  AdminAuthAlert,
  AdminAuthHeader,
  AdminAuthSteps,
} from "@/components/admin/AdminAuthLayout";
import { AdminAuthField, AdminAuthSubmit } from "@/components/admin/AdminAuthField";

const ERRORS: Record<string, string> = {
  email: "Indiquez une adresse e-mail valide.",
  send: "L’envoi n’a pas abouti. Réessayez dans quelques instants.",
  config:
    "Le lien de retour n’est pas autorisé dans Supabase (URL de redirection).",
  link: "Le lien de réinitialisation est invalide ou a expiré. Demandez-en un nouveau.",
};

export function AdminForgotPasswordForm({
  sent,
  error,
}: {
  sent?: boolean;
  error?: string;
}) {
  return (
    <form action={requestPasswordResetAction} className="relative space-y-4">
      <AdminAuthHeader
        icon={<KeyRound strokeWidth={1.25} className="h-7 w-7" />}
        title="Mot de passe oublié"
        eyebrow="Réinitialisation"
      />
      <AdminAuthSteps current={sent ? 2 : 1} />
      <div className="absolute left-[-10000px] top-auto h-px w-px overflow-hidden" aria-hidden>
        <label htmlFor="website">
          Site web
          <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      {sent ? (
        <AdminAuthAlert tone="ok">
          Si un compte correspond à cette adresse, un lien de réinitialisation vient d’être
          envoyé. Ouvrez-le depuis cette même session pour choisir un nouveau mot de passe.
        </AdminAuthAlert>
      ) : (
        <p className="text-sm leading-6 text-mute">
          Saisissez l’e-mail de votre compte console. Vous recevrez un lien pour définir un
          nouveau mot de passe.
        </p>
      )}
      <AdminAuthField
        name="email"
        type="email"
        placeholder="E-mail"
        autoComplete="email"
        icon={<Mail strokeWidth={1.25} className="h-4 w-4" />}
      />
      {error && ERRORS[error] ? <AdminAuthAlert>{ERRORS[error]}</AdminAuthAlert> : null}
      <div className="pt-2">
        <AdminAuthSubmit
          idle={sent ? "Renvoyer le lien" : "Envoyer le lien"}
          pending="Envoi…"
        />
      </div>
    </form>
  );
}
