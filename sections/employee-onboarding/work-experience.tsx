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
import { Input } from "@/components/ui/my-custom";
import type { StepComponentProps } from "@/components/multi-step-form/types";
import type { workExperienceSchema } from "@/types/onboarding.types";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";

const experience = [
  { id: 1, label: "Fresher" },
  { id: 2, label: "Experienced" },
  { id: 3, label: "Intern" },
];

export function WorkExperienceForm({
  form,
  onNext,
  onPrevious,
  isLastStep,
}: StepComponentProps<typeof workExperienceSchema>) {
  const isExperienced = Number(form.watch("experience")) === 2;
  return (
    <div className="space-y-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onNext)} className="space-y-4">
          <div className="flex gap-4">
            <div className="">
              <label className="text-[14px] capitalize font-medium text-gray-700 mb-[6px] block">
                Experience Details
              </label>
              <div className="flex gap-4 justify-between pl-1">
                {experience.map((item) => (
                  <div key={item.id} className="flex items-center gap-2">
                    <Checkbox
                      className="border-gray-600"
                      checked={form.watch("experience") === item.id}
                      onCheckedChange={(checked) => {
                        form.setValue(
                          "experience",
                          checked ? item.id : undefined,
                        );
                      }}
                    />
                    <label>{item.label}</label>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              type="file"
              accept=".pdf"
              label="Upload Resume"
              onChange={(e) => {
                const file = e.target.files?.[0];
                form.setValue("image", file ? file.name : "");
              }}
            />

            {!!isExperienced && (
              <Input
                type="file"
                accept=".pdf"
                label="Upload Relieving Letter"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  form.setValue("image", file ? file.name : "");
                }}
              />
            )}
          </div>

          {!!isExperienced && (
            <div>
              <p className="text-lg pb-3">Previous Experience</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  label="Notice Period (Days)"
                  placeholder="Enter Notice Period"
                  {...form.register("noticePeriod")}
                />
                <Input
                  label="Role / Designation"
                  placeholder="Enter Role / Designation Name"
                  {...form.register("role")}
                />
              </div>

              <div className="grid grid-cols-1 pt-4">
                <div>
                  <label className="text-[14px] capitalize font-medium text-gray-700 mb-[6px] block">
                    Experience Summary
                  </label>
                  <Textarea
                    placeholder="Enter Experience Summary, Relevant Skills"
                    {...form.register("role")}
                  />
                </div>
              </div>
            </div>
          )}

          <div>
            <p className="text-lg pb-3">Reference</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <Checkbox
                  className="border-gray-600"
                  {...form.register("reference")}
                />
                <label>Have Reference</label>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
              <Input
                label="Person Name"
                placeholder="Enter Reference Name"
                {...form.register("aadhar")}
              />

              <Input
                type="file"
                accept=".png,.jpg,.jpeg"
                label="Upload Reference Letter"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  form.setValue("refLetter", file ? file.name : "");
                }}
              />
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
}
