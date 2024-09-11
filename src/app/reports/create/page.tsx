"use client";

import React, {useState} from "react";
import SteppedProgress from "@/components/progress-steps";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Logo} from "@/components/ui/logo";
import {Step1Content} from "./components/step1-content";
import {Step2Content} from "./components/step2-content";
import {Step3Content} from "./components/step3-content";

interface Step {
  title: string;
  content: React.ReactNode;
}

const Page = () => {
  const [data, setData] = useState({
    selectedOption: "",
    companyName: "",
    file: null,
  });
  const stepsContent = [
    <Step1Content
      data={data}
      setData={setData}
    />,
    <Step2Content
      data={data}
      setData={setData}
    />,
    <Step3Content
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

  const handleReset = () => {
    setCurrentStep(1);
  };

  const isNextButtonDisabled =
    (currentStep === 1 && !data.selectedOption) ||
    (currentStep === 2 && !data.companyName) ||
    (currentStep === 3 && !data.file);

  return (
    <section className="flex h-screen min-h-[1000px] gap-[4.5rem] bg-primary-light">
      <div className="container flex flex-col items-center justify-center">
        <Logo />
        <div className="mt-12 flex w-[min(100%,560px)] flex-1 flex-col rounded-3xl bg-white p-8 lg:max-h-[694px]">
          <SteppedProgress
            steps={totalSteps}
            currentStep={currentStep}
            className=""
          />
          <h1 className="mt-10 text-[2rem] font-bold">Create your first report</h1>
          {stepsContent[currentStep - 1]}
          <div className="mt-auto flex justify-between">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
