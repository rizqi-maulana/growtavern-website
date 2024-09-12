"use client"
import { createContext, useState } from "react";
type gender = "man" | "woman"

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
}

export const UserContext = createContext<UserContextProps | undefined>(undefined)

interface AppContextProps {
  children: React.ReactNode
}


const AppContext = ({ children }: AppContextProps) => {
  const [SignUpForm, setSignUpForm] = useState<boolean>(false);
  const [SignInForm, setSignInForm] = useState<boolean>(false);
  const [Name, setName] = useState<string | undefined>(undefined);
  const [Password, setPassword] = useState<string | undefined>(undefined);
  const [Email, setEmail] = useState<string | undefined>(undefined);
  const [Gender, setGender] = useState<gender | undefined>('man');

  return (
    <UserContext.Provider value={{ SignUpForm, setSignUpForm, SignInForm, setSignInForm, Name, setName, Password, setPassword, Email, setEmail, Gender, setGender }} >
      {children}
    </UserContext.Provider >
  )
}
export default AppContext;

