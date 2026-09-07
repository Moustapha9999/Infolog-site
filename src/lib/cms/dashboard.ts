import { createServerSupabaseClient } from "@/lib/supabase/server";

async function countRows(
  table: string,
  filter?: { column: string; value: string | boolean | null },
) {
  const supabase = await createServerSupabaseClient();
  let query = supabase.from(table).select("id", { count: "exact", head: true });
  if (filter) {
    if (filter.value === null) query = query.is(filter.column, null);
    else query = query.eq(filter.column, filter.value);
  }
  const { count } = await query;
  return count ?? 0;
}

export async function getDashboardStats() {
  const [
    products,
    productsActive,
    productsPromo,
    brands,
    services,
    images,
    videos,
    unread,
    pages,
    banners,
  ] = await Promise.all([
    countRows("products"),
    countRows("products", { column: "is_active", value: true }),
    countRows("products", { column: "is_promo", value: true }),
    countRows("brands"),
    countRows("services"),
    countRows("media", { column: "kind", value: "image" }),
    countRows("media", { column: "kind", value: "video" }),
    countRows("contact_messages", { column: "read_at", value: null }),
    countRows("pages"),
    countRows("banners"),
  ]);

  const supabase = await createServerSupabaseClient();
  const [{ data: latestProducts }, { data: latestMessages }, { data: latestLogs }] =
    await Promise.all([
      supabase
        .from("products")
        .select("id, name, slug, created_at, is_featured, is_active")
        .order("created_at", { ascending: false })
        .limit(5),
      supabase
        .from("contact_messages")
        .select("id, name, subject, created_at, read_at")
        .order("created_at", { ascending: false })
        .limit(5),
      supabase
        .from("audit_logs")
        .select("id, action, entity_type, created_at")
        .order("created_at", { ascending: false })
        .limit(6),
    ]);

  return {
    products,
    productsActive,
    productsPromo,
    brands,
    services,
    images,
    videos,
    unread,
    pages,
    banners,
    latestProducts: latestProducts ?? [],
    latestMessages: latestMessages ?? [],
    latestLogs: latestLogs ?? [],
  };
}

export async function getUnreadCount() {
  try {
    return await countRows("contact_messages", { column: "read_at", value: null });
  } catch {
    return 0;
  }
}
