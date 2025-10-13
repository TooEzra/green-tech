import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, CheckCircle2, Clock } from "lucide-react"

const actions = [
  {
    task: "Apply fertilizer to North Field",
    dueDate: "Today",
    status: "urgent",
    time: "Morning",
  },
  {
    task: "Adjust irrigation schedule",
    dueDate: "Tomorrow",
    status: "pending",
    time: "6:00 AM",
  },
  {
    task: "Soil pH testing",
    dueDate: "Apr 12",
    status: "scheduled",
    time: "10:00 AM",
  },
  {
    task: "Harvest maize - South Field",
    dueDate: "Apr 15",
    status: "scheduled",
    time: "All day",
  },
]

export function FarmingActionsCard() {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold">Recommended Actions</h3>
        <Badge variant="outline" className="text-xs">
          4 Tasks
        </Badge>
      </div>

      <div className="space-y-3">
        {actions.map((action, index) => (
          <div key={index} className="rounded-lg border border-border p-4 hover:border-primary/50 transition-colors">
            <div className="flex items-start gap-3">
              <div className="mt-0.5">
                {action.status === "urgent" ? (
                  <div className="h-5 w-5 rounded-full bg-red-500/10 flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-red-500" />
                  </div>
                ) : action.status === "pending" ? (
                  <Clock className="h-5 w-5 text-orange-500" />
                ) : (
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                )}
              </div>

              <div className="flex-1 min-w-0">
                <p className="font-medium text-sm mb-1">{action.task}</p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Calendar className="h-3 w-3" />
                  <span>{action.dueDate}</span>
                  <span>•</span>
                  <span>{action.time}</span>
                </div>
              </div>

              {action.status === "urgent" && (
                <Badge variant="destructive" className="text-xs">
                  Urgent
                </Badge>
              )}
            </div>
          </div>
        ))}
      </div>

      <button className="w-full mt-4 rounded-lg border border-border bg-card px-4 py-2.5 text-sm font-medium hover:bg-muted transition-colors">
        View All Tasks
      </button>
    </Card>
  )
}
