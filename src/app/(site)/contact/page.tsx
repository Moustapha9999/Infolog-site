import { ContactFormGate } from "@/components/contact/ContactFormGate";
import { Container } from "@/components/ui/Container";
import { TechnicalFrame } from "@/components/ui/TechnicalFrame";
import { site } from "@/data/site";

export const metadata = {
  title: "Contact",
  description: "Contacter INFOLOG à Nouakchott.",
};

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-ink/10 bg-paper-2 py-16">
        <Container>
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-plan">
            05 — Contact
          </p>
          <h1 className="mt-4 text-4xl font-medium tracking-tight text-ink sm:text-5xl">
            Nous contacter
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-mute">
            Décrivez votre besoin ci-dessous. Les coordonnées officielles (téléphone, e-mail, adresse) 
            seront rendues accessibles dès la validation de votre demande par &quot;l&apos;équipe INFOLOG&quot;.
          </p>
        </Container>
      </section>
      <Container className="grid gap-8 py-16 lg:grid-cols-[1.15fr_0.85fr]">
        <TechnicalFrame className="p-6 sm:p-8">
          <ContactFormGate />
        </TechnicalFrame>
        <div className="space-y-6">
          <TechnicalFrame className="p-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-plan">
              Localisation
            </p>
            <p className="mt-4 text-sm leading-7 text-mute">
              {site.city}, {site.country}
            </p>
            <p className="mt-2 font-mono text-xs text-mute">
              Adresse complète — à confirmer
            </p>
          </TechnicalFrame>
          <TechnicalFrame className="p-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-plan">
              À fournir
            </p>
            <ul className="mt-4 space-y-2 font-mono text-xs leading-6 text-mute">
              <li>Téléphone officiel</li>
              <li>E-mail de destination du formulaire</li>
              <li>Adresse et carte</li>
              <li>Réseaux sociaux</li>
            </ul>
          </TechnicalFrame>
        </div>
      </Container>
    </>
  );
}
