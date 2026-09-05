import { Mail, MapPin, Phone } from "lucide-react";
import { ContactFormGate } from "@/components/contact/ContactFormGate";
import { SectionLabel } from "@/components/sections/SectionLabel";
import { Container } from "@/components/ui/Container";
import { site } from "@/data/site";
import { type } from "@/lib/typography";
import { cn } from "@/lib/utils";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden border-t border-ink/10 bg-paper-2 py-20">
      <div
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 border-l border-ink/10 tech-grid lg:block"
        aria-hidden
      />
      <Container className="relative grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <SectionLabel>Contact</SectionLabel>
          <h2 className={cn(type.h2, "mt-4 max-w-md text-ink")}>
            Entrer en contact
          </h2>
          <p className={cn(type.body, "mt-5 max-w-md text-mute")}>
            Parlez-nous de votre projet. Notre équipe vous accompagne depuis{" "}
            {site.city} pour donner vie à vos idées.
          </p>

          <ul className="mt-10 space-y-4">
            <li className="flex items-start gap-3 border border-ink/10 bg-paper px-4 py-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-copper" aria-hidden />
              <div>
                <p className={cn(type.label, "tracking-[0.2em] text-plan")}>
                  Localisation
                </p>
                <p className={cn(type.bodyCard, "mt-1 text-ink")}>
                  {site.city}, {site.country}
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3 border border-ink/10 bg-paper px-4 py-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-copper" aria-hidden />
              <div>
                <p className={cn(type.label, "tracking-[0.2em] text-plan")}>
                  Téléphone
                </p>
                <p className={cn(type.bodyCard, "mt-1 text-mute")}>À confirmer par INFOLOG</p>
              </div>
            </li>
            <li className="flex items-start gap-3 border border-ink/10 bg-paper px-4 py-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-copper" aria-hidden />
              <div>
                <p className={cn(type.label, "tracking-[0.2em] text-plan")}>
                  E-mail
                </p>
                <p className={cn(type.bodyCard, "mt-1 text-mute")}>À confirmer par INFOLOG</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="frame-corners relative border border-ink/15 bg-paper p-6 sm:p-8">
          <span className="frame-corners-bl" aria-hidden />
          <span className="frame-corners-br" aria-hidden />
          <div className="mb-6 flex items-center justify-between gap-3 border-b border-ink/10 pb-4">
            <p className={cn(type.label, "tracking-[0.22em] text-plan")}>
              Formulaire
            </p>
            <span className="h-1.5 w-1.5 bg-copper" aria-hidden />
          </div>
          <ContactFormGate variant="home" />
        </div>
      </Container>
    </section>
  );
}
