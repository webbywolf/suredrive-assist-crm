import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/customInput";
import type { StepComponentProps } from "@/components/multi-step-form/types";

export function StepFive({
  form,
  onNext,
  onPrevious,
  isLastStep,
}: StepComponentProps<any>) {
  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onNext)} className="space-y-4">
          <div className="space-y-1">
            <Input
              label="Username"
              placeholder="Enter username"
              error={form.formState.errors.username?.message as string}
              {...form.register("username")}
            />
            <p className="text-sm text-gray-500">
              This will be your login username for the company portal.
            </p>
          </div>

          <div className="space-y-1">
            <Input
              label="Password"
              type="password"
              placeholder="Enter password"
              error={form.formState.errors.password?.message as string}
              {...form.register("password")}
            />
            <p className="text-sm text-gray-500">
              Password must be at least 8 characters with uppercase, lowercase,
              and numbers.
            </p>
          </div>

          <div className="space-y-1">
            <Input
              label="Confirm Password"
              type="password"
              placeholder="Confirm password"
              error={form.formState.errors.confirmPassword?.message as string}
              {...form.register("confirmPassword")}
            />
          </div>
        </form>
      </Form>
    </div>
  );
}
