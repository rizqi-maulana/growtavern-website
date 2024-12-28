"use client";

import { useState, useContext, useCallback, useEffect } from "react";
import Image from "next/image";
import { Navbar, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button } from "@nextui-org/react";
import SignUp from "../template/signup";
import { UserContext } from "@/context";
import SignIn from "../template/signin";
import { WebConfig } from "@/WebConfig";
import clsx from "clsx";
import HeaderProfile from "./HeaderProfile";
import ModalRecovery from "./ModalRecovery";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isClient, setIsClient] = useState<boolean>(false);

  const context = useContext(UserContext);

  if (!context) {
    throw new Error("UserContext must be used within a UserProvider");
  }
  const { SignUpForm, SignInForm, setSignUpForm, RecoveryPass, setSignInForm, PlayerData, IsLoggedIn, ServerStatus } = context;
  const HandleLogout = useCallback(async () => {
    if (typeof window !== "undefined") {
      localStorage.clear()
      window.location.reload()
    }
  }, [PlayerData])

  useEffect(() => {
    setIsClient(true)
  }, [])

  const menuItems = [
    { title: "How to Play", href: '#howtoplay' },
    { title: "Community", href: '#community' },
    { title: "Store", href: 'store' },
    { title: "Staff", href: 'staff' },
    { title: "Auto Profit", href: 'auto-profit' },
    { title: "Top Richest", href: 'top-richest' },
  ];

  return (
    <>
      {SignUpForm && <SignUp />}
      {SignInForm && <SignIn />}
      {RecoveryPass && <ModalRecovery />}
      <Navbar onMenuOpenChange={setIsMenuOpen}>
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Tutup menu" : "Buka menu"}
            className="sm:hidden"
          />
          <Link href="/" className="flex items-center gap-5">
            <Image
              width={70}
              height={70}
              alt="GrowTavern"
              src={WebConfig.logo}
              sizes="100vw"
            />
          </Link>
          <div className="bg-white w-[2px] h-[30px] rounded-full md:block hidden" />

          <div className="hidden sm:flex gap-4">
            {menuItems.map((item, index) => (
              <NavbarItem key={index}>
                <Link className={`font-GothicBold text-sm ${item.title === "Store" ? "element-1" : item.title === "Staff" ? "element-2" : item.title === "Auto Profit" ? "element-3" : item.title === "Top Richest" ? "element-4" : null}`} color="foreground" href={`/${item.href}`}>
                  {item.title}
                </Link>
              </NavbarItem>
            ))}
          </div>
        </NavbarContent>
        <NavbarContent justify="center">
          {
            isClient && (
              <h1 className="font-GothicSemiBold text-xs lg:text-base">
                {
                  ServerStatus?.IsServerUp ?
                    "Server Is up" : "Server Is down"
                }
                |
                {
                  ServerStatus?.IsServerUp ? ServerStatus?.PlayerCount : 0
                }{" "}
                Players online!
              </h1>
            )
          }
        </NavbarContent>
        <NavbarContent justify="end">
          {
            isClient && (
              <>
                <NavbarItem className={clsx({
                  'hidden': IsLoggedIn
                })}>
                  <Button className="font-GothicBold text-sm text-[#179BE6] bg-transparent w-max h-max" onClick={() => setSignInForm(true)}>
                    SIGN IN
                  </Button>
                  <Button onClick={() => setSignUpForm(!SignUpForm)} className="bg-[#179BE6] text-white font-GothicBold" variant="flat">
                    SIGN UP
                  </Button>
                </NavbarItem>
                {/* <NavbarItem className={clsx({
                  'hidden': IsLoggedIn
                })}>
                  
                </NavbarItem> */}
                <NavbarItem className={clsx({
                  'hidden': !IsLoggedIn
                })}>

                  <div className="flex items-center gap-3">
                    <HeaderProfile />
                    <Button className="bg-danger text-white w-max" onClick={() => HandleLogout()}>
                      SIGN OUT
                    </Button>
                  </div>
                </NavbarItem>
              </>
            )
          }
        </NavbarContent>
        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={index}>
              <Link
                color="foreground"
                className="w-full"
                href={`/${item.href}`}
                size="lg"
              >
                {item.title}
              </Link>
            </NavbarMenuItem>
          ))}
          <NavbarMenuItem>
            <Link href="/profile" size="lg">Profile</Link>
          </NavbarMenuItem>

        </NavbarMenu>
      </Navbar>
    </>
  );
}
