import axiosInstance from "@/api/axiosInstance";
import {
  permissionFormSchema,
  PermissionListResponseSchema,
  PermissionSchema,
} from "@/types/schemas/permissionSchema";
import { ApiResponseSchema } from "@/types/schemas/apiSchemas";
import { z } from "zod";

// Get all permissions
export const getAllPermissions = async () => {
  const response = await axiosInstance.get("/permissions");
  const parsedResponse = PermissionListResponseSchema.parse(response.data);
  console.log(parsedResponse);
  return parsedResponse.data;
};

// Get single permission
export const getPermission = async (id: string) => {
  const response = await axiosInstance.get(`/permissions/${id}`);
  const parsedResponse = ApiResponseSchema(PermissionSchema).parse(
    response.data,
  );
  return parsedResponse.data;
};

// Create permission
export const createPermission = async (
  data: z.infer<typeof permissionFormSchema>,
) => {
  const response = await axiosInstance.post("/permissions", data);
  const parsedResponse = ApiResponseSchema(PermissionSchema).parse(
    response.data,
  );
  return parsedResponse.data;
};

// Update permission
export const updatePermission = async (
  id: string,
  data: Partial<z.infer<typeof PermissionSchema>>,
) => {
  const response = await axiosInstance.put(`/permissions/${id}`, data);
  const parsedResponse = ApiResponseSchema(PermissionSchema).parse(
    response.data,
  );
  return parsedResponse.data;
};

// Delete permission
export const deletePermission = async (id: string): Promise<void> => {
  await axiosInstance.delete(`/permissions/${id}`);
};
