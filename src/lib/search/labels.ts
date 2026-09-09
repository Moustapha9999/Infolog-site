import type { SearchContentType } from "./types";

export const SEARCH_TYPE_LABELS: Record<SearchContentType, string> = {
  service: "Services",
  product: "Produits",
  page: "Pages",
  pole: "Pôles",
  section: "Sections",
  action: "Actions",
};

export function contentTypeLabel(type: SearchContentType) {
  return SEARCH_TYPE_LABELS[type];
}
