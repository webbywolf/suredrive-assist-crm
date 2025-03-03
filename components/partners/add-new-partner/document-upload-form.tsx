"use client"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import type { StepComponentProps } from "@/components/multi-step-form/types"
import type { documentSchema } from "./types"

export function DocumentUploadForm({
  form,
  onNext,
  onPrevious,
  isLastStep,
}: StepComponentProps<typeof documentSchema>) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-medium lg:pb-2">Upload Documents</h2>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onNext)} className="space-y-4">
          <FormField
            control={form.control}
            name="businessRegistration"
            render={({ field: { value, onChange, ...field } }) => (
              <FormItem>
                <FormLabel>Business Registration</FormLabel>
                <FormControl>
                  <Input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={(e) => {
                      const file = e.target.files?.[0]
                      onChange(file ? file.name : "")
                    }}
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Upload your business registration certificate (PDF, DOC, DOCX)
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="taxCertificate"
            render={({ field: { value, onChange, ...field } }) => (
              <FormItem>
                <FormLabel>Tax Certificate</FormLabel>
                <FormControl>
                  <Input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={(e) => {
                      const file = e.target.files?.[0]
                      onChange(file ? file.name : "")
                    }}
                    {...field}
                  />
                </FormControl>
                <FormDescription>Upload your tax certificate (PDF, DOC, DOCX)</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="bankStatement"
            render={({ field: { value, onChange, ...field } }) => (
              <FormItem>
                <FormLabel>Bank Statement</FormLabel>
                <FormControl>
                  <Input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={(e) => {
                      const file = e.target.files?.[0]
                      onChange(file ? file.name : "")
                    }}
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Upload your recent bank statement (PDF, DOC, DOCX)
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

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
