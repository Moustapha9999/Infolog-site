/**
 * Échelle typographique INFOLOG — à utiliser partout.
 * Titres : font-medium par défaut ; variantes Bold si besoin d’emphase.
 * Corps : une seule taille pour le texte simple (body) ; lead pour intros.
 */
export const type = {
  /** Titre de page (h1) */
  h1: "text-4xl font-medium tracking-tight sm:text-5xl lg:text-[3.25rem] lg:leading-[1.12]",
  h1Bold:
    "text-4xl font-semibold tracking-tight sm:text-5xl lg:text-[3.25rem] lg:leading-[1.12]",

  /** Titre de section (h2) */
  h2: "text-3xl font-medium tracking-tight sm:text-4xl lg:text-[2.75rem]",
  h2Bold:
    "text-3xl font-semibold tracking-tight sm:text-4xl lg:text-[2.75rem]",

  /** Titre de bloc / carte (h3) */
  h3: "text-lg font-medium leading-snug tracking-tight sm:text-xl",
  h3Bold: "text-lg font-semibold leading-snug tracking-tight sm:text-xl",

  /** Intro / lead de section — texte simple agrandi */
  lead: "text-lg leading-9 sm:text-xl sm:leading-10",

  /** Paragraphe courant — taille unique site-wide */
  body: "text-base leading-8 sm:text-lg sm:leading-9",

  /** Texte en carte / liste (même corps, interligne un peu plus serré) */
  bodyCard: "text-base leading-7 sm:leading-8",

  /** Label mono technique */
  label: "font-mono text-[11px] uppercase tracking-[0.28em]",
} as const;
