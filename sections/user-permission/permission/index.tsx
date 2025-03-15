"use client";

import { useState } from "react";
import { Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

type Permission = "read" | "write" | "create";

type User = {
  id: string;
  name: string;
  permissions: Record<string, Record<Permission, boolean>>;
};

const sampleUser: User = {
  id: "1",
  name: "John Doe",
  permissions: {
    "User Management": { read: true, write: false, create: false },
    "Content Management": { read: true, write: true, create: false },
    "Disputes Management": { read: false, write: false, create: false },
    "Database Management": { read: true, write: false, create: true },
    "Financial Management": { read: false, write: false, create: false },
    Reporting: { read: true, write: true, create: true },
    "API Control": { read: false, write: false, create: false },
    "Repository Management": { read: true, write: false, create: false },
    Payroll: { read: false, write: false, create: false },
  },
};

interface UserPermissionProps {
  children: React.ReactNode;
  empId?: string;
  empName?: string;
}

export default function UserPermission({
  children,
  empId,
  empName,
}: UserPermissionProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [editingUser, setEditingUser] = useState<User | null>(null);

  const handleOpenDialog = () => {
    setEditingUser({ ...sampleUser });
    setIsOpen(true);
  };

  const handlePermissionChange = (
    category: string,
    permission: Permission,
    checked: boolean,
  ) => {
    if (!editingUser) return;

    setEditingUser({
      ...editingUser,
      permissions: {
        ...editingUser.permissions,
        [category]: {
          ...editingUser.permissions[category],
          [permission]: checked,
        },
      },
    });
  };

  const handleSelectAll = (checked: boolean) => {
    if (!editingUser) return;

    const updatedPermissions: Record<string, Record<Permission, boolean>> = {};

    Object.keys(editingUser.permissions).forEach((category) => {
      updatedPermissions[category] = {
        read: checked,
        write: checked,
        create: checked,
      };
    });

    setEditingUser({
      ...editingUser,
      permissions: updatedPermissions,
    });
  };

  const handleSubmit = async () => {
    if (!editingUser) return;

    try {
      //api calling here
      setIsOpen(false);
      setEditingUser(null);

      console.log("User updated:", editingUser);
    } catch (error) {
      console.error("Failed to update user:", error);
    }
  };

  return (
    <div className="">
      {/* Button to open the dialog */}
      <div onClick={handleOpenDialog}>{children}</div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogOverlay className="bg-white/80" />
        <DialogContent className="sm:max-w-[800px] px-16">
          <DialogHeader>
            <DialogTitle className="text-xl font-medium">
              Edit User Permissions
            </DialogTitle>
            <div className="flex items-center gap-2 text-gray-600">
              <span className="text-sm font-medium">Name: {empName}</span>
              <span className="text-sm font-medium">Employee ID: {empId}</span>
            </div>
          </DialogHeader>

          {editingUser && (
            <div className="grid pb-4 flex-1 overflow-auto text-gray-800 ">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-medium flex items-center gap-1">
                    <span>Administrator Access </span>
                    <Info className="h-4 w-4 text-muted-foreground" />
                  </h3>

                  <div className="flex items-center gap-2">
                    <Checkbox
                      id="selectAll"
                      onCheckedChange={(checked) => handleSelectAll(!!checked)}
                    />
                    <label htmlFor="selectAll" className="text-sm">
                      Select All
                    </label>
                  </div>
                </div>

                <div className="space-y-4 text-[15px]">
                  {Object.keys(editingUser.permissions).map((category) => (
                    <div
                      key={category}
                      className="grid grid-cols-[1fr_auto_auto_auto] items-center gap-4 py-1 border-b"
                    >
                      <div className="flex items-center gap-1">
                        <span>{category}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <Checkbox
                          id={`${category}-read`}
                          checked={editingUser.permissions[category].read}
                          onCheckedChange={(checked) =>
                            handlePermissionChange(category, "read", !!checked)
                          }
                        />
                        <label htmlFor={`${category}-read`} className="text-sm">
                          Read
                        </label>
                      </div>

                      <div className="flex items-center gap-2">
                        <Checkbox
                          id={`${category}-write`}
                          checked={editingUser.permissions[category].write}
                          onCheckedChange={(checked) =>
                            handlePermissionChange(category, "write", !!checked)
                          }
                        />
                        <label
                          htmlFor={`${category}-write`}
                          className="text-sm"
                        >
                          Write
                        </label>
                      </div>

                      <div className="flex items-center gap-2">
                        <Checkbox
                          id={`${category}-create`}
                          checked={editingUser.permissions[category].create}
                          onCheckedChange={(checked) =>
                            handlePermissionChange(
                              category,
                              "create",
                              !!checked,
                            )
                          }
                        />
                        <label
                          htmlFor={`${category}-create`}
                          className="text-sm"
                        >
                          Create
                        </label>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
          <div className="flex flex-1 justify-end gap-2 mt-4">
            <Button variant="outline" onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button
              className="text-white"
              variant="brand"
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
