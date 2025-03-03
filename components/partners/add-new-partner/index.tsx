"use client"

import type { z } from "zod"
import { MultiStepForm } from "@/components/multi-step-form/multi-step-form"
import { FormLayout } from "@/components/multi-step-form/form-layout"
import { CompanyInfoForm } from "./company-info-form"
import { GovernmentDetailsForm } from "./government-details-form"
import { BankDetailsForm } from "./bank-details-form"
import { DocumentUploadForm } from "./document-upload-form"
import { CredentialsForm } from "./credentials-form"
import {
  companyInfoSchema,
  governmentDetailsSchema,
  bankDetailsSchema,
  documentSchema,
  credentialsSchema,
  type companyRegistrationSchema,
} from "./types"
import { useMultiStepFormStore } from "@/store/multiform"

const steps = [
  {
    id: "company-info",
    title: "Company Information",
    schema: companyInfoSchema,
    component: CompanyInfoForm,
  },
  {
    id: "government-details",
    title: "Government Details",
    schema: governmentDetailsSchema,
    component: GovernmentDetailsForm,
  },
  {
    id: "bank-details",
    title: "Bank Account Details",
    schema: bankDetailsSchema,
    component: BankDetailsForm,
  },
  {
    id: "documents",
    title: "Upload Documents",
    schema: documentSchema,
    component: DocumentUploadForm,
  },
  {
    id: "credentials",
    title: "Set Credentials",
    schema: credentialsSchema,
    component: CredentialsForm,
  },
]

export default function AddNewPartner() {
  const { currentStepIndex } = useMultiStepFormStore()

  const handleComplete = async (data: z.infer<typeof companyRegistrationSchema>) => {
    console.log("Form submitted with data:", data)

    alert("Company registration submitted successfully!")
  }

  return (
    <div className="container lg:mx-auto">
      <FormLayout steps={steps} currentStepIndex={currentStepIndex}>
        <MultiStepForm
          steps={steps}
          onComplete={handleComplete}
          defaultValues={{
            contactNumber: "+91 ",
          }}
        />
      </FormLayout>
    </div>
  )
}
