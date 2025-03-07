import React from "react";
import Sidebar from "@/components/Sidebar";
import Topbar from "./topbar";
import { SidebarInset } from "../ui/sidebar";

const Dashboard = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex ">
      <Sidebar />
      <SidebarInset className="flex flex-col">
        <header className="bg-background sticky top-0 flex h-16 shrink-0 items-center gap-2 border-b px-4 z-50">
          <Topbar />
        </header>

        <div className="h-[calc(100vh-64px)] container mx-auto py-4 px-8 overflow-auto bg-dashboard">
          {children}
        </div>
      </SidebarInset>
    </main>
  );
};

export default Dashboard;
