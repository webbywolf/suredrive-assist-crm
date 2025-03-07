import type { ReactNode } from "react"
import { FormStepSidebar } from "./form-sidebar"

interface FormLayoutProps {
  children: ReactNode
  steps: { id: string; title: string; description?: string }[]
  currentStepIndex: number
}

export function FormLayout({ children, steps, currentStepIndex }: FormLayoutProps) {
  return (
    <div className=" overflow-hidden">
      <div className="flex flex-col sm:flex-row gap-2 ">
        <div className="w-full sm:w-60 shrink-0 rounded-md overflow-hidden sticky top-20 flex-start">
          <FormStepSidebar steps={steps} currentStepIndex={currentStepIndex} />
        </div>
        <div className="flex-1 p-6 bg-white rounded-md max-w-3xl lg:mx-auto">{children}</div>
      </div>
    </div>
  )
}
