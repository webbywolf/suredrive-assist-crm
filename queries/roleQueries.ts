import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  getAllRoles,
  getRole,
  createRole,
  updateRole,
  deleteRole,
} from "@/api/roles";
import { RoleSchema } from "@/types/schemas/roleSchemas";
import { z } from "zod";
import { useRouter } from "next/navigation";

// Get all roles query
export const useGetAllRoles = () => {
  return useQuery({
    queryKey: ["roles"],
    queryFn: getAllRoles,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};

// Get single role query
export const useGetSingleRole = (id: string) => {
  return useQuery({
    queryKey: ["role", id],
    queryFn: () => getRole(id),
    enabled: !!id,
  });
};

// Create role mutation
export const useCreateRole = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation({
    mutationFn: (data: z.infer<typeof RoleSchema>) => createRole(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["roles"] });
      router.push("/roles-permissions/roles"); // Redirect to roles list
    },
  });
};

// Update role mutation
export const useUpdateRole = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Partial<z.infer<typeof RoleSchema>>;
    }) => updateRole(id, data),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ["roles"] });
      queryClient.invalidateQueries({ queryKey: ["role", variables.id] });
    },
  });
};

// Delete role mutation
export const useDeleteRole = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteRole,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["roles"] });
    },
  });
};
