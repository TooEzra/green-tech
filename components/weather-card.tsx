'use client'

import { useEffect, useState } from 'react'
import { Card } from "@/components/ui/card"
import { CloudRain, ThermometerSun, Droplet } from "lucide-react"
import { createClient } from '@/lib/supabase/client'

export function WeatherCard() {
  const [weather, setWeather] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  const supabase = createClient()

  useEffect(() => {
    async function fetchWeather() {
      try {
        const { data } = await supabase
          .from('weather_data')
          .select('*')
          .order('date', { ascending: false })
          .limit(1)
          .single()

        setWeather(data)
      } catch (error) {
        console.error('Weather fetch error:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchWeather()
  }, [supabase])

  if (loading) {
    return <Card className="p-6">Loading weather...</Card>
  }

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-muted-foreground">Current Conditions</p>
          <p className="text-3xl font-semibold mt-2">
            {weather?.temperature ? `${weather.temperature}°C` : '--'}
          </p>
        </div>
        <CloudRain className="h-12 w-12 text-blue-500" />
      </div>

      <div className="grid grid-cols-3 gap-4 mt-6">
        <div className="text-center">
          <Droplet className="h-5 w-5 mx-auto mb-1 text-blue-500" />
          <p className="text-sm font-medium">{weather?.humidity || '--'}%</p>
          <p className="text-xs text-muted-foreground">Humidity</p>
        </div>
        <div className="text-center">
          <ThermometerSun className="h-5 w-5 mx-auto mb-1 text-orange-500" />
          <p className="text-sm font-medium">{weather?.feels_like || '--'}°C</p>
          <p className="text-xs text-muted-foreground">Feels Like</p>
        </div>
        <div className="text-center">
          <CloudRain className="h-5 w-5 mx-auto mb-1 text-blue-500" />
          <p className="text-sm font-medium">{weather?.rain_probability || '--'}%</p>
          <p className="text-xs text-muted-foreground">Rain</p>
        </div>
      </div>
    </Card>
  )
}