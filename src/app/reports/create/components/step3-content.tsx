"use client";

import React, {useCallback, useState, useEffect} from "react";
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
    [onFileUpload, setProgress],
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
    <div>
      <h2 className="mt-10 text-[1.125rem] text-xl font-bold">Upload Company Financials</h2>
      <p className="mt-2 font-medium text-zinc-700">
        The financials should include a balance sheet, income statement, and ownership structure.
      </p>
      {data.file ? (
        <UploadedFileView
          file={data.file}
          progress={progress}
          onCancel={cancelUpload}
        />
      ) : (
        <DropzoneView
          getRootProps={getRootProps}
          getInputProps={getInputProps}
          isDragActive={isDragActive}
        />
      )}
      {error && <p className="mt-2 text-red-500">{error}</p>}
      <Button
        variant="link"
        className="mb-12 mt-3 flex items-center gap-2 font-semibold text-zinc-800"
      >
        <IconDownload /> Download sample
      </Button>
    </div>
  );
};

type UploadedFileViewProps = {
  file: File;
  progress: number;
  onCancel: () => void;
};

const UploadedFileView = ({file, progress, onCancel}: UploadedFileViewProps) => (
  <div className="relative mt-6 rounded-xl border border-zinc-100 p-4">
    <div className="mb-2 flex items-center gap-7">
      <div className="w-fit rounded-xl bg-primary-light-1 p-2">
        <IconTable className="text-primary" />
      </div>
      <div className="flex w-full items-start justify-between gap-2">
        <div>
          <h3 className="text-sm font-semibold">{file.name}</h3>
          <p className="mt-0.5 text-sm font-semibold text-zinc-400">{(file.size / (1024 * 1024)).toFixed(2)} MB</p>
        </div>
        <button
          className="text-gray-800 transition hover:opacity-90 active:scale-[1.1]"
          onClick={onCancel}
        >
          <IconX size={16} />
        </button>
      </div>
    </div>
    <div className="flex items-center gap-3">
      <Progress
        value={progress}
        className="h-2 bg-primary-light-1"
      />
      <p className="w-10 text-sm font-medium">{progress}%</p>
    </div>
  </div>
);

type DropzoneViewProps = {
  getRootProps: () => {};
  getInputProps: () => {};
  isDragActive: boolean;
};

const DropzoneView = ({getRootProps, getInputProps, isDragActive}: DropzoneViewProps) => (
  <div
    {...getRootProps()}
    className={`border-dash-space mt-6 rounded-lg p-[54px] text-center text-sm font-medium ${
      isDragActive ? "bg-zinc-100" : ""
    } cursor-pointer`}
  >
    <Input {...getInputProps()} />
    <div className="mx-auto w-fit rounded-xl bg-primary-light p-2">
      <IconCloudUpload className="mx-auto h-6 w-6 text-primary" />
    </div>
    <p className="mt-3 text-zinc-600">
      <span className="font-semibold text-primary">Click to upload </span>
      or drag and drop
    </p>
    <p className="text-zinc-600">Excel or CSV</p>
  </div>
);
