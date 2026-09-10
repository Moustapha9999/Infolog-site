import type { Locale } from "@/lib/i18n/config";
import { pickContent } from "@/lib/i18n/content";

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

const packs = {
  fr: [
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
            "www.samsunggalaxy.ci — www.samsunggalaxy.sn — www.samsunggalaxy-mr.com — izicall.shop",
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
  ] satisfies TelephonieServiceTab[],
  en: [
    {
      id: "produits",
      label: "Products",
      title: "Our product offer",
      items: [
        { title: "Mobile phones, smartphones and tablets" },
        { title: "Mobile accessories" },
        { title: "Landline phones" },
        { title: "Landline and Internet accessories" },
        {
          title: "Procedures adapted to partner organisations",
        },
      ],
    },
    {
      id: "reseau",
      label: "Distribution network",
      title: "Our network",
      items: [
        { title: "INFOLOG reference showrooms" },
        {
          title: "E-commerce sites",
          description:
            "www.samsunggalaxy.ci — www.samsunggalaxy.sn — www.samsunggalaxy-mr.com — izicall.shop",
        },
        {
          title: "Approved telephony resellers / independent distributors",
        },
        { title: "Telecom operators" },
        { title: "Specialised large retail" },
      ],
    },
    {
      id: "logistique",
      label: "Custom logistics services",
      title: "Custom logistics",
      lead: "Our logistics expertise in mobile telephony (1 million devices shipped per year) has led us to create tailor-made solutions:",
      items: [
        {
          title: "High-performance logistics based on a dedicated system",
        },
        {
          title:
            "24h deliveries everywhere, to points of sale and end-user homes alike",
        },
        {
          title:
            "Wide availability of products and colours from the leading brands",
        },
        {
          title:
            "Specific commercial operations negotiated with manufacturers (dedicated packaging, exclusive products)",
        },
        { title: "Hosting and stock management for our clients" },
        { title: "Ability to manage just-in-time flow (zero stock)" },
        {
          title:
            "Full traceability (SIM card, IMEI number, parcel number, accompanying documents, etc.)",
        },
        {
          title:
            "Data transfers between front office, back office and logistics",
        },
        {
          title:
            "Specific packaging, device configuration, personalisation, returns management…",
        },
      ],
    },
    {
      id: "sav",
      label: "After-sales service",
      title: "After-sales service",
      lead: "INFOLOG provides quality after-sales service for all Samsung, Apple and Nokia products. We stock original spare parts and provide certified staff with more than 10 years of experience repairing phones and home appliances.",
      items: [],
      subTabs: [
        {
          id: "smart-repair",
          label: "Benefits of Smart Repair",
          title: "Smart Repair",
          items: [
            {
              title: "Fast repair of your device",
              description:
                "Broken screen or oxidised device? With Smart Repair, damage not covered by warranty can be repaired quickly.",
            },
            {
              title: "Service delivered by experts",
              description:
                "Qualified Samsung-certified experts take care of your device and ensure its repair.",
            },
            {
              title: "Repair with original parts and warranty",
              description:
                "We only use original parts for all repairs.",
            },
            {
              title: "Parts used are guaranteed for one year.",
            },
            {
              title: "Fixed-price service",
              description:
                "You know the repair cost before sending your device thanks to our price simulator.",
            },
          ],
        },
      ],
    },
  ] satisfies TelephonieServiceTab[],
  ar: [
    {
      id: "produits",
      label: "المنتجات",
      title: "عرض منتجاتنا",
      items: [
        { title: "هواتف محمولة وهواتف ذكية وأجهزة لوحية" },
        { title: "إكسسوارات الجوال" },
        { title: "هواتف ثابتة" },
        { title: "إكسسوارات الثابت والإنترنت" },
        {
          title: "إجراءات مكيّفة مع تنظيم الشركاء",
        },
      ],
    },
    {
      id: "reseau",
      label: "شبكة التوزيع",
      title: "شبكتنا",
      items: [
        { title: "صالات عرض INFOLOG المرجعية" },
        {
          title: "مواقع التجارة الإلكترونية",
          description:
            "www.samsunggalaxy.ci — www.samsunggalaxy.sn — www.samsunggalaxy-mr.com — izicall.shop",
        },
        {
          title: "موزّعون معتمدون في الهاتف / موزّعون مستقلون",
        },
        { title: "مشغّلو الاتصالات" },
        { title: "مساحات تجارية متخصصة" },
      ],
    },
    {
      id: "logistique",
      label: "خدمات لوجستية مخصّصة",
      title: "لوجستيات مخصّصة",
      lead: "خبرتنا اللوجستية في مجال الهاتف المحمول (مليون جهاز يُشحن سنوياً) قادتنا إلى ابتكار حلول مخصّصة:",
      items: [
        {
          title: "لوجستيات عالية الأداء تعتمد على نظام مخصّص",
        },
        {
          title:
            "تسليم خلال 24 ساعة في كل مكان، إلى نقاط البيع وإلى منازل المستخدمين النهائيين",
        },
        {
          title:
            "توفّر واسع للمنتجات والألوان من أكبر العلامات",
        },
        {
          title:
            "عمليات تجارية خاصة متفاوض عليها مع المصنّعين (تغليف مخصّص، منتجات حصرية)",
        },
        { title: "استضافة وإدارة مخزون عملائنا" },
        { title: "إمكانية إدارة التدفق الآني (مخزون صفري)" },
        {
          title:
            "تتبّع كامل (بطاقة SIM، رقم IMEI، رقم الطرد، مراسلات مرافقة، إلخ)",
        },
        {
          title:
            "نقل البيانات بين الواجهة الأمامية والمكتب الخلفي واللوجستيات",
        },
        {
          title:
            "تغليف خاص، إعداد الأجهزة، تخصيص، إدارة المرتجعات…",
        },
      ],
    },
    {
      id: "sav",
      label: "خدمة ما بعد البيع",
      title: "خدمة ما بعد البيع",
      lead: "توفّر INFOLOG خدمة ما بعد بيع عالية الجودة لجميع منتجات Samsung وApple وNokia. نتوفر على قطع غيار أصلية ونضع تحت التصرف موظفين معتمدين بخبرة تزيد عن 10 سنوات في إصلاح الهواتف والأجهزة المنزلية.",
      items: [],
      subTabs: [
        {
          id: "smart-repair",
          label: "مزايا خدمة Smart Repair",
          title: "Smart Repair",
          items: [
            {
              title: "إصلاح سريع لجهازكم",
              description:
                "شاشة مكسورة أو جهاز متأكسد؟ مع Smart Repair، يمكن إصلاح الأضرار غير المشمولة بالضمان بسرعة.",
            },
            {
              title: "خدمة يقدّمها خبراء",
              description:
                "خبراء معتمدون من Samsung ومؤهّلون يعتنون بجهازكم ويضمنون إصلاحه.",
            },
            {
              title: "إصلاح بقطع أصلية وضمان",
              description:
                "نستخدم فقط قطعاً أصلية لجميع الإصلاحات.",
            },
            {
              title: "القطع المستخدمة مضمونة لمدة سنة.",
            },
            {
              title: "خدمة بسعر ثابت",
              description:
                "تعرفون تكلفة الإصلاح قبل إرسال جهازكم بفضل محاكي الأسعار لدينا.",
            },
          ],
        },
      ],
    },
  ] satisfies TelephonieServiceTab[],
} as const;

export function getTelephonieServiceTabs(
  locale: Locale = "fr",
): TelephonieServiceTab[] {
  return pickContent(packs, locale) as TelephonieServiceTab[];
}

/** @deprecated prefer getTelephonieServiceTabs(locale) */
export const telephonieServiceTabs: TelephonieServiceTab[] = packs.fr;
