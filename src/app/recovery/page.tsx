"use client"

// import { useSearchParams } from "next/navigation";
import RecoveryTemp from "@/components/template/recovery";
import clsx from "clsx";
import React, { useCallback, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
function Recovery() {
  const [token, setToken] = useState<string>("");
  const [NewPassword, setNewPassword] = useState<string>('');
  const [ConfirmPass, setConfirmPass] = useState<string>('');
  const [EnableRecovery, setEnableRecovery] = useState<boolean>(false)
  const [EnableSend, setEnableSend] = useState<boolean>(true)
  const [Loading, setLoading] = useState<boolean>(true)
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
    setLoading(false)
  }, [token])

  const HandleCaptcha = useCallback(() => {
    setEnableSend(false)
  }, [EnableSend])

  return (
    <section className="lg:h-96 h-max">
      <Toaster />
      {Loading && (
        <div className={clsx('w-full fixed left-0 top-0 h-screen bg-[#0f172a] z-50 grid place-content-center ')}>
          <div className="flex flex-col items-center">
            <l-bouncy size={100} speed={1.4} color="white" />
            <h1 className='text-2xl font-GothicExtraBold mt-5'>Validating</h1>
          </div>
        </div>
      )}
      {
        !EnableRecovery ? (
          <div className="flex flex-col items-center h-96 justify-center">
            <h1 className="text-2xl font-GothicExtraBold">Unauthorized</h1>
          </div>
        ) : (
          <form onSubmit={HandleChange}>
            <RecoveryTemp HandleCaptcha={HandleCaptcha} setNewPassword={setNewPassword} EnableSend={EnableSend} setConfirmPass={setConfirmPass} />
          </form>

        )
      }
    </section>
  );
}

export default Recovery;