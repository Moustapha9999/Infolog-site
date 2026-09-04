export const collaboration = {
  title: "Réseau & collaboration",
  shortTitle: "Collaboration",
  breadcrumb: "Solutions IT & Digital / Réseau & collaboration",
  description:
    "Infrastructures LAN/WAN, SDN, SD-WAN et outils de collaboration : ToIP, visioconférence, messagerie unifiée.",
  heroLead:
    "Des infrastructures LAN, WAN et sans fil pensées pour la performance, jusqu'aux outils qui font vraiment collaborer vos équipes.",
  introBefore:
    "Les infrastructures de communication sont aujourd'hui l'axe central du déploiement de nouveaux services et le moteur essentiel de la transformation numérique.",
  introHighlight:
    "Nous couvrons les principaux besoins en communication de nos clients,",
  introAfter:
    "en apportant des solutions aux environnements LAN et WAN, à travers une large gamme de technologies fixes et sans fil. Notre offre en infrastructures réseaux se complète par une offre en collaboration destinée à améliorer la communication, augmenter la productivité et améliorer la gestion de temps.",
  expertiseLabel: "Expertise",
  expertiseTitle: "Points forts de notre portfolio",
  expertiseLead:
    "L'adoption de la technologie NetOps 2.0 pour construire des réseaux plus rapides, flexibles et sécurisés ; le déploiement de réseaux définis par logiciel (SDN, SDA, SD-WAN) ; l'automatisation et l'orchestration du déploiement opérationnel des réseaux et des services.",
  portfolio: [
    {
      id: "campus",
      title: "Réseaux Campus / Data Centers",
      description:
        "La colonne vertébrale de votre site : réseau local filaire et sans fil, jusqu'aux architectures définies par logiciel.",
      items: [
        "LAN",
        "Sans fil WLAN — solutions distribuées, centralisées et Mesh",
        "Réseaux SDN",
      ],
    },
    {
      id: "acces",
      title: "Réseaux d'accès",
      description:
        "Connecter vos sites entre eux, en filaire, en fibre ou en sans fil, avec une architecture d'accès moderne.",
      items: [
        "Metro Ethernet",
        "Sans fil WLAN",
        "Optiques — C/DWDM",
        "SD-Access",
      ],
    },
    {
      id: "automatisation",
      title: "Automatisation & contrôle",
      description:
        "Réduire l'intervention manuelle et le risque d'erreur grâce à l'automatisation des opérations réseau.",
      items: [
        "Automatisation des déploiements",
        "Application des politiques réseau",
        "Orchestration",
      ],
    },
    {
      id: "core",
      title: "Réseaux de Core",
      description:
        "Le cœur de réseau qui fait transiter le trafic critique de votre organisation, avec une qualité de service garantie.",
      items: [
        "Réseaux IPv4 / IPv6",
        "Réseaux MPLS",
        "Réseaux MPLS VPN",
        "SD-WAN",
        "Solutions de routage avancé",
        "QoS",
        "Multicast",
      ],
    },
    {
      id: "exploitation",
      title: "Exploitation & supervision réseau",
      description:
        "Garder le contrôle sur la performance de votre réseau au quotidien, avec des outils de suivi et d'optimisation continue.",
      items: [
        "Outils d'optimisation WAN (caching, compression…)",
        "Provisioning et reporting de SLA",
        "Monitoring des infrastructures et services IT",
        "Gestion de la qualité de service et de la capacité",
      ],
    },
  ],
  networkSecurity: {
    title: "Sécurité",
    lead: "Plus que jamais, la numérisation des entreprises s'accélère, cette évolution est accompagnée d'une multiplication des menaces pour la sécurité.",
    body: "Il devient absolument nécessaire de disposer de politiques et des outils nécessaires qui garantissent à tout moment la disponibilité des services, la confidentialité et l'intégrité des données de notre organisation, et surtout, de nos clients.",
    axesIntro:
      "Notre portefeuille de solutions en matière de sécurité se divise en deux axes principaux :",
    axes: [
      {
        id: "strategique",
        label: "Axe stratégique",
        title: "Domaines stratégiques",
        body: "Solutions de gouvernance IT, analyse des risques et applications.",
      },
      {
        id: "operationnel",
        label: "Axe opérationnel",
        title: "Domaine opérationnel",
        body: "Services de conception, déploiement, support, administration et opération des architectures et des solutions en matière d'infrastructures de sécurité.",
      },
    ],
  },
  collabPortfolio: {
    title: "Portfolio collaboration",
    items: [
      {
        id: "outils",
        title: "Outils de collaboration",
        description:
          "Téléphonie sur IP (ToIP), Voix Sur IP (VoIP), Fax Sur IP (FoIP), Visioconférence, Messagerie unifiée et Présence …",
        icon: "handshake",
      },
      {
        id: "contact-center",
        title: "Solutions de Centre de Contact",
        icon: "headset",
      },
      {
        id: "b2b",
        title: "Solutions B2B et Mobilité",
        icon: "building",
      },
      {
        id: "taxation",
        title: "Solutions de Taxation, Enregistrement et Reporting",
        icon: "chart",
      },
      {
        id: "marches",
        title: "Solutions des Salles des Marchés",
        icon: "tag",
      },
      {
        id: "affichage",
        title: "Affichage dynamique sur IP",
        icon: "display",
      },
    ],
  },
} as const;
