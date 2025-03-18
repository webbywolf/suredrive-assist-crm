import { z } from "zod";
import { ApiResponseSchema } from "./apiSchemas";

// Creator Schema
export const RoleCreatorSchema = z.object({
  id: z.string().uuid(),
  last_name: z.string(),
  first_name: z.string(),
});

// Department Schema (minimal version used in role)
export const RoleDepartmentSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
});

// Role Schema
export const RoleSchema = z.object({
  id: z.string().uuid(),
  role: z.string(),
  role_name: z.string(),
  description: z.string(),
  department: RoleDepartmentSchema,
  created_by: RoleCreatorSchema,
});

// Role List Response Schema
export const RoleListResponseSchema = ApiResponseSchema(z.array(RoleSchema));

// Types
export type Role = z.infer<typeof RoleSchema>;
export type RoleListResponse = z.infer<typeof RoleListResponseSchema>;
export type RoleCreator = z.infer<typeof RoleCreatorSchema>;
export type RoleDepartment = z.infer<typeof RoleDepartmentSchema>;
