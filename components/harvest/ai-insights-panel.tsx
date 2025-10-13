import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Droplets, Sun, Thermometer, TrendingUp, AlertTriangle } from "lucide-react"

const insights = [
  {
    id: 1,
    title: "Optimal Irrigation Schedule",
    description: "Reduce water by 20% on Day 5-7 based on weather forecast and soil moisture levels",
    impact: "+15% yield increase, -20% water usage",
    priority: "high",
    category: "Water Management",
    icon: Droplets,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    confidence: 94,
    action: "Apply recommendation",
  },
  {
    id: 2,
    title: "Harvest Window Prediction",
    description: "Optimal harvest window: April 15-18. Weather conditions will be ideal with low humidity",
    impact: "+8% quality improvement",
    priority: "medium",
    category: "Harvest Planning",
    icon: Sun,
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
    confidence: 89,
    action: "Schedule harvest",
  },
  {
    id: 3,
    title: "Soil Nutrient Adjustment",
    description: "Nitrogen levels 12% below optimal. Apply 15kg/hectare of organic fertilizer",
    impact: "+10% growth rate",
    priority: "high",
    category: "Soil Health",
    icon: AlertTriangle,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
    confidence: 91,
    action: "View details",
  },
  {
    id: 4,
    title: "Temperature Stress Alert",
    description: "Expected heat wave next week. Increase irrigation frequency by 30% on Days 3-5",
    impact: "Prevent 25% yield loss",
    priority: "high",
    category: "Climate Adaptation",
    icon: Thermometer,
    color: "text-red-500",
    bgColor: "bg-red-500/10",
    confidence: 87,
    action: "Prepare action",
  },
  {
    id: 5,
    title: "Crop Rotation Suggestion",
    description: "Plant beans in North Field after maize harvest to restore soil nitrogen naturally",
    impact: "+30% soil health, -40% fertilizer cost",
    priority: "medium",
    category: "Sustainability",
    icon: TrendingUp,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    confidence: 92,
    action: "Plan rotation",
  },
]

export function AIInsightsPanel() {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-semibold mb-1">Personalized AI Insights</h2>
          <p className="text-sm text-muted-foreground">Data-driven recommendations for your farm</p>
        </div>
        <Badge variant="outline" className="text-xs">
          5 Active Recommendations
        </Badge>
      </div>

      <div className="space-y-4">
        {insights.map((insight) => (
          <div
            key={insight.id}
            className="rounded-lg border border-border p-4 hover:border-primary/50 transition-all hover:shadow-md"
          >
            <div className="flex items-start gap-4">
              <div className={`rounded-lg p-3 ${insight.bgColor} flex-shrink-0`}>
                <insight.icon className={`h-5 w-5 ${insight.color}`} />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-sm">{insight.title}</h3>
                      {insight.priority === "high" && (
                        <Badge variant="destructive" className="text-xs">
                          High Priority
                        </Badge>
                      )}
                    </div>
                    <Badge variant="secondary" className="text-xs mb-2">
                      {insight.category}
                    </Badge>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="text-xs text-muted-foreground">Confidence</p>
                    <p className="text-sm font-bold text-primary">{insight.confidence}%</p>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{insight.description}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-green-600" />
                    <p className="text-xs font-medium text-green-600">{insight.impact}</p>
                  </div>
                  <button className="rounded-lg bg-primary text-primary-foreground px-3 py-1.5 text-xs font-medium hover:bg-primary/90 transition-colors">
                    {insight.action}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}
