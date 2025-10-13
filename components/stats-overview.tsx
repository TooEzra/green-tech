import type React from "react"
import { Card } from "@/components/ui/card"
import { TrendingUp, TrendingDown } from "lucide-react"
import { createClient } from "@/lib/supabase/server"

interface StatCardProps {
  title: string
  value: string
  change: number
  icon: React.ReactNode
}

function StatCard({ title, value, change, icon }: StatCardProps) {
  const isPositive = change >= 0

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="rounded-lg bg-primary/10 p-3 text-primary">{icon}</div>
        <div
          className={`flex items-center gap-1 text-sm font-medium ${isPositive ? "text-green-600" : "text-red-600"}`}
        >
          {isPositive ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
          {Math.abs(change)}%
        </div>
      </div>
      <div>
        <p className="text-2xl font-bold mb-1">{value}</p>
        <p className="text-sm text-muted-foreground">{title}</p>
      </div>
    </Card>
  )
}

export async function StatsOverview() {
  const supabase = await createClient()

  // Calculate total yield for current year
  const currentYear = new Date().getFullYear()
  const { data: currentYearProduction } = await supabase
    .from("production_data")
    .select("yield_kg")
    .eq("year", currentYear)

  const totalYield = currentYearProduction?.reduce((sum, d) => sum + Number(d.yield_kg), 0) || 0

  // Calculate last year's yield for comparison
  const { data: lastYearProduction } = await supabase
    .from("production_data")
    .select("yield_kg")
    .eq("year", currentYear - 1)

  const lastYearYield = lastYearProduction?.reduce((sum, d) => sum + Number(d.yield_kg), 0) || 1
  const yieldChange = ((totalYield - lastYearYield) / lastYearYield) * 100

  // Count active farms
  const { count: farmCount } = await supabase.from("farms").select("*", { count: "exact", head: true })

  // Get latest soil health reading
  const { data: latestSoil } = await supabase
    .from("soil_readings")
    .select("ph_level, nitrogen_ppm, phosphorus_ppm, potassium_ppm, moisture_percent, organic_matter_percent")
    .order("reading_date", { ascending: false })
    .limit(1)
    .single()

  // Calculate soil health score (simplified)
  let soilScore = 0
  if (latestSoil) {
    const phScore = latestSoil.ph_level >= 6.0 && latestSoil.ph_level <= 8.0 ? 1 : 0
    const nitrogenScore = latestSoil.nitrogen_ppm >= 50 && latestSoil.nitrogen_ppm <= 150 ? 1 : 0
    const phosphorusScore = latestSoil.phosphorus_ppm >= 20 && latestSoil.phosphorus_ppm <= 100 ? 1 : 0
    const potassiumScore = latestSoil.potassium_ppm >= 30 && latestSoil.potassium_ppm <= 200 ? 1 : 0
    const moistureScore = latestSoil.moisture_percent >= 20 && latestSoil.moisture_percent <= 80 ? 1 : 0
    const organicMatterScore = latestSoil.organic_matter_percent >= 2 && latestSoil.organic_matter_percent <= 6 ? 1 : 0

    soilScore =
      ((phScore + nitrogenScore + phosphorusScore + potassiumScore + moistureScore + organicMatterScore) / 6) * 100
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <StatCard
        title="Total Yield"
        value={`${totalYield} kg`}
        change={yieldChange}
        icon={<div className="text-2xl">🌾</div>}
      />
      <StatCard title="Active Farms" value={`${farmCount}`} change={0} icon={<div className="text-2xl">🏠</div>} />
      <StatCard
        title="Soil Health Score"
        value={`${soilScore.toFixed(0)}%`}
        change={0}
        icon={<div className="text-2xl">🧪</div>}
      />
    </div>
  )
}
