import React from "react";
import type { DatePickerProps } from "antd";
import { DatePicker as AntdDatePicker, Space } from "antd";
import moment from "moment";
import dayjs from "dayjs";
import { cn } from "@/lib/utils";

interface CustomDatePickerProps {
  label: string;
  name: string;
  defaulValue?: any;
  value?: dayjs.Dayjs | null | undefined;
  onChange?:
    | ((date: dayjs.Dayjs, dateString: string | string[]) => void)
    | undefined;
  disabled?: boolean;
  className?: string;
}

export const DatePicker = ({
  label,
  name,
  defaulValue,
  value,
  onChange,
  disabled,
  className,
  ...rest
}: CustomDatePickerProps) => {
  return (
    <div className="div">
      <label className="text-[14px] capitalize font-medium text-gray-700 mb-[6px] block">
        {label}
      </label>
      <AntdDatePicker
        name={name}
        className={cn(
          "flex w-full text-sm bg-white px-4 !py-[10px] !text-gray-600 !border-2 !border-border !rounded-md !outline-none !hover:border-2 !hover:border-brand-secondary/20 !focus:border-2  transition-all",
          className,
        )}
        defaultValue={dayjs(defaulValue, "YYYY-MM-DD")}
        value={
          value && value !== null && value !== undefined
            ? dayjs(value, "YYYY-MM-DD")
            : null
        }
        onChange={onChange}
        disabled={disabled}
        {...rest}
      />
    </div>
  );
};
