import { z } from "zod";

// Department Schema
export const DepartmentSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
});

// Employee Schema (Updated with Department)
export const EmployeeSchema = z.object({
  id: z.string().uuid(),
  employee_id: z.string(),
  name: z.string(),
  department: DepartmentSchema, 
});

// Extract TypeScript Type
export type Employee = z.infer<typeof EmployeeSchema>;
export type Department = z.infer<typeof DepartmentSchema>;
