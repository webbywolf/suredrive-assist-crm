import { create } from "zustand";
import { Employee } from "@/types/schemas/employeeSchema";

// ✅ Zustand Store Type
interface AuthState {
  employee: Employee | null;
  roles: string[];
  permissions: string[];
  setAuth: (employee: Employee, roles: string[], permissions: string[]) => void;
  clearAuth: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  employee: null,
  roles: [],
  permissions: [],

  setAuth: (employee, roles, permissions) => set({ employee, roles, permissions }),

  clearAuth: () => set({ employee: null, roles: [], permissions: [] }),
}));
