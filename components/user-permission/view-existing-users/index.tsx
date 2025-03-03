import { DataTableDemo } from "@/components/table"
import { DataTable } from "@/components/ui/data-table"
import React from "react"
import { Users } from "./types"
import { columns } from "./columns"
const data: Users[] = [
  {
    name: "Aarav Mehta",
    email: "amehta@suredriveassist.com",
    role: "Operations",
    created_at: "24/02/2025",
  },
  {
    name: "Vikas Mehra",
    email: "vikasm@suredriveassist.com",
    role: "Sales",
    created_at: "24/02/2025",
  },
  {
    name: "Pankaj",
    email: "pankaj@suredriveassist.com",
    role: "Admin",
    created_at: "24/02/2025",
  },
  {
    name: "Rajesh",
    email: "rajesh@suredriveassist.com",
    role: "Admin",
    created_at: "24/02/2025",
  },
  {
    name: "Apoorva",
    email: "apoorva@suredriveassist.com",
    role: "Operations",
    created_at: "24/02/2025",
  },
  {
    name: "Brijesh",
    email: "brijesh@suredriveassist.com",
    role: "Operations",
    created_at: "24/02/2025",
  },
  {
    name: "Mukesh Singh",
    email: "mukesh@suredriveassist.com",
    role: "Sales",
    created_at: "24/02/2025",
  },
  {
    name: "Yash Patel",
    email: "yesh@suredriveassist.com",
    role: "Sales",
    created_at: "24/02/2025",
  },
  {
    name: "Darshan Singh",
    email: "darshan@suredriveassist.com",
    role: "Sales",
    created_at: "24/02/2025",
  },
  {
    name: "Naman Singh",
    email: "naman@suredriveassist.com",
    role: "Sales",
    created_at: "24/02/2025",
  },
  {
    name: "Ravi Gupta",
    email: "ravigupta@suredriveassist.com",
    role: "Operations",
    created_at: "24/02/2025",
  },
  {
    name: "Vikas Mehra",
    email: "vikasm@suredriveassist.com",
    role: "Sales",
    created_at: "24/02/2025",
  },
  {
    name: "Pankaj",
    email: "pankaj@suredriveassist.com",
    role: "Admin",
    created_at: "24/02/2025",
  },
  {
    name: "Rajesh",
    email: "rajesh@suredriveassist.com",
    role: "Admin",
    created_at: "24/02/2025",
  },
  {
    name: "Apoorva",
    email: "apoorva@suredriveassist.com",
    role: "Operations",
    created_at: "24/02/2025",
  },
  {
    name: "Brijesh",
    email: "brijesh@suredriveassist.com",
    role: "Operations",
    created_at: "24/02/2025",
  },
  {
    name: "Mukesh Singh",
    email: "mukesh@suredriveassist.com",
    role: "Sales",
    created_at: "24/02/2025",
  },
  {
    name: "Yash Patel",
    email: "yesh@suredriveassist.com",
    role: "Sales",
    created_at: "24/02/2025",
  },
  {
    name: "Darshan Singh",
    email: "darshan@suredriveassist.com",
    role: "Sales",
    created_at: "24/02/2025",
  },
  {
    name: "Naman Singh",
    email: "naman@suredriveassist.com",
    role: "Sales",
    created_at: "24/02/2025",
  },
]

export default function ExistingUsers() {
  return (
    <div>
      <DataTable data={data} columns={columns} />
    </div>
  )
}
