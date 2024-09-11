import Image from "next/image";
import Link from "next/link";
import {AuthFormProps} from "./left-panel";
import {motion, AnimatePresence} from "framer-motion";

const containerVariants = {
  hidden: {opacity: 0},
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
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

export const AuthForm = ({title, subtitle, description, link}: AuthFormProps) => (
  <motion.div
    variants={containerVariants}
    initial="hidden"
    animate="visible"
  >
    <motion.h1
      className="text-[2rem] font-bold"
      variants={itemVariants}
    >
      {title}
    </motion.h1>
    <motion.p
      className="mt-2 font-medium text-zinc-600"
      variants={itemVariants}
    >
      {subtitle}
    </motion.p>
    <motion.div
      className="w-[min(100%,480px)]"
      variants={itemVariants}
    >
      <AnimatePresence mode="wait">
        {link.href === "/auth/sign-in" ? <GoogleSignUpButton key="signup" /> : <GoogleSignInButton key="signin" />}
      </AnimatePresence>
      <motion.p
        className="mt-4 text-center font-medium"
        variants={itemVariants}
      >
        {description}{" "}
        <motion.span
          whileHover={{scale: 1.05}}
          whileTap={{scale: 0.95}}
        >
          <Link
            href={link.href}
            className="font-semibold text-primary hover:underline"
          >
            {link.title}
          </Link>
        </motion.span>
      </motion.p>
    </motion.div>
  </motion.div>
);

const buttonVariants = {
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
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

const GoogleSignUpButton = () => (
  <motion.div
    variants={buttonVariants}
    initial="hidden"
    animate="visible"
    exit="exit"
    whileHover={{scale: 1.05}}
    whileTap={{scale: 0.95}}
  >
    <Link
      href="/reports/create"
      className="mt-8 flex w-full items-center justify-center gap-3 rounded-full border p-3"
    >
      <Image
        src="/icons/google.svg"
        alt="Google Logo"
        width={24}
        height={24}
      />
      <span className="font-bold">Sign up with Google</span>
    </Link>
  </motion.div>
);

const GoogleSignInButton = () => (
  <motion.div
    variants={buttonVariants}
    initial="hidden"
    animate="visible"
    exit="exit"
    whileHover={{scale: 1.05}}
    whileTap={{scale: 0.95}}
  >
    <Link
      href="/reports/create"
      className="mt-8 flex w-full items-center justify-center gap-3 rounded-full border p-3"
    >
      <Image
        src="/icons/google.svg"
        alt="Google Logo"
        width={24}
        height={24}
      />
      <span className="font-bold">Sign in with Google</span>
    </Link>
  </motion.div>
);
