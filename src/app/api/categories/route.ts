import { NextResponse } from "next/server";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { isSupabaseConfigured } from "@/lib/supabase/env";

export async function GET() {
  if (!isSupabaseConfigured()) {
    return NextResponse.json({
      categories: [
        { slug: "a-series", name: "Smartphones" },
        { slug: "tablet", name: "Tablettes" },
      ],
    });
  }
  const supabase = await createServerSupabaseClient();
  const { data } = await supabase
    .from("categories")
    .select("id, name, slug, description, is_active")
    .eq("is_active", true)
    .order("sort_order");
  return NextResponse.json({ categories: data ?? [] });
}
