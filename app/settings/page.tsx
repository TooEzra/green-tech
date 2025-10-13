import { Card } from "@/components/ui/card"
import { User, Bell, Globe, Shield, Database, Palette } from "lucide-react"

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Settings</h1>
        <p className="text-muted-foreground mt-1">Manage your account and application preferences</p>
      </div>

      {/* Profile Settings */}
      <Card className="p-6">
        <div className="flex items-center gap-3 mb-6">
          <User className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-semibold">Profile Settings</h2>
        </div>
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium text-muted-foreground">Farm Name</label>
            <div className="mt-1 p-3 rounded-lg bg-muted/50">
              <p className="font-medium">Smallholder Farm</p>
            </div>
          </div>
          <div>
            <label className="text-sm font-medium text-muted-foreground">Location</label>
            <div className="mt-1 p-3 rounded-lg bg-muted/50">
              <p className="font-medium">Green House, Sub-Saharan Africa</p>
            </div>
          </div>
          <div>
            <label className="text-sm font-medium text-muted-foreground">Farm Size</label>
            <div className="mt-1 p-3 rounded-lg bg-muted/50">
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
            <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
              <div>
                <p className="font-medium">{setting.label}</p>
                <p className="text-sm text-muted-foreground">{setting.description}</p>
              </div>
              <div
                className={`h-6 w-11 rounded-full transition-colors ${
                  setting.enabled ? "bg-primary" : "bg-muted-foreground/30"
                }`}
              >
                <div
                  className={`h-5 w-5 rounded-full bg-white transition-transform ${
                    setting.enabled ? "translate-x-6" : "translate-x-0.5"
                  } mt-0.5`}
                />
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* System Settings */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <Globe className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-semibold">Language & Region</h2>
          </div>
          <div className="space-y-3">
            <div>
              <label className="text-sm font-medium text-muted-foreground">Language</label>
              <div className="mt-1 p-3 rounded-lg bg-muted/50">
                <p className="font-medium">English</p>
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-muted-foreground">Timezone</label>
              <div className="mt-1 p-3 rounded-lg bg-muted/50">
                <p className="font-medium">GMT+3 (East Africa Time)</p>
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <Palette className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-semibold">Appearance</h2>
          </div>
          <div className="space-y-3">
            <div>
              <label className="text-sm font-medium text-muted-foreground">Theme</label>
              <div className="mt-1 p-3 rounded-lg bg-muted/50">
                <p className="font-medium">Dark Mode</p>
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-muted-foreground">Color Scheme</label>
              <div className="mt-1 p-3 rounded-lg bg-muted/50">
                <p className="font-medium">Green (Agriculture)</p>
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-semibold">Security</h2>
          </div>
          <div className="space-y-3">
            <div className="p-3 rounded-lg bg-muted/50">
              <p className="font-medium">Two-Factor Authentication</p>
              <p className="text-sm text-muted-foreground mt-1">Not enabled</p>
            </div>
            <div className="p-3 rounded-lg bg-muted/50">
              <p className="font-medium">Last Password Change</p>
              <p className="text-sm text-muted-foreground mt-1">30 days ago</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <Database className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-semibold">Data & Privacy</h2>
          </div>
          <div className="space-y-3">
            <div className="p-3 rounded-lg bg-muted/50">
              <p className="font-medium">Data Backup</p>
              <p className="text-sm text-muted-foreground mt-1">Last backup: 2 hours ago</p>
            </div>
            <div className="p-3 rounded-lg bg-muted/50">
              <p className="font-medium">Storage Used</p>
              <p className="text-sm text-muted-foreground mt-1">245 MB of 5 GB</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
