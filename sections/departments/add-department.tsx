"use client";

import { useState } from "react";
import { Info, PlusIcon } from "lucide-react";
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

type Department = {
  id: string;
  name: string;
  permissions: Record<string, Record<Permission, boolean>>;
};

const sampleDepartment: Department = {
  id: "1",
  name: "Administrator",
  permissions: {
    "User Management": { read: false, write: false, create: false },
    "Content Management": { read: false, write: false, create: false },
    "Disputes Management": { read: false, write: false, create: false },
    "Database Management": { read: false, write: false, create: false },
    "Financial Management": { read: false, write: false, create: false },
    Reporting: { read: false, write: false, create: false },
    "API Control": { read: false, write: false, create: false },
    "Repository Management": { read: false, write: false, create: false },
    Payroll: { read: false, write: false, create: false },
  },
};

export default function AddNewDepartment({}) {
  const [isOpen, setIsOpen] = useState(false);
  const [editingDepartment, setEditingDepartment] = useState<Department | null>(
    null,
  );

  const handleOpenDialog = () => {
    setEditingDepartment({ ...sampleDepartment });
    setIsOpen(true);
  };

  const handlePermissionChange = (
    category: string,
    permission: Permission,
    checked: boolean,
  ) => {
    if (!editingDepartment) return;

    setEditingDepartment({
      ...editingDepartment,
      permissions: {
        ...editingDepartment.permissions,
        [category]: {
          ...editingDepartment.permissions[category],
          [permission]: checked,
        },
      },
    });
  };

  const handleSelectAll = (checked: boolean) => {
    if (!editingDepartment) return;

    const updatedPermissions: Record<string, Record<Permission, boolean>> = {};

    Object.keys(editingDepartment.permissions).forEach((category) => {
      updatedPermissions[category] = {
        read: checked,
        write: checked,
        create: checked,
      };
    });

    setEditingDepartment({
      ...editingDepartment,
      permissions: updatedPermissions,
    });
  };

  const handleSubmit = async () => {
    if (!editingDepartment) return;

    try {
      //api calling here
      setIsOpen(false);
      setEditingDepartment(null);

      console.log("Department updated:", editingDepartment);
    } catch (error) {
      console.error("Failed to update department:", error);
    }
  };

  console.log(editingDepartment);

  return (
    <div className="">
      {/* Button to open the dialog */}

      <Button
        onClick={handleOpenDialog}
        className="bg-brand-secondary text-white hover:bg-brand-secondary/90 hover:shadow-md w-full"
      >
        Add New Department
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogOverlay className="bg-white/80" />
        <DialogContent className="sm:max-w-[800px] h-screen  px-16">
          <DialogHeader>
            <DialogTitle className="text-xl">Edit Department</DialogTitle>

            {editingDepartment && (
              <div className="grid gap-6 py-4">
                <div>
                  <label
                    htmlFor="departmentName"
                    className="text-sm font-medium mb-2 block"
                  >
                    Department Name
                  </label>
                  <Input
                    id="departmentName"
                    value={editingDepartment.name}
                    onChange={(e) =>
                      setEditingDepartment({
                        ...editingDepartment,
                        name: e.target.value,
                      })
                    }
                    placeholder="Enter a department name"
                  />
                </div>
              </div>
            )}
          </DialogHeader>

          {editingDepartment && (
            <div className="grid pb-4 flex-1 overflow-auto text-gray-800 ">
              <h3 className=" text-xl font-medium pb-3">
                Select - Department Permissions
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
                  {Object.keys(editingDepartment.permissions).map(
                    (category) => (
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
                            checked={
                              editingDepartment.permissions[category].read
                            }
                            onCheckedChange={(checked) =>
                              handlePermissionChange(
                                category,
                                "read",
                                !!checked,
                              )
                            }
                          />
                          <label
                            htmlFor={`${category}-read`}
                            className="text-sm"
                          >
                            Read
                          </label>
                        </div>

                        <div className="flex items-center gap-2">
                          <Checkbox
                            id={`${category}-write`}
                            checked={
                              editingDepartment.permissions[category].write
                            }
                            onCheckedChange={(checked) =>
                              handlePermissionChange(
                                category,
                                "write",
                                !!checked,
                              )
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
                            checked={
                              editingDepartment.permissions[category].create
                            }
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
                    ),
                  )}
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
