"use client"

import { Card } from "@/components/ui/card"
import { Line, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from "recharts"

const data = [
  { month: "Jan", predicted: 2800, actual: 2650 },
  { month: "Feb", predicted: 3000, actual: 3100 },
  { month: "Mar", predicted: 3200, actual: 3150 },
  { month: "Apr", predicted: 3500, actual: 3600 },
  { month: "May", predicted: 3800, actual: 3750 },
  { month: "Jun", predicted: 4000, actual: 4200 },
  { month: "Jul", predicted: 4200, actual: 4100 },
  { month: "Aug", predicted: 3900, actual: 4000 },
  { month: "Sep", predicted: 3600, actual: 3700 },
  { month: "Oct", predicted: 3400, actual: 3500 },
  { month: "Nov", predicted: 3200, actual: 3300 },
  { month: "Dec", predicted: 3000, actual: 2900 },
]

export function YieldTrendsChart() {
  return (
    <Card className="p-6">
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-1">Crop Yield Trends</h3>
        <p className="text-sm text-muted-foreground">AI predictions vs actual harvest (kg)</p>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
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
          <Legend wrapperStyle={{ paddingTop: "1rem" }} />
          <Line
            type="monotone"
            dataKey="predicted"
            name="AI Predicted"
            stroke="hsl(var(--chart-1))"
            strokeWidth={2}
            dot={{ fill: "hsl(var(--chart-1))", r: 4 }}
            strokeDasharray="5 5"
          />
          <Line
            type="monotone"
            dataKey="actual"
            name="Actual Yield"
            stroke="hsl(var(--chart-2))"
            strokeWidth={2}
            dot={{ fill: "hsl(var(--chart-2))", r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  )
}
