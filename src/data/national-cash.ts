import type { Locale } from "@/lib/i18n/config";
import { pickContent } from "@/lib/i18n/content";

export type NationalCashCopy = {
  title: string;
  description: string;
  website: {
    href: string;
    host: string;
    cta: string;
  };
  paragraphs: readonly string[];
  highlight: readonly string[];
  stats: readonly {
    value: number;
    suffix: string;
    label: string;
    grouped?: boolean;
  }[];
  productsTitle: string;
  products: readonly { title: string; description: string }[];
  pep: { title: string; description: string };
  agencies: { title: string; text: string };
  mobileAgency: {
    title: string;
    text: string;
    cards: readonly { title: string; description: string }[];
  };
};

const fr: NationalCashCopy = {
  title: "National Cash (NC)",
  description:
    "Société anonyme de microfinance mauritanienne agréée par la Banque Centrale de Mauritanie, créée en février 2018.",
  website: {
    href: "https://nationalcash.mr",
    host: "nationalcash.mr",
    cta: "Accéder au site National Cash",
  },
  paragraphs: [
    "National Cash (NC) est une société anonyme de microfinance mauritanienne agréée par la Banque Centrale de Mauritanie (BCM). Créée en février 2018 et leader du secteur en Mauritanie, NC a pour objectif de favoriser l'inclusion économique et sociale des populations vulnérables (notamment les femmes, les jeunes et les populations rurales) et de contribuer au développement économique du pays. Elle œuvre en particulier pour la promotion de l'entrepreneuriat et contribue ainsi à l'effort national pour l'auto-emploi dans les quartiers et zones rurales défavorisés.",
    "National Cash offre à ses clients des services diversifiés et adaptés aux besoins de chaque micro-entrepreneur grâce à un réseau d'agences réparties sur l'ensemble du territoire. Elle les accompagne ainsi dans le maintien et le développement de leur activité pour améliorer durablement leurs conditions de vie.",
  ],
  highlight: [
    "National Cash offre à ses clients des services diversifiés et adaptés aux besoins de chaque type de micro-entrepreneur à travers un réseau de plusieurs agences réparties sur l'ensemble du territoire. Ainsi, elle les aide à maintenir, développer leurs micro-entreprises et leur permet d'améliorer leurs conditions de vie ainsi que celles de leurs familles.",
    "A travers son partenariat exclusif avec Samsung Mauritanie, NC offre aussi à ses clients un prêt personnel pour financer leurs équipements numériques, informatiques ou électroménager de la marque Samsung tels que (Smartphones, Ordinateurs, tablettes, téléviseurs, climatiseurs, machine à laver et réfrigérateurs).",
  ],
  stats: [
    { value: 550, suffix: "+", label: "Crédits décaissés" },
    { value: 40, suffix: "%", label: "Des personnes financées sont des femmes" },
    { value: 50, suffix: "%", label: "Des personnes financées sont des jeunes" },
    { value: 2_300_185_856, suffix: "", grouped: true, label: "MRO décaissés" },
  ],
  productsTitle: "Les produits d'épargnes",
  products: [
    {
      title: "Le dépôt à vue (compte courant)",
      description:
        "Produit de base obligatoire pour tout client. Il est utilisé comme support pour les opérations de versement, retrait, virement, prélèvement et paiement, encaissement de chèques et remboursement de prêts.",
    },
    {
      title: "Les Épargnes Tontines",
      description:
        "National Cash offre un service sécurisé de collecte journalière de vos épargnes sur place auprès des tontiniers sous hauts contrôles et surveillance. La somme à miser pour l'épargne tontine est au choix du client selon ses besoins. Les fonds cotisés peuvent être retirés ou transférés sur le compte d'épargne du client.",
    },
    {
      title: "Dépôt à terme (DAT)",
      description:
        "Le dépôt à terme est rémunéré à un taux convenu entre les parties. Il est effectué en des termes partenariaux convenus entre le client et la mutuelle. Possibilité de bénéficier d'un prêt de montant supérieur à la somme épargnée sur une durée équivalente pour financer un projet identifié au départ.",
    },
    {
      title: "Crédit Mewelni",
      description:
        "Prêt octroyé individuellement aux micros entrepreneurs(e)s pour renforcer leurs fonds de roulement, acquérir des machines, outils et équipements de travail ayant au moins un an d'expérience dans le projet, avec des activités assez structurées et désirant des montants plus élevés. Ses montants varient entre 30 000 MRU et 300 000 MRU avec une durée de remboursement entre 9 et 18 mois.",
    },
    {
      title: "Crédit Tekafoul",
      description:
        "Prêt destiné pour les groupes de micro-entrepreneur(e)s solidaires, se composant de 3 à 12 entrepreneurs (es), et désirant développer une activité génératrice de revenu, avec des montants évolutifs variant entre 5 000 MRU et 10 000 MRU, pour chaque membre du groupe, et une durée de remboursement de 6 à 12 mois. Il est caractérisé par l'entraide et la mutualité des membres composant le groupe, qui s'engagent à se porter caution pour le remboursement de leur prêt.",
    },
    {
      title: "Crédit Beyti",
      description:
        "Prêt individuel octroyé à des micros-entrepreneur(e)s ou salariés ayant des revenus limités et désirant améliorer leur cadre de vie. Il permet l'amélioration des conditions d'habitat de la population démunie, en leur permettant la construction ou la réhabilitation des logements, le raccordement au réseau d'assainissement et le raccordement d'eau ou d'électricité.",
    },
  ],
  pep: {
    title: "Plan d'épargne projet PEP",
    description:
      "Versements mensuels d'un montant constant sur une durée fixée dans le contrat PEP.",
  },
  agencies: {
    title: "Une localisation stratégique des 5 agences",
    text: "La localisation des 5 agences National Cash (Poly Clinique, marché charbon, marché point chaud, Chami et Nouadhibou) avec deux agences mobiles dans les territoires de l'intérieur et les quartiers populaires, proche de la cible et accessible par tous, facilite l'accès aux microentrepreneurs au financement, tout en leur garantissant un suivi de qualité post financement. Cette situation idéale assure à National Cash la possibilité d'interagir étroitement avec les autres acteurs locaux de l'inclusion sociale et économique. Nous envisageons l'ouverture prochaine de six nouvelles agences fixes dans les quartiers d'Arafat, Sebkha, El Mina, port autonome de Nouakchott, port autonome de Tanit, et Toujounine.",
  },
  mobileAgency: {
    title: "Agence Mobile",
    text: "Pour aller vers ses clients, National Cash se développe grâce à ses agences mobiles aménagées à l'intérieur de bus équipés, vise à rapprocher les services des clients à l'intérieur des cités populaires et des régions défavorisées. Des équipes de jeunes conseillers sont à la disposition des micro-entrepreneurs et des porteurs de projets pour les orienter et les conseiller.",
    cards: [
      {
        title: "Dépôt à terme (DAT)",
        description:
          "Le dépôt à terme est rémunéré à un taux convenu entre les parties. Il est effectué en des termes partenariaux convenus entre le client et la mutuelle. Possibilité de bénéficier d'un prêt de montant supérieur à la somme épargnée sur une durée équivalente pour financer un projet identifié au départ.",
      },
      {
        title: "Crédit Mewelni",
        description:
          "Prêt octroyé Individuellement aux micros entrepreneurs(e)s pour renforcer leurs fonds de roulement, acquérir des machines, outils et équipements de travail, ayant au moins un an d'expérience dans le projet, avec des activités assez structurées et désirant des montants plus élevés. Ses montants varient entre 30 000 MRO et 300 000 MRO avec une durée de remboursement entre 9 et 18 mois.",
      },
    ],
  },
};

const en: NationalCashCopy = {
  title: "National Cash (NC)",
  description:
    "A Mauritanian microfinance public limited company licensed by the Central Bank of Mauritania, founded in February 2018.",
  website: {
    href: "https://nationalcash.mr",
    host: "nationalcash.mr",
    cta: "Visit the National Cash website",
  },
  paragraphs: [
    "National Cash (NC) is a Mauritanian microfinance public limited company licensed by the Central Bank of Mauritania (BCM). Founded in February 2018 and a leader in its sector in Mauritania, NC aims to foster the economic and social inclusion of vulnerable populations (notably women, youth and rural communities) and to contribute to the country's economic development. It works in particular to promote entrepreneurship and thus supports the national effort for self-employment in disadvantaged neighborhoods and rural areas.",
    "National Cash offers its clients diversified services tailored to each micro-entrepreneur's needs through a network of branches across the country. It supports them in sustaining and growing their activity to lastingly improve their living conditions.",
  ],
  highlight: [
    "National Cash offers its clients diversified services tailored to every type of micro-entrepreneur through a network of branches across the territory. It helps them maintain and grow their micro-enterprises and improve their living conditions and those of their families.",
    "Through its exclusive partnership with Samsung Mauritania, NC also offers personal loans to finance Samsung digital, IT or home appliances such as smartphones, computers, tablets, TVs, air conditioners, washing machines and refrigerators.",
  ],
  stats: [
    { value: 550, suffix: "+", label: "Loans disbursed" },
    { value: 40, suffix: "%", label: "Of financed people are women" },
    { value: 50, suffix: "%", label: "Of financed people are youth" },
    { value: 2_300_185_856, suffix: "", grouped: true, label: "MRO disbursed" },
  ],
  productsTitle: "Savings products",
  products: [
    {
      title: "Demand deposit (current account)",
      description:
        "Mandatory base product for every client. It supports deposits, withdrawals, transfers, direct debits and payments, cheque cashing and loan repayments.",
    },
    {
      title: "Tontine savings",
      description:
        "National Cash offers a secure daily collection service for your savings on site with tontine collectors under strict control and supervision. The amount set aside for tontine savings is chosen by the client according to their needs. Contributed funds can be withdrawn or transferred to the client's savings account.",
    },
    {
      title: "Term deposit (DAT)",
      description:
        "The term deposit is remunerated at a rate agreed between the parties. It is made under partnership terms agreed between the client and the mutual. Possibility to obtain a loan larger than the amount saved over an equivalent period to finance a project identified upfront.",
    },
    {
      title: "Crédit Mewelni",
      description:
        "Individual loan for micro-entrepreneurs with at least one year of experience in a fairly structured activity who need higher amounts to strengthen working capital or acquire tools and equipment. Amounts range from 30,000 MRU to 300,000 MRU with repayment over 9 to 18 months.",
    },
    {
      title: "Crédit Tekafoul",
      description:
        "Loan for solidarity groups of 3 to 12 micro-entrepreneurs seeking to develop an income-generating activity, with progressive amounts from 5,000 MRU to 10,000 MRU per member and repayment over 6 to 12 months. It relies on mutual support: group members guarantee each other's repayments.",
    },
    {
      title: "Crédit Beyti",
      description:
        "Individual loan for micro-entrepreneurs or employees with limited income who wish to improve their living environment. It supports housing construction or rehabilitation, connection to sanitation networks, and water or electricity connections for low-income populations.",
    },
  ],
  pep: {
    title: "PEP project savings plan",
    description:
      "Monthly payments of a fixed amount over a duration set in the PEP contract.",
  },
  agencies: {
    title: "A strategic footprint of 5 branches",
    text: "The location of National Cash's 5 branches (Poly Clinique, marché charbon, marché point chaud, Chami and Nouadhibou), with two mobile agencies in inland territories and popular neighborhoods, close to the target audience and accessible to all, makes financing easier for micro-entrepreneurs while ensuring quality post-financing follow-up. This ideal setup lets National Cash engage closely with other local actors of social and economic inclusion. We plan to open six new fixed branches soon in Arafat, Sebkha, El Mina, the autonomous port of Nouakchott, the autonomous port of Tanit, and Toujounine.",
  },
  mobileAgency: {
    title: "Mobile agency",
    text: "To reach its clients, National Cash expands through mobile agencies fitted inside equipped buses, bringing services closer to popular neighborhoods and underserved regions. Teams of young advisors are available to guide and advise micro-entrepreneurs and project holders.",
    cards: [
      {
        title: "Term deposit (DAT)",
        description:
          "The term deposit is remunerated at a rate agreed between the parties. It is made under partnership terms agreed between the client and the mutual. Possibility to obtain a loan larger than the amount saved over an equivalent period to finance a project identified upfront.",
      },
      {
        title: "Crédit Mewelni",
        description:
          "Individual loan for micro-entrepreneurs with at least one year of experience in a fairly structured activity who need higher amounts to strengthen working capital or acquire tools and equipment. Amounts range from 30,000 MRO to 300,000 MRO with repayment over 9 to 18 months.",
      },
    ],
  },
};

const ar: NationalCashCopy = {
  title: "National Cash (NC)",
  description:
    "شركة مساهمة موريتانية للتمويل الأصغر مرخّصة من البنك المركزي الموريتاني، تأسست في فبراير 2018.",
  website: {
    href: "https://nationalcash.mr",
    host: "nationalcash.mr",
    cta: "زيارة موقع National Cash",
  },
  paragraphs: [
    "ناشونال كاش (NC) شركة مساهمة موريتانية للتمويل الأصغر مرخّصة من البنك المركزي الموريتاني (BCM). تأسست في فبراير 2018 وهي رائدة في قطاعها بموريتانيا، وتهدف إلى تعزيز الإدماج الاقتصادي والاجتماعي للفئات الهشة (لا سيما النساء والشباب والسكان الريفيين) والمساهمة في التنمية الاقتصادية للبلاد. وتعمل خصوصًا على تشجيع ريادة الأعمال وتدعم بذلك الجهد الوطني للتشغيل الذاتي في الأحياء والمناطق الريفية المحرومة.",
    "تقدم ناشونال كاش لعملائها خدمات متنوعة وملائمة لاحتياجات كل رائد أعمال صغير عبر شبكة وكالات موزعة على كامل التراب. وترافقهم في الحفاظ على نشاطهم وتطويره لتحسين ظروف عيشهم بشكل مستدام.",
  ],
  highlight: [
    "تقدم ناشونال كاش لعملائها خدمات متنوعة وملائمة لكل نوع من رواد الأعمال الصغار عبر شبكة من الوكالات في أنحاء البلاد. وبذلك تساعدهم على الحفاظ على مؤسساتهم الصغيرة وتطويرها وتحسين ظروف عيشهم وعائلاتهم.",
    "ومن خلال شراكتها الحصرية مع Samsung موريتانيا، تتيح NC أيضًا قرضًا شخصيًا لتمويل التجهيزات الرقمية أو المعلوماتية أو المنزلية من علامة Samsung مثل الهواتف الذكية والحواسيب والأجهزة اللوحية وأجهزة التلفاز والمكيفات والغسالات والثلاجات.",
  ],
  stats: [
    { value: 550, suffix: "+", label: "قروض مُصروفة" },
    { value: 40, suffix: "%", label: "من المموَّلين نساء" },
    { value: 50, suffix: "%", label: "من المموَّلين شباب" },
    { value: 2_300_185_856, suffix: "", grouped: true, label: "أوقية مصروفة (MRO)" },
  ],
  productsTitle: "منتجات الادخار",
  products: [
    {
      title: "الوديعة تحت الطلب (حساب جاري)",
      description:
        "منتج أساسي إلزامي لكل عميل. يُستخدم كدعامة لعمليات الإيداع والسحب والتحويل والاقتطاع والدفع وتحصيل الشيكات وسداد القروض.",
    },
    {
      title: "ادخار التوناتين",
      description:
        "تقدم ناشونال كاش خدمة آمنة للتحصيل اليومي لمدخراتكم ميدانيًا لدى جامعي التوناتين تحت رقابة ومراقبة مشددة. مبلغ الادخار في التوناتين يحدده العميل حسب احتياجاته. ويمكن سحب الأموال المجمّعة أو تحويلها إلى حساب ادخار العميل.",
    },
    {
      title: "الوديعة لأجل (DAT)",
      description:
        "تُكافأ الوديعة لأجل بنسبة متفق عليها بين الأطراف، وفق شروط شراكة بين العميل والجمعية. مع إمكانية الحصول على قرض بمبلغ أعلى من المبلغ المدَّخر لمدة مماثلة لتمويل مشروع محدد مسبقًا.",
    },
    {
      title: "Crédit Mewelni",
      description:
        "قرض يُمنح فرديًا لرواد الأعمال الصغار لتعزيز رأس المال العامل أو اقتناء آلات وأدوات وتجهيزات عمل، لمن لديهم سنة على الأقل من الخبرة في المشروع وأنشطة منظمة نسبيًا ويحتاجون مبالغ أعلى. تتراوح المبالغ بين 30 000 و 300 000 أوقية مع مدة سداد من 9 إلى 18 شهرًا.",
    },
    {
      title: "Crédit Tekafoul",
      description:
        "قرض موجه لمجموعات متضامنة من 3 إلى 12 رائد أعمال يرغبون في تطوير نشاط مدر للدخل، بمبالغ تصاعدية بين 5 000 و 10 000 أوقية لكل عضو ومدة سداد من 6 إلى 12 شهرًا. يتميز بالتضامن والتكافل بين أعضاء المجموعة الذين يلتزمون بضمان سداد قروضهم.",
    },
    {
      title: "Crédit Beyti",
      description:
        "قرض فردي لرواد أعمال صغار أو موظفين ذوي دخل محدود يرغبون في تحسين إطار عيشهم. يساهم في تحسين ظروف السكن للسكان محدودي الدخل عبر البناء أو الترميم والربط بشبكات الصرف الصحي والماء أو الكهرباء.",
    },
  ],
  pep: {
    title: "خطة ادخار المشروع PEP",
    description:
      "دفعات شهرية بمبلغ ثابت على مدة محددة في عقد PEP.",
  },
  agencies: {
    title: "تموقع استراتيجي لـ 5 وكالات",
    text: "تموقع وكالات ناشونال كاش الخمس (بولي كلينيك، سوق الفحم، سوق بوان شو، الشامي ونواذيبو) مع وكالتين متنقلتين في المناطق الداخلية والأحياء الشعبية، قريبة من الجمهور المستهدف ومتاحة للجميع، يسهّل وصول رواد الأعمال الصغار إلى التمويل مع ضمان متابعة جيدة بعد التمويل. يتيح هذا الوضع المثالي لناشونال كاش التفاعل الوثيق مع الفاعلين المحليين الآخرين للإدماج الاجتماعي والاقتصادي. نخطط لافتتاح ست وكالات ثابتة جديدة قريبًا في عرفات وسبخة والميناء وميناء نواكشوط المستقل وميناء تانيت المستقل وتوجونين.",
  },
  mobileAgency: {
    title: "الوكالة المتنقلة",
    text: "للتقرب من عملائها، تتطور ناشونال كاش عبر وكالات متنقلة مجهزة داخل حافلات، لتقريب الخدمات من الأحياء الشعبية والمناطق المحرومة. فرق من المستشارين الشباب في خدمة رواد الأعمال الصغار وحاملي المشاريع لتوجيههم ونصحهم.",
    cards: [
      {
        title: "الوديعة لأجل (DAT)",
        description:
          "تُكافأ الوديعة لأجل بنسبة متفق عليها بين الأطراف، وفق شروط شراكة بين العميل والجمعية. مع إمكانية الحصول على قرض بمبلغ أعلى من المبلغ المدَّخر لمدة مماثلة لتمويل مشروع محدد مسبقًا.",
      },
      {
        title: "Crédit Mewelni",
        description:
          "قرض يُمنح فرديًا لرواد الأعمال الصغار لتعزيز رأس المال العامل أو اقتناء آلات وأدوات وتجهيزات عمل، لمن لديهم سنة على الأقل من الخبرة في المشروع وأنشطة منظمة نسبيًا ويحتاجون مبالغ أعلى. تتراوح المبالغ بين 30 000 و 300 000 أوقية (MRO) مع مدة سداد من 9 إلى 18 شهرًا.",
      },
    ],
  },
};

const nationalCashPacks = { fr, en, ar } as const;

export function getNationalCash(locale: Locale): NationalCashCopy {
  return pickContent(nationalCashPacks, locale);
}

/** French default for legacy imports. */
export const nationalCash = fr;
