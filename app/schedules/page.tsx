import { createClient } from "@/lib/supabase/server"
import { Card } from "@/components/ui/card"
import { Calendar, Clock, Droplets, Sun } from "lucide-react"

export default async function SchedulesPage() {
  const supabase = await createClient()

  // Fetch crops for scheduling
  const { data: crops } = await supabase.from("crops").select("*").order("planting_date", { ascending: true })

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Schedules</h1>
        <p className="text-muted-foreground mt-1">Manage your planting, irrigation, and harvest schedules</p>
      </div>

      {/* Quick Schedule Overview */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <Calendar className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Next Planting</p>
              <p className="text-lg font-semibold">3 days</p>
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10">
              <Droplets className="h-5 w-5 text-blue-500" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Next Irrigation</p>
              <p className="text-lg font-semibold">Tomorrow</p>
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/50">
              <Sun className="h-5 w-5 text-accent-foreground" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Next Harvest</p>
              <p className="text-lg font-semibold">12 days</p>
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500/10">
              <Clock className="h-5 w-5 text-orange-500" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Pending Tasks</p>
              <p className="text-lg font-semibold">8 tasks</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Planting Schedule */}
      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">Planting Schedule</h2>
        <div className="space-y-3">
          {crops?.map((crop) => (
            <div
              key={crop.id}
              className="flex items-center justify-between p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <span className="text-2xl">
                    {crop.crop_type === "Tomatoes"
                      ? "🍅"
                      : crop.crop_type === "Lettuce"
                        ? "🥬"
                        : crop.crop_type === "Carrots"
                          ? "🥕"
                          : "🌾"}
                  </span>
                </div>
                <div>
                  <p className="font-medium">{crop.crop_type}</p>
                  <p className="text-sm text-muted-foreground">
                    Planted: {new Date(crop.planting_date).toLocaleDateString()}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium">Expected Harvest</p>
                <p className="text-sm text-muted-foreground">
                  {new Date(crop.expected_harvest_date).toLocaleDateString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Irrigation Schedule */}
      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">Irrigation Schedule</h2>
        <div className="space-y-3">
          {[
            { day: "Monday", time: "6:00 AM", duration: "45 min", zone: "Zone A" },
            { day: "Monday", time: "6:00 PM", duration: "30 min", zone: "Zone B" },
            { day: "Wednesday", time: "6:00 AM", duration: "45 min", zone: "Zone A" },
            { day: "Wednesday", time: "6:00 PM", duration: "30 min", zone: "Zone B" },
            { day: "Friday", time: "6:00 AM", duration: "45 min", zone: "Zone A" },
            { day: "Friday", time: "6:00 PM", duration: "30 min", zone: "Zone B" },
          ].map((schedule, index) => (
            <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
              <div className="flex items-center gap-4">
                <Droplets className="h-5 w-5 text-blue-500" />
                <div>
                  <p className="font-medium">{schedule.day}</p>
                  <p className="text-sm text-muted-foreground">{schedule.zone}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium">{schedule.time}</p>
                <p className="text-sm text-muted-foreground">{schedule.duration}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
