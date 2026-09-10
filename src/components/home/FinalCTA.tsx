import { Mail, MapPin, Phone } from "lucide-react";
import { ContactFormGate } from "@/components/contact/ContactFormGate";
import { SectionLabel } from "@/components/sections/SectionLabel";
import { Container } from "@/components/ui/Container";
import { site } from "@/data/site";
import { getSiteContact } from "@/lib/cms/site-contact";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { getLocale } from "@/lib/i18n/get-locale";
import { type } from "@/lib/typography";
import { cn } from "@/lib/utils";

export async function FinalCTA() {
  const contact = await getSiteContact();
  const locale = await getLocale();
  const dictionary = getDictionary(locale);

  return (
    <section className="relative overflow-hidden border-t border-ink/10 bg-paper-2 py-20">
      <div
        className="pointer-events-none absolute inset-y-0 end-0 hidden w-1/3 border-s border-ink/10 lg:block"
        aria-hidden
      />
      <Container className="relative grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-16">
        <div>
          <SectionLabel>{dictionary.common.contact}</SectionLabel>
          <h2 className={cn(type.h2, "mt-4 max-w-md text-ink")}>
            {dictionary.cta.finalTitle}
          </h2>
          <p className={cn(type.body, "mt-5 max-w-md text-mute")}>
            {dictionary.cta.finalBody} {site.city}.
          </p>

          <ul className="mt-10 space-y-4">
            <li className="flex items-start gap-3 border border-ink/10 bg-paper px-4 py-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-copper" aria-hidden />
              <div>
                <p className={cn(type.label, "tracking-[0.2em] text-plan")}>
                  {dictionary.common.coordinates}
                </p>
                <p className={cn(type.bodyCard, "mt-1 text-ink")}>
                  {contact.address}
                </p>
                <a
                  href={contact.mapsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-block font-mono text-[11px] uppercase tracking-[0.16em] text-copper hover:text-ink"
                >
                  {contact.plusCode}
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3 border border-ink/10 bg-paper px-4 py-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-copper" aria-hidden />
              <div>
                <p className={cn(type.label, "tracking-[0.2em] text-plan")}>
                  {dictionary.contact.phone}
                </p>
                <div className="mt-1 space-y-1">
                  {contact.phones.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className={cn(type.bodyCard, "block text-ink hover:text-plan")}
                    >
                      {item.display}
                    </a>
                  ))}
                </div>
              </div>
            </li>
            <li className="flex items-start gap-3 border border-ink/10 bg-paper px-4 py-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-copper" aria-hidden />
              <div>
                <p className={cn(type.label, "tracking-[0.2em] text-plan")}>
                  {dictionary.contact.email}
                </p>
                <a
                  href={contact.emailHref}
                  className={cn(type.bodyCard, "mt-1 block text-ink hover:text-plan")}
                >
                  {contact.email}
                </a>
              </div>
            </li>
          </ul>
        </div>

        <div className="frame-corners relative border border-ink/15 bg-paper p-6 sm:p-8">
          <span className="frame-corners-bl" aria-hidden />
          <span className="frame-corners-br" aria-hidden />
          <div className="mb-6 flex items-center justify-between gap-3 border-b border-ink/10 pb-4">
            <p className={cn(type.label, "tracking-[0.22em] text-plan")}>
              {dictionary.contact.title}
            </p>
            <span className="h-1.5 w-1.5 bg-copper" aria-hidden />
          </div>
          <ContactFormGate variant="home" />
        </div>
      </Container>
    </section>
  );
}
