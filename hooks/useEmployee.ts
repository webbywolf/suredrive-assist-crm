import { useFetchEmployee } from "@/queries/authQueries";

export const useEmployee = () => {
  const { data: employee, isLoading, isError } = useFetchEmployee();

  return {
    employee,
    isLoading,
    isError,
  };
};

export default useEmployee;