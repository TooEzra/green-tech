"use client"

import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts"

interface ProductionChartClientProps {
  data: Array<{
    month: string
    current: number
    last: number
  }>
}

export function ProductionChartClient({ data }: ProductionChartClientProps) {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data} barGap={4}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="currentColor" className="text-border" />
        <XAxis
          dataKey="month"
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
        <Legend wrapperStyle={{ paddingTop: "1rem" }} iconType="circle" />
        <Bar dataKey="current" name="Current Year Production" fill="hsl(var(--chart-1))" radius={[8, 8, 0, 0]} />
        <Bar dataKey="last" name="Last Year Production" fill="hsl(var(--chart-2))" radius={[8, 8, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}
