import axiosInstance from "@/api/axiosInstance";
import {
  RoleListResponseSchema,
  RoleSchema,
} from "@/types/schemas/roleSchemas";
import { ApiResponseSchema } from "@/types/schemas/apiSchemas";
import { z } from "zod";

// Get all roles
export const getAllRoles = async () => {
  const response = await axiosInstance.get("/roles");
  const parsedResponse = RoleListResponseSchema.parse(response.data);
  return parsedResponse.data;
};

// Get single role
export const getRole = async (id: string) => {
  const response = await axiosInstance.get(`/roles/${id}`);
  const parsedResponse = ApiResponseSchema(RoleSchema).parse(response.data);
  return parsedResponse.data;
};

// Create role
export const createRole = async (data: z.infer<typeof RoleSchema>) => {
  const response = await axiosInstance.post("/roles", data);
  const parsedResponse = ApiResponseSchema(RoleSchema).parse(response.data);
  return parsedResponse.data;
};

// Update role
export const updateRole = async (
  id: string,
  data: Partial<z.infer<typeof RoleSchema>>,
) => {
  const response = await axiosInstance.put(`/roles/${id}`, data);
  const parsedResponse = ApiResponseSchema(RoleSchema).parse(response.data);
  return parsedResponse.data;
};

// Delete role
export const deleteRole = async (id: string): Promise<void> => {
  await axiosInstance.delete(`/roles/${id}`);
};
