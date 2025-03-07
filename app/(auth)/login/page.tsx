import { Input } from "@/components/ui/input"
import { Heart } from "lucide-react"
import React from "react"
import Form from "./form"
import Image from "next/image"

const page = () => {
  return (
    <main className="w-full h-dvh">
      <div className="flex h-full">
        <div className="h-full w-1/2 relative">
          <Image
            src="/assets/images/main.png"
            alt="Login Background"
            fill
            className="object-cover absolute h-full w-full top-0 inset-0 z-11"
          />
          <div
            style={{ clipPath: "polygon(100% 0, 71% 100%, 100% 100%)" }}
            className="bg-background z-999 absolute h-full w-full top-0 inset-0"
          />
        </div>
        <div className="flex flex-col items-center justify-center w-1/2 space-y-3 relative">
          <div className="div-center flex-col space-y-1">
            <div className=""></div>
            <Image
              src="/assets/images/logo.svg"
              alt="logo"
              height={20}
              width={200}
              className="absolute top-10 "
            />
            <h1 className="text-2xl font-bold text-primary">Welcome Back</h1>
            <p className="text-accent-foreground/80">Please enter your details to sign in.</p>
          </div>
          <Form />
        </div>
      </div>
    </main>
  )
}

export default page
