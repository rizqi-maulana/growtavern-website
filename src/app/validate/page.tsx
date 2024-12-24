"use client"

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
function Validate() {
  const [token, setToken] = useState<string>("");
  const [EnableRecovery, setEnableRecovery] = useState<boolean>(false)
  const [IsClient, setIsClient] = useState<boolean>(false)

  useEffect(() => {
    // Ambil token dari URL menggunakan URLSearchParams
    const searchParams = new URLSearchParams(window.location.search);
    const tokenParam = searchParams.get("token") || ""; // Handle token jika tidak ada
    setToken(tokenParam);
  }, []);

  useEffect(() => {
    const ValidateToken = async () => {
      const res = await fetch('https://api.growtavern.site:1515/account/validate', {
        // const res = await fetch('http://localhost:1515/account/validate', {
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
    if (IsClient)
      ValidateToken()
    setIsClient(true)
  }, [token])

  return (
    <section className="h-96">
      {
        !EnableRecovery ? (
          <div className="mt-10 ">
            <div className="flex flex-col items-center">
              <Link href="/" className="mb-8 inline-flex items-center gap-2.5 text-2xl font-bold text-black md:text-3xl" aria-label="logo">
                <Image
                  src="https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1726022041/Sadwdeafsds_cwid43.webp"
                  quality={100}
                  width={200}
                  height={200}
                  alt="logo"
                  sizes="100vw"
                />
              </Link>

              <p className="mb-4 text-sm font-GothicBold uppercase text-white md:text-base">That’s a 404</p>
              <h1 className="mb-2 text-center text-2xl font-GothicExtraBold text-white md:text-3xl">Page not found</h1>

              <p className="mb-12 max-w-screen-md text-center text-gray-500 md:text-lg">The page you’re looking for doesn’t exist.</p>

              <Link href="/" className="inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base">Go home</Link>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center h-96 justify-center">
            <h1 className="text-2xl font-GothicExtraBold">Account Validated</h1>
          </div>
        )
      }
    </section>
  );
}

export default Validate;