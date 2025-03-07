import type { Metadata } from "next";
import Dashboard from "@/components/layouts/Dashboard";

export const metadata: Metadata = {
  title: {
    default: "SureDrive Assist - CRM",
    template: "SureDrive Assist - %s",
  },
  description: "SureDrive CRM",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Dashboard>{children}</Dashboard>;
}
