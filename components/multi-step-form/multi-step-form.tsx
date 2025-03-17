"use client";

import { useEffect } from "react";
import type { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { MultiStepFormConfig } from "./types";
import { useMultiStepFormStore } from "@/store/multiform";
import { usePathname } from "next/navigation";

export function MultiStepForm<T extends z.ZodTypeAny>({
  steps,
  onComplete,
  defaultValues = {},
}: MultiStepFormConfig<T>) {
  const {
    currentStepIndex,
    nextStep,
    previousStep,
    formData,
    updateFormData,
    reset,
    resetStep,
  } = useMultiStepFormStore();

  const currentStep = steps[currentStepIndex];

  const form = useForm<z.infer<typeof currentStep.schema>>({
    resolver: zodResolver(currentStep.schema),
    defaultValues: defaultValues as any,
  });

  const pathname = usePathname();

  useEffect(() => {
    form.reset({ ...formData });
    reset();
  }, [pathname]);

  useEffect(() => {
    if (formData) {
      form.reset({ ...formData });
    }
  }, [form, formData]);

  const handleNext = async () => {
    const isValid = await form.trigger();
    if (!isValid) return;

    const values = form.getValues();
    updateFormData(values);

    if (currentStepIndex === steps.length - 1) {
      // If this is the last step, call onComplete
      const allData = { ...formData, ...values };
      await onComplete(allData);
      reset();
    } else {
      // Otherwise, go to the next step
      nextStep();
    }
  };

  // Handle previous step
  const handlePrevious = () => {
    const values = form.getValues();
    updateFormData(values);
    previousStep();
  };

  // Compute step properties
  const isFirstStep = currentStepIndex === 0;
  const isLastStep = currentStepIndex === steps.length - 1;

  // Render the current step component
  return currentStep.component({
    form,
    onNext: handleNext,
    onPrevious: handlePrevious,
    isFirstStep,
    isLastStep,
    currentStepIndex,
  });
}
