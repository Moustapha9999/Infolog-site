import { NextResponse } from "next/server";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { isSupabaseConfigured } from "@/lib/supabase/env";
import { partners } from "@/data/partners";

export async function GET() {
  if (!isSupabaseConfigured()) {
    return NextResponse.json({
      brands: partners.map((name) => ({ name, slug: name.toLowerCase() })),
    });
  }
  const supabase = await createServerSupabaseClient();
  const { data, error } = await supabase
    .from("brands")
    .select("id, name, slug, is_active")
    .eq("is_active", true)
    .order("name");
  if (error) {
    return NextResponse.json({ brands: [] }, { status: 200 });
  }
  return NextResponse.json({ brands: data ?? [] });
}
