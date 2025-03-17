export interface Employee {
    id: string;
    employee_id: string;
    name: string;
    department_id: string;
  }
  
  export interface AuthResponse {
    success: boolean;
    message: string;
    data: {
      employee: Employee;
      roles: string[];
      permissions: string[];
    };
  }
  