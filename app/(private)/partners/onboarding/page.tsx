import React from "react";
import Page from "@/components/layouts/Page";
import { Metadata } from "next";
import PartnerOnboarding from "@/forms/partner-onboarding";

export const metadata: Metadata = {
  title: "Partner Onboarding",
  description: "Partner Onboarding",
};

const page = () => {
  return (
    <Page title="Partner Onboarding">
      <PartnerOnboarding />
      {/* <h1>Partner Onboarding</h1> */}
    </Page>
  );
};

export default page;
