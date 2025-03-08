"use client";

import type { z } from "zod";
import { MultiStepForm } from "@/components/multi-step-form/multi-step-form";
import { FormLayout } from "@/components/multi-step-form/form-layout";
import { CompanyInfoForm } from "./company-info-form";
import { GovernmentDetailsForm } from "./government-details-form";
import { BankDetailsForm } from "./bank-details-form";
import { DocumentUploadForm } from "./document-upload-form";
import { CredentialsForm } from "./credentials-form";
import {
  companyInfoSchema,
  governmentDetailsSchema,
  bankDetailsSchema,
  documentSchema,
  credentialsSchema,
  companyRegistrationSchema,
} from "@/types/partner.types";
import { useMultiStepFormStore } from "@/store/multiform";
import { Form } from "react-hook-form";
import { ReviewForm } from "./review";

const steps = [
  {
    id: "company-info",
    title: "Company Information",
    description: "Basic company details and primary contact information",
    schema: companyInfoSchema,
    component: CompanyInfoForm,
  },
  {
    id: "government-details",
    title: "Government Details",
    description: "Legal registration details and government-issued identifiers",
    schema: governmentDetailsSchema,
    component: GovernmentDetailsForm,
  },
  {
    id: "bank-details",
    title: "Bank Account Details",
    description: "Financial account information for transactions and payments",
    schema: bankDetailsSchema,
    component: BankDetailsForm,
  },
  {
    id: "documents",
    title: "Upload Documents",
    description: "Required legal and verification documents for partnership",
    schema: documentSchema,
    component: DocumentUploadForm,
  },
  {
    id: "credentials",
    title: "Set Credentials",
    description: "Account login details for secure portal access",
    schema: credentialsSchema,
    component: CredentialsForm,
  },
  {
    id: "review",
    title: "Review & Submit",
    description: "Check all the details and submit",
    schema: companyRegistrationSchema,
    component: ReviewForm,
  },
];

export default function AddNewPartner() {
  const { currentStepIndex, formData } = useMultiStepFormStore();

  const handleComplete = async () => {
    console.log("Form submitted with data:", formData);

    alert("Company registration submitted successfully!");
  };

  return (
    <FormLayout
      steps={steps}
      currentStepIndex={currentStepIndex}
      onSubmit={handleComplete}
    >
      <MultiStepForm
        steps={steps}
        onComplete={handleComplete}
        defaultValues={{
          contactNumber: "+91 ",
        }}
      />
    </FormLayout>
  );
}
