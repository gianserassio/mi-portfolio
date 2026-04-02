import { Resend } from "resend";
import { NextResponse } from "next/server";

if (!process.env.RESEND_API_KEY) {
  throw new Error("RESEND_API_KEY environment variable is not set");
}

const resend = new Resend(process.env.RESEND_API_KEY);

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email) && email.length <= 254;
}

function sanitizeHeader(value: string): string {
  return value.replace(/[\r\n\t]/g, " ").trim();
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { nombre, email, mensaje, website } = body;

    // Honeypot: los bots rellenan este campo, los humanos no
    if (website) {
      return NextResponse.json({ ok: true });
    }

    if (!nombre || !email || !mensaje) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    if (typeof nombre !== "string" || typeof email !== "string" || typeof mensaje !== "string") {
      return NextResponse.json({ error: "Invalid fields" }, { status: 400 });
    }

    if (nombre.length > 100 || mensaje.length > 2000) {
      return NextResponse.json({ error: "Field too long" }, { status: 400 });
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    const safeName = sanitizeHeader(nombre);
    const safeEmail = sanitizeHeader(email);

    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL ?? "gianserassio@gmail.com",
      replyTo: safeEmail,
      subject: `New message from ${safeName}`,
      text: `Name: ${safeName}\nEmail: ${safeEmail}\n\n${mensaje}`,
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
