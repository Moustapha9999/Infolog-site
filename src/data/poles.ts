export type Activity = {
  slug: string;
  name: string;
  excerpt: string;
  body: string[];
};

export type Pole = {
  id: "it" | "finance" | "support" | "industrie";
  code: string;
  slug: string;
  name: string;
  shortName: string;
  intro: string;
  description: string;
  activities: Activity[];
};

export const poles: Pole[] = [
  {
    id: "it",
    code: "P-01",
    slug: "solutions-it-digital",
    name: "Solutions IT & Digital",
    shortName: "IT & Digital",
    intro:
      "Nous gérons, sécurisons et modernisons votre système d'information, au quotidien.",
    description:
      "Infogérance, infrastructures, sécurité, collaboration, GED, virtualisation, transformation IT, affichage dynamique et intégration ERP.",
    activities: [
      {
        slug: "infogerance",
        name: "Infogérance",
        excerpt:
          "Formules d'assistance pour vous accompagner dans la gestion de votre infrastructure informatique, sur la base d'un forfait mensuel ou annuel.",
        body: [
          "INFOLOG vous propose diverses formules d'assistance dans le but de vous accompagner jour après jour dans la gestion de votre infrastructure informatique. Sur base d'un forfait mensuel ou annuel, nos ingénieurs seront à votre écoute et à votre disposition pour vous aider à maintenir une infrastructure la plus performante possible, sans faille pour les besoins de votre entreprise.",
          "Ces formules à la carte, toujours basées sur un Service Level Agreement, s'adaptent parfaitement à vos besoins : contrôles quotidiens de vos sauvegardes, assistance ponctuelle une fois par semaine ou prise en charge totale ou partielle de vos activités informatiques.",
          "Notre mission est de permettre à votre organisation de se concentrer sur son cœur de métier tandis que nos experts agissent en complément de vos ressources informatiques internes.",
        ],
      },
      {
        slug: "data-center",
        name: "Data center",
        excerpt:
          "Modernisation et simplification du datacenter, avec plus de 15 ans d'expérience dans les infrastructures virtualisées complexes.",
        body: [
          "Le data center doit être modernisé pour répondre aux enjeux de l'entreprise et simplifier son utilisation tout en garantissant les performances attendues. Le cloud n'étant pas une solution globale, l'infrastructure sur site doit évoluer.",
          "Le groupe INFOLOG simplifie le datacenter et travaille avec des partenaires pour vous accompagner.",
        ],
      },
      {
        slug: "securite",
        name: "Sécurité",
        excerpt:
          "Stratégie de sécurité proactive : pare-feu, antivirus managé, filtrage web et politique de droits d'accès.",
        body: [
          "La sécurité fait partie de la problématique liée à l'utilisation de l'informatique. Plusieurs facteurs peuvent menacer votre infrastructure informatique que ce soit des virus, des piratages et/ou l'insouciance de vos utilisateurs.",
          "À travers la mise en place d'une stratégie de sécurité efficace INFOLOG s'appuie sur l'expertise d'un pôle d'ingénieurs chargés de mettre en place et de maintenir un système de sécurité efficace tant pour vos matériels que vos données.",
          "Pare-feu, antivirus managé, filtrage web, politique de droits d'accès de vos fichiers partagés sont autant d'outils que nous mettons en place pour sécuriser votre infrastructure informatique.",
        ],
      },
      {
        slug: "collaboration",
        name: "Réseau et collaboration",
        excerpt:
          "Infrastructures LAN/WAN, SDN, SD-WAN et outils de collaboration : ToIP, visioconférence, messagerie unifiée.",
        body: [
          "Les infrastructures de communication sont aujourd'hui l'axe central du déploiement de nouveaux services et le moteur essentiel de la transformation numérique.",
          "Nous couvrons les principaux besoins en communication de nos clients, en apportant des solutions aux environnements LAN et WAN, à travers une large gamme de technologies fixes et sans fil. Notre offre en infrastructures réseaux se complète par une offre en collaboration destinée à améliorer la communication, augmenter la productivité et améliorer la gestion de temps.",
        ],
      },
      {
        slug: "ged",
        name: "GED",
        excerpt: "INFOLOG, intégrateur de service GED.",
        body: [
          "INFOLOG, intégrateur de service GED.",
        ],
      },
      {
        slug: "virtualisation",
        name: "Virtualisation",
        excerpt:
          "Virtualisation de serveurs, de postes et d'applications : VMware, Hyper-V, Citrix, RDS, clients légers.",
        body: [
          "La virtualisation de serveurs permet, à partir d'un seul serveur physique, de virtualiser plusieurs machines comme si elles étaient indépendantes les unes des autres.",
          "La virtualisation de postes de travail consiste à centraliser le contenu des terminaux utilisateurs afin d'en assurer une gestion simplifiée et une sauvegarde sécurisée.",
        ],
      },
      {
        slug: "transformation-it",
        name: "Transformation IT",
        excerpt:
          "INFOLOG group vous apporte le socle innovant de votre transformation digitale.",
        body: [
          "De toute part nous entendons parler de Transformation Digitale, celle-ci s'occupe des applications, du marché, de l'avenir de l'entreprise. Mais comment transformer l'entreprise si l'on ne transforme pas l'IT ?",
          "INFOLOG group vous apporte le socle innovant de votre transformation digitale.",
        ],
      },
      {
        slug: "affichage-dynamique",
        name: "Affichage dynamique",
        excerpt:
          "Diffusion de messages et d'informations sur un ou plusieurs écrans, pour halls d'accueil, points de vente et établissements.",
        body: [
          "L'affichage dynamique est une technologie qui consiste à diffuser sur un ou plusieurs écrans des messages et des informations provenant de sources vidéo ou informatiques. Cette technologie s'utilise principalement dans les halls d'accueil, les restaurants d'entreprise, les zones d'attente.",
        ],
      },
      {
        slug: "erp",
        name: "Progiciel ERP",
        excerpt:
          "Intégration de progiciels de gestion intégrés, dont SAP ERP, de l'analyse à la maintenance.",
        body: [
          "En tant qu'expert en intégration de systèmes d'informations notre métier consiste à concevoir pour nos clients des solutions stables et évolutives dans le temps. Nous intégrons la principale solution ERP du marché : SAP ERP.",
        ],
      },
    ],
  },
  {
    id: "finance",
    code: "P-02",
    slug: "monetique-finance",
    name: "Monétique & Finance",
    shortName: "Monétique",
    intro:
      "Nous accompagnons les partenaires bancaires sur la monétique, les GAB et les solutions de paiement.",
    description:
      "Monétique, distributeurs automatiques NCR, systèmes de paiement et National Cash, filiale de microfinance agréée BCM.",
    activities: [
      {
        slug: "monetique",
        name: "Monétique",
        excerpt:
          "Organisation dédiée aux partenaires bancaires : hotline, réparation des terminaux, GAB NCR et systèmes de paiement.",
        body: [
          "INFOLOG, pour répondre aux attentes du réseau de partenaires bancaires (6), Infolog a su bâtir une organisation basée sur la connaissance et le savoir-faire des techniciens monétiques. Infolog dispose d'une équipe de techniciens monétiques (5) et techniciens experts chargés de la hotline, la réparation des terminaux bancaires et la maintenance des solutions monétiques. Une équipe logistique dédiée à la gestion de stocks, la préparation des commandes et au suivi du matériel a également été mise en place.",
          "En tant que partenaire, nous proposons une large gamme de qualité de distributeurs automatiques NCR et de pièces détachées.",
        ],
      },
      {
        slug: "national-cash",
        name: "National Cash",
        excerpt:
          "Société anonyme de microfinance mauritanienne agréée par la Banque Centrale de Mauritanie, créée en février 2018.",
        body: [
          "National Cash (NC) est une société anonyme de microfinance mauritanienne agréée par la Banque Centrale de Mauritanie (BCM). Créée en février 2018 et leader du secteur en Mauritanie, NC a pour objectif de favoriser l'inclusion économique et sociale des populations vulnérables (notamment les femmes, les jeunes et les populations rurales) et de contribuer au développement économique du pays. Elle œuvre en particulier pour la promotion de l'entrepreneuriat et contribue ainsi à l'effort national pour l'auto-emploi dans les quartiers et zones rurales défavorisés.",
          "National Cash offre à ses clients des services diversifiés et adaptés aux besoins de chaque micro-entrepreneur grâce à un réseau d'agences réparties sur l'ensemble du territoire. Elle les accompagne ainsi dans le maintien et le développement de leur activité pour améliorer durablement leurs conditions de vie.",
        ],
      },
    ],
  },
  {
    id: "support",
    code: "P-03",
    slug: "formation-support",
    name: "Formation & Support",
    shortName: "Formation",
    intro:
      "Nous formons, certifions et assurons le support : tests, e-learning, centre d'appel et téléphonie.",
    description:
      "Centre de test Pearson VUE, e-learning, centre d'appel et téléphonie (distribution, SAV et standards d'entreprise).",
    activities: [
      {
        slug: "pearson-vue",
        name: "Pearson VUE",
        excerpt:
          "Centre de test Pearson VUE agréé : examens informatiques et professionnels dans un environnement sécurisé.",
        body: [
          "INFOLOG s'est associé à Pearson-VUE pour offrir des examens informatiques et professionnels dans un environnement sécurisé. Pearson-VUE est le leader mondial des tests informatiques pour les programmes informatiques, universitaires et professionnels.",
        ],
      },
      {
        slug: "e-learning",
        name: "E-Learning Center",
        excerpt:
          "Apprendre à son rythme, sur ordinateur, des contenus pédagogiques organisés en sessions ou modules, avec tests d'évaluation.",
        body: [
          "Notre e-learning tire son attrait du fait de pouvoir apprendre à son rythme, sur un ordinateur, des contenus pédagogiques sur des sujets variés. Organisée en sessions ou modules, avec tests d'évaluations.",
        ],
      },
      {
        slug: "centre-appel",
        name: "Centre d'appel",
        excerpt:
          "Plateforme propre, plus de 100 agents, plus de 10 000 appels par jour, 24/7. Références : Mauritel, Mattel, PAM.",
        body: [
          "INFOLOG a développé sa propre plateforme de Call Center, équipée des technologies des Télécommunications de dernières générations. Ce Centre d'appel assure pour le compte de nos partenaires toutes les missions relatives à la gestion de la relation client ainsi que celles de prospections et de développement commercial.",
        ],
      },
      {
        slug: "telephonie",
        name: "Téléphonie",
        excerpt:
          "Distribution Samsung, Apple, Nokia, SAV certifié, et installation de standards PABX / IPBX pour les entreprises.",
        body: [
          "INFOLOG développe depuis plus de 15 ans une relation privilégiée avec ses clients et leur offre aujourd'hui une gamme complète de services autour de la Téléphonie mobiles. Infolog est distributeur des plus grandes marques de téléphonie : Samsung, Apple, Nokia.",
        ],
      },
    ],
  },
  {
    id: "industrie",
    code: "P-04",
    slug: "btp-electromenager",
    name: "BTP & Électroménager",
    shortName: "BTP & Équipements",
    intro:
      "Nous intervenons dans le bâtiment, l'électroménager et l'énergie, du chantier à l'équipement.",
    description:
      "Entreprise générale de bâtiment, électroménager Samsung, et énergie / équipements de mesure Siemens.",
    activities: [
      {
        slug: "btp",
        name: "BTP",
        excerpt:
          "Entreprise générale de bâtiment : gros œuvre, second œuvre, génie civil, neuf, réhabilitation et maintenance industrielle.",
        body: [
          "INFOLOG BTP est une ENTREPRISE GÉNÉRALE DE BÂTIMENT qui exerce divers travaux de construction en principaux corps de métiers : le gros œuvre, le second œuvre & Génie-Civil. Elle réalise aussi bien des travaux neufs, que des travaux de réhabilitation ainsi que des travaux de maintenance industrielle. Elle dispose également d'un bureau d'études dédié à la réalisation de plans d'exécution et d'études avant-projet.",
        ],
      },
      {
        slug: "electromenager",
        name: "Électroménager",
        excerpt:
          "Plus de 15 ans auprès de Samsung : fourniture et service de l'électroménager pour professionnels et particuliers.",
        body: [
          "Fort d'une solide expérience de plus de 15 ans auprès de son partenaire de confiance Samsung, Infolog a fini par s'imposer comme un acteur majeur dans la fourniture et le service de l'électroménager à travers son large réseau de distribution.",
        ],
      },
      {
        slug: "energie",
        name: "Énergie",
        excerpt:
          "Consultation et ingénierie, équipements de mesure, partenariat Siemens.",
        body: [
          "Nous sommes l'un des principaux fournisseurs de services de consultation et d'ingénierie qui soutient les clients gouvernementaux et commerciaux dans la fourniture d'équipements de mesure avec pour partenaire Siemens.",
        ],
      },
    ],
  },
];

const activityPages: Record<string, string> = {
  infogerance: "/infogerance",
  "data-center": "/data-center",
  securite: "/securite",
  collaboration: "/collaboration",
  ged: "/ged",
  virtualisation: "/virtualisation-serveurs",
  "transformation-it": "/transformation-it",
  "affichage-dynamique": "/affichage-dynamique",
  erp: "/progiciel-erp",
  monetique: "/monetique",
  "national-cash": "/qui-sommes-nous/national-cash",
  "pearson-vue": "/pearson-vue",
  "e-learning": "/pearson-vue#e-learning",
  "centre-appel": "/centre-appel",
  telephonie: "/telephonie",
  "izi-shop": "/telephonie/izi-shop",
  btp: "/btp",
  electromenager: "/electromenager",
  energie: "/energie",
};

export function getPole(slug: string) {
  return poles.find((pole) => pole.slug === slug);
}

export function activityPageHref(slug: string) {
  return activityPages[slug] ?? null;
}

export function getAllActivities() {
  return poles.flatMap((pole) =>
    pole.activities.map((activity) => ({ ...activity, pole })),
  );
}
