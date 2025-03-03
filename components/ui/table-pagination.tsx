import { Table } from "@tanstack/react-table"
import {
  ArrowLeft,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface DataTablePaginationProps<TData> {
  table: Table<TData>
}

export function DataTablePagination<TData>({ table }: DataTablePaginationProps<TData>) {
  const pageIndex = table.getState().pagination.pageIndex
  const pageSize = table.getState().pagination.pageSize
  const totalRows = table.getFilteredRowModel().rows.length

  const startRow = totalRows === 0 ? 0 : pageIndex * pageSize + 1
  const endRow = Math.min((pageIndex + 1) * pageSize, totalRows)

  return (
    <div className="flex items-center justify-end px-2 py-6">
      <div className="flex gap-10">
        <div className="flex items-center justify-center text-sm font-medium">
          {/* Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()} */}
          <p className="text-sm text-muted-foreground w-full">
            Showing {startRow} to {endRow} ({totalRows} results)
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            // className="h-8 w-8 p-0"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <span className="sr-only">Go to previous page</span>
            <ArrowLeft /> Previous
          </Button>
          <Button
            variant="outline"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <span className="sr-only">Go to next page</span>
            Next <ArrowRight />
          </Button>
        </div>
      </div>
    </div>
  )
}
