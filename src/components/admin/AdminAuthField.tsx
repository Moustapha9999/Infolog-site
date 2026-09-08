"use client";

import type { ReactNode } from "react";
import { useFormStatus } from "react-dom";

export function AdminAuthField({
  name,
  type,
  placeholder,
  autoComplete,
  icon,
  right,
  minLength,
  defaultValue,
}: {
  name: string;
  type: string;
  placeholder: string;
  autoComplete: string;
  icon: ReactNode;
  right?: ReactNode;
  minLength?: number;
  defaultValue?: string;
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
        minLength={minLength}
        autoComplete={autoComplete}
        placeholder={placeholder}
        defaultValue={defaultValue}
        className="min-w-0 flex-1 bg-transparent px-3 text-sm text-ink outline-none placeholder:text-mute/70"
      />
      {right}
    </label>
  );
}

export function AdminAuthSubmit({ idle, pending }: { idle: string; pending: string }) {
  const status = useFormStatus();
  return (
    <button
      type="submit"
      disabled={status.pending}
      className="w-full bg-copper px-5 py-3.5 text-sm font-medium uppercase tracking-[0.2em] text-paper disabled:opacity-60"
    >
      {status.pending ? pending : idle}
    </button>
  );
}

export function AdminAuthPasswordToggle({
  show,
  onToggle,
}: {
  show: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      className="px-3 font-mono text-[10px] uppercase tracking-[0.14em] text-mute hover:text-plan"
      onClick={onToggle}
      aria-label={show ? "Masquer le mot de passe" : "Afficher le mot de passe"}
    >
      {show ? "Masquer" : "Voir"}
    </button>
  );
}
