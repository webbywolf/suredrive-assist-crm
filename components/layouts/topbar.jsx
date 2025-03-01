import React from "react"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"

export default function Topbar() {
  return (
    <nav className="h-full w-full flex justify-between items-center ">
      <div className="flex justify-between items-center ">
        <div>
          <p>Welcome, Diwakar</p>
        </div>
      </div>
      <div className="flex gap-2 justify-center items-center">
        <div className="flex justify-center items-center flex-col">
          <p className="text-sm ">Diwakar</p>
          <p className="text-sm text-muted-foreground">admin</p>
        </div>
        <div className="relative">
          <Avatar className="relative z-1">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <span className="absolute bottom-0 right-0 size-2 rounded-full bg-green-600 z-10" />
        </div>
      </div>
    </nav>
  )
}
