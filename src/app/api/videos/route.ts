import { NextResponse } from "next/server";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { isSupabaseConfigured } from "@/lib/supabase/env";

export async function GET() {
  if (!isSupabaseConfigured()) {
    return NextResponse.json({ videos: [] });
  }
  const supabase = await createServerSupabaseClient();
  const { data } = await supabase
    .from("media")
    .select("*")
    .eq("kind", "video")
    .order("created_at", { ascending: false });
  return NextResponse.json({ videos: data ?? [] });
}
