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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import type { StepComponentProps } from "@/components/multi-step-form/types"

const governmentDetailsSchema = z.object({
  //   idType: z.string({ required_error: "Please select an ID type." }),
  //   idNumber: z.string().min(5, { message: "ID number must be at least 5 characters." }),
  //   taxId: z.string().min(5, { message: "Tax ID must be at least 5 characters." }),
  //   nationality: z.string().min(2, { message: "Nationality must be at least 2 characters." }),
})

export type GovernmentDetailsSchema = z.infer<typeof governmentDetailsSchema>
export const governmentDetailsFormSchema = governmentDetailsSchema

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
            <FormField
              control={form.control}
              name="idType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>ID Type</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="cursor-pointer">
                        <SelectValue placeholder="Select ID Type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="aadhar">Adhaar Card</SelectItem>
                      <SelectItem value="passport">Passport</SelectItem>
                      <SelectItem value="driving-license">Driving License</SelectItem>
                      <SelectItem value="national-id">National ID</SelectItem>
                      <SelectItem value="voter-id">Voter ID</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="idNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>ID Number</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter ID number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="taxId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tax ID</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter Tax ID" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="nationality"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nationality</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter nationality" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
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
  )
}
