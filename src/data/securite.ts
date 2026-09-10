import type { Locale } from "@/lib/i18n/config";
import { pickContent } from "@/lib/i18n/content";

const packs = {
  fr: {
    title: "Sécurité informatique & réseau d'entreprise",
    shortTitle: "Sécurité",
    breadcrumb: "Solutions IT & Digital / Sécurité informatique",
    description:
      "Infolog conçoit et déploie des dispositifs de sécurité adaptés à votre organisation : pare-feu, antivirus, filtrage web, droits d'accès et supervision.",
    heroLead:
      "Pare-feu managé, antivirus, filtrage web et supervision continue — une stratégie de sécurité pensée pour vos usages réels, pas un pack générique.",
    introBefore:
      "Protéger votre infrastructure informatique n'est plus une option secondaire : virus, tentatives d'intrusion, pertes de données ou négligence des utilisateurs peuvent immobiliser une entreprise en quelques heures.",
    introHighlight:
      "Infolog conçoit et déploie des dispositifs de sécurité adaptés à la taille et aux enjeux réels de votre organisation —",
    introAfter:
      "pas des solutions génériques copiées d'un cahier des charges standard.",
    approcheLabel: "Approche",
    approcheTitle: "Deux volets, une seule stratégie",
    volets: [
      {
        id: "intrusions",
        title: "Protégez votre entreprise des intrusions et des pertes de données",
        body: "Nos ingénieurs sécurisent à la fois vos matériels et vos données grâce à un socle de protections éprouvées : pare-feu managé, antivirus managé, filtrage web et politique de droits d'accès sur vos fichiers partagés. Chaque dispositif est configuré selon votre activité réelle — un cabinet comptable et un chantier BTP n'ont pas les mêmes surfaces d'exposition.",
      },
      {
        id: "strategie",
        title: "Mise en place d'une stratégie de sécurité proactive",
        body: "Au-delà des outils, Infolog vous accompagne dans une démarche de sécurité anticipative : audit de vos vulnérabilités actuelles, définition d'une politique de sécurité adaptée à vos usages, sensibilisation de vos équipes — le facteur humain reste la première porte d'entrée des incidents — et supervision continue pour détecter une anomalie avant qu'elle ne devienne un incident.",
      },
    ],
    concreteTitle: "Ce que nous mettons en place concrètement",
    concrete: [
      "Pare-feu managé et segmentation réseau",
      "Antivirus managé sur l'ensemble du parc informatique",
      "Filtrage web et contrôle des accès Internet",
      "Politique de droits d'accès sur vos fichiers et dossiers partagés",
      "Sauvegardes régulières et plan de reprise en cas d'incident",
      "Supervision et alertes en continu",
    ],
    techTitle: "Technologies et partenaires",
    technologies: [
      {
        name: "Cisco Meraki",
        description:
          "Infrastructure réseau administrée dans le cloud (Wi-Fi, switch, sécurité), pour une supervision centralisée de votre réseau d'entreprise.",
      },
      {
        name: "Cisco ASA",
        description:
          "Pare-feu matériel de nouvelle génération, référence du marché pour bloquer les intrusions à la frontière de votre réseau.",
      },
      {
        name: "McAfee",
        description:
          "Protection antivirus et anti-malware managée, déployée et mise à jour sur l'ensemble de votre parc.",
      },
      {
        name: "WAF",
        fullName: "Web Application Firewall",
        description:
          "Protection dédiée de vos applications web contre les attaques ciblées (injections, usurpations, exploitation de failles).",
      },
    ],
    ctaTitle: "Sécuriser votre infrastructure ?",
    ctaLead:
      "Parlons de vos enjeux, de votre parc et du niveau de protection adapté à votre activité.",
  },
  en: {
    title: "IT & enterprise network security",
    shortTitle: "Security",
    breadcrumb: "IT & Digital Solutions / IT security",
    description:
      "Infolog designs and deploys security measures tailored to your organisation: firewall, antivirus, web filtering, access rights and monitoring.",
    heroLead:
      "Managed firewall, antivirus, web filtering and continuous monitoring — a security strategy built for your real usage, not a generic pack.",
    introBefore:
      "Protecting your IT infrastructure is no longer optional: viruses, intrusion attempts, data loss or user negligence can bring a business to a halt within hours.",
    introHighlight:
      "Infolog designs and deploys security measures sized to your organisation’s real stakes —",
    introAfter: "not generic solutions copied from a standard specification.",
    approcheLabel: "Approach",
    approcheTitle: "Two pillars, one strategy",
    volets: [
      {
        id: "intrusions",
        title: "Protect your business from intrusions and data loss",
        body: "Our engineers secure both your hardware and your data with a proven protection stack: managed firewall, managed antivirus, web filtering and access-rights policies on shared files. Each measure is configured for your real activity — an accounting firm and a construction site do not share the same exposure surface.",
      },
      {
        id: "strategie",
        title: "Building a proactive security strategy",
        body: "Beyond tools, Infolog supports you with an anticipatory security approach: auditing current vulnerabilities, defining a security policy suited to your usage, raising team awareness — the human factor remains the main entry point for incidents — and continuous monitoring to detect an anomaly before it becomes an incident.",
      },
    ],
    concreteTitle: "What we put in place in practice",
    concrete: [
      "Managed firewall and network segmentation",
      "Managed antivirus across the entire IT estate",
      "Web filtering and Internet access control",
      "Access-rights policy on shared files and folders",
      "Regular backups and an incident recovery plan",
      "Continuous monitoring and alerts",
    ],
    techTitle: "Technologies and partners",
    technologies: [
      {
        name: "Cisco Meraki",
        description:
          "Cloud-managed network infrastructure (Wi-Fi, switch, security) for centralised supervision of your enterprise network.",
      },
      {
        name: "Cisco ASA",
        description:
          "Next-generation hardware firewall, a market reference for blocking intrusions at the edge of your network.",
      },
      {
        name: "McAfee",
        description:
          "Managed antivirus and anti-malware protection, deployed and updated across your entire estate.",
      },
      {
        name: "WAF",
        fullName: "Web Application Firewall",
        description:
          "Dedicated protection for your web applications against targeted attacks (injections, impersonation, exploit of vulnerabilities).",
      },
    ],
    ctaTitle: "Secure your infrastructure?",
    ctaLead:
      "Let’s discuss your stakes, your estate and the protection level suited to your activity.",
  },
  ar: {
    title: "أمن المعلومات وشبكات المؤسسات",
    shortTitle: "الأمن",
    breadcrumb: "حلول تكنولوجيا المعلومات والرقمنة / أمن المعلومات",
    description:
      "تصمم Infolog وتنشر أجهزة أمنية ملائمة لمنظمتكم: جدار ناري، مضاد فيروسات، تصفية ويب، حقوق الوصول والمراقبة.",
    heroLead:
      "جدار ناري مُدار، مضاد فيروسات، تصفية ويب ومراقبة مستمرة — استراتيجية أمن مبنية على استخداماتكم الفعلية، لا حزمة عامة.",
    introBefore:
      "حماية بنيتكم التحتية المعلوماتية لم تعد خياراً ثانوياً: الفيروسات ومحاولات الاختراق وفقدان البيانات أو إهمال المستخدمين يمكن أن توقّف مؤسسة في ساعات.",
    introHighlight:
      "تصمم Infolog وتنشر أجهزة أمنية ملائمة لحجم منظمتكم وتحدياتها الفعلية —",
    introAfter: "وليس حلولاً عامة منسوخة من دفتر شروط قياسي.",
    approcheLabel: "المنهج",
    approcheTitle: "محوران، استراتيجية واحدة",
    volets: [
      {
        id: "intrusions",
        title: "احموا مؤسستكم من الاختراقات وفقدان البيانات",
        body: "يؤمّن مهندسونا معداتكم وبياناتكم معاً عبر أساس حماية مُجرَّب: جدار ناري مُدار، مضاد فيروسات مُدار، تصفية ويب وسياسة حقوق وصول على ملفاتكم المشتركة. يُضبط كل جهاز وفق نشاطكم الفعلي — مكتب محاسبة وموقع بناء لا يملكان نفس سطح التعرض.",
      },
      {
        id: "strategie",
        title: "وضع استراتيجية أمن استباقية",
        body: "إلى جانب الأدوات، ترافقكم Infolog في نهج أمني استباقي: تدقيق الثغرات الحالية، تعريف سياسة أمن ملائمة لاستخداماتكم، توعية فرقكم — العامل البشري يبقى الباب الأول للحوادث — ومراقبة مستمرة لاكتشاف الشذوذ قبل أن يتحول إلى حادث.",
      },
    ],
    concreteTitle: "ما نضعه موضع التنفيذ عملياً",
    concrete: [
      "جدار ناري مُدار وتقسيم الشبكة",
      "مضاد فيروسات مُدار على كامل الحظيرة المعلوماتية",
      "تصفية الويب ومراقبة الوصول إلى الإنترنت",
      "سياسة حقوق الوصول على الملفات والمجلدات المشتركة",
      "نسخ احتياطية منتظمة وخطة استعادة عند الحوادث",
      "مراقبة وتنبيهات مستمرة",
    ],
    techTitle: "التقنيات والشركاء",
    technologies: [
      {
        name: "Cisco Meraki",
        description:
          "بنية شبكية تُدار في السحابة (Wi-Fi، محول، أمن) لمراقبة مركزية لشبكة مؤسستكم.",
      },
      {
        name: "Cisco ASA",
        description:
          "جدار ناري مادي من الجيل الجديد، مرجع في السوق لصد الاختراقات على حدود شبكتكم.",
      },
      {
        name: "McAfee",
        description:
          "حماية مضاد فيروسات وبرمجيات خبيثة مُدارة، تُنشر وتُحدَّث على كامل حظيرتكم.",
      },
      {
        name: "WAF",
        fullName: "Web Application Firewall",
        description:
          "حماية مخصصة لتطبيقاتكم على الويب ضد الهجمات المستهدفة (حقن، انتحال، استغلال ثغرات).",
      },
    ],
    ctaTitle: "تأمين بنيتكم التحتية؟",
    ctaLead:
      "لنتحدث عن تحدياتكم وحظيرتكم ومستوى الحماية الملائم لنشاطكم.",
  },
} as const;

export type SecuriteContent = (typeof packs)["fr"];

export function getSecurite(locale: Locale = "fr"): SecuriteContent {
  return pickContent(packs, locale);
}

/** @deprecated prefer getSecurite(locale) */
export const securite = packs.fr;
