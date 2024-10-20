"use client"
// import { UserContext } from "@/context";
// import { useContext, useState } from "react";
import { useState } from "react";
import PlayerStore from "../organisms/PlayerStore";
import Sell from "../organisms/Sell";
function ProfileTemp() {
  const [ShowFormSell, setShowFormSell] = useState<boolean>(false)
  // const context = useContext(UserContext)
  // if (!context) {
  //   throw new Error("UserContext is undefined")
  // }

  // const { PlayerData } = context
  return (
    <section>
      {
        ShowFormSell && <Sell setShowFormSell={setShowFormSell} />
      }
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
      <PlayerStore setShowFormSell={setShowFormSell} />
    </section>
  );
}

export default ProfileTemp;