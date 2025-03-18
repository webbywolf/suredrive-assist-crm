import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchEmployee, loginEmployee, logoutEmployee } from "@/api/auth";
import { useAuthStore } from "@/store/authStore";
import { AuthResponseSchema } from "@/types/schemas/apiSchemas";
import { AuthResponse } from "@/types/schemas/apiSchemas";
import axiosInstance from "@/api/axiosInstance";
import { useRouter } from "next/navigation";
export const useFetchEmployee = () => {
  const { setAuth, clearAuth } = useAuthStore();

  return useQuery({
    queryKey: ["authEmployee"],
    queryFn: async () => {
      try {
        const data = await fetchEmployee();
        setAuth(data.employee, data.roles, data.permissions);
        return data;
      } catch (error) {
        clearAuth(); 
        throw error; 
      }
    },
    staleTime: 1000 * 60 * 5, 
  });
}

// Login Mutation
export const useLoginMutation = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ employee_id, password }: { employee_id: string; password: string }) =>
      loginEmployee(employee_id, password),
    onSuccess: (data) => {
      AuthResponseSchema.parse({ success: true, message: "Validated", data });

      if (data) {
        useAuthStore.getState().setAuth(data.employee, data.roles, data.permissions);
        router.replace("/dashboard");
        setTimeout(() => {
          queryClient.invalidateQueries({ queryKey: ["authEmployee"] });
        }, 500);
      }
    },
  });
};


// Logout Mutation
export const useLogoutMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: logoutEmployee,
    onSuccess: () => {
      useAuthStore.getState().clearAuth(); 
      queryClient.invalidateQueries({ queryKey: ["authEmployee"] });
      window.location.href = "/login";
    },
  });
};

