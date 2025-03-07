import { cn } from "@/lib/utils";

interface FormStepSidebarProps {
  steps: { id: string; title: string; description?: string }[];
  currentStepIndex: number;
}

export function FormStepSidebar({
  steps,
  currentStepIndex,
}: FormStepSidebarProps) {
  return (
    <div className="flex flex-row sm:flex-col gap-4 bg-brand-secondary text-white p-6 h-full sm:h-auto sm:min-h-[calc(100vh-100px)] rounded-md sticky top-20 overflow-x-auto sm:overflow-x-hidden">
      {steps.map((step, index) => (
        <div
          key={step.id}
          className="flex items-center gap-3 whitespace-nowrap sm:whitespace-normal"
        >
          <div
            className={cn(
              "flex items-center justify-center w-8 h-8 shrink-0 rounded-full bg-white text-brand-secondary text-sm font-medium border border-gray-200",
              index === currentStepIndex ? "opacity-100" : "opacity-50",
            )}
          >
            {index + 1}
          </div>
          <span className="text-sm font-medium">{step.title}</span>
        </div>
      ))}
    </div>
  );
}
