import type { Locale } from "@/lib/i18n/config";
import { pickContent } from "@/lib/i18n/content";

const packs = {
  fr: {
    title: "Gestion Électronique de Documents",
    shortTitle: "GED",
    breadcrumb: "Solutions IT & Digital / GED",
    description:
      "Infolog, intégrateur de solutions GED : dématérialisation, indexation, workflows de validation et archivage documentaire adaptés à votre organisation.",
    heroLead:
      "Retrouvez n'importe quel document en quelques secondes, sécurisez son cycle de vie, et libérez vos équipes de la paperasse.",
    introLabel: "Infolog, intégrateur de solutions GED",
    intro: [
      {
        before:
          "La gestion électronique des documents ne se résume pas à stocker des fichiers sur un serveur. Une GED bien pensée organise le",
        highlight: "cycle de vie complet",
        after:
          "de vos documents — capture, indexation, validation, partage, archivage — qu'ils soient structurés ou non structurés : contrats, factures, dossiers clients, plans techniques, correspondances.",
      },
      {
        text: "Infolog accompagne vos équipes dans la dématérialisation de vos processus documentaires, avec des solutions adaptées à votre volume réel de documents et à vos contraintes de conformité — pas une plateforme surdimensionnée que personne n'utilisera.",
      },
    ],
    compareLabel: "Pourquoi moderniser",
    compareTitle: "Du classeur papier à la donnée exploitable",
    compareLead:
      "Le papier ne disparaît pas du jour au lendemain — mais chaque processus encore géré à la main coûte du temps et fait courir un risque de perte ou d'erreur.",
    without: {
      label: "Sans GED",
      items: [
        "Documents dispersés entre postes, boîtes mail et classeurs",
        "Recherche d'un document = plusieurs minutes, parfois introuvable",
        "Validation d'un dossier par circulation papier ou email",
        "Aucune traçabilité de qui a consulté ou modifié quoi",
        "Risque de perte en cas d'incident (incendie, dégât des eaux, panne)",
      ],
    },
    with: {
      label: "Avec une GED Infolog",
      items: [
        "Un seul référentiel documentaire centralisé et sécurisé",
        "Recherche full-text instantanée par mot-clé ou métadonnée",
        "Circuits de validation numériques, avec relances automatiques",
        "Historique complet des accès et modifications (audit trail)",
        "Sauvegarde et archivage à valeur probante",
      ],
    },
    featuresLabel: "Fonctionnalités",
    featuresTitle: "Ce que la GED apporte concrètement",
    features: [
      "Capture & numérisation intelligente",
      "Indexation & classement automatique",
      "Recherche full-text instantanée",
      "Workflows de validation métier",
      "Archivage légal & valeur probante",
      "Droits d'accès par utilisateur / service",
      "Traçabilité complète des actions",
      "Intégration à vos outils existants (ERP, messagerie)",
    ],
    ctaTitle: "Envie de dématérialiser vos processus documentaires ?",
    ctaLabel: "Parler à un expert",
  },
  en: {
    title: "Electronic Document Management",
    shortTitle: "EDM",
    breadcrumb: "IT & Digital Solutions / EDM",
    description:
      "Infolog, integrator of EDM solutions: digitisation, indexing, validation workflows and document archiving tailored to your organisation.",
    heroLead:
      "Find any document in seconds, secure its lifecycle, and free your teams from paperwork.",
    introLabel: "Infolog, EDM solutions integrator",
    intro: [
      {
        before:
          "Electronic document management is more than storing files on a server. A well-designed EDM organises the",
        highlight: "full lifecycle",
        after:
          "of your documents — capture, indexing, validation, sharing, archiving — whether structured or unstructured: contracts, invoices, client files, technical plans, correspondence.",
      },
      {
        text: "Infolog supports your teams in digitising document processes, with solutions matched to your real document volume and compliance constraints — not an oversized platform no one will use.",
      },
    ],
    compareLabel: "Why modernise",
    compareTitle: "From paper folders to usable data",
    compareLead:
      "Paper does not disappear overnight — but every process still handled manually costs time and raises the risk of loss or error.",
    without: {
      label: "Without EDM",
      items: [
        "Documents scattered across desktops, mailboxes and filing cabinets",
        "Finding a document takes minutes — sometimes it is nowhere to be found",
        "File validation by paper circulation or email",
        "No traceability of who viewed or changed what",
        "Risk of loss in case of incident (fire, water damage, outage)",
      ],
    },
    with: {
      label: "With an Infolog EDM",
      items: [
        "A single centralised, secured document repository",
        "Instant full-text search by keyword or metadata",
        "Digital validation workflows with automatic reminders",
        "Full history of access and changes (audit trail)",
        "Backup and evidential archiving",
      ],
    },
    featuresLabel: "Features",
    featuresTitle: "What EDM delivers in practice",
    features: [
      "Intelligent capture & scanning",
      "Automatic indexing & classification",
      "Instant full-text search",
      "Business validation workflows",
      "Legal archiving & evidential value",
      "Access rights by user / department",
      "Full action traceability",
      "Integration with your existing tools (ERP, messaging)",
    ],
    ctaTitle: "Ready to digitise your document processes?",
    ctaLabel: "Talk to an expert",
  },
  ar: {
    title: "الإدارة الإلكترونية للوثائق",
    shortTitle: "GED",
    breadcrumb: "حلول تكنولوجيا المعلومات والرقمنة / الإدارة الإلكترونية للوثائق",
    description:
      "Infolog، مدمج حلول الإدارة الإلكترونية للوثائق: رقمنة، فهرسة، مسارات اعتماد وأرشفة وثائقية ملائمة لمنظمتكم.",
    heroLead:
      "اعثروا على أي وثيقة في ثوانٍ، أمّنوا دورة حياتها، وحرّروا فرقكم من الأوراق.",
    introLabel: "Infolog، مدمج حلول الإدارة الإلكترونية للوثائق",
    intro: [
      {
        before:
          "الإدارة الإلكترونية للوثائق لا تقتصر على تخزين الملفات على خادم. نظام GED محكم ينظّم",
        highlight: "دورة الحياة الكاملة",
        after:
          "لوثائقكم — التقاط، فهرسة، اعتماد، مشاركة، أرشفة — سواء كانت منظمة أو غير منظمة: عقود، فواتير، ملفات عملاء، مخططات تقنية، مراسلات.",
      },
      {
        text: "ترافق Infolog فرقكم في رقمنة عملياتكم الوثائقية، بحلول ملائمة لحجمكم الفعلي من الوثائق ولقيود الامتثال لديكم — لا منصة مبالغ فيها لن يستخدمها أحد.",
      },
    ],
    compareLabel: "لماذا التحديث",
    compareTitle: "من المجلد الورقي إلى البيانات القابلة للاستغلال",
    compareLead:
      "الورق لا يختفي بين ليلة وضحاها — لكن كل عملية ما زالت تُدار يدوياً تكلف وقتاً وتعرّضكم لخطر الفقدان أو الخطأ.",
    without: {
      label: "بدون GED",
      items: [
        "وثائق مشتتة بين الأجهزة وصناديق البريد والمجلدات",
        "البحث عن وثيقة = دقائق، وأحياناً لا تُعثر عليها",
        "اعتماد ملف عبر تداول ورقي أو بريد إلكتروني",
        "لا تتبع لمن اطّلع أو عدّل ماذا",
        "خطر الفقدان عند حادث (حريق، تسرب مياه، عطل)",
      ],
    },
    with: {
      label: "مع GED من Infolog",
      items: [
        "مرجع وثائقي واحد مركزي وآمن",
        "بحث نصي كامل فوري بالكلمة المفتاحية أو البيانات الوصفية",
        "مسارات اعتماد رقمية مع تذكيرات تلقائية",
        "سجل كامل للوصول والتعديلات (audit trail)",
        "نسخ احتياطي وأرشفة ذات قيمة إثباتية",
      ],
    },
    featuresLabel: "الوظائف",
    featuresTitle: "ما تقدمه الإدارة الإلكترونية للوثائق عملياً",
    features: [
      "التقاط ومسح ضوئي ذكي",
      "فهرسة وتصنيف تلقائي",
      "بحث نصي كامل فوري",
      "مسارات اعتماد مهنية",
      "أرشفة قانونية وقيمة إثباتية",
      "حقوق وصول حسب المستخدم / المصلحة",
      "تتبع كامل للإجراءات",
      "تكامل مع أدواتكم الحالية (ERP، البريد)",
    ],
    ctaTitle: "ترغبون في رقمنة عملياتكم الوثائقية؟",
    ctaLabel: "تحدثوا إلى خبير",
  },
} as const;

export type GedContent = (typeof packs)["fr"];

export function getGed(locale: Locale = "fr"): GedContent {
  return pickContent(packs, locale);
}

/** @deprecated prefer getGed(locale) */
export const ged = packs.fr;
