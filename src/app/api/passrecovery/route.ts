import { NextRequest } from "next/server";
import EmailTemplate from "@/components/ui/EmailTemplate";
import { Resend } from 'resend';

export const POST = async (req: NextRequest) => {
  const formdata = await req.formData()
  const token = formdata.get('token') as string
  const name = formdata.get('name') as string
  const email = formdata.get('email') as string
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const { data, error } = await resend.emails.send({
      from: 'team@growtavern.site',
      to: email,
      subject: 'GrowTavern Password Recovery',
      react: EmailTemplate({ token, name })
    });
    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
  // const res = await fetch('https://api.resend.com/emails', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //     Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
  //   },
  //   body: JSON.stringify({
  //     from: 'team@growtavern.site',
  //     to: email,
  //     subject: 'GrowTavern Password Recovery',
  //     react: EmailTemplate({ token, name })
  //   }),
  // })

  // const data = await res.json()

  // return NextResponse.json(data)
}