import { NextResponse } from "next/server";
import { getPublishedProduct } from "@/lib/cms/products";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const product = await getPublishedProduct(id);
  if (!product) {
    return NextResponse.json({ error: "Produit introuvable" }, { status: 404 });
  }
  return NextResponse.json({ product });
}
