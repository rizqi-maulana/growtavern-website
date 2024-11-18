import { NextResponse, NextRequest } from "next/server";

export const POST = async (req: NextRequest) => {
  const formdata = await req.formData()
  const Email = await formdata.get('Email') as string
  const Name = await formdata.get('Name') as string
  const Token = await formdata.get('token') as string
  const resdata = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      from: 'team@growtavern.site',
      to: Email,
      subject: 'GrowTavern Password Recovery',
      html: `
    <html>
<head>
<title>Password Change Request</title>
<script src="https://cdn.tailwindcss.com"></script>
<link
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
  rel="stylesheet"
/>
</head>
<body class="bg-blue-400 font-sans">
<div class="w-full max-w-2xl mx-auto">
  <!-- Header Image -->
  <div class="bg-blue-400">
    <img
      alt="GrowTavern logo with characters and tree"
      class="mx-auto w-full h-max"
      src="https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1731855467/Proyek_Baru_68_D032486_susktp.webp"
    />
  </div>
  <!-- Main Content -->
  <div class="text-center p-8 bg-white">
    <h1 class="text-4xl font-bold mb-4">PASSWORD CHANGE REQUEST</h1>
    <p class="text-lg mb-4">Hello GrowTavern!</p>
    <p class="text-lg mb-4">
      A request was made to
      <strong> change your password </strong>
      for your account
      <strong> ${Name} </strong>
      .
    </p>
    <p class="text-lg mb-4">
      If this was you, please verify the password change:
    </p>
    <a 
    href="https://growtavern.site/recovery?token=${Token}"
      class="bg-green-500 text-white font-bold py-2 px-4 rounded mb-4"
    >
      CHANGE PASSWORD
    </a>
    <p class="text-lg mb-4">
      Alternatively, you can change your password by copying and pasting the
      below URL into your browser:
    </p>
    <div class="bg-gray-200 p-4 rounded mb-4">
      <a class="text-red-500 break-words" href="#">
        https://growtavern.site/recovery?token=${Token}
      </a>
    </div>
    <p class="text-lg mb-4">
      In case you did not try to change your password, we strongly recommend
      changing your log-in credentials as soon as possible as they might
      have been compromised.
    </p>
    <p class="text-lg mb-4">~ The GrowTavern Team</p>
  </div>
  <!-- Footer -->
  <div class="bg-green-500 h-2"></div>
  <div class="bg-blue-400 p-4 text-center">
    <div class="flex justify-center space-x-4 mb-4">
      <a
        href="https://discord.gg/growtavern"
        class="fab fa-discord text-white text-2xl"
      >
      </a>
      <a
        href="https://growtavern.site"
        class="fab fa-google text-white text-2xl"
      >
      </a>
    </div>
    <p class="text-white text-sm mb-4">© 2024 GrowTavern.</p>
    <div class="flex items-center justify-evenly mb-4">
      <img
        alt="GrowTavern logo"
        class="w-24"
        src="https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1726205113/growtavern_i0uro3.webp"
        width="100"
      />
      <img
        alt="Ubisoft logo"
        class="w-14"
        src="https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1731856338/tavern_citems_3_ydge0l.webp"
      />
    </div>
  </div>
</div>
</body>
</html>

    `,
    }),
  })

  const data = await resdata.json()

  return NextResponse.json(data)
}