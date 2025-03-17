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
    role: "Maintainer",
    status: "Active",
  },
  {
    id: "SDA-002",
    name: "Jane Smith",
    role: "Subscriber",
    status: "Inactive",
  },
  {
    id: "SDA-003",
    name: "Michael Johnson",
    role: "Editor",
    status: "Inactive",
  },
  {
    id: "SDA-004",
    name: "Emily Brown",
    role: "Author",
    status: "Active",
  },
  {
    id: "SDA-005",
    name: "Daniel White",
    role: "Subscriber",
    status: "Pending",
  },
  {
    id: "SDA-006",
    name: "Sarah Miller",
    role: "Admin",
    status: "Active",
  },
  {
    id: "SDA-007",
    name: "James Wilson",
    role: "Author",
    status: "Pending",
  },
  {
    id: "SDA-008",
    name: "Olivia Martinez",
    role: "Maintainer",
    status: "Pending",
  },
  {
    id: "SDA-009",
    name: "William Davis",
    role: "Maintainer",
    status: "Pending",
  },
  {
    id: "SDA-010",
    name: "Sophia Anderson",
    role: "Admin",
    status: "Inactive",
  },
  {
    id: "SDA-011",
    name: "Benjamin Thomas",
    role: "Author",
    status: "Active",
  },
  {
    id: "SDA-012",
    name: "Charlotte Harris",
    role: "Subscriber",
    status: "Pending",
  },
  {
    id: "SDA-013",
    name: "Liam Martin",
    role: "Admin",
    status: "Active",
  },
  {
    id: "SDA-014",
    name: "Amelia Thompson",
    role: "Editor",
    status: "Pending",
  },
  {
    id: "SDA-015",
    name: "Noah Garcia",
    role: "Subscriber",
    status: "Inactive",
  },
];

export default function UsersRoleTable() {
  return (
    <DataTable
      columns={columns}
      data={tableData}
      filterOptions={{ label: "Employee ID", value: "id" }}
      paginationOption
    />
  );
}
