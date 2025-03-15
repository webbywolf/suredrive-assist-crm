"use client"
import React from "react"
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table"
import { DataTablePagination } from "@/components/table/Pagination"

const tableData: Partners[] = [
  {
    dealership: "XYZ COMPANY",
    contactPerson: "Naman Singh",
    status: "Pending",
    totalSales: "Rs. 8,600",
    createdAt: "24/02/2025",
  },
  {
    dealership: "XYZ COMPANY",
    contactPerson: "Darshan Singh",
    status: "Pending",
    totalSales: "Rs. 11,235",
    createdAt: "24/02/2025",
  },
  {
    dealership: "XYZ COMPANY",
    contactPerson: "Munaf Singh",
    status: "Pending",
    totalSales: "Rs. 23,746",
    createdAt: "24/02/2025",
  },
  {
    dealership: "XYZ COMPANY",
    contactPerson: "Abhishek Jain",
    status: "Active",
    totalSales: "Rs. 2,123",
    createdAt: "24/02/2025",
  },
  {
    dealership: "XYZ COMPANY",
    contactPerson: "Vinay Gupta",
    status: "Active",
    totalSales: "Rs. 21,564",
    createdAt: "24/02/2025",
  },
  {
    dealership: "XYZ COMPANY",
    contactPerson: "Komal Sharma",
    status: "Active",
    totalSales: "Rs. 19,876",
    createdAt: "24/02/2025",
  },
  {
    dealership: "XYZ COMPANY",
    contactPerson: "Rahul Sharma",
    status: "Active",
    totalSales: "Rs. 6,890",
    createdAt: "24/02/2025",
  },
  {
    dealership: "XYZ COMPANY",
    contactPerson: "Mukesh Singh",
    status: "Active",
    totalSales: "Rs. 10,221",
    createdAt: "24/02/2025",
  },
  {
    dealership: "XYZ COMPANY",
    contactPerson: "Parag Jain",
    status: "Active",
    totalSales: "Rs. 4,673",
    createdAt: "24/02/2025",
  },
  {
    dealership: "XYZ COMPANY",
    contactPerson: "Jasprit Singh",
    status: "Active",
    totalSales: "Rs. 5,367",
    createdAt: "24/02/2025",
  },
]

export default function ExistingServices() {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})

  const table = useReactTable({
    data: tableData,
    columns: [],
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  })
  console.log(table.getRowModel().rows.map((row) => row.original))
  return (
    <div className="div-center h-100">
      <p>Working...</p>
      {/* <CustomFilterHeader table={table} filterBy="contactPerson" /> */}
      {/* <Table>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="">
                <td key={row.id}>{JSON.stringify(row.original, null, 2)}</td>
              </tr>
            ))
          ) : (
            <TableRow>
              <TableCell className="h-24 text-center">No results.</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <DataTablePagination table={table} /> */}
    </div>
  )
}

const DataCard = () => {
  return <div></div>
}
