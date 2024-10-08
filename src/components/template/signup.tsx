"use client";

import { useState, useContext, useCallback, useRef, FormEvent, useEffect } from "react";
import { UserContext } from "@/context";
import FormSignUp from "../organisms/FormSignUp";
import Confetti, { ConfettiRef } from "../magicui/confetti ";
import toast, { Toaster } from 'react-hot-toast';
import Cookies from 'js-cookie';

function SignUp() {
  const confettiRef = useRef<ConfettiRef>(null);
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("UserContext must be used within a UserProvider");
  }

  const { Name, Password, Email, Gender, setSignUpForm } = context;
  const [ShowSuccess, setShowSuccess] = useState<boolean>(false);
  const [Loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const isAccountCreated = Cookies.get('account_created');
    if (isAccountCreated) {
      const creationDate = new Date(isAccountCreated);
      const now = new Date();
      const oneMonthLater = new Date(creationDate);
      oneMonthLater.setMonth(oneMonthLater.getMonth() + 1);
      if (now < oneMonthLater) {
        toast.error("Please wait 1 month for you to create an account.");
        setSignUpForm(false);
      }
    }
  }, [setSignUpForm]);

  const HandleSignUp = useCallback(async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("https://api.growtavern.site:1515/create/growid", {
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
      const data = await res.json();

      if (data.type === "account_created") {
        Cookies.set('account_created', new Date().toISOString(), { expires: 30 });
        toast.success(data.message);
        await setShowSuccess(true);
        await confettiRef.current?.fire();
        setTimeout(() => {
          setSignUpForm(false);
        }, 3000);
      }
      if (data.type === "name_exist") {
        toast.error(data.message);
      }
      if (data.type === "email_exist") {
        toast.error(data.message);
      }
      if (data.type === "server_error") {
        toast.error(data.message);
      }
    } catch (error) {
      console.error("Error during signup:", error);
    } finally {
      setLoading(false);
    }
  }, [Name, Password, Email, Gender, setSignUpForm]);

  return (
    <>
      <Toaster />
      <form
        className="w-full h-screen fixed backdrop-blur-lg bg-black/50 z-[99] flex flex-col justify-center"
        onSubmit={HandleSignUp}
        autoComplete="off"
      >
        <FormSignUp Loading={Loading} />
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
