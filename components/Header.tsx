'use client'
import React from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu"
import { Bell } from "lucide-react"
import { Skeleton } from "@/components/ui/skeleton";
import useEmployee from "@/hooks/useEmployee"
const Header = ({ title }: { title?: string }) => {
  const { employee: data, isLoading: employeeLoading } = useEmployee();

  return (
    <header className="w-full h-full bg-gray-100 flex items-center border-b border-border px-6 py-2">
      <nav className="h-full w-full flex justify-between items-center ">
        <div className="flex justify-between items-center ">
          <h1 className="text-lg font-bold capitalize text-gray-800">
            {title ? title : "Dashboard"}
          </h1>
        </div>

        <div className="flex gap-2 items-center h-full">
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="cursor-pointer hover:bg-white relative">
              <Button size="icon" variant="outline" className="relative">
                <Bell />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-white text-[10px] font-semibold flex item-cener justify-center">
                  3
                </div>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[150px]">
              <DropdownMenuLabel>Notifications</DropdownMenuLabel>
              <DropdownMenuSeparator />
              Hello
            </DropdownMenuContent>
          </DropdownMenu>

          <div className="flex justify-center items-center cursor-pointer px-3 h-full border border-gray-200 bg-white gap-2 rounded-md">
            <div className="flex flex-col">
              {employeeLoading ? <Skeleton className="w-[90px] h-[20px] bg-gray-200 rounded-md" />: <p className="text-[12px] text-gray-600 font-medium">{data?.employee.name}</p>}
              <span className="text-[9px] text-gray-500 text-right inline-block">ID: {data?.employee.employee_id}</span>
              
            </div>
            <Avatar className="size-6.5">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback className="text-xs">DW</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
