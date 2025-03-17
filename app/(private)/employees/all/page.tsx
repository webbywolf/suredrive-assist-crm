import React from "react";
import ExistingUsers from "./data";
import { Metadata } from "next";
import Page from "@/components/layouts/Page";

export const metadata: Metadata = {
  title: "Employee List",
  description: "Employee List",
};
const AllEmployees = () => {
  return (
    <Page title="Employee List">
      <ExistingUsers />
    </Page>
  );
};

export default AllEmployees;
