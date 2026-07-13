import { NextResponse } from "next/server";
import { Resend } from "resend";
import { site } from "@/lib/site";

type ContactBody = {
  name?: string;
  email?: string;
  service?: string;
  budget?: string;
  timeline?: string;
  message?: string;
  company?: string; // honeypot
};

function validate(body: ContactBody) {
  const name = String(body.name || "").trim();
  const email = String(body.email || "").trim();
  const service = String(body.service || "").trim() || "General";
  const budget = String(body.budget || "").trim() || "Not specified";
  const timeline = String(body.timeline || "").trim() || "Not specified";
  const message = String(body.message || "").trim();

  if (!name || !email || !message) {
    return { error: "Name, email, and project notes are required." } as const;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { error: "Enter a valid email address." } as const;
  }

  return { name, email, service, budget, timeline, message } as const;
}

async function sendWithWeb3Forms(fields: {
  name: string;
  email: string;
  service: string;
  budget: string;
  timeline: string;
  message: string;
}) {
  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
  if (!accessKey) return null;

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      access_key: accessKey,
      subject: `JewelSphy inquiry — ${fields.service}`,
      from_name: fields.name,
      name: fields.name,
      email: fields.email,
      replyto: fields.email,
      service: fields.service,
      budget: fields.budget,
      timeline: fields.timeline,
      message: fields.message,
    }),
  });

  const data = (await response.json().catch(() => ({}))) as {
    success?: boolean;
    message?: string;
  };

  if (!response.ok || data.success === false) {
    throw new Error(data.message || "Web3Forms rejected the submission.");
  }

  return true;
}

async function sendWithResend(fields: {
  name: string;
  email: string;
  service: string;
  budget: string;
  timeline: string;
  message: string;
}) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return null;

  const resend = new Resend(apiKey);
  const from = process.env.RESEND_FROM_EMAIL || "JewelSphy <onboarding@resend.dev>";

  const { error } = await resend.emails.send({
    from,
    to: [site.email],
    replyTo: fields.email,
    subject: `JewelSphy inquiry — ${fields.service}`,
    text: [
      `New project inquiry from the JewelSphy site`,
      "",
      `Name: ${fields.name}`,
      `Email: ${fields.email}`,
      `Service: ${fields.service}`,
      `Budget: ${fields.budget}`,
      `Timeline: ${fields.timeline}`,
      "",
      fields.message,
    ].join("\n"),
  });

  if (error) {
    throw new Error(error.message || "Resend failed to send.");
  }

  return true;
}

export async function POST(request: Request) {
  let body: ContactBody;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (body.company) {
    return NextResponse.json({ ok: true });
  }

  const validated = validate(body);
  if ("error" in validated) {
    return NextResponse.json({ error: validated.error }, { status: 400 });
  }

  const hasProvider =
    Boolean(process.env.WEB3FORMS_ACCESS_KEY) || Boolean(process.env.RESEND_API_KEY);

  if (!hasProvider) {
    return NextResponse.json(
      {
        error:
          "Email is not configured yet. Add WEB3FORMS_ACCESS_KEY or RESEND_API_KEY to web/.env.local — see .env.example.",
      },
      { status: 503 },
    );
  }

  try {
    const viaWeb3 = await sendWithWeb3Forms(validated);
    if (viaWeb3) return NextResponse.json({ ok: true });

    const viaResend = await sendWithResend(validated);
    if (viaResend) return NextResponse.json({ ok: true });

    return NextResponse.json(
      { error: "No email provider responded. Check your .env.local keys." },
      { status: 503 },
    );
  } catch (err) {
    const message =
      err instanceof Error
        ? err.message
        : `Send failed. Email ${site.email} or text ${site.phone}.`;
    return NextResponse.json({ error: message }, { status: 502 });
  }
}
