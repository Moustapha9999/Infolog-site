export const btp = {
  title: "BTP",
  description:
    "Entreprise générale de bâtiment : gros œuvre, second œuvre, génie civil, neuf, réhabilitation et maintenance industrielle.",
  intro:
    "INFOLOG BTP, est une ENTREPRISE GÉNÉRALE DE BÂTIMENT qui exerce divers travaux de construction en principaux corps de métiers : le gros œuvre, le second œuvre & Génie-Civil. Elle réalise aussi bien des travaux neufs, que des travaux de réhabilitation ainsi que des travaux de maintenance industrielle. Elle dispose également d'un bureau d'études dédié à la réalisation de plans d'exécution et d'études avant-projet.",
  savoirFaire: {
    title: "Notre savoir-faire",
    items: [
      {
        title: "Le génie civil",
        image: "/brand/btp-genie-civil.png",
        imageAlt: "Engins de chantier — génie civil",
        points: [
          "Fondations",
          "Dallage",
          "Structure béton armé",
          "Traitement des bétons",
        ],
      },
      {
        title: "Le gros œuvre",
        image: "/brand/btp-gros-oeuvre.jpg",
        imageAlt: "Échafaudage et façade — gros œuvre",
        points: [
          "La maçonnerie : parpaing et brique",
          "Ravalement de façade",
          "La projection d'enduit",
        ],
      },
      {
        title: "Le second œuvre",
        image: "/brand/btp-second-oeuvre.jpg",
        imageAlt: "Travaux de finition — second œuvre",
        points: [
          "Carrelage",
          "Plâtrerie isolation",
          "Menuiserie extérieure",
          "Menuiserie intérieure",
        ],
      },
    ],
  },
  atouts: {
    title: "Atouts",
    items: [
      {
        title: "Gestion de service basé ITIL",
        points: [
          "Un bureau d'étude interne",
          "Un conducteur de travaux",
          "Un responsable HSE",
          "Un chef de chantier et son équipe",
        ],
      },
      {
        title: "Du personnel très qualifié",
      },
      {
        title: "De nombreuses références (type de clientèle variée)",
      },
      {
        title: "Respect des délais",
      },
      {
        title: "Son propre parc matériel",
        description:
          "Camion poids lourd et porte char, échafaudage, bétonnière … pour garantir la rapidité des interventions",
      },
    ],
  },
  gallery: {
    title: "Notre savoir-faire",
    images: [
      {
        src: "/brand/btp-gallery-1.png",
        alt: "Chantier d'immeubles avec grues — réalisations BTP INFOLOG",
      },
      {
        src: "/brand/btp-gallery-2.png",
        alt: "Immeuble résidentiel livré — réalisations BTP INFOLOG",
      },
      {
        src: "/brand/btp-gallery-3.jpg",
        alt: "Structure béton en cours — réalisations BTP INFOLOG",
      },
      {
        src: "/brand/btp-gallery-4.jpg",
        alt: "Construction d'immeuble avec grue — réalisations BTP INFOLOG",
      },
    ],
  },
} as const;
