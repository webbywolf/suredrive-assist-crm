"use client";

import * as React from "react";
import { useFormContext } from "react-hook-form";

interface DatePickerProps {
  label?: string;
  name: string;
  defaultValue?: Date;
  disabled?: boolean;
  onChange?: (date: Date | undefined) => void;
}

export function DatePicker({ label = "Select Date", name, defaultValue, disabled, onChange }: DatePickerProps) {
  const { setValue, watch } = useFormContext();
  const selectedDate = watch(name) ? new Date(watch(name)) : defaultValue || new Date();

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const date = e.target.value ? new Date(e.target.value) : undefined;
    if (date) {
      setValue(name, date.toISOString());
      if (onChange) onChange(date);
    }
  };

  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-gray-700">{label}</label>
      <input
        type="date"
        value={selectedDate.toISOString().split('T')[0]}
        onChange={handleDateChange}
        disabled={disabled}
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
      />
    </div>
  );
}
