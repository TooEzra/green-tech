"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Line, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, ReferenceLine } from "recharts"

const data = [
  { day: "Day 1", actual: 100, predicted: 100 },
  { day: "Day 2", actual: 105, predicted: 103 },
  { day: "Day 3", actual: 112, predicted: 110 },
  { day: "Day 4", actual: 118, predicted: 120 },
  { day: "Day 5", actual: null, predicted: 135 },
  { day: "Day 6", actual: null, predicted: 148 },
  { day: "Day 7", actual: null, predicted: 160 },
  { day: "Day 8", actual: null, predicted: 172 },
  { day: "Day 9", actual: null, predicted: 182 },
  { day: "Day 10", actual: null, predicted: 190 },
]

export function PredictiveAnalytics() {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold mb-1">Growth Prediction Model</h3>
          <p className="text-sm text-muted-foreground">AI-powered crop development forecast</p>
        </div>
        <Badge variant="default" className="bg-primary">
          92% Accurate
        </Badge>
      </div>

      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="currentColor" className="text-border" />
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "currentColor", fontSize: 11 }}
            className="text-muted-foreground"
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: "currentColor", fontSize: 11 }}
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
          <ReferenceLine x="Day 4" stroke="hsl(var(--muted-foreground))" strokeDasharray="3 3" label="Today" />
          <Line
            type="monotone"
            dataKey="actual"
            stroke="hsl(var(--chart-2))"
            strokeWidth={2}
            dot={{ fill: "hsl(var(--chart-2))", r: 4 }}
          />
          <Line
            type="monotone"
            dataKey="predicted"
            stroke="hsl(var(--chart-1))"
            strokeWidth={2}
            strokeDasharray="5 5"
            dot={{ fill: "hsl(var(--chart-1))", r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>

      <div className="mt-6 grid grid-cols-3 gap-4">
        <div className="text-center">
          <p className="text-2xl font-bold text-primary">190</p>
          <p className="text-xs text-muted-foreground">Predicted Growth Index</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-accent">+90%</p>
          <p className="text-xs text-muted-foreground">Growth Rate</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-green-600">6 days</p>
          <p className="text-xs text-muted-foreground">Until Harvest</p>
        </div>
      </div>
    </Card>
  )
}
