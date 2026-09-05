"use client";

import { useState } from "react";
import { useFormStatus } from "react-dom";
import { Lock, Mail, Users } from "lucide-react";
import { loginAction } from "@/app/admin/actions/auth";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full bg-copper px-5 py-3.5 text-sm font-medium uppercase tracking-[0.2em] text-paper disabled:opacity-60"
    >
      {pending ? "Connexion…" : "Connexion"}
    </button>
  );
}

function Field({
  name,
  type,
  placeholder,
  autoComplete,
  icon,
  right,
}: {
  name: string;
  type: string;
  placeholder: string;
  autoComplete: string;
  icon: React.ReactNode;
  right?: React.ReactNode;
}) {
  return (
    <label className="flex h-12 items-stretch border border-ink/15 bg-paper focus-within:border-plan">
      <span className="grid w-12 shrink-0 place-items-center text-plan" aria-hidden>
        {icon}
      </span>
      <span className="w-px self-stretch bg-ink/10" aria-hidden />
      <input
        name={name}
        type={type}
        required
        autoComplete={autoComplete}
        placeholder={placeholder}
        className="min-w-0 flex-1 bg-transparent px-3 text-sm text-ink outline-none placeholder:text-mute/70"
      />
      {right}
    </label>
  );
}

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
      <div className="mb-8 flex flex-col items-center gap-3">
        <span
          className="grid h-14 w-14 place-items-center border border-ink/15 text-plan"
          aria-hidden
        >
          <Users strokeWidth={1.25} className="h-7 w-7" />
        </span>
        <h2 className="text-2xl font-medium tracking-tight text-ink">Connexion</h2>
        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-mute">
          Authentification
        </p>
      </div>
      <Field
        name="email"
        type="email"
        placeholder="E-mail"
        autoComplete="username"
        icon={<Mail strokeWidth={1.25} className="h-4 w-4" />}
      />
      <Field
        name="password"
        type={showPassword ? "text" : "password"}
        placeholder="Mot de passe"
        autoComplete="current-password"
        icon={<Lock strokeWidth={1.25} className="h-4 w-4" />}
        right={
          <button
            type="button"
            className="px-3 font-mono text-[10px] uppercase tracking-[0.14em] text-mute hover:text-plan"
            onClick={() => setShowPassword((value) => !value)}
            aria-label={showPassword ? "Masquer le mot de passe" : "Afficher le mot de passe"}
          >
            {showPassword ? "Masquer" : "Voir"}
          </button>
        }
      />
      <label className="flex items-center gap-2 pt-1 text-xs text-mute">
        <input
          type="checkbox"
          name="remember"
          value="1"
          defaultChecked
          className="h-3.5 w-3.5 accent-plan"
        />
        Rester connecté
      </label>
      {error === "role" ? (
        <p className="border border-copper/30 bg-copper/5 px-3 py-2 text-sm text-copper">
          Compte reconnu, mais le rôle administrateur n’est pas encore attribué.
        </p>
      ) : error ? (
        <p className="border border-copper/30 bg-copper/5 px-3 py-2 text-sm text-copper">
          Identifiants invalides. Vérifiez l’e-mail et le mot de passe.
        </p>
      ) : null}
      <div className="pt-2">
        <SubmitButton />
      </div>
    </form>
  );
}
