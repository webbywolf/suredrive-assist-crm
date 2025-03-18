import React from "react";
import Page from "@/components/layouts/Page";
import { Metadata } from "next";
import AllPermissionsTable from "./data/data";

export const metadata: Metadata = {
  title: "Permissions Management",
  description: "Manage system permissions",
};

const page = () => {
  return (
    <Page title="Permissions">
      <AllPermissionsTable />
    </Page>
  );
};

export default page;
