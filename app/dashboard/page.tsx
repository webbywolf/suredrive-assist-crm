import { cn } from "@/lib/utils"
import React from "react"

const page = () => {
  return (
    <div className="py-5 flex flex-col h-full w-full gap-2">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <AnalyticsBlock title="Total Users" content="120" />
        <AnalyticsBlock
          title="Total Security Warnings"
          content="11"
          contentClass="text-brand-primary"
        />
        <AnalyticsBlock title="System Uptime/Downtime" content="97%" />
      </div>
      <div className="bg-white flex-1 div-center border border-gray-200">Graph</div>
    </div>
  )
}

export default page

interface BlockProps {
  className?: string
  contentClass?: string
  title: string
  content?: string
  children?: React.ReactNode
}
const AnalyticsBlock: React.FC<BlockProps> = ({
  title,
  className,
  contentClass,
  content,
  children,
}) => {
  return (
    <div className={cn("flex flex-col p-5 bg-white border border-gray-200 font-medium", className)}>
      <h3 className="">{title}</h3>
      <p className={cn("text-3xl font-semibold py-2", contentClass)}>{content}</p>
      {children}
    </div>
  )
}
