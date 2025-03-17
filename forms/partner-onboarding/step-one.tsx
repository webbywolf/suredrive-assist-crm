import type { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { ErrorLabel, Input } from "@/components/ui/customInput";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { StepComponentProps } from "@/components/multi-step-form/types";
import type { companyInfoSchema } from "@/types/partner.types";

type FormData = z.infer<typeof companyInfoSchema>;

const businessTypes = [
  { value: "sole-proprietorship", label: "Sole Proprietorship" },
  { value: "partnership", label: "Partnership" },
  { value: "corporation", label: "Corporation" },
  { value: "llc", label: "Limited Liability Company" },
  { value: "non-profit", label: "Non-Profit Organization" },
];

const titles = [
  { value: "ceo", label: "CEO" },
  { value: "cto", label: "CTO" },
  { value: "cfo", label: "CFO" },
  { value: "president", label: "President" },
  { value: "director", label: "Director" },
  { value: "manager", label: "Manager" },
];

export function StepOne({
  form,
  onNext,
  isLastStep,
}: StepComponentProps<typeof companyInfoSchema>) {
  return (
    <div className="space-y-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onNext)} className="space-y-4">
          <Input
            label="Company Name"
            placeholder="Enter company name"
            {...form.register("companyName")}
            error={form.formState.errors.companyName?.message}
          />

          <div className="">
            <label className="text-[14px] capitalize font-medium text-gray-700 ">
              Business Type
            </label>
            <Select
              onValueChange={(value) => form.setValue("businessType", value)}
              value={form.watch("businessType")}
            >
              <SelectTrigger className="mt-2">
                <SelectValue placeholder="Select business type" />
              </SelectTrigger>
              <SelectContent>
                {businessTypes.map((type) => (
                  <SelectItem key={type.value} value={type.value}>
                    {type.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <ErrorLabel>
              {form.formState.errors.businessType?.message}
            </ErrorLabel>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="Full Name"
              placeholder="Enter full name"
              {...form.register("fullName")}
              error={form.formState.errors.fullName?.message}
            />

            <div className="space-y-2">
              <label className="text-[14px] capitalize font-medium text-gray-700 !mb-2">
                Title
              </label>
              <Select
                onValueChange={(value) => form.setValue("title", value)}
                value={form.watch("title")}
              >
                <SelectTrigger className="mb-0 mt-1 h-12">
                  <SelectValue placeholder="Select title" />
                </SelectTrigger>
                <SelectContent>
                  {titles.map((title) => (
                    <SelectItem key={title.value} value={title.value}>
                      {title.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <ErrorLabel>{form.formState.errors.title?.message}</ErrorLabel>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="Contact Number"
              placeholder="7984881650"
              {...form.register("contactNumber")}
              error={form.formState.errors.contactNumber?.message}
            />

            <Input
              label="Email"
              type="email"
              placeholder="company@example.com"
              {...form.register("email")}
              error={form.formState.errors.email?.message}
            />
          </div>

          <div className="space-y-2">
            <label className="text-[14px] capitalize font-medium text-gray-700">
              Full Address
            </label>
            <Textarea
              placeholder="Enter company's full address"
              className="min-h-[100px] mt-1"
              {...form.register("fullAddress")}
            />
            <ErrorLabel>
              {form.formState.errors.fullAddress?.message}
            </ErrorLabel>
          </div>
        </form>
      </Form>
    </div>
  );
}
