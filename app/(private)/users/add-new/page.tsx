import Onboarding from "@/components/employee-onboarding";
import React from "react";

export default async function Page({ params }: { params: { slug: string } }) {
  return <Onboarding />;
}
