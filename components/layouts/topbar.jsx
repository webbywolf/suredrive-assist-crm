import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Link from "next/link";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
} from "../ui/dropdown-menu";
import { Bell } from "lucide-react";

export default function Topbar() {
  return (
    <header className="sticky top-0 w-full h-16 bg-gray-100 flex items-center border-b border-border z-10 px-8">
      <nav className="h-full w-full flex justify-between items-center ">
        <div className="flex justify-between items-center ">
          <div>
            <p>Welcome, Diwakar</p>
          </div>
        </div>

        <div className="flex gap-4 items-center">
          <div>
            <Button variant="outline" size="lg" className="rounded-sm">
              Raise an issue
            </Button>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="cursor-pointer">
              <Button size="icon" variant="outline">
                <Bell />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[150px]">
              <DropdownMenuLabel>Notifications</DropdownMenuLabel>
              <DropdownMenuSeparator />
              Hello
            </DropdownMenuContent>
          </DropdownMenu>

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
    </header>
  );
}
