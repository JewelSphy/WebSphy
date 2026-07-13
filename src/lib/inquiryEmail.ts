import { site } from "@/lib/site";

export type InquiryFields = {
  name: string;
  email: string;
  service: string;
  budget: string;
  timeline: string;
  message: string;
  submittedFrom?: string;
};

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

export function buildInquiryEmailHtml(fields: InquiryFields) {
  const rows = [
    ["Client", fields.name],
    ["Email", fields.email],
    ["Service", fields.service],
    ["Project size", fields.budget],
    ["Timeline", fields.timeline],
  ];

  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>New JewelSphy inquiry</title>
</head>
<body style="margin:0;padding:0;background:#0a0a0a;font-family:Georgia,'Times New Roman',serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#0a0a0a;padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#111111;border:1px solid #c9a22755;border-radius:16px;overflow:hidden;">
          <tr>
            <td style="padding:28px 28px 18px 28px;background:linear-gradient(180deg,#1a1608 0%,#111111 100%);border-bottom:1px solid #c9a22744;">
              <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:11px;letter-spacing:0.28em;text-transform:uppercase;color:#e0c56a;">
                ✦ ${escapeHtml(site.fullName)}
              </p>
              <h1 style="margin:12px 0 0 0;font-size:28px;line-height:1.2;color:#f5f0e8;font-weight:normal;">
                New project inquiry
              </h1>
              <p style="margin:8px 0 0 0;font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#a89f91;">
                ${escapeHtml(fields.service)} · ${escapeHtml(fields.timeline)}
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding:24px 28px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                ${rows
                  .map(
                    ([label, value]) => `
                <tr>
                  <td style="padding:0 0 14px 0;">
                    <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:11px;letter-spacing:0.16em;text-transform:uppercase;color:#c9a227;">
                      ${escapeHtml(label)}
                    </p>
                    <p style="margin:6px 0 0 0;font-family:Arial,Helvetica,sans-serif;font-size:16px;color:#f5f0e8;">
                      ${
                        label === "Email"
                          ? `<a href="mailto:${escapeHtml(value)}" style="color:#e0c56a;text-decoration:none;">${escapeHtml(value)}</a>`
                          : escapeHtml(value)
                      }
                    </p>
                  </td>
                </tr>`,
                  )
                  .join("")}
              </table>

              <div style="margin-top:8px;padding:18px;border-radius:12px;background:#0a0a0a;border:1px solid #c9a22733;">
                <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:11px;letter-spacing:0.16em;text-transform:uppercase;color:#c9a227;">
                  Project notes
                </p>
                <p style="margin:10px 0 0 0;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.6;color:#f5f0e8;white-space:pre-wrap;">
${escapeHtml(fields.message)}
                </p>
              </div>

              <table role="presentation" cellpadding="0" cellspacing="0" style="margin-top:24px;">
                <tr>
                  <td style="border-radius:999px;background:#c9a227;">
                    <a href="mailto:${escapeHtml(fields.email)}?subject=${encodeURIComponent(`Re: JewelSphy — ${fields.service}`)}"
                       style="display:inline-block;padding:12px 22px;font-family:Arial,Helvetica,sans-serif;font-size:14px;font-weight:600;color:#0a0a0a;text-decoration:none;">
                      Reply to ${escapeHtml(fields.name)}
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:16px 28px 24px 28px;border-top:1px solid #c9a22733;">
              <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:12px;color:#6e675c;">
                ${escapeHtml(site.motto)}
                ${
                  fields.submittedFrom
                    ? `<br/>Submitted from <a href="${escapeHtml(fields.submittedFrom)}" style="color:#a89f91;">${escapeHtml(fields.submittedFrom)}</a>`
                    : ""
                }
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export function buildInquiryEmailText(fields: InquiryFields) {
  return [
    `✦ NEW JEWELSPHY INQUIRY`,
    `────────────────────────`,
    ``,
    `Client:   ${fields.name}`,
    `Email:    ${fields.email}`,
    `Service:  ${fields.service}`,
    `Size:     ${fields.budget}`,
    `Timeline: ${fields.timeline}`,
    ``,
    `PROJECT NOTES`,
    `────────────────────────`,
    fields.message,
    ``,
    fields.submittedFrom ? `From: ${fields.submittedFrom}` : "",
    `Reply directly to this email to respond to ${fields.name}.`,
  ]
    .filter(Boolean)
    .join("\n");
}
