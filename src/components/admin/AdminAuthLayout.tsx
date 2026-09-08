import Image from "next/image";
import type { ReactNode } from "react";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

export function AdminAuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="grid min-h-screen bg-white lg:grid-cols-[minmax(17rem,2fr)_minmax(0,3fr)]">
      <aside className="relative flex min-h-[38vh] items-center justify-center overflow-hidden bg-ink px-8 py-12 lg:min-h-screen lg:px-12">
        <div className="pointer-events-none absolute inset-0 tech-grid-dark opacity-40" aria-hidden />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-px bg-paper/10"
          aria-hidden
        />
        <div className="relative flex w-full max-w-sm flex-col items-center text-center">
          <Image
            src="/brand/infolog-mark.png"
            alt="INFOLOG"
            width={859}
            height={428}
            priority
            quality={100}
            className="h-auto w-[min(100%,15rem)] sm:w-[min(100%,17rem)]"
          />
          <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.28em] text-paper/55">
            Console de gestion
          </p>
          <p className="mt-3 text-sm leading-6 text-paper/65">
            Pilotez le contenu du site INFOLOG depuis un espace centralisé.
          </p>
        </div>
        <p className="absolute bottom-6 left-8 font-mono text-[10px] uppercase tracking-[0.2em] text-paper/40 lg:bottom-8 lg:left-12">
          {site.city} · {site.country}
        </p>
      </aside>

      <section className="flex items-center justify-center px-6 py-10 sm:px-10 lg:px-16">
        <div className="w-full max-w-md">{children}</div>
      </section>
    </div>
  );
}

export function AdminAuthHeader({
  icon,
  title,
  eyebrow,
}: {
  icon: ReactNode;
  title: string;
  eyebrow: string;
}) {
  return (
    <div className="mb-8 flex flex-col items-center gap-3">
      <span
        className="grid h-14 w-14 place-items-center border border-ink/15 text-plan"
        aria-hidden
      >
        {icon}
      </span>
      <h2 className="text-2xl font-medium tracking-tight text-ink">{title}</h2>
      <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-mute">{eyebrow}</p>
    </div>
  );
}

const AUTH_STEPS = [
  { n: "01", label: "Demande" },
  { n: "02", label: "Lien e-mail" },
  { n: "03", label: "Nouveau mot de passe" },
] as const;

export function AdminAuthSteps({ current }: { current: 1 | 2 | 3 }) {
  return (
    <ol className="mb-8 grid grid-cols-3 border border-ink/15">
      {AUTH_STEPS.map((step, index) => {
        const stepNumber = (index + 1) as 1 | 2 | 3;
        const active = stepNumber === current;
        return (
          <li
            key={step.n}
            aria-current={active ? "step" : undefined}
            className={cn(
              "flex flex-col gap-1 px-3 py-2.5",
              index > 0 && "border-l border-ink/15",
              active && "bg-paper-2",
            )}
          >
            <span
              className={cn(
                "font-mono text-[10px] tracking-[0.18em]",
                active ? "text-plan" : "text-mute",
              )}
            >
              {step.n}
            </span>
            <span className={cn("text-[11px] leading-4", active ? "text-ink" : "text-mute")}>
              {step.label}
            </span>
          </li>
        );
      })}
    </ol>
  );
}

export function AdminAuthAlert({
  children,
  tone = "error",
}: {
  children: ReactNode;
  tone?: "error" | "ok";
}) {
  if (tone === "ok") {
    return (
      <p className="border border-plan/25 bg-plan/5 px-3 py-2 text-sm text-plan">{children}</p>
    );
  }
  return (
    <p className="border border-copper/30 bg-copper/5 px-3 py-2 text-sm text-copper">{children}</p>
  );
}

export function AdminAuthConfigMissing() {
  return (
    <p className="border border-ink/10 bg-paper-2 px-4 py-4 text-sm leading-7 text-mute">
      Ajoutez <code className="font-mono text-copper">NEXT_PUBLIC_SUPABASE_URL</code> et la clé
      publishable dans <code className="font-mono">.env.local</code>.
    </p>
  );
}
