'use client'

import { Card } from "@/components/ui/card"
import { TrendingUp, ArrowUpRight } from "lucide-react"
import { ProductionChartClient } from "./production-chart-client"
import { useEffect, useState } from "react"
import { createClient } from "@/lib/supabase/client"

export function ProductionChart() {
  const [chartData, setChartData] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  const supabase = createClient()

  useEffect(() => {
    async function fetchProductionData() {
      try {
        const currentYear = new Date().getFullYear()
        const lastYear = currentYear - 1

        const { data: productionData } = await supabase
          .from("production_data")
          .select("*")
          .in("year", [currentYear, lastYear])
          .order("month", { ascending: true })

        const monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"]

        const transformedData = monthNames.map((month, index) => {
          const monthNum = index + 1

          const currentYearData = productionData?.filter((d: any) => d.year === currentYear && d.month === monthNum) || []
          const currentTotal = currentYearData.reduce((sum: number, d: any) => sum + Number(d.yield_kg || 0), 0)

          const lastYearData = productionData?.filter((d: any) => d.year === lastYear && d.month === monthNum) || []
          const lastTotal = lastYearData.reduce((sum: number, d: any) => sum + Number(d.yield_kg || 0), 0)

          return { month, current: currentTotal, last: lastTotal }
        })

        setChartData(transformedData)
      } catch (error) {
        console.error("Failed to fetch production data:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchProductionData()
  }, [supabase])

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Summary of production</h2>
        <div className="flex items-center gap-2">
          <button className="rounded-lg p-2 hover:bg-muted">
            <TrendingUp className="h-5 w-5 text-muted-foreground" />
          </button>
          <button className="rounded-lg p-2 hover:bg-muted">
            <ArrowUpRight className="h-5 w-5 text-muted-foreground" />
          </button>
        </div>
      </div>

      <div className="mb-4 text-sm text-muted-foreground">Comparing with last year</div>

      <ProductionChartClient data={chartData} loading={loading} />
    </Card>
  )
}