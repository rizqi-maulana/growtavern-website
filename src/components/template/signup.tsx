"use client";

import { useState, useContext, useCallback, useRef, FormEvent } from "react";
import { UserContext } from "@/context";
import FormSignUp from "../organisms/FormSignUp";
import Confetti, { ConfettiRef } from "../magicui/confetti ";
import toast, { Toaster } from 'react-hot-toast';

function SignUp() {
  const confettiRef = useRef<ConfettiRef>(null);
  const context = useContext(UserContext);

  if (!context) {
    // Handle the error, maybe by throwing an error or returning early
    throw new Error("UserContext must be used within a UserProvider");
  }

  const { Name, Password, Email, Gender, setSignUpForm } = context;
  const [ShowSuccess, setShowSuccess] = useState<boolean>(false);

  // Menangani pengiriman formulir
  const HandleSignUp = useCallback(async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:1515/create/growid", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: Name,
          pass: Password,
          email: Email,
          gender: Gender
        }),
      });
      const data = await res.json()

      if (data.type === "account_created") {
        toast.success(data.message);
        await setShowSuccess(true);
        await confettiRef.current?.fire();
        setTimeout(() => {
          setSignUpForm(false)
        }, 3000);
      }
      if (data.type === "account_exist") {
        toast.error(data.message);
      }
      if (data.type === "server_error") {
        toast.error(data.message);
      }
    } catch (error) {
      console.error("Error during signup:", error);
    }
  }, [Name, Password, Email, Gender]);



  return (
    <>
      <Toaster />
      <form
        className="w-full h-screen fixed backdrop-blur-lg bg-black/50 z-[99] flex flex-col justify-center"
        onSubmit={HandleSignUp}
      >
        <FormSignUp />
        {ShowSuccess && (
          <Confetti
            ref={confettiRef}
            className="absolute left-0 top-0 z-0 size-full"
          />
        )}
      </form>
    </>
  );
}

export default SignUp;
