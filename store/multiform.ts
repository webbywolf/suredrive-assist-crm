import { create } from "zustand"

interface MultiStepFormState {
  currentStepIndex: number
  formData: Record<string, any>
  setCurrentStepIndex: (index: number) => void
  nextStep: () => void
  previousStep: () => void
  setFormData: (data: Record<string, any>) => void
  updateFormData: (data: Record<string, any>) => void
  reset: () => void
}

export const useMultiStepFormStore = create<MultiStepFormState>((set) => ({
  currentStepIndex: 0,
  formData: {},
  setCurrentStepIndex: (index) => set({ currentStepIndex: index }),
  nextStep: () => set((state) => ({ currentStepIndex: state.currentStepIndex + 1 })),
  previousStep: () =>
    set((state) => ({ currentStepIndex: Math.max(0, state.currentStepIndex - 1) })),
  setFormData: (data) => set({ formData: data }),
  updateFormData: (data) => set((state) => ({ formData: { ...state.formData, ...data } })),
  reset: () => set({ currentStepIndex: 0, formData: {} }),
}))
