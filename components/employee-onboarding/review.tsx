import type { z } from "zod";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import type { StepComponentProps } from "@/components/multi-step-form/types";
import type { onboardingSchema } from "./types";

type FormData = z.infer<typeof onboardingSchema>;

export function ReviewForm({
  form,
  onNext,
  onPrevious,
  isLastStep,
}: StepComponentProps<typeof onboardingSchema>) {
  // Get all form data from the store
  const formData = form.getValues() as FormData;
  console.log(formData);

  // Get experience type label
  const getExperienceLabel = (value: number | undefined) => {
    if (!value) return "Not Selected";
    const types = {
      1: "Fresher",
      2: "Experienced",
      3: "Intern",
    };
    return types[value as keyof typeof types] || "Unknown";
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold">Review Information</h2>
        <p className="text-muted-foreground mt-1">
          Please review all information before submitting onboarding details.
        </p>
      </div>

      <div className="space-y-8">
        {/* Personal Information Section */}
        <div className="space-y-3">
          <h3 className="text-lg font-medium border-b pb-2">
            Personal Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm ">
            <div>
              <p className="text-sm text-muted-foreground">First Name</p>
              <p className="font-medium">
                {formData.firstName ?? "Not Provided"}
              </p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Last Name</p>
              <p className="font-medium">
                {formData.lastName ?? "Not Provided"}
              </p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Profile Image</p>
              <p className="font-medium">
                {formData.image ? "Uploaded" : "Not Uploaded"}
              </p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Date of Birth</p>
              <p className="font-medium">
                {formData.dateOfBirth
                  ? format(new Date(formData.dateOfBirth), "PPP")
                  : "Not Provided"}
              </p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Gender</p>
              <p className="font-medium">{formData.gender ?? "Not Provided"}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Contact Number</p>
              <p className="font-medium">
                {formData.contactNumber ?? "Not Provided"}
              </p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Email</p>
              <p className="font-medium">{formData.email ?? "Not Provided"}</p>
            </div>
            <div className="md:col-span-2">
              <p className="text-sm text-muted-foreground">Address</p>
              <p className="font-medium">
                {formData.address ?? "Not Provided"}
              </p>
            </div>
          </div>
        </div>

        {/* Emergency Contact Section */}
        <div className="space-y-3">
          <h3 className="text-lg font-medium border-b pb-2">
            Emergency Contact
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-sm text-muted-foreground">Contact Name</p>
              <p className="font-medium">
                {formData.emergencyName ?? "Not Provided"}
              </p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Contact Number</p>
              <p className="font-medium">
                {formData.emergencyNumber ?? "Not Provided"}
              </p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Relationship</p>
              <p className="font-medium">
                {formData.emergencyRelation ?? "Not Provided"}
              </p>
            </div>
          </div>
        </div>

        {/* Legal/ID Details Section */}
        <div className="space-y-3">
          <h3 className="text-lg font-medium border-b pb-2">
            Legal/Identification Details
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-sm text-muted-foreground">PAN Number</p>
              <p className="font-medium">{formData.pan ?? "Not Provided"}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Aadhaar Number</p>
              <p className="font-medium">{formData.aadhar ?? "Not Provided"}</p>
            </div>
          </div>
        </div>

        {/* Bank Details Section */}
        <div className="space-y-3">
          <h3 className="text-lg font-medium border-b pb-2">Bank Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-sm text-muted-foreground">
                Account Holder Name
              </p>
              <p className="font-medium">
                {formData.accountHolderName ?? "Not Provided"}
              </p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Account Number</p>
              <p className="font-medium">
                {formData.accountNumber ?? "Not Provided"}
              </p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Bank Name</p>
              <p className="font-medium">
                {formData.bankName ?? "Not Provided"}
              </p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">IFSC Code</p>
              <p className="font-medium">
                {formData.ifscCode ?? "Not Provided"}
              </p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Cancelled Cheque</p>
              <p className="font-medium">
                {formData.cancelledCheque ? "Uploaded" : "Not Uploaded"}
              </p>
            </div>
          </div>
        </div>

        {/* PF/ESI Details Section */}
        <div className="space-y-3">
          <h3 className="text-lg font-medium border-b pb-2">PF/ESI Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-sm text-muted-foreground">UAN Number</p>
              <p className="font-medium">
                {formData.uanNumber ?? "Not Provided"}
              </p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">UAN Card</p>
              <p className="font-medium">
                {formData.uanCard ? "Uploaded" : "Not Uploaded"}
              </p>
            </div>
          </div>
        </div>

        {/* Work Experience Section */}
        <div className="space-y-3">
          <h3 className="text-lg font-medium border-b pb-2">Work Experience</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-sm text-muted-foreground">Experience Level</p>
              <p className="font-medium">
                {getExperienceLabel(formData.experience)}
              </p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Resume</p>
              <p className="font-medium">
                {formData.resume ? "Uploaded" : "Not Uploaded"}
              </p>
            </div>

            {/* Only show these fields if experienced */}
            {formData.experience === 2 && (
              <>
                <div>
                  <p className="text-sm text-muted-foreground">
                    Relieving Letter
                  </p>
                  <p className="font-medium">
                    {formData.relievingLetter ? "Uploaded" : "Not Uploaded"}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">
                    Notice Period (Days)
                  </p>
                  <p className="font-medium">
                    {formData.noticePeriod ?? "Not Provided"}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">
                    Previous Role/Designation
                  </p>
                  <p className="font-medium">
                    {formData.role ?? "Not Provided"}
                  </p>
                </div>
                <div className="md:col-span-2">
                  <p className="text-sm text-muted-foreground">
                    Experience Summary
                  </p>
                  <p className="font-medium">
                    {formData.experienceSummary ?? "Not Provided"}
                  </p>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Reference Section */}
        <div className="space-y-3">
          <h3 className="text-lg font-medium border-b pb-2">
            Reference Details
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-sm text-muted-foreground">Has Reference</p>
              <p className="font-medium">{formData.reference ? "Yes" : "No"}</p>
            </div>
            {formData.reference && (
              <>
                <div>
                  <p className="text-sm text-muted-foreground">
                    Reference Name
                  </p>
                  <p className="font-medium">
                    {formData.referenceName ?? "Not Provided"}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">
                    Reference Letter
                  </p>
                  <p className="font-medium">
                    {formData.refLetter ? "Uploaded" : "Not Uploaded"}
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="flex justify-between pt-6">
        <Button type="button" variant="outline" onClick={onPrevious}>
          Previous
        </Button>
        <Button type="button" variant="brand" onClick={() => onNext()}>
          Submit Onboarding
        </Button>
      </div>
    </div>
  );
}
