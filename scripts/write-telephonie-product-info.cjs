const fs = require("fs");
const path = require("path");

const root = path.join(
  __dirname,
  "..",
  "public",
  "brand",
  "telephonie",
  "products",
);

const infos = {
  "galaxy-z-fold8-ultra": {
    name: "Galaxy Z Fold8 Ultra",
    category: "foldable",
    tagline: "Pliable Ultra",
    variants: ["12 Go / 256 Go", "12 Go / 512 Go"],
    highlights: [
      "Smartphone pliable haut de gamme de la gamme Galaxy Z",
      "Disponible chez INFOLOG en 256 Go et 512 Go",
    ],
    description:
      "Le Galaxy Z Fold8 Ultra est le pliable haut de gamme de la sélection INFOLOG. Disponible en 12 Go de RAM avec 256 Go ou 512 Go de stockage, il s'adresse aux utilisateurs qui recherchent un écran large et une expérience Galaxy avancée.",
    specs: [
      { label: "RAM", value: "12 Go" },
      { label: "Stockage", value: "256 Go ou 512 Go" },
      { label: "Réseau", value: "5G" },
    ],
    sourceNote: "Stock INFOLOG",
  },
  "galaxy-a37": {
    name: "Galaxy A37 5G",
    category: "a-series",
    tagline: "8 Go · 256 Go",
    variants: ["8 Go / 256 Go"],
    highlights: [
      "Processeur Exynos 1480 octa-core jusqu'à 2,75 GHz",
      "Écran immersif 6,7 pouces",
      "Double appareil photo arrière 50 MP + 8 MP",
      "Caméra frontale 12 MP",
      "Batterie 5000 mAh",
    ],
    description:
      "Le Galaxy A37 5G combine performance et autonomie dans un format accessible. Avec 8 Go de RAM, 256 Go de stockage, un écran 6,7 pouces et un module photo polyvalent, c'est un choix solide pour un usage quotidien exigeant.",
    specs: [
      { label: "RAM", value: "8 Go" },
      { label: "Stockage", value: "256 Go" },
      { label: "Réseau", value: "5G" },
      { label: "Écran", value: '6,7"' },
      { label: "Processeur", value: "Exynos 1480 · Octa-core · 2,75 GHz" },
      { label: "Caméra", value: "50 MP + 8 MP · Frontale 12 MP" },
      { label: "Batterie", value: "5000 mAh" },
    ],
    sourceNote: "Stock INFOLOG",
  },
  "galaxy-a27": {
    name: "Galaxy A27 5G",
    category: "a-series",
    tagline: "Milieu de gamme 5G",
    variants: ["6 Go / 128 Go", "8 Go / 256 Go"],
    highlights: [
      "Smartphone Galaxy A 5G disponible chez INFOLOG",
      "Deux configurations mémoire selon votre usage",
    ],
    description:
      "Le Galaxy A27 5G est proposé chez INFOLOG en deux configurations : 6 Go / 128 Go et 8 Go / 256 Go. Un modèle milieu de gamme adapté au quotidien, avec connectivité 5G.",
    specs: [
      { label: "Variantes", value: "6 Go / 128 Go · 8 Go / 256 Go" },
      { label: "Réseau", value: "5G" },
    ],
    colors: ["Bleu"],
    sourceNote: "Stock INFOLOG",
  },
  "galaxy-a17": {
    name: "Galaxy A17",
    category: "a-series",
    tagline: "4 Go · 128 Go",
    variants: ["4 Go / 128 Go"],
    highlights: [
      "Écran Super AMOLED de 6,7 pouces à 90 Hz",
      "Design affiné avec lecteur d'empreinte intégré",
      "Triple caméra : 50 MP (OIS) + 5 MP + 2 MP",
      "Jusqu'à 6 générations de mises à jour OS",
    ],
    description:
      "Le Galaxy A17 mise sur un écran Super AMOLED 6,7 pouces fluide (90 Hz), une triple caméra avec stabilisation optique et un design fin. Configuration INFOLOG : 4 Go / 128 Go.",
    specs: [
      { label: "RAM", value: "4 Go" },
      { label: "Stockage", value: "128 Go" },
      { label: "Écran", value: '6,7" Super AMOLED, 90 Hz' },
      { label: "Caméra", value: "50 MP + 5 MP + 2 MP · Frontale 13 MP" },
    ],
    sourceNote: "Stock INFOLOG",
  },
  "galaxy-a07": {
    name: "Galaxy A07",
    category: "a-series",
    tagline: "4 Go · 128 Go",
    variants: ["4 Go / 128 Go"],
    highlights: ["Smartphone Galaxy A disponible chez INFOLOG"],
    description:
      "Le Galaxy A07 est un smartphone Galaxy A accessible, disponible chez INFOLOG en configuration 4 Go de RAM et 128 Go de stockage.",
    specs: [
      { label: "RAM", value: "4 Go" },
      { label: "Stockage", value: "128 Go" },
    ],
    sourceNote: "Stock INFOLOG",
  },
  "galaxy-a06": {
    name: "Galaxy A06",
    category: "a-series",
    tagline: "Entrée de gamme",
    variants: ["4 Go / 64 Go", "4 Go / 128 Go"],
    highlights: [
      "Smartphone Galaxy A d'entrée de gamme",
      "Deux capacités de stockage disponibles chez INFOLOG",
    ],
    description:
      "Le Galaxy A06 ouvre la gamme Galaxy A chez INFOLOG. Deux capacités de stockage sont proposées : 64 Go et 128 Go, avec 4 Go de RAM.",
    specs: [
      { label: "RAM", value: "4 Go" },
      { label: "Stockage", value: "64 Go ou 128 Go" },
    ],
    sourceNote: "Stock INFOLOG",
  },
  "galaxy-tab-a11": {
    name: "Galaxy Tab A11",
    category: "tablet",
    tagline: "Tablette Galaxy",
    variants: ["4 Go / 64 Go", "8 Go / 128 Go"],
    highlights: [
      "Tablette Samsung Galaxy Tab A11",
      "Deux configurations disponibles chez INFOLOG",
    ],
    description:
      "La Galaxy Tab A11 est la tablette de la sélection INFOLOG, disponible en 4 Go / 64 Go et 8 Go / 128 Go pour le travail, les études ou le divertissement.",
    specs: [
      { label: "Variantes", value: "4 Go / 64 Go · 8 Go / 128 Go" },
      { label: "Type", value: "Tablette" },
    ],
    sourceNote: "Stock INFOLOG",
  },
  "galaxy-s24-ultra": {
    name: "Galaxy S24 Ultra",
    category: "flagship",
    tagline: "Galaxy AI",
    variants: ["Flagship"],
    highlights: [
      "Flagship Galaxy avec Galaxy AI, écran et photo haut de gamme",
    ],
    description:
      "Le Galaxy S24 Ultra incarne le haut de gamme Galaxy avec Galaxy AI. Fiche média disponible chez INFOLOG — confirmez la disponibilité stock auprès de nos équipes.",
    specs: [{ label: "Série", value: "Galaxy S Ultra" }],
    sourceNote: "Médias fournis — confirmer disponibilité stock",
  },
  "galaxy-s23-ultra": {
    name: "Galaxy S23 Ultra",
    category: "flagship",
    tagline: "Photo · S Pen",
    variants: ["Flagship"],
    highlights: ["Flagship Galaxy avec S Pen et système photo avancé"],
    description:
      "Le Galaxy S23 Ultra reste une référence photo et productivité grâce au S Pen. Médias fournis — confirmez la disponibilité auprès d'INFOLOG.",
    specs: [{ label: "Série", value: "Galaxy S Ultra" }],
    sourceNote: "Médias fournis — confirmer disponibilité stock",
  },
};

for (const [id, info] of Object.entries(infos)) {
  const dir = path.join(root, id);
  if (!fs.existsSync(dir)) continue;
  fs.writeFileSync(path.join(dir, "info.json"), `${JSON.stringify(info, null, 2)}\n`);
  fs.writeFileSync(path.join(dir, "description.md"), `${info.description}\n`);
  console.log("wrote", id);
}
