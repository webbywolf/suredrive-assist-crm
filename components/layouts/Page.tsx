import React from "react"

import { cn } from "@/lib/utils"
import Topbar from "./topbar"

const PageLayout = ({ title, children }: { title?: string; children: React.ReactNode }) => {
  return (
    <div
      className={cn(`relative w-full h-dvh flex flex-col bg-gray-100 overflow-y-auto self-start`)}
      style={{ transition: "all 0.3s ease-in-out 0s" }}
    >
      <Topbar />
      <main className="h-[calc(100vh-64px)] container mx-auto py-4 px-8 overflow-auto">
        {children}
      </main>
    </div>
  )
}

export default PageLayout
