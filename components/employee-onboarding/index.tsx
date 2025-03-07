"use client"

import type { z } from "zod"
import { MultiStepForm } from "@/components/multi-step-form/multi-step-form"
import { FormLayout } from "@/components/multi-step-form/form-layout"
import { useMultiStepFormStore } from "@/store/multiform"
import {
  legalDetailsSchema,
  onboardingSchema,
  personalInfoSchema,
  workExperienceSchema,
} from "./types"
import { PersonalInformationForm } from "./personal-information-form"
import { LegalDetailsForm } from "./legal-details-form"
import { WorkExperienceForm } from "./work-experience"
import { ReviewForm } from "./review"

const steps = [
  {
    id: "personal-info",
    title: "Personal Information",
    description: "Basic details and contact",
    schema: personalInfoSchema,
    component: PersonalInformationForm,
  },
  {
    id: "legal-details",
    title: "Legal / Identification Documents",
    description: "Legal details and identification",
    schema: legalDetailsSchema,
    component: LegalDetailsForm,
  },
  {
    id: "work-experience",
    title: "Work Experience",
    description: "Previous work experience",
    schema: workExperienceSchema,
    component: WorkExperienceForm,
  },
  {
    id: "review",
    title: "Review & Submit",
    description: "Check all the details and submit",
    schema: onboardingSchema,
    component: ReviewForm,
  },
]

export default function Onboarding() {
  const { currentStepIndex, nextStep, previousStep, formData } = useMultiStepFormStore()

  const handleComplete = async (data: z.infer<typeof onboardingSchema>) => {
    console.log("Form submitted with data:", data)
    alert("Company registration submitted successfully!")
  }

  console.log(formData)

  return (
    <FormLayout steps={steps} currentStepIndex={currentStepIndex} onSubmit={handleComplete}>
      <MultiStepForm
        steps={steps}
        onComplete={handleComplete}
        defaultValues={{
          contactNumber: "+91 ",
        }}
      />
    </FormLayout>
  )
}
