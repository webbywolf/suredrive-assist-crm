import React from "react"
import Sidebar from "@/components/Sidebar"
import { cn } from "@/lib/utils"
import Header from "@/components/Header"

const Dashboard = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-dvh grid grid-cols-[240px_1fr] overflow-hidden">
      <Sidebar />
      {children}
    </div>
  )
}

export default Dashboard
