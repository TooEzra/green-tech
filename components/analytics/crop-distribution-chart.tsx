"use client"

import { Card } from "@/components/ui/card"
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts"

const data = [
  { name: "Maize", value: 35, color: "hsl(var(--chart-1))" },
  { name: "Beans", value: 25, color: "hsl(var(--chart-2))" },
  { name: "Cassava", value: 20, color: "hsl(var(--chart-3))" },
  { name: "Vegetables", value: 15, color: "hsl(var(--chart-4))" },
  { name: "Others", value: 5, color: "hsl(var(--chart-5))" },
]

export function CropDistributionChart() {
  return (
    <Card className="p-6">
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-1">Crop Distribution</h3>
        <p className="text-sm text-muted-foreground">Current season crop allocation by area</p>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              backgroundColor: "hsl(var(--card))",
              border: "1px solid hsl(var(--border))",
              borderRadius: "0.5rem",
              padding: "0.75rem",
            }}
          />
        </PieChart>
      </ResponsiveContainer>

      <div className="mt-4 space-y-2">
        {data.map((crop, index) => (
          <div key={index} className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full" style={{ backgroundColor: crop.color }} />
              <span>{crop.name}</span>
            </div>
            <span className="font-medium">{crop.value}%</span>
          </div>
        ))}
      </div>
    </Card>
  )
}
