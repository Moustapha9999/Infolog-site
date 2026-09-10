import type { Locale } from "@/lib/i18n/config";
import { pickContent } from "@/lib/i18n/content";

const packs = {
  fr: {
    title: "Énergie",
    shortTitle: "Énergie",
    breadcrumb: "BTP & Électroménager / Énergie",
    description:
      "Infolog : consultation et ingénierie pour la fourniture d'équipements de mesure, avec pour partenaire Siemens — clients gouvernementaux et commerciaux.",
    heroLead:
      "Consultation, ingénierie et équipements de mesure — un accompagnement structuré, avec Siemens comme partenaire.",
    tags: ["Siemens", "Mesure", "Ingénierie", "Consultation"],
    introLabel: "Présentation",
    introTitle: "Équipements de mesure & ingénierie",
    intro: [
      {
        before:
          "Nous sommes l'un des principaux fournisseurs de services de consultation et d'ingénierie qui soutient les clients gouvernementaux et commerciaux dans la fourniture d'équipements de mesure, avec pour partenaire",
        highlight: "Siemens",
        after: ".",
      },
      {
        text: "De l'analyse du besoin à la mise à disposition des équipements adaptés, Infolog accompagne les organisations publiques et privées dans des projets où la précision de la mesure et la fiabilité des solutions sont déterminantes.",
      },
    ],
    axesLabel: "Notre périmètre",
    axesTitle: "Quatre piliers pour vos projets énergie & mesure",
    axesLead:
      "Un accompagnement qui combine conseil, ingénierie et accès à des équipements de mesure reconnus, pour des environnements exigeants.",
    axes: [
      {
        title: "Consultation",
        body: "Analyse de vos besoins, cadrage technique et recommandations pour choisir les équipements de mesure adaptés à votre contexte opérationnel.",
      },
      {
        title: "Ingénierie",
        body: "Appui d'ingénierie pour dimensionner, spécifier et déployer des solutions cohérentes avec vos contraintes terrain et réglementaires.",
      },
      {
        title: "Équipements de mesure",
        body: "Fourniture d'équipements de mesure pour les clients gouvernementaux et commerciaux, dans une logique de fiabilité et de performance.",
      },
      {
        title: "Secteurs public & privé",
        body: "Nous intervenons auprès d'acteurs gouvernementaux et commerciaux qui ont besoin d'un partenaire capable de relier le conseil à la fourniture.",
      },
    ],
    partnerLabel: "Partenaire",
    partnerName: "Siemens",
    partnerTitle: "Un partenaire de référence pour la mesure",
    partnerBody:
      "En nous appuyant sur Siemens, nous mettons à disposition de nos clients des équipements et un écosystème technologiques adaptés aux enjeux de mesure, de contrôle et d'infrastructure énergétique.",
    approachLabel: "Approche",
    approachTitle: "Du besoin à l'équipement",
    approach: [
      {
        title: "Comprendre le besoin",
        body: "Identifier les usages, les contraintes et le niveau de précision attendu.",
      },
      {
        title: "Proposer la solution",
        body: "Sélectionner et spécifier les équipements de mesure adaptés, avec l'appui de notre partenaire Siemens.",
      },
      {
        title: "Accompagner la mise en œuvre",
        body: "Soutenir le déploiement et la bonne intégration des équipements dans votre environnement.",
      },
    ],
    ctaTitle: "Un projet d'équipements de mesure ou d'ingénierie à cadrer ?",
    ctaLabel: "Parler à un expert",
  },
  en: {
    title: "Energy",
    shortTitle: "Energy",
    breadcrumb: "Construction & Home appliances / Energy",
    description:
      "Infolog: consulting and engineering for the supply of measurement equipment, with Siemens as partner — government and commercial clients.",
    heroLead:
      "Consulting, engineering and measurement equipment — structured support, with Siemens as partner.",
    tags: ["Siemens", "Measurement", "Engineering", "Consulting"],
    introLabel: "Overview",
    introTitle: "Measurement equipment & engineering",
    intro: [
      {
        before:
          "We are one of the leading providers of consulting and engineering services supporting government and commercial clients in the supply of measurement equipment, with",
        highlight: "Siemens",
        after: " as partner.",
      },
      {
        text: "From needs analysis to delivery of the right equipment, Infolog supports public and private organisations on projects where measurement precision and solution reliability are decisive.",
      },
    ],
    axesLabel: "Our scope",
    axesTitle: "Four pillars for your energy & measurement projects",
    axesLead:
      "Support that combines advisory, engineering and access to recognised measurement equipment, for demanding environments.",
    axes: [
      {
        title: "Consulting",
        body: "Needs analysis, technical scoping and recommendations to choose measurement equipment suited to your operational context.",
      },
      {
        title: "Engineering",
        body: "Engineering support to size, specify and deploy solutions aligned with your field and regulatory constraints.",
      },
      {
        title: "Measurement equipment",
        body: "Supply of measurement equipment for government and commercial clients, with a focus on reliability and performance.",
      },
      {
        title: "Public & private sectors",
        body: "We work with government and commercial actors who need a partner able to connect advisory to supply.",
      },
    ],
    partnerLabel: "Partner",
    partnerName: "Siemens",
    partnerTitle: "A reference partner for measurement",
    partnerBody:
      "By relying on Siemens, we provide our clients with equipment and a technology ecosystem suited to measurement, control and energy infrastructure stakes.",
    approachLabel: "Approach",
    approachTitle: "From need to equipment",
    approach: [
      {
        title: "Understand the need",
        body: "Identify uses, constraints and the expected level of precision.",
      },
      {
        title: "Propose the solution",
        body: "Select and specify the right measurement equipment, with support from our partner Siemens.",
      },
      {
        title: "Support implementation",
        body: "Support deployment and proper integration of equipment in your environment.",
      },
    ],
    ctaTitle: "A measurement equipment or engineering project to scope?",
    ctaLabel: "Talk to an expert",
  },
  ar: {
    title: "الطاقة",
    shortTitle: "الطاقة",
    breadcrumb: "البناء والأجهزة المنزلية / الطاقة",
    description:
      "Infolog: استشارة وهندسة لتوفير معدات القياس، مع الشريك Siemens — عملاء حكوميون وتجاريون.",
    heroLead:
      "استشارة وهندسة ومعدات قياس — مرافقة منظمة، مع Siemens كشريك.",
    tags: ["Siemens", "قياس", "هندسة", "استشارة"],
    introLabel: "تقديم",
    introTitle: "معدات القياس والهندسة",
    intro: [
      {
        before:
          "نحن من أبرز مزودي خدمات الاستشارة والهندسة الذين يدعمون العملاء الحكوميين والتجاريين في توفير معدات القياس، مع الشريك",
        highlight: "Siemens",
        after: ".",
      },
      {
        text: "من تحليل الحاجة إلى توفير المعدات الملائمة، ترافق Infolog المنظمات العامة والخاصة في مشاريع تكون فيها دقة القياس وموثوقية الحلول حاسمتين.",
      },
    ],
    axesLabel: "نطاقنا",
    axesTitle: "أربعة ركائز لمشاريعكم في الطاقة والقياس",
    axesLead:
      "مرافقة تجمع بين الاستشارة والهندسة والوصول إلى معدات قياس معترف بها، لبيئات متطلبة.",
    axes: [
      {
        title: "الاستشارة",
        body: "تحليل احتياجاتكم، التأطير التقني والتوصيات لاختيار معدات القياس الملائمة لسياقكم التشغيلي.",
      },
      {
        title: "الهندسة",
        body: "دعم هندسي لتحديد الأبعاد والمواصفات ونشر حلول متسقة مع قيودكم الميدانية والتنظيمية.",
      },
      {
        title: "معدات القياس",
        body: "توفير معدات قياس للعملاء الحكوميين والتجاريين، بمنطق الموثوقية والأداء.",
      },
      {
        title: "القطاعان العام والخاص",
        body: "نتدخل لدى جهات حكومية وتجارية تحتاج شريكاً قادراً على ربط الاستشارة بالتوريد.",
      },
    ],
    partnerLabel: "الشريك",
    partnerName: "Siemens",
    partnerTitle: "شريك مرجعي للقياس",
    partnerBody:
      "بالاعتماد على Siemens، نضع تحت تصرف عملائنا معدات ونظاماً تقنياً ملائماً لتحديات القياس والتحكم والبنية التحتية للطاقة.",
    approachLabel: "المنهج",
    approachTitle: "من الحاجة إلى المعدات",
    approach: [
      {
        title: "فهم الحاجة",
        body: "تحديد الاستخدامات والقيود ومستوى الدقة المطلوب.",
      },
      {
        title: "اقتراح الحل",
        body: "اختيار وتحديد مواصفات معدات القياس الملائمة، بدعم من شريكنا Siemens.",
      },
      {
        title: "مرافقة التنفيذ",
        body: "دعم النشر والدمج السليم للمعدات في بيئتكم.",
      },
    ],
    ctaTitle: "مشروع معدات قياس أو هندسة يحتاج إلى تأطير؟",
    ctaLabel: "تحدثوا إلى خبير",
  },
} as const;

export type EnergieContent = (typeof packs)["fr"];

export function getEnergie(locale: Locale = "fr"): EnergieContent {
  return pickContent(packs, locale);
}

/** @deprecated prefer getEnergie(locale) */
export const energie = packs.fr;
