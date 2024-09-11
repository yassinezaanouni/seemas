"use client";

import React, {useCallback, useState, useEffect} from "react";
import {motion, AnimatePresence} from "framer-motion";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Progress} from "@/components/ui/progress";
import {IconCloudUpload, IconDownload, IconTable, IconX} from "@tabler/icons-react";
import {useDropzone} from "react-dropzone";

type Step2ContentProps = {
  onFileUpload: (file: File) => void;
  data: any;
  setData: any;
};

export const Step3Content = ({onFileUpload, data, setData}: Step2ContentProps) => {
  const [progress, setProgress] = useState(data.file ? 100 : 0);
  const [error, setError] = useState("");
  const [isUploading, setIsUploading] = useState(false);

  useEffect(() => {
    if (isUploading && progress < 100) {
      const timer = setTimeout(() => setProgress((prev) => Math.min(prev + 5, 100)), 10);
      return () => clearTimeout(timer);
    }
    if (progress >= 100) {
      setIsUploading(false);
    }
  }, [progress, isUploading, setProgress]);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const uploadedFile = acceptedFiles[0];
      if (!uploadedFile) return;
      const fileExtension = uploadedFile?.name?.split(".").pop()?.toLowerCase() as string;
      const allowedExtensions = ["xlsx", "xls", "csv"];

      if (allowedExtensions.includes(fileExtension)) {
        setData((prev: any) => ({...prev, file: uploadedFile}));
        setError("");
        onFileUpload(uploadedFile);
        setProgress(0);
        setIsUploading(true);
      } else {
        setError("Please upload only Excel or CSV files.");
      }
    },
    [onFileUpload, setProgress, setData],
  );

  const {getRootProps, getInputProps, isDragActive} = useDropzone({
    onDrop,
    accept: {
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [".xlsx"],
      "application/vnd.ms-excel": [".xls"],
      "text/csv": [".csv"],
    },
  });

  const cancelUpload = () => {
    setData((prev: any) => ({...prev, file: null}));
    setIsUploading(false);
    setProgress(0);
  };

  return (
    <motion.div
      initial={{opacity: 0, y: 20}}
      animate={{opacity: 1, y: 0}}
      exit={{opacity: 0, y: -20}}
      transition={{duration: 0.3}}
    >
      <motion.h2
        className="mt-10 text-[1.125rem] text-xl font-bold"
        initial={{opacity: 0, x: -20}}
        animate={{opacity: 1, x: 0}}
        transition={{delay: 0.1}}
      >
        Upload Company Financials
      </motion.h2>
      <motion.p
        className="mt-2 font-medium text-zinc-700"
        initial={{opacity: 0, x: -20}}
        animate={{opacity: 1, x: 0}}
        transition={{delay: 0.2}}
      >
        The financials should include a balance sheet, income statement, and ownership structure.
      </motion.p>
      <AnimatePresence mode="wait">
        {data.file ? (
          <UploadedFileView
            key="uploaded"
            file={data.file}
            progress={progress}
            onCancel={cancelUpload}
          />
        ) : (
          <DropzoneView
            key="dropzone"
            getRootProps={getRootProps}
            getInputProps={getInputProps}
            isDragActive={isDragActive}
          />
        )}
      </AnimatePresence>
      {error && (
        <motion.p
          className="mt-2 text-red-500"
          initial={{opacity: 0, y: -10}}
          animate={{opacity: 1, y: 0}}
        >
          {error}
        </motion.p>
      )}
      <motion.div
        initial={{opacity: 0, y: 20}}
        animate={{opacity: 1, y: 0}}
        transition={{delay: 0.3}}
      >
        <Button
          variant="link"
          className="mb-12 mt-3 flex items-center gap-2 font-semibold text-zinc-800"
        >
          <IconDownload /> Download sample
        </Button>
      </motion.div>
    </motion.div>
  );
};

type UploadedFileViewProps = {
  file: File;
  progress: number;
  onCancel: () => void;
};

const UploadedFileView = ({file, progress, onCancel}: UploadedFileViewProps) => (
  <motion.div
    className="relative mt-6 rounded-xl border border-zinc-100 p-4"
    initial={{opacity: 0, scale: 0.9}}
    animate={{opacity: 1, scale: 1}}
    exit={{opacity: 0, scale: 0.9}}
    transition={{duration: 0.2}}
  >
    <div className="mb-2 flex items-center gap-7">
      <motion.div
        className="w-fit rounded-xl bg-primary-light-1 p-2"
        initial={{rotate: -10}}
        animate={{rotate: 0}}
        transition={{duration: 0.2}}
      >
        <IconTable className="text-primary" />
      </motion.div>
      <div className="flex w-full items-start justify-between gap-2">
        <div>
          <h3 className="text-sm font-semibold">{file.name}</h3>
          <p className="mt-0.5 text-sm font-semibold text-zinc-400">{(file.size / (1024 * 1024)).toFixed(2)} MB</p>
        </div>
        <motion.button
          className="text-gray-800 transition hover:opacity-90 active:scale-[1.1]"
          onClick={onCancel}
          whileHover={{scale: 1.1}}
          whileTap={{scale: 0.9}}
        >
          <IconX size={16} />
        </motion.button>
      </div>
    </div>
    <div className="flex items-center gap-3">
      <Progress
        value={progress}
        className="h-2 bg-primary-light-1"
      />
      <p className="w-10 text-sm font-medium">{progress}%</p>
    </div>
  </motion.div>
);

type DropzoneViewProps = {
  getRootProps: () => object;
  getInputProps: () => object;
  isDragActive: boolean;
};

const DropzoneView = ({getRootProps, getInputProps, isDragActive}: DropzoneViewProps) => (
  <motion.div
    {...getRootProps()}
    className={`border-dash-space mt-6 rounded-lg p-[54px] text-center text-sm font-medium ${
      isDragActive ? "bg-zinc-100" : ""
    } cursor-pointer`}
    initial={{opacity: 0, y: 20}}
    animate={{opacity: 1, y: 0}}
    exit={{opacity: 0, y: -20}}
    transition={{duration: 0.3}}
    whileHover={{scale: 1.02}}
    whileTap={{scale: 0.98}}
  >
    <Input {...getInputProps()} />
    <motion.div
      className="mx-auto w-fit rounded-xl bg-primary-light p-2"
      initial={{y: -10}}
      animate={{y: 0}}
      transition={{repeat: Infinity, repeatType: "reverse", duration: 1}}
    >
      <IconCloudUpload className="mx-auto h-6 w-6 text-primary" />
    </motion.div>
    <motion.p
      className="mt-3 text-zinc-600"
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{delay: 0.2}}
    >
      <span className="font-semibold text-primary">Click to upload </span>
      or drag and drop
    </motion.p>
    <motion.p
      className="text-zinc-600"
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{delay: 0.3}}
    >
      Excel or CSV
    </motion.p>
  </motion.div>
);
