export const monetique = {
  title: "Monétique",
  description:
    "Organisation dédiée aux partenaires bancaires : hotline, réparation des terminaux, GAB NCR et systèmes de paiement.",
  intro:
    "INFOLOG, pour répondre aux attentes du réseau de partenaires bancaires (6), Infolog a su bâtir une organisation basée sur la connaissance et le savoir-faire des techniciens monétiques. Infolog dispose d'une équipe de techniciens monétiques (5) et techniciens experts chargés de la hotline, la réparation des terminaux bancaires et la maintenance des solutions monétiques. Une équipe logistique dédiée à la gestion de stocks, la préparation des commandes et au suivi du matériel a également été mise en place.",
  mission: {
    title: "Notre Mission",
    text: "Soutenir le développement économique en élargissant l'inclusion financière pour tous, partout, tout le temps.",
  },
  vision: {
    title: "Notre Vision",
    text: "Nous proposons des solutions sur mesure pour des clients uniques, des plus petits clients aux plus grands acteurs.",
  },
  network: {
    title: "Réseau et collaboration",
    items: [
      {
        title: "Sécurité du périmètre",
        items: ["NGFW/UTM", "VPN SSL", "IDS/IPS", "Sandboxing", "Gateway MAIL / WEB"],
      },
      {
        title: "Optimisation et sécurité du datacenter",
        items: ["ADC", "WAF"],
      },
      {
        title: "Visibilité, optimisation et protection du réseau",
        items: ["SSL offloading / NPB", "Bandwidth Mgmt"],
      },
      {
        title: "Gestion de l'endpoint",
        items: [
          "Content filtering",
          "EDR",
          "Chiffrage/IRM/DLP",
          "IAM/PAM",
          "HSM / Signature / PKI",
        ],
      },
      {
        title: "Gestion et contrôle de l'accès et l'identité",
        items: ["SSO", "MFA"],
      },
      {
        title: "Gestion de la sécurité",
        items: ["Gestion centralisée FW", "SIEM"],
      },
    ],
  },
  gab: {
    title: "Guichet automatique bancaire",
    body: "En tant que partenaire, nous proposons une large gamme de qualité de distributeurs automatiques NCR et de pièces détachées. Infolog comprend la valeur d'un temps de réponse rapide ! Par conséquent, notre équipe vous offrira une disponibilité immédiate, une réactivité et une assistance à la résolution des problèmes pour vous aider à mieux servir vos clients. De plus, nos consultants techniques sont disponibles pour vous apporter des suggestions et des conseils.",
  },
  payment: {
    title: "Systèmes de paiement électronique",
    paragraphs: [
      "Partenaire d'un éditeur et intégrateur des systèmes de paiement, INFOLOG propose un système interopérable et hautement modulaire.",
      "Notre système offre une gestion optimisée, sécurisée et flexible des canaux GAB, TPE, kiosques mobiles, Internet, centres d'appels… tout en répondant aux exigences de haute disponibilité, d'évolutivité, de performance et d'intégration des dernières exigences technologiques (biométrie, QR-Code, HCE, authentification forte…). Notre système fournit des moyens performants et efficaces capables de répondre aux besoins en termes d'acceptation des moyens de paiement (carte avec contact ou sans contact, mobile HCE ou Wallet…) ; de services à valeur ajoutée (paiement de factures, recharges, transfert d'argent…) disponibles sur tous les canaux (GAB, TPE, mobile, Internet, kiosque…).",
    ],
  },
  sifco: {
    title: "SIFCO — Système d'information des institutions de micro-finances",
    body: "Partenaire de SIFCO, éditeur des systèmes d'information des organisations financières (non bancaires), les solutions et services que nous fournissons se caractérisent par une adaptation facile et rapide aux utilisateurs dans des environnements avec des exigences différentes des normes internationales pour aider nos clients à améliorer leur service, leur efficacité et leur transparence.",
    modules: [
      {
        title: "Client",
        features: [
          "Profil du client",
          "Recherche simple et rapide",
          "Large éventail d'information",
          "Connaissez votre client",
          "Identification unique",
          "Photographie, signature et empreinte digitale",
        ],
      },
      {
        title: "Crédit",
        features: [
          "La mise en œuvre d'un crédit",
          "Gestion des demandes de crédit",
          "Produits financiers configurables",
          "Large choix de gestion de crédit",
          "Gestion des garanties",
          "Registre des paiements et des ajustements",
          "Rapport",
        ],
      },
      {
        title: "Comptabilité",
        features: [
          "Conformité aux normes internationales",
          "Configuration flexible du plan comptable",
          "Gestion des centres de coûts",
          "Gestion de la trésorerie",
          "Module auxiliaire de banques",
          "Module auxiliaire pour immobilisations",
          "Module de budget",
          "Rapports",
        ],
      },
      {
        title: "Agence électronique",
        features: [
          "Service Internet Banking 24*7",
          "Consultation et opérations",
          "Notifications et messages",
        ],
      },
    ],
  },
  partnersTitle: "Ils nous font confiance",
  partners: [
    { name: "BMCI", src: "/brand/monetique-partners/bmci.png" },
    { name: "BADH", src: "/brand/monetique-partners/badh.png" },
    { name: "BIM", src: "/brand/monetique-partners/bim.png" },
    { name: "PRE", src: "/brand/monetique-partners/pre.png" },
    {
      name: "Société Générale",
      src: "/brand/monetique-partners/societe-generale.png",
    },
    { name: "AWB", src: "/brand/monetique-partners/awb.png" },
  ],
} as const;
