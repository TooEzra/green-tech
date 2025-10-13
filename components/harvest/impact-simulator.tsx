"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import { useState } from "react"
import { Droplets, Leaf, TrendingUp } from "lucide-react"

export function ImpactSimulator() {
  const [waterReduction, setWaterReduction] = useState([20])
  const [fertilizerIncrease, setFertilizerIncrease] = useState([15])

  const calculateYieldImpact = () => {
    return (waterReduction[0] * 0.75 + fertilizerIncrease[0] * 0.5).toFixed(1)
  }

  const calculateCostSavings = () => {
    return (waterReduction[0] * 12 + fertilizerIncrease[0] * 8).toFixed(0)
  }

  return (
    <Card className="p-6">
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-1">Impact Simulator</h3>
        <p className="text-sm text-muted-foreground">Adjust parameters to see predicted outcomes</p>
      </div>

      <div className="space-y-6">
        <div>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Droplets className="h-4 w-4 text-blue-500" />
              <label className="text-sm font-medium">Water Reduction</label>
            </div>
            <Badge variant="secondary">{waterReduction[0]}%</Badge>
          </div>
          <Slider value={waterReduction} onValueChange={setWaterReduction} max={50} step={5} className="mb-2" />
          <p className="text-xs text-muted-foreground">Reduce irrigation while maintaining crop health</p>
        </div>

        <div>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Leaf className="h-4 w-4 text-green-500" />
              <label className="text-sm font-medium">Fertilizer Adjustment</label>
            </div>
            <Badge variant="secondary">+{fertilizerIncrease[0]}%</Badge>
          </div>
          <Slider value={fertilizerIncrease} onValueChange={setFertilizerIncrease} max={30} step={5} className="mb-2" />
          <p className="text-xs text-muted-foreground">Optimize nutrient application for better growth</p>
        </div>
      </div>

      <div className="mt-6 p-4 rounded-lg bg-primary/5 border border-primary/20">
        <h4 className="text-sm font-semibold mb-3 flex items-center gap-2">
          <TrendingUp className="h-4 w-4 text-primary" />
          Predicted Impact
        </h4>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-2xl font-bold text-primary">+{calculateYieldImpact()}%</p>
            <p className="text-xs text-muted-foreground">Yield Increase</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-accent">${calculateCostSavings()}</p>
            <p className="text-xs text-muted-foreground">Cost Savings</p>
          </div>
        </div>
      </div>

      <button className="w-full mt-4 rounded-lg bg-primary text-primary-foreground px-4 py-2.5 text-sm font-medium hover:bg-primary/90 transition-colors">
        Apply These Settings
      </button>
    </Card>
  )
}
