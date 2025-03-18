import { z } from "zod";
import { ApiResponseSchema } from "./apiSchemas";

// Creator Schema for permissions
export const PermissionCreatorSchema = z.object({
  id: z.string().uuid(),
  last_name: z.string(),
  first_name: z.string(),
});

export const permissionFormSchema = z.object({
  name: z.string().min(3, {
    message: "Permission name must be at least 3 characters long",
  }),
  description: z.string().min(5, {
    message: "Description must be at least 5 characters long",
  }),
  category: z.string().min(2, {
    message: "Category is required",
  }),
});

// Permission Schema
export const PermissionSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  description: z.string(),
  category: z.string(),
  created_by: PermissionCreatorSchema,
});

// Permission List Response Schema
export const PermissionListResponseSchema = ApiResponseSchema(
  z.array(PermissionSchema),
);

// Types
export type Permission = z.infer<typeof PermissionSchema>;
export type PermissionForm = z.infer<typeof permissionFormSchema>;
export type PermissionListResponse = z.infer<
  typeof PermissionListResponseSchema
>;
export type PermissionCreator = z.infer<typeof PermissionCreatorSchema>;
