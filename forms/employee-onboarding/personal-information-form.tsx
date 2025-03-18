"use client";

import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DatePicker } from "@/components/ui/date-picker";
import type { StepComponentProps } from "@/components/multi-step-form/types";
import type { personalInfoSchema } from "@/types/onboarding.types";
import { ErrorLabel, Input } from "@/components/ui/customInput";
import dayjs, { Dayjs } from "dayjs";

export function PersonalInformationForm({
  form,
  onNext,
  isLastStep,
  onPrevious,
}: StepComponentProps<typeof personalInfoSchema>) {
  const {
    register,
    formState: { errors },
    getValues,
    setValue,
    watch,
    trigger,
  } = form;

  // console.log("Form Values:", getValues());
  // console.log("Form Errors:", errors);
  
  const handleDateChange = (date: Date | undefined) => {
    if (date) {
      setValue("dateOfBirth", date);
      trigger("dateOfBirth");
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (
        file.size <= 5000000 &&
        ["image/jpeg", "image/jpg", "image/png"].includes(file.type)
      ) {
        setValue("image", file);
      } else {
        // Handle invalid file
        e.target.value = "";
        alert("Please upload an image file (JPG/PNG) less than 5MB");
      }
    }
  };

  return (
    <div className="space-y-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onNext)} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="First Name"
              placeholder="Enter Name"
              required
              {...register("firstName")}
              autoFocus={true}
              error={errors.firstName?.message}
            />
            <Input
              label="Last Name"
              placeholder="Sharma"
              required
              {...register("lastName")}
              error={errors.lastName?.message}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <DatePicker
                name="dateOfBirth"
                label="Date of Birth"
                defaultValue={watch("dateOfBirth") ? dayjs(watch("dateOfBirth")).toDate() : new Date() }
                onChange={handleDateChange}
              />

              {errors.dateOfBirth && (
                <ErrorLabel> {errors.dateOfBirth?.message} </ErrorLabel>
              )}
            </div>

            <div>
              <label className="text-[14px] capitalize font-medium text-gray-700 mb-[6px] block">
                Gender
              </label>
              <Select
                onValueChange={(value: "male" | "female" | "other") =>
                  setValue("gender", value)
                }
                defaultValue={watch("gender")}
              >
                <SelectTrigger className="cursor-pointer">
                  <SelectValue placeholder="Select a Gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
              {errors.gender && (
                <ErrorLabel>{errors.gender.message?.toString()}</ErrorLabel>
              )}
            </div>
          </div>

          <Input
            label="Upload Image"
            type="file"
            accept=".png,.jpg,.jpeg"
            required
            onChange={handleFileChange}
            error={errors.image?.message}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="Contact Number"
              placeholder="9876543210"
              required
              {...register("contactNumber")}
              error={errors.contactNumber?.message}
            />
            <Input
              label="Personal Email"
              placeholder="abhi.sharma@example.com"
              required
              {...register("email")}
              error={errors.email?.message}
            />
          </div>

          <div>
            <label className="text-[14px] capitalize font-medium text-gray-700 mb-[6px] block">
              Full Address
            </label>
            <Textarea
              placeholder="Enter your full address"
              required
              {...register("address")}
              className="bg-white"
            />
            {errors.address && (
              <ErrorLabel>{errors.address.message?.toString()}</ErrorLabel>
            )}
          </div>

          <div className="border-t border-gray-200 pt-4">
            <p className="text-base font-medium pb-3">Emergency Contact</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="Person Name"
                placeholder="Ashok Kumar"
                required
                {...register("emergencyName")}
                error={errors.emergencyName?.message}
              />
              <Input
                label="Contact Number"
                placeholder="9876543210"
                required
                {...register("emergencyNumber")}
                error={errors.emergencyNumber?.message}
              />
              <Input
                label="Relationship"
                placeholder="Father"
                required
                {...register("emergencyRelation")}
                error={errors.emergencyRelation?.message}
              />
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
}
