import type { Metadata } from "next"
import { Open_Sans } from "next/font/google"
import "./globals.css"
import TanstackProvider from "@/context/TanstackProvider"


const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: {
    default: "SureDrive Assist - CRM",
    template: "%s - SureDrive Assist",
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
      <body
        className={`${openSans.className} text-gray-800 antialiased overflow-hidden`}
        suppressHydrationWarning={true}
      >            
      <TanstackProvider>
        {children}
      </TanstackProvider> 
      </body>
    </html>
  )
}
