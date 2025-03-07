"use client"
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
import { DatePicker } from "@/components/ui/date-picker"
import type { StepComponentProps } from "@/components/multi-step-form/types"
import type { workExperienceSchema } from "./types"
import { Checkbox } from "../ui/checkbox"
import { Textarea } from "../ui/textarea"

const experience = [
  { id: 1, label: "Fresher" },
  { id: 2, label: "Experienced" },
  { id: 3, label: "Intern" },
]

export function WorkExperienceForm({
  form,
  onNext,
  onPrevious,
  isLastStep,
}: StepComponentProps<typeof workExperienceSchema>) {
  const isExperienced = Number(form.watch("experience")) === 2
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-medium lg:pb-2">Work Experience</h2>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onNext)} className="space-y-4">
          <div className="flex gap-4">
            <div className="">
              <FormField
                control={form.control}
                name="experience"
                render={() => (
                  <FormItem>
                    <FormLabel className="">Experinece Details</FormLabel>
                    <div className="flex gap-4 justify-between pl-1">
                      {experience.map((item) => (
                        <FormField
                          key={item.id}
                          control={form.control}
                          name="experience"
                          render={({ field }) => {
                            return (
                              <FormItem key={item.id} className="flex flex-row items-center">
                                <FormControl>
                                  <Checkbox
                                    className="border-gray-600"
                                    checked={field.value === item.id}
                                    onCheckedChange={(checked) => {
                                      return checked
                                        ? field.onChange(item.id)
                                        : field.onChange(field.value !== item.id)
                                    }}
                                  />
                                </FormControl>
                                <FormLabel className="!pb-0">{item.label}</FormLabel>
                              </FormItem>
                            )
                          }}
                        />
                      ))}
                    </div>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="image"
              render={({ field: { value, onChange, ...field } }) => (
                <FormItem className="cursor-pointer ">
                  <FormLabel>Upload Resume </FormLabel>
                  <FormControl>
                    <Input
                      type="file"
                      accept=".pdf"
                      onChange={(e) => {
                        const file = e.target.files?.[0]
                        onChange(file ? file.name : "")
                      }}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {!!isExperienced && (
              <FormField
                control={form.control}
                name="image"
                render={({ field: { value, onChange, ...field } }) => (
                  <FormItem className="cursor-pointer ">
                    <FormLabel>Upload Relieving Letter </FormLabel>
                    <FormControl>
                      <Input
                        type="file"
                        accept=".pdf"
                        onChange={(e) => {
                          const file = e.target.files?.[0]
                          onChange(file ? file.name : "")
                        }}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
          </div>
          {!!isExperienced && (
            <div>
              <div>
                <p className="text-lg pb-3 ">Previous Experience </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="noticePeriod"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Notice Period (Days)</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter Notice Period" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="role"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Role / Designation</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter Role / Designation Name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 pt-4 ">
                <FormField
                  control={form.control}
                  name="role"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Experience Summary</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Enter Experience Summary , Relavant Skills"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
          )}
          <div>
            <p className="text-lg pb-3 ">Reference </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="reference"
                render={({ field }) => {
                  return (
                    <FormItem className="flex gap-4 items-start">
                      <FormControl>
                        <Checkbox
                          className="border-gray-600"
                          // checked={field.value?.includes(item.id)}
                          // onCheckedChange={(checked) => {
                          //   return checked
                          //     ? field.onChange([field.value, item.id])
                          //     : field.onChange(
                          //         field.value?.filter((value) => value !== item.id)
                          //       )
                          // }}
                        />
                      </FormControl>
                      <FormLabel className="">Have Reference</FormLabel>
                    </FormItem>
                  )
                }}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
              <FormField
                control={form.control}
                name="aadhar"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Person Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter Reference Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="refLetter"
                render={({ field: { value, onChange, ...field } }) => (
                  <FormItem className="cursor-pointer ">
                    <FormLabel>Upload Reference Letter</FormLabel>
                    <FormControl>
                      <Input
                        type="file"
                        accept=".png,.jpg,.jpeg"
                        onChange={(e) => {
                          const file = e.target.files?.[0]
                          onChange(file ? file.name : "")
                        }}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
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
