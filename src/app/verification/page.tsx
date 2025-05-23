"use client"

import { bouncy } from 'ldrs'
import React, { useEffect, useState } from "react";
import clsx from "clsx";
function Verified() {
  const [token, setToken] = useState<string>("");
  const [Verified, setVerified] = useState<boolean>(false)
  // const [Loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    // Ambil token dari URL menggunakan URLSearchParams
    const searchParams = new URLSearchParams(window.location.search);
    const tokenParam = searchParams.get("token") || ""; // Handle token jika tidak ada
    setToken(tokenParam);
    if (typeof window !== "undefined" && bouncy) {
      bouncy.register()
    }
  }, []);

  useEffect(() => {
    const VerifiedToken = async () => {
      const res = await fetch('https://api.growtavern.site:1515/account/verified', {
        // const res = await fetch('http://localhost:1515/account/verified', {
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
        setVerified(false)
      }
      if (resdata.type === "success") {
        setVerified(true)
      }
    }
    if (token)
      VerifiedToken()
    // setLoading(false)
  }, [token])

  return (
    <section className="h-96">
      {/* {Loading && (
        <div className={clsx('w-full fixed left-0 top-0 h-screen bg-[#0f172a] z-50 grid place-content-center ')}>
          <div className="flex flex-col items-center">
            <l-bouncy size={100} speed={1.4} color="white" />
            <h1 className='text-2xl font-GothicExtraBold mt-5'>Validating</h1>
          </div>
        </div>
      )} */}
      {
        !Verified ? (
          <div className={clsx('w-full fixed left-0 top-0 h-screen bg-[#0f172a] z-50 grid place-content-center ')}>
            <div className="flex flex-col items-center">
              <l-bouncy size={100} speed={1.4} color="white" />
              <h1 className='text-2xl font-GothicExtraBold mt-5'>Unauthorized</h1>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center h-96 justify-center">
            <h1 className="text-2xl font-GothicExtraBold">Account Verified</h1>
          </div>
        )

      }

    </section>
  );
}

export default Verified;