import { Sidebar } from "@/components/sidebar"
import { Search, Bell, HelpCircle, Download, Filter } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { YieldTrendsChart } from "@/components/analytics/yield-trends-chart"
import { WaterUsageChart } from "@/components/analytics/water-usage-chart"
import { SoilHealthChart } from "@/components/analytics/soil-health-chart"
import { CropDistributionChart } from "@/components/analytics/crop-distribution-chart"

export default function AnalyticsPage() {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />

      <main className="flex-1 overflow-y-auto">
        {/* Header */}
        <header className="sticky top-0 z-10 border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
          <div className="flex h-16 items-center justify-between px-8">
            <div className="relative w-96">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search analytics..."
                className="w-full rounded-lg border border-input bg-background pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>

            <div className="flex items-center gap-4">
              <button className="rounded-lg p-2 hover:bg-muted">
                <HelpCircle className="h-5 w-5 text-muted-foreground" />
              </button>
              <button className="rounded-lg p-2 hover:bg-muted">
                <Bell className="h-5 w-5 text-muted-foreground" />
              </button>
              <div className="flex items-center gap-3 rounded-lg border border-border bg-card px-3 py-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-semibold">
                  SF
                </div>
                <div>
                  <p className="text-sm font-medium">Smallholder</p>
                  <p className="text-xs text-muted-foreground">Green House</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Analytics Content */}
        <div className="p-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">Analytics Dashboard</h1>
              <p className="text-muted-foreground">Comprehensive insights into your farming operations</p>
            </div>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium hover:bg-muted">
                <Filter className="h-4 w-4" />
                Filter
              </button>
              <button className="flex items-center gap-2 rounded-lg bg-primary text-primary-foreground px-4 py-2 text-sm font-medium hover:bg-primary/90">
                <Download className="h-4 w-4" />
                Export Report
              </button>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
            <Card className="p-6">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm text-muted-foreground">Avg Yield/Hectare</p>
                <Badge variant="default" className="bg-green-500">
                  +12%
                </Badge>
              </div>
              <p className="text-3xl font-bold">3.2 tons</p>
              <p className="text-xs text-muted-foreground mt-1">vs last season</p>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm text-muted-foreground">Water Efficiency</p>
                <Badge variant="default" className="bg-blue-500">
                  +18%
                </Badge>
              </div>
              <p className="text-3xl font-bold">82%</p>
              <p className="text-xs text-muted-foreground mt-1">optimal usage</p>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm text-muted-foreground">Carbon Offset</p>
                <Badge variant="default" className="bg-accent text-accent-foreground">
                  +24%
                </Badge>
              </div>
              <p className="text-3xl font-bold">1.8 tons</p>
              <p className="text-xs text-muted-foreground mt-1">CO2 reduced</p>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm text-muted-foreground">Cost Savings</p>
                <Badge variant="default" className="bg-primary">
                  +15%
                </Badge>
              </div>
              <p className="text-3xl font-bold">$4,200</p>
              <p className="text-xs text-muted-foreground mt-1">this quarter</p>
            </Card>
          </div>

          {/* Charts Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <YieldTrendsChart />
            <WaterUsageChart />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <SoilHealthChart />
            <CropDistributionChart />
          </div>
        </div>
      </main>
    </div>
  )
}
