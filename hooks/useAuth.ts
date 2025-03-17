import { useAuthStore } from "@/store/authStore";
import { useFetchEmployee, useLoginMutation, useLogoutMutation } from "@/queries/authQueries";

export const useAuth = () => {
  const { employee, roles, permissions } = useAuthStore();

  return {
    employee,
    roles,
    permissions,
    isUserLoading: useFetchEmployee().isLoading,
    loginMutation: useLoginMutation(),
    logoutMutation: useLogoutMutation(),
  };
};
