import type { ReactNode } from "react";
import { FormStepSidebar } from "./form-sidebar";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { useMultiStepFormStore } from "@/store/multiform";

interface FormLayoutProps {
  children: ReactNode;
  steps: { id: string; title: string; description?: string }[];
  currentStepIndex: number;
  onSubmit?: (data: any) => Promise<void> | void;
}

export function FormLayout({
  children,
  steps,
  currentStepIndex,
  onSubmit,
}: FormLayoutProps) {
  const isLastStep = currentStepIndex === steps.length - 1;
  const isFirstStep = currentStepIndex === 0;

  const { nextStep, previousStep } = useMultiStepFormStore();

  return (
    <div className="w-full h-full rounded-md flex overflow-hidden border border-border shadow-box">
      <FormStepSidebar steps={steps} currentStepIndex={currentStepIndex} />
      <div className="w-full h-full flex flex-col overflow-hidden">
        <div className="min-h-[8%] px-6 py-2 bg-white border-b border-border ">
          <h3 className="text-[16px] text-primary font-semibold mb-0.5">
            {steps[currentStepIndex].title}
          </h3>
          <p className="text-[12px] text-gray-700 -mt-[3px]">
            {steps[currentStepIndex].description}
          </p>
        </div>
        <div className="flex-1 p-6 bg-[#fafafa] overflow-auto">{children}</div>
        <div className="h-[70px] px-6 flex gap-3 bg-white items-center border-t border-border py-2">
          {isLastStep ? (
            <Button type="submit" variant="brand" onClick={() => onSubmit}>
              Submit
            </Button>
          ) : (
            <Button type="button" variant="brand" onClick={nextStep}>
              Next <ArrowRight />
            </Button>
          )}
          {!isFirstStep && (
            <Button
              type="button"
              className="bg-gray-300 text-black hover:text-white"
              onClick={previousStep} // Call onPrevious
            >
              Previous
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
