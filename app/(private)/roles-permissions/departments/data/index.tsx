"use client";
import React from "react";
import { DataTable } from "@/components/table/DataTable";
import { ColumnDef } from "@tanstack/react-table";
import {
  ArrowUpDown,
  Delete,
  Edit,
  EllipsisVertical,
  Pencil,
  Trash2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { columns, User } from "./columns";

const tableData: User[] = [
  {
    id: "SDA-001",
    name: "John Doe",
    department: "Human Resources",
    status: "Active",
  },
  {
    id: "SDA-002",
    name: "Jane Smith",
    department: "Marketing",
    status: "Inactive",
  },
  {
    id: "SDA-003",
    name: "Michael Johnson",
    department: "Finance",
    status: "Inactive",
  },
  {
    id: "SDA-004",
    name: "Emily Brown",
    department: "Engineering",
    status: "Active",
  },
  {
    id: "SDA-005",
    name: "Daniel White",
    department: "Operations",
    status: "Pending",
  },
  {
    id: "SDA-006",
    name: "Sarah Miller",
    department: "Human Resources",
    status: "Active",
  },
  {
    id: "SDA-007",
    name: "James Wilson",
    department: "Engineering",
    status: "Pending",
  },
  {
    id: "SDA-008",
    name: "Olivia Martinez",
    department: "Marketing",
    status: "Pending",
  },
  {
    id: "SDA-009",
    name: "William Davis",
    department: "Operations",
    status: "Pending",
  },
  {
    id: "SDA-010",
    name: "Sophia Anderson",
    department: "Finance",
    status: "Inactive",
  },
  {
    id: "SDA-011",
    name: "Benjamin Thomas",
    department: "Engineering",
    status: "Active",
  },
  {
    id: "SDA-012",
    name: "Charlotte Harris",
    department: "Marketing",
    status: "Pending",
  },
  {
    id: "SDA-013",
    name: "Liam Martin",
    department: "Human Resources",
    status: "Active",
  },
  {
    id: "SDA-014",
    name: "Amelia Thompson",
    department: "Finance",
    status: "Pending",
  },
  {
    id: "SDA-015",
    name: "Noah Garcia",
    department: "Operations",
    status: "Inactive",
  },
];

export default function AllDepartmentUsersTable() {
  return (
    <DataTable
      columns={columns}
      data={tableData}
      filterOptions={{ label: "Employee ID", value: "id" }}
      paginationOption
    />
  );
}
