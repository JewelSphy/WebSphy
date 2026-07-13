import { NextResponse } from "next/server";
import { Resend } from "resend";
import {
  buildInquiryEmailHtml,
  buildInquiryEmailText,
} from "@/lib/inquiryEmail";
import { site } from "@/lib/site";

type ContactBody = {
  name?: string;
  email?: string;
  service?: string;
  budget?: string;
  timeline?: string;
  message?: string;
  submittedFrom?: string;
  company?: string;
};

function validate(body: ContactBody) {
  const name = String(body.name || "").trim();
  const email = String(body.email || "").trim();
  const service = String(body.service || "").trim() || "General";
  const budget = String(body.budget || "").trim() || "Not specified";
  const timeline = String(body.timeline || "").trim() || "Not specified";
  const message = String(body.message || "").trim();
  const submittedFrom = String(body.submittedFrom || "").trim();

  if (!name || !email || !message) {
    return { error: "Name, email, and project notes are required." } as const;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { error: "Enter a valid email address." } as const;
  }

  return { name, email, service, budget, timeline, message, submittedFrom } as const;
}

async function sendWithResend(
  fields: ReturnType<typeof validate> & object,
) {
  if ("error" in fields) return null;
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return null;

  const resend = new Resend(apiKey);
  const from = process.env.RESEND_FROM_EMAIL || "JewelSphy <onboarding@resend.dev>";

  const { error } = await resend.emails.send({
    from,
    to: [site.email],
    replyTo: fields.email,
    subject: `✦ New JewelSphy inquiry — ${fields.service}`,
    html: buildInquiryEmailHtml(fields),
    text: buildInquiryEmailText(fields),
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

  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      {
        error: "RESEND_NOT_CONFIGURED",
        message: "Branded email is not configured yet.",
      },
      { status: 503 },
    );
  }

  try {
    await sendWithResend(validated);
    return NextResponse.json({ ok: true, provider: "resend" });
  } catch (err) {
    const message =
      err instanceof Error
        ? err.message
        : `Send failed. Email ${site.email} or text ${site.phone}.`;
    return NextResponse.json({ error: message }, { status: 502 });
  }
}
