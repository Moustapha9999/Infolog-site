import type { Metadata } from "next";
import { SearchResults } from "@/components/search/SearchResults";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { getLocale } from "@/lib/i18n/get-locale";
import { buildLocaleMetadata } from "@/lib/i18n/seo";
import { searchSite } from "@/lib/search";

type Props = {
  searchParams: Promise<{ q?: string }>;
};

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const dictionary = getDictionary(locale);
  return buildLocaleMetadata({
    locale,
    title: dictionary.common.search,
    description: dictionary.searchResults.title,
    path: "/recherche",
  });
}

export default async function RecherchePage({ searchParams }: Props) {
  const { q = "" } = await searchParams;
  const query = String(q).slice(0, 120);
  const locale = await getLocale();
  const data = await searchSite(query, { limit: 40, locale });

  return <SearchResults data={data} query={query} />;
}
