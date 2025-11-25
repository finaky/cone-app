import Image from "next/image";
import logo_white from "@/assets/images/logo_white.svg";
import Link from "next/link";
import { footerLinks, footerText, socialsLinks } from "@/data/footer";

export const Footer = () => {
  return (
    <footer className="w-full xl:py-5 py-12 bg-[#1B1B1B] mt-12 relative flex xl:justify-center max-xl:flex-col">
      <div className="flex items-center xl:justify-end max-xl:flex-col justify-center max-xl:mt-12">
        <Image src={logo_white} alt="logo illustration" loading="lazy" />

        <div className="grid grid-cols-2 gap-10 max-xl:mt-12 ">
          <nav aria-label="Links in footer">
            <ul className="flex max-xl:flex-col gap-5 xl:ml-10 ml-1">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <Link aria-label={link.name} href={link.href}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Social links in footer">
            <ul className="grid xl:grid-cols-6 xl:w-[50%] relative xl:left-[76%] max-xl:ml-20 -translate-x-1/2 xl:gap-5 gap-1 grid-cols-2 ">
              {socialsLinks.map((link, index) => (
                <li className="w-6" key={index}>
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.name}
                    href={link.href}
                  >
                    {link.icon}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      <div className="flex max-xl:justify-center items-center max-xl:mt-12">
        <p className="ml-12">{footerText}</p>
      </div>
    </footer>
  );
};
