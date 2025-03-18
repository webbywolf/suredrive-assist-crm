"use client";
import React from "react";
import { DataTable } from "@/components/table/DataTable";
import { columns } from "./columns";
import { Department } from "../departments";

interface AllDepartmentUsersTableProps {
  data: Department[];
}

export default function AllDepartmentUsersTable({
  data,
}: AllDepartmentUsersTableProps) {
  return (
    <DataTable
      columns={columns}
      data={data}
      filterOptions={{ label: "Department Name", value: "name" }}
      paginationOption
    />
  );
}
