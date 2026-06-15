'use client'

import { useEffect, useState } from 'react'
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { createClient } from "@/lib/supabase/client"
import { formatDistanceToNow } from "date-fns"

export function RecentActivity() {
  const [activities, setActivities] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  const supabase = createClient()

  useEffect(() => {
    async function fetchActivities() {
      try {
        const { data } = await supabase
          .from("activities")
          .select("*, crops(crop_name)")
          .order("created_at", { ascending: false })
          .limit(4)

        setActivities(data || [])
      } catch (error) {
        console.error("Failed to fetch activities:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchActivities()
  }, [supabase])

  const getActivityStatus = (type: string) => {
    switch (type) {
      case "harvest": return "success"
      case "irrigation": return "pending"
      case "pest_control": return "warning"
      default: return "success"
    }
  }

  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
      <div className="space-y-4">
        {loading ? (
          <p className="text-sm text-muted-foreground text-center py-4">Loading activities...</p>
        ) : activities.length > 0 ? (
          activities.map((activity) => {
            const status = getActivityStatus(activity.activity_type)
            const timeAgo = formatDistanceToNow(new Date(activity.created_at), { addSuffix: true })

            return (
              <div key={activity.id} className="flex items-center justify-between pb-4 border-b border-border last:border-0 last:pb-0">
                <div className="flex-1">
                  <p className="font-medium text-sm">{activity.description}</p>
                  <p className="text-xs text-muted-foreground">{activity.performed_by || "System"}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-muted-foreground">{timeAgo}</span>
                  <Badge variant={status === "success" ? "default" : status === "warning" ? "destructive" : "secondary"} className="text-xs">
                    {status}
                  </Badge>
                </div>
              </div>
            )
          })
        ) : (
          <p className="text-sm text-muted-foreground text-center py-4">No recent activities</p>
        )}
      </div>
    </Card>
  )
}