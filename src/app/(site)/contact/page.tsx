import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { ContactFormGate } from "@/components/contact/ContactFormGate";
import { ContactMap } from "@/components/contact/ContactMap";
import { SectionLabel } from "@/components/sections/SectionLabel";
import { Container } from "@/components/ui/Container";
import { TechnicalFrame } from "@/components/ui/TechnicalFrame";
import { site } from "@/data/site";
import { getSiteContact } from "@/lib/cms/site-contact";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { getLocale } from "@/lib/i18n/get-locale";
import { buildLocaleMetadata } from "@/lib/i18n/seo";
import { type } from "@/lib/typography";
import { cn } from "@/lib/utils";

export async function generateMetadata() {
  const locale = await getLocale();
  const dictionary = getDictionary(locale);
  const contact = await getSiteContact();
  return buildLocaleMetadata({
    locale,
    title: dictionary.contact.title,
    description: `${dictionary.contactPage.heading} INFOLOG — ${contact.phones.map((item) => item.display).join(" · ")}, ${contact.email}.`,
    path: "/contact",
  });
}

export default async function ContactPage() {
  const locale = await getLocale();
  const dictionary = getDictionary(locale);
  const contact = await getSiteContact();
  const lead = dictionary.contactPage.lead.replace("{city}", site.city);

  return (
    <>
      <section className="border-b border-ink/10 bg-paper-2 py-16">
        <Container>
          <SectionLabel>{dictionary.contact.title}</SectionLabel>
          <h1 className="mt-4 text-4xl font-medium tracking-tight text-ink sm:text-5xl">
            {dictionary.contactPage.heading}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-mute text-start">
            {lead}
          </p>
        </Container>
      </section>
      <Container className="grid gap-8 py-16 lg:grid-cols-[1.15fr_0.85fr]">
        <TechnicalFrame className="p-6 sm:p-8">
          <ContactFormGate />
        </TechnicalFrame>
        <div className="space-y-6">
          <TechnicalFrame className="p-6 sm:p-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-plan">
              {dictionary.common.coordinates}
            </p>
            <ul className="mt-5 space-y-4">
              <li className="flex items-start gap-3">
                <Phone
                  className="mt-0.5 h-4 w-4 shrink-0 text-copper"
                  aria-hidden
                />
                <div>
                  <p className={cn(type.label, "tracking-[0.2em] text-plan")}>
                    {dictionary.contact.phone}
                  </p>
                  <div className="mt-1 space-y-1">
                    {contact.phones.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        className={cn(
                          type.bodyCard,
                          "block text-ink hover:text-plan",
                        )}
                      >
                        {item.display}
                      </a>
                    ))}
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail
                  className="mt-0.5 h-4 w-4 shrink-0 text-copper"
                  aria-hidden
                />
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
              <li className="flex items-start gap-3">
                <MapPin
                  className="mt-0.5 h-4 w-4 shrink-0 text-copper"
                  aria-hidden
                />
                <div>
                  <p className={cn(type.label, "tracking-[0.2em] text-plan")}>
                    {dictionary.contactPage.address}
                  </p>
                  <p className={cn(type.bodyCard, "mt-1 text-ink")}>
                    {contact.address}
                  </p>
                  <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.16em] text-mute">
                    {contact.plusCode}
                  </p>
                </div>
              </li>
            </ul>
          </TechnicalFrame>
          <TechnicalFrame className="overflow-hidden">
            <div className="flex items-center justify-between gap-3 border-b border-ink/10 px-6 py-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-plan">
                {dictionary.contactPage.map}
              </p>
              <a
                href={contact.mapsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-copper hover:text-ink"
              >
                Google Maps
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
              </a>
            </div>
            <ContactMap
              className="border-0"
              embedSrc={contact.mapsEmbed}
              street={contact.street}
            />
          </TechnicalFrame>
        </div>
      </Container>
    </>
  );
}
