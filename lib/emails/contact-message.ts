type ContactMessageEmail = {
  name: string;
  email: string;
  message: string;
};

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export function buildContactEmailSubject(name: string) {
  return `New message from ${name} · Portfolio`;
}

export function buildContactEmailText({ name, email, message }: ContactMessageEmail) {
  return [
    "New portfolio contact message",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    "",
    "Message:",
    message,
    "",
    `Reply directly to ${email} to respond.`,
  ].join("\n");
}

export function buildContactEmailHtml({ name, email, message }: ContactMessageEmail) {
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message).replaceAll("\n", "<br />");

  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>New portfolio message</title>
  </head>
  <body style="margin:0;padding:0;background-color:#0a0a0a;font-family:Consolas,'Courier New',monospace;color:#e8e8e8;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color:#0a0a0a;padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:560px;background-color:#111111;border:1px solid #262626;border-radius:12px;overflow:hidden;">
            <tr>
              <td style="padding:24px 28px;background:linear-gradient(180deg,#141414 0%,#111111 100%);border-bottom:1px solid #262626;">
                <p style="margin:0 0 8px;font-size:11px;letter-spacing:0.18em;text-transform:uppercase;color:#00ff66;">~/contact</p>
                <h1 style="margin:0;font-size:22px;line-height:1.3;font-weight:600;color:#ffffff;">New portfolio message</h1>
                <p style="margin:10px 0 0;font-size:13px;line-height:1.6;color:#949494;">Someone reached out through your contact form.</p>
              </td>
            </tr>
            <tr>
              <td style="padding:24px 28px;">
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;">
                  <tr>
                    <td style="padding:0 0 16px;width:88px;vertical-align:top;font-size:12px;color:#737373;text-transform:uppercase;letter-spacing:0.12em;">Name</td>
                    <td style="padding:0 0 16px;font-size:15px;line-height:1.5;color:#ffffff;">${safeName}</td>
                  </tr>
                  <tr>
                    <td style="padding:0 0 16px;width:88px;vertical-align:top;font-size:12px;color:#737373;text-transform:uppercase;letter-spacing:0.12em;">Email</td>
                    <td style="padding:0 0 16px;font-size:15px;line-height:1.5;">
                      <a href="mailto:${safeEmail}" style="color:#00ff66;text-decoration:none;">${safeEmail}</a>
                    </td>
                  </tr>
                </table>
                <div style="margin-top:8px;padding:18px 20px;background-color:#0d0d0d;border:1px solid #262626;border-radius:10px;">
                  <p style="margin:0 0 10px;font-size:12px;color:#737373;text-transform:uppercase;letter-spacing:0.12em;">Message</p>
                  <p style="margin:0;font-size:15px;line-height:1.7;color:#d4d4d4;">${safeMessage}</p>
                </div>
                <table role="presentation" cellspacing="0" cellpadding="0" style="margin-top:24px;">
                  <tr>
                    <td style="border-radius:8px;background-color:#00ff66;">
                      <a href="mailto:${safeEmail}?subject=Re:%20Portfolio%20inquiry" style="display:inline-block;padding:12px 18px;font-size:14px;font-weight:600;color:#000000;text-decoration:none;">Reply to ${safeName}</a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:18px 28px;border-top:1px solid #262626;background-color:#0d0d0d;">
                <p style="margin:0;font-size:12px;line-height:1.6;color:#737373;">Sent from your portfolio contact form.</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}
