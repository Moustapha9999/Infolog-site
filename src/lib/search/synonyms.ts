import { normalizeSearchText } from "./normalize";

/** Synonymes / variantes multilingues pour enrichir la requête (V1). */
const SYNONYM_GROUPS: string[][] = [
  [
    "telephonie",
    "telephone",
    "telephones",
    "phone",
    "phones",
    "smartphone",
    "smartphones",
    "mobile",
    "mobiles",
    "galaxy",
    "portable",
    "portables",
    "هاتف",
    "هواتف",
    "جوال",
  ],
  [
    "btp",
    "construction",
    "batiment",
    "chantier",
    "genie civil",
    "gros oeuvre",
    "maconnerie",
    "بناء",
    "اشغال",
  ],
  [
    "national cash",
    "nc",
    "caisse",
    "microfinance",
    "micro finance",
    "credit",
    "epargne",
    "ناشونال كاش",
  ],
  ["izi shop", "izicall", "izi", "credit telephone"],
  [
    "electromenager",
    "home appliances",
    "appliances",
    "samsung",
    "froid",
    "cuisson",
    "refrigerateur",
    "tv",
    "television",
    "lave linge",
    "imprimante",
    "اجهزة منزلية",
  ],
  [
    "informatique",
    "it",
    "digital",
    "systeme",
    "serveur",
    "datacenter",
    "data center",
    "reseau",
    "تكنولوجيا المعلومات",
  ],
  ["securite", "security", "firewall", "antivirus", "cyber", "امن"],
  ["erp", "progiciel", "sap", "logiciel", "logiciels", "software"],
  [
    "contact",
    "contacter",
    "joindre",
    "coordonnees",
    "telephone contact",
    "contact us",
    "اتصل",
  ],
  [
    "formation",
    "training",
    "pearson",
    "elearning",
    "e learning",
    "certification",
    "تكوين",
  ],
  [
    "monetique",
    "payment",
    "payments",
    "gab",
    "atm",
    "paiement",
    "carte bancaire",
    "دفع",
    "صراف",
  ],
  ["energie", "energy", "siemens", "mesure", "طاقة"],
  [
    "infogerance",
    "managed it",
    "assistance",
    "maintenance",
    "support",
    "ادارة الانظمة",
  ],
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
