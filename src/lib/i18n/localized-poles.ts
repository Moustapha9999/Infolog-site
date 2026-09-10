import { poles, type Activity, type Pole } from "@/data/poles";
import type { Locale } from "@/lib/i18n/config";
import { pickContent } from "@/lib/i18n/content";
import { getDictionary } from "@/lib/i18n/dictionaries";

type ActivityCopy = { name: string; excerpt: string };

const activityPacks: Record<
  Locale,
  Record<string, ActivityCopy>
> = {
  fr: Object.fromEntries(
    poles.flatMap((pole) =>
      pole.activities.map((activity) => [
        activity.slug,
        { name: activity.name, excerpt: activity.excerpt },
      ]),
    ),
  ),
  en: {
    infogerance: {
      name: "Managed IT",
      excerpt:
        "Support packages to help you manage your IT infrastructure on a monthly or annual retainer.",
    },
    "data-center": {
      name: "Data center",
      excerpt:
        "Modernizing and simplifying the data center, with more than 15 years of experience in complex virtualized infrastructures.",
    },
    securite: {
      name: "Security",
      excerpt:
        "Proactive security strategy: firewall, managed antivirus, web filtering and access-rights policy.",
    },
    collaboration: {
      name: "Network and collaboration",
      excerpt:
        "LAN/WAN, SDN, SD-WAN infrastructures and collaboration tools: ToIP, videoconferencing, unified messaging.",
    },
    ged: {
      name: "EDM",
      excerpt: "INFOLOG, EDM service integrator.",
    },
    virtualisation: {
      name: "Virtualization",
      excerpt:
        "Server, desktop and application virtualization: VMware, Hyper-V, Citrix, RDS, thin clients.",
    },
    "transformation-it": {
      name: "IT transformation",
      excerpt:
        "INFOLOG group provides the innovative foundation for your digital transformation.",
    },
    "affichage-dynamique": {
      name: "Digital signage",
      excerpt:
        "Broadcasting messages and information on one or more screens for lobbies, retail points and venues.",
    },
    erp: {
      name: "ERP software",
      excerpt:
        "Integration of enterprise resource planning software, including SAP ERP, from analysis to maintenance.",
    },
    monetique: {
      name: "Payment systems",
      excerpt:
        "Organization dedicated to banking partners: hotline, terminal repair, NCR ATMs and payment systems.",
    },
    "national-cash": {
      name: "National Cash",
      excerpt:
        "A Mauritanian microfinance company licensed by the Central Bank of Mauritania, founded in February 2018.",
    },
    "pearson-vue": {
      name: "Pearson VUE",
      excerpt:
        "Authorized Pearson VUE test center: IT and professional exams in a secure environment.",
    },
    "e-learning": {
      name: "E-Learning Center",
      excerpt:
        "Learn at your own pace on a computer, with educational content organized in sessions or modules and assessment tests.",
    },
    "centre-appel": {
      name: "Call center",
      excerpt:
        "In-house platform, 100+ agents, 10,000+ calls per day, 24/7. References: Mauritel, Mattel, PAM.",
    },
    telephonie: {
      name: "Telephony",
      excerpt:
        "Samsung, Apple and Nokia distribution, certified after-sales service, and PABX / IPBX installation for enterprises.",
    },
    btp: {
      name: "Construction",
      excerpt:
        "General building contractor: shell, finishing, civil engineering, new builds, rehabilitation and industrial maintenance.",
    },
    electromenager: {
      name: "Home appliances",
      excerpt:
        "More than 15 years with Samsung: supply and service of home appliances for professionals and individuals.",
    },
    energie: {
      name: "Energy",
      excerpt:
        "Consulting and engineering, measurement equipment, Siemens partnership.",
    },
  },
  ar: {
    infogerance: {
      name: "إدارة الأنظمة",
      excerpt:
        "باقات مساعدة لمرافقتكم في إدارة بنيتكم التحتية المعلوماتية باشتراك شهري أو سنوي.",
    },
    "data-center": {
      name: "مركز البيانات",
      excerpt:
        "تحديث وتبسيط مركز البيانات، مع أكثر من 15 عامًا من الخبرة في البنى الافتراضية المعقدة.",
    },
    securite: {
      name: "الأمن",
      excerpt:
        "استراتيجية أمن استباقية: جدار ناري، مضاد فيروسات مُدار، تصفية ويب وسياسة صلاحيات الوصول.",
    },
    collaboration: {
      name: "الشبكة والتعاون",
      excerpt:
        "بنى LAN/WAN و SDN و SD-WAN وأدوات التعاون: الهاتف عبر IP والمؤتمرات المرئية والرسائل الموحدة.",
    },
    ged: {
      name: "إدارة الوثائق",
      excerpt: "INFOLOG، مُكامل لخدمات الإدارة الإلكترونية للوثائق.",
    },
    virtualisation: {
      name: "الافتراضية",
      excerpt:
        "افتراضية الخوادم وأجهزة العمل والتطبيقات: VMware و Hyper-V و Citrix و RDS والعملاء الخفيفون.",
    },
    "transformation-it": {
      name: "التحول المعلوماتي",
      excerpt:
        "توفر مجموعة INFOLOG الأساس المبتكر لتحولكم الرقمي.",
    },
    "affichage-dynamique": {
      name: "العرض الديناميكي",
      excerpt:
        "بث الرسائل والمعلومات على شاشة أو أكثر لقاعات الاستقبال ونقاط البيع والمؤسسات.",
    },
    erp: {
      name: "برمجيات ERP",
      excerpt:
        "تكامل برمجيات التخطيط الموارد، بما فيها SAP ERP، من التحليل إلى الصيانة.",
    },
    monetique: {
      name: "الدفع الإلكتروني",
      excerpt:
        "تنظيم مخصص للشركاء المصرفيين: خط ساخن، إصلاح الأجهزة الطرفية، صرافات NCR وأنظمة الدفع.",
    },
    "national-cash": {
      name: "ناشونال كاش",
      excerpt:
        "شركة موريتانية للتمويل الأصغر مرخّصة من البنك المركزي الموريتاني، تأسست في فبراير 2018.",
    },
    "pearson-vue": {
      name: "Pearson VUE",
      excerpt:
        "مركز اختبار Pearson VUE معتمد: امتحانات معلوماتية ومهنية في بيئة آمنة.",
    },
    "e-learning": {
      name: "مركز التعلم الإلكتروني",
      excerpt:
        "التعلم بالوتيرة الخاصة على الحاسوب، بمحتويات تربوية منظمة في جلسات أو وحدات مع اختبارات تقييم.",
    },
    "centre-appel": {
      name: "مركز الاتصال",
      excerpt:
        "منصة خاصة، أكثر من 100 وكيل، أكثر من 10 000 مكالمة يوميًا، على مدار الساعة. مراجع: Mauritel و Mattel و PAM.",
    },
    telephonie: {
      name: "الهاتف",
      excerpt:
        "توزيع Samsung و Apple و Nokia، وخدمة ما بعد البيع المعتمدة، وتركيب مقاسم PABX / IPBX للمؤسسات.",
    },
    btp: {
      name: "البناء والأشغال",
      excerpt:
        "مقاولة عامة للبناء: أشغال كبرى وتشطيبات وهندسة مدنية، جديد وترميم وصيانة صناعية.",
    },
    electromenager: {
      name: "الأجهزة المنزلية",
      excerpt:
        "أكثر من 15 عامًا مع Samsung: توريد وخدمة الأجهزة المنزلية للمهنيين والأفراد.",
    },
    energie: {
      name: "الطاقة",
      excerpt:
        "استشارات وهندسة، تجهيزات قياس، وشراكة Siemens.",
    },
  },
};

function localizeActivity(activity: Activity, locale: Locale): Activity {
  const pack = pickContent(activityPacks, locale)[activity.slug];
  if (!pack) return activity;
  return {
    ...activity,
    name: pack.name,
    excerpt: pack.excerpt,
  };
}

export function getLocalizedPoles(locale: Locale): Pole[] {
  const dictionary = getDictionary(locale);
  return poles.map((pole) => {
    const copy = dictionary.poles[pole.id];
    return {
      ...pole,
      name: copy?.name ?? pole.name,
      shortName: copy?.shortName ?? pole.shortName,
      intro: copy?.intro ?? pole.intro,
      description: copy?.description ?? pole.description,
      activities: pole.activities.map((activity) =>
        localizeActivity(activity, locale),
      ),
    };
  });
}
