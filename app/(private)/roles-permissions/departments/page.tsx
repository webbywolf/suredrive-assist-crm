import React from "react";
import Page from "@/components/layouts/Page";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Building2, Tv, UserRoundPlus } from "lucide-react";
import AllDepartmentUsersTable from "./data";
import { CustomCard } from "@/components/ui/custom-card";
import AddNewDepartment from "./add-department";

export const metadata: Metadata = {
  title: "Departments",
  description: "Departments",
};

const Departments = () => {
  return (
    <Page title="Departments">
      <div className="space-y-5">
        <div className="">
          <h2 className="text-2xl font-medium mb-2">Departments</h2>
          <p className="text-slate-800 mb-8 max-w-2xl">
            Departments organize users into functional groups within the
            organization so that administrators can manage teams effectively and
            assign appropriate permissions based on departmental needs.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            "Human Resources",
            "Marketing",
            "Finance",
            "Engineering",
            "Operations",
          ].map((role, i) => (
            <CustomCard
              key={role}
              title={`Total: ${10 - i}`}
              content={role}
              className="py-6"
              contentClass="text-xl"
            />
          ))}
          <AddDepartment />
        </div>
        <div className="pt-6">
          <AllDepartmentUsersTable />
        </div>
      </div>
    </Page>
  );
};

export default Departments;

const AddDepartment = () => {
  return (
    <CustomCard className="flex flex-row justify-between items-center">
      <div className="w-[60%] ">
        <AddNewDepartment />
        <p className="mt-1 text-[15px] text-muted-foreground">
          Add new department, if it doesn't exist.
        </p>
      </div>
      <div>
        <Building2 size={80} />
      </div>
    </CustomCard>
  );
};
