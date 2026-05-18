import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { ActivityItem } from "@/types/dashboard"

const toneMap = {
  success: "success",
  warning: "warning",
  info: "info",
} as const

export function ActivityFeed({ items }: { items: ActivityItem[] }) {
  return (
    <Card className="p-5">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-white">Operational activity</h3>
          <p className="text-sm text-zinc-400">Live operational feed across dining, kitchen, and online orders.</p>
        </div>
      </div>

      <div className="space-y-3">
        {items.map((item) => (
          <div key={item.id} className="rounded-2xl border border-white/8 bg-white/5 p-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="font-medium text-white">{item.title}</p>
                <p className="mt-1 text-sm text-zinc-400">{item.description}</p>
              </div>
              <Badge tone={toneMap[item.status]}>{item.time}</Badge>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}
