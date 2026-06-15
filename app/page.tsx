'use client'

import { Sidebar } from "@/components/sidebar"
import { WeatherCard } from "@/components/weather-card"
import { PlantGrowthCard } from "@/components/plant-growth-card"
import { ProductionChart } from "@/components/production-chart"
import { VerticalFarmCard } from "@/components/vertical-farm-card"
import { AIRecommendations } from "@/components/ai-recommendations"
import { StatsOverview } from "@/components/stats-overview"
import { QuickActions } from "@/components/quick-actions"
import { RecentActivity } from "@/components/recent-activity"
import { Search, Bell, HelpCircle, Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"

function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="rounded-lg p-2 hover:bg-muted transition-colors"
      title="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun className="h-5 w-5 text-muted-foreground" />
      ) : (
        <Moon className="h-5 w-5 text-muted-foreground" />
      )}
    </button>
  )
}

export default function DashboardPage() {
  return (
    <SidebarProvider>
      <div className="flex h-screen bg-background">
        <Sidebar />

        <SidebarInset className="flex-1 overflow-auto">
          {/* Header */}
          <header className="sticky top-0 z-10 border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
            <div className="flex h-16 items-center justify-between px-8">
              <div className="relative w-96">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search plant here..."
                  className="w-full rounded-lg border border-input bg-background pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>

              <div className="flex items-center gap-3">
                <ThemeToggle />
                
                <button className="rounded-lg p-2 hover:bg-muted">
                  <Bell className="h-5 w-5 text-muted-foreground" />
                </button>

                <button className="rounded-lg p-2 hover:bg-muted">
                  <HelpCircle className="h-5 w-5 text-muted-foreground" />
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

          {/* Dashboard Content */}
          <div className="p-8">
            <StatsOverview />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
              <WeatherCard />
              <PlantGrowthCard />
              <VerticalFarmCard />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
              <div className="lg:col-span-2">
                <ProductionChart />
              </div>
              <div>
                <AIRecommendations />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <QuickActions />
              <div className="lg:col-span-2">
                <RecentActivity />
              </div>
            </div>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}