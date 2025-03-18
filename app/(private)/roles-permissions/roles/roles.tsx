"use client";
import { Button } from "@/components/ui/button";
import { Tv, UserRoundPlus } from "lucide-react";
import EditRole from "./edit-role";
import AddRole from "./add-role";
import UsersRoleTable from "./data/data";
import { CustomCard } from "@/components/ui/custom-card";
import { useGetAllRoles } from "@/queries/roleQueries";
import { Role } from "@/types/schemas/roleSchemas";

export const Roles = () => {
  const { data: roles, isLoading } = useGetAllRoles();

  // Group roles by department for the cards
  const rolesByDepartment = roles?.reduce(
    (acc: { [key: string]: Role[] }, role: Role) => {
      const deptName = role.department.name;
      if (!acc[deptName]) {
        acc[deptName] = [];
      }
      acc[deptName].push(role);
      return acc;
    },
    {} as { [key: string]: Role[] },
  );

  return (
    <div className="space-y-5">
      <div className="">
        <h2 className="mb-2 text-2xl font-medium">Roles</h2>
        <p className="mb-8 max-w-2xl text-slate-800">
          A role provided access to predefined menus and features so that
          depending on assigned role an administrator can have access to what
          user needs.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {isLoading
          ? [...Array(6)].map((_, i) => (
              <CustomCard
                key={i}
                title="Loading..."
                content="Loading..."
                className="py-6"
                contentClass="text-md uppercase"
              />
            ))
          : rolesByDepartment &&
            Object.entries(rolesByDepartment).map(
              ([department, departmentRoles]) => (
                <CustomCard
                  key={department}
                  title={`Total: ${departmentRoles.length}`}
                  content={department
                    .split("_")
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(" ")}
                  className="py-6"
                  contentClass="text-md uppercase"
                />
              ),
            )}
      </div>
      <div className="pt-6">{roles && <UsersRoleTable data={roles} />}</div>
    </div>
  );
};

interface RolesCardProps {
  total: number;
  title: string;
}

const AddNewRole = () => {
  return (
    <CustomCard className="flex flex-row items-center justify-between">
      <div className="w-[60%]">
        <AddRole />
        <p className="text-muted-foreground mt-1 text-[15px]">
          Add new role, if it doesn't exist.
        </p>
      </div>
      <div>
        <UserRoundPlus size={80} />
      </div>
    </CustomCard>
  );
};
