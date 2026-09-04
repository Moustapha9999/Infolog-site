import {
  Bell,
  FolderLock,
  Globe,
  HardDrive,
  Network,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/sections/SectionLabel";
import { SecuriteHero } from "@/components/securite/SecuriteHero";
import { SecuriteApproche } from "@/components/securite/SecuriteApproche";
import {
  SecuriteCta,
  SecuriteStack,
} from "@/components/securite/SecuriteStack";
import { securite } from "@/data/securite";
import { type } from "@/lib/typography";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "Sécurité",
  description: securite.description,
};

const concreteIcons: LucideIcon[] = [
  Network,
  ShieldCheck,
  Globe,
  FolderLock,
  HardDrive,
  Bell,
];

export default function SecuritePage() {
  return (
    <>
      <SecuriteHero />
      <SecuriteApproche />

      <section className="border-b border-ink/10 bg-paper py-14 sm:py-16 lg:py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <div className="flex justify-center">
              <SectionLabel>Dispositifs</SectionLabel>
            </div>
            <h2 className={cn(type.h2, "mt-4 text-ink")}>
              {securite.concreteTitle}
            </h2>
          </div>

          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {securite.concrete.map((item, index) => {
              const Icon = concreteIcons[index] ?? ShieldCheck;
              return (
                <li key={item}>
                  <article className="group flex h-full gap-4 border border-ink/12 bg-paper-2/50 p-5 transition-[border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-plan/40 sm:p-6">
                    <span className="grid h-11 w-11 shrink-0 place-items-center border border-copper/40 text-copper transition-colors duration-300 group-hover:border-copper group-hover:bg-copper group-hover:text-paper">
                      <Icon className="h-5 w-5" strokeWidth={1.6} aria-hidden />
                    </span>
                    <div>
                      <p className={cn(type.h3, "text-ink")}>
                        {item}
                      </p>
                    </div>
                  </article>
                </li>
              );
            })}
          </ul>
        </Container>
      </section>

      <SecuriteStack />
      <SecuriteCta />
    </>
  );
}
