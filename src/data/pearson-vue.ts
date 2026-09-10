import type { Locale } from "@/lib/i18n/config";
import { pickContent } from "@/lib/i18n/content";

const packs = {
  fr: {
    title: "Pearson VUE & E-Learning Center",
    shortTitle: "Pearson VUE",
    breadcrumb: "Formation & Support / Pearson VUE & E-Learning Center",
    description:
      "Centre de test Pearson VUE agréé opéré par Infolog en Mauritanie, et E-Learning Center pour se former à son rythme.",
    heroCaption:
      "Centre de test informatique agréé, opéré par Infolog en Mauritanie.",
    heroImage: "/brand/pearson-vue/hero.jpg",
    presentation: {
      label: "Présentation",
      title: "Pearson VUE Authorized Test Center",
      paragraphs: [
        {
          before: "Bienvenue dans notre centre de test Pearson VUE agréé.",
          highlight: "Infolog s'est associé à Pearson VUE",
          after:
            " pour proposer des examens informatiques et professionnels dans un environnement sécurisé, directement en Mauritanie.",
        },
        {
          text: "Pearson VUE est le leader mondial des tests informatiques pour les programmes universitaires et professionnels. Par l'intermédiaire de notre centre agréé, nous donnons accès aux certifications des plus grands éditeurs et organismes du secteur.",
        },
      ],
      partners: [
        "Oracle",
        "VMware",
        "Microsoft",
        "Novell",
        "IBM",
        "Cisco",
        "CompTIA",
        "AWS",
      ],
    },
    leader: {
      label: "Le leader mondial",
      title: "Des examens sur ordinateur, à grande échelle",
      before:
        "Chaque année, des millions de personnes passent un examen avec Pearson VUE — étudiants, professionnels de santé, enseignants, ingénieurs.",
      highlight: "Plus de 450 organismes d'accréditation",
      after:
        " à travers le monde lui font confiance pour gérer et distribuer leurs programmes d'examen, des tests pratiques en ligne jusqu'aux examens à enjeux élevés nécessitant les conditions de passation les plus sécurisées du secteur.",
    },
    featuresLabel: "Pourquoi nous choisir",
    featuresTitle: "Ce que vous trouvez dans notre centre",
    featuresLead:
      "En tant que partenaire agréé Pearson VUE, nous nous appuyons sur une technologie de pointe pour distribuer vos examens de manière fiable et offrir à chaque candidat le meilleur accompagnement possible, de la réservation jusqu'aux résultats.",
    features: [
      "Environnement d'examen sécurisé et surveillé",
      "Matériel et poste conformes aux exigences Pearson VUE",
      "Réservation de session flexible",
      "Accompagnement local, en Mauritanie",
    ],
    elearning: {
      id: "e-learning",
      label: "E-Learning Center",
      title: "Se former à son rythme",
      body: "Notre e-learning tire son attrait du fait de pouvoir apprendre à son rythme, sur un ordinateur, des contenus pédagogiques sur des sujets variés. Organisée en sessions ou modules, avec tests d'évaluations.",
    },
    ctaTitle: "Prêt à réserver votre session d'examen ?",
    ctaLabel: "Réserver une session",
  },
  en: {
    title: "Pearson VUE & E-Learning Center",
    shortTitle: "Pearson VUE",
    breadcrumb: "Training & Support / Pearson VUE & E-Learning Center",
    description:
      "Authorised Pearson VUE test centre operated by Infolog in Mauritania, and an E-Learning Center to train at your own pace.",
    heroCaption:
      "Authorised computer-based test centre, operated by Infolog in Mauritania.",
    heroImage: "/brand/pearson-vue/hero.jpg",
    presentation: {
      label: "Overview",
      title: "Pearson VUE Authorized Test Center",
      paragraphs: [
        {
          before: "Welcome to our authorised Pearson VUE test centre.",
          highlight: "Infolog has partnered with Pearson VUE",
          after:
            " to offer IT and professional exams in a secure environment, directly in Mauritania.",
        },
        {
          text: "Pearson VUE is the global leader in computer-based testing for academic and professional programmes. Through our authorised centre, we provide access to certifications from the leading vendors and bodies in the industry.",
        },
      ],
      partners: [
        "Oracle",
        "VMware",
        "Microsoft",
        "Novell",
        "IBM",
        "Cisco",
        "CompTIA",
        "AWS",
      ],
    },
    leader: {
      label: "The global leader",
      title: "Computer-based exams at scale",
      before:
        "Every year, millions of people take an exam with Pearson VUE — students, healthcare professionals, teachers, engineers.",
      highlight: "More than 450 accreditation bodies",
      after:
        " worldwide trust it to manage and deliver their exam programmes, from online practice tests to high-stakes exams requiring the industry’s most secure testing conditions.",
    },
    featuresLabel: "Why choose us",
    featuresTitle: "What you find in our centre",
    featuresLead:
      "As an authorised Pearson VUE partner, we rely on advanced technology to deliver your exams reliably and give every candidate the best possible support, from booking through to results.",
    features: [
      "Secure, proctored exam environment",
      "Hardware and workstation compliant with Pearson VUE requirements",
      "Flexible session booking",
      "Local support, in Mauritania",
    ],
    elearning: {
      id: "e-learning",
      label: "E-Learning Center",
      title: "Learn at your own pace",
      body: "Our e-learning appeal comes from learning at your own pace, on a computer, with educational content on a variety of topics. Organised in sessions or modules, with assessment tests.",
    },
    ctaTitle: "Ready to book your exam session?",
    ctaLabel: "Book a session",
  },
  ar: {
    title: "Pearson VUE ومركز التعلم الإلكتروني",
    shortTitle: "Pearson VUE",
    breadcrumb: "التكوين والدعم / Pearson VUE ومركز التعلم الإلكتروني",
    description:
      "مركز اختبار Pearson VUE معتمد تديره Infolog في موريتانيا، ومركز تعلم إلكتروني للتكوين وفق وتيرتكم.",
    heroCaption:
      "مركز اختبار معلوماتي معتمد، تديره Infolog في موريتانيا.",
    heroImage: "/brand/pearson-vue/hero.jpg",
    presentation: {
      label: "تقديم",
      title: "Pearson VUE Authorized Test Center",
      paragraphs: [
        {
          before: "مرحباً بكم في مركز اختبار Pearson VUE المعتمد لدينا.",
          highlight: "تعاونت Infolog مع Pearson VUE",
          after:
            " لتقديم امتحانات معلوماتية ومهنية في بيئة آمنة، مباشرة في موريتانيا.",
        },
        {
          text: "Pearson VUE هي الرائدة عالمياً في الاختبارات على الحاسوب للبرامج الجامعية والمهنية. عبر مركزنا المعتمد، نتيح الوصول إلى شهادات أكبر الناشرين والهيئات في القطاع.",
        },
      ],
      partners: [
        "Oracle",
        "VMware",
        "Microsoft",
        "Novell",
        "IBM",
        "Cisco",
        "CompTIA",
        "AWS",
      ],
    },
    leader: {
      label: "الرائد العالمي",
      title: "امتحانات على الحاسوب وعلى نطاق واسع",
      before:
        "كل عام، يجتاز ملايين الأشخاص امتحاناً مع Pearson VUE — طلاب، مهنيون صحيون، معلمون، مهندسون.",
      highlight: "أكثر من 450 هيئة اعتماد",
      after:
        " حول العالم تثق بها لإدارة وتوزيع برامج امتحاناتها، من الاختبارات العملية عبر الإنترنت إلى الامتحانات عالية المخاطر التي تتطلب أكثر شروط الإجراء أماناً في القطاع.",
    },
    featuresLabel: "لماذا تختاروننا",
    featuresTitle: "ما تجدونه في مركزنا",
    featuresLead:
      "بصفتنا شريكاً معتمداً لـ Pearson VUE، نعتمد على تقنية متقدمة لتوزيع امتحاناتكم بموثوقية وتقديم أفضل مرافقة ممكنة لكل مرشح، من الحجز إلى النتائج.",
    features: [
      "بيئة امتحان آمنة ومُراقَبة",
      "معدات ومحطة مطابقة لمتطلبات Pearson VUE",
      "حجز جلسة مرن",
      "مرافقة محلية في موريتانيا",
    ],
    elearning: {
      id: "e-learning",
      label: "E-Learning Center",
      title: "التكوين وفق وتيرتكم",
      body: "يستمد التعلم الإلكتروني لدينا جاذبيته من إمكانية التعلم وفق وتيرتكم، على حاسوب، بمحتويات تربوية في مواضيع متنوعة. منظّم في جلسات أو وحدات، مع اختبارات تقييم.",
    },
    ctaTitle: "مستعدون لحجز جلسة امتحانكم؟",
    ctaLabel: "حجز جلسة",
  },
} as const;

export type PearsonVueContent = (typeof packs)["fr"];

export function getPearsonVue(locale: Locale = "fr"): PearsonVueContent {
  return pickContent(packs, locale);
}

/** @deprecated prefer getPearsonVue(locale) */
export const pearsonVue = packs.fr;
