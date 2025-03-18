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

// Department Creator Schema
export const DepartmentCreatorSchema = z.object({
  id: z.string().uuid(),
  last_name: z.string(),
  first_name: z.string(),
});

// Department Schema
export const DepartmentSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  description: z.string(),
  created_by: DepartmentCreatorSchema,
});

// Departments List Response Schema
export const DepartmentListResponseSchema = ApiResponseSchema(
  z.array(DepartmentSchema),
);

// Authentication Response Schema
export const AuthResponseSchema = ApiResponseSchema(
  z.object({
    employee: EmployeeSchema,
    roles: z.array(z.string()),
    permissions: z.array(z.string()),
  }),
);

// Example: Profile Update Response Schema
export const ProfileUpdateResponseSchema = ApiResponseSchema(
  z.object({
    updatedEmployee: EmployeeSchema,
  }),
);

// Extract TypeScript Types from Zod
export type AuthResponse = z.infer<typeof AuthResponseSchema>;
export type ProfileUpdateResponse = z.infer<typeof ProfileUpdateResponseSchema>;
export type DepartmentListResponse = z.infer<
  typeof DepartmentListResponseSchema
>;
