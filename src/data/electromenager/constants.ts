export type ElectromenagerFamily = {
  id: string;
  label: string;
  items: string[];
};

export const electromenager = {
  title: "Électroménager",
  description:
    "Fourniture et service de l'électroménager Samsung — professionnels et particuliers, avec INFOLOG.",
  intro:
    "Fort d'une solide expérience de plus de 15 ans auprès de son partenaire de confiance Samsung, Infolog a fini par s'imposer comme un acteur majeur dans la fourniture et le service de l'électroménager à travers son large réseau de distribution.\n\nAu-delà de son rôle premier de conseiller pour la mise en place et le choix technologique de solutions en adéquation avec les besoins en électroménager, les prestations de service d'Infolog s'adressent aussi bien aux professionnels (secteurs public & privé) qu'aux particuliers.",
  heroTitle: "Samsung · INFOLOG",
  heroLead:
    "Cuisson, froid et multimédia — équipements et accompagnement pour professionnels et particuliers.",
  familiesTitle: "Nos familles de produits",
  familiesLead:
    "Survolez ou sélectionnez une famille pour explorer l’offre disponible chez INFOLOG.",
  showcaseTitle: "Catalogue",
  showcaseLead:
    "Les fiches produits arriveront ici. En attendant, contactez-nous pour la disponibilité et un devis.",
  ctaTitle: "Besoin d'un conseil ou d'un devis ?",
  ctaLead:
    "Nos équipes vous orientent vers l'équipement adapté, avec installation et SAV local.",
  families: [
    {
      id: "cuisson",
      label: "Cuisson",
      items: [
        "Cuisinière",
        "Four micro-ondes",
        "Four traditionnel",
        "Four à vapeur",
        "Cuisinière à gaz",
        "Hotte aspirante",
        "Plaque de cuisson",
        "Électrique classique",
        "Vitrocéramique",
        "À induction",
      ],
    },
    {
      id: "froid",
      label: "Froid",
      items: [
        "Froid commercial & froid industriel",
        "Conditionnement d'air",
        "Pompes à chaleur",
        "Applications thermodynamiques",
        "Congélateur",
        "Réfrigérateur",
        "Climatiseur mobile et monobloc",
      ],
    },
    {
      id: "multimedia",
      label: "MultiMedia",
      items: [
        "Téléviseur",
        "Appareil photo numérique",
        "Lecteur-enregistreur",
        "Lecteur DVD",
        "Lecteur DVD portable",
        "Lecteur Blu-ray",
        "Lecteur enregistreur Blu-ray",
      ],
    },
  ] satisfies ElectromenagerFamily[],
} as const;

export const electromenagerMedia = {
  heroVideo: "/brand/electromenager/catalog/videos/hero.mp4",
  heroPoster: "/brand/electromenager/catalog/hero-poster.jpg",
  promoVideos: [
    "/brand/electromenager/catalog/videos/promo-1.mp4",
    "/brand/electromenager/catalog/videos/promo-2.mp4",
  ],
} as const;
