import * as React from "react";
import {cn} from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  floatingLabel?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({className, type, floatingLabel, placeholder, ...props}, ref) => {
    return (
      <div className="relative text-sm font-medium">
        <input
          type={type}
          className={cn(
            "peer flex h-10 w-full rounded-md border border-input bg-transparent px-4 py-2 shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-zinc-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
            floatingLabel && "placeholder-transparent",
            className,
          )}
          placeholder={placeholder || " "}
          ref={ref}
          {...props}
        />
        {floatingLabel && (
          <label className="pointer-events-none absolute left-4 top-0 -translate-y-1/2 bg-white px-0.5 text-xs text-zinc-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
            {floatingLabel}
          </label>
        )}
      </div>
    );
  },
);
Input.displayName = "Input";

export {Input};
