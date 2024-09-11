"use client";

import {motion} from "framer-motion";
import {
  IconCheck,
  IconCoins,
  IconReportMedical,
  IconFileReport,
  Icon3dCubeSphere,
  IconPackage,
  IconStack2,
  IconCategory2,
} from "@tabler/icons-react";

type Option = {
  id: string;
  icon: React.ElementType;
  label: string;
};

const options: Option[] = [
  {id: "company", icon: IconCoins, label: "Company"},
  {id: "new-loan", icon: IconReportMedical, label: "New loan"},
  {id: "existing-loan", icon: IconFileReport, label: "Existing loan"},
  {id: "ip-licence", icon: Icon3dCubeSphere, label: "IP licence"},
  {id: "price-transfer-good", icon: IconPackage, label: "Price transfer of a good"},
  {id: "price-transfer-service", icon: IconStack2, label: "Price transfer of a service"},
  {id: "contract-sale", icon: IconCoins, label: "Contract sale"},
  {id: "other", icon: IconCategory2, label: "Other"},
];

export function Step1Content({data, setData}: {data: any; setData: any}) {
  const containerVariants = {
    hidden: {opacity: 0},
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {y: 20, opacity: 0},
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.div
      className=""
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h2
        className="mb-4 mt-5 text-[1.125rem] text-xl font-bold md:mt-8 lg:mt-10"
        variants={itemVariants}
      >
        What would you like to Value?
      </motion.h2>
      <motion.div
        className="grid auto-rows-fr grid-cols-2 grid-rows-1 gap-2 sm:grid-cols-3 md:grid-cols-4"
        variants={containerVariants}
      >
        {options.map((option) => (
          <motion.button
            key={option.id}
            className={`relative flex flex-col items-center justify-center rounded-2xl px-2 py-6 transition-colors ${
              data.selectedOption === option.id ? "bg-primary text-white" : "bg-gray-100 hover:bg-gray-200"
            }`}
            onClick={() => setData((prev: any) => ({...prev, selectedOption: option.id}))}
            variants={itemVariants}
            whileTap={{scale: 1.05}}
          >
            <option.icon className="text-2xl" />
            <motion.div
              initial={{scale: 0, opacity: 0}}
              animate={{
                scale: data.selectedOption === option.id ? 1 : 0,
                opacity: data.selectedOption === option.id ? 1 : 0,
              }}
              transition={{duration: 0.2}}
              className="absolute right-3 top-3"
            >
              <IconCheck className="h-4 w-4 rounded-sm bg-white text-primary" />
            </motion.div>
            <span className="mt-2 text-center text-sm font-bold">{option.label}</span>
          </motion.button>
        ))}
      </motion.div>
    </motion.div>
  );
}
