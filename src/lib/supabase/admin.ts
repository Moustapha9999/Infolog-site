import { createClient } from "@supabase/supabase-js";
import {
  getSupabaseServiceRoleKey,
  getSupabaseUrl,
  isSupabaseConfigured,
} from "./env";

/** Server-only. Never import from client components. */
export function createServiceSupabaseClient() {
  const url = getSupabaseUrl();
  const key = getSupabaseServiceRoleKey();
  if (!url || !key) {
    throw new Error("SUPABASE_SERVICE_ROLE_KEY manquant.");
  }
  return createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}

export function canUseServiceRole() {
  return isSupabaseConfigured() && Boolean(getSupabaseServiceRoleKey());
}
