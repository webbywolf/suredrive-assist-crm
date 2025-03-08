"use client";

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
import { Input } from "@/components/ui/my-custom";
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

export function CompanyInfoForm({
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
          />

          {/* Keep the original Select component for business type */}
          <div className="space-y-2">
            <label className="text-[14px] capitalize font-medium text-gray-700">
              Business Type
            </label>
            <Select
              onValueChange={(value) => form.setValue("businessType", value)}
              value={form.watch("businessType")}
            >
              <SelectTrigger>
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
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="Full Name"
              placeholder="Enter full name"
              {...form.register("fullName")}
            />

            {/* Keep the original Select component for title */}
            <div className="space-y-2">
              <label className="text-[14px] capitalize font-medium text-gray-700">
                Title
              </label>
              <Select
                onValueChange={(value) => form.setValue("title", value)}
                value={form.watch("title")}
              >
                <SelectTrigger>
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
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="Contact Number"
              placeholder="+1 (555) 000-0000"
              {...form.register("contactNumber")}
            />

            <Input
              label="Email"
              type="email"
              placeholder="company@example.com"
              {...form.register("email")}
            />
          </div>

          <div className="space-y-2">
            <label className="text-[14px] capitalize font-medium text-gray-700">
              Full Address
            </label>
            <Textarea
              placeholder="Enter company's full address"
              className="min-h-[100px]"
              {...form.register("fullAddress")}
            />
          </div>
        </form>
      </Form>
    </div>
  );
}
