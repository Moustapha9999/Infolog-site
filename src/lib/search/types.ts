export type SearchContentType =
  | "page"
  | "service"
  | "product"
  | "pole"
  | "action"
  | "section";

export type SearchDocument = {
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
};

export type SearchHit = SearchDocument & {
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
