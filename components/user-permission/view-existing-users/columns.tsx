"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Header, Users } from "./types";
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
import { Chip } from "@/components/ui/chip";

export const columns: ColumnDef<Users>[] = [
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
  {
    accessorKey: "employee_id",
    header: "Employee ID",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("employee_id")}</div>
    ),
  },
  {
    accessorKey: "name",
    header: "NAME",
    cell: ({ row }) => <div className="capitalize">{row.getValue("name")}</div>,
  },
  // {
  //   accessorKey: "email",
  //   header: ({ column }) => {
  //     return (
  //       <Button
  //         variant="ghost"
  //         className="uppercase"
  //         onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
  //       >
  //         Email
  //         <ArrowUpDown />
  //       </Button>
  //     );
  //   },
  //   cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
  // },
  {
    accessorKey: "role",
    header: () => <div className=" uppercase">Role</div>,
    cell: ({ row }) => <p className="">{row.getValue("role")}</p>,
  },
  {
    accessorKey: "status",
    header: () => <div className=" uppercase">Status</div>,
    cell: ({ row }) => (
      <Chip
        className="w-20 items-center"
        variant={row.getValue("status").toLowerCase()}
      >
        {row.getValue("status")}
      </Chip>
    ),
  },
  {
    accessorKey: "created_on",
    header: () => <div className="text-center uppercase">Created On</div>,
    cell: ({ row }) => (
      <div className="capitalize text-center">{row.getValue("created_on")}</div>
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
          <button className="p-1 size-8 div-center cursor-pointer rounded-full hover:bg-gray-200 text-slate-800">
            <EllipsisVertical size={20} />
          </button>
        </div>
      );
    },
  },
];
