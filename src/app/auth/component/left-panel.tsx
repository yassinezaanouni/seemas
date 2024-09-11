import Link from "next/link";
import React from "react";
import {AuthForm} from "./auth-form";
import {Logo} from "@/components/ui/logo";
import {motion} from "framer-motion";

export type AuthFormProps = {
  title: string;
  subtitle: string;
  description: string;
  link: {
    title: string;
    href: string;
  };
};

const containerVariants = {
  hidden: {opacity: 0},
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: {opacity: 0, y: 20},
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

export const LeftPanel = (props: AuthFormProps) => {
  return (
    <motion.div
      className="flex h-full flex-[0.4] flex-col justify-between gap-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={itemVariants}>
        <Logo />
      </motion.div>
      <motion.div variants={itemVariants}>
        <AuthForm {...props} />
      </motion.div>
      <motion.div variants={itemVariants}>
        <Footer />
      </motion.div>
    </motion.div>
  );
};

const Footer = () => (
  <div className="text-sm font-semibold">
    <motion.span
      whileHover={{scale: 1.05}}
      whileTap={{scale: 0.95}}
    >
      <Link
        href="#"
        className="pr-3 font-semibold hover:underline"
      >
        Privacy policy
      </Link>
    </motion.span>
    <motion.span
      whileHover={{scale: 1.05}}
      whileTap={{scale: 0.95}}
    >
      <Link
        href="#"
        className="border-l pl-3 font-semibold hover:underline"
      >
        Terms & Conditions
      </Link>
    </motion.span>
  </div>
);
