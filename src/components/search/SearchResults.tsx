import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Search } from "lucide-react";
import {
  contentTypeLabel,
  type SearchHit,
  type SearchResponse,
} from "@/components/search/client-types";
import { SiteSearch } from "@/components/search/SiteSearch";
import { SectionLabel } from "@/components/sections/SectionLabel";

function ResultCard({ item }: { item: SearchHit }) {
  const external = item.url.startsWith("http");
  const href = item.url;

  return (
    <article className="group flex flex-col border border-ink/10 bg-paper transition-colors hover:border-plan/40">
      <div className="relative aspect-[16/10] overflow-hidden border-b border-ink/10 bg-paper-2">
        {item.image ? (
          <Image
            src={item.image}
            alt=""
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        ) : (
          <div className="grid h-full place-items-center">
            <Search className="h-8 w-8 text-plan/40" aria-hidden />
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-plan">
          {contentTypeLabel(item.type)} · {item.category}
        </p>
        <h2 className="text-xl font-medium text-ink">{item.title}</h2>
        <p className="line-clamp-3 text-sm leading-relaxed text-mute">
          {item.description}
        </p>
        {item.matchedKeywords.length > 0 ? (
          <ul className="flex flex-wrap gap-2">
            {item.matchedKeywords.map((keyword) => (
              <li
                key={keyword}
                className="border border-ink/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-mute"
              >
                {keyword}
              </li>
            ))}
          </ul>
        ) : null}
        <div className="mt-auto pt-2">
          {external ? (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-copper hover:underline"
            >
              Ouvrir
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </a>
          ) : (
            <Link
              href={href}
              className="inline-flex items-center gap-2 text-sm font-medium text-copper hover:underline"
            >
              Accéder
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}

export function SearchResults({
  data,
  query,
}: {
  data: SearchResponse;
  query: string;
}) {
  return (
    <div className="mx-auto max-w-[1200px] px-5 py-12 sm:px-8 sm:py-16">
      <SectionLabel>Recherche globale</SectionLabel>
      <h1 className="mt-4 max-w-3xl text-3xl font-medium tracking-tight text-ink sm:text-4xl">
        Résultats de recherche
      </h1>
      <div className="mt-8">
        <SiteSearch variant="page" initialQuery={query} autoFocus={!query} />
      </div>

      {query.trim().length < 2 ? (
        <p className="mt-10 text-mute">
          Saisissez au moins 2 caractères pour rechercher sur INFOLOG.
        </p>
      ) : (
        <>
          <p className="mt-8 font-mono text-xs uppercase tracking-[0.18em] text-mute">
            Recherche : « {data.query} » —{" "}
            <span className="text-ink">
              {data.total} résultat{data.total === 1 ? "" : "s"} trouvé
              {data.total === 1 ? "" : "s"}
            </span>
          </p>

          {data.total === 0 ? (
            <div className="mt-10 border border-ink/10 bg-paper-2 p-8">
              <p className="text-lg text-ink">
                Aucun résultat trouvé pour votre recherche.
              </p>
              <p className="mt-3 text-sm text-mute">
                Essayez avec un autre mot-clé ou consultez nos principales
                catégories.
              </p>
              {data.didYouMean ? (
                <p className="mt-5 text-sm text-ink">
                  Voulez-vous dire :{" "}
                  <Link
                    href={`/recherche?q=${encodeURIComponent(data.didYouMean)}`}
                    className="font-medium text-copper underline-offset-2 hover:underline"
                  >
                    {data.didYouMean}
                  </Link>{" "}
                  ?
                </p>
              ) : null}
              <ul className="mt-6 flex flex-wrap gap-3">
                {[
                  { href: "/btp", label: "BTP" },
                  { href: "/telephonie", label: "Téléphonie" },
                  {
                    href: "/qui-sommes-nous/national-cash",
                    label: "National Cash",
                  },
                  { href: "/contact", label: "Contact" },
                ].map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="inline-flex border border-ink/15 px-3 py-2 text-sm text-ink hover:border-plan hover:text-plan"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div className="mt-10 space-y-12">
              {data.groups.map((group) => (
                <section key={group.type} aria-labelledby={`group-${group.type}`}>
                  <h2
                    id={`group-${group.type}`}
                    className="border-b border-ink/10 pb-3 font-mono text-xs uppercase tracking-[0.22em] text-plan"
                  >
                    {group.label}
                  </h2>
                  <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {group.items.map((item) => (
                      <ResultCard key={item.id} item={item} />
                    ))}
                  </div>
                </section>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}
