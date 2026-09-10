import type { Locale } from "@/lib/i18n/config";
import { pickContent } from "@/lib/i18n/content";

export type ElectromenagerFamily = {
  id: string;
  label: string;
  items: string[];
};

const packs = {
  fr: {
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
    rangesLabel: "Gammes",
    familyLabel: "Famille",
    familiesAria: "Familles de produits électroménager",
    showcaseTitle: "Catalogue",
    showcaseLead:
      "Les fiches produits arriveront ici. En attendant, contactez-nous pour la disponibilité et un devis.",
    catalogLabel: "Catalogue",
    productsLabel: "Produits",
    catalogComingTitle: "Catalogue à venir",
    catalogComingLead: "Les fiches produits seront ajoutées ici prochainement.",
    requestProduct: "Demander un produit",
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
  },
  en: {
    title: "Home appliances",
    description:
      "Samsung home appliance supply and service — for professionals and individuals, with INFOLOG.",
    intro:
      "With more than 15 years of solid experience alongside its trusted partner Samsung, Infolog has established itself as a major player in the supply and servicing of home appliances through its wide distribution network.\n\nBeyond its primary role as an advisor for the deployment and choice of technology solutions aligned with home appliance needs, Infolog's service offerings address both professionals (public & private sectors) and individuals.",
    heroTitle: "Samsung · INFOLOG",
    heroLead:
      "Cooking, cooling and multimedia — equipment and support for professionals and individuals.",
    familiesTitle: "Our product families",
    familiesLead:
      "Hover or select a family to explore the offer available at INFOLOG.",
    rangesLabel: "Ranges",
    familyLabel: "Family",
    familiesAria: "Home appliance product families",
    showcaseTitle: "Catalogue",
    showcaseLead:
      "Product sheets will appear here. In the meantime, contact us for availability and a quote.",
    catalogLabel: "Catalogue",
    productsLabel: "Products",
    catalogComingTitle: "Catalogue coming soon",
    catalogComingLead: "Product sheets will be added here shortly.",
    requestProduct: "Request a product",
    ctaTitle: "Need advice or a quote?",
    ctaLead:
      "Our teams guide you to the right equipment, with local installation and after-sales support.",
    families: [
      {
        id: "cuisson",
        label: "Cooking",
        items: [
          "Cooker",
          "Microwave oven",
          "Conventional oven",
          "Steam oven",
          "Gas cooker",
          "Range hood",
          "Cooktop",
          "Classic electric",
          "Ceramic glass",
          "Induction",
        ],
      },
      {
        id: "froid",
        label: "Cooling",
        items: [
          "Commercial & industrial cooling",
          "Air conditioning",
          "Heat pumps",
          "Thermodynamic applications",
          "Freezer",
          "Refrigerator",
          "Mobile and monobloc air conditioner",
        ],
      },
      {
        id: "multimedia",
        label: "MultiMedia",
        items: [
          "Television",
          "Digital camera",
          "Player-recorder",
          "DVD player",
          "Portable DVD player",
          "Blu-ray player",
          "Blu-ray recorder player",
        ],
      },
    ] satisfies ElectromenagerFamily[],
  },
  ar: {
    title: "الأجهزة المنزلية",
    description:
      "توريد وخدمة الأجهزة المنزلية Samsung — للمحترفين والأفراد، مع INFOLOG.",
    intro:
      "بفضل خبرة صلبة تمتد لأكثر من 15 عاماً مع شريكها الموثوق Samsung، فرضت Infolog نفسها كفاعل رئيسي في توريد وخدمة الأجهزة المنزلية عبر شبكة توزيعها الواسعة.\n\nوإلى جانب دورها الأول كمستشار لوضع الحلول واختيار التقنيات الملائمة لاحتياجات الأجهزة المنزلية، تتوجّه خدمات Infolog إلى المحترفين (القطاعان العام والخاص) وإلى الأفراد على حد سواء.",
    heroTitle: "Samsung · INFOLOG",
    heroLead:
      "الطبخ والتبريد والوسائط المتعددة — معدات ومرافقة للمحترفين والأفراد.",
    familiesTitle: "عائلات منتجاتنا",
    familiesLead:
      "مرّروا المؤشر أو اختاروا عائلة لاستكشاف العرض المتوفر لدى INFOLOG.",
    rangesLabel: "المجموعات",
    familyLabel: "عائلة",
    familiesAria: "عائلات منتجات الأجهزة المنزلية",
    showcaseTitle: "الكتالوج",
    showcaseLead:
      "ستظهر بطاقات المنتجات هنا. في الأثناء، تواصلوا معنا لمعرفة التوفر والحصول على عرض سعر.",
    catalogLabel: "الكتالوج",
    productsLabel: "المنتجات",
    catalogComingTitle: "الكتالوج قريباً",
    catalogComingLead: "ستُضاف بطاقات المنتجات هنا قريباً.",
    requestProduct: "اطلبوا منتجاً",
    ctaTitle: "تحتاجون إلى استشارة أو عرض سعر؟",
    ctaLead:
      "توجّهكم فرقنا نحو المعدات المناسبة، مع التركيب وخدمة ما بعد البيع محلياً.",
    families: [
      {
        id: "cuisson",
        label: "الطبخ",
        items: [
          "موقد",
          "فرن ميكروويف",
          "فرن تقليدي",
          "فرن بخار",
          "موقد غاز",
          "شفاط مطبخ",
          "لوحة طبخ",
          "كهربائي كلاسيكي",
          "سيراميك زجاجي",
          "حثّي (إندكشن)",
        ],
      },
      {
        id: "froid",
        label: "التبريد",
        items: [
          "تبريد تجاري وصناعي",
          "تكييف الهواء",
          "مضخات حرارية",
          "تطبيقات حرارية ديناميكية",
          "مجمّد",
          "ثلاجة",
          "مكيف متنقل وأحادي الكتلة",
        ],
      },
      {
        id: "multimedia",
        label: "MultiMedia",
        items: [
          "تلفاز",
          "كاميرا رقمية",
          "مشغّل-مسجّل",
          "مشغّل DVD",
          "مشغّل DVD محمول",
          "مشغّل Blu-ray",
          "مشغّل ومسجّل Blu-ray",
        ],
      },
    ] satisfies ElectromenagerFamily[],
  },
} as const;

export type ElectromenagerContent = (typeof packs)["fr"];

export type ElectromenagerFamiliesContent = Pick<
  ElectromenagerContent,
  "familiesTitle" | "familiesLead" | "families" | "familyLabel" | "familiesAria"
> & {
  rangesLabel?: ElectromenagerContent["rangesLabel"];
};

export function getElectromenager(locale: Locale = "fr"): ElectromenagerContent {
  return pickContent(packs, locale);
}

/** @deprecated prefer getElectromenager(locale) */
export const electromenager = packs.fr;

export const electromenagerMedia = {
  heroVideo: "/brand/electromenager/catalog/videos/hero.mp4",
  heroPoster: "/brand/electromenager/catalog/hero-poster.jpg",
  promoVideos: [
    "/brand/electromenager/catalog/videos/promo-1.mp4",
    "/brand/electromenager/catalog/videos/promo-2.mp4",
  ],
} as const;
