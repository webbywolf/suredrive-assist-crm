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
import UserPermission from "@/sections/user-permission/permission";

export interface Permission {
  name: string;
  assigned_to: string[];
  created_date: string;
}

const tableData: User[] = [
  {
    name: "Management",
    assigned_to: ["Administrator"],
    created_date: "14 Apr 2021, 8:43 PM",
  },
  {
    name: "Manage Billing & Roles",
    assigned_to: ["Administrator"],
    created_date: "16 Sep 2021, 5:20 PM",
  },
  {
    name: "Add & Remove Users",
    assigned_to: ["Administrator", "Manager"],
    created_date: "14 Oct 2021, 10:20 AM",
  },
  {
    name: "Project Planning",
    assigned_to: ["Administrator", "Users", "Support"],
    created_date: "14 May 2021, 12:10 PM",
  },
  {
    name: "Manage Email Sequences",
    assigned_to: ["Administrator", "Users", "Support"],
    created_date: "23 Aug 2021, 2:00 PM",
  },
  {
    name: "Client Communication",
    assigned_to: ["Administrator", "Manager"],
    created_date: "15 Apr 2021, 11:30 AM",
  },
  {
    name: "Only View",
    assigned_to: ["Administrator", "Restricted User"],
    created_date: "04 Dec 2021, 8:15 PM",
  },
  {
    name: "Financial Management",
    assigned_to: ["Administrator", "Manager"],
    created_date: "25 Feb 2021, 10:30 AM",
  },
  {
    name: "Manage Others' Tasks",
    assigned_to: ["Administrator", "Support"],
    created_date: "04 Nov 2021, 11:45 AM",
  },
];

export default function AllPermissionsTable() {
  return (
    <DataTable
      columns={columns}
      data={tableData}
      filterOptions={{ label: "Employee ID", value: "id" }}
      paginationOption
    />
  );
}

const columns: ColumnDef<Permission>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },

  ,
  {
    accessorKey: "name",
    header: () => <div className=" uppercase">name</div>,
    cell: ({ row }) => <div className="capitalize">{row.getValue("name")}</div>,
  },
  {
    accessorKey: "assigned_to",
    header: () => <div className=" uppercase">Assigned To</div>,
    cell: ({ row }) => (
      <div className="capitalize flex gap-1">
        {row.getValue("assigned_to").map((per) => (
          <Button variant="outline">{per}</Button>
        ))}
      </div>
    ),
  },
  {
    accessorKey: "created_date",
    header: () => <div className=" uppercase"> Created At</div>,
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("created_date")}</div>
    ),
  },

  {
    id: "actions",
    header: () => <div className="text-right uppercase pr-6">Actions</div>,
    cell: ({ row }) => {
      return (
        <div className="flex gap-2 justify-end pr-3">
          <div className="flex gap-2">
            <button className="p-1 size-8 div-center cursor-pointer rounded-full hover:bg-gray-200 text-slate-800">
              <Trash2 size={20} />
            </button>

            <button className="p-1 size-8 div-center cursor-pointer rounded-full hover:bg-gray-200 text-slate-800">
              <Pencil size={20} />
            </button>
          </div>
        </div>
      );
    },
  },
];
