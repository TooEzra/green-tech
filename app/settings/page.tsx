'use client'

import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { Sidebar } from "@/components/sidebar"
import { Card } from "@/components/ui/card"
import { User, Bell, Globe, Shield, Database, Palette } from "lucide-react"

export default function SettingsPage() {
  return (
    <SidebarProvider>
      <div className="flex h-screen bg-background">
        <Sidebar />
        
        <SidebarInset className="flex-1 overflow-auto">
          <div className="p-6 lg:p-8 max-w-5xl mx-auto space-y-8">
            {/* Page Header */}
            <div className="space-y-1">
              <h1 className="text-4xl font-bold tracking-tight">Settings</h1>
              <p className="text-muted-foreground text-lg">
                Manage your account and application preferences
              </p>
            </div>

            {/* Profile Settings */}
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <User className="h-5 w-5 text-primary" />
                <h2 className="text-xl font-semibold">Profile Settings</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Farm Name</label>
                  <div className="mt-1.5 p-4 rounded-lg bg-muted/50">
                    <p className="font-medium">Smallholder Farm</p>
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Location</label>
                  <div className="mt-1.5 p-4 rounded-lg bg-muted/50">
                    <p className="font-medium">Green House, Sub-Saharan Africa</p>
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Farm Size</label>
                  <div className="mt-1.5 p-4 rounded-lg bg-muted/50">
                    <p className="font-medium">2.5 hectares</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Notification Settings */}
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <Bell className="h-5 w-5 text-primary" />
                <h2 className="text-xl font-semibold">Notifications</h2>
              </div>
              <div className="space-y-4">
                {[
                  { label: "Weather Alerts", description: "Get notified about severe weather conditions", enabled: true },
                  { label: "Harvest Reminders", description: "Receive reminders for upcoming harvests", enabled: true },
                  { label: "Irrigation Schedules", description: "Notifications for irrigation tasks", enabled: true },
                  { label: "AI Recommendations", description: "Get AI-powered farming suggestions", enabled: true },
                  { label: "Payment Updates", description: "Transaction and payment notifications", enabled: false },
                ].map((setting, index) => (
                  <div key={index} className="flex items-center justify-between p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors">
                    <div>
                      <p className="font-medium">{setting.label}</p>
                      <p className="text-sm text-muted-foreground mt-0.5">{setting.description}</p>
                    </div>
                    <div
                      className={`h-6 w-11 rounded-full transition-colors cursor-pointer ${
                        setting.enabled ? "bg-primary" : "bg-muted-foreground/30"
                      }`}
                    >
                      <div
                        className={`h-5 w-5 rounded-full bg-white transition-transform mt-0.5 shadow-sm ${
                          setting.enabled ? "translate-x-6" : "translate-x-0.5"
                        }`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* System Settings */}
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <Globe className="h-5 w-5 text-primary" />
                  <h2 className="text-xl font-semibold">Language & Region</h2>
                </div>
                <div className="space-y-6">
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">Language</label>
                    <div className="mt-2 p-4 rounded-xl bg-muted/50">
                      <p className="font-medium">English</p>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">Timezone</label>
                    <div className="mt-2 p-4 rounded-xl bg-muted/50">
                      <p className="font-medium">GMT+3 (East Africa Time)</p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <Palette className="h-5 w-5 text-primary" />
                  <h2 className="text-xl font-semibold">Appearance</h2>
                </div>
                <div className="space-y-6">
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">Theme</label>
                    <div className="mt-2 p-4 rounded-xl bg-muted/50">
                      <p className="font-medium">Dark Mode</p>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">Color Scheme</label>
                    <div className="mt-2 p-4 rounded-xl bg-muted/50">
                      <p className="font-medium">Green (Agriculture)</p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <Shield className="h-5 w-5 text-primary" />
                  <h2 className="text-xl font-semibold">Security</h2>
                </div>
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-muted/50">
                    <p className="font-medium">Two-Factor Authentication</p>
                    <p className="text-sm text-muted-foreground mt-1">Not enabled</p>
                  </div>
                  <div className="p-4 rounded-xl bg-muted/50">
                    <p className="font-medium">Last Password Change</p>
                    <p className="text-sm text-muted-foreground mt-1">30 days ago</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <Database className="h-5 w-5 text-primary" />
                  <h2 className="text-xl font-semibold">Data & Privacy</h2>
                </div>
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-muted/50">
                    <p className="font-medium">Data Backup</p>
                    <p className="text-sm text-muted-foreground mt-1">Last backup: 2 hours ago</p>
                  </div>
                  <div className="p-4 rounded-xl bg-muted/50">
                    <p className="font-medium">Storage Used</p>
                    <p className="text-sm text-muted-foreground mt-1">245 MB of 5 GB</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}