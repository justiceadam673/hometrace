
"use client";

import { TrendingUp } from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/Agent/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../../components/Agent/ui/chart";
import React from "react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const weeklyData = [
  { label: "Mon", value: 120 },
  { label: "Tue", value: 160 },
  { label: "Wed", value: 90 },
  { label: "Thu", value: 180 },
  { label: "Fri", value: 140 },
  { label: "Sat", value: 200 },
  { label: "Sun", value: 150 },
];

const monthlyData = [
  { label: "Jan", value: 800 },
  { label: "Feb", value: 950 },
  { label: "Mar", value: 700 },
  { label: "Apr", value: 1100 },
  { label: "May", value: 980 },
  { label: "Jun", value: 1230 },
  { label: "Jul", value: 880 },
  { label: "Aug", value: 1320 },
  { label: "Sep", value: 1010 },
  { label: "Oct", value: 1190 },
  { label: "Nov", value: 900 },
  { label: "Dec", value: 1250 },
];

function classNames(...cn) {
  return cn.filter(Boolean).join(" ");
}

const Toggle = ({ value, onChange }) => {
  const options = [
    { key: "weekly", label: "Weekly" },
    { key: "monthly", label: "Monthly" },
  ];
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="block w-32 rounded-md border-0 py-1.5 pl-3 pr-8 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-purple-600 text-sm leading-6 bg-white"
    >
      {options.map((opt) => (
        <option key={opt.key} value={opt.key}>
          {opt.label}
        </option>
      ))}
    </select>
  );
};

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload || !payload.length) return null;
  const val = payload[0].value;
  return (
    <div className="rounded-md border border-gray-200 bg-white p-2 shadow">
      <div className="text-xs text-gray-500">{label}</div>
      <div className="text-sm font-semibold">{val.toLocaleString()}</div>
    </div>
  );
};

export default function ChartAreaDefault() {
  const [range, setRange] = React.useState("weekly");
  const data = range === "weekly" ? weeklyData : monthlyData;

  // for smoother y-axis domain padding
  const values = data.map((d) => d.value);
  const min = Math.min(...values);
  const max = Math.max(...values);
  const pad = Math.round((max - min) * 0.1) || 10;

  return (
    <div className="w-full max-w-4xl rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
      <div className="mb-4 flex items-center justify-between gap-4">
        <div>
          <h2 className="text-base font-semibold text-gray-900">Performance</h2>
          <p className="text-sm text-gray-500">
            Toggle between weekly and monthly totals.
          </p>
        </div>
        <Toggle value={range} onChange={setRange} />
      </div>

      <div className="h-72 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 10, right: 12, bottom: 0, left: 0 }}
          >
            <defs>
              <linearGradient id="fillArea" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="currentColor" stopOpacity={0.25} />
                <stop
                  offset="95%"
                  stopColor="currentColor"
                  stopOpacity={0.02}
                />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis

              dataKey='month'

              dataKey="label"

              tickLine={false}
              axisLine={false}
              tickMargin={8}
              fontSize={12}
            />

            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator='line' />}

            <YAxis
              width={40}
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              fontSize={12}
              domain={[min - pad, max + pad]}

            />
            <Tooltip content={<CustomTooltip />} />
            <Area

              dataKey='desktop'
              type='natural'
              fill='var(--color-desktop)'
              fillOpacity={0.4}
              stroke='var(--color-desktop)'
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className='flex w-full items-start gap-2 text-sm'>
          <div className='grid gap-2'>
            <div className='flex items-center gap-2 leading-none font-medium'>
              Trending up by 5.2% this month <TrendingUp className='h-4 w-4' />
            </div>
            <div className='text-muted-foreground flex items-center gap-2 leading-none'>
              January - June 2024
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>

              type="monotone"
              dataKey="value"
              stroke="currentColor"
              fill="url(#fillArea)"
              className="text-purple-600" // tailwind sets currentColor for stroke/fill gradient
              strokeWidth={2}
              dot={{ r: 3 }}
              activeDot={{ r: 5 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>

  );
}
