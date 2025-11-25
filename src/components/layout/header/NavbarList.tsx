import { navBarItems } from "@/data/config";
import Link from "next/link";

interface NavbarListProps {
  className: string;
}

export const NavbarList = ({ className }: NavbarListProps) => {
  return (
    <ul className={className}>
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
