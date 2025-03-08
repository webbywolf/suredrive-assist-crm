"use client";

import { z } from "zod";
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
import { DatePicker } from "@/components/ui/date-picker";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Checkbox } from "@/components/ui/checkbox";
import { formSchema } from "@/types/service.types";

const services = [
  { index: 0, service_category: "Tire Repair" },
  { index: 1, service_category: "Brake Adjustment" },
  { index: 2, service_category: "Chain Maintenance" },
  { index: 3, service_category: "Gear System Tune-up" },
];

const coverageItems = [
  {
    id: 1,
    label: "Towing",
  },
  {
    id: 2,
    label: "Battery Jump Start",
  },
  {
    id: 3,
    label: "Flat Tire Replacement",
  },
  {
    id: 4,
    label: "Minor Repairs",
  },
  {
    id: 5,
    label: "Key Lockout",
  },
];

const exclusion = [
  { id: 1, label: "Engine Failure due to Negligence" },
  { id: 2, label: "Theft" },
];

export function AddNewService({}) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <div className="space-y-6 lg:pl-16 pt-3 max-w-3xl">
      <div>
        <h2 className="text-xl font-medium lg:pb-2">Personal Information</h2>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="flex flex-col gap-4 ">
            <FormField
              control={form.control}
              name="serviceName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Service Name</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="serviceCategory"
              render={({ field }) => (
                <FormItem className="w-1/2">
                  <FormLabel>Service Category</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="cursor-pointer">
                        <SelectValue placeholder="Select Category" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem
                          key={service.index}
                          value={String(service.index)}
                        >
                          {service.service_category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="">
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Service Description</FormLabel>
                  <FormControl>
                    <Textarea placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Price(INR)</FormLabel>
                  <FormControl>
                    <Input placeholder="Set Price" {...field} type="number" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="duration"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Plan Duration</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="cursor-pointer">
                        <SelectValue placeholder="Set Validity " />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="30d">30 Days</SelectItem>
                      <SelectItem value="60d">60 Days</SelectItem>
                      <SelectItem value="1y">1 year</SelectItem>
                      <Input placeholder="Enter days" {...field} />
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="">
            <FormField
              control={form.control}
              name="coverage"
              render={() => (
                <FormItem>
                  <FormLabel className="">Coverage Details</FormLabel>
                  <div className="flex justify-between pl-1">
                    {coverageItems.map((item) => (
                      <FormField
                        key={item.id}
                        control={form.control}
                        name="coverage"
                        render={({ field }) => {
                          return (
                            <FormItem
                              key={item.id}
                              className="flex flex-row items-center"
                            >
                              <FormControl>
                                <Checkbox
                                  className="border-gray-600"
                                  // checked={field.value?.includes(item.id)}
                                  // onCheckedChange={(checked) => {
                                  //   return checked
                                  //     ? field.onChange([...field.value, item.id])
                                  //     : field.onChange(
                                  //         field.value?.filter((value) => value !== item.id)
                                  //       )
                                  // }}
                                />
                              </FormControl>
                              <FormLabel className="!pb-0">
                                {item.label}
                              </FormLabel>
                            </FormItem>
                          );
                        }}
                      />
                    ))}
                  </div>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="">
            <FormField
              control={form.control}
              name="exclusion"
              render={() => (
                <FormItem>
                  <FormLabel className="">Exclusions</FormLabel>

                  <div className="flex gap-4 pl-1">
                    {exclusion.map((item) => (
                      <FormField
                        key={item.id}
                        control={form.control}
                        name="exclusion"
                        render={({ field }) => {
                          return (
                            <FormItem
                              key={item.id}
                              className="flex flex-row items-center"
                            >
                              <FormControl>
                                <Checkbox
                                  className="border-gray-600"
                                  // checked={field.value?.includes(item.id)}
                                  // onCheckedChange={(checked) => {
                                  //   return checked
                                  //     ? field.onChange([...field.value, item.id])
                                  //     : field.onChange(
                                  //         field.value?.filter((value) => value !== item.id)
                                  //       )
                                  // }}
                                />
                              </FormControl>
                              <FormLabel className="!pb-0">
                                {item.label}
                              </FormLabel>
                            </FormItem>
                          );
                        }}
                      />
                    ))}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="commission"
            render={({ field }) => (
              <FormItem className="w-1/2">
                <FormLabel>Commission Rate</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="cursor-pointer">
                      <SelectValue placeholder="Set Rate " />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="10">10%</SelectItem>
                    <SelectItem value="20">12%</SelectItem>
                    <SelectItem value="15">15%</SelectItem>
                    <SelectItem value="20">20%</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="">
            <Button type="submit" variant="brand">
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
