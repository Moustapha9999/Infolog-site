export type TelephonieServiceTab = {
  id: string;
  label: string;
  title: string;
  lead?: string;
  items: Array<{
    title: string;
    description?: string;
  }>;
  /** Sous-onglet optionnel (ex. Smart Repair sous SAV) */
  subTabs?: Array<{
    id: string;
    label: string;
    title: string;
    lead?: string;
    items: Array<{
      title: string;
      description?: string;
    }>;
  }>;
};

export const telephonieServiceTabs: TelephonieServiceTab[] = [
  {
    id: "produits",
    label: "Produits",
    title: "Notre offre produits",
    items: [
      { title: "Téléphones mobiles, smartphones et tablettes" },
      { title: "Accessoires mobiles" },
      { title: "Téléphones fixes" },
      { title: "Accessoires fixes et Internet" },
      {
        title: "Des procédures adaptées à l'organisation des partenaires",
      },
    ],
  },
  {
    id: "reseau",
    label: "Réseau de distribution",
    title: "Notre réseau",
    items: [
      { title: "Les show-rooms de références INFOLOG" },
      {
        title: "Sites e-commerce",
        description:
          "www.samsunggalaxy.ci — www.samsunggalaxy.sn — www.samsunggalaxy-mr.com",
      },
      {
        title: "Revendeurs agréés en téléphonie / distributeurs indépendants",
      },
      { title: "Opérateurs télécom" },
      { title: "Grandes surfaces spécialisées" },
    ],
  },
  {
    id: "logistique",
    label: "Prestations logistiques sur-mesure",
    title: "Logistique sur-mesure",
    lead: "Notre expertise logistique en matière de téléphonie mobile (1 million de terminaux expédiés par an) nous a conduit à créer des solutions sur-mesure :",
    items: [
      {
        title: "Une logistique ultra-performante basée sur un système dédié",
      },
      {
        title:
          "Des livraisons en 24h partout, en point de vente comme au domicile des utilisateurs finaux",
      },
      {
        title:
          "Une large disponibilité de produits et de couleurs des plus grandes marques",
      },
      {
        title:
          "Des opérations commerciales spécifiques négociées avec les constructeurs (packagings dédiés, produits en exclusivité)",
      },
      { title: "L'hébergement et la gestion du stock de nos clients" },
      { title: "La possibilité de gérer du flux tendu (zéro stock)" },
      {
        title:
          "Une traçabilité complète (carte SIM, N° IMEI, numéro de colis, courriers d'accompagnement, etc.)",
      },
      {
        title:
          "Transferts de données entre le front office, le back office et la logistique",
      },
      {
        title:
          "Packagings spécifiques, paramétrage des terminaux, personnalisation, gestion des retours…",
      },
    ],
  },
  {
    id: "sav",
    label: "Service après vente",
    title: "Service après-vente",
    lead: "INFOLOG assure un service après-vente de qualité pour tous les produits Samsung, Apple et Nokia. Nous disposons de pièces détachées d'origine et mettons à disposition un personnel certifié cumulant plus de 10 ans d'expérience dans la réparation des téléphones et équipements électroménagers.",
    items: [],
    subTabs: [
      {
        id: "smart-repair",
        label: "Les avantages du service Smart Repair",
        title: "Smart Repair",
        items: [
          {
            title: "Réparation rapide de votre appareil",
            description:
              "Votre écran est cassé ou votre appareil est oxydé ? Avec Smart Repair, les dommages non couverts par la garantie peuvent être réparés rapidement.",
          },
          {
            title: "Service délivré par des experts",
            description:
              "Des experts certifiés Samsung qualifiés prennent soin de votre appareil et en assurent la réparation.",
          },
          {
            title: "Réparation avec pièces d'origine et garantie",
            description:
              "Nous n'utilisons que des pièces d'origine pour toutes les réparations.",
          },
          {
            title: "Les pièces utilisées sont garanties un an.",
          },
          {
            title: "Service à prix fixe",
            description:
              "Vous connaissez le coût de la réparation avant d'envoyer votre appareil grâce à notre simulateur de prix.",
          },
        ],
      },
    ],
  },
];
