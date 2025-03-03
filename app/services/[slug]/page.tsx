import { AddNewService } from "@/components/services/add-new-service"
import React from "react"

export default async function Page({ params }: { params: { slug: string } }) {
  const slug = (await params).slug
  console.log(slug)
  if (slug === "add") {
    return <AddNewService />
  }
  return <div className="h-[500px] w-full div-center">Relax!! I'm working on it.</div>
}
