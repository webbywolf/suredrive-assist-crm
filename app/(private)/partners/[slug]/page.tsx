import AddNewPartner from "@/sections/partners/add-new-partner"
import ExistingPartners from "@/sections/partners/view-existing-partners"
import React from "react"

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  // const { slug } = await params
  // if (slug === "add") {
  //   return <AddNewPartner />
  // }
  // if (slug === "all") {
  //   // return <AddNewUser />
  //   return <ExistingPartners />
  // }
  return <div className="h-[500px] w-full div-center">Relax!! I'm working on it.</div>
}
