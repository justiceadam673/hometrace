import React from "react";
import { cn } from "@/lib/utils";

// ChartConfig helper — defines labels and colors for datasets
export function ChartConfig(config) {
  // Here you can preprocess or validate your chart config if needed
  return config;
}

export function ChartContainer({ children, className, ...props }) {
  return (
    <div
      className={cn(
        "flex w-full flex-col items-center justify-center",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function ChartTooltip({ content, ...props }) {
  return React.cloneElement(content, props);
}

// Enhanced tooltip content for chart
export function ChartTooltipContent({
  indicator = "#2563eb",
  label,
  value,
  unit,
}) {
  return (
    <div className="rounded-md border bg-white p-2 shadow-lg text-xs min-w-[90px]">
      <div className="flex items-center gap-2 mb-1">
        <div
          className="h-2 w-2 rounded-full"
          style={{ backgroundColor: indicator }}
        />
        <span className="font-semibold text-gray-700">{label || "Month"}</span>
      </div>
      <div className="font-bold text-base text-blue-700">
        {value}
        {unit ? ` ${unit}` : ""}
      </div>
    </div>
  );
}

// Helper for chart gradient fill
export function ChartGradient({ id = "colorDesktop", color = "#2563eb" }) {
  return (
    <defs>
      <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
        <stop offset="5%" stopColor={color} stopOpacity={0.25} />
        <stop offset="95%" stopColor={color} stopOpacity={0.05} />
      </linearGradient>
    </defs>
  );
}
