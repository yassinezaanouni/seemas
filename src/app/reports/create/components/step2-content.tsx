import {Input} from "@/components/ui/input";
import React from "react";

export const Step2Content = ({data, setData}: {data: any; setData: any}) => {
  return (
    <>
      <h2 className="mb-4 mt-10 text-[1.125rem] text-xl font-bold">What is the company name?</h2>
      <Input
        value={data.companyName}
        floatingLabel="Company name"
        className="w-full rounded-full shadow-none"
        onChange={(e) => setData((prev: any) => ({...prev, companyName: e.target.value}))}
      />
    </>
  );
};
