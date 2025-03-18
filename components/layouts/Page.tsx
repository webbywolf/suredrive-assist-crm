import React from "react"
import Header from "@/components/Header"

const Page = ({ children, title }: { children: React.ReactNode; title?: string }) => {
  return (
    <div className="h-dvh grid grid-rows-[56px_1fr] bg-gray-100">
      <Header title={title} />
      <main className="h-full overflow-auto p-6">
        {children ?? <div className="flex-1 div-center">No Content</div>}
      </main>
    </div>
  )
}

export default Page
