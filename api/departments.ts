import axiosInstance from "@/api/axiosInstance";
import {
  DepartmentListResponseSchema,
  DepartmentSchema,
} from "@/types/schemas/apiSchemas";
import { ApiResponseSchema } from "@/types/schemas/apiSchemas";
import { z } from "zod";

// Get all departments
export const getAllDepartments = async () => {
  const response = await axiosInstance.get("/departments");
  const parsedResponse = DepartmentListResponseSchema.parse(response.data);
  return parsedResponse.data;
};

// Get single department
export const getDepartment = async (id: string) => {
  const response = await axiosInstance.get(`/departments/${id}`);
  const parsedResponse = ApiResponseSchema(DepartmentSchema).parse(
    response.data,
  );
  return parsedResponse.data;
};

// Create department
export const createDepartment = async (
  data: z.infer<typeof DepartmentSchema>,
) => {
  const response = await axiosInstance.post("/departments", data);
  const parsedResponse = ApiResponseSchema(DepartmentSchema).parse(
    response.data,
  );
  return parsedResponse.data;
};

// Update department
export const updateDepartment = async (
  id: string,
  data: Partial<z.infer<typeof DepartmentSchema>>,
) => {
  const response = await axiosInstance.put(`/departments/${id}`, data);
  const parsedResponse = ApiResponseSchema(DepartmentSchema).parse(
    response.data,
  );
  return parsedResponse.data;
};

// Delete department
export const deleteDepartment = async (id: string): Promise<void> => {
  await axiosInstance.delete(`/departments/${id}`);
};
