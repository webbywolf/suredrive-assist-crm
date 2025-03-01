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
      <div className="flex gap-2">
        <div className="flex justify-center items-center flex-col">
          <p className="text-sm ">Diwakar</p>
          <p className="text-sm text-muted-foreground">admin</p>
        </div>
        <Avatar className="relative">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
          <span className="absolute bottom-0 right-0 size-1 bg-green-600" />
        </Avatar>
      </div>
    </nav>
  )
}
