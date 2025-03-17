import { Metadata } from "next";
import React from "react";
import Data from "./data/data";
import Page from "@/components/layouts/Page";

export const metadata: Metadata = {
  title: "Partners",
  description: "Partners",
};

const page = () => {
  return (
    <Page title="Partners List">
      <Data />
    </Page>
  );
};

export default page;
