import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/cms/contact";
import { notifyContactEmail } from "@/lib/cms/notify-contact";
import { clientKey, rateLimit } from "@/lib/cms/rate-limit";
import { isSupabaseConfigured } from "@/lib/supabase/env";
import { createServerSupabaseClient } from "@/lib/supabase/server";

export async function POST(request: Request) {
  if (!isSupabaseConfigured()) {
    return NextResponse.json(
      { error: "Le formulaire n’est pas encore connecté à la base." },
      { status: 503 },
    );
  }

  const limited = rateLimit(`contact:${clientKey(request)}`, 5, 10 * 60 * 1000);
  if (!limited.ok) {
    return NextResponse.json(
      { error: "Trop de tentatives. Réessayez plus tard." },
      { status: 429 },
    );
  }

  const body = await request.json().catch(() => null);
  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Merci de renseigner nom, e-mail, sujet et message." },
      { status: 400 },
    );
  }

  if (parsed.data.company?.trim()) {
    return NextResponse.json({ ok: true });
  }

  const supabase = await createServerSupabaseClient();
  const { error } = await supabase.from("contact_messages").insert({
    name: parsed.data.name,
    email: parsed.data.email,
    phone: parsed.data.phone || null,
    subject: parsed.data.subject,
    message: parsed.data.message,
  });

  if (error) {
    return NextResponse.json(
      { error: "Impossible d’enregistrer le message." },
      { status: 500 },
    );
  }

  await notifyContactEmail(parsed.data);

  return NextResponse.json({ ok: true });
}
