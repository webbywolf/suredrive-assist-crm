"use client";

import type { z } from "zod";
import { MultiStepForm } from "@/components/multi-step-form/multi-step-form";
import { FormLayout } from "@/components/multi-step-form/form-layout";

import { useMultiStepFormStore } from "@/store/multiform";
import {
  legalDetailsSchema,
  onboardingSchema,
  personalInfoSchema,
  workExperienceSchema,
} from "./types";
import { PersonalInformationForm } from "./personal-information-form";
import { LegalDetailsForm } from "./legal-details-form";
import { WorkExperienceForm } from "./work-experience";
import { ReviewForm } from "./review";

const steps = [
  {
    id: "personal-info",
    title: "Personal Information",
    schema: personalInfoSchema,
    component: PersonalInformationForm,
  },
  {
    id: "legal-details",
    title: "Legal / Identification Documents",
    schema: legalDetailsSchema,
    component: LegalDetailsForm,
  },
  {
    id: "work-experinece",
    title: "Work Experience",
    schema: workExperienceSchema,
    component: WorkExperienceForm,
  },
  {
    id: "review",
    title: "Review & Submit",
    schema: onboardingSchema,
    component: ReviewForm,
  },
  //   {
  //     id: "bank-details",
  //     title: "Bank Account Details",
  //     schema: bankDetailsSchema,
  //     component: BankDetailsForm,
  //   },
  //   {
  //     id: "documents",
  //     title: "Upload Documents",
  //     schema: documentSchema,
  //     component: DocumentUploadForm,
  //   },
  //   {
  //     id: "credentials",
  //     title: "Set Credentials",
  //     schema: credentialsSchema,
  //     component: CredentialsForm,
  //   },
];

export default function Onboarding() {
  const { currentStepIndex } = useMultiStepFormStore();

  const handleComplete = async (data: z.infer<typeof onboardingSchema>) => {
    console.log("Form submitted with data:", data);

    alert("Company registration submitted successfully!");
  };

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
  );
}
