import {Input} from "@/components/ui/input";
import React from "react";
import {motion} from "framer-motion";

export const Step2Content = ({data, setData}: {data: any; setData: any}) => {
  return (
    <motion.div
      initial={{opacity: 0, y: 20}}
      animate={{opacity: 1, y: 0}}
      exit={{opacity: 0, y: -20}}
      transition={{duration: 0.3}}
    >
      <motion.h2
        className="mb-4 mt-10 text-[1.125rem] text-xl font-bold"
        initial={{opacity: 0, x: -20}}
        animate={{opacity: 1, x: 0}}
        transition={{delay: 0.1}}
      >
        What is the company name?
      </motion.h2>
      <motion.div
        initial={{opacity: 0, y: 20}}
        animate={{opacity: 1, y: 0}}
        transition={{delay: 0.2}}
      >
        <Input
          value={data.companyName}
          floatingLabel="Company name"
          className="w-full rounded-full shadow-none"
          onChange={(e) => setData((prev: any) => ({...prev, companyName: e.target.value}))}
        />
      </motion.div>
    </motion.div>
  );
};
