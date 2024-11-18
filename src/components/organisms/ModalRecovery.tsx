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
    event.preventDefault();
    if (Name && Email) {
      await PlayerValidate(Name, Email).then(async (res) => {
        const resdata = JSON.parse(res);
        if (resdata.type === "success") {
          const response = await fetch("api/recovery", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: Name,
              email: Email,
              token: resdata.token,
            }),
          });

          if (response.ok) {
            toast.success("Password recovery email sent successfully!");
          } else {
            const errorData = await response.json();
            toast.error(errorData.message || "Failed to send email");
          }
        }
      });
    }
  }, [Name, Email]);



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