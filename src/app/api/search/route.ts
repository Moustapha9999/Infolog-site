import { NextResponse } from "next/server";
import { clientKey, rateLimit } from "@/lib/cms/rate-limit";
import { resolveLocale } from "@/lib/i18n/config";
import { searchSite } from "@/lib/search";

export async function GET(request: Request) {
  const limited = rateLimit(`search:${clientKey(request)}`, 60, 60_000);
  if (!limited.ok) {
    return NextResponse.json(
      { error: "Trop de recherches. Réessayez dans un instant." },
      { status: 429 },
    );
  }

  const { searchParams } = new URL(request.url);
  const q = String(searchParams.get("q") ?? "").slice(0, 120);
  const mode = searchParams.get("mode");
  const locale = resolveLocale(searchParams.get("locale"));
  const payload = await searchSite(q, {
    suggestionsOnly: mode === "suggest",
    limit: mode === "suggest" ? 8 : 40,
    locale,
  });

  return NextResponse.json(payload, {
    headers: {
      "Cache-Control": "public, s-maxage=30, stale-while-revalidate=120",
    },
  });
}
