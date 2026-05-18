import { ActivityFeed } from "@/features/dashboard/components/activity-feed"
import { MetricCardView } from "@/features/dashboard/components/metric-card"
import { KitchenBoard } from "@/features/kitchen/components/kitchen-board"
import { Card } from "@/components/ui/card"
import type { ActivityItem, KitchenTicket, MetricCard } from "@/types/dashboard"

const metrics: MetricCard[] = [
  { label: "Today revenue", value: "Rp12.480.000", change: "+18.4% vs yesterday", tone: "amber" },
  { label: "Orders served", value: "184", change: "Peak dine-in 19:00-21:00", tone: "emerald" },
  { label: "Kitchen SLA", value: "11m 24s", change: "-1m 06s from last week", tone: "sky" },
  { label: "Low stock alerts", value: "07", change: "2 ingredients critical", tone: "violet" },
]

const activities: ActivityItem[] = [
  {
    id: "1",
    title: "QR order sent to kitchen",
    description: "Order ORD-20260518-1021 from Table 3 moved into preparation queue.",
    time: "2 min ago",
    status: "info",
  },
  {
    id: "2",
    title: "Reservation confirmed",
    description: "VIP corner booking for 6 guests at 20:00 has been confirmed.",
    time: "9 min ago",
    status: "success",
  },
  {
    id: "3",
    title: "Low stock detected",
    description: "Smoked brisket is below minimum par level and requires restock.",
    time: "17 min ago",
    status: "warning",
  },
]

const kitchenTickets: KitchenTicket[] = [
  { id: "1", orderNumber: "ORD-8241", table: "Table 2", itemCount: 4, status: "preparing", elapsed: "08:12" },
  { id: "2", orderNumber: "ORD-8245", table: "Takeaway", itemCount: 2, status: "pending", elapsed: "01:48" },
  { id: "3", orderNumber: "ORD-8248", table: "Table 8", itemCount: 5, status: "ready", elapsed: "12:31" },
]

export function DashboardPage() {
  return (
    <div className="space-y-6">
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {metrics.map((metric) => (
          <MetricCardView key={metric.label} {...metric} />
        ))}
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <Card className="p-5">
          <div className="mb-6 flex items-end justify-between">
            <div>
              <h2 className="text-xl font-semibold text-white">Revenue pulse</h2>
              <p className="text-sm text-zinc-400">High-level sales rhythm for owners and managers.</p>
            </div>
            <p className="text-sm text-zinc-400">Updated every 30 seconds</p>
          </div>

          <div className="grid h-[280px] grid-cols-7 gap-3">
            {[42, 56, 49, 72, 64, 88, 74].map((height, index) => (
              <div key={height} className="flex flex-col justify-end gap-3">
                <div
                  className="rounded-t-[20px] bg-gradient-to-t from-amber-400 to-amber-200"
                  style={{ height: `${height * 2.4}px` }}
                />
                <span className="text-center text-xs text-zinc-500">
                  {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][index]}
                </span>
              </div>
            ))}
          </div>
        </Card>

        <ActivityFeed items={activities} />
      </section>

      <section className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold text-white">Kitchen command center</h2>
          <p className="text-sm text-zinc-400">Realtime card layout for kitchen display and floor coordination.</p>
        </div>
        <KitchenBoard tickets={kitchenTickets} />
      </section>
    </div>
  )
}
