"use client"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import type { StepComponentProps } from "@/components/multi-step-form/types"
import { Input } from "@/components/ui/customInput"
import { legalDetailsSchema } from "@/types/onboarding.types"

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
            className={form.formState.errors.pan ? "border-red-500" : ""}
          />
          <Input
            label="Aadhaar Number"
            placeholder="Enter Aadhaar number"
            // {...form.register("aadhar")}
            // className={form.formState.errors.aadhar ? "border-red-500" : ""}
          />
        </div>
        <div>
          <p className="text-lg pb-3 ">Bank Details </p>
          <div className="grid grid-cols-1 pb-4">
            <Input
              label="Account Holder Name"
              placeholder="Enter Account Holder Name"
              // {...form.register("accountHolderName")}
              // className={form.formState.errors.accountHolderName ? "border-red-500" : ""}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="Account Number"
              placeholder="Enter Account number"
              {...form.register("accountNumber")}
              className={form.formState.errors.accountNumber ? "border-red-500" : ""}
            />
            <Input
              label="Bank Name"
              placeholder="Enter Bank Name"
              // {...form.register("bankName")}
              // className={form.formState.errors.bankName ? "border-red-500" : ""}
            />
            <Input
              label="IFSC Code"
              placeholder="Enter IFSC Code"
              // {...form.register("ifscCode")}
              // className={form.formState.errors.ifscCode ? "border-red-500" : ""}
            />
            <Input
              label="Upload Cancelled Cheque"
              type="file"
              accept=".png,.jpg,.jpeg"
              onChange={(e) => {
                const file = e.target.files?.[0]
                // form.setValue("cancelledCheque", file ? file.name : "")
              }}
              // className={form.formState.errors.cancelledCheque ? "border-red-500" : ""}
            />
          </div>
        </div>
        <div>
          <p className="text-lg pb-3 ">PF/ESI Details </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="UAN Number"
              placeholder="Enter UAN number"
              // {...form.register("uanNumber")}
              // className={form.formState.errors.uanNumber ? "border-red-500" : ""}
            />
            <Input
              label="Upload UAN Card"
              type="file"
              accept=".png,.jpg,.jpeg"
              onChange={(e) => {
                const file = e.target.files?.[0]
                // form.setValue("uanCard", file ? file.name : "")
              }}
              // className={form.formState.errors.uanCard ? "border-red-500" : ""}
            />
          </div>
        </div>
      </form>
    </Form>
  )
}
