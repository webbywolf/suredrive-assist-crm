import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Input, ErrorLabel } from "@/components/ui/customInput";
import { DatePicker } from "@/components/ui/date-picker";
import type { StepComponentProps } from "@/components/multi-step-form/types";
import dayjs, { Dayjs } from "dayjs";

export function StepTwo({
  form,
  onNext,
  onPrevious,
  isLastStep,
}: StepComponentProps<any>) {
  const handleDateChange = (date: Dayjs | null) => {
    if (date) {
      form.setValue("incorporationDate", date.toDate());
    }
  };
  return (
    <div className="space-y-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onNext)} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="Registration Number"
              placeholder="Enter registration number"
              {...form.register("registrationNumber")}
              error={form.formState.errors.registrationNumber?.message?.toString()}
            />

            <Input
              label="GST Number"
              placeholder="Enter Gst number"
              {...form.register("gstNumber")}
              error={form.formState.errors.gstNumber?.message?.toString()}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="License Number"
              placeholder="Enter license number"
              {...form.register("licenseNumber")}
              error={form.formState.errors.licenseNumber?.message?.toString()}
            />

            <div className="space-y-2">
              <DatePicker
                name="incorporationDate"
                label=" Incorporation Date"
                value={
                  form.watch("incorporationDate")
                    ? dayjs(form.watch("incorporationDate"))
                    : null
                }
                onChange={handleDateChange}
              />
              {form.formState.errors.incorporationDate && (
                <ErrorLabel>
                  {form.formState.errors.incorporationDate.message?.toString()}
                </ErrorLabel>
              )}
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
}
