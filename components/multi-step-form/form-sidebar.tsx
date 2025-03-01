import { cn } from "@/lib/utils"

interface FormStepSidebarProps {
  steps: { id: string; title: string; description?: string }[]
  currentStepIndex: number
}

export function FormStepSidebar({ steps, currentStepIndex }: FormStepSidebarProps) {
  return (
    <div className="flex flex-row sm:flex-col gap-4 bg-brand-secondary text-white p-6 h-full max-h-[490px] sm:min-h-[500px] rounded-md overflow-x-scroll sm:overflow-x-hidden">
      {steps.map((step, index) => (
        <div key={step.id} className="flex items-center gap-3">
          <div
            className={cn(
              "flex items-center justify-center w-8 h-8 shrink-0 rounded-full text-sm font-medium border border-gray-200",
              index === currentStepIndex
                ? "bg-white text-brand-secondary"
                : "bg-brand-secondary/80 text-white"
            )}
          >
            {index + 1}
          </div>
          <span className="text-sm font-medium ">{step.title}</span>
        </div>
      ))}
    </div>
  )
}
