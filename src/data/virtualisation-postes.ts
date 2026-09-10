import type { Locale } from "@/lib/i18n/config";
import { pickContent } from "@/lib/i18n/content";

const packs = {
  fr: {
    title: "Virtualisation de postes et d'applications",
    shortTitle: "Virtualisation postes",
    breadcrumb:
      "Solutions IT & Digital / Virtualisation de postes et d'applications",
    description:
      "Virtualisation de postes et d'applications avec Infolog : RDS, Citrix, Systancia — centralisation serveur, terminaux légers et publication d'applications.",
    heroLead:
      "Centralisez l'exécution des postes et applications sur vos serveurs, et laissez vos collaborateurs y accéder depuis n'importe quel terminal, en toute sécurité.",
    introLabel: "Le concept",
    intro: [
      {
        before:
          "Plutôt que d'installer et de maintenir chaque application sur chaque poste, la virtualisation de postes et d'applications",
        highlight: "centralise l'exécution sur vos serveurs",
        after:
          " : vos collaborateurs accèdent à leur environnement de travail ou à une application publiée depuis un terminal léger, un PC classique ou à distance, sans que les données ne transitent ou ne résident jamais sur le poste lui-même.",
      },
      {
        before: "Cette approche s'appuie sur des solutions reconnues comme",
        highlights: ["RDS (Microsoft)", "Citrix", "Systancia"],
        after:
          ", qui permettent de publier des applications ou des postes complets, tout en gardant un contrôle centralisé sur les mises à jour, la sécurité et les droits d'accès.",
      },
    ],
    tools: ["RDS", "Citrix", "Systancia"],
    duoLabel: "Bénéfices & méthode",
    duoTitle: "Les avantages, notre savoir-faire",
    duoLead:
      "Des postes plus simples à administrer, des données qui restent en sécurité côté serveur — et une mise en œuvre encadrée de bout en bout.",
    avantages: {
      title: "Les avantages",
      items: [
        "Réduction des coûts d'infrastructure",
        "Économies d'énergie",
        "Sécurisation des données sur les postes",
        "Rapidité de déploiement",
        "Simplification de l'administration",
      ],
    },
    savoirFaire: {
      title: "Nos savoir-faire",
      items: [
        "Implémentation de la solution",
        "Déploiement en mode projet",
        "Mise en œuvre des terminaux légers",
        "Publication d'applications",
        "Maîtrise des outils (RDS, Citrix, Systancia)",
      ],
    },
    ctaTitle: "Un projet de virtualisation de postes à cadrer ?",
    ctaLabel: "Parler à un expert",
  },
  en: {
    title: "Desktop and application virtualisation",
    shortTitle: "Desktop virtualisation",
    breadcrumb:
      "IT & Digital Solutions / Desktop and application virtualisation",
    description:
      "Desktop and application virtualisation with Infolog: RDS, Citrix, Systancia — server centralisation, thin clients and application publishing.",
    heroLead:
      "Centralise desktop and application execution on your servers, and let employees access them securely from any terminal.",
    introLabel: "The concept",
    intro: [
      {
        before:
          "Rather than installing and maintaining every application on every workstation, desktop and application virtualisation",
        highlight: "centralises execution on your servers",
        after:
          ": employees access their workspace or a published application from a thin client, a standard PC or remotely, without data ever travelling to or residing on the endpoint itself.",
      },
      {
        before: "This approach relies on recognised solutions such as",
        highlights: ["RDS (Microsoft)", "Citrix", "Systancia"],
        after:
          ", which let you publish applications or full desktops while keeping centralised control over updates, security and access rights.",
      },
    ],
    tools: ["RDS", "Citrix", "Systancia"],
    duoLabel: "Benefits & method",
    duoTitle: "The benefits, our expertise",
    duoLead:
      "Workstations that are simpler to administer, data that stays secure on the server side — and end-to-end delivery under control.",
    avantages: {
      title: "The benefits",
      items: [
        "Lower infrastructure costs",
        "Energy savings",
        "Securing data on endpoints",
        "Faster deployment",
        "Simplified administration",
      ],
    },
    savoirFaire: {
      title: "Our expertise",
      items: [
        "Solution implementation",
        "Project-mode deployment",
        "Thin client rollout",
        "Application publishing",
        "Mastery of the tools (RDS, Citrix, Systancia)",
      ],
    },
    ctaTitle: "A desktop virtualisation project to scope?",
    ctaLabel: "Talk to an expert",
  },
  ar: {
    title: "افتراضية محطات العمل والتطبيقات",
    shortTitle: "افتراضية المحطات",
    breadcrumb:
      "حلول تكنولوجيا المعلومات والرقمنة / افتراضية محطات العمل والتطبيقات",
    description:
      "افتراضية محطات العمل والتطبيقات مع Infolog: RDS، Citrix، Systancia — مركزة على الخادم، طرفيات خفيفة ونشر التطبيقات.",
    heroLead:
      "مركزوا تشغيل المحطات والتطبيقات على خوادمكم، ودعوا المتعاونين يصلون إليها من أي طرفية بأمان.",
    introLabel: "المفهوم",
    intro: [
      {
        before:
          "بدلاً من تثبيت وصيانة كل تطبيق على كل محطة، تقوم افتراضية المحطات والتطبيقات بـ",
        highlight: "مركزة التشغيل على خوادمكم",
        after:
          ": يصل المتعاونون إلى بيئة عملهم أو إلى تطبيق منشور من طرفية خفيفة أو حاسوب عادي أو عن بُعد، دون أن تمر البيانات أو تستقر على المحطة نفسها.",
      },
      {
        before: "يعتمد هذا النهج على حلول معترف بها مثل",
        highlights: ["RDS (Microsoft)", "Citrix", "Systancia"],
        after:
          "، التي تتيح نشر تطبيقات أو محطات كاملة مع الحفاظ على تحكم مركزي في التحديثات والأمن وحقوق الوصول.",
      },
    ],
    tools: ["RDS", "Citrix", "Systancia"],
    duoLabel: "الفوائد والمنهج",
    duoTitle: "المزايا، خبرتنا",
    duoLead:
      "محطات أسهل في الإدارة، وبيانات تبقى آمنة على جانب الخادم — وتنفيذ مُحكَم من طرف إلى طرف.",
    avantages: {
      title: "المزايا",
      items: [
        "تخفيض تكاليف البنية التحتية",
        "توفير الطاقة",
        "تأمين البيانات على المحطات",
        "سرعة النشر",
        "تبسيط الإدارة",
      ],
    },
    savoirFaire: {
      title: "خبراتنا",
      items: [
        "تنفيذ الحل",
        "النشر بأسلوب المشروع",
        "تنفيذ الطرفيات الخفيفة",
        "نشر التطبيقات",
        "إتقان الأدوات (RDS، Citrix، Systancia)",
      ],
    },
    ctaTitle: "مشروع افتراضية محطات يحتاج إلى تأطير؟",
    ctaLabel: "تحدثوا إلى خبير",
  },
} as const;

export type VirtualisationPostesContent = (typeof packs)["fr"];

export function getVirtualisationPostes(
  locale: Locale = "fr",
): VirtualisationPostesContent {
  return pickContent(packs, locale);
}

/** @deprecated prefer getVirtualisationPostes(locale) */
export const virtualisationPostes = packs.fr;
