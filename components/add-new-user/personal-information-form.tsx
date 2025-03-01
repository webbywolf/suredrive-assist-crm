"use client"

import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
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

const personalInfoSchema = z.object({
  //   firstName: z.string().min(2, { message: "First name must be at least 2 characters." }),
  //   lastName: z.string().min(2, { message: "Last name must be at least 2 characters." }),
  //   dateOfBirth: z.date({ required_error: "Date of birth is required." }),
  //   gender: z.string({ required_error: "Please select a gender." }),
  //   contactNumber: z.string().min(10, { message: "Contact number must be at least 10 digits." }),
  //   email: z.string().email({ message: "Please enter a valid email address." }),
  //   address: z.string().min(5, { message: "Address must be at least 5 characters." }),
})

// export type PersonalInfoSchema = z.infer<typeof personalInfoSchema>
export const personalInfoFormSchema = personalInfoSchema

export function PersonalInformationForm({
  form,
  onNext,
  isLastStep,
}: StepComponentProps<typeof personalInfoSchema>) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold">Personal Information</h2>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onNext)} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input placeholder="abhi" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input placeholder="sharma" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="dateOfBirth"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Date of Birth</FormLabel>
                  <FormControl>
                    <DatePicker
                      date={field.value}
                      setDate={field.onChange}
                      placeholder="Select Date"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="gender"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Gender</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="cursor-pointer">
                        <SelectValue placeholder="Select a Gender" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                      <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="contactNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Contact Number</FormLabel>
                  <FormControl>
                    <Input placeholder="+91 9876543210" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Personal Email</FormLabel>
                  <FormControl>
                    <Input placeholder="abhi.sharma@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Address</FormLabel>
                <FormControl>
                  <Textarea placeholder="Enter your full address" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className=" pt-4">
            <Button type="submit" variant="brand">
              Next
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}
