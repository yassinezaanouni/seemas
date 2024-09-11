import Image from "next/image";
import {motion} from "framer-motion";

const containerVariants = {
  hidden: {opacity: 0},
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.5, // Delay to allow LeftPanel animations to start first
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

export const RightPanel = () => (
  <motion.div
    className="relative flex-[0.6] overflow-hidden rounded-[2rem] bg-primary-light pt-8"
    variants={containerVariants}
    initial="hidden"
    animate="visible"
  >
    <motion.div
      className="absolute bottom-0"
      variants={itemVariants}
    >
      <TagImages />
      <motion.div
        initial={{y: 20}}
        animate={{y: 0}}
        transition={{type: "spring", stiffness: 100, damping: 10}}
      >
        <Image
          src="/images/login/dashboard.webp"
          alt="dashboard"
          width={1217}
          height={760}
        />
      </motion.div>
    </motion.div>

    <CardImages />
  </motion.div>
);

const TagImages = () => (
  <motion.div
    className="translate-x-[5%]"
    initial={{x: "-100%"}}
    animate={{x: "5%"}}
    transition={{type: "spring", stiffness: 50, damping: 20, duration: 1}}
  >
    <motion.div
      className="flex"
      variants={itemVariants}
    >
      <motion.div
        whileHover={{scale: 1.05}}
        whileTap={{scale: 0.95}}
      >
        <Image
          src="/images/login/tag-1.png"
          alt="Seemas"
          width={327}
          height={56}
        />
      </motion.div>
      <motion.div
        whileHover={{scale: 1.05}}
        whileTap={{scale: 0.95}}
      >
        <Image
          src="/images/login/tag-2.png"
          alt="Seemas"
          width={156}
          height={56}
        />
      </motion.div>
    </motion.div>
    <motion.div
      className="flex translate-x-1/4"
      variants={itemVariants}
      animate={{x: ["25%", "30%", "25%"]}}
      transition={{repeat: Infinity, duration: 5, ease: "easeInOut"}}
    >
      <motion.div
        whileHover={{scale: 1.05}}
        whileTap={{scale: 0.95}}
      >
        <Image
          src="/images/login/tag-3.png"
          alt="Seemas"
          width={289}
          height={56}
        />
      </motion.div>
      <motion.div
        whileHover={{scale: 1.05}}
        whileTap={{scale: 0.95}}
      >
        <Image
          src="/images/login/tag-4.png"
          alt="Seemas"
          width={251}
          height={56}
        />
      </motion.div>
    </motion.div>
  </motion.div>
);

const CardImages = () => (
  <>
    <motion.div
      className="absolute bottom-1 translate-x-[20%]"
      variants={itemVariants}
      whileHover={{scale: 1.05}}
      whileTap={{scale: 0.95}}
      animate={{y: [0, -10, 0]}}
      transition={{repeat: Infinity, duration: 3, ease: "easeInOut"}}
    >
      <Image
        src="/images/login/card-2.png"
        alt="Seemas"
        width={409}
        height={174}
      />
    </motion.div>
    <motion.div
      className="absolute bottom-28"
      variants={itemVariants}
      whileHover={{scale: 1.05}}
      whileTap={{scale: 0.95}}
      animate={{y: [0, 10, 0]}}
      transition={{repeat: Infinity, duration: 4, ease: "easeInOut"}}
    >
      <Image
        src="/images/login/card-1.png"
        alt="Seemas"
        width={202}
        height={174}
      />
    </motion.div>
  </>
);
