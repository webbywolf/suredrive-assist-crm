import { SidebarInset, SidebarProvider, SidebarTrigger } from "../ui/sidebar"
import { AppSidebar } from "../app-sidebar"
import Topbar from "./topbar"

export default function Dashboard({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="bg-background sticky top-0 flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Topbar />
        </header>
        <div className="">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  )
}
