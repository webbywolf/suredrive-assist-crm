"use client";
import React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { Edit2, Trash2 } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { EditPermission } from "./data";

export type Permission = {
  name: string;
  assigned_to: string[];
  created_date: string;
};

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
    accessorKey: "name",
    header: () => <div className=" uppercase">name</div>,
    cell: ({ row }) => <div className="capitalize">{row.getValue("name")}</div>,
  },
  {
    accessorKey: "assigned_to",
    header: () => <div className=" uppercase">Assigned To</div>,
    cell: ({ row }) => (
      <div className="capitalize flex gap-1">
        {(row.getValue("assigned_to") as string[]).map((per: string) => (
          <Button key={per} variant="outline">
            {per}
          </Button>
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
    cell: () => {
      return (
        <div className="flex gap-2 justify-end pr-3">
          <div className="flex gap-2">
            <EditPermission>
              <button className="p-1 size-8 div-center cursor-pointer rounded-full hover:bg-gray-200 text-slate-800">
                <Edit2 size={20} />
              </button>
            </EditPermission>
            <button className="p-1 size-8 div-center cursor-pointer rounded-full hover:bg-gray-200 text-slate-800">
              <Trash2 size={20} />
            </button>
          </div>
        </div>
      );
    },
  },
];
