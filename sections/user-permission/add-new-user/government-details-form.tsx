"use client";

import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/my-custom";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { StepComponentProps } from "@/components/multi-step-form/types";

const governmentDetailsSchema = z.object({
  idType: z.string({ required_error: "Please select an ID type." }),
  idNumber: z
    .string()
    .min(5, { message: "ID number must be at least 5 characters." }),
  taxId: z
    .string()
    .min(5, { message: "Tax ID must be at least 5 characters." }),
  nationality: z
    .string()
    .min(2, { message: "Nationality must be at least 2 characters." }),
});

export type GovernmentDetailsSchema = z.infer<typeof governmentDetailsSchema>;
export const governmentDetailsFormSchema = governmentDetailsSchema;

export function GovernmentDetailsForm({
  form,
  onNext,
  onPrevious,
  isLastStep,
}: StepComponentProps<typeof governmentDetailsSchema>) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold">Government Details</h2>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onNext)} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-[14px] capitalize font-medium text-gray-700 mb-[6px] block">
                ID Type
              </label>
              <Select
                onValueChange={(value) => form.setValue("idType", value)}
                defaultValue={form.watch("idType")}
              >
                <SelectTrigger className="cursor-pointer">
                  <SelectValue placeholder="Select ID Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="aadhar">Adhaar Card</SelectItem>
                  <SelectItem value="passport">Passport</SelectItem>
                  <SelectItem value="driving-license">
                    Driving License
                  </SelectItem>
                  <SelectItem value="national-id">National ID</SelectItem>
                  <SelectItem value="voter-id">Voter ID</SelectItem>
                </SelectContent>
              </Select>
              {form.formState.errors.idType && (
                <p className="text-sm text-red-500 mt-1">
                  {form.formState.errors.idType.message?.toString()}
                </p>
              )}
            </div>

            <Input
              label="ID Number"
              placeholder="Enter ID number"
              {...form.register("idNumber")}
              className={form.formState.errors.idNumber ? "border-red-500" : ""}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="Tax ID"
              placeholder="Enter Tax ID"
              {...form.register("taxId")}
              className={form.formState.errors.taxId ? "border-red-500" : ""}
            />

            <Input
              label="Nationality"
              placeholder="Enter nationality"
              {...form.register("nationality")}
              className={
                form.formState.errors.nationality ? "border-red-500" : ""
              }
            />
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
