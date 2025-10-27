import { navBarItems } from "@/data/config";
import Link from "next/link";

interface NavbarList {
  clasName: string;
}

export const NavbarList = ({ clasName }: NavbarList) => {
  return (
    <ul className={clasName}>
      {navBarItems.map((item, index) => (
        <li key={index}>
          <Link
            className={item.active ? "text-(--yellow)" : ""}
            href={item.href}
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};
