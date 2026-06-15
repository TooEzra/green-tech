'use client'

import { useEffect, useState } from 'react'
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { Sidebar } from "@/components/sidebar"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin } from "lucide-react"
import { createClient } from '@/lib/supabase/client'
import { format } from "date-fns"

interface Schedule {
  id: string
  title: string
  date: string
  crop_name?: string
  activity_type: string
  status: string
  notes?: string
}

export default function SchedulesPage() {
  const [schedules, setSchedules] = useState<Schedule[]>([])
  const [loading, setLoading] = useState(true)

  const supabase = createClient()

  useEffect(() => {
    async function fetchSchedules() {
      try {
        const { data } = await supabase
          .from('schedules')
          .select('*')
          .order('date', { ascending: true })

        setSchedules(data || [])
      } catch (error) {
        console.error('Failed to fetch schedules:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchSchedules()
  }, [supabase])

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-500'
      case 'pending': return 'bg-yellow-500'
      case 'scheduled': return 'bg-blue-500'
      default: return 'bg-gray-500'
    }
  }

  if (loading) {
    return (
      <SidebarProvider>
        <div className="flex h-screen bg-background">
          <Sidebar />
          <SidebarInset className="flex-1 overflow-auto">
            <div className="p-8">Loading schedules...</div>
          </SidebarInset>
        </div>
      </SidebarProvider>
    )
  }

  return (
    <SidebarProvider>
      <div className="flex h-screen bg-background">
        <Sidebar />
        
        <SidebarInset className="flex-1 overflow-auto">
          <div className="p-8 space-y-6">
            <div className="flex justify-between items-center">
              <h1 className="text-3xl font-bold">Schedules</h1>
              <Badge variant="outline" className="text-sm">Upcoming Activities</Badge>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {schedules.length > 0 ? (
                schedules.map((schedule) => (
                  <Card key={schedule.id} className="p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="font-semibold text-lg">{schedule.title}</h3>
                        {schedule.crop_name && (
                          <p className="text-sm text-muted-foreground mt-1">{schedule.crop_name}</p>
                        )}
                      </div>
                      <Badge className={getStatusColor(schedule.status)}>
                        {schedule.status}
                      </Badge>
                    </div>

                    <div className="space-y-3 text-sm">
                      <div className="flex items-center gap-3">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span>{format(new Date(schedule.date), 'PPP')}</span>
                      </div>

                      <div className="flex items-center gap-3">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span>{format(new Date(schedule.date), 'p')}</span>
                      </div>

                      {schedule.activity_type && (
                        <div className="flex items-center gap-3">
                          <MapPin className="h-4 w-4 text-muted-foreground" />
                          <span className="capitalize">{schedule.activity_type.replace('_', ' ')}</span>
                        </div>
                      )}
                    </div>

                    {schedule.notes && (
                      <p className="mt-4 text-sm text-muted-foreground border-t pt-3">
                        {schedule.notes}
                      </p>
                    )}
                  </Card>
                ))
              ) : (
                <Card className="p-12 text-center">
                  <p className="text-muted-foreground">No schedules found</p>
                </Card>
              )}
            </div>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}