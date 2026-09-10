import {
  Database,
  HardDrive,
  Network,
  RefreshCcw,
  Server,
  Settings2,
  Shield,
  Users,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/sections/SectionLabel";
import { getDataCenter, type DataCenterContent } from "@/data/data-center";
import { getLocale } from "@/lib/i18n/get-locale";
import { type } from "@/lib/typography";
import { cn } from "@/lib/utils";

const icons: Record<
  DataCenterContent["solutions"][number]["icon"],
  LucideIcon
> = {
  network: Network,
  server: Server,
  storage: Database,
  backup: HardDrive,
  hyper: Settings2,
  security: Shield,
  pra: RefreshCcw,
  services: Users,
};

export async function DataCenterSolution() {
  const locale = await getLocale();
  const dataCenter = getDataCenter(locale);
  return (
    <section className="border-b border-ink/10 bg-paper-2/40 py-16 sm:py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex justify-center">
            <SectionLabel>Offre</SectionLabel>
          </div>
          <h2 className={cn(type.h2, "mt-4 text-ink")}>
            {dataCenter.solutionTitle}
          </h2>
          <p className={cn(type.body, "mt-3 text-mute")}>
            Les briques d&apos;une infrastructure data center moderne, de
            l&apos;interconnexion aux services associés.
          </p>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {dataCenter.solutions.map((solution) => {
            const Icon = icons[solution.icon];
            return (
              <li key={solution.title}>
                <article className="group flex h-full flex-col border border-ink/12 bg-paper p-5 transition-[border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-plan/40 sm:p-6">
                  <div className="flex items-start justify-between gap-3">
                    <span className="grid h-11 w-11 place-items-center border border-copper/40 text-copper transition-colors duration-300 group-hover:border-copper group-hover:bg-copper group-hover:text-paper">
                      <Icon className="h-5 w-5" strokeWidth={1.6} aria-hidden />
                    </span>
                    <span
                      className="mt-1 h-px flex-1 bg-ink/10"
                      aria-hidden
                    />
                  </div>
                  <h3 className={cn(type.h3, "mt-5 text-ink")}>
                    {solution.title}
                  </h3>
                  <p className={cn(type.bodyCard, "mt-2 text-mute")}>
                    {solution.intro}
                  </p>
                </article>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
