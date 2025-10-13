import { Sidebar } from "@/components/sidebar"
import { Search, Bell, HelpCircle, Sparkles } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AIInsightsPanel } from "@/components/harvest/ai-insights-panel"
import { FarmingActionsCard } from "@/components/harvest/farming-actions-card"
import { PredictiveAnalytics } from "@/components/harvest/predictive-analytics"
import { ImpactSimulator } from "@/components/harvest/impact-simulator"

export default function HarvestPage() {
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
                placeholder="Search recommendations..."
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

        {/* Harvest Content */}
        <div className="p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <Sparkles className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">AI-Powered Harvest Optimization</h1>
              <p className="text-muted-foreground">
                Personalized recommendations to maximize yield and minimize resource usage
              </p>
            </div>
          </div>

          {/* AI Status Banner */}
          <Card className="p-6 mb-6 bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Sparkles className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">AI Model Active</h3>
                  <p className="text-sm text-muted-foreground">
                    Analyzing 12 data sources • Last updated 5 minutes ago
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Badge variant="default" className="bg-green-500">
                  98% Accuracy
                </Badge>
                <Badge variant="outline">Real-time</Badge>
              </div>
            </div>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <div className="lg:col-span-2">
              <AIInsightsPanel />
            </div>
            <FarmingActionsCard />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <PredictiveAnalytics />
            <ImpactSimulator />
          </div>
        </div>
      </main>
    </div>
  )
}
