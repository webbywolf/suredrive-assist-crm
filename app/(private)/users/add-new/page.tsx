import Onboarding from "@/sections/employee-onboarding";
import React from "react";

export default async function Page({ params }: { params: { slug: string } }) {
  return <Onboarding />;
}
