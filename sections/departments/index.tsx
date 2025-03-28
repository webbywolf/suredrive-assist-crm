import { Button } from "@/components/ui/button";
import { Building2, Tv, UserRoundPlus } from "lucide-react";
import AllUsersTable from "./user-table";
import EditRole from "./edit-department";
import AddNewDepartment from "./add-department";
import EditDepartment from "./edit-department";

export const Departments = () => {
  return (
    <div className="space-y-5">
      <div className="">
        <h2 className="text-2xl font-medium mb-2">Departments</h2>
        <p className="text-slate-800 mb-8 max-w-2xl">
          Departments organize users into functional groups within the
          organization so that administrators can manage teams effectively and
          assign appropriate permissions based on departmental needs.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {[
          "Human Resources",
          "Marketing",
          "Finance",
          "Engineering",
          "Operations",
        ].map((role, i) => (
          <RolesCard key={role} title={role} total={10 - i} />
        ))}
        <AddNewRole />
      </div>
      <div className="pt-6">
        <AllUsersTable />
      </div>
    </div>
  );
};

interface RolesCardProps {
  total: number;
  title: string;
}
export const RolesCard: React.FC<RolesCardProps> = ({ title, total }) => {
  return (
    <div className="shadow-[0px_5px_15px_5px_rgba(0,0,0,0.1)] bg-white py-7 p-6 rounded-md">
      <p className="mb-5 text-[15px] text-muted-foreground">
        Total {total} users
      </p>
      <h2 className="text-lg font-medium text-gray-700 mb-1">{title}</h2>
      <EditDepartment title={title} />
    </div>
  );
};

const AddNewRole = () => {
  return (
    <div className="grid grid-cols-2 shadow-[0px_5px_15px_5px_rgba(0,0,0,0.1)] bg-white pt-8 p-6 pb-0 rounded-md">
      <div>
        <Building2 size={80} />
      </div>
      <div>
        <AddNewDepartment />
        <p className="mb-5 text-[15px] text-muted-foreground mt-3">
          Add new department, if it doesn't exist.
        </p>
      </div>
    </div>
  );
};
