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
import type { StepComponentProps } from "@/components/multi-step-form/types";
import type { workExperienceSchema } from "@/types/onboarding.types";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";

type Experience = {
  id: "fresher" | "experienced" | "intern";
  label: string;
};

const experience: Experience[] = [
  { id: "fresher", label: "Fresher" },
  { id: "experienced", label: "Experienced" },
  { id: "intern", label: "Intern" },
];

export function WorkExperienceForm({
  form,
  onNext,
  onPrevious,
  isLastStep,
}: StepComponentProps<typeof workExperienceSchema>) {
  const isExperienced = form.watch("experienceType") === experience[1].id;
  const hasReference = form.watch("hasReference");

  console.log(form.formState.errors);
  return (
    <div className="space-y-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onNext)} className="space-y-4">
          {/* Experience Type Selection */}
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
                      checked={form.watch("experienceType") === item.id}
                      onCheckedChange={() => {
                        form.setValue("experienceType", item.id);
                      }}
                    />
                    <label>{item.label}</label>
                  </div>
                ))}
              </div>
              <ErrorLabel>
                {form.formState.errors.experienceType?.message}
              </ErrorLabel>
            </div>
          </div>

          {/* Resume and Relieving Letter Upload */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              type="file"
              accept=".pdf"
              label="Upload Resume"
              error={form.formState.errors.resume?.message}
              onChange={(e) => {
                const file = e.target.files?.[0] || null;
                form.setValue("resume", file);
              }}
            />

            {isExperienced && (
              <Input
                type="file"
                accept=".pdf"
                label="Upload Relieving Letter"
                error={form.formState.errors.relievingLetter?.message}
                onChange={(e) => {
                  const file = e.target.files?.[0] || null;
                  form.setValue("relievingLetter", file);
                }}
              />
            )}
          </div>

          {/* Experience Details Section */}
          {isExperienced && (
            <div>
              <p className="text-lg pb-3">Previous Experience</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  type="number"
                  label="Notice Period (Days)"
                  placeholder="Enter Notice Period"
                  error={form.formState.errors.noticePeriod?.message}
                  {...form.register("noticePeriod", {
                    valueAsNumber: true,
                  })}
                />
                <Input
                  label="Role / Designation"
                  placeholder="Enter Role / Designation Name"
                  error={form.formState.errors.role?.message}
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
                    {...form.register("experienceSummary")}
                  />
                  <ErrorLabel>
                    {form.formState.errors.experienceSummary?.message}
                  </ErrorLabel>
                </div>
              </div>
            </div>
          )}

          {/* Reference Section */}
          <div>
            <p className="text-lg pb-3">Reference</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <Checkbox
                  className="border-gray-600"
                  checked={hasReference}
                  onCheckedChange={(checked) => {
                    form.setValue("hasReference", Boolean(checked));
                  }}
                />
                <label>Have Reference</label>
              </div>
            </div>

            {hasReference && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                <Input
                  label="Person Name"
                  placeholder="Enter Reference Name"
                  error={form.formState.errors.referenceName?.message}
                  {...form.register("referenceName")}
                />

                <Input
                  type="file"
                  accept=".png,.jpg,.jpeg,.pdf"
                  label="Upload Reference Letter"
                  error={form.formState.errors.referenceLetter?.message}
                  onChange={(e) => {
                    const file = e.target.files?.[0] || null;
                    form.setValue("referenceLetter", file);
                  }}
                />
              </div>
            )}
          </div>
        </form>
      </Form>
    </div>
  );
}
