import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  getAllDepartments,
  getDepartment,
  createDepartment,
  updateDepartment,
  deleteDepartment,
} from "@/api/departments";
import { DepartmentSchema } from "@/types/schemas/apiSchemas";
import { z } from "zod";
import { useRouter } from "next/navigation";

// Get all departments query
export const useGetDepartments = () => {
  return useQuery({
    queryKey: ["departments"],
    queryFn: getAllDepartments,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};

// Get single department query
export const useGetDepartment = (id: string) => {
  return useQuery({
    queryKey: ["department", id],
    queryFn: () => getDepartment(id),
    enabled: !!id,
  });
};

// Create department mutation
export const useCreateDepartment = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation({
    mutationFn: (data: z.infer<typeof DepartmentSchema>) =>
      createDepartment(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["departments"] });
      router.push("/roles-permissions/departments"); // Redirect to departments list
    },
  });
};

// Update department mutation
export const useUpdateDepartment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Partial<z.infer<typeof DepartmentSchema>>;
    }) => updateDepartment(id, data),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ["departments"] });
      queryClient.invalidateQueries({ queryKey: ["department", variables.id] });
    },
  });
};

// Delete department mutation
export const useDeleteDepartment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteDepartment,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["departments"] });
    },
  });
};
