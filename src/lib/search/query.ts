import "server-only";

import { SEARCH_TYPE_LABELS } from "./labels";
import { buildSearchIndex } from "./build-index";
import {
  isFuzzyMatch,
  normalizeSearchText,
  tokenize,
} from "./normalize";
import { expandQueryTerms, suggestCorrection } from "./synonyms";
import type {
  SearchContentType,
  SearchDocument,
  SearchGroup,
  SearchHit,
  SearchResponse,
} from "./types";

const TYPE_ORDER: SearchContentType[] = [
  "service",
  "product",
  "page",
  "section",
  "pole",
  "action",
];

function scoreDocument(doc: SearchDocument, query: string, tokens: string[]) {
  const title = normalizeSearchText(doc.title);
  const description = normalizeSearchText(doc.description);
  const category = normalizeSearchText(doc.category);
  const keywords = doc.keywords.map((item) => normalizeSearchText(item));
  const haystack = [title, description, category, ...keywords].join(" ");
  const expanded = expandQueryTerms(tokens);
  const matchedKeywords = new Set<string>();

  let score = doc.priority * 0.15;

  const normalizedQuery = normalizeSearchText(query);
  if (title === normalizedQuery) score += 120;
  else if (title.startsWith(normalizedQuery)) score += 90;
  else if (title.includes(normalizedQuery)) score += 70;
  else if (normalizedQuery.includes(title) && title.length > 3) score += 50;

  for (const token of expanded) {
    if (!token) continue;
    if (title === token) {
      score += 40;
      matchedKeywords.add(token);
    } else if (title.includes(token)) {
      score += 28;
      matchedKeywords.add(token);
    } else if (keywords.some((keyword) => keyword === token || keyword.includes(token))) {
      score += 22;
      matchedKeywords.add(token);
    } else if (category.includes(token)) {
      score += 14;
      matchedKeywords.add(token);
    } else if (description.includes(token)) {
      score += 10;
      matchedKeywords.add(token);
    } else if (
      title.split(" ").some((part) => isFuzzyMatch(token, part)) ||
      keywords.some((keyword) =>
        keyword.split(" ").some((part) => isFuzzyMatch(token, part)),
      )
    ) {
      score += 8;
      matchedKeywords.add(token);
    } else if (haystack.includes(token)) {
      score += 4;
      matchedKeywords.add(token);
    }
  }

  const coverage =
    tokens.length === 0
      ? 0
      : tokens.filter((token) =>
          haystack.includes(token) ||
          expandQueryTerms([token]).some((term) => haystack.includes(term)),
        ).length / tokens.length;
  score += coverage * 35;

  return {
    score,
    matchedKeywords: Array.from(matchedKeywords).slice(0, 6),
  };
}

function groupHits(results: SearchHit[]): SearchGroup[] {
  return TYPE_ORDER.map((type) => ({
    type,
    label: SEARCH_TYPE_LABELS[type],
    items: results.filter((item) => item.type === type),
  })).filter((group) => group.items.length > 0);
}

export async function searchSite(
  rawQuery: string,
  options?: { limit?: number; suggestionsOnly?: boolean },
): Promise<SearchResponse> {
  const query = rawQuery.trim();
  const limit = options?.limit ?? (options?.suggestionsOnly ? 8 : 40);
  const empty: SearchResponse = {
    query,
    total: 0,
    results: [],
    groups: [],
    suggestions: [],
    didYouMean: null,
  };
  if (query.length < 2) return empty;

  const index = await buildSearchIndex();
  const tokens = tokenize(query);
  const scored: SearchHit[] = [];

  for (const doc of index) {
    const { score, matchedKeywords } = scoreDocument(doc, query, tokens);
    if (score < 18) continue;
    scored.push({ ...doc, score, matchedKeywords });
  }

  scored.sort((a, b) => b.score - a.score || b.priority - a.priority);
  const results = scored.slice(0, limit);
  const didYouMean =
    results.length === 0 ? suggestCorrection(query) : null;

  return {
    query,
    total: scored.length,
    results,
    groups: groupHits(results),
    suggestions: results.slice(0, 8),
    didYouMean,
  };
}

export { contentTypeLabel } from "./labels";
