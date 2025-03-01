import AddNewUser from "@/components/add-new-user/AddNewUser"
import React from "react"

export default async function Page({ params }: { params: { slug: string } }) {
  const slug = (await params).slug
  console.log(slug)
  if (slug === "add") {
    return <AddNewUser />
  }
}
