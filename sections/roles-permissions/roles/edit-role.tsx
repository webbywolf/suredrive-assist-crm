"use client";

import { useState } from "react";
import { Info, Pencil } from "lucide-react";
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

type Role = {
  id: string;
  name: string;
  permissions: Record<string, Record<Permission, boolean>>;
};

const sampleRole: Role = {
  id: "1",
  name: "Administrator",
  permissions: {
    "User Management": { read: true, write: true, create: true },
    "Content Management": { read: true, write: false, create: false },
    "Disputes Management": { read: true, write: false, create: false },
    "Database Management": { read: true, write: true, create: false },
    "Financial Management": { read: true, write: true, create: true },
    Reporting: { read: true, write: false, create: false },
    "API Control": { read: false, write: false, create: false },
    "Repository Management": { read: true, write: false, create: false },
    Payroll: { read: true, write: false, create: false },
  },
};

export default function EditRole({ role }: { role: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [editingRole, setEditingRole] = useState<Role | null>(null);

  const handleOpenDialog = () => {
    setEditingRole({ ...sampleRole });
    setIsOpen(true);
  };

  const handlePermissionChange = (
    category: string,
    permission: Permission,
    checked: boolean,
  ) => {
    if (!editingRole) return;

    setEditingRole({
      ...editingRole,
      permissions: {
        ...editingRole.permissions,
        [category]: {
          ...editingRole.permissions[category],
          [permission]: checked,
        },
      },
    });
  };

  const handleSelectAll = (checked: boolean) => {
    if (!editingRole) return;

    const updatedPermissions: Record<string, Record<Permission, boolean>> = {};

    Object.keys(editingRole.permissions).forEach((category) => {
      updatedPermissions[category] = {
        read: checked,
        write: checked,
        create: checked,
      };
    });

    setEditingRole({
      ...editingRole,
      permissions: updatedPermissions,
    });
  };

  const handleSubmit = async () => {
    if (!editingRole) return;

    try {
      //api calling here
      setIsOpen(false);
      setEditingRole(null);

      console.log("Role updated:", editingRole);
    } catch (error) {
      console.error("Failed to update role:", error);
    }
  };

  console.log(editingRole);

  return (
    <div className="">
      {/* Button to open the dialog */}
      <button
        onClick={handleOpenDialog}
        className=" cursor-pointer inline-flex gap-1 items-center text-brand-secondary/60 hover:text-brand-secondary hover:underline transition-all duration-200"
      >
        <span>
          <Pencil size={14} />{" "}
        </span>{" "}
        Edit
      </button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogOverlay className="bg-white/80" />
        <DialogContent className="sm:max-w-[800px] h-screen  px-16">
          <DialogHeader>
            <DialogTitle className="text-xl">Edit Role</DialogTitle>

            {editingRole && (
              <div className="grid gap-6 py-4">
                <div>
                  <label
                    htmlFor="roleName"
                    className="text-sm font-medium mb-2 block"
                  >
                    Role Name
                  </label>
                  <Input
                    id="roleName"
                    value={role}
                    onChange={(e) =>
                      setEditingRole({ ...editingRole, name: e.target.value })
                    }
                    placeholder="Enter a role name"
                  />
                </div>
              </div>
            )}
          </DialogHeader>

          {editingRole && (
            <div className="grid pb-4 flex-1 overflow-auto text-gray-800 ">
              <h3 className=" text-xl font-medium pb-3">
                {role} - Role Permissions
              </h3>
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
                  {Object.keys(editingRole.permissions).map((category) => (
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
                          checked={editingRole.permissions[category].read}
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
                          checked={editingRole.permissions[category].write}
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
                          checked={editingRole.permissions[category].create}
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
