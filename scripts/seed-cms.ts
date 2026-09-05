/**
 * Seed CMS depuis les contenus déjà présents dans le repo.
 * Aucun prix inventé. Requiert SUPABASE_SERVICE_ROLE_KEY.
 */
import { createClient } from "@supabase/supabase-js";
import { partners } from "../src/data/partners";
import { aboutServices } from "../src/data/site";
import { loadPhonesFromFolders } from "../src/data/telephonie/load-products";
import { slugify } from "../src/lib/cms/format";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key =
  process.env.SUPABASE_SECRET_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!url || !key) {
  console.error("NEXT_PUBLIC_SUPABASE_URL et SUPABASE_SECRET_KEY (ou SUPABASE_SERVICE_ROLE_KEY) requis.");
  process.exit(1);
}

const supabase = createClient(url, key, {
  auth: { persistSession: false, autoRefreshToken: false },
});

async function upsertBrand(name: string) {
  const slug = slugify(name);
  const { data } = await supabase
    .from("brands")
    .upsert({ name, slug, is_active: true }, { onConflict: "slug" })
    .select("id")
    .single();
  return data?.id as string | undefined;
}

async function upsertCategory(name: string, slug: string, sort: number) {
  const { data } = await supabase
    .from("categories")
    .upsert(
      { name, slug, is_active: true, sort_order: sort },
      { onConflict: "slug" },
    )
    .select("id")
    .single();
  return data?.id as string | undefined;
}

async function main() {
  for (const name of partners) {
    await upsertBrand(name);
  }

  const samsung = await upsertBrand("Samsung");
  const catMap: Record<string, string | undefined> = {
    flagship: await upsertCategory("Flagship", "flagship", 1),
    foldable: await upsertCategory("Pliables", "foldable", 2),
    "a-series": await upsertCategory("Série A", "a-series", 3),
    tablet: await upsertCategory("Tablettes", "tablet", 4),
  };
  await upsertCategory("Smartphones", "smartphones", 5);
  await upsertCategory("Électroménager", "electromenager", 6);

  const phones = loadPhonesFromFolders();
  for (const [index, phone] of phones.entries()) {
    const { data: product } = await supabase
      .from("products")
      .upsert(
        {
          slug: phone.id,
          name: phone.name,
          brand_id: samsung ?? null,
          category_id: catMap[phone.category] ?? null,
          tagline: phone.tagline ?? null,
          description: phone.description ?? null,
          details: {
            variants: phone.variants,
            ram: phone.ram,
            storage: phone.storage,
            highlights: phone.highlights,
            specs: phone.specs,
            colors: phone.colors,
            hero: phone.hero,
            image: phone.image,
            imageAlt: phone.imageAlt,
            gallery: phone.gallery,
            storyVideos: phone.storyVideos,
            designVideo: phone.designVideo,
            heroLayout: phone.heroLayout,
            heroTagline: phone.heroTagline,
            designIntro: phone.designIntro,
            featureHighlight: phone.featureHighlight,
            featureSuite: phone.featureSuite,
            keyPoints: phone.keyPoints,
            design: phone.design,
            performance: phone.performance,
            battery: phone.battery,
            media: phone.media,
          },
          is_active: true,
          is_featured: index < 3,
          is_new: phone.tagline === "Nouveau",
          is_promo: false,
          availability: "available",
          sort_order: index,
        },
        { onConflict: "slug" },
      )
      .select("id")
      .single();

    if (product?.id) {
      const { data: existing } = await supabase
        .from("product_prices")
        .select("id")
        .eq("product_id", product.id)
        .maybeSingle();
      if (!existing) {
        await supabase.from("product_prices").insert({
          product_id: product.id,
          currency: "MRU",
          is_visible: false,
        });
      }
    }
  }

  for (const [index, title] of aboutServices.entries()) {
    await supabase.from("services").upsert(
      {
        title,
        slug: slugify(title),
        sort_order: index,
        is_active: true,
      },
      { onConflict: "slug" },
    );
  }

  const pageSeeds = [
    {
      slug: "home",
      title: "Accueil",
      sections: [
        {
          key: "hero.title",
          value:
            "Partenaire technologique des entreprises en Mauritanie et en Afrique",
        },
      ],
    },
    { slug: "telephonie", title: "Téléphonie", sections: [{ key: "title", value: "Téléphonie" }] },
    {
      slug: "footer",
      title: "Pied de page",
      sections: [
        {
          key: "tagline",
          value: "Des solutions technologiques au service de votre développement.",
        },
      ],
    },
  ];

  for (const page of pageSeeds) {
    const { data } = await supabase
      .from("pages")
      .upsert(
        { slug: page.slug, title: page.title, is_published: true },
        { onConflict: "slug" },
      )
      .select("id")
      .single();
    if (!data) continue;
    for (const [index, section] of page.sections.entries()) {
      await supabase.from("page_sections").upsert(
        {
          page_id: data.id,
          key: section.key,
          kind: "title",
          value: section.value,
          sort_order: index,
        },
        { onConflict: "page_id,key" },
      );
    }
  }

  console.log(`Seed OK — ${phones.length} produits, prix masqués.`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
