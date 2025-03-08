export type Users = {
  employee_id: string;
  name: string;
  status: "Pending" | "Active" | "Rejected";
  role: string;
};
