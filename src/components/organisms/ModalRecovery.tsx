import SignEmail from "../molecules/SignEmail";
import SignName from "../molecules/SignName";
import SubmitBtn from "../atoms/SubmitBtn";
import ReCAPTCHA from "react-google-recaptcha";
import Image from "next/image";
import { WebConfig } from "@/WebConfig";
import { useCallback, useState } from "react";
import { useContext } from "react";
import { UserContext } from "@/context";
import toast, { Toaster } from "react-hot-toast";

function ModalRecovery() {
  const context = useContext(UserContext);
  const [onSubmit, setOnSubmit] = useState<boolean>(true)

  if (!context) {
    throw new Error('UserContext is undefined')
  }

  const { Email, Name, setRecoveryPass } = context;

  const HandleRecovery = useCallback(async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (Name && Email)
      await PlayerValidate(Name, Email).then(async (res) => {
        const resdata = JSON.parse(res)
        if (resdata.type === 'success') {
          const res = await fetch('https://api.resend.com/emails', {
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
              <strong> MaulanaSG </strong>
              .
            </p>
            <p class="text-lg mb-4">
              If this was you, please verify the password change:
            </p>
            <a 
            href="https://growtavern.site/recovery?token=${resdata}"
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
                https://growtavern.site/recovery?token=${resdata}
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

          const data = await res.json()

          return new Response(JSON.stringify(data), {
            status: 200,
            headers: {
              'Content-Type': 'application/json',
            },
          })
        }
      })
  }, [Email, Name])

  const PlayerValidate = async (name: string, email: string) => {
    const res = await fetch(`https://api.growtavern.site:1515/player/passwordrecovery`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
      }),
    })
    const resdata = await res.json()
    if (resdata.type === "success") {
      await toast.success(resdata.message)
      return JSON.stringify({
        type: "success",
        token: resdata.token
      })
    }
    else {
      await toast.error(resdata.message)
      return JSON.stringify(resdata)
    }
  }

  const CaptchaOnChange = useCallback(async () => {
    setOnSubmit(false)
  }, [onSubmit, setOnSubmit])

  return (
    <>
      <Toaster />
      <div className="w-full h-screen fixed top-0 left-0 backdrop-blur-lg bg-black/50 z-[99] flex items-center justify-center">
        <div className="w-3/5 h-max bg-[#0F172A] lg:p-8 p-2 rounded-xl">
          <h1 className="text-center text-3xl font-bold">
            <Image src={WebConfig.logo} width={100} height={100} className="w-12 xl:w-20 absolute top-0 object-cover blur-sm z-0" alt="BannerImage" sizes="100vw" />
            Password Recovery</h1>
          <p className="text-sm mt-2 font-semibold bg-[#1E293B] py-1 px-3 rounded-xl">
            Enter in your GrowTavern data and you can reset your password. ( You&lsquo;ll have to check your email and click the URL we send, so if your email address wasn&lsquo;t entered correctly when you made your GrowID, this won&lsquo;t work )</p>
          <form className="mt-8 grid gap-2" onSubmit={HandleRecovery}>
            <SignName />
            <SignEmail />
            <ReCAPTCHA
              sitekey="6Leu9YAqAAAAAO6mXh6891Q6QoCv5hwpiR6yG7My"
              onChange={CaptchaOnChange}
              size="normal"
              theme="dark"
            />
            <SubmitBtn Title="Submit" isDisabled={onSubmit} className="!mb-0 mt-5" />
            <button onClick={() => setRecoveryPass(false)} className="w-full bg-[#0F172A] rounded-2xl p-2 text-sm font-GothicBold text-white">
              Close
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default ModalRecovery;