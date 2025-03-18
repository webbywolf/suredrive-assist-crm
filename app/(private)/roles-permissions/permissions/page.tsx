import React from "react"
import Page from "@/components/layouts/Page"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Permissions",
  description: "Permissions",
}

const page = () => {
  return <Page title="Permissions">Permissions</Page>
}

export default page
