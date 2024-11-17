"use client"
import React, { createContext, Fragment, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
// import Loading from "./components/template/Loading";
type gender = "man" | "woman"

interface PlayerDataProps {
  name: string;
  email: string;
  level: string,
  adminlevel: number;
  inventory: number[]
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

}

export const UserContext = createContext<UserContextProps | undefined>(undefined)

interface AppContextProps {
  children: React.ReactNode
}


const AppContext = ({ children }: AppContextProps) => {
  const [PlayerData, setPlayerData] = useState<PlayerDataProps | undefined>(undefined);
  const [RecoveryPass, setRecoveryPass] = useState<boolean>(false);
  const [IsLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [SignUpForm, setSignUpForm] = useState<boolean>(false);
  const [SignInForm, setSignInForm] = useState<boolean>(false);
  const [Name, setName] = useState<string | undefined>(undefined);
  const [Password, setPassword] = useState<string | undefined>(undefined);
  const [VerifyPassword, setVerifyPassword] = useState<string | undefined>(undefined);
  const [Email, setEmail] = useState<string | undefined>(undefined);
  const [Gender, setGender] = useState<gender | undefined>('man');
  const [OtpCode, setOtpCode] = useState<string | undefined>(undefined)
  const [VerifyEmail, setVerifyEmail] = useState<boolean>(false)

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
            setPlayerData({ name: dataserver.data.name, email: dataserver.data.email, level: dataserver.data.level, adminlevel: dataserver.data.adminlevel, inventory: dataserver.data.inventory })
            setIsLoggedIn(true)
          } else {
            toast.error(dataserver.message)
          }
        }
      }
    }
    CheckLogin()
  }, [])

  return (
    <Fragment>
      <Toaster />
      <UserContext.Provider value={{ SignUpForm, setSignUpForm, SignInForm, setSignInForm, Name, setName, Password, setPassword, Email, setEmail, Gender, setGender, VerifyPassword, setVerifyPassword, PlayerData, setPlayerData, IsLoggedIn, setIsLoggedIn, OtpCode, setOtpCode, VerifyEmail, setVerifyEmail, RecoveryPass, setRecoveryPass }} >
        {/* <Loading /> */}
        {children}
      </UserContext.Provider >
    </Fragment>
  )
}
export default AppContext;

