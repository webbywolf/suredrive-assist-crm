import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/my-custom";
import { DatePicker } from "@/components/ui/date-picker";
import type { StepComponentProps } from "@/components/multi-step-form/types";
import type { governmentDetailsSchema } from "../../../types/types/partner.types";

export function GovernmentDetailsForm({
  form,
  onNext,
  onPrevious,
  isLastStep,
}: StepComponentProps<typeof governmentDetailsSchema>) {
  return (
    <div className="space-y-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onNext)} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="Registration Number"
              placeholder="Enter registration number"
              {...form.register("registrationNumber")}
            />

            <Input
              label="Tax ID"
              placeholder="Enter tax ID"
              {...form.register("taxId")}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="License Number"
              placeholder="Enter license number"
              {...form.register("licenseNumber")}
            />

            <div className="space-y-2">
              <label className="text-[14px] capitalize font-medium text-gray-700">
                Incorporation Date
              </label>
              <DatePicker
                date={form.watch("incorporationDate")}
                setDate={(date) => form.setValue("incorporationDate", date)}
                placeholder="Select date"
              />
              {form.formState.errors.incorporationDate && (
                <p className="text-sm text-red-500 mt-1">
                  {form.formState.errors.incorporationDate.message}
                </p>
              )}
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
}
