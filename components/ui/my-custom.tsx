"use client";
import * as React from "react";
import { cn } from "@/lib/utils";
import { EyeIcon, EyeOff } from "lucide-react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  prefix?: string;
  icon?: string;
  error?: string; // Add error prop
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, type, error, ...props }, ref) => {
    const [show, setShow] = React.useState(false);

    return (
      <div className={cn(`relative select-none bg-background`, className)}>
        {label && (
          <label className="text-[14px] capitalize font-medium text-gray-700 mb-[6px] block">
            {label}
          </label>
        )}
        <input
          type={show ? "text" : type}
          className={cn(
            "flex w-full text-sm bg-white px-4 py-[10px] text-gray-600 border-2 border-border rounded-md outline-none hover:border-2 hover:border-brand-secondary/20 focus:border-2 focus:border-brand-secondary/50 focus:shadow-input disabled:bg-gray-100 read-only:focus:border-border read-only:bg-gray-100 transition-all",
            className,
          )}
          ref={ref}
          {...props}
        />
        {type === "password" && (
          <div
            className="absolute top-10 right-4 text-slate-600 cursor-pointer hover:text-brand"
            onClick={() => setShow(!show)}
          >
            {show ? <EyeIcon size="18" /> : <EyeOff size="18" />}
          </div>
        )}
      </div>
    );
  },
);
Input.displayName = "Input";

export { Input };

export const LabelAndValue = ({
  label,
  value,
  ...rest
}: {
  label: string;
  value: string;
}) => {
  return (
    <div className="div" {...rest}>
      <p className="text-sm text-muted-foreground font-noraml mb-1 capitalize">
        {label}
      </p>
      <p
        className={cn(
          `text-sm text-slate-800 font-medium capitalize text-ellipsis overflow-hidden`,
          {
            "normal-case": label === "username" || label === "email",
          },
        )}
      >
        {value ?? "Not Provided"}
      </p>
    </div>
  );
};
