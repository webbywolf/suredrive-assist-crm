import React from "react";
import { Users } from "./types";
import { columns } from "./columns";
import { DataTable } from "@/components/table/DataTable";

const data: Users[] = [
  {
    employee_id: "SDA-001",
    name: "Naman Singh",
    role: "Business Head",
    status: "Pending",
    created_on: "24/02/2025",
  },
  {
    employee_id: "SDA-021",
    name: "Darshan Singh",
    role: "Sales Head",
    status: "Pending",
    created_on: "24/02/2025",
  },
  {
    employee_id: "SDA-011",
    name: "Munaf Singh",
    role: "Operations Head",
    status: "Pending",
    created_on: "24/02/2025",
  },
  {
    employee_id: "SDA-121",
    name: "Abhishek Jain",
    role: "Regional Sales Head",
    status: "Active",
    created_on: "24/02/2025",
  },
  {
    employee_id: "SDA-111",
    name: "Vinay Gupta",
    role: "Regional Sales Head",
    status: "Active",
    created_on: "24/02/2025",
  },
  {
    employee_id: "SDA-034",
    name: "Komal Sharma",
    role: "Field Executives",
    status: "Active",
    created_on: "24/02/2025",
  },
  {
    employee_id: "SDA-029",
    name: "Rahul Sharma",
    role: "HR Manager",
    status: "Active",
    created_on: "24/02/2025",
  },
  {
    employee_id: "SDA-058",
    name: "Mukesh Singh",
    role: "Finance Lead",
    status: "Active",
    created_on: "24/02/2025",
  },
  {
    employee_id: "SDA-017",
    name: "Parag Jain",
    role: "IT Head",
    status: "Active",
    created_on: "24/02/2025",
  },
  {
    employee_id: "SDA-013",
    name: "Jasprit Singh",
    role: "Front-End",
    status: "Active",
    created_on: "24/02/2025",
  },
];

export default function ExistingUsers() {
  return (
    <DataTable
      columns={columns}
      data={data}
      filterOptions={{ label: "Employee ID", value: "employee_id" }}
      addButton={{ label: "Add New", location: "/users/add-new" }}
      paginationOption
    />
  );
}
