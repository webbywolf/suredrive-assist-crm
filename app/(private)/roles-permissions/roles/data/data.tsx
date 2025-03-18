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
import { columns } from "./columns";
import { Role } from "@/types/schemas/roleSchemas";

interface UsersRoleTableProps {
  data: Role[];
}

export default function UsersRoleTable({ data }: UsersRoleTableProps) {
  return (
    <DataTable
      columns={columns}
      data={data}
      filterOptions={{ label: "Role Name", value: "role_name" }}
      paginationOption
    />
  );
}
