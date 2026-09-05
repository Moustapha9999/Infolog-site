import { Suspense } from "react";
import { ContactForm } from "./ContactForm";

export function ContactFormGate({
  variant = "default",
}: {
  variant?: "default" | "home";
}) {
  return (
    <Suspense
      fallback={
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-mute">
          Chargement du formulaire…
        </p>
      }
    >
      <ContactForm variant={variant} />
    </Suspense>
  );
}
