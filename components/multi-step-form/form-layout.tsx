import type { ReactNode } from "react"
import { FormStepSidebar } from "./form-sidebar"

interface FormLayoutProps {
  children: ReactNode
  steps: { id: string; title: string; description?: string }[]
  currentStepIndex: number
  userName?: string
}

export function FormLayout({ children, steps, currentStepIndex, userName }: FormLayoutProps) {
  return (
    <div className=" overflow-hidden">
      <div className="flex flex-col sm:flex-row gap-2">
        <div className="w-full sm:w-60 shrink-0 rounded-md overflow-hidden">
          <FormStepSidebar steps={steps} currentStepIndex={currentStepIndex} />
        </div>
        <div className="flex-1 py-6 max-w-3xl lg:mx-auto">{children}</div>
      </div>
    </div>
  )
}
