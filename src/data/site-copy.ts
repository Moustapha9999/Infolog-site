import type { Locale } from "@/lib/i18n/config";
import { pickContent } from "@/lib/i18n/content";

export type SiteCopy = {
  description: string;
  about: { paragraphs: readonly string[] };
  mission: string;
  presenceText: string;
  foundedNote: string;
  country: string;
  region: string;
  presence: readonly string[];
};

const siteCopyPacks: Record<Locale, SiteCopy> = {
  fr: {
    country: "Mauritanie",
    region: "Mauritanie et Afrique",
    presence: ["Mauritanie", "Sénégal", "Côte d'Ivoire", "Mali"],
    description:
      "INFOLOG est une société mauritanienne spécialisée dans les prestations de services, la fourniture et la distribution de solutions destinées aux professionnels.",
    about: {
      paragraphs: [
        "INFOLOG est une société mauritanienne spécialisée dans les prestations de services, la fourniture et la distribution de solutions destinées aux professionnels.",
        "Forte de plus de 15 ans de présence en Mauritanie, INFOLOG accompagne les entreprises et les organisations dans plusieurs secteurs d'activité, notamment la téléphonie, l'électroménager, l'électricité, les centres de contacts (Call Center), la monétique, le National Cash, le BTP ainsi que la certification Pearson VUE et l'E-Learning.",
        "Aujourd'hui, INFOLOG poursuit son évolution en intégrant davantage les solutions technologiques et numériques afin d'accompagner ses partenaires dans leur développement et leur transformation digitale.",
      ],
    },
    mission:
      "Notre mission est de fournir aux entreprises en Mauritanie et en Afrique les outils technologiques nécessaires à leur développement. Nous accompagnons nos partenaires dans leur évolution numérique en proposant des solutions adaptées à leurs besoins et à leurs réalités.",
    presenceText:
      "INFOLOG s'appuie sur une présence en Mauritanie et dans plusieurs pays de la sous-région, notamment au Sénégal, en Côte d'Ivoire et au Mali. Cette implantation nous permet de mieux comprendre les enjeux des entreprises locales et de construire des solutions adaptées aux différents marchés africains.",
    foundedNote: "Présente depuis 15 ans sur la Mauritanie.",
  },
  en: {
    country: "Mauritania",
    region: "Mauritania and Africa",
    presence: ["Mauritania", "Senegal", "Côte d'Ivoire", "Mali"],
    description:
      "INFOLOG is a Mauritanian company specialized in services, supply and distribution of solutions for professionals.",
    about: {
      paragraphs: [
        "INFOLOG is a Mauritanian company specialized in services, supply and distribution of solutions for professionals.",
        "With more than 15 years of presence in Mauritania, INFOLOG supports companies and organizations across several sectors, including telephony, home appliances, electricity, contact centers (Call Center), payment systems, National Cash, construction, as well as Pearson VUE certification and e-learning.",
        "Today, INFOLOG continues to evolve by integrating more technology and digital solutions to support its partners in their growth and digital transformation.",
      ],
    },
    mission:
      "Our mission is to provide businesses in Mauritania and across Africa with the technology tools they need to grow. We support our partners in their digital journey with solutions tailored to their needs and realities.",
    presenceText:
      "INFOLOG draws on a presence in Mauritania and several countries in the sub-region, notably Senegal, Côte d'Ivoire and Mali. This footprint helps us better understand local business challenges and build solutions suited to different African markets.",
    foundedNote: "Present in Mauritania for 15 years.",
  },
  ar: {
    country: "موريتانيا",
    region: "موريتانيا وأفريقيا",
    presence: ["موريتانيا", "السنغال", "ساحل العاج", "مالي"],
    description:
      "INFOLOG شركة موريتانية متخصصة في تقديم الخدمات وتوريد وتوزيع الحلول الموجهة للمهنيين.",
    about: {
      paragraphs: [
        "INFOLOG شركة موريتانية متخصصة في تقديم الخدمات وتوريد وتوزيع الحلول الموجهة للمهنيين.",
        "بفضل أكثر من 15 عامًا من الحضور في موريتانيا، ترافق INFOLOG المؤسسات والمنظمات في عدة قطاعات، منها الهاتف والأجهزة المنزلية والكهرباء ومراكز الاتصال والدفع الإلكتروني وناشونال كاش والبناء والأشغال، إضافة إلى شهادات Pearson VUE والتعلم الإلكتروني.",
        "اليوم تواصل INFOLOG تطورها عبر دمج المزيد من الحلول التكنولوجية والرقمية لمرافقة شركائها في نموهم وتحولهم الرقمي.",
      ],
    },
    mission:
      "مهمتنا هي تزويد المؤسسات في موريتانيا وأفريقيا بالأدوات التكنولوجية اللازمة لتطورها. نرافق شركاءنا في مسارهم الرقمي عبر حلول ملائمة لاحتياجاتهم وواقعهم.",
    presenceText:
      "تعتمد INFOLOG على حضور في موريتانيا وفي عدة بلدان بالمنطقة، لا سيما السنغال وساحل العاج ومالي. يتيح لنا هذا التواجد فهم تحديات المؤسسات المحلية بشكل أفضل وبناء حلول مناسبة للأسواق الأفريقية المختلفة.",
    foundedNote: "حاضرة منذ 15 عامًا في موريتانيا.",
  },
};

const engagementPacks: Record<Locale, readonly string[]> = {
  fr: [
    "Conseil et expertise",
    "Écoute",
    "Réactivité",
    "Souplesse",
    "Professionnalisme",
    "Confidentialité",
  ],
  en: [
    "Advice and expertise",
    "Listening",
    "Responsiveness",
    "Flexibility",
    "Professionalism",
    "Confidentiality",
  ],
  ar: [
    "الاستشارة والخبرة",
    "الإنصات",
    "سرعة الاستجابة",
    "المرونة",
    "الاحترافية",
    "السرية",
  ],
};

const aboutServicesPacks: Record<Locale, readonly string[]> = {
  fr: [
    "Conseil systèmes d'information",
    "Vente et intégration de solutions informatiques",
    "Aménagement de Datacenter",
    "Sécurité & Audit informatique",
    "Câblage informatique et fibre optique",
    "Téléphonie IP",
    "Solutions de gestion et analyse de données",
    "Collaboration et productivité d'entreprise",
    "Gestion électronique de documents",
    "Automatisation de processus métier",
    "ERP et logiciel métier",
    "Gestion de la relation clientèle (CRM)",
  ],
  en: [
    "Information systems consulting",
    "Sale and integration of IT solutions",
    "Data center fit-out",
    "IT security & audit",
    "IT cabling and fiber optics",
    "IP telephony",
    "Data management and analytics solutions",
    "Enterprise collaboration and productivity",
    "Electronic document management",
    "Business process automation",
    "ERP and business software",
    "Customer relationship management (CRM)",
  ],
  ar: [
    "استشارات نظم المعلومات",
    "بيع وتكامل الحلول المعلوماتية",
    "تجهيز مراكز البيانات",
    "أمن المعلومات والتدقيق",
    "الكابلات المعلوماتية والألياف البصرية",
    "الهاتف عبر بروتوكول الإنترنت",
    "حلول إدارة وتحليل البيانات",
    "التعاون وإنتاجية المؤسسات",
    "الإدارة الإلكترونية للوثائق",
    "أتمتة العمليات المهنية",
    "ERP والبرمجيات المهنية",
    "إدارة علاقات العملاء (CRM)",
  ],
};

export function getSiteCopy(locale: Locale): SiteCopy {
  return pickContent(siteCopyPacks, locale);
}

export function getEngagements(locale: Locale): readonly string[] {
  return pickContent(engagementPacks, locale);
}

export function getAboutServices(locale: Locale): readonly string[] {
  return pickContent(aboutServicesPacks, locale);
}
