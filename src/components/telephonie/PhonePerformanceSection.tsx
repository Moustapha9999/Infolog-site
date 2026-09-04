type Stat = {
  label: string;
  value: string;
  unit: string;
  description: string;
};

type PhonePerformanceSectionProps = {
  label?: string;
  title: string;
  body: string;
  footnote?: string;
  stats: Stat[];
};

export function PhonePerformanceSection({
  label = "PERFORMANCE",
  title,
  body,
  footnote,
  stats,
}: PhonePerformanceSectionProps) {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-[#080810] py-16 sm:py-20 lg:py-24">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_55%,rgba(60,25,100,0.40)_0%,transparent_70%)]"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6">
        <p className="text-[12px] font-semibold uppercase tracking-[0.30em] text-[#4A9EFF]">
          {label}
        </p>

        <h2 className="mx-auto mt-5 max-w-3xl text-[1.85rem] font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
          {title}
        </h2>

        <p
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/65 sm:text-lg"
          dangerouslySetInnerHTML={{ __html: body }}
        />

        {footnote ? (
          <p className="mt-3 text-[11px] text-white/35">{footnote}</p>
        ) : null}
      </div>

      <div className="relative z-10 mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-y-10 px-4 sm:mt-16 sm:grid-cols-3 sm:gap-x-8 sm:px-6">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="font-mono text-[13px] font-semibold uppercase tracking-[0.20em] text-white/80">
              {stat.label}
            </p>
            <p className="mt-3 text-[3.5rem] font-bold leading-none tracking-tight text-[#A78BFA] sm:text-[4rem]">
              {stat.value}
              <span className="text-[2.5rem] sm:text-[2.75rem]">{stat.unit}</span>
            </p>
            <p className="mt-2 text-sm text-white/55">{stat.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
