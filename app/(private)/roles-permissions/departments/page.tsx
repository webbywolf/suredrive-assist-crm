import React from "react";
import Page from "@/components/layouts/Page";
import { Metadata } from "next";
import Departments from "./departments";

export const metadata: Metadata = {
  title: "Departments",
  description: "Departments",
};

const DepartmentsPage = () => {
  return (
    <Page title="Departments">
      <Departments />
    </Page>
  );
};

export default DepartmentsPage;
