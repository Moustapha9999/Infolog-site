import type { Locale } from "@/lib/i18n/config";
import { pickContent } from "@/lib/i18n/content";

const packs = {
  fr: {
    title: "Monétique",
    description:
      "Organisation dédiée aux partenaires bancaires : hotline, réparation des terminaux, GAB NCR et systèmes de paiement.",
    intro:
      "INFOLOG, pour répondre aux attentes du réseau de partenaires bancaires (6), Infolog a su bâtir une organisation basée sur la connaissance et le savoir-faire des techniciens monétiques. Infolog dispose d'une équipe de techniciens monétiques (5) et techniciens experts chargés de la hotline, la réparation des terminaux bancaires et la maintenance des solutions monétiques. Une équipe logistique dédiée à la gestion de stocks, la préparation des commandes et au suivi du matériel a également été mise en place.",
    mission: {
      title: "Notre Mission",
      text: "Soutenir le développement économique en élargissant l'inclusion financière pour tous, partout, tout le temps.",
    },
    vision: {
      title: "Notre Vision",
      text: "Nous proposons des solutions sur mesure pour des clients uniques, des plus petits clients aux plus grands acteurs.",
    },
    network: {
      title: "Réseau et collaboration",
      items: [
        {
          title: "Sécurité du périmètre",
          items: ["NGFW/UTM", "VPN SSL", "IDS/IPS", "Sandboxing", "Gateway MAIL / WEB"],
        },
        {
          title: "Optimisation et sécurité du datacenter",
          items: ["ADC", "WAF"],
        },
        {
          title: "Visibilité, optimisation et protection du réseau",
          items: ["SSL offloading / NPB", "Bandwidth Mgmt"],
        },
        {
          title: "Gestion de l'endpoint",
          items: [
            "Content filtering",
            "EDR",
            "Chiffrage/IRM/DLP",
            "IAM/PAM",
            "HSM / Signature / PKI",
          ],
        },
        {
          title: "Gestion et contrôle de l'accès et l'identité",
          items: ["SSO", "MFA"],
        },
        {
          title: "Gestion de la sécurité",
          items: ["Gestion centralisée FW", "SIEM"],
        },
      ],
    },
    gab: {
      title: "Guichet automatique bancaire",
      body: "En tant que partenaire, nous proposons une large gamme de qualité de distributeurs automatiques NCR et de pièces détachées. Infolog comprend la valeur d'un temps de réponse rapide ! Par conséquent, notre équipe vous offrira une disponibilité immédiate, une réactivité et une assistance à la résolution des problèmes pour vous aider à mieux servir vos clients. De plus, nos consultants techniques sont disponibles pour vous apporter des suggestions et des conseils.",
    },
    payment: {
      title: "Systèmes de paiement électronique",
      paragraphs: [
        "Partenaire d'un éditeur et intégrateur des systèmes de paiement, INFOLOG propose un système interopérable et hautement modulaire.",
        "Notre système offre une gestion optimisée, sécurisée et flexible des canaux GAB, TPE, kiosques mobiles, Internet, centres d'appels… tout en répondant aux exigences de haute disponibilité, d'évolutivité, de performance et d'intégration des dernières exigences technologiques (biométrie, QR-Code, HCE, authentification forte…). Notre système fournit des moyens performants et efficaces capables de répondre aux besoins en termes d'acceptation des moyens de paiement (carte avec contact ou sans contact, mobile HCE ou Wallet…) ; de services à valeur ajoutée (paiement de factures, recharges, transfert d'argent…) disponibles sur tous les canaux (GAB, TPE, mobile, Internet, kiosque…).",
      ],
    },
    sifco: {
      title: "SIFCO — Système d'information des institutions de micro-finances",
      body: "Partenaire de SIFCO, éditeur des systèmes d'information des organisations financières (non bancaires), les solutions et services que nous fournissons se caractérisent par une adaptation facile et rapide aux utilisateurs dans des environnements avec des exigences différentes des normes internationales pour aider nos clients à améliorer leur service, leur efficacité et leur transparence.",
      modules: [
        {
          title: "Client",
          features: [
            "Profil du client",
            "Recherche simple et rapide",
            "Large éventail d'information",
            "Connaissez votre client",
            "Identification unique",
            "Photographie, signature et empreinte digitale",
          ],
        },
        {
          title: "Crédit",
          features: [
            "La mise en œuvre d'un crédit",
            "Gestion des demandes de crédit",
            "Produits financiers configurables",
            "Large choix de gestion de crédit",
            "Gestion des garanties",
            "Registre des paiements et des ajustements",
            "Rapport",
          ],
        },
        {
          title: "Comptabilité",
          features: [
            "Conformité aux normes internationales",
            "Configuration flexible du plan comptable",
            "Gestion des centres de coûts",
            "Gestion de la trésorerie",
            "Module auxiliaire de banques",
            "Module auxiliaire pour immobilisations",
            "Module de budget",
            "Rapports",
          ],
        },
        {
          title: "Agence électronique",
          features: [
            "Service Internet Banking 24*7",
            "Consultation et opérations",
            "Notifications et messages",
          ],
        },
      ],
    },
    partnersTitle: "Ils nous font confiance",
    partners: [
      { name: "BMCI", src: "/brand/monetique-partners/bmci.png" },
      { name: "BADH", src: "/brand/monetique-partners/badh.png" },
      { name: "BIM", src: "/brand/monetique-partners/bim.png" },
      { name: "PRE", src: "/brand/monetique-partners/pre.png" },
      {
        name: "Société Générale",
        src: "/brand/monetique-partners/societe-generale.png",
      },
      { name: "AWB", src: "/brand/monetique-partners/awb.png" },
    ],
  },
  en: {
    title: "Payment systems",
    description:
      "Organisation dedicated to banking partners: hotline, terminal repair, NCR ATMs and payment systems.",
    intro:
      "INFOLOG, to meet the expectations of the banking partner network (6), Infolog has built an organisation based on the knowledge and expertise of payment-systems technicians. Infolog has a team of payment-systems technicians (5) and expert technicians responsible for the hotline, repair of banking terminals and maintenance of payment solutions. A logistics team dedicated to stock management, order preparation and equipment tracking has also been put in place.",
    mission: {
      title: "Our mission",
      text: "Support economic development by expanding financial inclusion for everyone, everywhere, all the time.",
    },
    vision: {
      title: "Our vision",
      text: "We offer tailored solutions for unique clients, from the smallest customers to the largest players.",
    },
    network: {
      title: "Network and collaboration",
      items: [
        {
          title: "Perimeter security",
          items: ["NGFW/UTM", "VPN SSL", "IDS/IPS", "Sandboxing", "Gateway MAIL / WEB"],
        },
        {
          title: "Data center optimisation and security",
          items: ["ADC", "WAF"],
        },
        {
          title: "Network visibility, optimisation and protection",
          items: ["SSL offloading / NPB", "Bandwidth Mgmt"],
        },
        {
          title: "Endpoint management",
          items: [
            "Content filtering",
            "EDR",
            "Encryption/IRM/DLP",
            "IAM/PAM",
            "HSM / Signature / PKI",
          ],
        },
        {
          title: "Access and identity management and control",
          items: ["SSO", "MFA"],
        },
        {
          title: "Security management",
          items: ["Centralised FW management", "SIEM"],
        },
      ],
    },
    gab: {
      title: "Automated teller machine",
      body: "As a partner, we offer a wide range of quality NCR ATMs and spare parts. Infolog understands the value of a fast response time! Therefore, our team will provide you with immediate availability, responsiveness and problem-resolution support to help you serve your customers better. In addition, our technical consultants are available to provide suggestions and advice.",
    },
    payment: {
      title: "Electronic payment systems",
      paragraphs: [
        "Partner of a payment-systems publisher and integrator, INFOLOG offers an interoperable, highly modular system.",
        "Our system provides optimised, secure and flexible management of ATM, POS, mobile kiosk, Internet and call-centre channels… while meeting requirements for high availability, scalability, performance and integration of the latest technology needs (biometrics, QR Code, HCE, strong authentication…). Our system provides effective means to meet needs for payment acceptance (contact or contactless card, HCE mobile or Wallet…); and value-added services (bill payment, top-ups, money transfer…) available on all channels (ATM, POS, mobile, Internet, kiosk…).",
      ],
    },
    sifco: {
      title: "SIFCO — Information system for microfinance institutions",
      body: "Partner of SIFCO, publisher of information systems for financial organisations (non-bank), the solutions and services we provide are characterised by easy, rapid adaptation for users in environments with requirements that differ from international standards, to help our clients improve their service, efficiency and transparency.",
      modules: [
        {
          title: "Client",
          features: [
            "Client profile",
            "Simple, fast search",
            "Wide range of information",
            "Know your customer",
            "Unique identification",
            "Photograph, signature and fingerprint",
          ],
        },
        {
          title: "Credit",
          features: [
            "Credit implementation",
            "Credit application management",
            "Configurable financial products",
            "Wide choice of credit management",
            "Collateral management",
            "Payment and adjustment register",
            "Reporting",
          ],
        },
        {
          title: "Accounting",
          features: [
            "Compliance with international standards",
            "Flexible chart of accounts configuration",
            "Cost centre management",
            "Treasury management",
            "Bank auxiliary module",
            "Fixed assets auxiliary module",
            "Budget module",
            "Reports",
          ],
        },
        {
          title: "Electronic branch",
          features: [
            "Internet Banking service 24*7",
            "Consultation and operations",
            "Notifications and messages",
          ],
        },
      ],
    },
    partnersTitle: "They trust us",
    partners: [
      { name: "BMCI", src: "/brand/monetique-partners/bmci.png" },
      { name: "BADH", src: "/brand/monetique-partners/badh.png" },
      { name: "BIM", src: "/brand/monetique-partners/bim.png" },
      { name: "PRE", src: "/brand/monetique-partners/pre.png" },
      {
        name: "Société Générale",
        src: "/brand/monetique-partners/societe-generale.png",
      },
      { name: "AWB", src: "/brand/monetique-partners/awb.png" },
    ],
  },
  ar: {
    title: "المونتيك",
    description:
      "تنظيم مخصص للشركاء المصرفيين: خط ساخن، إصلاح الطرفيات، صرافات NCR وأنظمة الدفع.",
    intro:
      "INFOLOG، للاستجابة لتوقعات شبكة الشركاء المصرفيين (6)، نجحت Infolog في بناء تنظيم قائم على معرفة وخبرة فنيي المونتيك. تتوفر Infolog على فريق من فنيي المونتيك (5) وفنيين خبراء مكلفين بالخط الساخن وإصلاح الطرفيات المصرفية وصيانة حلول المونتيك. كما أُنشئ فريق لوجستي مخصص لإدارة المخزون وتحضير الطلبات ومتابعة المعدات.",
    mission: {
      title: "مهمتنا",
      text: "دعم التنمية الاقتصادية بتوسيع الشمول المالي للجميع، في كل مكان، وفي كل وقت.",
    },
    vision: {
      title: "رؤيتنا",
      text: "نقترح حلولاً مخصصة لعملاء فريدين، من أصغر العملاء إلى أكبر الفاعلين.",
    },
    network: {
      title: "الشبكة والتعاون",
      items: [
        {
          title: "أمن المحيط",
          items: ["NGFW/UTM", "VPN SSL", "IDS/IPS", "Sandboxing", "Gateway MAIL / WEB"],
        },
        {
          title: "تحسين وأمن مركز البيانات",
          items: ["ADC", "WAF"],
        },
        {
          title: "رؤية الشبكة وتحسينها وحمايتها",
          items: ["SSL offloading / NPB", "Bandwidth Mgmt"],
        },
        {
          title: "إدارة نقطة النهاية",
          items: [
            "Content filtering",
            "EDR",
            "تشفير/IRM/DLP",
            "IAM/PAM",
            "HSM / Signature / PKI",
          ],
        },
        {
          title: "إدارة ومراقبة الوصول والهوية",
          items: ["SSO", "MFA"],
        },
        {
          title: "إدارة الأمن",
          items: ["إدارة مركزية لـ FW", "SIEM"],
        },
      ],
    },
    gab: {
      title: "الصراف الآلي البنكي",
      body: "بصفتنا شريكاً، نقترح مجموعة واسعة وعالية الجودة من صرافات NCR وقطع الغيار. تدرك Infolog قيمة زمن الاستجابة السريع! لذلك سيوفر لكم فريقنا توفراً فورياً واستجابة ومساعدة في حل المشكلات لمساعدتكم على خدمة عملائكم بشكل أفضل. إضافة إلى ذلك، مستشارونا التقنيون متاحون لتقديم اقتراحات ونصائح.",
    },
    payment: {
      title: "أنظمة الدفع الإلكتروني",
      paragraphs: [
        "بصفتها شريكة لناشر ومدمج أنظمة الدفع، تقترح INFOLOG نظاماً قابلاً للتشغيل البيني وعالي المرونة في الوحدات.",
        "يوفر نظامنا إدارة محسّنة وآمنة ومرنة لقنوات GAB وTPE والأكشاك المتنقلة والإنترنت ومراكز الاتصال… مع الاستجابة لمتطلبات التوفر العالي والقابلية للتطور والأداء ودمج أحدث المتطلبات التقنية (القياسات الحيوية، QR-Code، HCE، المصادقة القوية…). يوفر نظامنا وسائل فعالة قادرة على تلبية الاحتياجات من حيث قبول وسائل الدفع (بطاقة بلمس أو بدون لمس، هاتف HCE أو Wallet…)؛ وخدمات ذات قيمة مضافة (دفع فواتير، شحن، تحويل أموال…) متاحة على كل القنوات (GAB، TPE، هاتف، إنترنت، كشك…).",
      ],
    },
    sifco: {
      title: "SIFCO — نظام معلومات مؤسسات التمويل الأصغر",
      body: "شريكة لـ SIFCO، ناشر أنظمة معلومات المنظمات المالية (غير المصرفية)، تتميز الحلول والخدمات التي نقدمها بتكيّف سهل وسريع مع المستخدمين في بيئات ذات متطلبات تختلف عن المعايير الدولية لمساعدة عملائنا على تحسين خدمتهم وكفاءتهم وشفافيتهم.",
      modules: [
        {
          title: "العميل",
          features: [
            "ملف العميل",
            "بحث بسيط وسريع",
            "مجموعة واسعة من المعلومات",
            "اعرف عميلك",
            "تعريف فريد",
            "صورة وتوقيع وبصمة",
          ],
        },
        {
          title: "الائتمان",
          features: [
            "تنفيذ ائتمان",
            "إدارة طلبات الائتمان",
            "منتجات مالية قابلة للتهيئة",
            "خيارات واسعة لإدارة الائتمان",
            "إدارة الضمانات",
            "سجل المدفوعات والتعديلات",
            "تقرير",
          ],
        },
        {
          title: "المحاسبة",
          features: [
            "الامتثال للمعايير الدولية",
            "تهيئة مرنة لخطة الحسابات",
            "إدارة مراكز التكلفة",
            "إدارة الخزينة",
            "وحدة مساعدة للبنوك",
            "وحدة مساعدة للأصول الثابتة",
            "وحدة الميزانية",
            "تقارير",
          ],
        },
        {
          title: "الوكالة الإلكترونية",
          features: [
            "خدمة Internet Banking على مدار الساعة",
            "الاستشارة والعمليات",
            "إشعارات ورسائل",
          ],
        },
      ],
    },
    partnersTitle: "يثقون بنا",
    partners: [
      { name: "BMCI", src: "/brand/monetique-partners/bmci.png" },
      { name: "BADH", src: "/brand/monetique-partners/badh.png" },
      { name: "BIM", src: "/brand/monetique-partners/bim.png" },
      { name: "PRE", src: "/brand/monetique-partners/pre.png" },
      {
        name: "Société Générale",
        src: "/brand/monetique-partners/societe-generale.png",
      },
      { name: "AWB", src: "/brand/monetique-partners/awb.png" },
    ],
  },
} as const;

export type MonetiqueContent = (typeof packs)["fr"];

export function getMonetique(locale: Locale = "fr"): MonetiqueContent {
  return pickContent(packs, locale);
}

/** @deprecated prefer getMonetique(locale) */
export const monetique = packs.fr;
