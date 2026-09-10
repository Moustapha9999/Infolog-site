import type { Locale } from "@/lib/i18n/config";
import { pickContent } from "@/lib/i18n/content";

const packs = {
  fr: {
    title: "Infogérance",
    description:
      "Formules d'assistance pour vous accompagner dans la gestion de votre infrastructure informatique, sur la base d'un forfait mensuel ou annuel.",
    paragraphs: [
      "INFOLOG, vous propose diverses formules d'assistance dans le but de vous accompagner jour après jour dans la gestion de votre infrastructure informatique.",
      "Sur base d'un forfait mensuel ou annuel, nos ingénieurs seront à votre écoute et à votre disposition pour vous aider à maintenir une infrastructure la plus performante possible, sans faille pour les besoins de votre entreprise.",
      "Ces formules à la carte, toujours basées sur un « Service Level Agreement », s'adaptent parfaitement à vos besoins : contrôles quotidiens de vos sauvegardes, assistance ponctuelle une fois par semaine ou prise en charge totale ou partielle de vos activités informatiques. Notre mission est de permettre à votre organisation de se concentrer sur son cœur de métier tandis que nos experts agissent en complément de vos ressources informatiques internes.",
    ],
    servicesTitle: "Services",
    servicesIntro:
      "Une gamme de services flexibles visant à alléger le fardeau de vos activités quotidiennes, délivrés sur site ou à distance, mais toujours parfaitement intégrés dans votre chaîne de valeur.",
    services: [
      "Service de bout-en-bout basé sur un SLA",
      "Gestion de service basé ITIL",
      "Garantie de disponibilité",
      "Gestion des événements et contrôle",
      "Gestion du niveau de service et reporting",
      "Support en continu grâce au Service Desk",
      "Solutions partagées et dédiées",
    ],
  },
  en: {
    title: "Managed IT services",
    description:
      "Support packages to help you manage your IT infrastructure, based on a monthly or annual subscription.",
    paragraphs: [
      "INFOLOG offers a range of support packages designed to assist you day after day in managing your IT infrastructure.",
      "On a monthly or annual subscription basis, our engineers are available to help you keep your infrastructure as high-performing and reliable as possible for your business needs.",
      "These à-la-carte packages, always based on a Service Level Agreement, adapt to your needs: daily backup checks, weekly ad-hoc support, or full or partial management of your IT activities. Our mission is to let your organisation focus on its core business while our experts complement your internal IT resources.",
    ],
    servicesTitle: "Services",
    servicesIntro:
      "A flexible range of services designed to ease the burden of your day-to-day operations, delivered on-site or remotely, always fully integrated into your value chain.",
    services: [
      "End-to-end service based on an SLA",
      "ITIL-based service management",
      "Availability guarantee",
      "Event management and monitoring",
      "Service level management and reporting",
      "Continuous support through the Service Desk",
      "Shared and dedicated solutions",
    ],
  },
  ar: {
    title: "إدارة البنية التحتية المعلوماتية",
    description:
      "باقات مساعدة لمرافقتكم في إدارة بنيتكم التحتية المعلوماتية، على أساس اشتراك شهري أو سنوي.",
    paragraphs: [
      "تقترح INFOLOG باقات مساعدة متنوعة لمرافقتكم يوماً بعد يوم في إدارة بنيتكم التحتية المعلوماتية.",
      "على أساس اشتراك شهري أو سنوي، يكون مهندسونا في خدمتكم لمساعدتكم على الحفاظ على بنية تحتية عالية الأداء وموثوقة قدر الإمكان وفق احتياجات مؤسستكم.",
      "هذه الباقات حسب الطلب، المبنية دائماً على « Service Level Agreement »، تتكيف مع احتياجاتكم: مراقبة يومية للنسخ الاحتياطية، مساعدة دورية مرة في الأسبوع، أو تولي كلي أو جزئي لأنشطتكم المعلوماتية. مهمتنا تمكين منظمتكم من التركيز على جوهر أعمالها بينما يعمل خبراؤنا مكمّلين لمواردكم المعلوماتية الداخلية.",
    ],
    servicesTitle: "الخدمات",
    servicesIntro:
      "مجموعة خدمات مرنة تهدف إلى تخفيف عبء أنشطتكم اليومية، تُقدَّم في الموقع أو عن بُعد، مع اندماج كامل في سلسلة القيمة لديكم.",
    services: [
      "خدمة من طرف إلى طرف مبنية على SLA",
      "إدارة خدمات وفق ITIL",
      "ضمان التوفر",
      "إدارة الأحداث والمراقبة",
      "إدارة مستوى الخدمة وإعداد التقارير",
      "دعم مستمر عبر Service Desk",
      "حلول مشتركة ومخصصة",
    ],
  },
} as const;

export type InfogeranceContent = (typeof packs)["fr"];

export function getInfogerance(locale: Locale = "fr"): InfogeranceContent {
  return pickContent(packs, locale);
}

/** @deprecated prefer getInfogerance(locale) */
export const infogerance = packs.fr;
