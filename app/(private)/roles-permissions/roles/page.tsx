import React from "react";
import Page from "@/components/layouts/Page";
import { Metadata } from "next";
import { Roles } from "./roles";

export const metadata: Metadata = {
  title: "Roles",
  description: "Roles",
};

const page = () => {
  return (
    <Page title="Roles">
      <Roles />
    </Page>
  );
};

export default page;
