import {
  Database,
  Eye,
  GitFork,
  Lock,
  MoveDiagonal,
  Wifi,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { getMonetique } from "@/data/monetique";
import { getLocale } from "@/lib/i18n/get-locale";

const icons: LucideIcon[] = [MoveDiagonal, Database, GitFork, Wifi, Eye, Lock];

export async function MonetiqueHero() {
  const locale = await getLocale();
  const monetique = getMonetique(locale);
  return (
    <section className="border-b border-ink/10 bg-white">
      <Container wide className="py-12 sm:py-16 lg:py-20">
        <div className="relative">
          <div
            className="pointer-events-none absolute left-[8%] right-[8%] top-7 hidden h-px bg-plan/35 lg:block"
            aria-hidden
          />
          <ol className="grid gap-10 sm:grid-cols-2 lg:grid-cols-6 lg:gap-5">
            {monetique.network.items.map((item, index) => {
              const Icon = icons[index] ?? Lock;
              return (
                <li key={item.title} className="flex flex-col items-center text-center">
                  <span className="relative z-10 grid h-14 w-14 place-items-center rounded-full border-[1.5px] border-plan bg-white text-plan">
                    <Icon className="h-5 w-5" strokeWidth={1.6} aria-hidden />
                  </span>
                  <h2 className="mt-4 max-w-[16rem] text-sm font-bold leading-5 tracking-tight text-plan sm:text-[15px]">
                    {item.title}
                  </h2>
                  <ul className="mt-3 space-y-0.5 text-sm font-bold leading-6 text-ink/80">
                    {item.items.map((entry) => (
                      <li key={entry}>{entry}</li>
                    ))}
                  </ul>
                </li>
              );
            })}
          </ol>
        </div>
      </Container>
    </section>
  );
}
