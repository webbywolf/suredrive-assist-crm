import type { z } from "zod"
import { format } from "date-fns"
import { Button } from "@/components/ui/button"
import type { StepComponentProps } from "@/components/multi-step-form/types"
// import type { companyRegistrationSchema } from "../../../types/types/partner.types"
import { LabelAndValue } from "@/components/ui/customInput"

type FormData = z.infer<any>

export function ReviewForm({ form, onNext, onPrevious, isLastStep }: StepComponentProps<any>) {
  const formData = form.getValues() as FormData

  const getBusinessTypeLabel = (value: string | undefined) => {
    if (!value) return "Not Selected"
    const types = {
      "sole-proprietorship": "Sole Proprietorship",
      partnership: "Partnership",
      corporation: "Corporation",
      llc: "Limited Liability Company",
      "non-profit": "Non-Profit Organization",
    }
    return types[value as keyof typeof types] || "Unknown"
  }

  const getTitleLabel = (value: string | undefined) => {
    if (!value) return "Not Selected"
    const titles = {
      ceo: "CEO",
      cto: "CTO",
      cfo: "CFO",
      president: "President",
      director: "Director",
      manager: "Manager",
    }
    return titles[value as keyof typeof titles] || "Unknown"
  }

  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <h3 className="text-lg font-medium border-b pb-2">Company Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <LabelAndValue label="Company Name" value={formData.companyName} />
          <LabelAndValue
            label="Business Type"
            value={getBusinessTypeLabel(formData.businessType)}
          />
          <LabelAndValue label="Full Name" value={formData.fullName} />
          <LabelAndValue label="Title" value={getTitleLabel(formData.title)} />
          <LabelAndValue label="Contact Number" value={formData.contactNumber} />
          <LabelAndValue label="Email" value={formData.email} />
          <div className="md:col-span-2">
            <LabelAndValue label="Full Address" value={formData.fullAddress} />
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="text-lg font-medium border-b pb-2">Government Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <LabelAndValue label="Registration Number" value={formData.registrationNumber} />
          <LabelAndValue label="Tax ID" value={formData.taxId} />
          <LabelAndValue label="License Number" value={formData.licenseNumber} />
          <LabelAndValue
            label="Incorporation Date"
            value={
              formData.incorporationDate
                ? format(new Date(formData.incorporationDate), "PPP")
                : "Not Provided"
            }
          />
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="text-lg font-medium border-b pb-2">Bank Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <LabelAndValue label="Account Holder Name" value={formData.accountHolderName} />
          <LabelAndValue label="Account Number" value={formData.accountNumber} />
          <LabelAndValue label="Bank Name" value={formData.bankName} />
          <LabelAndValue label="Branch Name" value={formData.branchName} />
          <LabelAndValue label="IFSC Code" value={formData.ifscCode} />
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="text-lg font-medium border-b pb-2">Uploaded Documents</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <LabelAndValue
            label="Business Registration"
            value={formData.businessRegistration || "Not Uploaded"}
          />
          <LabelAndValue
            label="Tax Certificate"
            value={formData.taxCertificate || "Not Uploaded"}
          />
          <LabelAndValue label="Bank Statement" value={formData.bankStatement || "Not Uploaded"} />
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="text-lg font-medium border-b pb-2">Account Credentials</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <LabelAndValue label="Username" value={formData.username} />
          <LabelAndValue label="Password" value="••••••••" />
        </div>
      </div>
    </div>
  )
}
