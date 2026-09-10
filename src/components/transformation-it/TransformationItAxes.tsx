import { Container } from "@/components/ui/Container";
import { getTransformationIt } from "@/data/transformation-it";
import { getLocale } from "@/lib/i18n/get-locale";
import { type } from "@/lib/typography";
import { cn } from "@/lib/utils";

export async function TransformationItAxes() {
  const locale = await getLocale();
  const content = getTransformationIt(locale);
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
            <p className={cn(type.label, "text-copper")}>{content.axesLabel}</p>
            <h2 className={cn(type.h2, "mt-3 text-ink")}>{content.axesTitle}</h2>
          </div>
          <p className={cn(type.lead, "text-ink/75 lg:pb-1")}>
            {content.axesLead}
          </p>
        </div>

        <ul className="mt-10 grid gap-px border border-ink/12 bg-ink/12 sm:grid-cols-2 lg:grid-cols-3">
          {content.axes.map((axis) => (
            <li
              key={axis.title}
              className="bg-paper p-5 transition-colors duration-300 hover:bg-paper-2/80 sm:p-6"
            >
              <span className="mb-3 block h-1 w-8 bg-copper" aria-hidden />
              <h3 className={cn(type.h3, "text-ink")}>{axis.title}</h3>
              <p className={cn(type.body, "mt-2 text-ink/75")}>{axis.body}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
