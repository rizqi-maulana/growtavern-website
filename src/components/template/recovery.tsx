import React from "react";
import { LabelInputContainer } from "../atoms/LabelInputContainer";
import { Label } from "../atoms/label";
import { Input } from "../atoms/input";
import ReCAPTCHA from "react-google-recaptcha";
import SubmitBtn from "../atoms/SubmitBtn";


interface Props {
  setNewPassword: React.Dispatch<React.SetStateAction<string>>
  setConfirmPass: React.Dispatch<React.SetStateAction<string>>
  HandleCaptcha: () => void
  EnableSend: boolean
}

const RecoveryTemp = ({ setNewPassword, HandleCaptcha, setConfirmPass, EnableSend }: Props) => {
  return (
    <div className="text-white font-sans">
      <div className="w-full max-w-2xl mx-auto">
        <div>
          <img
            alt="GrowTavern logo with characters and tree"
            className="mx-auto w-full h-max"
            src="https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1731855467/Proyek_Baru_68_D032486_susktp.webp"
          />
        </div>
        <div className="text-center p-8 pb-0 ">
          <h1 className="text-4xl font-bold mb-4">GROWTAVERN PASSWORD RECOVERY</h1>
          <b className="text-lg mb-4">
            Enter in your new Growtopia password.
            Your password must contain 8 to 18 characters, 1 letter, 1 number and 1 special character: @#!$^&*.,
          </b>

        </div>
        <div className=" p-4">
          <div className="flex justify-center space-x-4 mb-4">
            <a
              href="https://discord.gg/growtavern"
              className="fab fa-discord text-white text-2xl"
            >
            </a>
            <a
              href="https://growtavern.site"
              className="fab fa-google text-white text-2xl"
            >
            </a>
          </div>
          <div className="gap-5 grid">
            <LabelInputContainer>
              <Label htmlFor="newpassword">Enter Your New Password</Label>
              <Input onChange={(e) => setNewPassword(e.target.value)} id="newpassword" placeholder="Jho*****" type="text" />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="confirmpassword">Confirm Your New Password</Label>
              <Input onChange={(e) => setConfirmPass(e.target.value)} id="confirmpassword" placeholder="Jho*****" type="text" />
            </LabelInputContainer>
            <ReCAPTCHA
              sitekey="6Leu9YAqAAAAAO6mXh6891Q6QoCv5hwpiR6yG7My"
              onChange={HandleCaptcha}
              size="normal"
              theme="dark"
            />
            <SubmitBtn Title="Submit" isDisabled={EnableSend} />
          </div>
          <p className="text-white text-sm mb-4 text-center">© 2024 GrowTavern.</p>
          <div className="flex items-center justify-evenly mb-4">
            <img
              alt="GrowTavern logo"
              className="w-24"
              src="https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1726205113/growtavern_i0uro3.webp"
              width="100"
            />
            <img
              alt="Ubisoft logo"
              className="w-14"
              src="https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1731856338/tavern_citems_3_ydge0l.webp"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecoveryTemp;