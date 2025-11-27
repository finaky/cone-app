import { navBarItems } from "@/data/config";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavbarListProps {
  className: string;
}

export const NavbarList = ({ className }: NavbarListProps) => {
  const pathname = usePathname();

  return (
    <ul className={className}>
      {navBarItems.map((item, index) => (
        <li key={index}>
          <Link
            className={pathname === item.href ? "text-(--primary)" : ""}
            href={item.href}
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};
