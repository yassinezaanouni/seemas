"use client";
import {useState} from "react";
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
  return (
    <div className="">
      <h2 className="mb-4 mt-10 text-[1.125rem] text-xl font-bold">What would you like to Value?</h2>
      <div className="grid auto-rows-fr grid-cols-2 grid-rows-1 gap-2 sm:grid-cols-3 md:grid-cols-4">
        {options.map((option) => (
          <button
            key={option.id}
            className={`relative flex flex-col items-center justify-center rounded-2xl px-2 py-6 transition-colors ${
              data.selectedOption === option.id ? "bg-primary text-white" : "bg-gray-100 hover:bg-gray-200"
            }`}
            onClick={() => setData((prev: any) => ({...prev, selectedOption: option.id}))}
          >
            <option.icon className="" />
            {data.selectedOption === option.id && (
              <IconCheck className="absolute right-3 top-3 h-4 w-4 rounded-sm bg-white text-primary" />
            )}
            <span className="mt-2 text-center text-sm font-bold">{option.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
