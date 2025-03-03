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
import type { credentialsSchema } from "./types"

export function CredentialsForm({
  form,
  onNext,
  onPrevious,
  isLastStep,
}: StepComponentProps<typeof credentialsSchema>) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-medium lg:pb-2">Set Credentials</h2>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onNext)} className="space-y-4">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="Enter username" {...field} />
                </FormControl>
                <FormDescription>
                  This will be your login username for the company portal.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="Enter password" {...field} />
                </FormControl>
                <FormDescription>
                  Password must be at least 8 characters with uppercase, lowercase, and numbers.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="Confirm password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex justify-between pt-4">
            <Button type="button" variant="outline" onClick={onPrevious}>
              Previous
            </Button>
            <Button type="submit" variant="brand">
              {isLastStep ? "Complete Registration" : "Next"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}
