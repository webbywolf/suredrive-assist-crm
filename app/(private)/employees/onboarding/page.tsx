import React from "react";
import EmployeeOnboarding from "@/forms/employee-onboarding";
import Page from "@/components/layouts/Page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Employee Onboarding",
  description: "Employee Onboarding",
};

const page = () => {
  return (
    <Page title="Employee Onboarding">
      <EmployeeOnboarding />
      {/* <h1>Employee Onboarding</h1> */}
    </Page>
  );
};

export default page;
