export type PhoneSpec = {
  label: string;
  value: string;
};

export type PhoneColor = {
  name: string;
  hex: string;
  /** Visuel associé (sélecteur de coloris) */
  image?: string;
};

export type PhoneDesignIntro = {
  title: string;
  body: string;
};

export type PhoneFeatureHighlight = {
  title: string;
  body: string;
  image: string;
  footnote?: string;
};

export type PhoneFeatureCard = {
  title: string;
  body: string;
  image: string;
};

export type PhoneFeatureSuite = {
  lead: PhoneFeatureCard;
  cards: PhoneFeatureCard[];
};

export type PhoneKeyPointSlide = {
  image: string;
  caption: string;
};

export type PhoneKeyPoints = {
  title: string;
  body: string;
  heading: string;
  slides: PhoneKeyPointSlide[];
};

export type PhoneCategory = "flagship" | "foldable" | "a-series" | "tablet";

export type PhoneMediaQuote = {
  title: string;
  quote: string;
  source?: string;
};

export type PhoneDesignSection = {
  label: string;
  title: string;
};

export type PhonePerformanceStat = {
  label: string;
  value: string;
  unit: string;
  description: string;
};

export type PhonePerformanceSection = {
  label?: string;
  title: string;
  body: string;
  footnote?: string;
  stats: PhonePerformanceStat[];
};

export type PhoneBatterySection = {
  label?: string;
  title: string;
  body: string;
  capacityLabel?: string;
  capacityValue: string;
  capacityUnit: string;
  playbackLabel?: string;
  playbackPrefix?: string;
  playbackValue: string;
  playbackUnit: string;
};

export type PhoneProduct = {
  id: string;
  name: string;
  category: PhoneCategory;
  /** Hero cinématique (bandeau type Samsung) */
  hero?: string;
  /** cinematic = photo pleine hauteur ; banner = visuel promo (contain) */
  heroLayout?: "cinematic" | "banner";
  /** Accroche sous le hero bandeau */
  heroTagline?: string;
  image?: string;
  imageAlt: string;
  gallery?: string[];
  video?: string;
  videos?: string[];
  featureVideos?: string[];
  /** Carrousel stories (video-1 … video-n, hors video-6) */
  storyVideos?: string[];
  /** Titre fixe au-dessus du carrousel stories */
  storyHeading?: string;
  /** Légendes par vidéo (même ordre que storyVideos) */
  storyCaptions?: string[];
  /** Intro design au-dessus de la vidéo (titre + paragraphe) */
  designIntro?: PhoneDesignIntro;
  /** Bloc texte + image (ex. mises à jour OS) */
  featureHighlight?: PhoneFeatureHighlight;
  /** Suite Knox / Quick Share / Smart Switch */
  featureSuite?: PhoneFeatureSuite;
  /** Intro écran + carrousel « points clés » */
  keyPoints?: PhoneKeyPoints;
  /** Section DESIGN (souvent video-6) */
  design?: PhoneDesignSection;
  designVideo?: string;
  performance?: PhonePerformanceSection;
  battery?: PhoneBatterySection;
  tagline?: string;
  /** Configurations affichées (ex. « 4 Go / 128 Go ») */
  variants: string[];
  /** RAM : 4, 6, 12, 16, 32 Go */
  ram?: string[];
  /** Stockage : 128, 256, 512 Go */
  storage?: string[];
  highlights: string[];
  description?: string;
  media?: PhoneMediaQuote;
  specs: PhoneSpec[];
  cameras?: string[];
  colors?: PhoneColor[];
  sourceNote?: string;
};

export type PhoneInfoJson = {
  name: string;
  category: PhoneCategory;
  tagline?: string;
  variants: string[];
  ram?: string[];
  storage?: string[];
  highlights: string[];
  description?: string;
  media?: PhoneMediaQuote;
  heroLayout?: "cinematic" | "banner";
  heroTagline?: string;
  storyHeading?: string;
  storyCaptions?: string[];
  designIntro?: PhoneDesignIntro;
  featureHighlight?: PhoneFeatureHighlight;
  featureSuite?: PhoneFeatureSuite;
  keyPoints?: PhoneKeyPoints;
  design?: PhoneDesignSection;
  performance?: PhonePerformanceSection;
  battery?: PhoneBatterySection;
  specs: PhoneSpec[];
  cameras?: string[];
  colors?: PhoneColor[];
  sourceNote?: string;
};
