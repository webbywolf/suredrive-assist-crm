import type { z } from "zod"
import { format } from "date-fns"
import { Button } from "@/components/ui/button"
import type { StepComponentProps } from "@/components/multi-step-form/types"
import type { onboardingSchema } from "@/types/onboarding.types"
import { LabelAndValue } from "@/components/ui/customInput"

type FormData = z.infer<typeof onboardingSchema>

export function ReviewForm({
  form,
  onNext,
  onPrevious,
  isLastStep,
}: StepComponentProps<typeof onboardingSchema>) {
  // Get all form data from the store
  const formData = form.getValues() as FormData
  console.log(formData)

  // Get experience type label
  const getExperienceLabel = (value: number | undefined) => {
    if (!value) return "Not Selected"
    const types = {
      1: "Fresher",
      2: "Experienced",
      3: "Intern",
    }
    return types[value as keyof typeof types] || "Unknown"
  }

  return (
    <div className="space-y-6">
      <div className="space-y-8">
        <div className="space-y-3">
          <h3 className="text-lg font-medium border-b pb-2">Personal Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <LabelAndValue label="First Name" value={formData.firstName} />
            <LabelAndValue label="Last Name" value={formData.lastName} />
            <LabelAndValue
              label="Profile Image"
              value={formData.image ? "Uploaded" : "Not Uploaded"}
            />
            <LabelAndValue
              label="Date of Birth"
              value={
                formData.dateOfBirth
                  ? format(new Date(formData.dateOfBirth), "PPP")
                  : "Not Provided"
              }
            />
            <LabelAndValue label="Gender" value={formData.gender} />
            <LabelAndValue label="Contact Number" value={formData.contactNumber} />
            <LabelAndValue label="Email" value={formData.email} />
            <LabelAndValue label="Address" value={formData.address} />
          </div>
        </div>

        {/* Emergency Contact Section */}
        <div className="space-y-3">
          <h3 className="text-lg font-medium border-b pb-2">Emergency Contact</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <LabelAndValue label="Contact Name" value={formData.emergencyName} />
            <LabelAndValue label="Contact Number" value={formData.emergencyNumber} />
            <LabelAndValue label="Relationship" value={formData.emergencyRelation} />
          </div>
        </div>

        {/* Legal/ID Details Section */}
        <div className="space-y-3">
          <h3 className="text-lg font-medium border-b pb-2">Legal/Identification Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <LabelAndValue label="PAN Number" value={formData.pan} />
            {/* <LabelAndValue label="Aadhaar Number" value={formData.aadhar} /> */}
          </div>
        </div>

        {/* Bank Details Section */}
        <div className="space-y-3">
          <h3 className="text-lg font-medium border-b pb-2">Bank Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            {/* <LabelAndValue label="Account Holder Name" value={formData.accountHolderName} /> */}
            <LabelAndValue label="Account Number" value={formData.accountNumber} />
            <LabelAndValue label="Bank Name" value={formData.bankName} />
            {/* <LabelAndValue label="IFSC Code" value={formData.ifscCode} /> */}
            {/* <LabelAndValue
              label="Cancelled Cheque"
              // value={formData.cancelledCheque ? "Uploaded" : "Not Uploaded"}
            /> */}
          </div>
        </div>

        {/* PF/ESI Details Section */}
        <div className="space-y-3">
          <h3 className="text-lg font-medium border-b pb-2">PF/ESI Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            {/* <LabelAndValue label="UAN Number" value={formData.uanNumber} /> */}
            {/* <LabelAndValue
              label="UAN Card"
              value={formData.uanCard ? "Uploaded" : "Not Uploaded"}
            /> */}
          </div>
        </div>

        {/* Work Experience Section */}
        <div className="space-y-3">
          <h3 className="text-lg font-medium border-b pb-2">Work Experience</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            {/* <LabelAndValue
              label="Experience Level"
              value={getExperienceLabel(formData.experience)}
            />
            <LabelAndValue label="Resume" value={formData.resume ? "Uploaded" : "Not Uploaded"} /> */}

            {/* Only show these fields if experienced */}
            {/* {formData.experience === 2 && (
              <>
                <LabelAndValue
                  label="Relieving Letter"
                  value={formData.relievingLetter ? "Uploaded" : "Not Uploaded"}
                />
                <LabelAndValue
                  label="Notice Period (Days)"
                  value={formData.noticePeriod?.toString() || ""}
                />
                <LabelAndValue label="Previous Role/Designation" value={formData.role} />
                <LabelAndValue label="Experience Summary" value={formData.experienceSummary} />
              </>
            )} */}
          </div>
        </div>

        {/* Reference Section */}
        <div className="space-y-3">
          <h3 className="text-lg font-medium border-b pb-2">Reference Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            {/* <LabelAndValue label="Has Reference" value={formData.reference ? "Yes" : "No"} /> */}
            {/* {formData.reference && (
              <>
                <LabelAndValue label="Reference Name" value={formData.referenceName} />
                <LabelAndValue
                  label="Reference Letter"
                  value={formData.refLetter ? "Uploaded" : "Not Uploaded"}
                />
              </>
            )} */}
          </div>
        </div>
      </div>
    </div>
  )
}
