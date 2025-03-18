import { DatePicker } from "@/components/ui/date-picker";
import { Input } from "@/components/ui/input";

export const PersonalInfoTab = () => {
  return (
    <div className="grid grid-cols-2 gap-6">
      <div className="grid grid-cols-1 bg-background p-4 gap-y-3 rounded-md">
        <div className="border-b-2 border-gray-200 pb-2">
          <h6 className="text-lg font-medium">Profile</h6>
        </div>

        <Input label="Username" value="johnsda" disabled />
        <Input label="Password" value="johnsda@123" type="password" disabled />

        <span className="underline cursor-pointer mt-2 text-blue-600">
          Request password reset
        </span>
      </div>

      <div className="grid grid-cols-1 bg-background p-4 gap-y-3 rounded-md">
        <div className="border-b-2 border-gray-200 pb-2">
          <h6 className="text-lg font-medium">Personal</h6>
        </div>

        <Input label="Name" value="John Doe" disabled />
        <DatePicker
          label="Date of Birth"
          name="dob"
          defaultValue={new Date()}
          disabled
        />
      </div>
    </div>
  );
};
