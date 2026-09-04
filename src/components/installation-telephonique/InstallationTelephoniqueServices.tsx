import {
  Cable,
  Headset,
  Phone,
  PhoneForwarded,
  Settings2,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { installationTelephonique as content } from "@/data/installation-telephonique";
import { type } from "@/lib/typography";
import { cn } from "@/lib/utils";

const icons: LucideIcon[] = [
  Phone,
  Cable,
  PhoneForwarded,
  Settings2,
  Wrench,
  Headset,
];

export function InstallationTelephoniqueServices() {
  return (
    <section className="relative isolate overflow-hidden border-b border-ink/10 bg-paper-2/50 py-14 sm:py-16 lg:py-20">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        aria-hidden
        style={{
          backgroundImage:
            "linear-gradient(rgba(16,24,32,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(16,24,32,0.06) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      <Container className="relative max-w-7xl">
        <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-12">
          <div>
            <p className={cn(type.label, "text-copper")}>
              {content.servicesLabel}
            </p>
            <h2 className={cn(type.h2, "mt-3 text-ink")}>
              {content.servicesTitle}
            </h2>
          </div>
          <p className={cn(type.lead, "text-ink/75 lg:pb-1")}>
            {content.servicesLead}
          </p>
        </div>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {content.services.map((service, index) => {
            const Icon = icons[index] ?? Phone;
            return (
              <li
                key={service.title}
                className="group relative border border-ink/12 bg-paper p-5 transition-[border-color] duration-300 hover:border-plan/40 sm:p-6"
              >
                <span
                  className="absolute left-0 top-0 h-full w-1 bg-transparent transition-colors group-hover:bg-copper"
                  aria-hidden
                />
                <span className="grid h-10 w-10 place-items-center border border-copper/40 text-copper">
                  <Icon className="h-5 w-5" strokeWidth={1.6} aria-hidden />
                </span>
                <h3 className={cn(type.h3, "mt-4 text-ink")}>{service.title}</h3>
                <p className={cn(type.body, "mt-2 text-ink/75")}>{service.body}</p>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
