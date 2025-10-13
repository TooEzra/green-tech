import { Card } from "@/components/ui/card"

export default function SettingsLoading() {
  return (
    <div className="space-y-6">
      <div>
        <div className="h-9 w-48 bg-muted animate-pulse rounded" />
        <div className="h-5 w-96 bg-muted animate-pulse rounded mt-2" />
      </div>

      <Card className="p-6">
        <div className="h-7 w-40 bg-muted animate-pulse rounded mb-6" />
        <div className="space-y-4">
          {[...Array(3)].map((_, i) => (
            <div key={i}>
              <div className="h-4 w-24 bg-muted animate-pulse rounded" />
              <div className="h-12 bg-muted animate-pulse rounded-lg mt-1" />
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-6">
        <div className="h-7 w-40 bg-muted animate-pulse rounded mb-6" />
        <div className="space-y-4">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-20 bg-muted animate-pulse rounded-lg" />
          ))}
        </div>
      </Card>
    </div>
  )
}
