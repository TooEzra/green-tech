import { Card } from "@/components/ui/card"

export default function PaymentsLoading() {
  return (
    <div className="space-y-6">
      <div>
        <div className="h-9 w-48 bg-muted animate-pulse rounded" />
        <div className="h-5 w-96 bg-muted animate-pulse rounded mt-2" />
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        {[...Array(4)].map((_, i) => (
          <Card key={i} className="p-4">
            <div className="h-10 w-10 bg-muted animate-pulse rounded-lg" />
            <div className="h-4 w-20 bg-muted animate-pulse rounded mt-3" />
            <div className="h-6 w-16 bg-muted animate-pulse rounded mt-1" />
          </Card>
        ))}
      </div>

      <Card className="p-6">
        <div className="h-7 w-40 bg-muted animate-pulse rounded mb-4" />
        <div className="space-y-3">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="h-20 bg-muted animate-pulse rounded-lg" />
          ))}
        </div>
      </Card>
    </div>
  )
}
