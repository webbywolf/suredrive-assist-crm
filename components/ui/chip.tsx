import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const chipVariants = cva(
  "inline-flex justify-center items-center rounded-3xl border  py-0.5 text-xs ",
  {
    variants: {
      variant: {
        default: "border-gray-300 border-[2px] hover:bg-slate-200",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
        outline: "text-foreground",
        active:
          "border-transparent bg-green-500 text-white shadow hover:bg-green-600",
        pending:
          "border-transparent bg-amber-500 text-white shadow hover:bg-amber-600",
        reject:
          "border-transparent bg-red-500 text-white shadow hover:bg-red-600",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface ChipProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof chipVariants> {}

function Chip({ className, variant, ...props }: ChipProps) {
  return (
    <div className={cn(chipVariants({ variant }), className)} {...props} />
  );
}

export { Chip, chipVariants };
