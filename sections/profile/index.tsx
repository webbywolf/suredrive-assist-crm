"use client";
import { cn } from "@/lib/utils";
import Admission from "@/tabs/student/admission";
import {
  LibraryBig,
  SunMoon,
  Crown,
  Backpack,
  Printer,
  Trash,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

import React, { useState } from "react";
import Personal from "@/tabs/student/personal";
import Seat from "@/tabs/student/seat";
import Attendance from "@/tabs/student/attendace";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";
import DeleteStudent from "@/components/actions/DeleteStudent";

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

const Student = ({ data }: StudentProps) => {
  const { personal, admission, payment } = data;
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
            <AvatarImage
              src={
                personal.gender === "male"
                  ? "/assets/images/boy.jpeg"
                  : "/assets/images/girl.jpeg"
              }
              alt="@shadcn"
            />
            <AvatarFallback className="font-semibold">
              {personal.name.charAt(0)} &nbsp; {personal.surname.charAt(0)}
            </AvatarFallback>
            {admission.libraryAccess && admission.fullDayAccess && (
              <Crown
                size={20}
                className=" absolute -top-0 -right-1 z-10 text-yellow-600"
              />
            )}
            {admission.libraryAccess && !admission.fullDayAccess && (
              <LibraryBig
                size={20}
                className=" absolute -top-0 -right-1 z-10 text-blue-600"
              />
            )}
            {!admission.libraryAccess && admission.fullDayAccess && (
              <SunMoon
                size={20}
                className=" absolute -top-0 -right-1 z-10 text-lime-600"
              />
            )}
          </Avatar>
          <h2 className="text-lg font-bold text-gray-700 capitalize">
            {personal.name} {personal.surname}
          </h2>
          <span className="text-[10px] px-2 p-[2px] text-gray-500 border border-gray-200 rounded-full">
            Roll No: {admission.rollNo}
          </span>
        </div>
        <div className="text-sm text-center flex flex-col gap-2 text-gray-600">
          <span className="inline-block py-2 font-semibold border-t border-b border-gray-200 mb-3">
            Membership
          </span>
          <div className="flex items-center gap-2 justify-center">
            <Backpack size={20} />
            <span>Facility Access</span>
          </div>
          {admission.libraryAccess && (
            <div className="flex items-center gap-2 justify-center">
              <LibraryBig size={20} />
              <span>Library Access</span>
            </div>
          )}
          {admission.fullDayAccess && (
            <div className="flex items-center gap-2 justify-center">
              <SunMoon size={20} />
              <span>Full Day Access</span>
            </div>
          )}
        </div>
      </div>

      <div className="col-span-9 row-span-12 rounded-md flex flex-col gap-4">
        <Tabs defaultValue={tab} className="" onValueChange={setTab}>
          <TabsList className="w-full bg-white p-2.5 border justify-start border-gray-200 gap-1">
            {tabs.map((slot) => (
              <TabsTrigger
                value={slot.id}
                className="capitalize py-2.5 border border-gray-200"
                key={slot.id}
              >
                {slot.name}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
        {tab === "0" && <Attendance admissionId={data.admission._id} />}
        {tab === "1" && <Admission admission={admission} payment={payment} />}
        {tab === "2" && <Personal student={data} />}
        {tab === "3" && <Seat student={data} />}
      </div>
      <div className="col-span-3 row-span-6 flex flex-col gap-2.5">
        <button
          disabled={true}
          className="disabled:cursor-not-allowed disabled:bg-gray-200 flex items-center gap-1 justify-center text-sm font-medium border border-gray-200 px-4 py-3 w-full rounded-md bg-white text-gray-600 hover:bg-gray-900 transition-all"
        >
          <Printer size={16} /> Print Admission
        </button>
        <DeleteStudent
          id={data._id}
          name={data.personal.name}
          surname={data.personal.surname}
          buttonType="button"
        />
      </div>
    </div>
  );
};

export default Student;
