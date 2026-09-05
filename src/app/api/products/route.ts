import { NextResponse } from "next/server";
import { getPublishedProducts } from "@/lib/cms/products";

export async function GET() {
  const products = await getPublishedProducts();
  return NextResponse.json({
    products: products.map((phone) => ({
      id: phone.id,
      name: phone.name,
      category: phone.category,
      tagline: phone.tagline,
      description: phone.description,
      image: phone.image,
      price: phone.priceLabel ?? null,
      compareAt: phone.compareLabel ?? null,
      isNew: phone.isNew ?? false,
      isPromo: phone.isPromo ?? false,
      availability: phone.availability ?? "available",
    })),
  });
}
