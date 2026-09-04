import Image from "next/image";
import {
  BarChart3,
  Cable,
  FileStack,
  Handshake,
  Layers,
  Network,
  Package,
  Phone,
  Server,
  ShieldCheck,
  Users,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { aboutServices } from "@/data/site";
import { type } from "@/lib/typography";
import { cn } from "@/lib/utils";

const serviceIcons: LucideIcon[] = [
  Network,
  Package,
  Server,
  ShieldCheck,
  Cable,
  Phone,
  BarChart3,
  Users,
  FileStack,
  Workflow,
  Layers,
  Handshake,
];

export function AboutServices() {
  return (
    <section className="border-t border-ink/10 bg-paper-2/40 pb-20 pt-16 sm:pb-24 sm:pt-20">
      <Container>
        <div className="relative">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:items-center lg:gap-12">
            <div className="max-w-md">
              <h2 className={cn(type.h2, "text-ink")}>
                Nos services
              </h2>
              <p className={cn(type.lead, "mt-4 text-mute")}>
                Nous offrons un large éventail de services
              </p>
            </div>

            <div className="relative -mx-4 sm:mx-0">
              <div className="relative aspect-[16/10] overflow-hidden border border-ink/10 sm:aspect-[2/1] lg:aspect-[16/8] lg:min-h-[280px]">
                <Image
                  src="/brand/about-services.jpg"
                  alt="Équipe INFOLOG en session de travail technique"
                  fill
                  quality={90}
                  sizes="(max-width: 1024px) 100vw, 70vw"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>

          <div className="relative z-10 -mt-8 sm:-mt-12 lg:-mt-16">
            <div className="frame-corners relative border border-ink/15 bg-paper p-4 shadow-[0_18px_40px_rgba(16,24,32,0.08)] sm:p-5 lg:p-6">
              <span className="frame-corners-bl" aria-hidden />
              <span className="frame-corners-br" aria-hidden />
              <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
                {aboutServices.map((service, index) => {
                  const Icon = serviceIcons[index] ?? Network;
                  return (
                    <li key={service}>
                      <article className="group flex h-full flex-col border border-ink/12 bg-paper-2/40 px-4 py-5 transition-[transform,border-color,background-color] duration-300 ease-out hover:-translate-y-0.5 hover:border-plan/40 hover:bg-paper sm:px-5 sm:py-6">
                        <span className="grid h-11 w-11 shrink-0 place-items-center border border-plan/30 text-plan transition-colors duration-300 group-hover:border-copper/50 group-hover:bg-copper group-hover:text-paper">
                          <Icon
                            className="h-5 w-5"
                            strokeWidth={1.6}
                            aria-hidden
                          />
                        </span>
                        <h3 className={cn(type.h3, "mt-4 text-plan")}>
                          {service}
                        </h3>
                        <span
                          className="mt-4 h-px w-8 bg-ink/15 transition-all duration-300 group-hover:w-12 group-hover:bg-copper"
                          aria-hidden
                        />
                      </article>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
