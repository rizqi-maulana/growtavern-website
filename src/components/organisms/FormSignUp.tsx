import SignName from "../molecules/SignName";
import SubmitBtn from "../atoms/SubmitBtn";
import SignPass from "../molecules/SignPass";
import SignEmail from "../molecules/SignEmail";
import SignGender from "../molecules/SignGender";
import { useContext } from "react";
import { UserContext } from "@/context";

const FormSignUp = () => {
  const context = useContext(UserContext);

  // Handle the case where context might be undefined
  if (!context) {
    return <div>Error: UserContext is undefined</div>;
  }
  const { setSignUpForm } = context
  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-[#0F172A]">
      <div className="mb-5">
        <h2 className="font-GothicBold text-xl text-neutral-200">
          Create your account
        </h2>
        <p className=" text-sm max-w-sm mt-2 text-neutral-300">
          Join us now, create your account and start playing!
        </p>
      </div>
      <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
        <SignName />
        <SignPass label="Create your Password" id="signuppass" />
      </div>
      <SignEmail />
      <SignGender />
      <SubmitBtn />
      <button onClick={() => setSignUpForm(false)} className="w-full bg-[#0F172A] rounded-2xl p-2 mt-2 text-sm font-GothicBold text-white">
        Close
      </button>
    </div>
  );
}

export default FormSignUp;