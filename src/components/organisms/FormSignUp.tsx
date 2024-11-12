"use client"

import SignName from "../molecules/SignName";
import SubmitBtn from "../atoms/SubmitBtn";
import SignPass from "../molecules/SignPass";
import SignEmail from "../molecules/SignEmail";
import SignGender from "../molecules/SignGender";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "@/context";
import SignVerifyPass from "../molecules/SignVerifyPass";
import EmailOTP from "../molecules/EmailOTP";
import { bouncy } from 'ldrs'


interface FormSignUpProps {
  Loading: boolean;
}

const FormSignUp = ({ Loading }: FormSignUpProps) => {
  const [Click, setClick] = useState<boolean>(true);
  const context = useContext(UserContext);
  useEffect(() => {
    if (typeof window !== "undefined" && bouncy) {
      bouncy.register()
    }
  }, [])

  if (!context) {
    return <div>Error: UserContext is undefined</div>;
  }
  const { setSignUpForm, Name, Email, Password, VerifyPassword, Gender, VerifyEmail } = context

  const isDisabled =
    (Name === undefined || Name.trim().length === 0 || Name.includes(" ")) ||
    (Email === undefined || Email.trim().length === 0 || Email.includes(" ")) ||
    (Password === undefined || Password.trim().length === 0 || Password.includes(" ")) ||
    (VerifyPassword === undefined || VerifyPassword.trim().length === 0 || VerifyPassword.includes(" ")) ||
    (Password !== VerifyPassword) ||
    (Gender === undefined) || VerifyEmail === false;

  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-[#0F172A] overflow-auto">
      <div className="mb-5">
        <h2 className="font-GothicBold text-xl text-neutral-200">
          Create your account
        </h2>
        <p className=" text-sm max-w-sm mt-2 text-neutral-300">
          Join us now, create your account and start playing!
        </p>
      </div>
      <SignName />
      <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 my-4">
        <SignPass label="Create your Password" id="signuppass" />
        <SignVerifyPass />
      </div>
      <SignGender />
      <SignEmail Click={Click} />
      <EmailOTP Click={Click} setClick={setClick} />
      <div className="mb-4 bg-red-400 rounded-xl p-2">
        <h3 className="text-sm">IMPORTANT!</h3>
        <p className="text-xs font-GothicLight">enter your correct email, so that it can be used later for further updates.</p>
      </div>
      {
        Loading ?
          <div className="w-full grid place-content-center">
            <l-bouncy
              size="30"
              speed="1.75"
              color="white"
            ></l-bouncy>
          </div>
          :
          <SubmitBtn isDisabled={isDisabled} Title="Sign up" />
      }
      <button onClick={() => setSignUpForm(false)} className="w-full bg-[#0F172A] rounded-2xl p-2 text-sm font-GothicBold text-white">
        Close
      </button>
    </div>
  );
}

export default FormSignUp;