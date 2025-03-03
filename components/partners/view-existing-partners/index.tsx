import { DataTableDemo } from "@/components/table"
import { DataTable } from "@/components/ui/data-table"
import React from "react"
import { columns } from "./columns"

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

export default function ExistingPartners() {
  return (
    <div>
      <DataTable data={tableData} columns={columns} />
    </div>
  )
}
