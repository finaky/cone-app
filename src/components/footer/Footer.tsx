"use client";
import Image from "next/image";
import logo_white from "@/assets/images/logo_white.svg";
import Link from "next/link";
import { footerLinks, footerText, socialsLinks } from "@/data/footer";
import { motion } from "framer-motion";
import { AnimatedText } from "../AnimatedText";

export const Footer = () => {
  return (
    <footer className="w-full xl:py-5 py-12 bg-[#1B1B1B] mt-12 relative flex xl:justify-center max-xl:flex-col">
      <div className="flex items-center xl:justify-end max-xl:flex-col justify-center max-xl:mt-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <Image src={logo_white} alt="logo illustration" loading="lazy" />
        </motion.div>

        <div className="grid grid-cols-2 gap-10 max-xl:mt-12 ">
          <nav aria-label="Links in footer">
            <ul className="flex max-xl:flex-col gap-5 xl:ml-10 ml-1">
              {footerLinks.map((link, index) => (
                <motion.li
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  key={index}
                >
                  <Link aria-label={link.name} href={link.href}>
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Social links in footer">
            <ul className="grid xl:grid-cols-6 xl:w-[50%] relative xl:left-[76%] max-xl:ml-20 -translate-x-1/2 xl:gap-5 gap-1 grid-cols-2 ">
              {socialsLinks.map((link, index) => (
                <motion.li
                  className="w-6"
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: index * 0.5,
                    type: "spring",
                    stiffness: 200,
                  }}
                  viewport={{ once: true }}
                >
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.name}
                    href={link.href}
                  >
                    {link.icon}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      <div className="flex max-xl:justify-center items-center max-xl:mt-12">
        <AnimatedText
          text={footerText}
          className="ml-12 text-xl"
          staggerChildren={0.05}
        />
      </div>
    </footer>
  );
};
