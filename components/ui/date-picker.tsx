"use client";

import * as React from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
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
  const [open, setOpen] = React.useState(false);

  const handleDateChange = (date: Date | undefined) => {
    if (date) {
      setValue(name, date.toISOString());
      if (onChange) onChange(date);
      setOpen(false);
    }
  };

  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-gray-700">{label}</label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className="w-full justify-start text-left font-normal"
            onClick={() => setOpen(!open)}
            disabled={disabled}
          >
            {selectedDate ? format(selectedDate, "yyyy-MM-dd") : "Pick a date"}
            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent align="start" className="w-auto p-0">
          <DayPicker
            mode="single"
            selected={selectedDate}
            onSelect={handleDateChange}
            initialFocus
            captionLayout="dropdown-buttons"
            fromYear={2000}
            toYear={2035}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
