import type { Locale } from "@/lib/i18n/config";
import { pickContent } from "@/lib/i18n/content";

const packs = {
  fr: {
    title: "Virtualisation des serveurs",
    shortTitle: "Virtualisation serveurs",
    breadcrumb: "Solutions IT & Digital / Virtualisation des serveurs",
    description:
      "Virtualisation de serveurs avec Infolog : un serveur physique, plusieurs machines virtuelles — VMware, Hyper-V, Citrix. Implémentation, migration P2V et transfert de compétences.",
    heroLead:
      "Un seul serveur physique, plusieurs machines virtuelles indépendantes — moins de matériel, plus de flexibilité.",
    introLabel: "Le concept",
    intro: [
      {
        text: "Cette solution permet, à partir d'un seul serveur physique, de virtualiser plusieurs machines comme si elles étaient indépendantes les unes des autres. En parallèle de l'hyperviseur pionnier VMware, des offres alternatives telles que Hyper-V ou Citrix et leurs dérivés sont aujourd'hui tout aussi performantes.",
      },
      {
        before: "La virtualisation de serveurs est désormais",
        highlight: "totalement démocratisée",
        after:
          ": elle permet de gérer aussi bien des environnements Windows que des environnements Linux sur une même infrastructure. L'hyperconvergence en est l'étape ultime — elle banalise l'utilisation des ressources matérielles (calcul, stockage, réseau) au sein d'un socle unique et simplifié.",
      },
    ],
    duoLabel: "Bénéfices & méthode",
    duoTitle: "Les avantages, notre savoir-faire",
    duoLead:
      "Moins de matériel à gérer, plus de flexibilité opérationnelle — et une mise en œuvre prise en charge de bout en bout par nos équipes.",
    avantages: {
      title: "Les avantages",
      items: [
        "Réduction des coûts d'infrastructure",
        "Économies d'énergie",
        "Gain de place au sol",
        "Rapidité de déploiement",
        "Facilité d'administration",
      ],
    },
    savoirFaire: {
      title: "Nos savoir-faire",
      items: [
        "Implémentation de la solution",
        "Création des VM's",
        "Création des VLAN's",
        "Migration P2V (Physique to Virtuel)",
        "Paramétrage de la console d'administration",
        "Transfert de compétences",
      ],
    },
    ctaTitle: "Un projet de virtualisation de votre infrastructure ?",
    ctaLabel: "Parler à un expert",
  },
  en: {
    title: "Server virtualisation",
    shortTitle: "Server virtualisation",
    breadcrumb: "IT & Digital Solutions / Server virtualisation",
    description:
      "Server virtualisation with Infolog: one physical server, multiple virtual machines — VMware, Hyper-V, Citrix. Implementation, P2V migration and skills transfer.",
    heroLead:
      "One physical server, multiple independent virtual machines — less hardware, more flexibility.",
    introLabel: "The concept",
    intro: [
      {
        text: "This solution lets you virtualise several machines from a single physical server as if they were independent of one another. Alongside the pioneering VMware hypervisor, alternatives such as Hyper-V or Citrix and their derivatives are now equally capable.",
      },
      {
        before: "Server virtualisation is now",
        highlight: "fully mainstream",
        after:
          ": it lets you manage both Windows and Linux environments on the same infrastructure. Hyperconvergence is the ultimate step — it makes compute, storage and networking resources commonplace within a single, simplified foundation.",
      },
    ],
    duoLabel: "Benefits & method",
    duoTitle: "The benefits, our expertise",
    duoLead:
      "Less hardware to manage, more operational flexibility — and end-to-end delivery handled by our teams.",
    avantages: {
      title: "The benefits",
      items: [
        "Lower infrastructure costs",
        "Energy savings",
        "Floorspace savings",
        "Faster deployment",
        "Easier administration",
      ],
    },
    savoirFaire: {
      title: "Our expertise",
      items: [
        "Solution implementation",
        "VM creation",
        "VLAN creation",
        "P2V migration (Physical to Virtual)",
        "Administration console configuration",
        "Skills transfer",
      ],
    },
    ctaTitle: "Planning to virtualise your infrastructure?",
    ctaLabel: "Talk to an expert",
  },
  ar: {
    title: "افتراضية الخوادم",
    shortTitle: "افتراضية الخوادم",
    breadcrumb: "حلول تكنولوجيا المعلومات والرقمنة / افتراضية الخوادم",
    description:
      "افتراضية الخوادم مع Infolog: خادم فعلي واحد، عدة آلات افتراضية — VMware، Hyper-V، Citrix. التنفيذ، ترحيل P2V ونقل الكفاءات.",
    heroLead:
      "خادم فعلي واحد، عدة آلات افتراضية مستقلة — معدات أقل، مرونة أكبر.",
    introLabel: "المفهوم",
    intro: [
      {
        text: "يتيح هذا الحل، انطلاقاً من خادم فعلي واحد، افتراض عدة آلات كما لو كانت مستقلة عن بعضها. إلى جانب المُشرف الرائد VMware، أصبحت عروض بديلة مثل Hyper-V أو Citrix ومشتقاتها اليوم بنفس مستوى الأداء.",
      },
      {
        before: "أصبحت افتراضية الخوادم اليوم",
        highlight: "شائعة بالكامل",
        after:
          ": فهي تتيح إدارة بيئات Windows وLinux على نفس البنية التحتية. التقارب الفائق هو المرحلة القصوى — يجعل استخدام موارد المعدات (حوسبة، تخزين، شبكة) أمراً معتاداً ضمن أساس واحد مبسّط.",
      },
    ],
    duoLabel: "الفوائد والمنهج",
    duoTitle: "المزايا، خبرتنا",
    duoLead:
      "معدات أقل للإدارة، مرونة تشغيلية أكبر — وتنفيذ من طرف إلى طرف تتولاه فرقنا.",
    avantages: {
      title: "المزايا",
      items: [
        "تخفيض تكاليف البنية التحتية",
        "توفير الطاقة",
        "توفير المساحة",
        "سرعة النشر",
        "سهولة الإدارة",
      ],
    },
    savoirFaire: {
      title: "خبراتنا",
      items: [
        "تنفيذ الحل",
        "إنشاء الأجهزة الافتراضية (VM)",
        "إنشاء شبكات VLAN",
        "ترحيل P2V (من فعلي إلى افتراضي)",
        "ضبط وحدة التحكم الإدارية",
        "نقل الكفاءات",
      ],
    },
    ctaTitle: "مشروع لافتراضية بنيتكم التحتية؟",
    ctaLabel: "تحدثوا إلى خبير",
  },
} as const;

export type VirtualisationServeursContent = (typeof packs)["fr"];

export function getVirtualisationServeurs(
  locale: Locale = "fr",
): VirtualisationServeursContent {
  return pickContent(packs, locale);
}

/** @deprecated prefer getVirtualisationServeurs(locale) */
export const virtualisationServeurs = packs.fr;
