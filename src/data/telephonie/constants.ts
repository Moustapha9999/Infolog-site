import type { PhoneProduct } from "./types";

export const categoryLabel = {
  flagship: "Flagship",
  foldable: "Pliable",
  "a-series": "Série A",
  tablet: "Tablette",
} as const;

export const telephonie = {
  title: "Téléphonie",
  description:
    "Distribution Samsung Galaxy — smartphones et tablettes disponibles chez INFOLOG.",
  intro:
    "Depuis plus de 15 ans, INFOLOG développe une relation privilégiée avec ses clients en leur proposant des solutions et produits adaptés à leurs besoins en matière de téléphonie mobile et de technologies numériques.\n\nDistributeur de grandes marques telles que Samsung, Apple et Nokia, INFOLOG propose une large gamme de smartphones, téléphones mobiles, tablettes et accessoires, destinée aussi bien aux professionnels qu'aux particuliers.\n\nGrâce à une offre diversifiée et à un réseau de partenaires reconnus, INFOLOG accompagne ses clients avec des solutions fiables, accessibles et adaptées à l'évolution des usages numériques.",
  heroEyebrow: "Samsung Galaxy · INFOLOG",
  heroTitle: "Les modèles disponibles",
  heroLead:
    "Flagships, pliables, série A et tablettes — découvrez la sélection Galaxy chez INFOLOG.",
  showcaseTitle: "Découvrir",
  detailsTitle: "Fiches modèles",
  ctaTitle: "Besoin d'un conseil ou d'un devis ?",
  ctaLead:
    "Nos équipes vous orientent vers le modèle adapté à votre usage, avec SAV et accompagnement local.",
} as const;

/** Visuels hero (fichiers hors fiches produit). */
export const telephonieMedia = {
  heroVideo: "/brand/telephonie/catalog/videos/hero.mp4?v=11",
  heroPoster: "/brand/telephonie/catalog/hero-poster.jpg?v=11",
  foldFamily: "/brand/telephonie/products/galaxy-z-fold8-ultra/gallery-1.jpg",
  s26Series: "/brand/telephonie/catalog/s26-series.png",
  heroCollage: "/brand/telephonie/catalog/hero-extra.png",
} as const;

export type { PhoneProduct };
