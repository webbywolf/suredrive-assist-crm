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
  FormDescription,
} from "@/components/ui/form";
import { Input } from "@/components/ui/my-custom";
import type { StepComponentProps } from "@/components/multi-step-form/types";

const credentialsSchema = z
  .object({
    username: z
      .string()
      .min(3, { message: "Username must be at least 3 characters." }),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters." })
      .regex(/[A-Z]/, {
        message: "Password must contain at least one uppercase letter.",
      })
      .regex(/[a-z]/, {
        message: "Password must contain at least one lowercase letter.",
      })
      .regex(/[0-9]/, {
        message: "Password must contain at least one number.",
      }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type CredentialsSchema = z.infer<typeof credentialsSchema>;
export const credentialsFormSchema = credentialsSchema;

export function CredentialsForm({
  form,
  onNext,
  onPrevious,
  isLastStep,
}: StepComponentProps<typeof credentialsSchema>) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold">Set Credentials</h2>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onNext)} className="space-y-4">
          <Input
            label="Username"
            placeholder="Enter username"
            {...form.register("username")}
            error={form.formState.errors.username?.message?.toString()}
          />
          <p className="text-sm text-muted-foreground">
            This will be login username.
          </p>

          <Input
            label="Password"
            type="password"
            placeholder="Enter password"
            {...form.register("password")}
            error={form.formState.errors.password?.message?.toString()}
          />
          <p className="text-sm text-muted-foreground">
            Password must be at least 8 characters with uppercase, lowercase,
            and numbers.
          </p>

          <Input
            label="Confirm Password"
            type="password"
            placeholder="Confirm password"
            {...form.register("confirmPassword")}
            error={form.formState.errors.confirmPassword?.message?.toString()}
          />

          <div className="flex justify-between pt-4">
            <Button type="button" variant="outline" onClick={onPrevious}>
              Previous
            </Button>
            <Button type="submit" variant="brand">
              {isLastStep ? "Submit" : "Next"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
