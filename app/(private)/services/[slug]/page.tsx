import { AddNewService } from "@/sections/services/add-new-service"
import ExistingServices from "@/sections/services/view-existing-services"
import React from "react"

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  console.log(slug)
  if (slug === "add") {
    return <AddNewService />
  }
  if (slug === "all") {
    return <ExistingServices />
  }
  return <div className="h-[500px] w-full div-center">Relax!! I'm working on it.</div>
}
