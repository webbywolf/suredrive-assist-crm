"use client";
import { Button } from "@/components/ui/button";
import { Tv, UserRoundPlus } from "lucide-react";
import EditRole from "./edit-role";
import AddRole from "./add-role";
import UsersRoleTable from "./data/data";
import { CustomCard } from "@/components/ui/custom-card";

export const Roles = () => {
  return (
    <div className="space-y-5">
      <div className="">
        <h2 className="text-2xl font-medium mb-2">Roles</h2>
        <p className="text-slate-800 mb-8 max-w-2xl">
          A role provided access to predefined menus and features so that
          depending on assigned role an administrator can have access to what
          user needs.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {["Administrator", "User", "Manager", "Admin", "SuperAdmin"].map(
          (role, i) => (
            <CustomCard
              key={role}
              title={`Total: ${10 - i}`}
              content={role}
              className="py-6"
              contentClass="text-xl"
            />
          ),
        )}
        <AddNewRole />
      </div>
      <div className="pt-6">
        <UsersRoleTable />
      </div>
    </div>
  );
};

interface RolesCardProps {
  total: number;
  title: string;
}

const AddNewRole = () => {
  return (
    <CustomCard className="flex flex-row justify-between items-center">
      <div className="w-[60%] ">
        <AddRole />
        <p className="mt-1 text-[15px] text-muted-foreground">
          Add new role, if it doesn't exist.
        </p>
      </div>
      <div>
        <UserRoundPlus size={80} />
      </div>
    </CustomCard>
  );
};
