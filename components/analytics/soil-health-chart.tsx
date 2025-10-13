"use client"

import { Card } from "@/components/ui/card"
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from "recharts"

const data = [
  { metric: "pH Level", value: 85, fullMark: 100 },
  { metric: "Nitrogen", value: 78, fullMark: 100 },
  { metric: "Phosphorus", value: 92, fullMark: 100 },
  { metric: "Potassium", value: 88, fullMark: 100 },
  { metric: "Organic Matter", value: 75, fullMark: 100 },
  { metric: "Moisture", value: 82, fullMark: 100 },
]

export function SoilHealthChart() {
  return (
    <Card className="p-6">
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-1">Soil Health Analysis</h3>
        <p className="text-sm text-muted-foreground">Multi-parameter soil quality assessment</p>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <RadarChart data={data}>
          <PolarGrid stroke="currentColor" className="text-border" />
          <PolarAngleAxis
            dataKey="metric"
            tick={{ fill: "currentColor", fontSize: 11 }}
            className="text-muted-foreground"
          />
          <PolarRadiusAxis angle={90} domain={[0, 100]} tick={false} axisLine={false} />
          <Radar
            name="Soil Health"
            dataKey="value"
            stroke="hsl(var(--chart-2))"
            fill="hsl(var(--chart-2))"
            fillOpacity={0.3}
            strokeWidth={2}
          />
        </RadarChart>
      </ResponsiveContainer>

      <div className="mt-4 grid grid-cols-3 gap-4">
        <div className="text-center">
          <p className="text-2xl font-bold text-primary">83%</p>
          <p className="text-xs text-muted-foreground">Overall Score</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-accent">+5%</p>
          <p className="text-xs text-muted-foreground">vs Last Month</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-green-600">Good</p>
          <p className="text-xs text-muted-foreground">Health Status</p>
        </div>
      </div>
    </Card>
  )
}
