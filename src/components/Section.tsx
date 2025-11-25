"use client";

import { motion } from "framer-motion";
import React from "react";

export const Section = ({
  className,
  children,
}: {
  className: string;
  children: React.ReactNode;
}) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </motion.section>
  );
};
