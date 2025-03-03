"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Header, Users } from "./types"
import { ArrowUpDown, Delete, Edit, EllipsisVertical, Pencil, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"

export const columns: ColumnDef<Header>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && "indeterminate")
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
    header: "NAME",
    cell: ({ row }) => <div className="capitalize">{row.getValue("name")}</div>,
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="uppercase"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <ArrowUpDown />
        </Button>
      )
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
  },
  {
    accessorKey: "role",
    header: () => <div className=" uppercase">Role</div>,
    cell: ({ row }) => (
      <div className="capitalize border border-gray-300 bg-white rounded-full w-fit px-1 py-0.5 text-sm ">
        {row.getValue("role")}
      </div>
    ),
  },
  {
    accessorKey: "created_at",
    header: () => <div className="text-center uppercase">Created At</div>,
    cell: ({ row }) => <div className="capitalize text-center">{row.getValue("created_at")}</div>,
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
      )
    },
  },
]
