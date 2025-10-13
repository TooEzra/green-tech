import { Card } from "@/components/ui/card"
import { Plus, Calendar, FileText, Settings } from "lucide-react"

const actions = [
  { icon: Plus, label: "Add Farm", color: "bg-primary text-primary-foreground" },
  { icon: Calendar, label: "Schedule", color: "bg-accent text-accent-foreground" },
  { icon: FileText, label: "Reports", color: "bg-secondary text-secondary-foreground" },
  { icon: Settings, label: "Settings", color: "bg-muted text-muted-foreground" },
]

export function QuickActions() {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
      <div className="grid grid-cols-2 gap-3">
        {actions.map((action, index) => (
          <button
            key={index}
            className={`flex flex-col items-center justify-center gap-2 rounded-lg p-4 transition-all hover:scale-105 ${action.color}`}
          >
            <action.icon className="h-6 w-6" />
            <span className="text-sm font-medium">{action.label}</span>
          </button>
        ))}
      </div>
    </Card>
  )
}
