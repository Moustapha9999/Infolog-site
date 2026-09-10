import type { Locale } from "@/lib/i18n/config";
import { pickContent } from "@/lib/i18n/content";

const packs = {
  fr: {
    title: "IZI SHOP",
    brand: "IZICALL",
    legalName: "NATIONAL CASH PLUS SUARL",
    website: {
      href: "https://izicall.shop",
      host: "izicall.shop",
      cta: "Accéder à IZI SHOP",
    },
    description:
      "IZI SHOP (IZICALL) : smartphones Samsung Galaxy à crédit jusqu'à 6 mois, produits authentiques et service après-vente.",
    heroEyebrow: "IZICALL · NATIONAL CASH PLUS",
    heroTitle: "Acheter maintenant et payer pendant 6 mois.",
    heroLead:
      "Chez IZICALL, votre smartphone est en vente à crédit, avec une facilité de paiement sur 6 mois.",
    paragraphs: [
      "Chez IZICALL, votre smartphone est en vente à crédit avec une facilité de paiement sur 6 mois.",
      "Le catalogue propose des terminaux Samsung : les dernières sorties Galaxy, originaux et garantis (Samsung Care, casse écran).",
      "Avec une large gamme de Galaxy, IZICALL donne la priorité à vos préférences.",
    ],
    offersTitle: "Nos offres IZICALL",
    offersLead:
      "Une large gamme de Galaxy, avec un accompagnement des équipes et des facilités adaptées à votre budget. Profitez de la garantie constructeur et d'un service client dédié.",
    highlights: [
      {
        title: "Crédit jusqu'à 6 mois",
        description:
          "Achetez maintenant et réglez selon une facilité de paiement sur 6 mois.",
      },
      {
        title: "Produits 100 % authentiques",
        description:
          "Terminaux Samsung Galaxy originaux, avec garantie Samsung Care et prise en charge de la casse écran.",
      },
      {
        title: "Service après-vente assuré",
        description:
          "Une équipe technique prend en charge le service de la garantie pour la clientèle IZICALL.",
      },
    ],
    rangeTitle: "Gamme Galaxy",
    rangeLead: "Parmi les modèles présentés sur IZI SHOP :",
    range: [
      "Samsung Galaxy A17",
      "Samsung Galaxy A07",
      "Samsung Galaxy A06",
      "Galaxy A14",
    ],
    subscription: {
      title: "Souscription à l'offre IZICALL",
      lead: "Inscrivez-vous sur la plateforme IZICALL pour accéder à votre espace personnel. Pour souscrire, il faut renseigner vos coordonnées et fournir vos pièces justificatives (CNI ou passeport).",
      steps: [
        {
          title: "Espace personnel",
          description:
            "Un espace personnel est mis à votre disposition sur la plateforme IZICALL.",
        },
        {
          title: "Inscription",
          description: "Inscrivez-vous à la plateforme IZICALL pour y accéder.",
        },
        {
          title: "Coordonnées et pièce d'identité",
          description:
            "Renseignez vos coordonnées et informations personnelles, puis fournissez votre CNI ou votre passeport.",
        },
        {
          title: "Enregistrement et contact",
          description:
            "Cliquez sur Enregistrer, puis contactez IZICALL sur WhatsApp pour finaliser la souscription.",
        },
      ],
    },
    affiliation: {
      title: "IZICALL est un service de NATIONAL CASH PLUS SUARL.",
      text: "Chez IZICALL, c'est la garantie d'acheter un Galaxy authentique, avec une équipe technique mise à disposition de la clientèle pour prendre en charge le service de la garantie.",
    },
    contact: {
      phone: "+221 77 170 57 41",
      phoneHref: "tel:+221771705741",
    },
    ctaTitle: "Souscrire sur IZI SHOP",
    ctaLead:
      "Consultez les offres, créez votre espace personnel et poursuivez la souscription sur izicall.shop.",
  },
  en: {
    title: "IZI SHOP",
    brand: "IZICALL",
    legalName: "NATIONAL CASH PLUS SUARL",
    website: {
      href: "https://izicall.shop",
      host: "izicall.shop",
      cta: "Go to IZI SHOP",
    },
    description:
      "IZI SHOP (IZICALL): Samsung Galaxy smartphones on credit for up to 6 months, authentic products and after-sales service.",
    heroEyebrow: "IZICALL · NATIONAL CASH PLUS",
    heroTitle: "Buy now and pay over 6 months.",
    heroLead:
      "At IZICALL, your smartphone is sold on credit, with a 6-month payment facility.",
    paragraphs: [
      "At IZICALL, your smartphone is sold on credit with a 6-month payment facility.",
      "The catalogue features Samsung handsets: the latest Galaxy releases, original and warranted (Samsung Care, screen damage).",
      "With a wide Galaxy range, IZICALL puts your preferences first.",
    ],
    offersTitle: "Our IZICALL offers",
    offersLead:
      "A wide Galaxy range, with team support and facilities suited to your budget. Enjoy manufacturer warranty and dedicated customer service.",
    highlights: [
      {
        title: "Credit for up to 6 months",
        description:
          "Buy now and pay under a 6-month payment facility.",
      },
      {
        title: "100% authentic products",
        description:
          "Original Samsung Galaxy handsets, with Samsung Care warranty and screen-damage cover.",
      },
      {
        title: "After-sales service assured",
        description:
          "A technical team handles warranty service for IZICALL customers.",
      },
    ],
    rangeTitle: "Galaxy range",
    rangeLead: "Among the models featured on IZI SHOP:",
    range: [
      "Samsung Galaxy A17",
      "Samsung Galaxy A07",
      "Samsung Galaxy A06",
      "Galaxy A14",
    ],
    subscription: {
      title: "Subscribing to the IZICALL offer",
      lead: "Register on the IZICALL platform to access your personal space. To subscribe, enter your details and provide supporting documents (national ID or passport).",
      steps: [
        {
          title: "Personal space",
          description:
            "A personal space is made available to you on the IZICALL platform.",
        },
        {
          title: "Registration",
          description: "Register on the IZICALL platform to access it.",
        },
        {
          title: "Details and ID document",
          description:
            "Enter your contact details and personal information, then provide your national ID or passport.",
        },
        {
          title: "Save and contact",
          description:
            "Click Save, then contact IZICALL on WhatsApp to finalise the subscription.",
        },
      ],
    },
    affiliation: {
      title: "IZICALL is a service of NATIONAL CASH PLUS SUARL.",
      text: "At IZICALL, you are guaranteed an authentic Galaxy, with a technical team available to customers to handle warranty service.",
    },
    contact: {
      phone: "+221 77 170 57 41",
      phoneHref: "tel:+221771705741",
    },
    ctaTitle: "Subscribe on IZI SHOP",
    ctaLead:
      "Browse offers, create your personal space and continue subscription on izicall.shop.",
  },
  ar: {
    title: "IZI SHOP",
    brand: "IZICALL",
    legalName: "NATIONAL CASH PLUS SUARL",
    website: {
      href: "https://izicall.shop",
      host: "izicall.shop",
      cta: "الوصول إلى IZI SHOP",
    },
    description:
      "IZI SHOP (IZICALL): هواتف Samsung Galaxy بالتقسيط حتى 6 أشهر، منتجات أصلية وخدمة ما بعد البيع.",
    heroEyebrow: "IZICALL · NATIONAL CASH PLUS",
    heroTitle: "اشتروا الآن وادفعوا على مدى 6 أشهر.",
    heroLead:
      "لدى IZICALL، هاتفكم الذكي يُباع بالتقسيط، مع تسهيل دفع على 6 أشهر.",
    paragraphs: [
      "لدى IZICALL، هاتفكم الذكي يُباع بالتقسيط مع تسهيل دفع على 6 أشهر.",
      "يعرض الكتالوج طرفيات Samsung: أحدث إصدارات Galaxy، أصلية ومضمونة (Samsung Care، كسر الشاشة).",
      "مع مجموعة واسعة من Galaxy، تضع IZICALL أولوياتكم في المقدمة.",
    ],
    offersTitle: "عروض IZICALL",
    offersLead:
      "مجموعة واسعة من Galaxy، مع مرافقة الفرق وتسهيلات ملائمة لميزانيتكم. استفيدوا من ضمان المصنّع وخدمة عملاء مخصصة.",
    highlights: [
      {
        title: "تقسيط حتى 6 أشهر",
        description:
          "اشتروا الآن وسدّدوا وفق تسهيل دفع على 6 أشهر.",
      },
      {
        title: "منتجات أصلية 100٪",
        description:
          "طرفيات Samsung Galaxy أصلية، مع ضمان Samsung Care وتغطية كسر الشاشة.",
      },
      {
        title: "خدمة ما بعد البيع مضمونة",
        description:
          "يتولى فريق تقني خدمة الضمان لزبائن IZICALL.",
      },
    ],
    rangeTitle: "مجموعة Galaxy",
    rangeLead: "من بين النماذج المعروضة على IZI SHOP:",
    range: [
      "Samsung Galaxy A17",
      "Samsung Galaxy A07",
      "Samsung Galaxy A06",
      "Galaxy A14",
    ],
    subscription: {
      title: "الاشتراك في عرض IZICALL",
      lead: "سجّلوا على منصة IZICALL للوصول إلى مساحتكم الشخصية. للاشتراك، يلزم إدخال بياناتكم وتقديم وثائقكم الثبوتية (بطاقة هوية أو جواز سفر).",
      steps: [
        {
          title: "المساحة الشخصية",
          description:
            "تُوضع مساحة شخصية تحت تصرفكم على منصة IZICALL.",
        },
        {
          title: "التسجيل",
          description: "سجّلوا على منصة IZICALL للوصول إليها.",
        },
        {
          title: "البيانات ووثيقة الهوية",
          description:
            "أدخلوا بياناتكم ومعلوماتكم الشخصية، ثم قدّموا بطاقة هويتكم أو جواز سفركم.",
        },
        {
          title: "الحفظ والتواصل",
          description:
            "انقروا على حفظ، ثم تواصلوا مع IZICALL عبر WhatsApp لإتمام الاشتراك.",
        },
      ],
    },
    affiliation: {
      title: "IZICALL خدمة من NATIONAL CASH PLUS SUARL.",
      text: "لدى IZICALL، الضمان هو شراء Galaxy أصلي، مع فريق تقني مخصص للزبائن ليتولى خدمة الضمان.",
    },
    contact: {
      phone: "+221 77 170 57 41",
      phoneHref: "tel:+221771705741",
    },
    ctaTitle: "الاشتراك على IZI SHOP",
    ctaLead:
      "اطّلعوا على العروض، أنشئوا مساحتكم الشخصية وواصلوا الاشتراك على izicall.shop.",
  },
} as const;

export type IziShopContent = (typeof packs)["fr"];

export function getIziShop(locale: Locale = "fr"): IziShopContent {
  return pickContent(packs, locale);
}

/** @deprecated prefer getIziShop(locale) */
export const iziShop = packs.fr;
