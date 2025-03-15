import React from "react"
import Page from "@/components/layouts/Page"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Assign Roles",
  description: "Assign roles to employees",
}

const page = () => {
  return <Page title="Assign Roles">Assign Roles</Page>
}

export default page
