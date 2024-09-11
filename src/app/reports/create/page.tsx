"use client";

import React, {useState} from "react";
import {motion} from "framer-motion";
import SteppedProgress from "@/components/progress-steps";
import {Button} from "@/components/ui/button";
import {Logo} from "@/components/ui/logo";
import {Step1Content} from "./components/step1-content";
import {Step2Content} from "./components/step2-content";
import {Step3Content} from "./components/step3-content";

const Page = () => {
  const [data, setData] = useState({
    selectedOption: "",
    companyName: "",
    file: null,
  });
  const stepsContent = [
    <Step1Content
      key="step1"
      data={data}
      setData={setData}
    />,
    <Step2Content
      key="step3"
      data={data}
      setData={setData}
    />,
    <Step3Content
      key="step3"
      onFileUpload={(file: File) => {
        console.log(file);
      }}
      data={data}
      setData={setData}
    />,
  ];

  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = stepsContent.length;

  const handleNext = () => {
    setCurrentStep((prev) => Math.min(prev + 1, totalSteps));
  };

  const handlePrev = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const isNextButtonDisabled =
    (currentStep === 1 && !data.selectedOption) ||
    (currentStep === 2 && !data.companyName) ||
    (currentStep === 3 && !data.file);

  return (
    <motion.section
      className="flex h-screen min-h-[1000px] gap-[4.5rem] bg-primary-light"
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 0.5}}
    >
      <div className="container flex flex-col items-center justify-center">
        <motion.div
          initial={{y: -50, opacity: 0}}
          whileInView={{y: 0, opacity: 1}}
          transition={{duration: 0.5, delay: 0.2}}
          viewport={{once: true}}
        >
          <Logo />
        </motion.div>
        <motion.div
          className="mt-12 flex w-[min(100%,560px)] flex-1 flex-col rounded-3xl bg-white p-8 lg:max-h-[694px]"
          initial={{y: 50, opacity: 0}}
          whileInView={{y: 0, opacity: 1}}
          transition={{duration: 0.5, delay: 0.4}}
          viewport={{once: true}}
        >
          <SteppedProgress
            steps={totalSteps}
            currentStep={currentStep}
            className=""
          />
          <motion.h1
            className="mt-10 text-[2rem] font-bold"
            initial={{x: -20, opacity: 0}}
            whileInView={{x: 0, opacity: 1}}
            transition={{duration: 0.5, delay: 0.6}}
            viewport={{once: true}}
          >
            Create your first report
          </motion.h1>
          <motion.div
            key={currentStep}
            initial={{x: 20, opacity: 0}}
            animate={{x: 0, opacity: 1}}
            exit={{x: -20, opacity: 0}}
            transition={{duration: 0.3}}
          >
            {stepsContent[currentStep - 1]}
          </motion.div>
          <motion.div
            className="mt-auto flex justify-between"
            initial={{y: 20, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            transition={{duration: 0.5, delay: 0.8}}
            viewport={{once: true}}
          >
            {currentStep > 1 && (
              <Button
                onClick={handlePrev}
                size="lg"
                variant="outline"
                className="rounded-full font-semibold"
              >
                Back
              </Button>
            )}
            <Button
              disabled={isNextButtonDisabled}
              onClick={handleNext}
              size="lg"
              className="ml-auto rounded-full font-semibold transition-all disabled:opacity-70"
            >
              {currentStep === totalSteps ? "Generate Report" : "Continue"}
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Page;
