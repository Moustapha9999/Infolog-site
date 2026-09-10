import type { Locale } from "@/lib/i18n/config";
import { pickContent } from "@/lib/i18n/content";

const packs = {
  fr: {
    title: "Transformation IT",
    shortTitle: "Transformation IT",
    breadcrumb: "Solutions IT & Digital / Transformation IT",
    description:
      "Infolog Group vous apporte le socle innovant de votre transformation digitale : architectures prédictives, stockage flash, réseaux haute performance, Software Defined et hybridation cloud.",
    heroLead:
      "Comment transformer l'entreprise si l'on ne transforme pas l'IT ? Infolog vous accompagne pour réinventer le socle technologique.",
    heroImage: "/brand/transformation-it/hero.jpg",
    visualImage: "/brand/transformation-it/digital-transform.jpg",
    introLabel: "Le défi",
    introTitle: "La transformation digitale passe par l'IT",
    intro: [
      {
        before:
          "De toute part nous entendons parler de Transformation Digitale, celle-ci s'occupe des applications, du marché, de l'avenir de l'entreprise. Mais comment transformer l'entreprise si l'on ne transforme pas l'IT ? Aujourd'hui, il faut aller vite et limiter les risques, accompagner la croissance des applications et maintenir leurs performances, aller vers le cloud et garantir la sécurité et continuer de sauvegarder nos données. Ce n'est pas en améliorant la bougie que la lampe est née, de même la transformation digitale passera par la transformation de l'IT —",
        highlight: "nous devons la réinventer",
        after: ".",
      },
    ],
    axesLabel: "Le socle à moderniser",
    axesTitle: "Performance, agilité et maîtrise des risques",
    axesLead:
      "Quand une nouvelle application démarre, personne ne connaît sa charge future ni sa durée de vie — il faudra pourtant répondre à sa croissance. Les architectures deviennent prédictives grâce au scale-out ; le stockage passe full flash voire NVMe ; le réseau évolue de 10 Gb/s vers 25, 40, 50, 100 Gb/s.",
    axes: [
      {
        title: "Architectures prédictives",
        body: "Le scale-out permet d'accompagner la croissance des applications sans surdimensionner dès le départ — une réponse progressive et maîtrisée à la charge réelle.",
      },
      {
        title: "Stockage full flash / NVMe",
        body: "Pour garantir la performance, le stockage évolue vers le full flash, voire le NVMe, afin de soutenir les charges applicatives exigeantes.",
      },
      {
        title: "Réseaux haute performance",
        body: "Le réseau passe de 10 Gb/s à 25, 40, 50 puis 100 Gb/s, pour absorber les flux croissants entre applications, stockage et cloud.",
      },
      {
        title: "Software Defined Everything",
        body: "Pour aller vite dans le déploiement et l'exploitation, le Software Defined Everything et ses API réduisent les coûts opérationnels par l'automatisation.",
      },
      {
        title: "Hybridation cloud",
        body: "La réponse globale est-elle dans le cloud ? Il y a peu de chance — en revanche l'hybridation semble être l'option. Reste à garantir sauvegarde et sécurité des données.",
      },
      {
        title: "Sécurité & sauvegarde",
        body: "Aller vers le cloud tout en garantissant la sécurité et la continuité de la sauvegarde des données : un impératif de la transformation IT.",
      },
    ],
    closingLabel: "Notre engagement",
    closingHighlight: "INFOLOG group",
    closingAfter:
      " vous apporte le socle innovant de votre transformation digitale.",
    ctaTitle: "Prêt à réinventer votre socle IT ?",
    ctaLabel: "Parler à un expert",
  },
  en: {
    title: "IT transformation",
    shortTitle: "IT transformation",
    breadcrumb: "IT & Digital Solutions / IT transformation",
    description:
      "Infolog Group provides the innovative foundation for your digital transformation: predictive architectures, flash storage, high-performance networks, Software Defined and cloud hybridisation.",
    heroLead:
      "How do you transform the business if you do not transform IT? Infolog helps you reinvent the technology foundation.",
    heroImage: "/brand/transformation-it/hero.jpg",
    visualImage: "/brand/transformation-it/digital-transform.jpg",
    introLabel: "The challenge",
    introTitle: "Digital transformation goes through IT",
    intro: [
      {
        before:
          "Everywhere we hear about Digital Transformation — applications, markets, the future of the business. But how do you transform the company if you do not transform IT? Today you must move fast and limit risk, support application growth and sustain performance, move toward the cloud while guaranteeing security, and keep backing up data. Improving the candle did not invent the lamp; likewise, digital transformation will go through IT transformation —",
        highlight: "we must reinvent it",
        after: ".",
      },
    ],
    axesLabel: "The foundation to modernise",
    axesTitle: "Performance, agility and risk control",
    axesLead:
      "When a new application starts, no one knows its future load or lifespan — yet growth must still be met. Architectures become predictive through scale-out; storage moves to full flash or even NVMe; networks evolve from 10 Gb/s to 25, 40, 50, 100 Gb/s.",
    axes: [
      {
        title: "Predictive architectures",
        body: "Scale-out supports application growth without oversizing from day one — a progressive, controlled response to real load.",
      },
      {
        title: "Full flash / NVMe storage",
        body: "To guarantee performance, storage evolves to full flash, or even NVMe, to support demanding application workloads.",
      },
      {
        title: "High-performance networks",
        body: "The network moves from 10 Gb/s to 25, 40, 50 then 100 Gb/s, to absorb growing traffic between applications, storage and cloud.",
      },
      {
        title: "Software Defined Everything",
        body: "To accelerate deployment and operations, Software Defined Everything and its APIs cut operating costs through automation.",
      },
      {
        title: "Cloud hybridisation",
        body: "Is the overall answer in the cloud? Unlikely — hybridisation looks like the option. What remains is guaranteeing backup and data security.",
      },
      {
        title: "Security & backup",
        body: "Moving toward the cloud while guaranteeing security and continuity of data backup: an imperative of IT transformation.",
      },
    ],
    closingLabel: "Our commitment",
    closingHighlight: "INFOLOG group",
    closingAfter: " provides the innovative foundation for your digital transformation.",
    ctaTitle: "Ready to reinvent your IT foundation?",
    ctaLabel: "Talk to an expert",
  },
  ar: {
    title: "التحول في تكنولوجيا المعلومات",
    shortTitle: "التحول IT",
    breadcrumb: "حلول تكنولوجيا المعلومات والرقمنة / التحول IT",
    description:
      "تقدم لكم مجموعة Infolog الأساس المبتكر لتحولكم الرقمي: بنى معمارية تنبؤية، تخزين فلاش، شبكات عالية الأداء، Software Defined وتهجين السحابة.",
    heroLead:
      "كيف نحوّل المؤسسة إن لم نحوّل تكنولوجيا المعلومات؟ ترافقكم Infolog لإعادة ابتكار الأساس التقني.",
    heroImage: "/brand/transformation-it/hero.jpg",
    visualImage: "/brand/transformation-it/digital-transform.jpg",
    introLabel: "التحدي",
    introTitle: "التحول الرقمي يمر عبر تكنولوجيا المعلومات",
    intro: [
      {
        before:
          "نسمع من كل جانب عن التحول الرقمي، وهو يتعلق بالتطبيقات والسوق ومستقبل المؤسسة. لكن كيف نحوّل المؤسسة إن لم نحوّل تكنولوجيا المعلومات؟ اليوم يجب التحرك بسرعة والحد من المخاطر، مواكبة نمو التطبيقات والحفاظ على أدائها، التوجه نحو السحابة وضمان الأمن ومواصلة نسخ بياناتنا احتياطياً. لم تولد المصباح من تحسين الشمعة، وكذلك سيمر التحول الرقمي عبر تحول تكنولوجيا المعلومات —",
        highlight: "يجب أن نعيد ابتكارها",
        after: ".",
      },
    ],
    axesLabel: "الأساس الذي يجب تحديثه",
    axesTitle: "الأداء والمرونة والتحكم في المخاطر",
    axesLead:
      "عندما يبدأ تطبيق جديد، لا أحد يعرف حمله المستقبلي ولا عمره — ومع ذلك يجب الاستجابة لنموه. تصبح البنى المعمارية تنبؤية بفضل scale-out؛ ينتقل التخزين إلى full flash بل وحتى NVMe؛ تتطور الشبكة من 10 Gb/s إلى 25 و40 و50 و100 Gb/s.",
    axes: [
      {
        title: "بنى معمارية تنبؤية",
        body: "يتيح scale-out مواكبة نمو التطبيقات دون المبالغة في الأبعاد من البداية — استجابة تدريجية ومُحكَمة للحمل الفعلي.",
      },
      {
        title: "تخزين full flash / NVMe",
        body: "لضمان الأداء، يتطور التخزين نحو full flash، بل وحتى NVMe، لدعم الأحمال التطبيقية المتطلبة.",
      },
      {
        title: "شبكات عالية الأداء",
        body: "تنتقل الشبكة من 10 Gb/s إلى 25 ثم 40 ثم 50 ثم 100 Gb/s، لاستيعاب التدفقات المتزايدة بين التطبيقات والتخزين والسحابة.",
      },
      {
        title: "Software Defined Everything",
        body: "للتسريع في النشر والتشغيل، يقلّل Software Defined Everything وواجهات API من تكاليف التشغيل عبر الأتمتة.",
      },
      {
        title: "تهجين السحابة",
        body: "هل الجواب الشامل في السحابة؟ احتمال ضعيف — أما التهجين فيبدو الخيار. يبقى ضمان النسخ الاحتياطي وأمن البيانات.",
      },
      {
        title: "الأمن والنسخ الاحتياطي",
        body: "التوجه نحو السحابة مع ضمان الأمن واستمرارية نسخ البيانات احتياطياً: ضرورة لتحول تكنولوجيا المعلومات.",
      },
    ],
    closingLabel: "التزامنا",
    closingHighlight: "INFOLOG group",
    closingAfter: " يقدم لكم الأساس المبتكر لتحولكم الرقمي.",
    ctaTitle: "مستعدون لإعادة ابتكار أساسكم في تكنولوجيا المعلومات؟",
    ctaLabel: "تحدثوا إلى خبير",
  },
} as const;

export type TransformationItContent = (typeof packs)["fr"];

export function getTransformationIt(
  locale: Locale = "fr",
): TransformationItContent {
  return pickContent(packs, locale);
}

/** @deprecated prefer getTransformationIt(locale) */
export const transformationIt = packs.fr;
