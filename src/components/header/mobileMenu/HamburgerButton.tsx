"use client";
import { HamburgerLine } from "./HamburgerLine";

interface Menu {
  setIsMenuOpened: (value: boolean | ((prev: boolean) => boolean)) => void;
  isMenuOpened: boolean;
}

export const HamburgerMenu = ({ setIsMenuOpened, isMenuOpened }: Menu) => {
  return (
    <div className="absolute right-6 ">
      <button
        onClick={() => setIsMenuOpened((prev) => !prev)}
        className="relative w-12 h-10 flex justify-center items-center lg:hidden cursor-pointer"
      >
        <HamburgerLine
          className={isMenuOpened ? "rotate-45" : "-translate-y-3"}
        />
        <HamburgerLine
          className={isMenuOpened ? "-rotate-45" : "translate-y-3"}
        />
        <HamburgerLine className={isMenuOpened ? "opacity-0" : ""} />
      </button>
    </div>
  );
};
