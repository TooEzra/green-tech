import { Card } from "@/components/ui/card"
import { TrendingUp, ArrowUpRight } from "lucide-react"
import { createClient } from "@/lib/supabase/server"
import { ProductionChartClient } from "./production-chart-client"

export async function ProductionChart() {
  const supabase = await createClient()

  // Fetch production data for current and last year
  const currentYear = new Date().getFullYear()
  const lastYear = currentYear - 1

  const { data: productionData } = await supabase
    .from("production_data")
    .select("*")
    .in("year", [currentYear, lastYear])
    .order("month", { ascending: true })

  // Transform data for chart
  const monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"]

  const chartData = monthNames.map((month, index) => {
    const monthNum = index + 1

    // Sum all crops for current year
    const currentYearData = productionData?.filter((d) => d.year === currentYear && d.month === monthNum) || []
    const currentTotal = currentYearData.reduce((sum, d) => sum + Number(d.yield_kg), 0)

    // Sum all crops for last year
    const lastYearData = productionData?.filter((d) => d.year === lastYear && d.month === monthNum) || []
    const lastTotal = lastYearData.reduce((sum, d) => sum + Number(d.yield_kg), 0)

    return {
      month,
      current: currentTotal,
      last: lastTotal,
    }
  })

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

      <ProductionChartClient data={chartData} />
    </Card>
  )
}
