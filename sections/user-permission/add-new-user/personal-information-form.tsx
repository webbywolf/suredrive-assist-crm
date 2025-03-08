"use client"

import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { DatePicker } from "@/components/ui/date-picker"
import type { StepComponentProps } from "@/components/multi-step-form/types"
import { Input } from "@/components/ui/my-custom"

const personalInfoSchema = z.object({
  // firstName: z.string().min(2, { message: "First name must be at least 2 characters." }),
  // lastName: z.string().min(2, { message: "Last name must be at least 2 characters." }),
  // dateOfBirth: z.date({ required_error: "Date of birth is required." }),
  // gender: z.string({ required_error: "Please select a gender." }),
  // contactNumber: z.string().min(10, { message: "Contact number must be at least 10 digits." }),
  // email: z.string().email({ message: "Please enter a valid email address." }),
  // address: z.string().min(5, { message: "Address must be at least 5 characters." }),
})

export type PersonalInfoSchema = z.infer<typeof personalInfoSchema>
export const personalInfoFormSchema = personalInfoSchema

export function PersonalInformationForm({
  form,
  onNext,
  isLastStep,
}: StepComponentProps<typeof personalInfoSchema>) {
  // Get form values and errors
  const {
    register,
    formState: { errors },
    watch,
    setValue,
    handleSubmit,
  } = form

  // Handle file input
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    setValue("image", file ? file.name : "")
  }

  return (
    <div className="space-y-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onNext)} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="First Name"
              placeholder="Enter Name"
              {...register("name")}
              className={errors.name ? "border-red-500" : ""}
            />
            <Input
              label="Last Name"
              placeholder="Sharma"
              {...register("lastName")}
              className={errors.lastName ? "border-red-500" : ""}
            />
          </div>

          <Input
            label="Upload Image"
            type="file"
            accept=".png,.jpg,.jpeg"
            onChange={handleFileChange}
            className={errors.image ? "border-red-500" : ""}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-[14px] capitalize font-medium text-gray-700 mb-[6px] block">
                Date of Birth
              </label>
              <DatePicker
                date={watch("dateOfBirth")}
                setDate={(date) => setValue("dateOfBirth", date)}
                placeholder="Select Date"
              />
              {errors.dateOfBirth && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.dateOfBirth.message?.toString()}
                </p>
              )}
            </div>

            <div>
              <label className="text-[14px] capitalize font-medium text-gray-700 mb-[6px] block">
                Gender
              </label>
              <Select
                onValueChange={(value) => setValue("gender", value)}
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
                <p className="text-sm text-red-500 mt-1">{errors.gender.message?.toString()}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="Contact Number"
              placeholder="+91 9876543210"
              {...register("contactNumber")}
              className={errors.contactNumber ? "border-red-500" : ""}
            />
            <Input
              label="Personal Email"
              placeholder="abhi.sharma@example.com"
              {...register("email")}
              className={errors.email ? "border-red-500" : ""}
            />
          </div>

          <div>
            <label className="text-[14px] capitalize font-medium text-gray-700 mb-[6px] block">
              Full Address
            </label>
            <Textarea
              placeholder="Enter your full address"
              {...register("address")}
              className={errors.address ? "border-red-500" : ""}
            />
            {errors.address && (
              <p className="text-sm text-red-500 mt-1">{errors.address.message?.toString()}</p>
            )}
          </div>

          <div>
            <p className="text-lg font-medium pb-3">Emergency Contact</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="Person Name"
                placeholder="Ashok Kumar"
                {...register("emergencyName")}
                className={errors.emergencyName ? "border-red-500" : ""}
              />
              <Input
                label="Contact Number"
                placeholder="+91 9876543210"
                {...register("emergencyNumber")}
                className={errors.emergencyNumber ? "border-red-500" : ""}
              />
              <Input
                label="Relationship"
                placeholder="Father"
                {...register("emergencyRelation")}
                className={errors.emergencyRelation ? "border-red-500" : ""}
              />
            </div>
          </div>
        </form>
      </Form>
    </div>
  )
}
