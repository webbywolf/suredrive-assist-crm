import { cn } from "@/lib/utils"

interface FormStepSidebarProps {
  steps: { id: string; title: string; description?: string }[]
  currentStepIndex: number
}

export function FormStepSidebar({ steps, currentStepIndex }: FormStepSidebarProps) {
  return (
    <div className="py-8 px-6 min-w-[25%] 2xl:min-w-[25%] bg-blue-950">
      <ol className="w-full hidden md:inline-flex flex-col item-center justify-between overflow-auto gap-5">
        {steps.map((step, index) => {
          return (
            <li
              key={index}
              className={cn(`opacity-100 cursor-pointer transition-opacity`, {
                "opacity-25": currentStepIndex !== index,
              })}
            >
              <div className="flex gap-2">
                <div className="min-w-[36px] h-[36px] inline-flex items-center justify-center rounded-md bg-slate-100 font-bold">
                  {index + 1}
                </div>
                <div className="content">
                  <h4 className="text-[14px] text-slate-200 font-medium">{step.title}</h4>
                  <p className="text-[11px] text-blue-200 font-normal">{step.description}</p>
                </div>
              </div>
            </li>
          )
        })}
      </ol>
    </div>
  )
}
