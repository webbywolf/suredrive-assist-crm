import AddNewUser from "@/components/user-permission/add-new-user/AddNewUser"
import ExistingUsers from "@/components/user-permission/view-existing-users"
import React from "react"

export default async function Page({ params }: { params: { slug: string } }) {
  const slug = (await params).slug
  console.log(slug)
  if (slug === "add") {
    return <AddNewUser />
  }
  if (slug === "alluser") {
    // return <AddNewUser />
    return <ExistingUsers />
  }
}
