import { Container } from "@/components/ui/Container";
import { pearsonVue as content } from "@/data/pearson-vue";
import { type } from "@/lib/typography";
import { cn } from "@/lib/utils";

export function PearsonVueElearning() {
  const { elearning } = content;

  return (
    <section
      id={elearning.id}
      className="relative isolate scroll-mt-28 overflow-hidden border-b border-ink/10 bg-paper py-14 sm:py-16 lg:py-20"
    >
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
        <div className="relative border border-ink/12 bg-paper-2/40 px-6 py-8 sm:px-10 sm:py-10 lg:px-12">
          <span
            className="pointer-events-none absolute left-0 top-0 h-5 w-5 border-l-2 border-t-2 border-copper"
            aria-hidden
          />
          <span
            className="pointer-events-none absolute bottom-0 right-0 h-5 w-5 border-b-2 border-r-2 border-plan"
            aria-hidden
          />
          <p className={cn(type.label, "text-copper")}>{elearning.label}</p>
          <h2 className={cn(type.h2, "mt-3 max-w-2xl text-ink")}>
            {elearning.title}
          </h2>
          <p className={cn(type.lead, "mt-5 max-w-3xl text-ink/80")}>
            {elearning.body}
          </p>
        </div>
      </Container>
    </section>
  );
}
