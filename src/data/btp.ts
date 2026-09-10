import type { Locale } from "@/lib/i18n/config";
import { pickContent } from "@/lib/i18n/content";

const packs = {
  fr: {
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
  },
  en: {
    title: "Construction",
    description:
      "General building contractor: structural works, finishing works, civil engineering, new build, rehabilitation and industrial maintenance.",
    intro:
      "INFOLOG BTP is a GENERAL BUILDING CONTRACTOR carrying out construction works across the main trades: structural works, finishing works & civil engineering. It delivers new builds as well as rehabilitation and industrial maintenance. It also has an in-house design office dedicated to execution drawings and preliminary project studies.",
    savoirFaire: {
      title: "Our expertise",
      items: [
        {
          title: "Civil engineering",
          image: "/brand/btp-genie-civil.png",
          imageAlt: "Construction equipment — civil engineering",
          points: [
            "Foundations",
            "Floor slabs",
            "Reinforced concrete structure",
            "Concrete treatment",
          ],
        },
        {
          title: "Structural works",
          image: "/brand/btp-gros-oeuvre.jpg",
          imageAlt: "Scaffolding and façade — structural works",
          points: [
            "Masonry: blocks and brick",
            "Façade renovation",
            "Render projection",
          ],
        },
        {
          title: "Finishing works",
          image: "/brand/btp-second-oeuvre.jpg",
          imageAlt: "Finishing works — second œuvre",
          points: [
            "Tiling",
            "Plastering and insulation",
            "Exterior joinery",
            "Interior joinery",
          ],
        },
      ],
    },
    atouts: {
      title: "Strengths",
      items: [
        {
          title: "ITIL-based service management",
          points: [
            "An in-house design office",
            "A works manager",
            "An HSE manager",
            "A site supervisor and team",
          ],
        },
        {
          title: "Highly qualified staff",
        },
        {
          title: "Numerous references (varied client types)",
        },
        {
          title: "On-time delivery",
        },
        {
          title: "Its own equipment fleet",
          description:
            "Heavy goods truck and low-loader, scaffolding, concrete mixer … to ensure fast interventions",
        },
      ],
    },
    gallery: {
      title: "Our expertise",
      images: [
        {
          src: "/brand/btp-gallery-1.png",
          alt: "Building site with cranes — INFOLOG construction projects",
        },
        {
          src: "/brand/btp-gallery-2.png",
          alt: "Completed residential building — INFOLOG construction projects",
        },
        {
          src: "/brand/btp-gallery-3.jpg",
          alt: "Concrete structure in progress — INFOLOG construction projects",
        },
        {
          src: "/brand/btp-gallery-4.jpg",
          alt: "Building construction with crane — INFOLOG construction projects",
        },
      ],
    },
  },
  ar: {
    title: "البناء والأشغال العامة",
    description:
      "مقاولة عامة للبناء: الهيكل الرئيسي، الأعمال التكميلية، الهندسة المدنية، الجديد، إعادة التأهيل والصيانة الصناعية.",
    intro:
      "INFOLOG BTP مقاولة عامة للبناء تمارس أعمال بناء متنوعة في أبرز التخصصات: الهيكل الرئيسي، الأعمال التكميلية والهندسة المدنية. تنجز أعمالاً جديدة وأعمال إعادة تأهيل وكذلك صيانة صناعية. كما تتوفر على مكتب دراسات مخصص لإعداد مخططات التنفيذ ودراسات ما قبل المشروع.",
    savoirFaire: {
      title: "خبرتنا",
      items: [
        {
          title: "الهندسة المدنية",
          image: "/brand/btp-genie-civil.png",
          imageAlt: "معدات الورش — الهندسة المدنية",
          points: [
            "الأساسات",
            "البلاطات",
            "هيكل خرسانة مسلحة",
            "معالجة الخرسانة",
          ],
        },
        {
          title: "الهيكل الرئيسي",
          image: "/brand/btp-gros-oeuvre.jpg",
          imageAlt: "سقالات وواجهة — الهيكل الرئيسي",
          points: [
            "البناء: بلوك وطوب",
            "ترميم الواجهات",
            "رش الطلاء",
          ],
        },
        {
          title: "الأعمال التكميلية",
          image: "/brand/btp-second-oeuvre.jpg",
          imageAlt: "أعمال التشطيب — الأعمال التكميلية",
          points: [
            "البلاط",
            "الجص والعزل",
            "النجارة الخارجية",
            "النجارة الداخلية",
          ],
        },
      ],
    },
    atouts: {
      title: "نقاط القوة",
      items: [
        {
          title: "إدارة خدمات وفق ITIL",
          points: [
            "مكتب دراسات داخلي",
            "مدير أشغال",
            "مسؤول HSE",
            "رئيس ورش وفريقه",
          ],
        },
        {
          title: "موظفون مؤهلون جداً",
        },
        {
          title: "مراجع عديدة (أنواع زبائن متنوعة)",
        },
        {
          title: "احترام المواعيد",
        },
        {
          title: "حظيرة معدات خاصة",
          description:
            "شاحنة ثقيلة وناقلة معدات، سقالات، خلاطة خرسانة … لضمان سرعة التدخلات",
        },
      ],
    },
    gallery: {
      title: "خبرتنا",
      images: [
        {
          src: "/brand/btp-gallery-1.png",
          alt: "ورش مبانٍ مع رافعات — إنجازات البناء لدى INFOLOG",
        },
        {
          src: "/brand/btp-gallery-2.png",
          alt: "مبنى سكني مُسلَّم — إنجازات البناء لدى INFOLOG",
        },
        {
          src: "/brand/btp-gallery-3.jpg",
          alt: "هيكل خرسانة قيد الإنجاز — إنجازات البناء لدى INFOLOG",
        },
        {
          src: "/brand/btp-gallery-4.jpg",
          alt: "بناء مبنى مع رافعة — إنجازات البناء لدى INFOLOG",
        },
      ],
    },
  },
} as const;

export type BtpContent = (typeof packs)["fr"];

export function getBtp(locale: Locale = "fr"): BtpContent {
  return pickContent(packs, locale);
}

/** @deprecated prefer getBtp(locale) */
export const btp = packs.fr;
