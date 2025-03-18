"use client";
import React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { Trash2, Pencil } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { Department } from "../departments";

export const columns: ColumnDef<Department>[] = [
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
    accessorKey: "index",
    header: () => <div className="uppercase">No.</div>,
    cell: ({ row }) => <div>{row.index + 1}</div>,
  },
  {
    accessorKey: "name",
    header: () => <div className="uppercase">Department Name</div>,
    cell: ({ row }) => (
      <div className="capitalize">
        {(row.getValue("name") as string).replace(/_/g, " ")}
      </div>
    ),
  },
  {
    accessorKey: "description",
    header: () => <div className="uppercase">Description</div>,
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("description")}</div>
    ),
  },
  {
    accessorKey: "created_by",
    header: () => <div className="uppercase">Created By</div>,
    cell: ({ row }) => {
      const createdBy = row.original.created_by;
      return (
        <div className="capitalize">{`${createdBy.first_name} ${createdBy.last_name}`}</div>
      );
    },
  },
  {
    id: "actions",
    header: () => <div className="pr-6 text-right uppercase">Actions</div>,
    cell: ({ row }) => {
      return (
        <div className="flex justify-end gap-2 pr-3">
          <div className="flex gap-2">
            <button className="div-center size-8 cursor-pointer rounded-full p-1 text-slate-800 hover:bg-gray-200">
              <Trash2 size={20} />
            </button>
            {/* <UserPermission
              empId={row.getValue("id")}
              empName={row.getValue("name")}
            >
              <button className="p-1 size-8 div-center cursor-pointer rounded-full hover:bg-gray-200 text-slate-800">
                <Pencil size={20} />
              </button>
            </UserPermission> */}
          </div>
          {/* <button className="p-1 size-8 div-center cursor-pointer rounded-full hover:bg-gray-200 text-slate-800">
            <EllipsisVertical size={20} />
          </button> */}
        </div>
      );
    },
  },
];
