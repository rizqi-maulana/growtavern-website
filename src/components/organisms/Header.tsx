"use client";

import { useState, useContext } from "react";
import Image from "next/image";
import { Navbar, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button } from "@nextui-org/react";
import SignUp from "../template/signup";
import { UserContext } from "@/context";
import SignIn from "../template/signin";
import { WebConfig } from "@/WebConfig";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  // Memanggil useContext di level atas komponen
  const context = useContext(UserContext);

  // Menangani kasus di mana context mungkin undefined
  if (!context) {
    return <div>Error: UserContext tidak terdefinisi</div>;
  }

  // Memanggil useState di level atas

  const { SignUpForm, setSignUpForm, SignInForm, setSignInForm } = context;

  const menuItems = [
    { title: "How to Play", href: '/#howtoplay' },
    { title: "Community", href: '/#community' },
    // { title: "Store", href: 'store' },
    { title: "Staff", href: 'staff' },
    { title: "Auto Profit", href: '/auto-profit' },
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
                <Link className="font-GothicBold text-sm" color="foreground" href={item.href}>
                  {item.title}
                </Link>
              </NavbarItem>
            ))}
          </div>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Button className="font-GothicBold text-sm text-[#179BE6] bg-transparent w-max h-max cursor-not-allowed" onClick={() => setSignInForm(false)}>
              SIGN IN
            </Button>
          </NavbarItem>
          <NavbarItem>
            <Button onClick={() => setSignUpForm(!SignUpForm)} className="bg-[#179BE6] text-white font-GothicBold" variant="flat">
              SIGN UP
            </Button>
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
