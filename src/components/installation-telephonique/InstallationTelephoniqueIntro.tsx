import { Container } from "@/components/ui/Container";
import { getInstallationTelephonique } from "@/data/installation-telephonique";
import { getLocale } from "@/lib/i18n/get-locale";
import { type } from "@/lib/typography";
import { cn } from "@/lib/utils";

export async function InstallationTelephoniqueIntro() {
  const locale = await getLocale();
  const content = getInstallationTelephonique(locale);
  return (
    <section className="relative isolate overflow-hidden border-b border-ink/10 bg-paper py-14 sm:py-16 lg:py-20">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.3]"
        aria-hidden
        style={{
          backgroundImage:
            "linear-gradient(rgba(16,24,32,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(16,24,32,0.06) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      <Container className="relative max-w-7xl">
        <p className={cn(type.label, "text-copper")}>{content.introLabel}</p>
        <h2 className={cn(type.h2, "mt-3 max-w-3xl text-ink")}>
          {content.introTitle}
        </h2>
        <div className="mt-6 max-w-4xl space-y-5">
          {content.intro.map((block, index) =>
            "highlight" in block ? (
              <p key={index} className={cn(type.lead, "text-ink/80")}>
                {block.before}{" "}
                <span className="font-medium text-plan">{block.highlight}</span>{" "}
                {block.after}
              </p>
            ) : (
              <p key={index} className={cn(type.lead, "text-ink/80")}>
                {block.text}
              </p>
            ),
          )}
        </div>

        <p className={cn(type.label, "mt-12 text-copper")}>
          {content.brandsLabel}
        </p>
        <ul className="mt-4 flex flex-wrap gap-2.5">
          {content.brands.map((brand) => (
            <li
              key={brand}
              className="border border-ink/15 bg-paper-2/60 px-4 py-2.5 font-mono text-xs tracking-wide text-plan"
            >
              {brand}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
