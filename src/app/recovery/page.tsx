"use client"

// import { useSearchParams } from "next/navigation";
import RecoveryTemp from "@/components/template/recovery";
import React, { useCallback, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
function Recovery() {
  const [token, setToken] = useState<string>("");
  const [NewPassword, setNewPassword] = useState<string>('');
  const [ConfirmPass, setConfirmPass] = useState<string>('');
  const [EnableRecovery, setEnableRecovery] = useState<boolean>(false)
  const [EnableSend, setEnableSend] = useState<boolean>(true)
  const HandleChange = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (NewPassword === ConfirmPass) {
      const res = await fetch('https://api.growtavern.site:1515/player/recovery/password', {
        // const res = await fetch('http://localhost:1515/player/recovery/password', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token,
          newpassword: NewPassword
        }),
      })
      const resdata = await res.json()
      if (resdata.type === "success") {
        await toast.success(resdata.message)
        if (typeof window !== "undefined") {
          window.location.href = "/"
        }
      } else {
        await toast.error(resdata.message)
      }
    }
  }, [NewPassword, token, ConfirmPass])

  useEffect(() => {
    // Ambil token dari URL menggunakan URLSearchParams
    const searchParams = new URLSearchParams(window.location.search);
    const tokenParam = searchParams.get("token") || ""; // Handle token jika tidak ada
    setToken(tokenParam);
  }, []);

  useEffect(() => {
    const ValidateToken = async () => {
      const res = await fetch('https://api.growtavern.site:1515/player/validate/recovery/token', {
        // const res = await fetch('http://localhost:1515/player/validate/recovery/token', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token
        }),
      })
      const resdata = await res.json()
      if (resdata.type === "error") {
        setEnableRecovery(false)
      }
      if (resdata.type === "success") {
        setEnableRecovery(true)
      }
    }
    ValidateToken()
  }, [token])

  const HandleCaptcha = useCallback(() => {
    setEnableSend(false)
  }, [EnableSend])

  return (
    <>
      <Toaster />
      {
        !EnableRecovery && (
          <div className="text-white font-sans fixed w-full h-full backdrop-blur-sm bg-[#0f172a] top-0 left-0 z-10 grid place-items-center">
            <h1 className="text-2xl font-bold">Unable to Access this page</h1>
          </div>
        )
      }
      <form onSubmit={HandleChange}>
        <RecoveryTemp HandleCaptcha={HandleCaptcha} setNewPassword={setNewPassword} EnableSend={EnableSend} setConfirmPass={setConfirmPass} />
      </form>
    </>
  );
}

export default Recovery;