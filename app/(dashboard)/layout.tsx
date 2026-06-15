'use client'

import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { Sidebar } from "@/components/ui/sidebar"   // or "@/components/ui/sidebar" depending on your setup

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider>
      <div className="flex h-screen bg-background">
        <Sidebar />
        <SidebarInset className="flex-1 overflow-auto">
          {children}
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}