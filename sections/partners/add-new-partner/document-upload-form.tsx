import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/my-custom";
import type { StepComponentProps } from "@/components/multi-step-form/types";
import type { documentSchema } from "@/types/partner.types";

export function DocumentUploadForm({
  form,
  onNext,
  onPrevious,
  isLastStep,
}: StepComponentProps<typeof documentSchema>) {
  return (
    <div className="">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onNext)} className="space-y-4">
          <div className="space-y-1">
            <Input
              label="Business Registration"
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={(e) => {
                const file = e.target.files?.[0];
                form.setValue("businessRegistration", file ? file.name : "");
              }}
            />
            <p className="text-sm text-gray-500">
              Upload your business registration certificate (PDF, DOC, DOCX)
            </p>
            {form.formState.errors.businessRegistration && (
              <p className="text-sm text-red-500">
                {form.formState.errors.businessRegistration.message}
              </p>
            )}
          </div>

          <div className="space-y-1">
            <Input
              label="Tax Certificate"
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={(e) => {
                const file = e.target.files?.[0];
                form.setValue("taxCertificate", file ? file.name : "");
              }}
            />
            <p className="text-sm text-gray-500">
              Upload your tax certificate (PDF, DOC, DOCX)
            </p>
            {form.formState.errors.taxCertificate && (
              <p className="text-sm text-red-500">
                {form.formState.errors.taxCertificate.message}
              </p>
            )}
          </div>

          <div className="space-y-1">
            <Input
              label="Bank Statement"
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={(e) => {
                const file = e.target.files?.[0];
                form.setValue("bankStatement", file ? file.name : "");
              }}
            />
            <p className="text-sm text-gray-500">
              Upload your recent bank statement (PDF, DOC, DOCX)
            </p>
            {form.formState.errors.bankStatement && (
              <p className="text-sm text-red-500">
                {form.formState.errors.bankStatement.message}
              </p>
            )}
          </div>

          <div className="flex justify-between pt-4">
            <Button type="button" variant="outline" onClick={onPrevious}>
              Previous
            </Button>
            <Button type="submit" variant="brand">
              Next
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
