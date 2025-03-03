"use client"

import { z } from "zod"
import { MultiStepForm } from "@/components/multi-step-form/multi-step-form"
import { FormLayout } from "@/components/multi-step-form/form-layout"

import { useMultiStepFormStore } from "@/store/multiform"
import { personalInfoFormSchema, PersonalInformationForm } from "./personal-information-form"
import { GovernmentDetailsForm, governmentDetailsFormSchema } from "./government-details-form"
import { CredentialsForm, credentialsFormSchema } from "./credential-form"

const formSchema = z.object({
  ...personalInfoFormSchema.shape,
  ...governmentDetailsFormSchema.shape,
  ...credentialsFormSchema.shape,
})

const steps = [
  {
    id: "personal-info",
    title: "Personal Information",
    schema: personalInfoFormSchema,
    component: PersonalInformationForm,
  },
  {
    id: "government-details",
    title: "Government Details",
    schema: governmentDetailsFormSchema,
    component: GovernmentDetailsForm,
  },
  {
    id: "credentials",
    title: "Set Credentials",
    schema: credentialsFormSchema,
    component: CredentialsForm,
  },
]

export default function AddNewUser() {
  const { currentStepIndex } = useMultiStepFormStore()

  const handleComplete = async (data: z.infer<typeof formSchema>) => {
    console.log("Form submitted with data:", data)
    alert("Form submitted successfully!")
  }

  return (
    <div className="container lg:mx-auto">
      <FormLayout steps={steps} currentStepIndex={currentStepIndex}>
        <MultiStepForm
          steps={steps}
          onComplete={handleComplete}
          defaultValues={{
            // You can provide default values here
            firstName: "",
            lastName: "",
            contactNumber: "+91 ",
          }}
        />
      </FormLayout>
    </div>
  )
}
