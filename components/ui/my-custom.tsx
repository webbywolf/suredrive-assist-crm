"use client";
import * as React from "react";
import { cn } from "@/lib/utils";
import { EyeIcon, EyeOff } from "lucide-react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  prefix?: string;
  icon?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, type, ...props }, ref) => {
    const [show, setShow] = React.useState(false);

    return (
      <div className={cn(`relative select-none`, className)}>
        {label && (
          <label className="text-[14px] capitalize font-medium text-gray-700 mb-[6px] block">
            {label}
          </label>
        )}
        <input
          type={show ? "text" : type}
          className={cn(
            "flex w-full text-sm bg-white px-4 py-[8px] text-gray-600 border-2 border-border rounded-md outline-none hover:ring-2 hover:ring-brand-secondary/20 focus:ring-2 focus:ring-brand-secondary/50 focus:shadow-input disabled:bg-gray-100 read-only:focus:border-border read-only:bg-gray-100 transition-all",
            className,
          )}
          ref={ref}
          {...props}
        />
        {/* <input
          type={show ? "text" : type}
          data-slot="input"
          className={cn(
            "border-input file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
            "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
            className
          )}
          ref={ref}
          {...props}
        /> */}
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
