import Page from "@/components/layouts/Page"
import { cn } from "@/lib/utils"
import React from "react"

const page = () => {
  return (
    <Page>
      <section className="w-full h-full grid grid-cols-12 grid-rows-12 gap-4">
        <AnalyticsBlock title="Employees" content="120" className="col-span-3 row-span-2" />
        <AnalyticsBlock
          title="Dealers"
          content="11"
          contentClass="text-brand-primary"
          className="col-span-3 row-span-2"
        />

        <AnalyticsBlock title="Vendors" content="1000" className="col-span-3 row-span-2" />
        <AnalyticsBlock title="Customer" content="3000" className="col-span-3 row-span-2" />
        <div className="col-span-12 row-span-4 border border-gray-200 bg-white rounded-sm"></div>
        <div className="col-span-4 row-span-6 border border-gray-200 bg-white rounded-sm"></div>
        <div className="col-span-4 row-span-6 border border-gray-200 bg-white rounded-sm"></div>
        <div className="col-span-4 row-span-6 border border-gray-200 bg-white rounded-sm"></div>
        {/* <div className=" col-span-3 row-span-10 h-full border border-gray-200 bg-white rounded-md">
          Graph
        </div> */}
      </section>
    </Page>
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
    <div
      className={cn(
        "flex flex-col justify-center px-4 bg-white border border-gray-200 font-medium rounded-sm",
        className
      )}
    >
      <span className="text-sm text-gray-700 inline-block">{title}</span>
      <p className={cn("text-3xl font-semibold py-2", contentClass)}>{content}</p>
      {children}
    </div>
  )
}
