import Link from "next/link";
import { getActiveBanners } from "@/lib/cms/banners";

export async function HomeBanners() {
  const banners = await getActiveBanners();
  if (banners.length === 0) return null;

  return (
    <section className="border-b border-ink/10 bg-paper-2">
      {banners.map((banner) => (
        <article
          key={banner.id}
          className="mx-auto flex w-full max-w-[1600px] flex-col gap-3 px-5 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8"
        >
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-plan">
              Actualité
            </p>
            <h2 className="mt-1 text-lg font-medium text-ink">{banner.title}</h2>
            {banner.subtitle ? (
              <p className="text-sm text-mute">{banner.subtitle}</p>
            ) : null}
          </div>
          {banner.button_href && banner.button_label ? (
            <Link
              href={banner.button_href}
              className="bg-copper px-4 py-2 text-sm text-paper"
            >
              {banner.button_label}
            </Link>
          ) : null}
        </article>
      ))}
    </section>
  );
}
