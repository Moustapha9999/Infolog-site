import type { Locale } from "@/lib/i18n/config";
import { pickContent } from "@/lib/i18n/content";
import type { PhoneCategory, PhoneProduct } from "./types";

const categoryLabelPacks = {
  fr: {
    flagship: "Flagship",
    foldable: "Pliable",
    "a-series": "Série A",
    tablet: "Tablette",
  },
  en: {
    flagship: "Flagship",
    foldable: "Foldable",
    "a-series": "A Series",
    tablet: "Tablet",
  },
  ar: {
    flagship: "Flagship",
    foldable: "قابل للطي",
    "a-series": "سلسلة A",
    tablet: "جهاز لوحي",
  },
} as const satisfies Record<
  Locale,
  Record<PhoneCategory, string>
>;

export type CategoryLabels = (typeof categoryLabelPacks)["fr"];

export function getCategoryLabel(locale: Locale = "fr"): CategoryLabels {
  return pickContent(categoryLabelPacks, locale);
}

/** @deprecated prefer getCategoryLabel(locale) */
export const categoryLabel = categoryLabelPacks.fr;

const packs = {
  fr: {
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
    catalogLabel: "Catalogue",
    catalogLead:
      "Cliquez sur Découvrir pour ouvrir la fiche complète de chaque modèle.",
    detailsTitle: "Fiches modèles",
    servicesLabel: "Services",
    servicesTitle: "Ce que INFOLOG met à votre disposition",
    servicesLead:
      "Produits, réseau, logistique et SAV — sélectionnez un onglet pour afficher le détail.",
    servicesAria: "Services téléphonie",
    savPresentation: "Présentation SAV",
    productInfoSheet: "Fiche d'information sur le produit",
    visualComing: "Visuel à venir",
    carouselProgress: "Progression du carrousel",
    scrollLeft: "Défiler vers la gauche",
    scrollRight: "Défiler vers la droite",
    ctaTitle: "Besoin d'un conseil ou d'un devis ?",
    ctaLead:
      "Nos équipes vous orientent vers le modèle adapté à votre usage, avec SAV et accompagnement local.",
    discoverIziShop: "Découvrir IZI SHOP",
    newBadge: "Nouveau",
    backToCatalog: "Retour au catalogue",
    requestModel: "Demander ce modèle",
    specsLabel: "Caractéristiques",
    specsTitle: "Fiche technique",
    relatedLabel: "Catalogue",
    relatedTitle: "Autres modèles",
    presentationLabel: "Présentation",
    promotion: "Promotion",
    outOfStock: "Rupture de stock",
    mainCamera: "Caméra principale",
    interestedTitle: "Intéressé par le {name} ?",
    interestedLead:
      "Contactez INFOLOG pour la disponibilité, les configurations et un devis.",
  },
  en: {
    title: "Telephony",
    description:
      "Samsung Galaxy distribution — smartphones and tablets available at INFOLOG.",
    intro:
      "For more than 15 years, INFOLOG has built a privileged relationship with its customers by offering solutions and products tailored to their mobile telephony and digital technology needs.\n\nAs a distributor of major brands such as Samsung, Apple and Nokia, INFOLOG offers a wide range of smartphones, mobile phones, tablets and accessories for both professionals and individuals.\n\nWith a diversified offer and a network of recognised partners, INFOLOG supports its customers with reliable, accessible solutions adapted to evolving digital usage.",
    heroEyebrow: "Samsung Galaxy · INFOLOG",
    heroTitle: "Available models",
    heroLead:
      "Flagships, foldables, A Series and tablets — explore the Galaxy selection at INFOLOG.",
    showcaseTitle: "Discover",
    catalogLabel: "Catalogue",
    catalogLead: "Click Discover to open the full product sheet for each model.",
    detailsTitle: "Model sheets",
    servicesLabel: "Services",
    servicesTitle: "What INFOLOG puts at your disposal",
    servicesLead:
      "Products, network, logistics and after-sales — select a tab to view the details.",
    servicesAria: "Telephony services",
    savPresentation: "After-sales overview",
    productInfoSheet: "Product information sheet",
    visualComing: "Visual coming soon",
    carouselProgress: "Carousel progress",
    scrollLeft: "Scroll left",
    scrollRight: "Scroll right",
    ctaTitle: "Need advice or a quote?",
    ctaLead:
      "Our teams guide you to the right model for your use case, with local after-sales support.",
    discoverIziShop: "Discover IZI SHOP",
    newBadge: "New",
    backToCatalog: "Back to catalogue",
    requestModel: "Request this model",
    specsLabel: "Specifications",
    specsTitle: "Technical sheet",
    relatedLabel: "Catalogue",
    relatedTitle: "Other models",
    presentationLabel: "Overview",
    promotion: "Promotion",
    outOfStock: "Out of stock",
    mainCamera: "Main camera",
    interestedTitle: "Interested in the {name}?",
    interestedLead:
      "Contact INFOLOG for availability, configurations and a quote.",
  },
  ar: {
    title: "الهاتف",
    description:
      "توزيع Samsung Galaxy — هواتف ذكية وأجهزة لوحية متوفرة لدى INFOLOG.",
    intro:
      "منذ أكثر من 15 عاماً، تطور INFOLOG علاقة مميزة مع عملائها عبر اقتراح حلول ومنتجات ملائمة لاحتياجاتهم في مجال الهاتف المحمول والتقنيات الرقمية.\n\nبوصفها موزعاً لعلامات كبرى مثل Samsung وApple وNokia، تقدم INFOLOG مجموعة واسعة من الهواتف الذكية والهواتف المحمولة والأجهزة اللوحية والإكسسوارات، موجّهة للمحترفين والأفراد على حد سواء.\n\nبفضل عرض متنوع وشبكة شركاء معترف بهم، ترافق INFOLOG عملاءها بحلول موثوقة ومتاحة وملائمة لتطور الاستخدامات الرقمية.",
    heroEyebrow: "Samsung Galaxy · INFOLOG",
    heroTitle: "الموديلات المتوفرة",
    heroLead:
      "أجهزة رائدة وقابلة للطي وسلسلة A وأجهزة لوحية — اكتشفوا مجموعة Galaxy لدى INFOLOG.",
    showcaseTitle: "اكتشف",
    catalogLabel: "الكتالوج",
    catalogLead: "انقروا على «اكتشف» لفتح البطاقة الكاملة لكل موديل.",
    detailsTitle: "بطاقات الموديلات",
    servicesLabel: "الخدمات",
    servicesTitle: "ما توفره INFOLOG لكم",
    servicesLead:
      "منتجات وشبكة ولوجستيات وخدمة ما بعد البيع — اختاروا لساناً لعرض التفاصيل.",
    servicesAria: "خدمات الهاتف",
    savPresentation: "عرض خدمة ما بعد البيع",
    productInfoSheet: "بطاقة معلومات المنتج",
    visualComing: "الصورة قريباً",
    carouselProgress: "تقدم العرض المتحرك",
    scrollLeft: "تمرير إلى اليسار",
    scrollRight: "تمرير إلى اليمين",
    ctaTitle: "تحتاجون إلى استشارة أو عرض سعر؟",
    ctaLead:
      "توجّهكم فرقنا نحو الموديل المناسب لاستخدامكم، مع خدمة ما بعد البيع ومرافقة محلية.",
    discoverIziShop: "اكتشفوا IZI SHOP",
    newBadge: "جديد",
    backToCatalog: "العودة إلى الكتالوج",
    requestModel: "اطلبوا هذا الموديل",
    specsLabel: "المواصفات",
    specsTitle: "البطاقة التقنية",
    relatedLabel: "الكتالوج",
    relatedTitle: "موديلات أخرى",
    presentationLabel: "عرض",
    promotion: "عرض ترويجي",
    outOfStock: "غير متوفر",
    mainCamera: "الكاميرا الرئيسية",
    interestedTitle: "مهتمون بـ {name}؟",
    interestedLead:
      "تواصلوا مع INFOLOG لمعرفة التوفر والتكوينات والحصول على عرض سعر.",
  },
} as const;

export type TelephonieContent = (typeof packs)["fr"];

export function getTelephonie(locale: Locale = "fr"): TelephonieContent {
  return pickContent(packs, locale);
}

/** @deprecated prefer getTelephonie(locale) */
export const telephonie = packs.fr;

/** Visuels hero (fichiers hors fiches produit). */
export const telephonieMedia = {
  heroVideo: "/brand/telephonie/catalog/videos/hero.mp4?v=11",
  heroPoster: "/brand/telephonie/catalog/hero-poster.jpg?v=11",
  foldFamily: "/brand/telephonie/products/galaxy-z-fold8-ultra/gallery-1.jpg",
  s26Series: "/brand/telephonie/catalog/s26-series.png",
  heroCollage: "/brand/telephonie/catalog/hero-extra.png",
} as const;

export type { PhoneProduct };
