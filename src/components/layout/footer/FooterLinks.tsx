import { footerLinks } from "@/data/footer";
import { motion } from "framer-motion";
import Link from "next/link";

export const FooterLinks = () => {
  return (
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
  );
};
