import React from "react";
import Sidebar from "@/components/Sidebar";

const Dashboard = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="grid grid-cols-[240px_1fr] w-full h-screen">
      <Sidebar />
      <section className="bg-gray-50">{children}</section>
    </main>
  );
};

export default Dashboard;
