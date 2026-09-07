"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { requireAdminSession } from "@/lib/cms/auth";
import { writeAuditLog } from "@/lib/cms/audit";
import { slugify } from "@/lib/cms/format";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import {
  IMAGE_MIME,
  MAX_IMAGE_BYTES,
  MAX_VIDEO_BYTES,
  VIDEO_MIME,
} from "@/lib/cms/media-url";

function bool(formData: FormData, key: string) {
  return formData.get(key) === "on" || formData.get(key) === "true";
}

function text(formData: FormData, key: string) {
  const value = String(formData.get(key) ?? "").trim();
  return value || null;
}

function num(formData: FormData, key: string) {
  const raw = String(formData.get(key) ?? "").trim();
  if (!raw) return null;
  const value = Number(raw.replace(",", "."));
  return Number.isFinite(value) ? value : null;
}

function adminNext(formData: FormData, fallback: string) {
  const next = text(formData, "next");
  if (next && /^\/admin(?:\/[a-z0-9\-]+)*$/.test(next)) return next;
  return fallback;
}

const ACTIVE_ENTITIES = {
  brands: { table: "brands", column: "is_active", path: "/admin/brands", type: "brand" },
  categories: {
    table: "categories",
    column: "is_active",
    path: "/admin/categories",
    type: "category",
  },
  products: {
    table: "products",
    column: "is_active",
    path: "/admin/products",
    type: "product",
  },
  banners: { table: "banners", column: "is_active", path: "/admin/banners", type: "banner" },
  services: {
    table: "services",
    column: "is_active",
    path: "/admin/services",
    type: "service",
  },
  pages: { table: "pages", column: "is_published", path: "/admin/pages", type: "page" },
} as const;

export async function setRecordActive(formData: FormData) {
  const session = await requireAdminSession();
  const entity = String(formData.get("entity") ?? "");
  const id = String(formData.get("id") ?? "");
  const config = ACTIVE_ENTITIES[entity as keyof typeof ACTIVE_ENTITIES];
  if (!config || !id) return;
  const active = formData.get("active") === "1";
  const supabase = await createServerSupabaseClient();
  await supabase.from(config.table).update({ [config.column]: active }).eq("id", id);
  await writeAuditLog({
    actorId: session.userId,
    action: active ? "activate" : "deactivate",
    entityType: config.type,
    entityId: id,
  });
  await revalidatePublic();
  redirect(adminNext(formData, config.path));
}

async function revalidatePublic() {
  revalidatePath("/", "layout");
  revalidatePath("/telephonie");
  revalidatePath("/qui-sommes-nous");
  revalidatePath("/contact");
  revalidatePath("/admin");
}

export async function saveBrand(formData: FormData) {
  const session = await requireAdminSession();
  const supabase = await createServerSupabaseClient();
  const id = text(formData, "id");
  const name = String(formData.get("name") ?? "").trim();
  const slug = text(formData, "slug") || slugify(name);
  const payload = {
    name,
    slug,
    is_active: bool(formData, "is_active"),
  };
  if (id) {
    await supabase.from("brands").update(payload).eq("id", id);
  } else {
    await supabase.from("brands").insert(payload);
  }
  await writeAuditLog({
    actorId: session.userId,
    action: id ? "update" : "create",
    entityType: "brand",
    entityId: id ?? slug,
  });
  await revalidatePublic();
  redirect("/admin/brands");
}

export async function deleteBrand(formData: FormData) {
  const session = await requireAdminSession();
  const id = String(formData.get("id") ?? "");
  const supabase = await createServerSupabaseClient();
  await supabase.from("brands").delete().eq("id", id);
  await writeAuditLog({
    actorId: session.userId,
    action: "delete",
    entityType: "brand",
    entityId: id,
  });
  await revalidatePublic();
  redirect(adminNext(formData, "/admin/brands"));
}

export async function saveCategory(formData: FormData) {
  const session = await requireAdminSession();
  const supabase = await createServerSupabaseClient();
  const id = text(formData, "id");
  const name = String(formData.get("name") ?? "").trim();
  const payload = {
    name,
    slug: text(formData, "slug") || slugify(name),
    description: text(formData, "description"),
    is_active: bool(formData, "is_active"),
    sort_order: num(formData, "sort_order") ?? 0,
  };
  if (id) await supabase.from("categories").update(payload).eq("id", id);
  else await supabase.from("categories").insert(payload);
  await writeAuditLog({
    actorId: session.userId,
    action: id ? "update" : "create",
    entityType: "category",
    entityId: id ?? payload.slug,
  });
  await revalidatePublic();
  redirect("/admin/categories");
}

export async function deleteCategory(formData: FormData) {
  const session = await requireAdminSession();
  const id = String(formData.get("id") ?? "");
  const supabase = await createServerSupabaseClient();
  await supabase.from("categories").delete().eq("id", id);
  await writeAuditLog({
    actorId: session.userId,
    action: "delete",
    entityType: "category",
    entityId: id,
  });
  await revalidatePublic();
  redirect(adminNext(formData, "/admin/categories"));
}

export async function saveProduct(formData: FormData) {
  const session = await requireAdminSession();
  const supabase = await createServerSupabaseClient();
  const id = text(formData, "id");
  const name = String(formData.get("name") ?? "").trim();
  const specs = String(formData.get("specs") ?? "")
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const [label, ...rest] = line.split("|");
      return { label: label.trim(), value: rest.join("|").trim() };
    });
  const highlights = String(formData.get("highlights") ?? "")
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
  const variants = String(formData.get("variants") ?? "")
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  let previousDetails: Record<string, unknown> = {};
  if (id) {
    const { data: current } = await supabase
      .from("products")
      .select("details")
      .eq("id", id)
      .maybeSingle();
    previousDetails = (current?.details as Record<string, unknown>) ?? {};
  }

  const payload = {
    name,
    slug: text(formData, "slug") || slugify(name),
    brand_id: text(formData, "brand_id"),
    category_id: text(formData, "category_id"),
    tagline: text(formData, "tagline"),
    description: text(formData, "description"),
    details: { ...previousDetails, specs, highlights, variants },
    is_active: bool(formData, "is_active"),
    is_featured: bool(formData, "is_featured"),
    is_new: bool(formData, "is_new"),
    is_promo: bool(formData, "is_promo"),
    availability: String(formData.get("availability") ?? "available"),
    sort_order: num(formData, "sort_order") ?? 0,
    meta_title: text(formData, "meta_title"),
    meta_description: text(formData, "meta_description"),
  };

  let productId = id;
  if (id) {
    await supabase.from("products").update(payload).eq("id", id);
  } else {
    const { data } = await supabase
      .from("products")
      .insert(payload)
      .select("id")
      .single();
    productId = data?.id ?? null;
    if (productId) {
      await supabase.from("product_prices").insert({
        product_id: productId,
        is_visible: false,
        currency: "MRU",
      });
    }
  }

  if (productId) {
    const pricePayload = {
      product_id: productId,
      amount: num(formData, "amount"),
      compare_at_amount: num(formData, "compare_at_amount"),
      currency: text(formData, "currency") || "MRU",
      promo_starts_at: text(formData, "promo_starts_at"),
      promo_ends_at: text(formData, "promo_ends_at"),
      is_visible: bool(formData, "price_visible"),
    };
    const { data: existingPrice } = await supabase
      .from("product_prices")
      .select("id")
      .eq("product_id", productId)
      .maybeSingle();
    if (existingPrice) {
      await supabase
        .from("product_prices")
        .update(pricePayload)
        .eq("product_id", productId);
    } else {
      await supabase.from("product_prices").insert(pricePayload);
    }
  }

  await writeAuditLog({
    actorId: session.userId,
    action: id ? "update" : "create",
    entityType: "product",
    entityId: productId,
  });
  await revalidatePublic();
  redirect("/admin/products");
}

export async function deleteProduct(formData: FormData) {
  const session = await requireAdminSession();
  const id = String(formData.get("id") ?? "");
  const supabase = await createServerSupabaseClient();
  await supabase.from("products").delete().eq("id", id);
  await writeAuditLog({
    actorId: session.userId,
    action: "delete",
    entityType: "product",
    entityId: id,
  });
  await revalidatePublic();
  redirect(adminNext(formData, "/admin/products"));
}

export async function uploadMedia(formData: FormData) {
  const session = await requireAdminSession();
  const file = formData.get("file");
  if (!(file instanceof File) || file.size === 0) {
    redirect("/admin/media?error=file");
  }

  const isVideo = VIDEO_MIME.has(file.type);
  const isImage = IMAGE_MIME.has(file.type);
  if (!isVideo && !isImage) {
    redirect("/admin/media?error=type");
  }
  if (isImage && file.size > MAX_IMAGE_BYTES) {
    redirect("/admin/media?error=size");
  }
  if (isVideo && file.size > MAX_VIDEO_BYTES) {
    redirect("/admin/media?error=size");
  }

  const supabase = await createServerSupabaseClient();
  const kind = isVideo ? "video" : "image";
  const safe = file.name.replace(/[^\w.\-]+/g, "-").toLowerCase();
  const generated = `${Date.now()}-${safe}`;
  const path = `${kind}/${generated}`;

  const { error: uploadError } = await supabase.storage
    .from("media")
    .upload(path, file, { contentType: file.type, upsert: false });
  if (uploadError) {
    redirect("/admin/media?error=upload");
  }

  const { data: publicData } = supabase.storage.from("media").getPublicUrl(path);
  await supabase.from("media").insert({
    kind,
    title: text(formData, "title") || file.name,
    alt: text(formData, "alt"),
    description: text(formData, "description"),
    original_name: file.name,
    generated_name: generated,
    storage_path: path,
    public_url: publicData.publicUrl,
    mime_type: file.type,
    size_bytes: file.size,
  });

  await writeAuditLog({
    actorId: session.userId,
    action: "upload",
    entityType: "media",
    entityId: path,
  });
  revalidatePath("/admin/media");
  revalidatePath("/admin/videos");
  redirect(isVideo ? "/admin/videos" : "/admin/media");
}

export async function saveExternalVideo(formData: FormData) {
  const session = await requireAdminSession();
  const supabase = await createServerSupabaseClient();
  await supabase.from("media").insert({
    kind: "video",
    title: text(formData, "title"),
    description: text(formData, "description"),
    external_url: text(formData, "external_url"),
    public_url: text(formData, "external_url"),
  });
  await writeAuditLog({
    actorId: session.userId,
    action: "create",
    entityType: "video",
  });
  redirect("/admin/videos");
}

export async function updateMediaMeta(formData: FormData) {
  const session = await requireAdminSession();
  const id = String(formData.get("id") ?? "");
  const supabase = await createServerSupabaseClient();
  await supabase
    .from("media")
    .update({
      title: text(formData, "title"),
      alt: text(formData, "alt"),
      description: text(formData, "description"),
    })
    .eq("id", id);
  await writeAuditLog({
    actorId: session.userId,
    action: "update",
    entityType: "media",
    entityId: id,
  });
  redirect(adminNext(formData, "/admin/media"));
}

export async function deleteMedia(formData: FormData) {
  const session = await requireAdminSession();
  const id = String(formData.get("id") ?? "");
  const supabase = await createServerSupabaseClient();
  const { data } = await supabase
    .from("media")
    .select("storage_path")
    .eq("id", id)
    .maybeSingle();
  if (data?.storage_path) {
    await supabase.storage.from("media").remove([data.storage_path]);
  }
  await supabase.from("media").delete().eq("id", id);
  await writeAuditLog({
    actorId: session.userId,
    action: "delete",
    entityType: "media",
    entityId: id,
  });
  redirect(adminNext(formData, "/admin/media"));
}

export async function linkMedia(formData: FormData) {
  await requireAdminSession();
  const supabase = await createServerSupabaseClient();
  await supabase.from("media_links").upsert({
    media_id: String(formData.get("media_id")),
    entity_type: String(formData.get("entity_type")),
    entity_id: String(formData.get("entity_id")),
    role: String(formData.get("role") ?? "gallery"),
    position: num(formData, "position") ?? 0,
  });
  await revalidatePublic();
}

async function syncBannerMedia(
  supabase: Awaited<ReturnType<typeof createServerSupabaseClient>>,
  bannerId: string,
  role: string,
  mediaId: string | null,
) {
  await supabase
    .from("media_links")
    .delete()
    .eq("entity_type", "banner")
    .eq("entity_id", bannerId)
    .eq("role", role);
  if (!mediaId) return;
  await supabase.from("media_links").insert({
    media_id: mediaId,
    entity_type: "banner",
    entity_id: bannerId,
    role,
    position: 0,
  });
}

export async function saveBanner(formData: FormData) {
  const session = await requireAdminSession();
  const supabase = await createServerSupabaseClient();
  const id = text(formData, "id");
  const payload = {
    title: String(formData.get("title") ?? "").trim(),
    subtitle: text(formData, "subtitle"),
    description: text(formData, "description"),
    button_label: text(formData, "button_label"),
    button_href: text(formData, "button_href"),
    sort_order: num(formData, "sort_order") ?? 0,
    is_active: bool(formData, "is_active"),
    starts_at: text(formData, "starts_at"),
    ends_at: text(formData, "ends_at"),
  };
  let bannerId = id;
  if (id) await supabase.from("banners").update(payload).eq("id", id);
  else {
    const { data } = await supabase
      .from("banners")
      .insert(payload)
      .select("id")
      .single();
    bannerId = data?.id ?? null;
  }

  const desktop = text(formData, "desktop_media_id");
  const mobile = text(formData, "mobile_media_id");
  const video = text(formData, "video_media_id");
  if (bannerId) {
    await syncBannerMedia(supabase, bannerId, "desktop", desktop);
    await syncBannerMedia(supabase, bannerId, "mobile", mobile);
    await syncBannerMedia(supabase, bannerId, "video", video);
  }

  await writeAuditLog({
    actorId: session.userId,
    action: id ? "update" : "create",
    entityType: "banner",
    entityId: bannerId,
  });
  await revalidatePublic();
  redirect("/admin/banners");
}

export async function deleteBanner(formData: FormData) {
  const session = await requireAdminSession();
  const id = String(formData.get("id") ?? "");
  const supabase = await createServerSupabaseClient();
  await supabase.from("banners").delete().eq("id", id);
  await writeAuditLog({
    actorId: session.userId,
    action: "delete",
    entityType: "banner",
    entityId: id,
  });
  await revalidatePublic();
  redirect(adminNext(formData, "/admin/banners"));
}

export async function saveService(formData: FormData) {
  const session = await requireAdminSession();
  const supabase = await createServerSupabaseClient();
  const id = text(formData, "id");
  const title = String(formData.get("title") ?? "").trim();
  const payload = {
    title,
    slug: text(formData, "slug") || slugify(title),
    description: text(formData, "description"),
    icon: text(formData, "icon"),
    sort_order: num(formData, "sort_order") ?? 0,
    is_active: bool(formData, "is_active"),
  };
  if (id) await supabase.from("services").update(payload).eq("id", id);
  else await supabase.from("services").insert(payload);
  await writeAuditLog({
    actorId: session.userId,
    action: id ? "update" : "create",
    entityType: "service",
    entityId: id ?? payload.slug,
  });
  await revalidatePublic();
  redirect("/admin/services");
}

export async function deleteService(formData: FormData) {
  const session = await requireAdminSession();
  const id = String(formData.get("id") ?? "");
  const supabase = await createServerSupabaseClient();
  await supabase.from("services").delete().eq("id", id);
  await writeAuditLog({
    actorId: session.userId,
    action: "delete",
    entityType: "service",
    entityId: id,
  });
  await revalidatePublic();
  redirect(adminNext(formData, "/admin/services"));
}

export async function savePage(formData: FormData) {
  const session = await requireAdminSession();
  const supabase = await createServerSupabaseClient();
  const id = text(formData, "id");
  const title = String(formData.get("title") ?? "").trim();
  const payload = {
    title,
    slug: text(formData, "slug") || slugify(title),
    meta_title: text(formData, "meta_title"),
    meta_description: text(formData, "meta_description"),
    is_published: bool(formData, "is_published"),
  };
  if (id) await supabase.from("pages").update(payload).eq("id", id);
  else await supabase.from("pages").insert(payload);
  await writeAuditLog({
    actorId: session.userId,
    action: id ? "update" : "create",
    entityType: "page",
    entityId: id ?? payload.slug,
  });
  await revalidatePublic();
  redirect(adminNext(formData, "/admin/pages"));
}

export async function deletePage(formData: FormData) {
  const session = await requireAdminSession();
  const id = String(formData.get("id") ?? "");
  const supabase = await createServerSupabaseClient();
  await supabase.from("pages").delete().eq("id", id);
  await writeAuditLog({
    actorId: session.userId,
    action: "delete",
    entityType: "page",
    entityId: id,
  });
  await revalidatePublic();
  redirect(adminNext(formData, "/admin/pages"));
}

export async function saveSection(formData: FormData) {
  const session = await requireAdminSession();
  const supabase = await createServerSupabaseClient();
  const id = text(formData, "id");
  const pageId = String(formData.get("page_id"));
  const payload = {
    page_id: pageId,
    key: String(formData.get("key") ?? "").trim(),
    kind: String(formData.get("kind") ?? "paragraph"),
    value: text(formData, "value"),
    href: text(formData, "href"),
    sort_order: num(formData, "sort_order") ?? 0,
  };
  if (id) await supabase.from("page_sections").update(payload).eq("id", id);
  else await supabase.from("page_sections").insert(payload);
  await writeAuditLog({
    actorId: session.userId,
    action: id ? "update" : "create",
    entityType: "page_section",
    entityId: id ?? payload.key,
  });
  await revalidatePublic();
  redirect(`/admin/pages/${pageId}`);
}

export async function deleteSection(formData: FormData) {
  await requireAdminSession();
  const id = String(formData.get("id"));
  const pageId = String(formData.get("page_id"));
  const supabase = await createServerSupabaseClient();
  await supabase.from("page_sections").delete().eq("id", id);
  redirect(`/admin/pages/${pageId}`);
}

export async function toggleMessageRead(formData: FormData) {
  await requireAdminSession();
  const id = String(formData.get("id"));
  const read = formData.get("read") === "1";
  const supabase = await createServerSupabaseClient();
  await supabase
    .from("contact_messages")
    .update({ read_at: read ? new Date().toISOString() : null })
    .eq("id", id);
  revalidatePath("/admin/messages");
  revalidatePath("/admin");
}

export async function deleteMessage(formData: FormData) {
  const session = await requireAdminSession();
  const id = String(formData.get("id"));
  const supabase = await createServerSupabaseClient();
  await supabase.from("contact_messages").delete().eq("id", id);
  await writeAuditLog({
    actorId: session.userId,
    action: "delete",
    entityType: "contact_message",
    entityId: id,
  });
  revalidatePath("/admin/messages");
  revalidatePath("/admin");
  redirect(adminNext(formData, "/admin/messages"));
}

export async function setUserRole(formData: FormData) {
  await requireAdminSession({ adminOnly: true });
  const id = String(formData.get("id"));
  const role = String(formData.get("role"));
  if (role !== "admin" && role !== "editor") return;
  const supabase = await createServerSupabaseClient();
  await supabase.from("profiles").update({ role }).eq("id", id);
  redirect("/admin/users");
}
