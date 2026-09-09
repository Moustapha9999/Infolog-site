import { createServerSupabaseClient } from "@/lib/supabase/server";
import { isSupabaseConfigured } from "@/lib/supabase/env";
import type { BrandRecord, CategoryRecord } from "./types";

export async function getPublishedCategories(): Promise<CategoryRecord[]> {
  if (!isSupabaseConfigured()) return [];
  try {
    const supabase = await createServerSupabaseClient();
    const { data, error } = await supabase
      .from("categories")
      .select("*")
      .eq("is_active", true)
      .order("sort_order", { ascending: true });
    if (error || !data?.length) return [];
    return data as CategoryRecord[];
  } catch {
    return [];
  }
}

export async function getPublishedBrands(): Promise<BrandRecord[]> {
  if (!isSupabaseConfigured()) return [];
  try {
    const supabase = await createServerSupabaseClient();
    const { data, error } = await supabase
      .from("brands")
      .select("*")
      .eq("is_active", true)
      .order("name", { ascending: true });
    if (error || !data?.length) return [];
    return data as BrandRecord[];
  } catch {
    return [];
  }
}
