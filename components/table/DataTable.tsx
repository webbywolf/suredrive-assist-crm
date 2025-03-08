"use client";

import * as React from "react";
import {
  Table,
  Column,
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import {
  Table as TableComponent,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { DataTablePagination } from "./Pagination";
import { DataTableToolbar } from "./Toolbar";
import { Columns, Columns3, FilterIcon, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import Link from "next/link";
// import axios from "axios"
// import toast from "react-hot-toast"

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  paginationOption?: boolean;
  forceDisabledButton?: boolean;
  filterOptions?: { label: string; value: string };
  addButton?: { label: string; location: string };
}

export function DataTable<TData, TValue>({
  columns,
  data,
  filterOptions = { label: "name", value: "name" },
  addButton,
  paginationOption,
  forceDisabledButton,
}: DataTableProps<TData, TValue>) {
  const [rowSelection, setRowSelection] = React.useState({});
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    [],
  );
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [isFilter, setIsFilter] = React.useState(false);

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      columnVisibility,
      rowSelection,
      columnFilters,
    },
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
  });
  const isFiltered = table.getState().columnFilters.length > 0;
  // const { appState } = useAppContext()
  const [open, setOpen] = React.useState(false);
  // const queryClient = useQueryClient()
  const [enabled, setEnabled] = React.useState(false);

  // const {
  //   data: forceExpire,
  //   refetch,
  //   isLoading,
  // } = useQuery({
  //   queryKey: ["force-expire"],
  //   queryFn: async () => {
  //     const { data } = await axios.post(
  //       "/api/student/force-expire",
  //       {},
  //       {
  //         headers: {
  //           Authorization: "ppabhyasika@247",
  //         },
  //       }
  //     )
  //     if (data.success) {
  //       toast.success(data.message)
  //       queryClient.invalidateQueries({ queryKey: ["students"] })
  //       setOpen(false)
  //       setEnabled(false)
  //     }
  //   },
  //   enabled: enabled,
  // })

  return (
    <div className="w-full space-y-4">
      <div className="flex items-center justify-end gap-2">
        <div className="flex-1 flex justify-start items-center h-10 text-sm text-gray-500">
          Total:{" "}
          <span className="text-gray-900 font-semibold">
            {table.getFilteredRowModel().rows.length} Records
          </span>
        </div>

        {addButton && (
          <Button variant="outline" size="lg" className="text-slate-600">
            <Link href={addButton.location}>{addButton.label}</Link>
          </Button>
        )}
        <input
          placeholder={`Search by ${filterOptions.label}`}
          type="text"
          className="flex items-center px-4 py-2.5 rounded-md border border-border text-slate-600 text-sm bg-white outline-none shadow-box"
          onChange={(event) =>
            table
              .getColumn(filterOptions.value)
              ?.setFilterValue(event.target.value)
          }
        />
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <X className="ml-2 h-4 w-4" />
          </Button>
        )}
        <button
          className={cn(
            `flex items-center px-4 py-2.5 cursor-pointer rounded-md border border-border text-slate-600 text-sm bg-white outline-none shadow-box transition-all`,
            {
              "bg-brand text-white bg-slate-600": isFilter,
            },
          )}
          onClick={() => setIsFilter(!isFilter)}
        >
          <FilterIcon className="h-4 w-4 text-salte-500 mr-1" />
          Filters
        </button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild className="cursor-pointer">
            <button className="hidden px-4 py-2.5 rounded-md border border-border text-slate-600 text-sm bg-white outline-none lg:flex items-center shadow-box">
              <Columns3 className="h-4 w-4 text-salte-500 mr-1" />
              Columns
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-[150px]">
            <DropdownMenuLabel>Toggle columns</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {table
              .getAllColumns()
              .filter(
                (column) =>
                  typeof column.accessorFn !== "undefined" &&
                  column.getCanHide(),
              )
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border border-border bg-white shadow-box overflow-hidden">
        <TableComponent>
          <TableHeader className="border-border">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow
                key={headerGroup.id}
                className="text-slate-700 border-b border-border"
              >
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead
                      key={header.id}
                      colSpan={header.colSpan}
                      className="text-xs uppercase py-4 border-b border-border"
                    >
                      <span className="font-bold block">
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext(),
                            )}
                      </span>
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} className="">
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead
                      key={header.id}
                      colSpan={header.colSpan}
                      className={cn(
                        `text-xs text-slate-700 py-0 font-semibold uppercase -h-0 transition-all`,
                        {
                          "py-4": isFilter,
                        },
                      )}
                    >
                      {/* {header.column.getSize()} */}
                      {header.column.getCanFilter() && isFilter && (
                        <Filter
                          width={header.column.getSize()}
                          placeholder={"search"}
                          column={header.column}
                          table={table}
                        />
                      )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  className="text-slate-600 font-medium odd:bg-gray-100"
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className="capitalize">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </TableComponent>
      </div>
      {paginationOption && data.length > 9 && (
        <DataTablePagination table={table} />
      )}
    </div>
  );
}

function Filter({
  column,
  table,
  width,
  placeholder,
}: {
  column: Column<any, unknown>;
  table: Table<any>;
  placeholder?: string;
  width?: number;
}) {
  const firstValue = table
    .getPreFilteredRowModel()
    .flatRows[0]?.getValue(column.id);

  const columnFilterValue = column.getFilterValue();

  const sortedUniqueValues = React.useMemo(
    () =>
      typeof firstValue === "number"
        ? []
        : Array.from(column.getFacetedUniqueValues().keys()).sort(),
    [column.getFacetedUniqueValues()],
  );

  return typeof firstValue === "number" ? (
    <DebouncedInput
      value={(columnFilterValue as [number, number])?.[0] ?? ""}
      onChange={(value) => column.setFilterValue(value)}
      className="w-min-5 w-auto font-normal mt-1 text-sm px-2 py-1 border border-gray-200 focus:border-gray-300 rounded-[3px] outline-none transition-all"
      style={{ width: width }}
    />
  ) : (
    <div className="relative flex items-center">
      {/* <datalist id={column.id + "list"}>
    {sortedUniqueValues.slice(0, 5000).map((value: any) => (
      <option value={value} key={value} />
    ))}
  </datalist> */}
      <DebouncedInput
        type="text"
        value={(columnFilterValue ?? "") as string}
        onChange={(value) => column.setFilterValue(value)}
        className="w-min-5 w-auto font-normal mt-1 text-sm px-2 py-1 border border-gray-200 focus:border-gray-300 rounded-[3px] outline-none transition-all"
        list={column.id + "list"}
        style={{ width: width }}
      />

      {Boolean(columnFilterValue) && (
        <button
          className="absolute text-gray-500 hover:text-gray-700 right-2 top-2.5"
          onClick={() => column.setFilterValue("")}
        >
          <X size={16} />
        </button>
      )}
    </div>
  );
}

// A debounced input react component
function DebouncedInput({
  value: initialValue,
  onChange,
  debounce = 500,
  ...props
}: {
  value: string | number;
  onChange: (value: string | number) => void;
  debounce?: number;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange">) {
  const [value, setValue] = React.useState(initialValue);

  React.useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value);
    }, debounce);

    return () => clearTimeout(timeout);
  }, [value]);

  return (
    <input
      {...props}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}
