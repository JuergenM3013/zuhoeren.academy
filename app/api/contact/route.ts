import { NextResponse } from "next/server";
import { z } from "zod";
import { env } from "@/lib/env";
import { rateLimit } from "@/lib/rateLimit";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().optional().or(z.literal("")),
  topic: z.string().optional().or(z.literal("")),
  message: z.string().min(10),
  website: z.string().optional().or(z.literal("")), // honeypot
});

export async function POST(req: Request) {
  // Rate limit by IP (best-effort)
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  const allowed = await rateLimit(ip);
  if (!allowed) {
    return NextResponse.json(
      { error: "Zu viele Anfragen. Bitte später erneut versuchen." },
      { status: 429 }
    );
  }

  const body = await req.json().catch(() => null);
  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Bitte Eingaben prüfen." }, { status: 400 });
  }

  // Honeypot: wenn befüllt => Bot
  if (parsed.data.website) {
    return NextResponse.json({ ok: true });
  }

  const { name, email, company, topic, message } = parsed.data;

  // Resend HTTP API
  const fromAddress = env.RESEND_FROM || "zuhoeren.academy <onboarding@resend.dev>";
  const payload = {
    from: fromAddress,
    to: [env.CONTACT_TO],
    subject: `Neue Anfrage – ${topic || "Demo/Pilot"}`,
    reply_to: email,
    text: `Name: ${name}\nE-Mail: ${email}\nUnternehmen: ${company || "-"}\nInteresse: ${topic || "-"}\n\nNachricht:\n${message}\n\nIP: ${ip}`,
  };

  try {
    const r = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!r.ok) {
      const errorData = await r.json().catch(() => ({}));
      console.error("Resend API error:", r.status, errorData);
      return NextResponse.json(
        { error: "E-Mail konnte nicht gesendet werden." },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Resend fetch error:", err);
    return NextResponse.json(
      { error: "E-Mail-Dienst nicht erreichbar." },
      { status: 500 }
    );
  }
}
