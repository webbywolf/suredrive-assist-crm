"use client";
import React from "react";
import Page from "@/components/layouts/Page";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Building2, Tv, UserRoundPlus } from "lucide-react";
import AllDepartmentUsersTable from "./data";
import { CustomCard } from "@/components/ui/custom-card";
import AddNewDepartment from "./add-department";
import { useGetDepartments } from "@/queries/departmentQueries";
import { z } from "zod";

// Define the Department type based on the schema
export type Department = {
  id: string;
  name: string;
  description: string;
  created_by: {
    id: string;
    first_name: string;
    last_name: string;
  };
};

const Departments = () => {
  const { data: departments, isLoading } = useGetDepartments();

  // Group departments by name for the cards
  const departmentsByType = departments?.reduce(
    (acc: { [key: string]: Department[] }, dept: Department) => {
      const deptName = dept.name;
      if (!acc[deptName]) {
        acc[deptName] = [];
      }
      acc[deptName].push(dept);
      return acc;
    },
    {} as { [key: string]: Department[] },
  );

  return (
    <div className="space-y-5">
      <div className="">
        <h2 className="mb-2 text-2xl font-medium">Departments</h2>
        <p className="mb-8 max-w-2xl text-slate-800">
          Departments organize users into functional groups within the
          organization so that administrators can manage teams effectively and
          assign appropriate permissions based on departmental needs.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {isLoading
          ? [...Array(6)].map((_, i) => (
              <CustomCard
                key={i}
                title="Loading..."
                content="Loading..."
                className="py-6"
                contentClass="text-md uppercase"
              />
            ))
          : departmentsByType &&
            Object.entries(departmentsByType).map(([name, depts]) => (
              <CustomCard
                key={name}
                title={`Total: ${depts.length}`}
                content={name.replace(/_/g, " ")}
                className="py-6"
                contentClass="text-md uppercase"
              />
            ))}
        {/* <AddDepartment /> */}
      </div>
      <div className="pt-6">
        {departments && <AllDepartmentUsersTable data={departments} />}
      </div>
    </div>
  );
};

export default Departments;

const AddDepartment = () => {
  return (
    <CustomCard className="flex flex-row items-center justify-between">
      <div className="w-[60%]">
        <AddNewDepartment />
        <p className="text-muted-foreground mt-1 text-[15px]">
          Add new department, if it doesn't exist.
        </p>
      </div>
      <div>
        <Building2 size={80} />
      </div>
    </CustomCard>
  );
};
