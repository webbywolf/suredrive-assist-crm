import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input, ErrorLabel } from "@/components/ui/customInput";
import type { StepComponentProps } from "@/components/multi-step-form/types";
// import type { bankDetailsSchema } from "../../../types/types/partner.types"

export function StepThree({
  form,
  onNext,
  onPrevious,
  isLastStep,
}: StepComponentProps<any>) {
  console.log("StepThree", form.formState.errors);
  return (
    <div className="space-y-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onNext)} className="space-y-4">
          <Input
            label="Account Holder Name"
            placeholder="Enter account holder name"
            error={form.formState.errors.accountHolderName?.message as string}
            {...form.register("accountHolderName")}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="Account Number"
              placeholder="Enter account number"
              error={form.formState.errors.accountNumber?.message as string}
              {...form.register("accountNumber")}
            />

            <Input
              label="Bank Name"
              placeholder="Enter bank name"
              error={form.formState.errors.bankName?.message as string}
              {...form.register("bankName")}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="Branch Name"
              placeholder="Enter branch name"
              error={form.formState.errors.branchName?.message as string}
              {...form.register("branchName")}
            />

            <Input
              label="IFSC Code"
              placeholder="Enter IFSC code"
              error={form.formState.errors.ifscCode?.message as string}
              {...form.register("ifscCode")}
            />
          </div>
        </form>
      </Form>
    </div>
  );
}
