"use client";

import { useState, useContext, useCallback, useRef, FormEvent } from "react";
import { UserContext } from "@/context";
import FormSignUp from "../organisms/FormSignUp";
import Confetti, { ConfettiRef } from "../magicui/confetti ";

function SignUp() {
  const confettiRef = useRef<ConfettiRef>(null);
  const context = useContext(UserContext);

  if (!context) {
    // Handle the error, maybe by throwing an error or returning early
    throw new Error("UserContext must be used within a UserProvider");
  }

  const { Name, Password, Email, Gender } = context;
  const [ShowSuccess, setShowSuccess] = useState<boolean>(false);

  // Menangani pengiriman formulir
  const HandleSignUp = useCallback(async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch("http://143.110.178.133:1515", {
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

      if (res.ok) {
        setShowSuccess(true);
        confettiRef.current?.fire();
      }
    } catch (error) {
      console.error("Error during signup:", error);
    }
  }, [Name, Password, Email, Gender]);



  return (
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
  );
}

export default SignUp;
