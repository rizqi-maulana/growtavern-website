import { Input } from "../atoms/input";
import { Label } from "../atoms/label";
import { LabelInputContainer } from "../atoms/LabelInputContainer";
import { UserContext } from "@/context";
import { useCallback, useContext, useState } from "react";
import ButtonSendOTP from "../atoms/ButtonSendOTP";
import { createClient } from "@/utils/supabase/client";
import ButtonSendVerifyOTP from "../atoms/ButtonSendVerifyOTP ";
import toast, { Toaster } from "react-hot-toast";

const PhoneOTP = () => {
  const context = useContext(UserContext);
  const [Click, setClick] = useState<boolean>(true);
  const supabase = createClient();

  // Handle the case where context might be undefined
  if (!context) {
    throw new Error("UserContext is undefined");
  }

  const { setOtpCode, OtpCode, Email, setVerifyEmail } = context;

  const HandleSendOTP = useCallback(async () => {
    const { data, error } = await supabase.auth.signInWithOtp({
      email: Email as string,
      options: {
        // set this to false if you do not want the user to be automatically signed up
        shouldCreateUser: true,
      },
    })
    setClick(false)
    if (error) {
      console.log(error)
      toast.error(error.message)
    }
    else
      toast.success('We have sent you the otp code to your email.')
    console.log(data)
  }, [Email])

  const HandleVerifyOTP = useCallback(async () => {
    const {
      data: { session },
      error,
    } = await supabase.auth.verifyOtp({
      email: Email as string,
      token: OtpCode as string,
      type: 'email',
    })
    if (error) {
      console.log(error)
    }

    if (session) {
      if (session.user.role) {
        setVerifyEmail(true)
        setClick(true)
        toast.success('Email Verified')
      }
    } else {
      toast.error('TOKEN Expired')
    }
  }, [Email, OtpCode])
  return (
    <>
      <Toaster />
      <LabelInputContainer className="my-4">
        <Label htmlFor="email">Verify OTP</Label>
        <Input onChange={(e) => setOtpCode(e.target.value)} id="email" placeholder="16**" type="text" readOnly={Click} />
        {
          Email?.length === 0 ?
            <ButtonSendOTP Title="Get OTP" HandleSendOTP={HandleSendOTP} />
            :
            <ButtonSendVerifyOTP Title="Verify OTP" HandleVerifyOTP={HandleVerifyOTP} />
        }
      </LabelInputContainer>
    </>
  );
}

export default PhoneOTP;