"use client";
import React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, Edit2, Trash2 } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Permission } from "@/types/schemas/permissionSchema";
import { EditPermission } from "./data";

export const columns: ColumnDef<Permission>[] = [
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
        className="translate-y-[2px]"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-[2px]"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const value = row.getValue("name") as string;
      return <div className="font-medium">{value}</div>;
    },
  },
  {
    accessorKey: "description",
    header: "Description",
    cell: ({ row }) => {
      const value = row.getValue("description") as string;
      return <div>{value}</div>;
    },
  },
  {
    accessorKey: "category",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Category
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const value = row.getValue("category") as string;
      return <span className="border-border border bg-slate-100">{value}</span>;
    },
  },
  {
    accessorKey: "created_by",
    header: "Created By",
    cell: ({ row }) => {
      const createdBy = row.original.created_by;
      return <div>{`${createdBy.first_name} ${createdBy.last_name}`}</div>;
    },
  },
  {
    id: "actions",
    header: () => <div className="pr-6 text-right uppercase">Actions</div>,
    cell: ({ row }) => {
      return (
        <div className="flex justify-end gap-2 pr-3">
          <div className="flex gap-2">
            {/* <EditPermission permission={row.original}> */}
            <button className="div-center size-8 cursor-pointer rounded-full p-1 text-slate-800 hover:bg-gray-200">
              <Edit2 size={20} />
            </button>
            {/* </EditPermission> */}
            <button className="div-center size-8 cursor-pointer rounded-full p-1 text-slate-800 hover:bg-gray-200">
              <Trash2 size={20} />
            </button>
          </div>
        </div>
      );
    },
  },
];
