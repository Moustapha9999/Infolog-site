import type { Locale } from "@/lib/i18n/config";
import { pickContent } from "@/lib/i18n/content";

const packs = {
  fr: {
    title: "Affichage dynamique",
    shortTitle: "Affichage dynamique",
    breadcrumb: "Solutions IT & Digital / Affichage dynamique",
    description:
      "Affichage dynamique et IP/TV avec Infolog : diffusez messages, informations et programmes sur un ou plusieurs écrans — halls d'accueil, points de vente, hôpitaux, hôtels.",
    heroLead:
      "Diffusez le bon message, au bon moment, sur le bon écran — halls d'accueil, points de vente, zones d'attente et établissements.",
    introLabel: "Le concept",
    introTitle: "Informer, orienter, valoriser",
    intro: [
      {
        text: "L'affichage dynamique est une technologie qui consiste à diffuser sur un ou plusieurs écrans des messages et des informations provenant de sources vidéo ou informatiques. Cette technologie s'utilise principalement dans les halls d'accueil, les restaurants d'entreprise, les zones d'attente.",
      },
      {
        before: "L'",
        highlight: "IP/TV",
        after:
          " est une solution développée essentiellement pour les hôpitaux, les cliniques et les hôtels : il s'agit de diffuser des programmes TV ou VOD via un réseau informatique, avec un contrôle centralisé des contenus.",
      },
    ],
    duoLabel: "Usages & bénéfices",
    duoTitle: "Où déployer, pourquoi le faire",
    duoLead:
      "Des écrans au service de votre communication interne et externe — pour informer, orienter et renforcer l'image de votre organisation.",
    applications: {
      title: "Application",
      items: [
        "Lieux de vente",
        "Points d'attente",
        "Lieux d'accueil",
        "Maisons de retraite",
        "Cliniques, hôpitaux",
        "Hôtels",
        "Restaurants d'entreprise",
        "Zones d'attente et halls",
      ],
    },
    avantages: {
      title: "Avantages",
      items: [
        "Diffuser le message souhaité, au moment prévu, à l'endroit désiré",
        "Améliorer le trafic, la notoriété et l'image",
        "Divertir et réduire la perception du temps d'attente",
        "Orienter les visiteurs",
        "Afficher des consignes de sécurité",
        "Faciliter la diffusion de l'information au sein de l'entreprise",
        "Valoriser l'image de l'entreprise auprès des prospects et des partenaires",
        "Former les collaborateurs",
        "Planifier des réunions et des rendez-vous",
      ],
    },
    iptvLabel: "IP / TV",
    iptvTitle: "Programmes TV et VOD sur votre réseau",
    iptvBody:
      "Pour les hôpitaux, cliniques et hôtels, l'IP/TV permet de diffuser des programmes TV ou de la vidéo à la demande via le réseau informatique — une expérience maîtrisée, centralisée et adaptée à votre établissement.",
    ctaTitle: "Un projet d'affichage dynamique ou d'IP/TV à cadrer ?",
    ctaLabel: "Parler à un expert",
  },
  en: {
    title: "Digital signage",
    shortTitle: "Digital signage",
    breadcrumb: "IT & Digital Solutions / Digital signage",
    description:
      "Digital signage and IP/TV with Infolog: broadcast messages, information and programmes on one or more screens — lobbies, retail, hospitals, hotels.",
    heroLead:
      "Deliver the right message, at the right time, on the right screen — lobbies, points of sale, waiting areas and venues.",
    introLabel: "The concept",
    introTitle: "Inform, guide, highlight",
    intro: [
      {
        text: "Digital signage is a technology that broadcasts messages and information from video or IT sources on one or more screens. It is mainly used in reception halls, corporate restaurants and waiting areas.",
      },
      {
        before: "",
        highlight: "IP/TV",
        after:
          " is a solution developed mainly for hospitals, clinics and hotels: it broadcasts TV programmes or VOD over an IT network, with centralised content control.",
      },
    ],
    duoLabel: "Uses & benefits",
    duoTitle: "Where to deploy, why do it",
    duoLead:
      "Screens serving your internal and external communication — to inform, guide and strengthen your organisation’s image.",
    applications: {
      title: "Applications",
      items: [
        "Retail locations",
        "Waiting points",
        "Reception areas",
        "Retirement homes",
        "Clinics, hospitals",
        "Hotels",
        "Corporate restaurants",
        "Waiting areas and lobbies",
      ],
    },
    avantages: {
      title: "Benefits",
      items: [
        "Broadcast the intended message, at the planned time, in the desired place",
        "Improve traffic, awareness and brand image",
        "Entertain and reduce perceived waiting time",
        "Guide visitors",
        "Display safety instructions",
        "Make it easier to share information within the company",
        "Strengthen the company’s image with prospects and partners",
        "Train employees",
        "Schedule meetings and appointments",
      ],
    },
    iptvLabel: "IP / TV",
    iptvTitle: "TV programmes and VOD on your network",
    iptvBody:
      "For hospitals, clinics and hotels, IP/TV broadcasts TV programmes or on-demand video over the IT network — a controlled, centralised experience tailored to your venue.",
    ctaTitle: "A digital signage or IP/TV project to scope?",
    ctaLabel: "Talk to an expert",
  },
  ar: {
    title: "العرض الديناميكي",
    shortTitle: "العرض الديناميكي",
    breadcrumb: "حلول تكنولوجيا المعلومات والرقمنة / العرض الديناميكي",
    description:
      "العرض الديناميكي وIP/TV مع Infolog: بث رسائل ومعلومات وبرامج على شاشة أو أكثر — قاعات الاستقبال، نقاط البيع، المستشفيات، الفنادق.",
    heroLead:
      "انشروا الرسالة الصحيحة، في الوقت المناسب، على الشاشة المناسبة — قاعات الاستقبال، نقاط البيع، مناطق الانتظار والمنشآت.",
    introLabel: "المفهوم",
    introTitle: "إعلام، توجيه، إبراز",
    intro: [
      {
        text: "العرض الديناميكي تقنية تتمثل في بث رسائل ومعلومات من مصادر فيديو أو معلوماتية على شاشة أو أكثر. تُستخدم أساساً في قاعات الاستقبال ومطاعم المؤسسات ومناطق الانتظار.",
      },
      {
        before: "",
        highlight: "IP/TV",
        after:
          " حل طُوّر أساساً للمستشفيات والعيادات والفنادق: يتمثل في بث برامج تلفزيونية أو فيديو حسب الطلب عبر شبكة معلوماتية، مع تحكم مركزي بالمحتويات.",
      },
    ],
    duoLabel: "الاستخدامات والفوائد",
    duoTitle: "أين تنشرون، ولماذا",
    duoLead:
      "شاشات في خدمة تواصلكم الداخلي والخارجي — للإعلام والتوجيه وتعزيز صورة منظمتكم.",
    applications: {
      title: "التطبيقات",
      items: [
        "أماكن البيع",
        "نقاط الانتظار",
        "أماكن الاستقبال",
        "دور المسنين",
        "العيادات والمستشفيات",
        "الفنادق",
        "مطاعم المؤسسات",
        "مناطق الانتظار والقاعات",
      ],
    },
    avantages: {
      title: "المزايا",
      items: [
        "بث الرسالة المطلوبة، في الوقت المحدد، في المكان المرغوب",
        "تحسين الحركة والشهرة والصورة",
        "الترفيه وتقليل الإحساس بوقت الانتظار",
        "توجيه الزوار",
        "عرض تعليمات السلامة",
        "تسهيل نشر المعلومات داخل المؤسسة",
        "تعزيز صورة المؤسسة لدى العملاء المحتملين والشركاء",
        "تدريب المتعاونين",
        "تخطيط الاجتماعات والمواعيد",
      ],
    },
    iptvLabel: "IP / TV",
    iptvTitle: "برامج تلفزيونية وفيديو حسب الطلب على شبكتكم",
    iptvBody:
      "للمستشفيات والعيادات والفنادق، يتيح IP/TV بث برامج تلفزيونية أو فيديو حسب الطلب عبر الشبكة المعلوماتية — تجربة مُحكَمة ومركزية وملائمة لمنشأتكم.",
    ctaTitle: "مشروع عرض ديناميكي أو IP/TV يحتاج إلى تأطير؟",
    ctaLabel: "تحدثوا إلى خبير",
  },
} as const;

export type AffichageDynamiqueContent = (typeof packs)["fr"];

export function getAffichageDynamique(
  locale: Locale = "fr",
): AffichageDynamiqueContent {
  return pickContent(packs, locale);
}

/** @deprecated prefer getAffichageDynamique(locale) */
export const affichageDynamique = packs.fr;
