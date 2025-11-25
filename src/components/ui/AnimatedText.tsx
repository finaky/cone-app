"use client";
import { motion } from "framer-motion";

interface IAnimatedText {
  text: string;
  className: string;
  staggerChildren: number;
}

export const AnimatedText = ({
  text,
  className,
  staggerChildren,
}: IAnimatedText) => {
  const letters = Array.from(text);

  const letterAnimation = {
    hidden: { opacity: 0, y: 5 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: staggerChildren }}
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          variants={letterAnimation}
          className="inline-block"
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>
  );
};
