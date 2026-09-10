import type { Locale } from "@/lib/i18n/config";
import { pickContent } from "@/lib/i18n/content";

const packs = {
  fr: {
    title: "Progiciel ERP",
    subtitle: "progiciels de gestion intégrés",
    description:
      "Intégration de progiciels de gestion intégrés, dont SAP ERP, de l'analyse à la maintenance.",
    why: {
      title: "Pourquoi choisir un progiciel ERP ?",
      intro:
        "Dans une entreprise chaque service ou métier a son propre système d'informations, et donc pour faire le lien entre chaque système d'informations se produit l'une de ses situations :",
      points: [
        "double saisie des informations pour chaque système d'informations.",
        "L'entreprise fait développer des systèmes d'interfaçage entre chaque système d'informations.",
      ],
      conclusion:
        "Ce qui découle de ces deux situations est l'augmentation des erreurs de saisie, et d'incohérences entre chaque système d'informations. En cas d'interfaçage des données, les informations ne sont pas transmises en temps réel. Ces incohérences peuvent porter préjudice à une entreprises notamment au niveau d'un service logistique qui peut enregistrer plusieurs milliers d'euro d'écarts à cause des incohérences des systèmes d'informations.",
    },
    advantages: {
      title: "Avantages d'un ERP pour votre entreprise :",
      points: [
        "Éviter la multi-saisie de données entre vos différents systèmes d'informations",
        "Profiter d'un outil multilingue et multidevises adapté aux entreprises internationales",
        "Harmonise la circulation d'informations entre les différents services de votre entreprise",
        "Une meilleure coordination des services et du coup un meilleur suivi du processus de commande qui inclut la prise de commande, l'enregistrement d'une sortie de stock, l'expédition de la commande et l'émission d'une facture",
        "Une meilleure gestion et maîtrise des informations liées aux stocks de marchandise",
        "Harmonisation de votre SIRH, en particulier pour les entreprises qui gèrent de nombreuses entités.",
        "Nous intégrons la principale solution ERP du marché : SAP ERP.",
        "Notre expertise en intégration progiciel ERP (progiciels de gestion intégrés)",
      ],
    },
    approach: {
      intro:
        "En tant qu'expert en intégration de systèmes d'informations notre métier consiste à concevoir pour nos clients des solutions stables et évolutives dans le temps, grâce à des fournisseurs reconnus pour la qualité de leurs matériaux et progiciels de gestion. Notre approche en intégration de progiciels de gestion intégrés peut se résumer en 7 points :",
      points: [
        "analyse globale de vos métiers et de votre système d'informations ainsi que de leurs cohérences",
        "recommandation d'un cahier des charges pour une solution ERP adaptée à votre entreprise",
        "benchmark de solutions ERP et conduite d'appel d'offre",
        "mise en œuvre et intégration de la solution ERP",
        "tests unitaires et recette fonctionnelle",
        "conduite du changement et formation des utilisateurs à l'utilisation de l'ERP",
        "maintenance des installations et optimisation des solutions déployées",
      ],
    },
  },
  en: {
    title: "ERP software suite",
    subtitle: "integrated management software",
    description:
      "Integration of integrated management software suites, including SAP ERP, from analysis through to maintenance.",
    why: {
      title: "Why choose an ERP suite?",
      intro:
        "In a company, each department or business line has its own information system, and linking those systems typically leads to one of these situations:",
      points: [
        "double entry of information into each information system.",
        "The company develops interface systems between each information system.",
      ],
      conclusion:
        "Both situations increase data-entry errors and inconsistencies across information systems. When data is interfaced, information is not transmitted in real time. These inconsistencies can harm a business — especially a logistics department that may record thousands of euros in discrepancies due to inconsistent information systems.",
    },
    advantages: {
      title: "Benefits of an ERP for your company:",
      points: [
        "Avoid multi-entry of data across your different information systems",
        "Benefit from a multilingual, multi-currency tool suited to international companies",
        "Harmonise information flow between your company’s departments",
        "Better coordination of departments and stronger tracking of the order process — from order capture and stock issue recording to shipment and invoicing",
        "Better management and control of inventory-related information",
        "Harmonisation of your HRIS, especially for companies managing many entities.",
        "We integrate the leading ERP on the market: SAP ERP.",
        "Our expertise in ERP suite integration (integrated management software)",
      ],
    },
    approach: {
      intro:
        "As an information-systems integration expert, our work is to design stable, long-term solutions for our clients, relying on suppliers recognised for the quality of their hardware and management software. Our approach to integrating ERP suites can be summarised in 7 points:",
      points: [
        "overall analysis of your business lines and information system, and how they fit together",
        "recommendation of a specification for an ERP solution suited to your company",
        "ERP solution benchmarking and tender management",
        "implementation and integration of the ERP solution",
        "unit testing and functional acceptance",
        "change management and user training on the ERP",
        "maintenance of installations and optimisation of deployed solutions",
      ],
    },
  },
  ar: {
    title: "برمجية ERP",
    subtitle: "برمجيات إدارة متكاملة",
    description:
      "دمج برمجيات الإدارة المتكاملة، بما فيها SAP ERP، من التحليل إلى الصيانة.",
    why: {
      title: "لماذا اختيار برمجية ERP؟",
      intro:
        "في المؤسسة، لكل مصلحة أو نشاط نظام معلومات خاص به، وللربط بين أنظمة المعلومات تحدث إحدى هاتين الحالتين:",
      points: [
        "إدخال مزدوج للمعلومات في كل نظام معلومات.",
        "تقوم المؤسسة بتطوير أنظمة واجهات بين كل نظام معلومات.",
      ],
      conclusion:
        "ما ينتج عن هاتين الحالتين هو زيادة أخطاء الإدخال وعدم الاتساق بين أنظمة المعلومات. وعند ربط البيانات عبر واجهات، لا تُنقل المعلومات في الزمن الحقيقي. يمكن أن تلحق هذه التناقضات ضرراً بالمؤسسة، لا سيما في مصلحة لوجستية قد تسجّل آلاف اليورو من الفروقات بسبب عدم اتساق أنظمة المعلومات.",
    },
    advantages: {
      title: "مزايا ERP لمؤسستكم:",
      points: [
        "تجنب الإدخال المتعدد للبيانات بين أنظمة معلوماتكم المختلفة",
        "الاستفادة من أداة متعددة اللغات والعملات ملائمة للمؤسسات الدولية",
        "مواءمة تدفق المعلومات بين مصالح مؤسستكم",
        "تنسيق أفضل للمصالح وبالتالي متابعة أفضل لعملية الطلب التي تشمل استلام الطلب، تسجيل خروج المخزون، الشحن وإصدار الفاتورة",
        "إدارة أفضل والتحكم في المعلومات المرتبطة بمخزون البضائع",
        "مواءمة نظام معلومات الموارد البشرية لديكم، لا سيما للمؤسسات التي تدير كيانات عديدة.",
        "ندمج الحل الرئيسي في السوق: SAP ERP.",
        "خبرتنا في دمج برمجيات ERP (برمجيات الإدارة المتكاملة)",
      ],
    },
    approach: {
      intro:
        "بصفتنا خبراء في دمج أنظمة المعلومات، يتمثل عملنا في تصميم حلول مستقرة وقابلة للتطور لعملائنا، بفضل موردين معروفين بجودة معداتهم وبرمجيات الإدارة. يمكن تلخيص نهجنا في دمج برمجيات الإدارة المتكاملة في 7 نقاط:",
      points: [
        "تحليل شامل لأنشطتكم ونظام معلوماتكم ومدى اتساقها",
        "التوصية بدفتر شروط لحل ERP ملائم لمؤسستكم",
        "مقارنة حلول ERP وإدارة طلبات العروض",
        "تنفيذ ودمج حل ERP",
        "اختبارات وحدوية واستلام وظيفي",
        "قيادة التغيير وتدريب المستخدمين على استخدام ERP",
        "صيانة التثبيتات وتحسين الحلول المنشورة",
      ],
    },
  },
} as const;

export type ErpContent = (typeof packs)["fr"];

export function getErp(locale: Locale = "fr"): ErpContent {
  return pickContent(packs, locale);
}

/** @deprecated prefer getErp(locale) */
export const erp = packs.fr;
