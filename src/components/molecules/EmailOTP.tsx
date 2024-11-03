import { Input } from "../atoms/input";
import { Label } from "../atoms/label";
import { LabelInputContainer } from "../atoms/LabelInputContainer";
import { UserContext } from "@/context";
import { useCallback, useContext, useState } from "react";
import ButtonSendOTP from "../atoms/ButtonSendOTP";
import { createClient } from "@/utils/supabase/client";
import ButtonSendVerifyOTP from "../atoms/ButtonSendVerifyOTP ";
import toast, { Toaster } from "react-hot-toast";

const EmailOTP = () => {
  const context = useContext(UserContext);
  const [Click, setClick] = useState<boolean>(true);

  // Handle the case where context might be undefined
  if (!context) {
    return <div>Error: UserContext is undefined</div>;
  }

  const { setOtpCode, OtpCode, Email, setVerifyEmail } = context;

  const supabase = createClient();

  const HandleSendOTP = useCallback(async () => {
    const { data, error } = await supabase.auth.signInWithOtp({
      email: Email as string,
      options: {
        // set this to false if you do not want the user to be automatically signed up
        shouldCreateUser: false,
      },
    })
    console.log(data, error)
    toast.success('Check you email...')
    setClick(false)

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
        <Label htmlFor="email">Verify Otp</Label>
        <Input onChange={(e) => setOtpCode(e.target.value)} id="email" placeholder="16**" type="text" readOnly={Click} />
        {
          OtpCode == undefined ?
            <ButtonSendOTP Title="Send Otp" HandleSendOTP={HandleSendOTP} />
            :
            <ButtonSendVerifyOTP Title="Verify Otp" HandleVerifyOTP={HandleVerifyOTP} />
        }
      </LabelInputContainer>
    </>
  );
}

export default EmailOTP;