"use client"

import { useSearchParams } from "next/navigation";
import RecoveryTemp from "@/components/template/recovery";
import React, { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
function Recovery() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const token = searchParams.get('token')
  const [NewPassword, setNewPassword] = useState<string>('');
  const [ConfirmPass, setConfirmPass] = useState<string>('');
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
      } else {
        await toast.error(resdata.message)
      }
    }
  }, [NewPassword, token, ConfirmPass])

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
        router.push('/recovery/404')
      }
    }
    ValidateToken()
  }, [token])

  const HandleCaptcha = useCallback(() => {
    setEnableSend(false)
  }, [EnableSend])

  if (!token) {
    router.push('/')
  }

  return (
    <>
      <Toaster />
      <form onSubmit={HandleChange}>
        <RecoveryTemp HandleCaptcha={HandleCaptcha} setNewPassword={setNewPassword} EnableSend={EnableSend} setConfirmPass={setConfirmPass} />
      </form>
    </>
  );
}

export default Recovery;