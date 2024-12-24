"use client"
import React, { createContext, Fragment, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
// import Loading from "./components/template/Loading";
type gender = "man" | "woman"

export interface PlayerDataProps {
  name: string;
  gems: number;
  email: string;
  level: number,
  IsLoggedIn: boolean,
  owner: boolean
  admin: boolean
  developer: boolean
  moderator: boolean
  vip: boolean
  token: string,
  cheats: boolean
  taverncoin: number
  last_online: string
  guild_id: number
  guild_name: string,
  redeem_code: {
    code: string,
    expired: number,
    created: number
  }[]
}

interface ServerStatusProps {
  IsServerUp: boolean
  PlayerCount: number
}

interface UserContextProps {
  SignUpForm: boolean
  setSignUpForm: React.Dispatch<React.SetStateAction<boolean>>
  SignInForm: boolean,
  setSignInForm: React.Dispatch<React.SetStateAction<boolean>>,
  Name: string | undefined,
  setName: React.Dispatch<React.SetStateAction<string | undefined>>,
  Password: string | undefined,
  setPassword: React.Dispatch<React.SetStateAction<string | undefined>>,
  Email: string | undefined,
  setEmail: React.Dispatch<React.SetStateAction<string | undefined>>,
  Gender: gender | undefined,
  setGender: React.Dispatch<React.SetStateAction<gender | undefined>>,
  VerifyPassword: string | undefined,
  setVerifyPassword: React.Dispatch<React.SetStateAction<string | undefined>>
  PlayerData: PlayerDataProps | undefined,
  setPlayerData: React.Dispatch<React.SetStateAction<PlayerDataProps | undefined>>
  IsLoggedIn: boolean,
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>
  OtpCode: string | undefined,
  setOtpCode: React.Dispatch<React.SetStateAction<string | undefined>>
  VerifyEmail: boolean,
  setVerifyEmail: React.Dispatch<React.SetStateAction<boolean>>
  RecoveryPass: boolean,
  setRecoveryPass: React.Dispatch<React.SetStateAction<boolean>>
  ServerStatus: ServerStatusProps | undefined
}

export const UserContext = createContext<UserContextProps | undefined>(undefined)

interface AppContextProps {
  children: React.ReactNode
}


const AppContext = ({ children }: AppContextProps) => {
  const [PlayerData, setPlayerData] = useState<PlayerDataProps | undefined>(() => {
    if (typeof window !== "undefined") {
      const PlayerData = localStorage.getItem("PlayerData");
      if (PlayerData) {
        return JSON.parse(PlayerData);
      }
    }
    return undefined;
  });
  const [RecoveryPass, setRecoveryPass] = useState<boolean>(false);
  const [IsLoggedIn, setIsLoggedIn] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      const PlayerData = localStorage.getItem("PlayerData");
      if (PlayerData) {
        return true;
      }
    }
    return false;
  });
  const [SignUpForm, setSignUpForm] = useState<boolean>(false);
  const [SignInForm, setSignInForm] = useState<boolean>(false);
  const [Name, setName] = useState<string | undefined>(undefined);
  const [Password, setPassword] = useState<string | undefined>(undefined);
  const [VerifyPassword, setVerifyPassword] = useState<string | undefined>(undefined);
  const [Email, setEmail] = useState<string | undefined>(undefined);
  const [Gender, setGender] = useState<gender | undefined>('man');
  const [OtpCode, setOtpCode] = useState<string | undefined>(undefined)
  const [VerifyEmail, setVerifyEmail] = useState<boolean>(false)
  const [ServerStatus, setServerStatus] = useState<ServerStatusProps | undefined>(() => {
    if (typeof window !== "undefined") {
      const ServerStatus = localStorage.getItem("ServerStatus");
      if (ServerStatus) {
        return JSON.parse(ServerStatus);
      }
    }
    return { IsServerUp: false, PlayerCount: 0 };
  })

  useEffect(() => {
    const CheckLogin = async () => {
      if (typeof window !== "undefined") {
        const name = localStorage.getItem("log");
        if (name) {
          const res = await fetch("https://api.growtavern.site:1515/player/validate", {
            // const res = await fetch("http://localhost:1515/player/validate", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name
            }),
          })
          const dataserver = await res.json()
          if (dataserver.type === 'success') {
            setPlayerData({
              name: dataserver.data.name,
              gems: dataserver.data.gems,
              email: dataserver.data.email,
              level: dataserver.data.level,
              IsLoggedIn: dataserver.data.IsLoggedIn,
              owner: dataserver.data.owner,
              admin: dataserver.data.admin,
              developer: dataserver.data.developer,
              moderator: dataserver.data.moderator,
              vip: dataserver.data.vip,
              cheats: dataserver.data.cheats,
              token: dataserver.data.token,
              taverncoin: dataserver.data.taverncoin,
              last_online: dataserver.data.last_online,
              guild_id: dataserver.data.guild_id,
              guild_name: dataserver.data.guild_name,
              redeem_code: dataserver.data.redeem_code

            })
            setIsLoggedIn(true)
            if (typeof window !== "undefined") {
              await localStorage.setItem("PlayerData", JSON.stringify(dataserver.data))
            }
          } else {
            toast.error(dataserver.message)
          }
        }
      }
    }
    // if (!PlayerData)
    CheckLogin()
  }, [])

  useEffect(() => {
    const check = async () => {
      const res = await fetch('https://api.growtavern.site:1515/checkserver', {
        // const res = await fetch('http://localhost:1515/checkserver', {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }
      })
      const resdata = await res.json()
      if (typeof window !== "undefined") {
        await localStorage.setItem("ServerStatus", JSON.stringify(resdata))
      }
      setServerStatus(resdata)
    }
    if (!ServerStatus?.IsServerUp)
      check()
    setInterval(() => {
      check()
    }, 60000);
  }, [])
  return (
    <Fragment>
      <Toaster />
      <UserContext.Provider value={{ SignUpForm, setSignUpForm, SignInForm, setSignInForm, Name, setName, Password, setPassword, Email, setEmail, Gender, setGender, VerifyPassword, setVerifyPassword, PlayerData, setPlayerData, OtpCode, setOtpCode, VerifyEmail, setVerifyEmail, RecoveryPass, setRecoveryPass, IsLoggedIn, setIsLoggedIn, ServerStatus }} >
        {/* <Loading /> */}
        {children}
      </UserContext.Provider >
    </Fragment>
  )
}
export default AppContext;

