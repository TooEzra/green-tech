import { Cloud, Droplets, Wind } from "lucide-react"
import { Card } from "@/components/ui/card"
import { createClient } from "@/lib/supabase/server"

export async function WeatherCard() {
  const supabase = await createClient()

  // Fetch latest weather data
  const { data: weatherData } = await supabase
    .from("weather_data")
    .select("*")
    .order("date", { ascending: false })
    .limit(1)
    .single()

  const temperature = weatherData?.temperature_celsius || 29
  const humidity = weatherData?.humidity_percent || 86
  const windSpeed = weatherData?.wind_speed_kmh || 15
  const rainfall = weatherData?.rainfall_mm || 0

  // Calculate cloud coverage based on rainfall (simple approximation)
  const cloudCoverage = rainfall > 0 ? Math.min(rainfall * 10, 100) : 0

  const today = new Date()
  const dayName = today.toLocaleDateString("en-US", { weekday: "long" })
  const dateStr = today.toLocaleDateString("en-US", { day: "numeric", month: "short", year: "numeric" })

  return (
    <Card className="p-6">
      <div className="mb-4">
        <p className="text-sm text-muted-foreground">Weather today</p>
        <p className="text-2xl font-semibold">{dayName}</p>
        <p className="text-xs text-muted-foreground">{dateStr}</p>
      </div>

      <div className="flex items-center justify-between mb-6">
        <div>
          <div className="text-5xl font-bold">{temperature}°C</div>
          <p className="text-sm text-muted-foreground mt-1">Nairobi</p>
        </div>

        <div className="relative h-24 w-24">
          <svg viewBox="0 0 100 100" className="transform -rotate-90">
            <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="8" className="text-muted" />
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="currentColor"
              strokeWidth="8"
              strokeDasharray={`${(rainfall / 10) * 2.51} ${100 * 2.51}`}
              className="text-primary"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xl font-bold">{rainfall.toFixed(0)}mm</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="flex items-center gap-2">
          <Cloud className="h-5 w-5 text-muted-foreground" />
          <div>
            <p className="text-xs text-muted-foreground">Clouds</p>
            <p className="text-sm font-medium">{cloudCoverage.toFixed(0)}%</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Droplets className="h-5 w-5 text-muted-foreground" />
          <div>
            <p className="text-xs text-muted-foreground">Humidity</p>
            <p className="text-sm font-medium">{humidity}%</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Wind className="h-5 w-5 text-muted-foreground" />
          <div>
            <p className="text-xs text-muted-foreground">Wind</p>
            <p className="text-sm font-medium">{windSpeed.toFixed(1)}km/h</p>
          </div>
        </div>
      </div>
    </Card>
  )
}
