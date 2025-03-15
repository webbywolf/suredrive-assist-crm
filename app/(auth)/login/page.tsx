import React from "react"
import Form from "./form"
import Image from "next/image"
import { Metadata } from "next"
import { Heart } from "lucide-react"
export const metadata: Metadata = {
  title: "Login",
  description: "Login to your account",
}

const page = () => {
  return (
    <main className="relative w-full h-dvh py-4 container mx-auto flex flex-col">
      <div
        className="absolute top-0 w-[370px] h-[490px] md:left-[500px] blur-[140px] md:rotate-[14deg] bg-no-repeat bg-cover bg-center"
        style={{
          background: `linear-gradient(180deg,
  rgba(253, 164, 175, 0.2) 0%,
  rgba(255, 136, 239, 0.6) 100%,
  rgba(246, 165, 124, 0.2) 100%
)`,
        }}
      ></div>

      <div className="flex items-center justify-center md:justify-start gap-2 py-4">
        <img loading="lazy" src="/assets/images/logo.svg" width={200} alt="logo" />
      </div>
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="content text-center mb-4">
          <h1 className="text-[26px] font-bold">Welcome Back</h1>
          <p className="text-sm text-slate-600">Please enter your details to sign in.</p>
        </div>
        <Form />
      </div>
      {/* <footer className="text-slate-600 text-xs md:text-sm border-t border-border flex flex-col items-center md:flex-row gap-1 justify-between py-4">
        <p>© 2025 SureDrive Assistant. All rights reserved.</p>
        <p className="inline-flex items-center gap-2">
          Made with <Heart size={16} /> By WebbyWolf
        </p>
      </footer> */}
    </main>
  )
}

export default page
