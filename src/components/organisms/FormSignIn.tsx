// import SignName from "../molecules/SignName";
import SubmitBtn from "../atoms/SubmitBtn";
import SignPass from "../molecules/SignPass";
import SignEmail from "../molecules/SignEmail";
import React, { useContext, useEffect } from "react";
import { UserContext } from "@/context";
import { bouncy } from "ldrs";
import EmailOTP from "../molecules/EmailOTP";


interface FormSignInProps {
  Loading: boolean;
  Click: boolean;
  setClick: React.Dispatch<React.SetStateAction<boolean>>
}

const FormSignIn = ({ Loading, Click, setClick }: FormSignInProps) => {
  useEffect(() => {
    if (typeof window !== "undefined" && bouncy) {
      bouncy.register()
    }
  }, [])

  const context = useContext(UserContext);
  // Handle the case where context might be undefined
  if (!context) {
    return <div>Error: UserContext is undefined</div>;
  }
  const { setSignInForm } = context

  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-[#0F172A]">
      <div className="mb-5">
        <h2 className="font-GothicBold text-xl text-neutral-200">
          Login to your account
        </h2>
        <p className=" text-sm max-w-sm mt-2 text-neutral-300">
          Log in and shop Now!
        </p>
      </div>
      <SignEmail />
      <SignPass label="Enter your Password" id="signinpass" />
      <EmailOTP Click={Click} setClick={setClick} />
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
          <SubmitBtn Title="Sign In" />
      }
      <button onClick={() => setSignInForm(false)} className="w-full bg-[#0F172A] rounded-2xl p-2 mt-2 text-sm font-GothicBold text-white">
        Close
      </button>
    </div>
  );
}

export default FormSignIn;