import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function PlantGrowthCard() {
  const stages = [
    { name: "Seed Phase", value: "W1", color: "bg-orange-400" },
    { name: "Flood Growth", value: "W1", color: "bg-primary" },
    { name: "Vegetation", value: "W2", color: "bg-accent" },
  ]

  return (
    <Card className="p-6">
      <div className="mb-4">
        <p className="text-sm text-muted-foreground mb-1">Plant growth activity</p>
        <Badge variant="outline" className="text-xs">
          Weekly
        </Badge>
      </div>

      <div className="relative h-32 mb-6">
        <svg viewBox="0 0 300 100" className="w-full h-full">
          {/* Growth curve */}
          <path
            d="M 20 80 Q 80 70, 100 50 T 180 30 T 260 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-primary"
          />

          {/* Stage markers */}
          <circle cx="80" cy="60" r="20" fill="currentColor" className="text-orange-400/20" />
          <circle cx="80" cy="60" r="8" fill="currentColor" className="text-orange-400" />

          <circle cx="160" cy="35" r="24" fill="currentColor" className="text-primary/20" />
          <circle cx="160" cy="35" r="10" fill="currentColor" className="text-primary" />

          <circle cx="240" cy="22" r="20" fill="currentColor" className="text-accent/20" />
          <circle cx="240" cy="22" r="8" fill="currentColor" className="text-accent" />
        </svg>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {stages.map((stage, index) => (
          <div key={index} className="text-center">
            <div className={`h-2 w-2 rounded-full ${stage.color} mx-auto mb-1`} />
            <p className="text-xs font-medium">{stage.name}</p>
            <p className="text-xs text-muted-foreground">({stage.value})</p>
          </div>
        ))}
      </div>
    </Card>
  )
}
