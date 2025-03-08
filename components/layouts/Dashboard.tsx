import React from "react";
import Sidebar from "@/components/Sidebar";
import Topbar from "./topbar";
import { SidebarInset } from "../ui/sidebar";
import { cn } from "@/lib/utils";

const Dashboard = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full flex h-dvh overflow-hidden">
      <Sidebar />
      <div
        className={cn(
          `relative w-full h-dvh flex flex-col bg-gray-100 overflow-y-auto `,
        )}
        style={{ transition: "all 0.3s ease-in-out 0s" }}
      >
        <Topbar />

        <main className="h-[calc(100vh-64px)] container mx-auto py-4 px-8 overflow-auto">
          {children ?? <div className="flex-1 div-center">No Content</div>}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
