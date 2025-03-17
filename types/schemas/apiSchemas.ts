import { z } from "zod";
import { EmployeeSchema } from "./employeeSchema";

// Generic API Response Wrapper
export const ApiResponseSchema = <T extends z.ZodTypeAny>(dataSchema: T) =>
  z.object({
    success: z.boolean(),
    message: z.string(),
    data: dataSchema, // 
    error: z.string().optional(),
  });

// Authentication Response Schema
export const AuthResponseSchema = ApiResponseSchema(
  z.object({
    employee: EmployeeSchema,
    roles: z.array(z.string()),
    permissions: z.array(z.string()),
  })
);

// Example: Profile Update Response Schema
export const ProfileUpdateResponseSchema = ApiResponseSchema(
  z.object({
    updatedEmployee: EmployeeSchema,
  })
);

// Extract TypeScript Types from Zod
export type AuthResponse = z.infer<typeof AuthResponseSchema>;
export type ProfileUpdateResponse = z.infer<typeof ProfileUpdateResponseSchema>;
