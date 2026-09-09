import type { Metadata } from "next";
import { SearchResults } from "@/components/search/SearchResults";
import { searchSite } from "@/lib/search";

type Props = {
  searchParams: Promise<{ q?: string }>;
};

export const metadata: Metadata = {
  title: "Recherche",
  description:
    "Recherche globale INFOLOG — services, produits, National Cash, BTP, téléphonie et plus.",
};

export default async function RecherchePage({ searchParams }: Props) {
  const { q = "" } = await searchParams;
  const query = String(q).slice(0, 120);
  const data = await searchSite(query, { limit: 40 });

  return <SearchResults data={data} query={query} />;
}
