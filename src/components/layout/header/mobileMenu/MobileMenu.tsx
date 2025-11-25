import { JSX } from "react";
import { NavbarList } from "../NavbarList";

interface MobileMenuProps {
  isMenuOpened: boolean;
}

export const MobileMenu = ({ isMenuOpened }: MobileMenuProps): JSX.Element => {
  return (
    <div>
      <NavbarList
        className={`lg:hidden py-6 absolute bg-[#1E1E1E] top-15 left-0 w-full flex flex-col items-center gap-2 text-2xl transition-all duration-175 ${
          isMenuOpened
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      />
    </div>
  );
};
