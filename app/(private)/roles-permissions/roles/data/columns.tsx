"use client";
import React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { Trash2 } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
// import UserPermission from "@/sections/user-permission/permission";

export type User = {
  id: string;
  name: string;
  role: string;
  status: string;
};

export const columns: ColumnDef<User>[] = [
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
    accessorKey: "id",
    header: () => <div className=" uppercase">employee id</div>,
    cell: ({ row }) => <div className="capitalize">{row.getValue("id")}</div>,
  },
  {
    accessorKey: "name",
    header: () => <div className=" uppercase">name</div>,
    cell: ({ row }) => <div className="capitalize">{row.getValue("name")}</div>,
  },
  {
    accessorKey: "role",
    header: () => <div className=" uppercase">Role</div>,
    cell: ({ row }) => <div className="capitalize">{row.getValue("role")}</div>,
  },
  {
    accessorKey: "status",
    header: () => <div className=" uppercase ">status</div>,
    cell: ({ row }) => (
      <div
        className={cn(
          "capitalize div-center  border border-gray-300 bg-white rounded-full w-20 text-center p-1.5 text-[12px] ",
          { "bg-green-700 text-white": row.getValue("status") === "Active" },
          { "bg-amber-500 text-white": row.getValue("status") !== "Active" },
        )}
      >
        {row.getValue("status")}
      </div>
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
