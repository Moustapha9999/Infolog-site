import { NextResponse } from "next/server";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { isSupabaseConfigured } from "@/lib/supabase/env";
import { getAdminSession } from "@/lib/cms/auth";

export async function GET() {
  if (!isSupabaseConfigured()) {
    return NextResponse.json({ media: [] });
  }
  const session = await getAdminSession();
  const supabase = await createServerSupabaseClient();
  const query = supabase
    .from("media")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(session ? 200 : 40);
  const { data } = await query;
  return NextResponse.json({ media: data ?? [] });
}
