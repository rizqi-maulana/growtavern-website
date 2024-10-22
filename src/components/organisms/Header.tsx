"use client";

import { useState, useContext, useCallback } from "react";
import Image from "next/image";
import { Navbar, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button } from "@nextui-org/react";
import SignUp from "../template/signup";
import { UserContext } from "@/context";
import SignIn from "../template/signin";
import { WebConfig } from "@/WebConfig";
import clsx from "clsx";
import HeaderProfile from "./HeaderProfile";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const context = useContext(UserContext);

  if (!context) {
    throw new Error("UserContext must be used within a UserProvider");
  }
  const { SignUpForm, SignInForm, setSignInForm, IsLoggedIn, setIsLoggedIn, setSignUpForm } = context;
  const HandleLogout = useCallback(async () => {
    setIsLoggedIn(false)
    if (typeof window !== "undefined") {
      localStorage.clear()
    }
  }, [setIsLoggedIn])



  const menuItems = [
    { title: "How to Play", href: '#howtoplay' },
    { title: "Community", href: '#community' },
    { title: "Store", href: 'store' },
    { title: "Staff", href: 'staff' },
    { title: "Auto Profit", href: 'auto-profit' },
  ];

  return (
    <>
      {SignUpForm && <SignUp />}
      {SignInForm && <SignIn />}
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
                <Link className={`font-GothicBold text-sm ${item.title === "Store" && "element-1"}`} color="foreground" href={`/${item.href}`}>
                  {item.title}
                </Link>
              </NavbarItem>
            ))}
          </div>
        </NavbarContent>
        <NavbarContent justify="end">
          {/* <NavbarItem className={clsx({
            'hidden': IsLoggedIn
          })}>
            {
              IsLoggedIn ?
                <Button className="font-GothicBold text-sm text-[#179BE6] bg-transparent w-max h-max" onClick={() => HandleLogout()}>
                  SIGN OUT
                </Button>
                :
                <Button className="font-GothicBold text-sm text-[#179BE6] bg-transparent w-max h-max" onClick={() => setSignInForm(true)}>
                  SIGN IN
                </Button>
            }
          </NavbarItem> */}
          <NavbarItem className={clsx({
            'hidden': IsLoggedIn
          })}>
            {
              IsLoggedIn ?
                <Button className="font-GothicBold text-sm text-[#179BE6] bg-transparent w-max h-max" onClick={() => HandleLogout()}>
                  SIGN OUT
                </Button>
                :
                <Button className="font-GothicBold text-sm text-[#179BE6] bg-transparent w-max h-max" onClick={() => setSignInForm(true)}>
                  SIGN IN
                </Button>
            }
            <Button onClick={() => setSignUpForm(!SignUpForm)} className="bg-[#179BE6] text-white font-GothicBold" variant="flat">
              SIGN UP
            </Button>
          </NavbarItem>
          <NavbarItem className={clsx({
            'hidden': !IsLoggedIn
          })}>
            {
              IsLoggedIn &&
              (
                <div className="flex items-center gap-3">
                  <HeaderProfile />
                  <Button className="bg-danger text-white w-max" onClick={() => HandleLogout()}>
                    SIGN OUT
                  </Button>
                </div>
              )
            }
          </NavbarItem>
        </NavbarContent>
        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={index}>
              <Link
                color="foreground"
                className="w-full"
                href={item.href}
                size="lg"
              >
                {item.title}
              </Link>
            </NavbarMenuItem>
          ))}

        </NavbarMenu>
      </Navbar>
    </>
  );
}
