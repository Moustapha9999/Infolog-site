import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { getSupabasePublishableKey, getSupabaseUrl } from "./env";

export async function createServerSupabaseClient(options?: {
  sessionMaxAge?: number;
}) {
  const cookieStore = await cookies();

  return createServerClient(getSupabaseUrl(), getSupabasePublishableKey(), {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({ name, value, options: cookieOptions }) => {
            cookieStore.set(name, value, {
              ...cookieOptions,
              ...(options?.sessionMaxAge
                ? { maxAge: options.sessionMaxAge }
                : {}),
            });
          });
        } catch {
          // Server Components cannot write cookies; proxy handles refresh.
        }
      },
    },
  });
}
