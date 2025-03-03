import type { Metadata } from "next"
import { Geist, Geist_Mono, Inter } from "next/font/google"
import "./globals.css"
import Dashboard from "@/components/layouts/Dashboard"

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// })

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// })

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: {
    default: "SureDrive Assist - CRM",
    template: "SureDrive Assist - %s",
  },
  description: "SureDrive CRM",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}  antialiased`} suppressHydrationWarning={true}>
        <Dashboard>{children}</Dashboard>
      </body>
    </html>
  )
}
