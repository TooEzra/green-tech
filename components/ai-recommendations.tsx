'use client'

import { useEffect, useState } from 'react'
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Droplets, TrendingUp, AlertCircle, Sparkles, Sprout } from "lucide-react"
import { createClient } from "@/lib/supabase/client"

export function AIRecommendations() {
  const [recommendations, setRecommendations] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  const supabase = createClient()

  useEffect(() => {
    async function fetchRecommendations() {
      try {
        const { data } = await supabase
          .from("recommendations")
          .select("*")
          .eq("status", "pending")
          .order("created_at", { ascending: false })
          .limit(3)

        setRecommendations(data || [])
      } catch (error) {
        console.error("Failed to fetch recommendations:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchRecommendations()
  }, [supabase])

  // ... rest of your UI code remains the same
  const getRecommendationStyle = (type: string) => {
    switch (type) {
      case "irrigation":
        return { icon: Droplets, color: "text-blue-500", bgColor: "bg-blue-500/10" }
      case "fertilizer":
        return { icon: Sprout, color: "text-green-500", bgColor: "bg-green-500/10" }
      case "pest_control":
        return { icon: AlertCircle, color: "text-orange-500", bgColor: "bg-orange-500/10" }
      case "harvest":
        return { icon: TrendingUp, color: "text-primary", bgColor: "bg-primary/10" }
      default:
        return { icon: Sparkles, color: "text-primary", bgColor: "bg-primary/10" }
    }
  }

  return (
    <Card className="p-6">
      <div className="flex items-center gap-2 mb-6">
        <Sparkles className="h-5 w-5 text-primary" />
        <h2 className="text-xl font-semibold">AI Recommendations</h2>
      </div>

      <div className="space-y-4">
        {loading ? (
          <p className="text-sm text-muted-foreground text-center py-4">Loading recommendations...</p>
        ) : recommendations.length > 0 ? (
          recommendations.map((rec) => {
            const style = getRecommendationStyle(rec.recommendation_type)
            const Icon = style.icon

            return (
              <div key={rec.id} className="rounded-lg border border-border p-4 hover:border-primary/50 transition-colors">
                <div className="flex items-start gap-3">
                  <div className={`rounded-lg p-2 ${style.bgColor}`}>
                    <Icon className={`h-5 w-5 ${style.color}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-medium text-sm">{rec.title}</h3>
                      {rec.priority === "high" && <Badge variant="destructive" className="text-xs">High</Badge>}
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{rec.description}</p>
                    <p className="text-xs font-medium text-primary">AI-powered insight</p>
                  </div>
                </div>
              </div>
            )
          })
        ) : (
          <p className="text-sm text-muted-foreground text-center py-4">No pending recommendations</p>
        )}
      </div>

      <button className="w-full mt-6 rounded-lg bg-primary text-primary-foreground px-4 py-2.5 text-sm font-medium transition-colors hover:bg-primary/90">
        View All Insights
      </button>
    </Card>
  )
}