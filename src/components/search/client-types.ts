export type SearchContentType =
  | "page"
  | "service"
  | "product"
  | "pole"
  | "action"
  | "section";

export type SearchHit = {
  id: string;
  title: string;
  description: string;
  category: string;
  keywords: string[];
  type: SearchContentType;
  url: string;
  section?: string;
  image?: string | null;
  priority: number;
  score: number;
  matchedKeywords: string[];
};

export type SearchGroup = {
  type: SearchContentType;
  label: string;
  items: SearchHit[];
};

export type SearchResponse = {
  query: string;
  total: number;
  results: SearchHit[];
  groups: SearchGroup[];
  suggestions: SearchHit[];
  didYouMean: string | null;
};

const TYPE_LABELS: Record<SearchContentType, string> = {
  service: "Services",
  product: "Produits",
  page: "Pages",
  pole: "Pôles",
  section: "Sections",
  action: "Actions",
};

export function contentTypeLabel(type: SearchContentType) {
  return TYPE_LABELS[type];
}
