"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";

type Status = "idle" | "error" | "success";

type ContactFormProps = {
  variant?: "default" | "home";
};

export function ContactForm({ variant = "default" }: ContactFormProps) {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const isHome = variant === "home";
  const searchParams = useSearchParams();
  const initialSubject = searchParams.get("subject") ?? "";

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    if (String(data.get("company") ?? "").trim()) {
      setStatus("success");
      setMessage("Message reçu.");
      event.currentTarget.reset();
      return;
    }

    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const subject = String(data.get("subject") ?? "").trim();
    const body = String(data.get("message") ?? "").trim();

    if (!name || !email || !subject || !body || !email.includes("@")) {
      setStatus("error");
      setMessage("Merci de renseigner nom, e-mail, sujet et message.");
      return;
    }

    const phone = String(data.get("phone") ?? "").trim();
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        phone,
        subject,
        message: body,
        company: String(data.get("company") ?? ""),
      }),
    });

    if (!response.ok) {
      const payload = (await response.json().catch(() => null)) as {
        error?: string;
      } | null;
      setStatus("error");
      setMessage(
        payload?.error ??
          "Impossible d’envoyer le message. Réessayez dans un instant.",
      );
      return;
    }

    setStatus("success");
    setMessage("Message reçu. INFOLOG vous répondra sous 24–48 h ouvrées.");
    event.currentTarget.reset();
  }

  if (isHome) {
    return (
      <form onSubmit={onSubmit} className="space-y-5" noValidate>
        <input
          type="text"
          name="company"
          tabIndex={-1}
          autoComplete="off"
          className="absolute left-[-9999px] h-0 w-0 opacity-0"
          aria-hidden
        />
        <div className="grid gap-5 sm:grid-cols-2">
          <HomeField
            label="Nom complet"
            name="name"
            required
            placeholder="Ex. Mohamed Fall"
          />
          <HomeField
            label="E-mail"
            name="email"
            type="email"
            required
            placeholder="vous@entreprise.com"
          />
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <HomeField
            label="Téléphone"
            name="phone"
            placeholder="+222 XX XX XX XX"
          />
          <HomeField
            label="Sujet"
            name="subject"
            required
            placeholder="Objet de votre demande"
            defaultValue={initialSubject}
          />
        </div>
        <label className="block">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-plan">
            Message
          </span>
          <textarea
            name="message"
            required
            rows={5}
            placeholder="Décrivez votre besoin ou votre projet…"
            className="mt-2 w-full resize-y border border-ink/15 bg-paper-2/40 px-3 py-3 text-sm text-ink outline-none transition-colors placeholder:text-mute/60 focus:border-plan focus:bg-paper"
          />
        </label>
        <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-mute">
            Réponse sous 24–48 h ouvrées
          </p>
          <button
            type="submit"
            className="bg-copper px-6 py-3 text-sm font-medium uppercase tracking-[0.16em] text-paper transition-colors hover:bg-[#a34f27]"
          >
            Envoi
          </button>
        </div>
        {status !== "idle" ? (
          <p
            role="status"
            className={cn(
              "border px-3 py-2 text-sm",
              status === "error"
                ? "border-copper/30 bg-copper/5 text-copper"
                : "border-plan/30 bg-plan/5 text-plan",
            )}
          >
            {message}
          </p>
        ) : null}
      </form>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
        aria-hidden
      />
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Nom complet" name="name" required />
        <Field label="E-mail" name="email" type="email" required />
      </div>
      <Field label="Téléphone" name="phone" />
      <Field
        label="Sujet"
        name="subject"
        required
        defaultValue={initialSubject}
      />
      <label className="block">
        <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-plan">
          Message
        </span>
        <textarea
          name="message"
          required
          rows={6}
          className="mt-2 w-full border border-ink/15 bg-paper px-3 py-3 text-sm text-ink outline-none focus:border-plan"
        />
      </label>
      <button
        type="submit"
        className="bg-copper px-5 py-3 text-sm text-paper hover:bg-[#a34f27]"
      >
        Envoyer
      </button>
      {status !== "idle" ? (
        <p
          role="status"
          className={
            status === "error" ? "text-sm text-copper" : "text-sm text-plan"
          }
        >
          {message}
        </p>
      ) : null}
    </form>
  );
}

function HomeField({
  label,
  name,
  type = "text",
  required = false,
  placeholder,
  defaultValue,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  defaultValue?: string;
}) {
  return (
    <label className="block">
      <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-plan">
        {label}
        {!required ? " · optionnel" : ""}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        defaultValue={defaultValue}
        className="mt-2 w-full border border-ink/15 bg-paper-2/40 px-3 py-3 text-sm text-ink outline-none transition-colors placeholder:text-mute/60 focus:border-plan focus:bg-paper"
      />
    </label>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  defaultValue,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  defaultValue?: string;
}) {
  return (
    <label className="block">
      <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-plan">
        {label}
        {required ? "" : " · optionnel"}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        defaultValue={defaultValue}
        className="mt-2 w-full border border-ink/15 bg-paper px-3 py-3 text-sm text-ink outline-none focus:border-plan"
      />
    </label>
  );
}
