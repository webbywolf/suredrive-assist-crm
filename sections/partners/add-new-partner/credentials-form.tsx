import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { Input } from "@/components/ui/customInput"
import type { StepComponentProps } from "@/components/multi-step-form/types"
import type { credentialsSchema } from "../../../types/types/partner.types"

export function CredentialsForm({
  form,
  onNext,
  onPrevious,
  isLastStep,
}: StepComponentProps<typeof credentialsSchema>) {
  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onNext)} className="space-y-4">
          <div className="space-y-1">
            <Input label="Username" placeholder="Enter username" {...form.register("username")} />
            <p className="text-sm text-gray-500">
              This will be your login username for the company portal.
            </p>
            {form.formState.errors.username && (
              <p className="text-sm text-red-500">{form.formState.errors.username.message}</p>
            )}
          </div>

          <div className="space-y-1">
            <Input
              label="Password"
              type="password"
              placeholder="Enter password"
              {...form.register("password")}
            />
            <p className="text-sm text-gray-500">
              Password must be at least 8 characters with uppercase, lowercase, and numbers.
            </p>
            {form.formState.errors.password && (
              <p className="text-sm text-red-500">{form.formState.errors.password.message}</p>
            )}
          </div>

          <div className="space-y-1">
            <Input
              label="Confirm Password"
              type="password"
              placeholder="Confirm password"
              {...form.register("confirmPassword")}
            />
            {form.formState.errors.confirmPassword && (
              <p className="text-sm text-red-500">
                {form.formState.errors.confirmPassword.message}
              </p>
            )}
          </div>
        </form>
      </Form>
    </div>
  )
}
