import type { Locale } from "@/lib/i18n/config";
import { pickContent } from "@/lib/i18n/content";

const packs = {
  fr: {
    title: "Réseau & collaboration",
    shortTitle: "Collaboration",
    breadcrumb: "Solutions IT & Digital / Réseau & collaboration",
    description:
      "Infrastructures LAN/WAN, SDN, SD-WAN et outils de collaboration : ToIP, visioconférence, messagerie unifiée.",
    heroLead:
      "Des infrastructures LAN, WAN et sans fil pensées pour la performance, jusqu'aux outils qui font vraiment collaborer vos équipes.",
    introBefore:
      "Les infrastructures de communication sont aujourd'hui l'axe central du déploiement de nouveaux services et le moteur essentiel de la transformation numérique.",
    introHighlight:
      "Nous couvrons les principaux besoins en communication de nos clients,",
    introAfter:
      "en apportant des solutions aux environnements LAN et WAN, à travers une large gamme de technologies fixes et sans fil. Notre offre en infrastructures réseaux se complète par une offre en collaboration destinée à améliorer la communication, augmenter la productivité et améliorer la gestion de temps.",
    expertiseLabel: "Expertise",
    expertiseTitle: "Points forts de notre portfolio",
    expertiseLead:
      "L'adoption de la technologie NetOps 2.0 pour construire des réseaux plus rapides, flexibles et sécurisés ; le déploiement de réseaux définis par logiciel (SDN, SDA, SD-WAN) ; l'automatisation et l'orchestration du déploiement opérationnel des réseaux et des services.",
    portfolio: [
      {
        id: "campus",
        title: "Réseaux Campus / Data Centers",
        description:
          "La colonne vertébrale de votre site : réseau local filaire et sans fil, jusqu'aux architectures définies par logiciel.",
        items: [
          "LAN",
          "Sans fil WLAN — solutions distribuées, centralisées et Mesh",
          "Réseaux SDN",
        ],
      },
      {
        id: "acces",
        title: "Réseaux d'accès",
        description:
          "Connecter vos sites entre eux, en filaire, en fibre ou en sans fil, avec une architecture d'accès moderne.",
        items: [
          "Metro Ethernet",
          "Sans fil WLAN",
          "Optiques — C/DWDM",
          "SD-Access",
        ],
      },
      {
        id: "automatisation",
        title: "Automatisation & contrôle",
        description:
          "Réduire l'intervention manuelle et le risque d'erreur grâce à l'automatisation des opérations réseau.",
        items: [
          "Automatisation des déploiements",
          "Application des politiques réseau",
          "Orchestration",
        ],
      },
      {
        id: "core",
        title: "Réseaux de Core",
        description:
          "Le cœur de réseau qui fait transiter le trafic critique de votre organisation, avec une qualité de service garantie.",
        items: [
          "Réseaux IPv4 / IPv6",
          "Réseaux MPLS",
          "Réseaux MPLS VPN",
          "SD-WAN",
          "Solutions de routage avancé",
          "QoS",
          "Multicast",
        ],
      },
      {
        id: "exploitation",
        title: "Exploitation & supervision réseau",
        description:
          "Garder le contrôle sur la performance de votre réseau au quotidien, avec des outils de suivi et d'optimisation continue.",
        items: [
          "Outils d'optimisation WAN (caching, compression…)",
          "Provisioning et reporting de SLA",
          "Monitoring des infrastructures et services IT",
          "Gestion de la qualité de service et de la capacité",
        ],
      },
    ],
    networkSecurity: {
      title: "Sécurité",
      lead: "Plus que jamais, la numérisation des entreprises s'accélère, cette évolution est accompagnée d'une multiplication des menaces pour la sécurité.",
      body: "Il devient absolument nécessaire de disposer de politiques et des outils nécessaires qui garantissent à tout moment la disponibilité des services, la confidentialité et l'intégrité des données de notre organisation, et surtout, de nos clients.",
      axesIntro:
        "Notre portefeuille de solutions en matière de sécurité se divise en deux axes principaux :",
      axes: [
        {
          id: "strategique",
          label: "Axe stratégique",
          title: "Domaines stratégiques",
          body: "Solutions de gouvernance IT, analyse des risques et applications.",
        },
        {
          id: "operationnel",
          label: "Axe opérationnel",
          title: "Domaine opérationnel",
          body: "Services de conception, déploiement, support, administration et opération des architectures et des solutions en matière d'infrastructures de sécurité.",
        },
      ],
    },
    collabPortfolio: {
      title: "Portfolio collaboration",
      items: [
        {
          id: "outils",
          title: "Outils de collaboration",
          description:
            "Téléphonie sur IP (ToIP), Voix Sur IP (VoIP), Fax Sur IP (FoIP), Visioconférence, Messagerie unifiée et Présence …",
          icon: "handshake",
        },
        {
          id: "contact-center",
          title: "Solutions de Centre de Contact",
          icon: "headset",
        },
        {
          id: "b2b",
          title: "Solutions B2B et Mobilité",
          icon: "building",
        },
        {
          id: "taxation",
          title: "Solutions de Taxation, Enregistrement et Reporting",
          icon: "chart",
        },
        {
          id: "marches",
          title: "Solutions des Salles des Marchés",
          icon: "tag",
        },
        {
          id: "affichage",
          title: "Affichage dynamique sur IP",
          icon: "display",
        },
      ],
    },
  },
  en: {
    title: "Network & collaboration",
    shortTitle: "Collaboration",
    breadcrumb: "IT & Digital Solutions / Network & collaboration",
    description:
      "LAN/WAN infrastructures, SDN, SD-WAN and collaboration tools: ToIP, videoconferencing, unified messaging.",
    heroLead:
      "LAN, WAN and wireless infrastructures built for performance, through to the tools that truly help your teams collaborate.",
    introBefore:
      "Communication infrastructures are today the central axis for deploying new services and the essential engine of digital transformation.",
    introHighlight:
      "We cover our clients’ main communication needs,",
    introAfter:
      "by delivering solutions for LAN and WAN environments across a wide range of fixed and wireless technologies. Our network infrastructure offer is complemented by a collaboration offer designed to improve communication, increase productivity and improve time management.",
    expertiseLabel: "Expertise",
    expertiseTitle: "Strengths of our portfolio",
    expertiseLead:
      "Adoption of NetOps 2.0 technology to build faster, more flexible and more secure networks; deployment of software-defined networks (SDN, SDA, SD-WAN); automation and orchestration of operational network and service deployment.",
    portfolio: [
      {
        id: "campus",
        title: "Campus / Data Center networks",
        description:
          "The backbone of your site: wired and wireless local network, through to software-defined architectures.",
        items: [
          "LAN",
          "Wireless WLAN — distributed, centralised and Mesh solutions",
          "SDN networks",
        ],
      },
      {
        id: "acces",
        title: "Access networks",
        description:
          "Connect your sites to each other, over copper, fibre or wireless, with a modern access architecture.",
        items: [
          "Metro Ethernet",
          "Wireless WLAN",
          "Optics — C/DWDM",
          "SD-Access",
        ],
      },
      {
        id: "automatisation",
        title: "Automation & control",
        description:
          "Reduce manual intervention and error risk through automation of network operations.",
        items: [
          "Deployment automation",
          "Network policy enforcement",
          "Orchestration",
        ],
      },
      {
        id: "core",
        title: "Core networks",
        description:
          "The network core that carries your organisation’s critical traffic, with guaranteed quality of service.",
        items: [
          "IPv4 / IPv6 networks",
          "MPLS networks",
          "MPLS VPN networks",
          "SD-WAN",
          "Advanced routing solutions",
          "QoS",
          "Multicast",
        ],
      },
      {
        id: "exploitation",
        title: "Network operations & monitoring",
        description:
          "Keep control of your network’s day-to-day performance with continuous monitoring and optimisation tools.",
        items: [
          "WAN optimisation tools (caching, compression…)",
          "SLA provisioning and reporting",
          "Monitoring of IT infrastructures and services",
          "Quality of service and capacity management",
        ],
      },
    ],
    networkSecurity: {
      title: "Security",
      lead: "More than ever, business digitisation is accelerating, and this evolution comes with a multiplication of security threats.",
      body: "It becomes absolutely necessary to have the policies and tools that guarantee at all times the availability of services, and the confidentiality and integrity of our organisation’s data — and above all, our clients’ data.",
      axesIntro:
        "Our security solutions portfolio is divided into two main axes:",
      axes: [
        {
          id: "strategique",
          label: "Strategic axis",
          title: "Strategic domains",
          body: "IT governance solutions, risk analysis and applications.",
        },
        {
          id: "operationnel",
          label: "Operational axis",
          title: "Operational domain",
          body: "Design, deployment, support, administration and operation services for security infrastructure architectures and solutions.",
        },
      ],
    },
    collabPortfolio: {
      title: "Collaboration portfolio",
      items: [
        {
          id: "outils",
          title: "Collaboration tools",
          description:
            "IP telephony (ToIP), Voice over IP (VoIP), Fax over IP (FoIP), Videoconferencing, Unified messaging and Presence…",
          icon: "handshake",
        },
        {
          id: "contact-center",
          title: "Contact Centre solutions",
          icon: "headset",
        },
        {
          id: "b2b",
          title: "B2B and Mobility solutions",
          icon: "building",
        },
        {
          id: "taxation",
          title: "Taxation, Recording and Reporting solutions",
          icon: "chart",
        },
        {
          id: "marches",
          title: "Trading floor solutions",
          icon: "tag",
        },
        {
          id: "affichage",
          title: "IP digital signage",
          icon: "display",
        },
      ],
    },
  },
  ar: {
    title: "الشبكة والتعاون",
    shortTitle: "التعاون",
    breadcrumb: "حلول تكنولوجيا المعلومات والرقمنة / الشبكة والتعاون",
    description:
      "بنى تحتية LAN/WAN وSDN وSD-WAN وأدوات تعاون: ToIP، مؤتمرات فيديو، رسائل موحدة.",
    heroLead:
      "بنى تحتية LAN وWAN ولاسلكية مبنية للأداء، وصولاً إلى الأدوات التي تجعل فرقكم تتعاون فعلاً.",
    introBefore:
      "بنى الاتصالات التحتية هي اليوم المحور المركزي لنشر خدمات جديدة والمحرك الأساسي للتحول الرقمي.",
    introHighlight:
      "نغطي الاحتياجات الرئيسية لعملائنا في الاتصالات،",
    introAfter:
      "بتقديم حلول لبيئات LAN وWAN عبر مجموعة واسعة من التقنيات الثابتة واللاسلكية. تكتمل عرضنا لبنى الشبكات بعرض تعاون يهدف إلى تحسين التواصل وزيادة الإنتاجية وتحسين إدارة الوقت.",
    expertiseLabel: "الخبرة",
    expertiseTitle: "نقاط قوة محفظتنا",
    expertiseLead:
      "اعتماد تقنية NetOps 2.0 لبناء شبكات أسرع وأكثر مرونة وأماناً؛ نشر الشبكات المعرّفة بالبرمجيات (SDN، SDA، SD-WAN)؛ أتمتة وتنسيق النشر التشغيلي للشبكات والخدمات.",
    portfolio: [
      {
        id: "campus",
        title: "شبكات الحرم / مراكز البيانات",
        description:
          "العمود الفقري لموقعكم: شبكة محلية سلكية ولاسلكية، وصولاً إلى البنى المعرّفة بالبرمجيات.",
        items: [
          "LAN",
          "لاسلكي WLAN — حلول موزعة ومركزية وMesh",
          "شبكات SDN",
        ],
      },
      {
        id: "acces",
        title: "شبكات الوصول",
        description:
          "ربط مواقعكم ببعضها، سلكياً أو بالألياف أو لاسلكياً، ببنية وصول حديثة.",
        items: [
          "Metro Ethernet",
          "لاسلكي WLAN",
          "بصريات — C/DWDM",
          "SD-Access",
        ],
      },
      {
        id: "automatisation",
        title: "الأتمتة والتحكم",
        description:
          "تقليل التدخل اليدوي وخطر الخطأ عبر أتمتة عمليات الشبكة.",
        items: [
          "أتمتة عمليات النشر",
          "تطبيق سياسات الشبكة",
          "التنسيق (Orchestration)",
        ],
      },
      {
        id: "core",
        title: "شبكات اللب",
        description:
          "قلب الشبكة الذي يمرّر حركة منظمتكم الحرجة، مع جودة خدمة مضمونة.",
        items: [
          "شبكات IPv4 / IPv6",
          "شبكات MPLS",
          "شبكات MPLS VPN",
          "SD-WAN",
          "حلول توجيه متقدمة",
          "QoS",
          "Multicast",
        ],
      },
      {
        id: "exploitation",
        title: "التشغيل ومراقبة الشبكة",
        description:
          "الحفاظ على التحكم في أداء شبكتكم يومياً، بأدوات متابعة وتحسين مستمر.",
        items: [
          "أدوات تحسين WAN (تخزين مؤقت، ضغط…)",
          "توفير وإعداد تقارير SLA",
          "مراقبة البنى التحتية وخدمات تكنولوجيا المعلومات",
          "إدارة جودة الخدمة والسعة",
        ],
      },
    ],
    networkSecurity: {
      title: "الأمن",
      lead: "أكثر من أي وقت مضى، تتسارع رقمنة المؤسسات، ويرافق هذا التطور تكاثر التهديدات الأمنية.",
      body: "يصبح من الضروري تماماً التوفر على السياسات والأدوات اللازمة التي تضمن في كل لحظة توفر الخدمات وسرية وسلامة بيانات منظمتنا، وفوق كل شيء بيانات عملائنا.",
      axesIntro:
        "تنقسم محفظة حلولنا في مجال الأمن إلى محورين رئيسيين:",
      axes: [
        {
          id: "strategique",
          label: "المحور الاستراتيجي",
          title: "مجالات استراتيجية",
          body: "حلول حوكمة تكنولوجيا المعلومات وتحليل المخاطر والتطبيقات.",
        },
        {
          id: "operationnel",
          label: "المحور التشغيلي",
          title: "المجال التشغيلي",
          body: "خدمات التصميم والنشر والدعم والإدارة وتشغيل البنى والحلول في مجال بنى الأمن التحتية.",
        },
      ],
    },
    collabPortfolio: {
      title: "محفظة التعاون",
      items: [
        {
          id: "outils",
          title: "أدوات التعاون",
          description:
            "هاتف عبر IP (ToIP)، صوت عبر IP (VoIP)، فاكس عبر IP (FoIP)، مؤتمرات فيديو، رسائل موحدة وحضور …",
          icon: "handshake",
        },
        {
          id: "contact-center",
          title: "حلول مركز الاتصال",
          icon: "headset",
        },
        {
          id: "b2b",
          title: "حلول B2B والتنقل",
          icon: "building",
        },
        {
          id: "taxation",
          title: "حلول الفوترة والتسجيل والتقارير",
          icon: "chart",
        },
        {
          id: "marches",
          title: "حلول قاعات الأسواق",
          icon: "tag",
        },
        {
          id: "affichage",
          title: "عرض ديناميكي عبر IP",
          icon: "display",
        },
      ],
    },
  },
} as const;

export type CollaborationContent = (typeof packs)["fr"];

export function getCollaboration(locale: Locale = "fr"): CollaborationContent {
  return pickContent(packs, locale);
}

/** @deprecated prefer getCollaboration(locale) */
export const collaboration = packs.fr;
