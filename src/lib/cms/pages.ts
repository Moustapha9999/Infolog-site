import { createServerSupabaseClient } from "@/lib/supabase/server";
import { isSupabaseConfigured } from "@/lib/supabase/env";
import type { Locale } from "@/lib/i18n/config";
import { applyTranslations, parseTranslations } from "@/lib/i18n/localize";
import type { PageRecord, PageSectionRecord } from "./types";

export async function getPageSections(slug: string, locale: Locale = "fr") {
  const map = new Map<string, string>();
  if (!isSupabaseConfigured()) return map;
  try {
    const supabase = await createServerSupabaseClient();
    const { data: page } = await supabase
      .from("pages")
      .select("id")
      .eq("slug", slug)
      .eq("is_published", true)
      .maybeSingle();
    if (!page) return map;
    const { data: sections } = await supabase
      .from("page_sections")
      .select("*")
      .eq("page_id", page.id)
      .order("sort_order", { ascending: true });
    for (const section of (sections ?? []) as PageSectionRecord[]) {
      const localized = applyTranslations(
        locale,
        section,
        parseTranslations(section.translations),
        ["value"],
      );
      if (localized.value) map.set(section.key, localized.value);
    }
    return map;
  } catch {
    return map;
  }
}

/** Pages CMS publiées — alimentent la recherche globale. */
export async function getPublishedPages(): Promise<PageRecord[]> {
  if (!isSupabaseConfigured()) return [];
  try {
    const supabase = await createServerSupabaseClient();
    const { data, error } = await supabase
      .from("pages")
      .select("*")
      .eq("is_published", true)
      .order("title", { ascending: true });
    if (error || !data?.length) return [];
    return data as PageRecord[];
  } catch {
    return [];
  }
}

export function sectionValue(
  sections: Map<string, string>,
  key: string,
  fallback: string,
) {
  return sections.get(key) || fallback;
}

export async function listAdminPages() {
  const supabase = await createServerSupabaseClient();
  const { data, error } = await supabase
    .from("pages")
    .select("*")
    .order("title", { ascending: true });
  if (error) throw error;
  return (data ?? []) as PageRecord[];
}

export async function getAdminPage(id: string) {
  const supabase = await createServerSupabaseClient();
  const { data, error } = await supabase
    .from("pages")
    .select("*")
    .eq("id", id)
    .maybeSingle();
  if (error) throw error;
  const { data: sections } = await supabase
    .from("page_sections")
    .select("*")
    .eq("page_id", id)
    .order("sort_order", { ascending: true });
  return {
    page: data as PageRecord | null,
    sections: (sections ?? []) as PageSectionRecord[],
  };
}
