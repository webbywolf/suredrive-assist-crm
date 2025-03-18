import { PermissionForm } from "./../types/schemas/permissionSchema";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  getAllPermissions,
  getPermission,
  createPermission,
  updatePermission,
  deletePermission,
} from "@/api/permissions";
import {
  PermissionSchema,
  permissionFormSchema,
} from "@/types/schemas/permissionSchema";
import { z } from "zod";
import { useRouter } from "next/navigation";

// Get all permissions query
export const useGetAllPermissions = () => {
  return useQuery({
    queryKey: ["permissions"],
    queryFn: getAllPermissions,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};

// Get permissions by category
export const useGetPermissionsByCategory = (category: string) => {
  return useQuery({
    queryKey: ["permissions", "category", category],
    queryFn: async () => {
      const permissions = await getAllPermissions();
      return permissions.filter(
        (permission) => permission.category === category,
      );
    },
    enabled: !!category,
  });
};

// Get single permission query
export const useGetPermission = (id: string) => {
  return useQuery({
    queryKey: ["permission", id],
    queryFn: () => getPermission(id),
    enabled: !!id,
  });
};

// Create permission mutation
export const useCreatePermission = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation({
    mutationFn: (data: z.infer<typeof permissionFormSchema>) =>
      createPermission(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["permissions"] });
      router.push("/roles-permissions/permissions"); // Redirect to permissions list
    },
  });
};

// Update permission mutation
export const useUpdatePermission = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Partial<z.infer<typeof PermissionSchema>>;
    }) => updatePermission(id, data),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ["permissions"] });
      queryClient.invalidateQueries({ queryKey: ["permission", variables.id] });
    },
  });
};

// Delete permission mutation
export const useDeletePermission = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deletePermission,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["permissions"] });
    },
  });
};
