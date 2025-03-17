import axiosInstance from "@/api/axiosInstance";
import { AuthResponseSchema } from "@/types/schemas/apiSchemas";
import { AuthResponse } from "@/types/schemas/apiSchemas";

// Employee Login API Call
export const loginEmployee = async (employee_id: string, password: string): Promise<AuthResponse["data"]> => {
  const response = await axiosInstance.post("/auth/login", { employee_id, password });
  // Validate API response with Zod
  const parsedResponse = AuthResponseSchema.parse(response.data);
  return parsedResponse.data; // Return only `data`
};

// Fetch Logged-In Employee Details
export const fetchEmployee = async (): Promise<AuthResponse["data"]> => {
  const response = await axiosInstance.get("/auth/me");
  // Validate API response with Zod
  const parsedResponse = AuthResponseSchema.parse(response.data);
  return parsedResponse.data; // ✅ Always return `data`
}


// Logout API Call
export const logoutEmployee = async (): Promise<void> => {
  await axiosInstance.post("/auth/logout");
};
