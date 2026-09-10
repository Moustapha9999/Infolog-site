import type { Locale } from "@/lib/i18n/config";
import { pickContent } from "@/lib/i18n/content";

const packs = {
  fr: {
    title: "Data Center",
    description:
      "Modernisation et simplification du datacenter. INFOLOG accompagne les entreprises avec plus de 15 ans d'expérience dans les infrastructures virtualisées complexes.",
    paragraphs: [
      "Le data center doit être modernisé pour répondre aux enjeux de l'entreprise et simplifier son utilisation tout en garantissant les performances attendues. Le cloud n'étant pas une solution globale, l'infrastructure sur site doit évoluer. Le centre de données « sans contact » est un rêve, mais l'interopérabilité de ces équipements et les coûts d'exploitation cachés ont soulevé des questions. Cependant, le datacenter ne doit pas devenir un marché de niche pour les experts, mais réduira le « time to market » des applications pour sa raison d'existence. Toutes ces données structurées ou non structurées doivent être hébergées, sauvegardées, mises à jour (cycle de vie) et améliorées. Nous parlons maintenant de données (données influentes).",
      "Le groupe INFOLOG simplifie le datacenter et travaille avec des partenaires pour vous accompagner.",
    ],
    partnersTitle: "Partenaires",
    atoutsTitle: "Atouts",
    atouts: [
      "Plus de 15 ans d'expérience dans la mise en œuvre d'infrastructures virtualisée complexes, de solides références",
      "Une amélioration globale de la performance pour apporter un meilleur service aux utilisateurs : rapidité, fiabilité, continuité de service, ....",
      "Une simplification de l'administration pour le service informatique interne : supervision proactive avec alertes, gestion des incidents, gestion des versions systèmes et des firmwares, ....",
      "Une grande flexibilité pour prendre en compte les besoins nouveaux et futur : ajout de serveur ou de capacité de stockage, test de version logiciel, consolidation de serveur, ...",
      "Une sécurité renforcée sur les sauvegardes des données ou des programmes mais aussi sur le cloisonnement des différents serveurs de l'infrastructure pour autoriser les accès.",
      "Une mise en œuvre avérée de solutions de reprise en cas d'arrêt total ou de continuité d'activité (PCA/PRA).",
    ],
    solutionTitle: "Notre Solution",
    solutions: [
      {
        title: "Cœur de réseau",
        intro:
          "Socle d'interconnexion pour faire circuler les flux de façon fiable, structurée et sécurisée.",
        icon: "network",
      },
      {
        title: "Serveurs physiques ou virtuels",
        intro:
          "Dimensionnement et déploiement de serveurs adaptés à vos charges, en physique ou en virtualisation.",
        icon: "server",
      },
      {
        title: "Baies de stockage",
        intro:
          "Stockage centralisé pour héberger, partager et faire évoluer vos volumes de données.",
        icon: "storage",
      },
      {
        title: "Solution de sauvegarde",
        intro:
          "Protection des données et des systèmes avec des sauvegardes planifiées et restaurables.",
        icon: "backup",
      },
      {
        title: "Hyperconvergence",
        intro:
          "Regroupement du calcul, du stockage et du réseau pour simplifier l'infrastructure.",
        icon: "hyper",
      },
      {
        title: "Sécurité",
        intro:
          "Mesures de protection des accès, des flux et des environnements critiques du datacenter.",
        icon: "security",
      },
      {
        title: "PRA/PCA",
        intro:
          "Dispositifs de reprise et de continuité d'activité en cas d'incident majeur.",
        icon: "pra",
      },
      {
        title: "Services associés",
        intro:
          "Transfert de compétences, formation et services managés pour accompagner vos équipes.",
        icon: "services",
      },
    ],
    partners: [
      { name: "Synology", src: "/brand/data-center/partners/synology.svg" },
      { name: "Nutanix", src: "/brand/data-center/partners/nutanix.svg" },
      { name: "Dell EMC", src: "/brand/data-center/partners/dell.svg" },
      { name: "NetApp", src: "/brand/data-center/partners/netapp.svg" },
      {
        name: "Hewlett Packard Enterprise",
        src: "/brand/data-center/partners/hpe.png",
      },
      { name: "Lenovo", src: "/brand/data-center/partners/lenovo.png" },
    ],
  },
  en: {
    title: "Data Center",
    description:
      "Data center modernization and simplification. INFOLOG supports organisations with more than 15 years of experience in complex virtualised infrastructures.",
    paragraphs: [
      "The data center must be modernised to meet business challenges and simplify operations while delivering expected performance. Since the cloud is not a one-size-fits-all solution, on-premises infrastructure must evolve. The “touchless” data center remains an aspiration, yet equipment interoperability and hidden operating costs raise real questions. Still, the data center should not become a niche for specialists alone: it exists to shorten application time-to-market. All structured and unstructured data must be hosted, backed up, updated through their lifecycle, and improved. We now talk about data as an influential asset.",
      "INFOLOG Group simplifies the data center and works with partners to support you.",
    ],
    partnersTitle: "Partners",
    atoutsTitle: "Strengths",
    atouts: [
      "More than 15 years of experience implementing complex virtualised infrastructures, with solid references",
      "Overall performance improvement to deliver a better service to users: speed, reliability, service continuity, and more",
      "Simplified administration for the internal IT team: proactive monitoring with alerts, incident management, OS and firmware version management, and more",
      "High flexibility for new and future needs: adding servers or storage capacity, software version testing, server consolidation, and more",
      "Stronger security for data and application backups, as well as segregation of servers across the infrastructure to control access",
      "Proven delivery of disaster recovery and business continuity solutions (BCP/DRP).",
    ],
    solutionTitle: "Our solution",
    solutions: [
      {
        title: "Network core",
        intro:
          "An interconnection foundation to carry traffic reliably, in a structured and secure way.",
        icon: "network",
      },
      {
        title: "Physical or virtual servers",
        intro:
          "Sizing and deployment of servers matched to your workloads, physical or virtualised.",
        icon: "server",
      },
      {
        title: "Storage arrays",
        intro:
          "Centralised storage to host, share and scale your data volumes.",
        icon: "storage",
      },
      {
        title: "Backup solution",
        intro:
          "Protection of data and systems with scheduled, restorable backups.",
        icon: "backup",
      },
      {
        title: "Hyperconvergence",
        intro:
          "Combining compute, storage and networking to simplify the infrastructure.",
        icon: "hyper",
      },
      {
        title: "Security",
        intro:
          "Protection measures for access, traffic and critical data center environments.",
        icon: "security",
      },
      {
        title: "DRP/BCP",
        intro:
          "Recovery and business continuity capabilities in the event of a major incident.",
        icon: "pra",
      },
      {
        title: "Associated services",
        intro:
          "Skills transfer, training and managed services to support your teams.",
        icon: "services",
      },
    ],
    partners: [
      { name: "Synology", src: "/brand/data-center/partners/synology.svg" },
      { name: "Nutanix", src: "/brand/data-center/partners/nutanix.svg" },
      { name: "Dell EMC", src: "/brand/data-center/partners/dell.svg" },
      { name: "NetApp", src: "/brand/data-center/partners/netapp.svg" },
      {
        name: "Hewlett Packard Enterprise",
        src: "/brand/data-center/partners/hpe.png",
      },
      { name: "Lenovo", src: "/brand/data-center/partners/lenovo.png" },
    ],
  },
  ar: {
    title: "مركز البيانات",
    description:
      "تحديث وتبسيط مركز البيانات. ترافق INFOLOG المؤسسات بخبرة تزيد عن 15 عاماً في البنى التحتية الافتراضية المعقدة.",
    paragraphs: [
      "يجب تحديث مركز البيانات لمواكبة تحديات المؤسسة وتبسيط استخدامه مع ضمان الأداء المطلوب. وبما أن الحوسبة السحابية ليست حلاً شاملاً، يجب أن تتطور البنية التحتية في الموقع. مركز البيانات «بدون تدخل» يبقى طموحاً، غير أن توافق المعدات وتكاليف التشغيل الخفية تطرح أسئلة حقيقية. ومع ذلك، لا ينبغي أن يصبح مركز البيانات سوقاً متخصصاً للخبراء فقط، بل يقلّص «time to market» للتطبيقات — سبب وجوده. يجب استضافة كل هذه البيانات المنظمة وغير المنظمة، ونسخها احتياطياً، وتحديثها (دورة الحياة) وتحسينها. نتحدث اليوم عن البيانات بوصفها أصولاً مؤثرة.",
      "مجموعة INFOLOG تبسّط مركز البيانات وتعمل مع شركاء لمرافقتكم.",
    ],
    partnersTitle: "الشركاء",
    atoutsTitle: "نقاط القوة",
    atouts: [
      "أكثر من 15 عاماً من الخبرة في تنفيذ بنى تحتية افتراضية معقدة، مع مراجع قوية",
      "تحسين شامل للأداء لتقديم خدمة أفضل للمستخدمين: السرعة، الموثوقية، استمرارية الخدمة، وغيرها",
      "تبسيط الإدارة لفريق تكنولوجيا المعلومات الداخلي: مراقبة استباقية مع تنبيهات، إدارة الحوادث، إدارة إصدارات الأنظمة والبرمجيات الثابتة، وغيرها",
      "مرونة عالية لاستيعاب الاحتياجات الجديدة والمستقبلية: إضافة خوادم أو سعة تخزين، اختبار إصدارات البرمجيات، دمج الخوادم، وغيرها",
      "أمان معزّز لنسخ البيانات أو البرامج الاحتياطية، وكذلك عزل الخوادم المختلفة في البنية التحتية للتحكم في الوصول",
      "تنفيذ مثبت لحلول الاستعادة عند التوقف الكامل أو استمرارية النشاط (PCA/PRA).",
    ],
    solutionTitle: "حلّنا",
    solutions: [
      {
        title: "قلب الشبكة",
        intro:
          "أساس للربط البيني لنقل التدفقات بشكل موثوق ومنظّم وآمن.",
        icon: "network",
      },
      {
        title: "خوادم فعلية أو افتراضية",
        intro:
          "تحديد الأبعاد ونشر خوادم ملائمة لأحمالكم، فعلياً أو عبر الافتراضية.",
        icon: "server",
      },
      {
        title: "أنظمة التخزين",
        intro:
          "تخزين مركزي لاستضافة بياناتكم ومشاركتها وتطوير أحجامها.",
        icon: "storage",
      },
      {
        title: "حل النسخ الاحتياطي",
        intro:
          "حماية البيانات والأنظمة بنسخ احتياطية مجدولة وقابلة للاستعادة.",
        icon: "backup",
      },
      {
        title: "التقارب الفائق",
        intro:
          "دمج الحوسبة والتخزين والشبكة لتبسيط البنية التحتية.",
        icon: "hyper",
      },
      {
        title: "الأمن",
        intro:
          "إجراءات لحماية الوصول والتدفقات والبيئات الحرجة في مركز البيانات.",
        icon: "security",
      },
      {
        title: "PRA/PCA",
        intro:
          "آليات الاستعادة واستمرارية النشاط في حال حادث كبير.",
        icon: "pra",
      },
      {
        title: "خدمات مرافقة",
        intro:
          "نقل الكفاءات والتدريب والخدمات المُدارة لمرافقة فرقكم.",
        icon: "services",
      },
    ],
    partners: [
      { name: "Synology", src: "/brand/data-center/partners/synology.svg" },
      { name: "Nutanix", src: "/brand/data-center/partners/nutanix.svg" },
      { name: "Dell EMC", src: "/brand/data-center/partners/dell.svg" },
      { name: "NetApp", src: "/brand/data-center/partners/netapp.svg" },
      {
        name: "Hewlett Packard Enterprise",
        src: "/brand/data-center/partners/hpe.png",
      },
      { name: "Lenovo", src: "/brand/data-center/partners/lenovo.png" },
    ],
  },
} as const;

export type DataCenterContent = (typeof packs)["fr"];

export function getDataCenter(locale: Locale = "fr"): DataCenterContent {
  return pickContent(packs, locale);
}

/** @deprecated prefer getDataCenter(locale) */
export const dataCenter = packs.fr;

export const dataCenterMedia = {
  heroPoster: "/brand/data-center/hero.jpg",
  galleryVideo: "/brand/data-center/videos/video-2.mp4",
  galleryPoster: "/brand/data-center/gallery-1.jpg",
  contentImage: "/brand/data-center/content.jpg",
} as const;
