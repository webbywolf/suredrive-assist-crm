import type { z } from "zod"
import type { ReactNode } from "react"
import type { UseFormReturn } from "react-hook-form"

export interface Step<T extends z.ZodTypeAny> {
  id: string
  title: string
  description?: string
  schema: T
  component: (props: StepComponentProps<T>) => ReactNode
}

export interface StepComponentProps<T extends z.ZodTypeAny> {
  form: UseFormReturn<z.infer<T>>
  onNext: () => void
  onPrevious: () => void
  isFirstStep: boolean
  isLastStep: boolean
  currentStepIndex: number
}

export interface MultiStepFormConfig<T extends z.ZodTypeAny> {
  steps: Step<T>[]
  onComplete: (data: z.infer<T>) => void | Promise<void>
  defaultValues?: Partial<z.infer<T>>
}
