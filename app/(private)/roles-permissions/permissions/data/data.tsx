"use client";

import React, { useState } from "react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
  SortingState,
  getSortedRowModel,
  ColumnFiltersState,
  getFilteredRowModel,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

import {
  Permission,
  permissionFormSchema,
} from "@/types/schemas/permissionSchema";
import { columns } from "./columns";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import {
  useCreatePermission,
  useGetAllPermissions,
  useUpdatePermission,
} from "@/queries/permissionQueries";
import { Plus, Trash2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { DataTable } from "@/components/table/DataTable";
import { Input } from "@/components/ui/customInput";

interface PermissionsTableProps {
  data: Permission[];
}

export default function PermissionsTable() {
  const { data, isLoading } = useGetAllPermissions();
  console.log(data, isLoading);
  return (
    <DataTable
      columns={columns}
      data={data || []}
      filterOptions={{ label: "Permission Name", value: "name" }}
      addButton={<AddPermission />}
      paginationOption
    />
  );
}

export function AddPermission() {
  const createPermission = useCreatePermission();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    getValues,
  } = useForm({
    resolver: zodResolver(permissionFormSchema),
    defaultValues: {
      name: "",
      description: "",
      category: "",
    },
  });

  console.log(getValues());

  const onSubmit = async (data: z.infer<typeof permissionFormSchema>) => {
    try {
      await createPermission.mutateAsync({
        name: data.name,
        description: data.description,
        category: data.category,
      });
      console.log("created successfuly");
      reset();
    } catch (error) {
      console.error("Failed to create permission:", error);
    }
  };

  return (
    <Dialog>
      <DialogTrigger>
        <Button variant="outline" className="h-10.5">
          <Plus className="mr-2 h-4 w-4" /> Add Permission
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogHeader>
            <DialogTitle>Add New Permission</DialogTitle>
            <DialogDescription>
              Permissions you may use and assign to your users.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 pt-4 pb-5">
            <div className="space-y-2">
              <Input
                id="name"
                label="Permission Name"
                placeholder="Enter permission name"
                {...register("name")}
                error={errors.name?.message}
              />
              {errors.name && (
                <p className="text-xs text-red-500">{errors.name.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Input
                id="description"
                label="Description"
                placeholder="Describe the permission"
                {...register("description")}
              />
              {errors.description && (
                <p className="text-xs text-red-500">
                  {errors.description.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Input
                id="category"
                label="Category"
                placeholder="E.g. Employee Management"
                {...register("category")}
              />
              {errors.category && (
                <p className="text-xs text-red-500">
                  {errors.category.message}
                </p>
              )}
            </div>
          </div>
          <DialogFooter className="gap-5">
            <Button
              type="submit"
              variant="brand"
              disabled={createPermission.isPending}
            >
              {createPermission.isPending ? "Creating..." : "Create Permission"}
            </Button>
            <DialogClose asChild>
              <Button variant="outline" type="button">
                Cancel
              </Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export function EditPermission({
  children,
  permission,
}: {
  children: React.ReactNode;
  permission: Permission;
}) {
  const updatePermission = useUpdatePermission();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(permissionFormSchema),
    defaultValues: {
      name: permission.name,
      description: permission.description,
      category: permission.category,
    },
  });

  const onSubmit = async (data: z.infer<typeof permissionFormSchema>) => {
    try {
      await updatePermission.mutateAsync({
        id: permission.id,
        data: {
          name: data.name,
          description: data.description,
          category: data.category,
        },
      });
      // toast({
      //   title: "Permission updated",
      //   description: "Your permission has been updated successfully",
      // });
    } catch (error) {
      // toast({
      //   title: "Error",
      //   description: "Failed to update permission",
      //   variant: "destructive",
      // });
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogHeader>
            <DialogTitle>Edit Permission</DialogTitle>
            <DialogDescription>
              Edit permission as per your requirements.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="w-full rounded-md bg-yellow-200 p-3 text-sm font-medium text-yellow-800">
              <p>Warning </p>
              <p>
                By editing the permission name, you might break the system
                permissions functionality. Please ensure you're absolutely
                certain before proceeding.
              </p>
            </div>

            <div className="space-y-2">
              <Input
                id="name"
                label="Permission Name"
                placeholder="Enter permission name"
                {...register("name")}
              />
              {errors.name && (
                <p className="text-xs text-red-500">{errors.name.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Input
                id="description"
                label="Description"
                placeholder="Describe the permission"
                {...register("description")}
              />
              {errors.description && (
                <p className="text-xs text-red-500">
                  {errors.description.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Input
                id="category"
                label="Category"
                placeholder="E.g. Employee Management"
                {...register("category")}
              />
              {errors.category && (
                <p className="text-xs text-red-500">
                  {errors.category.message}
                </p>
              )}
            </div>
          </div>
          <DialogFooter className="gap-5">
            <Button
              type="submit"
              variant="brand"
              disabled={updatePermission.isPending}
            >
              {updatePermission.isPending ? "Updating..." : "Update"}
            </Button>
            <DialogClose asChild>
              <Button variant="outline" type="button">
                Cancel
              </Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
