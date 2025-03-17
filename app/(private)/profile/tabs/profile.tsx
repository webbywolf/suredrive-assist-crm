"use client";
import { cn } from "@/lib/utils";
import {
  LibraryBig,
  SunMoon,
  Crown,
  Backpack,
  Printer,
  Trash,
  DeleteIcon,
  Delete,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { PersonalInfoTab } from "./personal-info";
import { RolesPermissionOverviewTab } from "./roles-permission";
import { NotificationTab } from "./notification";

export const Profile = () => {
  const [tab, setTab] = useState("0");

  const tabs = [
    {
      id: "0",
      name: "Personal Info",
      component: <PersonalInfoTab />,
    },
    {
      id: "1",
      name: "Roles & Permissions Overview",
      component: <RolesPermissionOverviewTab />,
    },
    {
      id: "2",
      name: "Notifications",
      component: <NotificationTab />,
    },
  ];
  return (
    <div className="w-full h-full grid grid-cols-12 grid-rows-12 gap-4">
      <div className="relative bg-white col-span-3 row-span-8 rounded-md border border-gray-200 overflow-auto">
        <span
          className={cn(
            `absolute top-3 py-0.5 px-4 rounded-r-full text-sm text-white capitalize font-semibold`,
            // {
            //   "bg-green-500": admission.status === "active",
            //   "bg-red-500": admission.status === "expired",
            // },
          )}
        >
          Active{" "}
        </span>
        <div className="py-6 flex flex-col gap-2 justify-center items-center">
          <Avatar
            className={cn(`relative w-24 h-24 ring-2 p-1 overflow-visible`, {
              // "ring-2 ring-yellow-500":
              //   admission.libraryAccess && admission.fullDayAccess,
              // "ring-2 ring-blue-500":
              //   admission.libraryAccess && !admission.fullDayAccess,
              // "ring-2 ring-lime-500":
              //   !admission.libraryAccess && admission.fullDayAccess,
              // "ring-2 ring-gray-200":
              //   !admission.libraryAccess && !admission.fullDayAccess,
            })}
          >
            <AvatarImage src="" alt="@shadcn" />
            <AvatarFallback className="font-semibold">DS</AvatarFallback>
          </Avatar>
          <h2 className="text-lg font-bold text-gray-700 capitalize">
            Diwakar Singh
          </h2>
          <span className="text-[10px] px-2 p-[2px] text-gray-500 border border-gray-200 rounded-full">
            Employee Id: 001
          </span>
        </div>
        <div className="text-sm text-center flex flex-col gap-2 text-gray-600">
          <span className="inline-block py-2 font-semibold border-t border-b border-gray-200 mb-3">
            Membership
          </span>
          <div className="flex items-center gap-2 justify-center">
            <Backpack size={20} />
            <span>Role: CEO</span>
          </div>
        </div>
      </div>

      <div className="col-span-9 row-span-12 rounded-md flex flex-col gap-4">
        <Tabs defaultValue={tab} className="" onValueChange={setTab}>
          <TabsList className="w-full bg-white justify-start items-center h-14 gap-1 rounded-none ">
            {tabs.map((slot) => (
              <TabsTrigger
                value={slot.id}
                className="capitalize py-2.5 max-w-60 h-10 hover:bg-accent cursor-pointer  border-border data-[state=active]:bg-brand-secondary data-[state=active]:text-background "
                key={slot.id}
              >
                {slot.name}
              </TabsTrigger>
            ))}
          </TabsList>
          {tabs.find((t) => t.id === tab)?.component}
        </Tabs>
      </div>
      <div className="col-span-3 row-span-6 flex flex-col gap-2.5">
        <Button variant="destructive">
          <Trash /> Delete Account
        </Button>
      </div>
    </div>
  );
};
