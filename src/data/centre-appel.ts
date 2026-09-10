import type { Locale } from "@/lib/i18n/config";
import { pickContent } from "@/lib/i18n/content";

const packs = {
  fr: {
    title: "Centre d'appel",
    shortTitle: "Centre d'appel",
    breadcrumb: "Formation & Support / Centre d'appel",
    description:
      "Plateforme Call Center Infolog : plus de 100 agents, plus de 10 000 appels par jour, 24/7. SVI, ACD, CTI, SMS et supervision. Références Mauritel, Mattel, PAM.",
    heroLead:
      "Une plateforme de Call Center propre à Infolog, équipée des technologies de télécommunication les plus récentes.",
    heroImage: "/brand/centre-appel/hero.jpg",
    agentImage: "/brand/centre-appel/agent.jpg",
    introLabel: "Présentation",
    intro: [
      {
        before:
          "Infolog propose une approche originale du marché en intégrant dans son savoir-faire les expertises et les technologies nécessaires à l'élaboration de solutions IT novatrices, performantes et adaptées à vos besoins.",
        highlight: "Infolog a développé sa propre plateforme de Call Center",
        after:
          ", équipée des technologies de télécommunication de dernière génération.",
      },
      {
        before:
          "Ce centre d'appel assure, pour le compte de nos partenaires, l'ensemble des missions liées à la gestion de la relation client, à la prospection et au développement commercial. Deux des plus grands opérateurs téléphoniques de Mauritanie —",
        highlights: [
          { label: "Mauritel", note: "filiale de Maroc Télécom" },
          { label: "Mattel", note: "filiale de Tunisie Télécom" },
        ],
        mid: "— nous font confiance pour la gestion de leurs réclamations. Le",
        highlight: "PAM",
        after:
          " (Programme Alimentaire Mondial) a également bénéficié de l'expertise d'Infolog pour l'externalisation de son centre d'appels en Mauritanie, ainsi que pour le numéro 1155 dédié au COVID-19.",
      },
    ],
    stats: [
      {
        value: "100",
        suffix: "+",
        label: "agents (téléacteurs, téléconseillers, superviseurs)",
      },
      {
        value: "10",
        suffix: "000+",
        label: "appels traités par jour",
      },
      {
        value: "24",
        suffix: "/7",
        label: "disponibilité continue",
      },
    ],
    atoutsLabel: "Atouts",
    atoutsTitle: "Une plateforme complète, de bout en bout",
    atoutsLead:
      "Les ressources humaines : plus de 100 agents entre téléacteurs, téléopérateurs-téléconseillers, télé-prospecteurs-enquêteurs et superviseurs, qui traitent plus de 10 000 appels par jour, 24/7.",
    atouts: [
      {
        name: "SVI",
        title: "Serveur Vocal Interactif",
        body: "Le SVI permet au serveur de dialoguer vocalement avec le correspondant et d'interpréter ses réponses via messages DTMF, pour orienter l'appel automatiquement.",
      },
      {
        name: "ACD",
        title: "Automatic Call Distribution",
        body: "Tous les appels entrants sont filtrés par l'ACD, qui les répartit ensuite vers les agents téléopérateurs disponibles.",
      },
      {
        name: "CTI",
        title: "Couplage Téléphonie Informatique",
        body: "Il interface les données recueillies pendant l'appel avec la base de données, pour présenter à l'agent toutes les informations sur l'appelant avant même la prise de communication.",
      },
      {
        name: "SMS / VOCAL",
        title: "Envois automatiques",
        body: "Système automatique d'envoi de SMS et de messages vocaux, pour automatiser vos campagnes d'appels sortants.",
      },
      {
        name: "SUPERVISION",
        title: "Module de supervision",
        body: "Vision globale de la gestion du centre d'appel, en temps réel ou en différé.",
      },
    ],
    refsLabel: "Ils nous font confiance",
    refsTitle: "Références",
    refs: [
      { name: "Mauritel", note: "filiale Maroc Télécom" },
      { name: "Mattel", note: "filiale Tunisie Télécom" },
      { name: "PAM", note: "Programme Alimentaire Mondial" },
      { name: "1155", note: "ligne COVID-19" },
    ],
    ctaTitle:
      "Un projet de centre d'appel ou de relation client à externaliser ?",
    ctaLabel: "Parler à un expert",
  },
  en: {
    title: "Call centre",
    shortTitle: "Call centre",
    breadcrumb: "Training & Support / Call centre",
    description:
      "Infolog Call Center platform: more than 100 agents, more than 10,000 calls per day, 24/7. IVR, ACD, CTI, SMS and supervision. References: Mauritel, Mattel, WFP.",
    heroLead:
      "Infolog’s own Call Center platform, equipped with the latest telecommunications technologies.",
    heroImage: "/brand/centre-appel/hero.jpg",
    agentImage: "/brand/centre-appel/agent.jpg",
    introLabel: "Overview",
    intro: [
      {
        before:
          "Infolog takes an original approach to the market by integrating into its expertise the skills and technologies needed to design innovative, high-performing IT solutions tailored to your needs.",
        highlight: "Infolog has developed its own Call Center platform",
        after: ", equipped with next-generation telecommunications technologies.",
      },
      {
        before:
          "This call centre handles, on behalf of our partners, all missions related to customer relationship management, prospecting and commercial development. Two of Mauritania’s largest telephone operators —",
        highlights: [
          { label: "Mauritel", note: "subsidiary of Maroc Télécom" },
          { label: "Mattel", note: "subsidiary of Tunisie Télécom" },
        ],
        mid: "— trust us to manage their complaints. The",
        highlight: "WFP",
        after:
          " (World Food Programme) has also benefited from Infolog’s expertise for outsourcing its call centre in Mauritania, as well as for the 1155 number dedicated to COVID-19.",
      },
    ],
    stats: [
      {
        value: "100",
        suffix: "+",
        label: "agents (teleactors, advisors, supervisors)",
      },
      {
        value: "10",
        suffix: "000+",
        label: "calls handled per day",
      },
      {
        value: "24",
        suffix: "/7",
        label: "continuous availability",
      },
    ],
    atoutsLabel: "Strengths",
    atoutsTitle: "A complete, end-to-end platform",
    atoutsLead:
      "Human resources: more than 100 agents including teleactors, operator-advisors, tele-prospectors-surveyors and supervisors, who handle more than 10,000 calls per day, 24/7.",
    atouts: [
      {
        name: "IVR",
        title: "Interactive Voice Response",
        body: "IVR lets the server speak with the caller and interpret DTMF responses to route the call automatically.",
      },
      {
        name: "ACD",
        title: "Automatic Call Distribution",
        body: "All inbound calls are filtered by the ACD, which then distributes them to available operator agents.",
      },
      {
        name: "CTI",
        title: "Computer Telephony Integration",
        body: "It interfaces data collected during the call with the database, so the agent sees all caller information before the conversation even starts.",
      },
      {
        name: "SMS / VOICE",
        title: "Automated sending",
        body: "Automatic SMS and voice-message sending system to automate your outbound call campaigns.",
      },
      {
        name: "SUPERVISION",
        title: "Supervision module",
        body: "A global view of call-centre management, in real time or deferred.",
      },
    ],
    refsLabel: "They trust us",
    refsTitle: "References",
    refs: [
      { name: "Mauritel", note: "Maroc Télécom subsidiary" },
      { name: "Mattel", note: "Tunisie Télécom subsidiary" },
      { name: "WFP", note: "World Food Programme" },
      { name: "1155", note: "COVID-19 line" },
    ],
    ctaTitle: "A call-centre or customer-relationship project to outsource?",
    ctaLabel: "Talk to an expert",
  },
  ar: {
    title: "مركز الاتصال",
    shortTitle: "مركز الاتصال",
    breadcrumb: "التكوين والدعم / مركز الاتصال",
    description:
      "منصة Call Center لدى Infolog: أكثر من 100 وكيل، أكثر من 10 000 مكالمة يومياً، على مدار الساعة. SVI، ACD، CTI، SMS والمراقبة. مراجع: Mauritel، Mattel، PAM.",
    heroLead:
      "منصة Call Center خاصة بـ Infolog، مجهزة بأحدث تقنيات الاتصالات.",
    heroImage: "/brand/centre-appel/hero.jpg",
    agentImage: "/brand/centre-appel/agent.jpg",
    introLabel: "تقديم",
    intro: [
      {
        before:
          "تقترح Infolog نهجاً أصيلاً في السوق بدمج الخبرات والتقنيات اللازمة لإعداد حلول تكنولوجيا معلومات مبتكرة وعالية الأداء وملائمة لاحتياجاتكم في خبرتها.",
        highlight: "طورت Infolog منصة Call Center الخاصة بها",
        after: "، مجهزة بتقنيات اتصالات من الجيل الأخير.",
      },
      {
        before:
          "يؤمّن مركز الاتصال هذا، لحساب شركائنا، مجمل المهام المرتبطة بإدارة علاقة العملاء والتنقيب والتطوير التجاري. اثنان من أكبر مشغلي الهاتف في موريتانيا —",
        highlights: [
          { label: "Mauritel", note: "فرع Maroc Télécom" },
          { label: "Mattel", note: "فرع Tunisie Télécom" },
        ],
        mid: "— يثقان بنا لإدارة شكاواهما. كما استفاد",
        highlight: "PAM",
        after:
          " (برنامج الأغذية العالمي) من خبرة Infolog لتعهيد مركز اتصالاته في موريتانيا، وكذلك للرقم 1155 المخصص لـ COVID-19.",
      },
    ],
    stats: [
      {
        value: "100",
        suffix: "+",
        label: "وكلاء (ممثلون هاتفيون، مستشارون، مشرفون)",
      },
      {
        value: "10",
        suffix: "000+",
        label: "مكالمات تُعالَج يومياً",
      },
      {
        value: "24",
        suffix: "/7",
        label: "توفر مستمر",
      },
    ],
    atoutsLabel: "نقاط القوة",
    atoutsTitle: "منصة كاملة من طرف إلى طرف",
    atoutsLead:
      "الموارد البشرية: أكثر من 100 وكيل بين ممثلين هاتفيين ومشغّلين-مستشارين ومنقّبين-مستطلعين ومشرفين، يعالجون أكثر من 10 000 مكالمة يومياً، على مدار الساعة.",
    atouts: [
      {
        name: "SVI",
        title: "الخادم الصوتي التفاعلي",
        body: "يتيح SVI للخادم الحوار صوتياً مع المتصل وتفسير ردوده عبر رسائل DTMF، لتوجيه المكالمة تلقائياً.",
      },
      {
        name: "ACD",
        title: "Automatic Call Distribution",
        body: "تُصفّى جميع المكالمات الواردة عبر ACD، الذي يوزّعها بعد ذلك على الوكلاء المتاحين.",
      },
      {
        name: "CTI",
        title: "ربط الهاتف بالمعلوماتية",
        body: "يربط البيانات المجمّعة أثناء المكالمة بقاعدة البيانات، ليعرض على الوكيل كل معلومات المتصل حتى قبل بدء التواصل.",
      },
      {
        name: "SMS / VOCAL",
        title: "إرسال تلقائي",
        body: "نظام تلقائي لإرسال رسائل SMS ورسائل صوتية، لأتمتة حملات مكالماتكم الصادرة.",
      },
      {
        name: "SUPERVISION",
        title: "وحدة المراقبة",
        body: "رؤية شاملة لإدارة مركز الاتصال، في الزمن الحقيقي أو المؤجّل.",
      },
    ],
    refsLabel: "يثقون بنا",
    refsTitle: "المراجع",
    refs: [
      { name: "Mauritel", note: "فرع Maroc Télécom" },
      { name: "Mattel", note: "فرع Tunisie Télécom" },
      { name: "PAM", note: "برنامج الأغذية العالمي" },
      { name: "1155", note: "خط COVID-19" },
    ],
    ctaTitle: "مشروع مركز اتصال أو علاقة عملاء للتعهيد؟",
    ctaLabel: "تحدثوا إلى خبير",
  },
} as const;

export type CentreAppelContent = (typeof packs)["fr"];

export function getCentreAppel(locale: Locale = "fr"): CentreAppelContent {
  return pickContent(packs, locale);
}

/** @deprecated prefer getCentreAppel(locale) */
export const centreAppel = packs.fr;
