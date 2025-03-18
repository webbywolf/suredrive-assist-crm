import { useLoginMutation, useLogoutMutation } from "@/queries/authQueries";
import { useAuthStore } from "@/store/authStore";

export const useAuth = () => {
  const { employee, roles, permissions } = useAuthStore();

  return {
    employee,
    roles,
    permissions,
    loginMutation: useLoginMutation(),
    logoutMutation: useLogoutMutation(),
  };
};
