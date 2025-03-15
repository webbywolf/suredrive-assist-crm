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

interface PersonalDetails {
  _id: string;
  name: string;
  surname: string;
  gender: string;
  dob: string;
  fatherName: string;
  motherName: string;
  fatherPhone: string;
  motherPhone: string;
  createdAt: string;
}

interface AddressDetails {
  address: string;
}

interface EducationDetails {
  qualification: string;
  institute: string;
}

interface Addon {
  name: string;
  fee: number;
  _id: string;
}

interface AdmissionDetails {
  _id: string;
  seatNo: number;
  rollNo: string;
  plan: string;
  planId: string;
  slotId: string;
  libraryAccess: boolean;
  fullDayAccess: boolean;
  addons: Addon[];
  status: string;
  timing: string;
  start: any;
  end: any;
  createdAt: any;
}

interface PaymentDetails {
  _id: string;
  fee: number;
  paid: number;
  paymentMode: string;
  receivedBy: string;
  createdAt: string;
}

interface studentData {
  _id: string;
  username: string;
  email: string;
  phone: string;
  password: string;
  personal: PersonalDetails;
  address: AddressDetails;
  education: EducationDetails;
  admission: AdmissionDetails;
  payment: PaymentDetails;
}

export interface StudentProps {
  data: studentData;
}

export const Profile = () => {
  const [tab, setTab] = useState("0");

  const tabs = [
    {
      id: "0",
      name: "Attendance",
    },
    {
      id: "1",
      name: "Admission & Payment",
    },
    {
      id: "2",
      name: "Personal",
    },
    {
      id: "3",
      name: "Seat change",
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
          <TabsList className="w-full bg-white items-center h-10">
            {tabs.map((slot) => (
              <TabsTrigger
                value={slot.id}
                className="capitalize py-2.5 h-9 cursor-pointer data-[state=active]:bg-brand-secondary data-[state=active]:text-background "
                key={slot.id}
              >
                {slot.name}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
        {tab === "0" && (
          <div className="flex-1 div-center bg-background border border-border rounded-md">
            {" "}
            Tab 1 Content
          </div>
        )}
        {tab === "1" && (
          <div className="flex-1 div-center bg-background border border-border rounded-md">
            {" "}
            Tab 2 Content
          </div>
        )}
        {tab === "2" && (
          <div className="flex-1 div-center bg-background border border-border rounded-md">
            {" "}
            Tab 3 Content
          </div>
        )}
        {tab === "3" && (
          <div className="flex-1 div-center bg-background border border-border rounded-md">
            {" "}
            Tab 4 Content
          </div>
        )}
      </div>
      <div className="col-span-3 row-span-6 flex flex-col gap-2.5">
        <Button variant="destructive">
          <Trash /> Delete Account
        </Button>
      </div>
    </div>
  );
};
