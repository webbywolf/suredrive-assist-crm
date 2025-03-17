"use client";

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

export const columns: ColumnDef<Partners>[] = [
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
    accessorKey: "dealership",
    header: () => <div className=" uppercase">dealership</div>,
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("dealership")}</div>
    ),
  },
  {
    accessorKey: "contactPerson",
    header: () => <div className=" uppercase">Contact Person</div>,
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("contactPerson")}</div>
    ),
  },
  {
    accessorKey: "status",
    header: () => <div className=" uppercase">status</div>,
    cell: ({ row }) => (
      <div
        className={cn(
          "capitalize border border-gray-300 bg-white rounded-full w-20 text-center p-1.5 text-[12px] ",
          { "bg-green-700 text-white": row.getValue("status") === "Active" },
          { "bg-amber-500 text-white": row.getValue("status") !== "Active" },
        )}
      >
        {row.getValue("status")}
      </div>
    ),
  },
  {
    accessorKey: "totalSales",
    header: () => <div className="text-center uppercase">total Sales</div>,

    // header: ({ column }) => {
    //   return (
    //     <Button
    //       variant="ghost"
    //       className="uppercase"
    //       onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
    //     >
    //       total Sales
    //       <ArrowUpDown />
    //     </Button>
    //   )
    // },
    cell: ({ row }) => (
      <div className="capitalize text-center">{row.getValue("totalSales")}</div>
    ),
  },
  {
    accessorKey: "createdAt",
    header: () => <div className="text-center uppercase">Created At</div>,
    cell: ({ row }) => (
      <div className="capitalize text-center">{row.getValue("createdAt")}</div>
    ),
  },
  {
    id: "actions",
    header: () => <div className="text-right uppercase pr-6">Actions</div>,
    cell: ({ row }) => {
      // console.log(row)

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
