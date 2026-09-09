/** Normalisation FR : accents, casse, ponctuation. */
export function normalizeSearchText(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/['’]/g, " ")
    .replace(/[^a-z0-9\s+]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function tokenize(value: string) {
  return normalizeSearchText(value)
    .split(" ")
    .filter((token) => token.length > 1);
}

/** Distance de Levenshtein bornée (fautes légères). */
export function levenshtein(a: string, b: string) {
  if (a === b) return 0;
  if (!a.length) return b.length;
  if (!b.length) return a.length;
  const row = Array.from({ length: b.length + 1 }, (_, i) => i);
  for (let i = 1; i <= a.length; i += 1) {
    let prev = i - 1;
    row[0] = i;
    for (let j = 1; j <= b.length; j += 1) {
      const current = row[j];
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      row[j] = Math.min(row[j] + 1, row[j - 1] + 1, prev + cost);
      prev = current;
    }
  }
  return row[b.length];
}

export function isFuzzyMatch(queryToken: string, candidate: string) {
  if (!queryToken || !candidate) return false;
  if (candidate.includes(queryToken) || queryToken.includes(candidate)) {
    return true;
  }
  const maxDist =
    queryToken.length <= 4 ? 1 : queryToken.length <= 7 ? 2 : 3;
  return levenshtein(queryToken, candidate) <= maxDist;
}
