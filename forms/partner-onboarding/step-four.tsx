import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/customInput";
import type { StepComponentProps } from "@/components/multi-step-form/types";
// import type { documentSchema } from "../../../types/types/partner.types"

export function StepFour({
  form,
  onNext,
  onPrevious,
  isLastStep,
}: StepComponentProps<any>) {
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
                const file = e.target.files?.[0] || null;
                form.setValue("businessRegistration", file);
              }}
              error={form.formState.errors.businessRegistration?.message?.toString()}
            />
            <p className="text-sm text-gray-500">
              Upload your business registration certificate (PDF, DOC, DOCX)
            </p>
          </div>

          <div className="space-y-1">
            <Input
              label="Tax Certificate"
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={(e) => {
                const file = e.target.files?.[0] || null;
                form.setValue("taxRegistration", file);
              }}
              error={form.formState.errors.taxRegistration?.message?.toString()}
            />
            <p className="text-sm text-gray-500">
              Upload your tax certificate (PDF, DOC, DOCX)
            </p>
          </div>

          <div className="space-y-1">
            <Input
              label="Bank Statement"
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={(e) => {
                const file = e.target.files?.[0] || null;
                form.setValue("bankStatement", file);
              }}
              error={form.formState.errors.bankStatement?.message?.toString()}
            />
            <p className="text-sm text-gray-500">
              Upload your recent bank statement (PDF, DOC, DOCX)
            </p>
          </div>
        </form>
      </Form>
    </div>
  );
}
