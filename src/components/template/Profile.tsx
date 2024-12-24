"use client"
import { UserContext } from "@/context";
import { useContext, useState, useEffect } from "react";
// import PlayerStore from "../organisms/PlayerStore";
import Image from "next/image";
// import Sell from "../organisms/Sell";
import PlayerMoney from "../molecules/PlayerMoney";
import PlayerProfile from "../organisms/PlayerProfile";
import { WebConfig } from "@/WebConfig";


function ProfileTemp() {
  // const [ShowFormSell, setShowFormSell] = useState<boolean>(false)
  const [IsClient, setIsClient] = useState<boolean>(false)
  const context = useContext(UserContext)
  if (!context) {
    throw new Error("UserContext is undefined")
  }

  const { PlayerData, setSignInForm } = context

  useEffect(() => {
    setIsClient(true)
    if (!PlayerData?.IsLoggedIn) {
      setSignInForm(true)
    }
  }, [])
  return (
    IsClient && (
      PlayerData?.IsLoggedIn ? (
        <section className="relative mt-5 grid gap-3">
          <PlayerMoney gems={PlayerData?.gems as number} taverncoin={PlayerData?.taverncoin as number} />
          <PlayerProfile guild_name={PlayerData?.guild_name as string} last_online={PlayerData?.last_online as string} name={PlayerData?.name as string} level={PlayerData?.level as number} email={PlayerData?.email as string} owner={PlayerData?.owner as boolean} admin={PlayerData?.admin as boolean} developer={PlayerData?.developer as boolean} moderator={PlayerData?.moderator as boolean} vip={PlayerData?.vip as boolean} cheats={PlayerData?.cheats as boolean} redeem_code={PlayerData?.redeem_code} />
          {/* {
          ShowFormSell && <Sell setShowFormSell={setShowFormSell} />
        } */}
          {/* <div className="w-max mx-auto flex flex-col">
          <div className="flex items-center">
            <h2 className="text-2xl">Grow Id: </h2>
            <p className="text-base">{PlayerData?.name}</p>
          </div>
          <div className="flex items-center">
            <h2 className="text-2xl">Email: </h2>
            <p className="text-base">{PlayerData?.email}</p>
          </div>
          <div className="flex items-center">
            <h2 className="text-2xl">Level: </h2>
            <p className="text-base">{PlayerData?.level}</p>
          </div>
          <div className="flex items-center">
            <h2 className="text-2xl">Admin Level: </h2>
            <p className="text-base">{PlayerData?.adminlevel}</p>
          </div>
        </div> */}
          {/* <PlayerStore setShowFormSell={setShowFormSell} /> */}
        </section>
      ) : (
        <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-start h-screen md:px-8">
          <div className="max-w-lg mx-auto text-center">
            <Image src={WebConfig.logo} height={150} quality={100} sizes="100vw" alt="logo" width={150} className="mx-auto  mb-3" />
            <h3 className="text-4xl font-semibold sm:text-5xl mb-2">
              Access denied
            </h3>
            <p>
              Sorry, you have to login first to see your profile.
            </p>
          </div>
        </div>
      )
    )
  )
}

export default ProfileTemp;