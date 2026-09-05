import { aboutServices } from "@/data/site";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { isSupabaseConfigured } from "@/lib/supabase/env";
import type { ServiceRecord } from "./types";

export function fallbackServices(): ServiceRecord[] {
  return aboutServices.map((title, index) => ({
    id: `local-${index}`,
    title,
    slug: title.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
    description: null,
    icon: null,
    sort_order: index,
    is_active: true,
  }));
}

export async function getPublishedServices() {
  if (!isSupabaseConfigured()) return fallbackServices();
  try {
    const supabase = await createServerSupabaseClient();
    const { data, error } = await supabase
      .from("services")
      .select("*")
      .eq("is_active", true)
      .order("sort_order", { ascending: true });
    if (error || !data?.length) return fallbackServices();
    return data as ServiceRecord[];
  } catch {
    return fallbackServices();
  }
}

export async function listAdminServices() {
  const supabase = await createServerSupabaseClient();
  const { data, error } = await supabase
    .from("services")
    .select("*")
    .order("sort_order", { ascending: true });
  if (error) throw error;
  return (data ?? []) as ServiceRecord[];
}
