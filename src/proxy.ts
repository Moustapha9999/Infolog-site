import { NextResponse, type NextRequest } from "next/server";
import { updateSession } from "@/lib/supabase/proxy";
import { isSupabaseConfigured } from "@/lib/supabase/env";
import { isStaffRole } from "@/lib/cms/roles";
import { createServerClient } from "@supabase/ssr";
import { getSupabasePublishableKey, getSupabaseUrl } from "@/lib/supabase/env";
import {
  isPublicAdminAuthPath,
  RESET_PASSWORD_PATH,
} from "@/lib/cms/admin-path";
import { PASSWORD_RECOVERY_COOKIE } from "@/lib/cms/password-recovery";
import {
  adminHostSplitEnabled,
  hostFromHeaders,
  isAdminHostname,
  isAdminOnlyPath,
  isPublicHostname,
  originForHost,
  pairedAdminHost,
} from "@/lib/site-hosts";

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const host = hostFromHeaders(request.headers);

  if (adminHostSplitEnabled()) {
    if (isPublicHostname(host) && pathname.startsWith("/admin")) {
      const adminHost = pairedAdminHost(host);
      if (adminHost && adminHost !== host) {
        return NextResponse.redirect(
          new URL(pathname + request.nextUrl.search, originForHost(adminHost)),
          308,
        );
      }
    }
    if (isAdminHostname(host) && !isAdminOnlyPath(pathname)) {
      return NextResponse.redirect(new URL("/admin", originForHost(host)), 308);
    }
  }

  const response = await updateSession(request);
  const recovering = request.cookies.get(PASSWORD_RECOVERY_COOKIE)?.value === "1";

  if (
    recovering &&
    pathname.startsWith("/admin") &&
    !pathname.startsWith(RESET_PASSWORD_PATH)
  ) {
    return NextResponse.redirect(new URL(RESET_PASSWORD_PATH, request.url));
  }

  if (!pathname.startsWith("/admin")) {
    return response;
  }

  if (isPublicAdminAuthPath(pathname)) {
    return response;
  }

  if (!isSupabaseConfigured()) {
    return response;
  }

  const supabase = createServerClient(
    getSupabaseUrl(),
    getSupabasePublishableKey(),
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll() {
          // Session already refreshed in updateSession.
        },
      },
    },
  );

  const { data } = await supabase.auth.getClaims();
  const role = (data?.claims as { app_metadata?: { role?: string } } | undefined)
    ?.app_metadata?.role;

  if (!isStaffRole(role)) {
    const login = new URL("/admin/login", request.url);
    login.searchParams.set("next", pathname.startsWith("/admin/login") ? "/admin" : pathname);
    if (data?.claims) {
      login.searchParams.set("error", "role");
    }
    return NextResponse.redirect(login);
  }

  return response;
}

export const config = {
  matcher: [
    "/admin/:path*",
    "/((?!_next/static|_next/image|favicon.ico|brand/|.*\\.(?:svg|png|jpg|jpeg|gif|webp|mp4|webm)$).*)",
  ],
};
