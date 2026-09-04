import type { PhoneInfoJson } from "./types";

/** Infos éditoriales — aussi copiées dans public/.../info.json pour édition facile. */
export const productInfos: Record<string, PhoneInfoJson> = {
  "galaxy-z-fold8-ultra": {
    name: "Galaxy Z Fold8 Ultra",
    category: "foldable",
    tagline: "Pliable Ultra",
    variants: ["12 Go / 128 Go", "12 Go / 256 Go", "12 Go / 512 Go"],
    ram: ["12 Go"],
    storage: ["128 Go", "256 Go", "512 Go"],
    highlights: [
      "Smartphone pliable haut de gamme de la gamme Galaxy Z",
      "Disponible chez INFOLOG en 128 Go, 256 Go et 512 Go de stockage, RAM 12 Go",
    ],
    description:
      "Faites confiance les yeux fermés au nouveau Galaxy Z Fold8 Ultra. Conçu pour être Ultra puissant et répondre à vos besoins, il vous permet de gérer plusieurs exigences à la fois sans perdre le rythme.",
    media: {
      title: "Dans les médias",
      quote:
        "Le Galaxy Z Fold8 Ultra place la barre plus haut en associant Now Nudge au multitâche.",
      source: "Tom's Guide, 07/2026",
    },
    specs: [
      { label: "RAM", value: "12 Go" },
      { label: "Stockage", value: "128 Go, 256 Go ou 512 Go" },
      { label: "Réseau", value: "5G" },
    ],
    colors: [
      { name: "Techno violet", hex: "#5B21B6" },
      { name: "Graphite", hex: "#4B5563" },
      { name: "Blanc", hex: "#E5E7EB" },
      { name: "Noir", hex: "#1F2937" },
    ],
    sourceNote: "Stock INFOLOG",
  },
  "galaxy-a37": {
    name: "Galaxy A37 5G",
    category: "a-series",
    tagline: "Nouveau",
    heroLayout: "banner",
    variants: ["8 Go / 256 Go"],
    ram: ["8 Go"],
    storage: ["256 Go"],
    highlights: [
      "Design fin et raffiné",
      "Intelligence artificielle intégrée pour sublimer vos photos",
      "Autonomie longue durée",
      "Jusqu’à 6 générations de mises à jour OS et 6 ans de mises à jour de sécurité",
      "Écran immersif 6,7 pouces · 5G",
    ],
    description:
      "Laissez-vous séduire par le nouveau Galaxy A37 5G au design fin et raffiné. Grâce à l’intelligence artificielle intégrée, sublimer vos photos devient un jeu d’enfant : effacez les éléments gênants ou suivez les suggestions de retouche en un geste. Soyez productif au quotidien grâce à une autonomie longue durée. Et parce que votre smartphone doit rester performant dans le temps, profitez de jusqu’à 6 générations de mises à jour du système d’exploitation et de 6 ans de mises à jour de sécurité. Un compagnon fiable, sécurisé et toujours à la pointe, pour longtemps.",
    storyHeading: "DÉCOUVREZ LE GALAXY A37 5G",
    storyCaptions: ["Design fin. Raffiné. Awesome."],
    colors: [
      { name: "Lavande", hex: "#C5B4E3" },
      { name: "Vert", hex: "#2F6F6A" },
      { name: "Blanc", hex: "#F3F4F6" },
    ],
    specs: [
      { label: "RAM", value: "8 Go" },
      { label: "Stockage", value: "256 Go" },
      { label: "Réseau", value: "5G" },
      { label: "Écran", value: "6,7\"" },
      { label: "Processeur", value: "Exynos 1480 · Octa-core · 2,75 GHz" },
      { label: "Caméra", value: "50 MP + 8 MP · Frontale 12 MP" },
      { label: "Batterie", value: "5000 mAh" },
      { label: "Mises à jour", value: "Jusqu’à 6 OS · 6 ans de sécurité" },
    ],
    sourceNote: "Stock INFOLOG",
  },
  "galaxy-a27": {
    name: "Galaxy A27 5G",
    category: "a-series",
    tagline: "Nouveau",
    heroLayout: "banner",
    heroTagline: "Un compagnon pour vibrer au quotidien",
    variants: ["6 Go / 128 Go", "8 Go / 256 Go"],
    ram: ["6 Go", "8 Go"],
    storage: ["128 Go", "256 Go"],
    highlights: [
      "Silhouette fine de 7,8 mm",
      "Grand écran 6,7 pouces aux bordures affinées",
      "Finition verre brillant et bloc photo aligné",
      "Coloris Noir, Bleu et Rose clair",
      "Connectivité 5G",
    ],
    description:
      "Donnez vie à votre style grâce au design du Galaxy A27 5G. Avec sa silhouette fine de seulement 7,8 mm, le Galaxy A27 5G est plus qu’agréable à prendre en main et facile à emporter partout. Son grand écran de 6,7 pouces aux bordures affinées offre une esthétique des plus élégantes, tandis que la finition en verre brillant et le bloc photo aligné à l’arrière apportent une touche de sophistication. Choisissez parmi les coloris Noir, Bleu et Rose clair pour affirmer votre style unique.",
    designIntro: {
      title: "Un design tout en finesse. Sublimé par la couleur",
      body: "Donnez vie à votre style grâce au design du Galaxy A27 5G. Avec sa silhouette fine de seulement 7,8 mm, le Galaxy A27 5G est plus qu’agréable à prendre en main et facile à emporter partout. Son grand écran de 6,7 pouces aux bordures affinées offre une esthétique des plus élégantes, tandis que la finition en verre brillant et le bloc photo aligné à l’arrière apportent une touche de sophistication. Choisissez parmi les coloris Noir, Bleu et Rose clair pour affirmer votre style unique.",
    },
    featureHighlight: {
      title: "Un smartphone qui vous accompagne longtemps",
      body: "Gardez l'esprit tranquille, le Galaxy A27 5G vous garantit 6 générations de mises à jour du système d'exploitation et 6 années de mises à jour de sécurité. Idéal pour découvrir sans cesse de nouvelles fonctionnalités.",
      image: "feature-updates.webp",
    },
    featureSuite: {
      lead: {
        title: "Votre vie privée et vos données, sécurisées par Samsung Knox",
        body: "Samsung Knox Vault certifié EAL5+ du Galaxy A27 5G sécurise vos informations personnelles, comme vos codes PIN, vos mots de passe et le modèle de déverrouillage. Envie de protéger vos souvenirs personnels ? Rangez vos photos confidentielles dans des albums privés sécurisés.",
        image: "feature-knox.webp",
      },
      cards: [
        {
          title: "Quick Share : Partagez en un clic",
          body: "Partagez vos fichiers sans effort entre tous vos appareils. Que ce soit vers un autre smartphone, une tablette, un appareil iOS ou même un PC, le partage est instantané.",
          image: "feature-quickshare.webp",
        },
        {
          title: "Changez de mobile, gardez le contenu",
          body: "Passez à votre nouveau Galaxy en un clin d’œil depuis votre ancien téléphone ou tablette, même depuis iOS. Grâce à Smart Switch sur le Galaxy A27 5G, transférez vos photos, vidéos, contacts et applications en quelques étapes simples pour ne rien perdre de ce qui compte pour vous.",
          image: "feature-smartswitch.webp",
        },
      ],
    },
    colors: [
      { name: "Bleu", hex: "#1B3A5C", image: "color-bleu.png" },
      { name: "Noir", hex: "#1F2937" },
      { name: "Rose clair", hex: "#E8C4D0" },
    ],
    specs: [
      { label: "RAM", value: "6 Go ou 8 Go" },
      { label: "Stockage", value: "128 Go ou 256 Go" },
      { label: "Réseau", value: "5G" },
      { label: "Écran", value: "6,7\"" },
      { label: "Épaisseur", value: "7,8 mm" },
      { label: "Coloris", value: "Noir · Bleu · Rose clair" },
    ],
    sourceNote: "Stock INFOLOG",
  },
  "galaxy-a17": {
    name: "Galaxy A17",
    category: "a-series",
    tagline: "Super AMOLED · 90 Hz",
    heroLayout: "banner",
    heroTagline: "Fin. Élégant. Stylé.",
    variants: ["4 Go / 128 Go"],
    ram: ["4 Go"],
    storage: ["128 Go"],
    highlights: [
      "Écran Super AMOLED 6,7\" FHD+ à 90 Hz",
      "Triple caméra 50 MP + 5 MP + 2 MP avec stabilisation optique (OIS)",
      "Photos en basse lumière jusqu’à 2,5× plus lumineuses",
      "Profil affiné 7,5 mm · lecteur d’empreinte intégré",
      "IP54 et verre Corning® Gorilla® Glass Victus®+",
      "Jusqu’à 6 générations de mises à jour OS et 6 ans de sécurité",
      "Gemini Live et Entourer pour chercher",
      "Batterie 5000 mAh · microSD jusqu’à 2 To",
    ],
    description:
      "Le Galaxy A17 combine un design élégant et une finesse de 7,5 mm avec une triple caméra pour des photos vives et détaillées. Son écran Super AMOLED de 6,7 pouces et ses bordures fines garantissent une expérience visuelle immersive. Accédez instantanément à l’intelligence artificielle grâce au bouton latéral qui active l’assistant Gemini. La caméra, équipée de la stabilisation optique, assure des vidéos stables et des photos en faible luminosité jusqu’à 2,5 fois plus lumineuses que sur le modèle précédent.",
    keyPoints: {
      title:
        "Un écran Super AMOLED de 6,7 pouces pour un monde éclatant de couleurs",
      body: "Entrez dans une nouvelle dimension avec un écran de 6,7 pouces Super AMOLED de 90 Hz : fluidité, intensité, et une immersion visuelle au rendez-vous",
      heading: "Les points clés",
      slides: [
        {
          image: "image-2.webp",
          caption: "Discutez en direct avec Gemini Live",
        },
        {
          image: "image-3.webp",
          caption: "Fin. Élégant. Stylé.",
        },
        {
          image: "image-4.webp",
          caption:
            "Nuit et jour, capturez des images claires et lumineuses grâce à la stabilisation optique",
        },
        {
          image: "image-5.webp",
          caption:
            "Conçu pour durer avec 6 générations de mises à jour Android",
        },
      ],
    },
    colors: [
      { name: "Noir", hex: "#1F2937" },
      { name: "Gris", hex: "#6B7280" },
      { name: "Bleu clair", hex: "#93C5FD" },
    ],
    specs: [
      { label: "RAM", value: "4 Go" },
      {
        label: "Stockage",
        value: "128 Go (extensible microSD jusqu’à 2 To)",
      },
      { label: "Écran", value: "6,7\" Super AMOLED FHD+ · 90 Hz" },
      {
        label: "Caméra",
        value: "50 MP (OIS) + 5 MP + 2 MP · Frontale 13 MP",
      },
      { label: "Processeur", value: "Octa-core jusqu’à 2,2 GHz" },
      { label: "Batterie", value: "5000 mAh" },
      { label: "Résistance", value: "IP54 · Gorilla Glass Victus+" },
      { label: "Épaisseur", value: "7,5 mm" },
      { label: "Poids", value: "190 g" },
      { label: "Mises à jour", value: "Jusqu’à 6 OS · 6 ans de sécurité" },
      { label: "Coloris", value: "Noir · Gris · Bleu clair" },
      {
        label: "Connectivité",
        value: "4G · Dual SIM · USB-C · NFC · Bluetooth 5.3",
      },
    ],
    sourceNote: "Stock INFOLOG · Fiche Samsung FR",
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
