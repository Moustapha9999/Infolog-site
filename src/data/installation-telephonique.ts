import type { Locale } from "@/lib/i18n/config";
import { pickContent } from "@/lib/i18n/content";

const packs = {
  fr: {
    title: "Installation téléphonique pour entreprise",
    shortTitle: "Téléphonie entreprise",
    breadcrumb: "Formation & Support / Installation téléphonique",
    description:
      "Installation et maintenance de standards téléphoniques PABX, IPBX et PBX pour entreprises en Mauritanie. Cisco, Avaya, Alcatel, VoIP, SIP, CTI.",
    heroLead:
      "PABX – IPBX – PBX : réussir l'installation de son standard téléphonique pour augmenter sa productivité.",
    tags: ["PABX", "IPBX", "PBX", "VoIP", "SIP", "CTI"],
    introLabel: "Présentation",
    introTitle: "Des solutions modernes et personnalisées pour votre standard",
    intro: [
      {
        text: "Si vous avez besoin d'installer un standard téléphonique pour mieux communiquer avec vos clients, nous vous proposons des terminaux de qualité supérieure. Nous nous chargeons de la pose, mais également du suivi et de la maintenance des appareils.",
      },
      {
        before:
          "INFOLOG présente des solutions de standard téléphonique PABX et IPBX afin de permettre aux petites et moyennes entreprises de s'équiper dans les meilleures conditions. Notre équipe maîtrise parfaitement la",
        highlight: "téléphonie VoIP / IP",
        after:
          " et peut vous aider à concrétiser votre projet dans toute la Mauritanie.",
      },
    ],
    brandsLabel: "Partenaires & marques",
    brands: [
      "Cisco",
      "Avaya",
      "Alcatel",
      "Alcatel Lucent",
      "Gigaset",
      "Panasonic",
    ],
    servicesLabel: "Nos prestations",
    servicesTitle: "De la ligne au poste, un accompagnement complet",
    servicesLead:
      "Grâce à un partenariat établi avec les marques Cisco, Avaya et Alcatel, nous assurons votre confort à travers des services de création de lignes, de câblage, de portabilité des numéros, et bien plus.",
    services: [
      {
        title: "Création de lignes",
        body: "Mise en service de lignes téléphoniques adaptées à votre activité et à votre volume d'appels.",
      },
      {
        title: "Câblage",
        body: "Infrastructure câblée propre et pérenne pour raccorder postes, standard et réseau.",
      },
      {
        title: "Portabilité des numéros",
        body: "Conservation de vos numéros lors d'un changement d'opérateur ou de solution.",
      },
      {
        title: "Pose & mise en service",
        body: "Installation des terminaux et du standard, paramétrage et tests avant mise en production.",
      },
      {
        title: "Suivi & maintenance",
        body: "Accompagnement dans la durée : mises à jour, dépannage et évolution de votre parc.",
      },
      {
        title: "Optimisation des lignes",
        body: "Étude de vos besoins pour dimensionner et optimiser vos lignes et vos postes.",
      },
    ],
    solutionsLabel: "Solutions techniques",
    solutionsTitle: "Des standards dédiés aux entreprises",
    solutionsLead:
      "Installation et maintenance de standards téléphoniques, voix sur IP, autocommutateurs numériques, mise en réseau multi-sites des postes, SIP, RNIS et couplage téléphonie-informatique (CTI).",
    solutions: [
      { name: "VoIP / Voix sur IP", body: "Communication IP moderne, flexible et évolutive." },
      { name: "Autocommutateurs numériques", body: "Standards numériques pour structurer vos flux d'appels." },
      { name: "Multi-sites", body: "Mise en réseau des postes entre plusieurs sites." },
      { name: "SIP & RNIS", body: "Interconnexion SIP et RNIS selon votre infrastructure." },
      { name: "CTI", body: "Couplage téléphonie-informatique pour lier appels et données métier." },
      { name: "Standards sans fil", body: "Alcatel Lucent, Gigaset et Panasonic — raccordables en analogique, numérique et IP." },
    ],
    extrasLabel: "Systèmes associés",
    extrasTitle: "Au-delà du standard",
    extras: [
      "Messagerie vocale",
      "Enregistreur numérique d'appel",
      "Standard automatique",
      "Interphone",
      "Portier téléphonique",
    ],
    supportLabel: "Accompagnement",
    supportTitle: "Conseil, suivi et techniciens de proximité",
    supportBody:
      "Nous vous conseillons, assurons un suivi minutieux, mettons à jour vos systèmes, et mettons à votre disposition des consultants experts pour les études de terrain. Des techniciens locaux vous accompagnent à toutes les étapes de votre projet.",
    ctaTitle: "Un standard téléphonique à installer ou à moderniser ?",
    ctaLabel: "Parler à un expert",
  },
  en: {
    title: "Business telephone installation",
    shortTitle: "Business telephony",
    breadcrumb: "Training & Support / Telephone installation",
    description:
      "Installation and maintenance of PABX, IPBX and PBX telephone exchanges for businesses in Mauritania. Cisco, Avaya, Alcatel, VoIP, SIP, CTI.",
    heroLead:
      "PABX – IPBX – PBX: get your telephone exchange installed right to boost productivity.",
    tags: ["PABX", "IPBX", "PBX", "VoIP", "SIP", "CTI"],
    introLabel: "Overview",
    introTitle: "Modern, tailored solutions for your exchange",
    intro: [
      {
        text: "If you need to install a telephone exchange to communicate better with your customers, we offer high-quality terminals. We handle installation as well as ongoing support and device maintenance.",
      },
      {
        before:
          "INFOLOG provides PABX and IPBX telephone exchange solutions so small and medium-sized businesses can equip themselves in the best conditions. Our team fully masters",
        highlight: "VoIP / IP telephony",
        after: " and can help you deliver your project across Mauritania.",
      },
    ],
    brandsLabel: "Partners & brands",
    brands: [
      "Cisco",
      "Avaya",
      "Alcatel",
      "Alcatel Lucent",
      "Gigaset",
      "Panasonic",
    ],
    servicesLabel: "Our services",
    servicesTitle: "From line to handset, complete support",
    servicesLead:
      "Through established partnerships with Cisco, Avaya and Alcatel, we support you with line creation, cabling, number portability, and more.",
    services: [
      {
        title: "Line creation",
        body: "Commissioning of telephone lines suited to your activity and call volume.",
      },
      {
        title: "Cabling",
        body: "Clean, durable cabling infrastructure to connect handsets, exchange and network.",
      },
      {
        title: "Number portability",
        body: "Keep your numbers when changing operator or solution.",
      },
      {
        title: "Installation & commissioning",
        body: "Installation of terminals and exchange, configuration and testing before go-live.",
      },
      {
        title: "Support & maintenance",
        body: "Long-term support: updates, troubleshooting and evolution of your estate.",
      },
      {
        title: "Line optimisation",
        body: "Needs assessment to size and optimise your lines and handsets.",
      },
    ],
    solutionsLabel: "Technical solutions",
    solutionsTitle: "Exchanges built for business",
    solutionsLead:
      "Installation and maintenance of telephone exchanges, voice over IP, digital switches, multi-site handset networking, SIP, ISDN and computer-telephony integration (CTI).",
    solutions: [
      { name: "VoIP / Voice over IP", body: "Modern, flexible and scalable IP communication." },
      { name: "Digital switches", body: "Digital exchanges to structure your call flows." },
      { name: "Multi-site", body: "Networking handsets across multiple sites." },
      { name: "SIP & ISDN", body: "SIP and ISDN interconnection according to your infrastructure." },
      { name: "CTI", body: "Computer-telephony integration to link calls and business data." },
      { name: "Wireless exchanges", body: "Alcatel Lucent, Gigaset and Panasonic — connectable in analogue, digital and IP." },
    ],
    extrasLabel: "Associated systems",
    extrasTitle: "Beyond the exchange",
    extras: [
      "Voicemail",
      "Digital call recorder",
      "Automated attendant",
      "Intercom",
      "Door phone",
    ],
    supportLabel: "Support",
    supportTitle: "Advisory, follow-up and local technicians",
    supportBody:
      "We advise you, provide careful follow-up, update your systems, and make expert consultants available for field studies. Local technicians support you at every stage of your project.",
    ctaTitle: "A telephone exchange to install or modernise?",
    ctaLabel: "Talk to an expert",
  },
  ar: {
    title: "تركيب هاتف للمؤسسات",
    shortTitle: "هاتف المؤسسات",
    breadcrumb: "التكوين والدعم / تركيب الهاتف",
    description:
      "تركيب وصيانة مقاسم هاتفية PABX وIPBX وPBX للمؤسسات في موريتانيا. Cisco، Avaya، Alcatel، VoIP، SIP، CTI.",
    heroLead:
      "PABX – IPBX – PBX: نجاح تركيب مقسمكم الهاتفي لزيادة الإنتاجية.",
    tags: ["PABX", "IPBX", "PBX", "VoIP", "SIP", "CTI"],
    introLabel: "تقديم",
    introTitle: "حلول حديثة ومخصصة لمقسمكم",
    intro: [
      {
        text: "إذا احتجتم إلى تركيب مقسم هاتفي للتواصل بشكل أفضل مع عملائكم، نقترح طرفيات عالية الجودة. نتولى التركيب، وكذلك المتابعة وصيانة الأجهزة.",
      },
      {
        before:
          "تقدم INFOLOG حلول مقاسم هاتفية PABX وIPBX لتمكين المؤسسات الصغيرة والمتوسطة من التجهيز في أفضل الظروف. يتقن فريقنا تماماً",
        highlight: "هاتف VoIP / IP",
        after: " ويمكنه مساعدتكم على إنجاز مشروعكم في كل موريتانيا.",
      },
    ],
    brandsLabel: "الشركاء والعلامات",
    brands: [
      "Cisco",
      "Avaya",
      "Alcatel",
      "Alcatel Lucent",
      "Gigaset",
      "Panasonic",
    ],
    servicesLabel: "خدماتنا",
    servicesTitle: "من الخط إلى الجهاز، مرافقة كاملة",
    servicesLead:
      "بفضل شراكة قائمة مع علامات Cisco وAvaya وAlcatel، نضمن راحتكم عبر خدمات إنشاء الخطوط والكابلات وقابلية نقل الأرقام وغير ذلك.",
    services: [
      {
        title: "إنشاء الخطوط",
        body: "تشغيل خطوط هاتفية ملائمة لنشاطكم وحجم مكالماتكم.",
      },
      {
        title: "الكابلات",
        body: "بنية كابلات نظيفة ودائمة لربط الأجهزة والمقسم والشبكة.",
      },
      {
        title: "قابلية نقل الأرقام",
        body: "الاحتفاظ بأرقامكم عند تغيير المشغّل أو الحل.",
      },
      {
        title: "التركيب والتشغيل",
        body: "تركيب الطرفيات والمقسم، الضبط والاختبارات قبل الإنتاج.",
      },
      {
        title: "المتابعة والصيانة",
        body: "مرافقة على المدى الطويل: تحديثات، إصلاح وتطوير حظيرتكم.",
      },
      {
        title: "تحسين الخطوط",
        body: "دراسة احتياجاتكم لتحديد أبعاد خطوطكم وأجهزتكم وتحسينها.",
      },
    ],
    solutionsLabel: "حلول تقنية",
    solutionsTitle: "مقاسم مخصصة للمؤسسات",
    solutionsLead:
      "تركيب وصيانة المقاسم الهاتفية، الصوت عبر IP، المقاسم الرقمية، ربط الأجهزة متعددة المواقع، SIP وRNIS وربط الهاتف بالمعلوماتية (CTI).",
    solutions: [
      { name: "VoIP / الصوت عبر IP", body: "اتصال IP حديث ومرن وقابل للتطوير." },
      { name: "مقاسم رقمية", body: "مقاسم رقمية لهيكلة تدفقات مكالماتكم." },
      { name: "متعدد المواقع", body: "ربط الأجهزة بين عدة مواقع." },
      { name: "SIP وRNIS", body: "ربط SIP وRNIS وفق بنيتكم التحتية." },
      { name: "CTI", body: "ربط الهاتف بالمعلوماتية لربط المكالمات ببيانات العمل." },
      { name: "مقاسم لاسلكية", body: "Alcatel Lucent وGigaset وPanasonic — قابلة للربط تناظرياً ورقمياً وعبر IP." },
    ],
    extrasLabel: "أنظمة مرافقة",
    extrasTitle: "ما بعد المقسم",
    extras: [
      "البريد الصوتي",
      "مسجّل مكالمات رقمي",
      "مقسم آلي",
      "إنترفون",
      "بوابة هاتفية",
    ],
    supportLabel: "المرافقة",
    supportTitle: "استشارة ومتابعة وفنيون محليون",
    supportBody:
      "نقدم لكم المشورة، ونتابع بدقة، ونحدّث أنظمتكم، ونضع تحت تصرفكم مستشارين خبراء لدراسات الميدان. يرافقكم فنيون محليون في كل مراحل مشروعكم.",
    ctaTitle: "مقسم هاتفي للتركيب أو التحديث؟",
    ctaLabel: "تحدثوا إلى خبير",
  },
} as const;

export type InstallationTelephoniqueContent = (typeof packs)["fr"];

export function getInstallationTelephonique(
  locale: Locale = "fr",
): InstallationTelephoniqueContent {
  return pickContent(packs, locale);
}

/** @deprecated prefer getInstallationTelephonique(locale) */
export const installationTelephonique = packs.fr;
