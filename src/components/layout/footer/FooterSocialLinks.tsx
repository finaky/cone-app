import { socialsLinks } from "@/data/footer";
import Link from "next/link";
import { motion } from "framer-motion";

export const FooterSocialLinks = () => {
  return (
    <nav aria-label="Social links in footer">
      <ul className="grid xl:grid-cols-6 xl:w-[50%] relative xl:left-[76%] max-xl:ml-20 -translate-x-1/2 xl:gap-5 gap-1 grid-cols-2 ">
        {socialsLinks.map((link, index) => (
          <motion.li
            className="w-6"
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              delay: index * 0.1,
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
  );
};
