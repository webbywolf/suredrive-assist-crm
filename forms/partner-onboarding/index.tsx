"use client";

import type { z } from "zod";
import { MultiStepForm } from "@/components/multi-step-form/multi-step-form";
import { FormLayout } from "@/components/multi-step-form/form-layout";
import { StepOne } from "./step-one";
import { StepTwo } from "./step-two";
import { StepThree } from "./step-three";
import { StepFour } from "./step-four";
import { StepFive } from "./step-five";
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
import { Steps } from "antd";

const steps = [
  {
    id: "company-info",
    title: "Company Information",
    description: "Basic company details and primary contact information",
    schema: companyInfoSchema,
    component: StepOne,
  },
  {
    id: "government-details",
    title: "Government Details",
    description: "Legal registration details and government-issued identifiers",
    schema: governmentDetailsSchema,
    component: StepTwo,
  },
  {
    id: "bank-details",
    title: "Bank Account Details",
    description: "Financial account information for transactions and payments",
    schema: bankDetailsSchema,
    component: StepThree,
  },
  {
    id: "documents",
    title: "Upload Documents",
    description: "Required legal and verification documents for partnership",
    schema: documentSchema,
    component: StepFour,
  },
  {
    id: "credentials",
    title: "Set Credentials",
    description: "Account login details for secure portal access",
    schema: credentialsSchema,
    component: StepFive,
  },
  {
    id: "review",
    title: "Review & Submit",
    description: "Check all the details and submit",
    schema: companyRegistrationSchema,
    component: ReviewForm,
  },
];

export default function PartnerOnboarding() {
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
      <MultiStepForm steps={steps} onComplete={handleComplete} />
    </FormLayout>
  );
}
