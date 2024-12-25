import { Input } from "../atoms/input";
import { Label } from "../atoms/label";
import { LabelInputContainer } from "../atoms/LabelInputContainer";
import { UserContext } from "@/context";
import React, { useCallback, useContext, useEffect, useState } from "react";
import ButtonSendOTP from "../atoms/ButtonSendOTP";
import { createClient } from "@/utils/supabase/client";
// import ButtonSendVerifyOTP from "../atoms/ButtonSendVerifyOTP ";
import toast, { Toaster } from "react-hot-toast";
import clsx from "clsx";

interface Props {
  Click: boolean
  setClick: React.Dispatch<React.SetStateAction<boolean>>
}

const EmailOTP = ({ Click, setClick }: Props) => {
  const context = useContext(UserContext);
  const [CountDown, setCountDown] = useState<number>(() => {
    // Initialize countdown from localStorage if available
    return typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem('CountDown') || '0')
      : 0;
  });
  const supabase = createClient();

  // Handle the case where context might be undefined
  if (!context) {
    throw new Error("UserContext is undefined");
  }

  // const { setOtpCode, OtpCode, Email, setVerifyEmail } = context;
  const { setOtpCode, Email } = context;

  const HandleSendOTP = useCallback(async () => {
    if (Email === undefined || Email.trim().length === 0 || Email.includes(" ")) {
      toast.error("Please enter a valid email address.");
      return;
    }
    if (CountDown > 0) {
      toast.error(`OTP is already sent. Wait ${CountDown} seconds.`);
      return;
    }

    setCountDown(60); // Set countdown to 60 seconds or any desired time
    localStorage.setItem('CountDown', JSON.stringify(60)); // Save to localStorage

    const { data, error } = await supabase.auth.signInWithOtp({
      email: Email as string,
      options: {
        // set this to false if you do not want the user to be automatically signed up
        shouldCreateUser: true,
      },
    })
    if (error) {
      console.log(error)
      toast.error(error.message)
      return;
    }
    setClick(false);
    toast.success('We have sent you the OTP code to your email.');
    console.log(data)
    // Uncomment the above Supabase code when needed
  }, [Email, CountDown, setClick]);

  useEffect(() => {
    // Only set interval if CountDown is greater than 0
    if (CountDown > 0) {
      const intervalId = setInterval(() => {
        setCountDown((prevCountDown) => {
          const newCountDown = prevCountDown - 1;
          localStorage.setItem('CountDown', JSON.stringify(newCountDown));
          return newCountDown;
        });
      }, 1000);

      // Clear interval when component unmounts or CountDown changes
      return () => clearInterval(intervalId);
    } else {
      localStorage.removeItem('CountDown');
      setClick(true);
    }
  }, [CountDown]);

  // const HandleVerifyOTP = useCallback(async () => {
  //   const {
  //     data: { session },
  //     error,
  //   } = await supabase.auth.verifyOtp({
  //     email: Email as string,
  //     token: OtpCode as string,
  //     type: 'email',
  //   });

  //   if (error) {
  //     console.error(error);
  //     toast.error('Invalid OTP code');
  //     return;
  //   }

  //   if (session) {
  //     setVerifyEmail(true);
  //     setClick(true);
  //     toast.success('Email Verified');
  //   } else {
  //     toast.error('TOKEN Expired');
  //   }
  // }, [Email, OtpCode, setVerifyEmail]);

  return (
    <>
      <Toaster />
      <LabelInputContainer className="my-4">
        <div className="flex items-center justify-between">
          <Label htmlFor="email">Verify OTP</Label>
          <p className={clsx('text-xs', {
            'text-red-400': CountDown > 0,
            'text-green-400': CountDown === 0
          })}>{CountDown > 0 ? `Resend OTP in ${CountDown} seconds` : 'You can request a new OTP'}</p>
        </div>
        <Input
          onChange={(e) => setOtpCode(e.target.value)}
          id="email"
          placeholder="Enter OTP"
          type="text"
          readOnly={Click}
          maxLength={6}
        />
        {/* {Click ? ( */}
        <ButtonSendOTP isDisabled={CountDown > 0} Title="Get OTP" HandleSendOTP={HandleSendOTP} />
        {/* ) : (
          <ButtonSendVerifyOTP isDisabled={OtpCode?.length !== 6} Title="Verify OTP" HandleVerifyOTP={HandleVerifyOTP} />
        )} */}
      </LabelInputContainer>
    </>
  );
};

export default EmailOTP;
