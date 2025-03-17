import { DatePicker } from "@/components/ui/date-picker";
import { Input } from "@/components/ui/input";

export const RolesPermissionOverviewTab = () => {
  return (
    <div className="grid grid-cols-1 gap-6">
      <div className="grid grid-cols-1 bg-background p-4 gap-y-3 rounded-md">
        <div className="border-b-2 border-gray-200 pb-2">
          <h6 className="text-lg font-medium">Roles & Permissions</h6>
        </div>

        <Input label="Current role" value="Manager" disabled />
        <Input label="Assigned Department" value="Management" disabled />
        <Input label="Reporting Manager" value="Mr. Rohit Roy" disabled />
      </div>
    </div>
  );
};
