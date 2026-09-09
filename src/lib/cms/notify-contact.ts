import type { ContactPayload } from "@/lib/cms/contact";
import { getSiteContact } from "@/lib/cms/site-contact";

export async function notifyContactEmail(payload: ContactPayload) {
  const contact = await getSiteContact();
  const to = process.env.CONTACT_TO_EMAIL?.trim() || contact.email;
  const apiKey = process.env.RESEND_API_KEY?.trim();
  const from = process.env.CONTACT_FROM_EMAIL?.trim();
  if (!to || !apiKey || !from) return;

  const body = [
    `Nom : ${payload.name}`,
    `E-mail : ${payload.email}`,
    payload.phone ? `Téléphone : ${payload.phone}` : null,
    `Sujet : ${payload.subject}`,
    "",
    payload.message,
  ]
    .filter((line) => line !== null)
    .join("\n");

  try {
    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: payload.email,
        subject: `[Contact INFOLOG] ${payload.subject}`,
        text: body,
      }),
    });
  } catch {
    // Le message reste enregistré dans l’administration.
  }
}
