import { JSX } from "react";
import { NavbarList } from "../NavbarList";

export const MobileMenu = (): JSX.Element => {
  return (
    <div>
      <NavbarList clasName="lg:hidden py-6 absolute bg-[#1E1E1E] top-15 left-0 w-full flex flex-col items-center gap-2 text-2xl" />
    </div>
  );
};
