"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/logo_white.svg";
import { HamburgerMenu } from "./MobileMenu/HamburgerButton";
import { useState } from "react";
import { MobileMenu } from "./MobileMenu/MobileMenu";
import { NavbarList } from "./NavbarList";

export const Navbar = () => {
  const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);
  return (
    <nav className="flex items-center relative left-1/2 -translate-x-1/2 mt-6 max-w-[1600px]">
      <div className="mx-2 flex items-center">
        <Image loading="eager" src={logo} width={150} height={37} alt="" />

        <NavbarList className="lg:flex hidden ml-[60px] items-center gap-3 opacity-100" />

        <Link
          href={"/"}
          className="lg:flex hidden items-center justify-center w-[149px] h-14 bg-(--yellow) text-(--black) text-background font-extrabold rounded-md absolute right-6"
        >
          Contact Us
        </Link>
      </div>

      <MobileMenu isMenuOpened={isMenuOpened} />

      <HamburgerMenu
        isMenuOpened={isMenuOpened}
        setIsMenuOpened={setIsMenuOpened}
      />
    </nav>
  );
};
