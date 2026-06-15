import { Card } from "@/components/ui/card"
import { Play } from "lucide-react"


export function VerticalFarmCard() {
  return (
    <Card className="relative overflow-hidden bg-primary text-primary-foreground">
      <img
        src="/vertical-farming-indoor-hydroponic-system-with-gre.jpg"
        alt="Vertical farming"
        className="absolute inset-0 h-full w-full object-cover opacity-20"
      />

      <div className="relative p-6 h-full flex flex-col justify-between min-h-[280px]">
        <div>
          <h3 className="text-2xl font-bold mb-2">Vertical Harvest Farms</h3>

          <div className="flex items-center gap-2 mb-4">
            <div className="h-1 flex-1 bg-primary-foreground/30 rounded-full overflow-hidden">
              <div className="h-full w-2/3 bg-accent rounded-full" />
            </div>
            <span className="text-sm font-medium">18:10</span>
            <span className="text-sm text-primary-foreground/70">34:50</span>
          </div>
        </div>

        <div>
          <p className="text-sm leading-relaxed mb-4 text-primary-foreground/90">
            Vertical Farming is a novel method of growing crops by artificially stacking them in layers or by using the
            third dimension of space.
          </p>

          <button className="flex items-center justify-center gap-2 w-full rounded-lg bg-accent text-accent-foreground px-4 py-2.5 font-medium transition-colors hover:bg-accent/90">
            <Play className="h-4 w-4 fill-current" />
            Watch Tutorial
          </button>
        </div>
      </div>
    </Card>
  )
}
