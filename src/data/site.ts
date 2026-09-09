export const site = {
  name: "INFOLOG",
  legalName: "INFOLOG",
  url: "https://infolog.mr",
  locale: "fr",
  city: "Nouakchott",
  country: "Mauritanie",
  region: "Mauritanie et Afrique",
  presence: ["Mauritanie", "Sénégal", "Côte d'Ivoire", "Mali"] as const,
  description:
    "INFOLOG est une société mauritanienne spécialisée dans les prestations de services, la fourniture et la distribution de solutions destinées aux professionnels.",
  about: {
    paragraphs: [
      "INFOLOG est une société mauritanienne spécialisée dans les prestations de services, la fourniture et la distribution de solutions destinées aux professionnels.",
      "Forte de plus de 15 ans de présence en Mauritanie, INFOLOG accompagne les entreprises et les organisations dans plusieurs secteurs d'activité, notamment la téléphonie, l'électroménager, l'électricité, les centres de contacts (Call Center), la monétique, le National Cash, le BTP ainsi que la certification Pearson VUE et l'E-Learning.",
      "Aujourd'hui, INFOLOG poursuit son évolution en intégrant davantage les solutions technologiques et numériques afin d'accompagner ses partenaires dans leur développement et leur transformation digitale.",
    ],
  },
  mission:
    "Notre mission est de fournir aux entreprises en Mauritanie et en Afrique les outils technologiques nécessaires à leur développement. Nous accompagnons nos partenaires dans leur évolution numérique en proposant des solutions adaptées à leurs besoins et à leurs réalités.",
  presenceText:
    "INFOLOG s'appuie sur une présence en Mauritanie et dans plusieurs pays de la sous-région, notamment au Sénégal, en Côte d'Ivoire et au Mali. Cette implantation nous permet de mieux comprendre les enjeux des entreprises locales et de construire des solutions adaptées aux différents marchés africains.",
  foundedNote: "Présente depuis 15 ans sur la Mauritanie.",
  phone: "+222 45 25 42 79",
  phoneTel: "+22245254279",
  phoneHref: "tel:+22245254279",
  phones: [
    { display: "+222 45 25 42 79", href: "tel:+22245254279" },
    { display: "+222 47 94 00 56", href: "tel:+22247940056" },
  ],
  email: "commercial@infolog.mr",
  address: "BP 1953, Rue Mohamed Lemine Ould Eye, Nouakchott, Mauritanie",
  street: "Rue Mohamed Lemine Ould Eye",
  postalBox: "BP 1953",
  plusCode: "32Q6+X6 Nouakchott, Mauritanie",
  geo: {
    lat: 18.089889,
    lng: -15.989528,
  },
  emailHref: "mailto:commercial@infolog.mr",
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=32Q6%2BX6+Nouakchott,+Mauritanie",
  mapsEmbed:
    "https://maps.google.com/maps?q=18.089889,-15.989528&hl=fr&z=17&output=embed",
  socials: [] as { label: string; href: string }[],
  /**
   * Vidéo « Nos activités » — à remplacer par l'URL YouTube officielle INFOLOG.
   * Exemple attendu : "https://www.youtube.com/watch?v=XXXX" ou l'ID seul.
   */
  activitiesVideoUrl: null as string | null,
} as const;

export const engagements = [
  "Conseil et expertise",
  "Écoute",
  "Réactivité",
  "Souplesse",
  "Professionnalisme",
  "Confidentialité",
] as const;

export const aboutServices = [
  "Conseil systèmes d'information",
  "Vente et intégration de solutions informatiques",
  "Aménagement de Datacenter",
  "Sécurité & Audit informatique",
  "Câblage informatique et fibre optique",
  "Téléphonie IP",
  "Solutions de gestion et analyse de données",
  "Collaboration et productivité d'entreprise",
  "Gestion électronique de documents",
  "Automatisation de processus métier",
  "ERP et logiciel métier",
  "Gestion de la relation clientèle (CRM)",
] as const;

export const nationalCash = {
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
} as const;

export const nav = [
  { href: "/", label: "Accueil" },
  { href: "/qui-sommes-nous", label: "Qui sommes-nous" },
  { href: "/contact", label: "Contact" },
] as const;
