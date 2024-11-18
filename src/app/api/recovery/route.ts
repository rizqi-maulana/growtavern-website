import { NextResponse, NextRequest } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const { name, email, token } = await req.json();

    if (!name || !email || !token) {
      return NextResponse.json({ type: "error", message: "Invalid input data" }, { status: 400 });
    }

    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'team@growtavern.site',
        to: email,
        subject: 'GrowTavern Password Recovery',
        html: `
        <html>
          <body>
            <p>Hello ${name},</p>
            <p>A request was made to change your password for your GrowTavern account.</p>
            <p>
              Click the link below to reset your password:
              <a href="https://growtavern.site/recovery?token=${token}">Reset Password</a>
            </p>
            <p>If you did not make this request, please ignore this email.</p>
            <p>~ The GrowTavern Team</p>
          </body>
        </html>
        `,
      }),
    });

    if (!emailResponse.ok) {
      return NextResponse.json({ type: "error", message: "Failed to send email" }, { status: 500 });
    }

    return NextResponse.json({ type: "success", message: "Email sent successfully" });
  } catch (error) {
    return NextResponse.json({ type: "error", message: "Internal server error" }, { status: 500 });
  }
}
