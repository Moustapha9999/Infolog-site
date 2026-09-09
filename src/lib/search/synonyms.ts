import { normalizeSearchText } from "./normalize";

/** Synonymes / variantes pour enrichir la requête (V1). */
const SYNONYM_GROUPS: string[][] = [
  ["telephonie", "telephone", "telephones", "smartphone", "smartphones", "mobile", "mobiles", "galaxy", "portable", "portables"],
  ["btp", "construction", "batiment", "chantier", "genie civil", "gros oeuvre", "maconnerie"],
  ["national cash", "nc", "caisse", "microfinance", "micro finance", "credit", "epargne"],
  ["izi shop", "izicall", "izi", "credit telephone"],
  ["electromenager", "samsung", "froid", "cuisson", "refrigerateur", "tv", "television", "lave linge", "imprimante"],
  ["informatique", "it", "digital", "systeme", "serveur", "datacenter", "data center", "reseau"],
  ["securite", "firewall", "antivirus", "cyber"],
  ["erp", "progiciel", "sap", "logiciel", "logiciels"],
  ["contact", "contacter", "joindre", "coordonnees", "telephone contact"],
  ["formation", "pearson", "elearning", "e learning", "certification"],
  ["monetique", "gab", "atm", "paiement", "carte bancaire"],
  ["energie", "siemens", "mesure"],
  ["infogerance", "assistance", "maintenance", "support"],
];

const synonymMap = new Map<string, string[]>();

for (const group of SYNONYM_GROUPS) {
  const normalized = group.map((item) => normalizeSearchText(item));
  for (const term of normalized) {
    synonymMap.set(
      term,
      Array.from(new Set([...normalized, ...term.split(" ")])),
    );
  }
}

export function expandQueryTerms(tokens: string[]) {
  const expanded = new Set<string>(tokens);
  for (const token of tokens) {
    const synonyms = synonymMap.get(token);
    if (synonyms) {
      for (const synonym of synonyms) expanded.add(synonym);
    }
    for (const [key, values] of synonymMap) {
      if (key.includes(token) || token.includes(key)) {
        for (const value of values) expanded.add(value);
      }
    }
  }
  return Array.from(expanded);
}

const CORRECTIONS: Array<{ wrong: string; right: string }> = [
  { wrong: "samsong", right: "samsung" },
  { wrong: "telephonie", right: "téléphonie" },
  { wrong: "electromenager", right: "électroménager" },
  { wrong: "infogerance", right: "infogérance" },
  { wrong: "monetique", right: "monétique" },
  { wrong: "natinal cash", right: "national cash" },
  { wrong: "nationnal cash", right: "national cash" },
];

export function suggestCorrection(query: string) {
  const normalized = normalizeSearchText(query);
  for (const item of CORRECTIONS) {
    if (normalized === normalizeSearchText(item.wrong)) return item.right;
  }
  return null;
}
