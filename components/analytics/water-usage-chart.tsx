"use client"

import { Card } from "@/components/ui/card"
import { Area, AreaChart, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"

const data = [
  { week: "W1", usage: 850, optimal: 750 },
  { week: "W2", usage: 820, optimal: 750 },
  { week: "W3", usage: 780, optimal: 750 },
  { week: "W4", usage: 760, optimal: 750 },
  { week: "W5", usage: 740, optimal: 750 },
  { week: "W6", usage: 730, optimal: 750 },
  { week: "W7", usage: 720, optimal: 750 },
  { week: "W8", usage: 710, optimal: 750 },
]

export function WaterUsageChart() {
  return (
    <Card className="p-6">
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-1">Water Usage Optimization</h3>
        <p className="text-sm text-muted-foreground">Weekly consumption vs optimal levels (liters)</p>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorUsage" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(var(--chart-2))" stopOpacity={0.3} />
              <stop offset="95%" stopColor="hsl(var(--chart-2))" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorOptimal" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(var(--chart-1))" stopOpacity={0.3} />
              <stop offset="95%" stopColor="hsl(var(--chart-1))" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="currentColor" className="text-border" />
          <XAxis
            dataKey="week"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "currentColor", fontSize: 12 }}
            className="text-muted-foreground"
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: "currentColor", fontSize: 12 }}
            className="text-muted-foreground"
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "hsl(var(--card))",
              border: "1px solid hsl(var(--border))",
              borderRadius: "0.5rem",
              padding: "0.75rem",
            }}
          />
          <Area
            type="monotone"
            dataKey="optimal"
            stroke="hsl(var(--chart-1))"
            fillOpacity={1}
            fill="url(#colorOptimal)"
            strokeWidth={2}
          />
          <Area
            type="monotone"
            dataKey="usage"
            stroke="hsl(var(--chart-2))"
            fillOpacity={1}
            fill="url(#colorUsage)"
            strokeWidth={2}
          />
        </AreaChart>
      </ResponsiveContainer>
    </Card>
  )
}
