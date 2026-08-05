import { NextResponse } from "next/server";
import { Resend } from "resend";

import {
  buildContactEmailHtml,
  buildContactEmailSubject,
  buildContactEmailText,
} from "@/lib/emails/contact-message";
import { portfolio } from "@/lib/portfolio";

export async function POST(request: Request) {
  const body = await request.json();
  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const message = String(body.message ?? "").trim();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  const to = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL ?? "onboarding@resend.dev";
  const fromName = process.env.CONTACT_FROM_NAME ?? `${portfolio.firstName} Portfolio`;
  const from = `${fromName} <${fromEmail}>`;

  if (!process.env.RESEND_API_KEY || !to) {
    return NextResponse.json({ error: "Server not configured" }, { status: 500 });
  }

  const emailContent = { name, email, message };

  const resend = new Resend(process.env.RESEND_API_KEY);
  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: email,
    subject: buildContactEmailSubject(name),
    text: buildContactEmailText(emailContent),
    html: buildContactEmailHtml(emailContent),
  });

  if (error) {
    return NextResponse.json({ error: "Failed to send" }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
