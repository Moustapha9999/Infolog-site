"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { useDictionary } from "@/lib/i18n/LocaleProvider";
import { cn } from "@/lib/utils";

type Status = "idle" | "error" | "success";

type ContactFormProps = {
  variant?: "default" | "home";
};

export function ContactForm({ variant = "default" }: ContactFormProps) {
  const dictionary = useDictionary();
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const isHome = variant === "home";
  const searchParams = useSearchParams();
  const initialSubject = searchParams.get("subject") ?? "";

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    if (String(data.get("company") ?? "").trim()) {
      setStatus("success");
      setMessage(dictionary.contact.success);
      form.reset();
      return;
    }

    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const subject = String(data.get("subject") ?? "").trim();
    const body = String(data.get("message") ?? "").trim();

    if (!name || !email || !subject || !body || !email.includes("@")) {
      setStatus("error");
      setMessage(dictionary.contact.error);
      return;
    }

    setSending(true);
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
    setSending(false);

    if (!response.ok) {
      const payload = (await response.json().catch(() => null)) as {
        error?: string;
      } | null;
      setStatus("error");
      setMessage(payload?.error ?? dictionary.contact.error);
      return;
    }

    setStatus("success");
    setMessage(dictionary.contact.success);
    form.reset();
  }

  if (isHome) {
    return (
      <form onSubmit={onSubmit} className="space-y-5" noValidate>
        <input
          type="text"
          name="company"
          tabIndex={-1}
          autoComplete="off"
          className="absolute start-[-9999px] h-0 w-0 opacity-0"
          aria-hidden
        />
        <div className="grid gap-5 sm:grid-cols-2">
          <HomeField label={dictionary.contact.name} name="name" required />
          <HomeField
            label={dictionary.contact.email}
            name="email"
            type="email"
            required
          />
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <HomeField label={dictionary.contact.phoneOptional} name="phone" />
          <HomeField
            label={dictionary.contact.subject}
            name="subject"
            required
            defaultValue={initialSubject}
          />
        </div>
        <label className="block">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-plan">
            {dictionary.contact.message}
          </span>
          <textarea
            name="message"
            required
            rows={5}
            className="mt-2 w-full resize-y border border-ink/15 bg-paper-2/40 px-3 py-3 text-sm text-ink outline-none transition-colors focus:border-plan focus:bg-paper"
          />
        </label>
        <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center sm:justify-between">
          <span className="sr-only">{dictionary.common.loading}</span>
          <button
            type="submit"
            disabled={sending}
            className="bg-copper px-6 py-3 text-sm font-medium uppercase tracking-[0.16em] text-paper transition-colors hover:bg-[#a34f27]"
          >
            {sending ? dictionary.contact.sending : dictionary.contact.send}
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
        className="absolute start-[-9999px] h-0 w-0 opacity-0"
        aria-hidden
      />
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label={dictionary.contact.name} name="name" required />
        <Field
          label={dictionary.contact.email}
          name="email"
          type="email"
          required
        />
      </div>
      <Field label={dictionary.contact.phoneOptional} name="phone" />
      <Field
        label={dictionary.contact.subject}
        name="subject"
        required
        defaultValue={initialSubject}
      />
      <label className="block">
        <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-plan">
          {dictionary.contact.message}
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
        disabled={sending}
        className="bg-copper px-6 py-3 text-sm font-medium uppercase tracking-[0.16em] text-paper transition-colors hover:bg-[#a34f27]"
      >
        {sending ? dictionary.contact.sending : dictionary.contact.send}
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
