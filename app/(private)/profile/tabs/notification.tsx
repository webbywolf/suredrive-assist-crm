import { DatePicker } from "@/components/ui/date-picker";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

export const NotificationTab = () => {
  return (
    <div className="grid grid-cols-1 gap-4">
      <div className="grid grid-cols-1 bg-background p-4 gap-y-4 rounded-md">
        <div className="border-b-2 border-gray-200 pb-2">
          <h6 className="text-lg font-medium">Notifications</h6>
        </div>
        <div className="flex flex-col space-y-4">
          <div className="space-y-2">
            <p className="text-[14px] capitalize font-medium text-gray-700 mb-[6px] block">
              Email Notifications
            </p>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox checked id="email" className="rounded-full" />
                <label htmlFor="email" className="text-sm cursor-pointer">
                  Disable Report Emails
                </label>
              </div>
            </div>
          </div>

          <div>
            <p className="text-[14px] capitalize font-medium text-gray-700 mb-[6px] block">
              Alert Preferences
            </p>
            <div className="mt-2 flex gap-4">
              <div className="flex items-center space-x-2">
                <Checkbox id="pending" className="rounded-full" />
                <label htmlFor="pending" className="text-sm cursor-pointer">
                  Pending Approvals
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox checked id="escalations" className="rounded-full" />
                <label htmlFor="escalations" className="text-sm cursor-pointer">
                  Escalations
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox checked id="payments" className="rounded-full" />
                <label htmlFor="payments" className="text-sm cursor-pointer">
                  Payments
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
