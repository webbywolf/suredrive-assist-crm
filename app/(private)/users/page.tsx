import ExistingUsers from "@/sections/user-permission/view-existing-users";
import React from "react";

export default async function Page({ params }: { params: { slug: string } }) {
  return <ExistingUsers />;
}
