"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import type { StepComponentProps } from "@/components/multi-step-form/types";
import { Input } from "@/components/ui/customInput";
import { legalDetailsSchema } from "@/types/onboarding.types";

export function LegalDetailsForm({
  form,
  onNext,
  onPrevious,
  isLastStep,
}: StepComponentProps<typeof legalDetailsSchema>) {
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onNext)} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Pan Number"
            placeholder="Enter Pan number"
            {...form.register("pan")}
            error={form.formState.errors.pan?.message}
          />
          <Input
            label="Aadhaar Number"
            placeholder="Enter Aadhaar number"
            {...form.register("aadharNumber")}
            error={form.formState.errors.aadharNumber?.message}
          />
        </div>
        <div>
          <p className="text-lg pb-3 ">Bank Details </p>
          <div className="grid grid-cols-1 pb-4">
            <Input
              label="Account Holder Name"
              placeholder="Enter Account Holder Name"
              {...form.register("accountHolderName")}
              error={form.formState.errors.accountHolderName?.message}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="Account Number"
              placeholder="Enter Account number"
              {...form.register("accountNumber")}
              error={form.formState.errors.accountNumber?.message}
            />
            <Input
              label="Bank Name"
              placeholder="Enter Bank Name"
              {...form.register("bankName")}
              error={form.formState.errors.bankName?.message}
            />
            <Input
              label="IFSC Code"
              placeholder="Enter IFSC Code"
              {...form.register("ifscCode")}
              error={form.formState.errors.ifscCode?.message}
            />
            <div>
              <Input
                label="Upload Cancelled Cheque"
                type="file"
                accept=".png,.jpg,.jpeg"
                {...form.register("cancelledCheque")}
                error={form.formState.errors.cancelledCheque?.message}
                onChange={(e) => {
                  const file = e.target.files?.[0] || null;
                  form.setValue("cancelledCheque", file);
                }}
              />
            </div>
          </div>
        </div>
        <div>
          <p className="text-lg pb-3 ">PF/ESI Details </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="UAN Number"
              placeholder="Enter UAN number"
              {...form.register("uanNumber")}
              error={form.formState.errors.uanNumber?.message}
            />
            <div>
              <Input
                label="Upload UAN Card"
                type="file"
                accept=".png,.jpg,.jpeg"
                {...form.register("uanCard")}
                error={form.formState.errors.uanCard?.message}
                onChange={(e) => {
                  const file = e.target.files?.[0] || null;
                  form.setValue("uanCard", file);
                }}
              />
            </div>
          </div>
        </div>
      </form>
    </Form>
  );
}
