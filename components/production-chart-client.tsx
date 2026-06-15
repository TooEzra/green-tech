'use client'

import { Card } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

interface ProductionChartClientProps {
  data: Array<{ month: string; current: number; last: number }>
  loading?: boolean
}

export function ProductionChartClient({ data, loading = false }: ProductionChartClientProps) {
  if (loading) {
    return <div className="h-80 flex items-center justify-center">Loading chart...</div>
  }

  return (
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line 
            type="monotone" 
            dataKey="current" 
            stroke="#22c55e" 
            strokeWidth={3} 
            name="This Year" 
          />
          <Line 
            type="monotone" 
            dataKey="last" 
            stroke="#94a3b8" 
            strokeWidth={2} 
            strokeDasharray="5 5"
            name="Last Year" 
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}