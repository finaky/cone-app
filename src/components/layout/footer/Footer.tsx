"use client";
import Image from "next/image";
import logo_white from "@/assets/images/logo_white.svg";
import { footerText } from "@/data/footer";
import { motion } from "framer-motion";
import { AnimatedText } from "../../ui/AnimatedText";
import { FooterLinks } from "./FooterLinks";
import { FooterSocialLinks } from "./FooterSocialLinks";

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
          <FooterLinks />
          <FooterSocialLinks />
        </div>
      </div>

      <div className="flex max-xl:justify-center items-center max-xl:mt-12">
        <AnimatedText
          text={footerText}
          className="ml-12 text-xl"
          staggerChildren={0.02}
        />
      </div>
    </footer>
  );
};
