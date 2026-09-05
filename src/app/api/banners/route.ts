import { NextResponse } from "next/server";
import { getActiveBanners } from "@/lib/cms/banners";

export async function GET() {
  const banners = await getActiveBanners();
  return NextResponse.json({ banners });
}
