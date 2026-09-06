import fs from "node:fs";
import path from "node:path";
import type { PhoneProduct } from "./types";
import { productInfos } from "./product-infos";

export const PRODUCTS_PUBLIC_ROOT = "/brand/telephonie/products";

const productsDiskRoot = path.join(
  process.cwd(),
  "public",
  "brand",
  "telephonie",
  "products",
);

/** Ordre d'affichage catalogue. */
export const productOrder = [
  "galaxy-z-fold8-ultra",
  "galaxy-a37",
  "galaxy-a27",
  "galaxy-a17",
  "galaxy-a07",
  "galaxy-a06",
  "galaxy-tab-a11",
  "galaxy-s24-ultra",
  "galaxy-s23-ultra",
] as const;

function listMedia(dir: string, prefix: string) {
  if (!fs.existsSync(dir)) return [] as string[];
  return fs
    .readdirSync(dir)
    .filter((name) => name.toLowerCase().startsWith(prefix.toLowerCase()))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
}

function readDescriptionFile(dir: string) {
  const mdPath = path.join(dir, "description.md");
  if (fs.existsSync(mdPath)) {
    return fs.readFileSync(mdPath, "utf8").trim();
  }
  return undefined;
}

function colorFileSlug(name: string) {
  return name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function resolveMediaPath(publicBase: string, value: string) {
  return value.startsWith("/") ? value : `${publicBase}/${value}`;
}

/** Retire les indices de note fabricant (¹, ¹⁰, 11, etc.) en fin de phrase. */
function stripFootnoteMarks(text: string) {
  return text
    .replace(/[\s\u00a0]*[⁰¹²³⁴⁵⁶⁷⁸⁹]+/g, "")
    .replace(/[\s\u00a0]*\[\d+\]/g, "")
    .replace(/([.!?…])[\s\u00a0]*\d{1,2}(?=\s|$)/g, "$1")
    .replace(/[\s\u00a0]+$/g, "")
    .trim();
}

function parseFeatureCard(
  raw: unknown,
  publicBase: string,
): PhoneProduct["featureHighlight"] | undefined {
  if (!raw || typeof raw !== "object" || raw === null) return undefined;
  const item = raw as Record<string, unknown>;
  if (
    typeof item.title !== "string" ||
    typeof item.body !== "string" ||
    typeof item.image !== "string"
  ) {
    return undefined;
  }
  return {
    title: stripFootnoteMarks(item.title),
    body: stripFootnoteMarks(item.body),
    image: resolveMediaPath(publicBase, item.image),
    footnote:
      typeof item.footnote === "string" ? item.footnote : undefined,
  };
}

function normalizeColors(
  raw: unknown,
  publicBase: string,
  dir: string,
): PhoneProduct["colors"] {
  if (!Array.isArray(raw)) return undefined;
  const colors = raw.flatMap((item) => {
    if (
      item &&
      typeof item === "object" &&
      "name" in item &&
      "hex" in item &&
      typeof (item as { name: unknown }).name === "string" &&
      typeof (item as { hex: unknown }).hex === "string"
    ) {
      const name = (item as { name: string }).name;
      const hex = (item as { hex: string }).hex;
      const fromJson =
        "image" in item && typeof (item as { image: unknown }).image === "string"
          ? (item as { image: string }).image
          : undefined;
      const slug = colorFileSlug(name);
      const diskMatch = listMedia(dir, `color-${slug}`).find((file) =>
        new RegExp(`^color-${slug}\\.`, "i").test(file),
      );
      const image = fromJson
        ? fromJson.startsWith("/")
          ? fromJson
          : `${publicBase}/${fromJson}`
        : diskMatch
          ? `${publicBase}/${diskMatch}`
          : undefined;
      return [{ name, hex, image }];
    }
    return [];
  });
  return colors.length > 0 ? colors : undefined;
}

const RAM_GB = new Set([4, 6, 8, 12, 16, 32]);
const STORAGE_GB = new Set([64, 128, 256, 512, 1024]);

function stringList(raw: unknown): string[] | undefined {
  if (!Array.isArray(raw)) return undefined;
  const list = raw.filter((item): item is string => typeof item === "string");
  return list.length > 0 ? list : undefined;
}

function parseGo(text: string): number | undefined {
  const to = text.match(/(\d+)\s*To/i);
  if (to) return Number(to[1]) * 1024;
  const go = text.match(/(\d+)\s*Go/i);
  if (go) return Number(go[1]);
  return undefined;
}

function formatGo(gb: number): string {
  if (gb >= 1024 && gb % 1024 === 0) return `${gb / 1024} To`;
  return `${gb} Go`;
}

function uniqueGo(values: number[]): string[] {
  return [...new Set(values)].map(formatGo);
}

function deriveMemory(
  variants: string[],
  specs: PhoneProduct["specs"],
  json: Record<string, unknown> | undefined,
  fallback?: { ram?: string[]; storage?: string[] },
): { ram?: string[]; storage?: string[] } {
  const ramFromJson = stringList(json?.ram) ?? stringList(fallback?.ram);
  const storageFromJson =
    stringList(json?.storage) ?? stringList(fallback?.storage);

  const ramValues: number[] = [];
  const storageValues: number[] = [];

  for (const variant of variants) {
    const parts = variant.split("/").map((part) => part.trim());
    if (parts.length === 2) {
      const first = parseGo(parts[0]);
      const second = parseGo(parts[1]);
      if (first != null) ramValues.push(first);
      if (second != null) storageValues.push(second);
      continue;
    }
    const value = parseGo(variant);
    if (value == null) continue;
    if (RAM_GB.has(value)) ramValues.push(value);
    else if (STORAGE_GB.has(value)) storageValues.push(value);
  }

  for (const spec of specs) {
    const label = spec.label.toLowerCase();
    if (label.includes("ram")) {
      const value = parseGo(spec.value);
      if (value != null) ramValues.push(value);
    }
    if (label.includes("stockage")) {
      for (const match of spec.value.matchAll(/(\d+)\s*(To|Go)/gi)) {
        const amount = Number(match[1]);
        const unit = match[2].toLowerCase();
        const gb = unit === "to" ? amount * 1024 : amount;
        if (STORAGE_GB.has(gb) || gb >= 64) storageValues.push(gb);
      }
    }
  }

  return {
    ram: ramFromJson ?? (ramValues.length ? uniqueGo(ramValues) : undefined),
    storage:
      storageFromJson ??
      (storageValues.length ? uniqueGo(storageValues) : undefined),
  };
}

function readInfoJson(dir: string) {
  const infoPath = path.join(dir, "info.json");
  if (!fs.existsSync(infoPath)) return undefined;
  try {
    return JSON.parse(fs.readFileSync(infoPath, "utf8")) as Record<
      string,
      unknown
    >;
  } catch {
    return undefined;
  }
}

export function loadPhonesFromFolders(): PhoneProduct[] {
  if (!fs.existsSync(productsDiskRoot)) return [];

  const diskIds = fs
    .readdirSync(productsDiskRoot, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name);

  const ids = [
    ...productOrder.filter((id) => diskIds.includes(id)),
    ...diskIds.filter((id) => !productOrder.includes(id as (typeof productOrder)[number])),
  ];

  return ids.flatMap((id) => {
    const fallback = productInfos[id];
    const dir = path.join(productsDiskRoot, id);
    const json = readInfoJson(dir);
    const hasMedia = fs
      .readdirSync(dir)
      .some((file) =>
        /\.(jpe?g|png|webp|avif|gif|mp4|webm|mov)$/i.test(file),
      );

    if (!fallback && !json && !hasMedia) return [];

    const name = String(json?.name ?? fallback?.name ?? id);
    const category = (json?.category ??
      fallback?.category ??
      "a-series") as PhoneProduct["category"];

    const covers = listMedia(dir, "cover");
    // Exact hero.* only (ignore hero-banner leftovers, etc.)
    const heroes = listMedia(dir, "hero").filter((file) =>
      /^hero\./i.test(file),
    );
    const galleryFiles = listMedia(dir, "gallery-");
    const videoFiles = listMedia(dir, "video-");
    const featureFiles = listMedia(dir, "feature-");
    const publicBase = `${PRODUCTS_PUBLIC_ROOT}/${id}`;

    const designVideoFile = videoFiles.find((file) =>
      /^video-6\./i.test(file),
    );
    const storyVideoFiles = videoFiles.filter(
      (file) => !/^video-6\./i.test(file),
    );

    const hero = heroes[0] ? `${publicBase}/${heroes[0]}` : undefined;
    const image = covers[0]
      ? `${publicBase}/${covers[0]}`
      : hero;
    const gallery = galleryFiles.map((file) => `${publicBase}/${file}`);
    const storyVideos = storyVideoFiles.map((file) => `${publicBase}/${file}`);
    const designVideo = designVideoFile
      ? `${publicBase}/${designVideoFile}`
      : undefined;
    const featureVideos = featureFiles.map((file) => `${publicBase}/${file}`);
    const descriptionRaw =
      readDescriptionFile(dir) ||
      (typeof json?.description === "string" ? json.description : undefined) ||
      fallback?.description;
    const description = descriptionRaw
      ? stripFootnoteMarks(descriptionRaw)
      : undefined;

    const designJson = json?.design;
    const design =
      designJson &&
      typeof designJson === "object" &&
      designJson !== null &&
      "title" in designJson
        ? (designJson as PhoneProduct["design"])
        : undefined;

    const variants =
      (Array.isArray(json?.variants)
        ? (json.variants as string[])
        : undefined) ??
      fallback?.variants ??
      [];
    const specs =
      (Array.isArray(json?.specs)
        ? (json.specs as PhoneProduct["specs"])
        : undefined) ??
      fallback?.specs ??
      [];
    const memory = deriveMemory(variants, specs, json, fallback);

    const product: PhoneProduct = {
      id,
      name,
      category,
      hero,
      heroLayout:
        json?.heroLayout === "banner" || json?.heroLayout === "cinematic"
          ? json.heroLayout
          : fallback?.heroLayout,
      heroTagline:
        (typeof json?.heroTagline === "string"
          ? json.heroTagline
          : undefined) ?? fallback?.heroTagline,
      image,
      imageAlt: `Samsung ${name}`,
      gallery,
      video: storyVideos[0],
      videos: storyVideos.slice(1),
      storyVideos,
      featureVideos,
      designVideo,
      design,
      designIntro: (() => {
        const raw =
          json?.designIntro &&
          typeof json.designIntro === "object" &&
          json.designIntro !== null &&
          "title" in json.designIntro &&
          "body" in json.designIntro
            ? (json.designIntro as { title: string; body: string })
            : fallback?.designIntro;
        if (!raw) return undefined;
        return {
          title: stripFootnoteMarks(raw.title),
          body: stripFootnoteMarks(raw.body),
        };
      })(),
      featureHighlight:
        parseFeatureCard(json?.featureHighlight, publicBase) ??
        parseFeatureCard(fallback?.featureHighlight, publicBase),
      featureSuite: (() => {
        const raw =
          json?.featureSuite &&
          typeof json.featureSuite === "object" &&
          json.featureSuite !== null
            ? (json.featureSuite as Record<string, unknown>)
            : fallback?.featureSuite
              ? (fallback.featureSuite as unknown as Record<string, unknown>)
              : undefined;
        if (!raw) return undefined;
        const lead = parseFeatureCard(raw.lead, publicBase);
        if (!lead) return undefined;
        const cardsRaw = Array.isArray(raw.cards) ? raw.cards : [];
        const cards = cardsRaw
          .map((card) => parseFeatureCard(card, publicBase))
          .filter(
            (card): card is NonNullable<typeof card> => card !== undefined,
          );
        return { lead, cards };
      })(),
      keyPoints: (() => {
        const raw =
          json?.keyPoints &&
          typeof json.keyPoints === "object" &&
          json.keyPoints !== null
            ? (json.keyPoints as Record<string, unknown>)
            : fallback?.keyPoints
              ? (fallback.keyPoints as unknown as Record<string, unknown>)
              : undefined;
        if (
          !raw ||
          typeof raw.title !== "string" ||
          typeof raw.body !== "string" ||
          typeof raw.heading !== "string" ||
          !Array.isArray(raw.slides)
        ) {
          return undefined;
        }
        const slides = raw.slides.flatMap((item) => {
          if (
            !item ||
            typeof item !== "object" ||
            typeof (item as { image?: unknown }).image !== "string" ||
            typeof (item as { caption?: unknown }).caption !== "string"
          ) {
            return [];
          }
          const image = (item as { image: string }).image;
          return [
            {
              image: resolveMediaPath(publicBase, image),
              caption: stripFootnoteMarks((item as { caption: string }).caption),
            },
          ];
        });
        if (slides.length === 0) return undefined;
        return {
          title: stripFootnoteMarks(raw.title),
          body: stripFootnoteMarks(raw.body),
          heading: stripFootnoteMarks(raw.heading),
          slides,
        };
      })(),
      performance:
        json?.performance &&
        typeof json.performance === "object" &&
        json.performance !== null
          ? (json.performance as PhoneProduct["performance"])
          : fallback?.performance,
      battery:
        json?.battery && typeof json.battery === "object" && json.battery !== null
          ? (json.battery as PhoneProduct["battery"])
          : fallback?.battery,
      tagline:
        (typeof json?.tagline === "string" ? json.tagline : undefined) ??
        fallback?.tagline,
      variants,
      ram: memory.ram,
      storage: memory.storage,
      highlights:
        (Array.isArray(json?.highlights)
          ? (json.highlights as string[])
          : undefined) ??
        fallback?.highlights ??
        [],
      description,
      media:
        json?.media &&
        typeof json.media === "object" &&
        json.media !== null &&
        "quote" in (json.media as object)
          ? (json.media as PhoneProduct["media"])
          : fallback && "media" in fallback
            ? (fallback as { media?: PhoneProduct["media"] }).media
            : undefined,
      storyHeading:
        (typeof json?.storyHeading === "string"
          ? json.storyHeading
          : undefined) ?? undefined,
      storyCaptions: Array.isArray(json?.storyCaptions)
        ? (json.storyCaptions as string[])
        : undefined,
      specs,
      cameras:
        (Array.isArray(json?.cameras)
          ? (json.cameras as string[])
          : undefined) ?? fallback?.cameras,
      colors:
        normalizeColors(json?.colors, publicBase, dir) ??
        normalizeColors(fallback?.colors, publicBase, dir),
      sourceNote:
        (typeof json?.sourceNote === "string" ? json.sourceNote : undefined) ??
        fallback?.sourceNote,
    };

    return [product];
  });
}
