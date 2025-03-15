"use client"
import React from "react"
import { DataTable } from "@/components/table/DataTable"
import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, Delete, Edit, EllipsisVertical, Pencil, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { cn } from "@/lib/utils"

export interface User {
  id: string
  name: string
  department: string
  status: string
}

const tableData: User[] = [
  {
    id: "SDA-001",
    name: "John Doe",
    department: "Human Resources",
    status: "Active",
  },
  {
    id: "SDA-002",
    name: "Jane Smith",
    department: "Marketing",
    status: "Inactive",
  },
  {
    id: "SDA-003",
    name: "Michael Johnson",
    department: "Finance",
    status: "Inactive",
  },
  {
    id: "SDA-004",
    name: "Emily Brown",
    department: "Engineering",
    status: "Active",
  },
  {
    id: "SDA-005",
    name: "Daniel White",
    department: "Operations",
    status: "Pending",
  },
  {
    id: "SDA-006",
    name: "Sarah Miller",
    department: "Human Resources",
    status: "Active",
  },
  {
    id: "SDA-007",
    name: "James Wilson",
    department: "Engineering",
    status: "Pending",
  },
  {
    id: "SDA-008",
    name: "Olivia Martinez",
    department: "Marketing",
    status: "Pending",
  },
  {
    id: "SDA-009",
    name: "William Davis",
    department: "Operations",
    status: "Pending",
  },
  {
    id: "SDA-010",
    name: "Sophia Anderson",
    department: "Finance",
    status: "Inactive",
  },
  {
    id: "SDA-011",
    name: "Benjamin Thomas",
    department: "Engineering",
    status: "Active",
  },
  {
    id: "SDA-012",
    name: "Charlotte Harris",
    department: "Marketing",
    status: "Pending",
  },
  {
    id: "SDA-013",
    name: "Liam Martin",
    department: "Human Resources",
    status: "Active",
  },
  {
    id: "SDA-014",
    name: "Amelia Thompson",
    department: "Finance",
    status: "Pending",
  },
  {
    id: "SDA-015",
    name: "Noah Garcia",
    department: "Operations",
    status: "Inactive",
  },
]

export default function AllUsersTable() {
  return (
    <DataTable
      columns={columns}
      data={tableData}
      filterOptions={{ label: "Employee ID", value: "id" }}
      paginationOption
    />
  )
}

const columns: ColumnDef<User>[] = [
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
    accessorKey: "department",
    header: () => <div className=" uppercase">Department</div>,
    cell: ({ row }) => <div className="capitalize">{row.getValue("department")}</div>,
  },
  {
    accessorKey: "status",
    header: () => <div className=" uppercase">status</div>,
    cell: ({ row }) => (
      <div
        className={cn(
          "capitalize border border-gray-300 bg-white rounded-full w-20 text-center p-1.5 text-[12px] ",
          { "bg-green-700 text-white": row.getValue("status") === "Active" },
          { "bg-amber-500 text-white": row.getValue("status") !== "Active" }
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
      console.log(row.getValue("id"))
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
      )
    },
  },
]
