import { NextResponse } from "next/server";
import { getPublishedServices } from "@/lib/cms/services";

export async function GET() {
  const services = await getPublishedServices();
  return NextResponse.json({ services });
}
