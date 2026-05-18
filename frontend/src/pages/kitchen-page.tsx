import { Card } from "@/components/ui/card"
import { KitchenBoard } from "@/features/kitchen/components/kitchen-board"
import type { KitchenTicket } from "@/types/dashboard"

const tickets: KitchenTicket[] = [
  { id: "1", orderNumber: "ORD-8241", table: "Table 2", itemCount: 4, status: "preparing", elapsed: "08:12" },
  { id: "2", orderNumber: "ORD-8245", table: "Takeaway", itemCount: 2, status: "pending", elapsed: "01:48" },
  { id: "3", orderNumber: "ORD-8248", table: "Table 8", itemCount: 5, status: "ready", elapsed: "12:31" },
]

export function KitchenPage() {
  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h1 className="text-2xl font-semibold text-white">Kitchen Display System</h1>
        <p className="mt-2 max-w-3xl text-sm text-zinc-400">
          Queue-centric view with preparation state, elapsed time, and clear separation between pending, in-progress,
          and ready-to-serve orders.
        </p>
      </Card>

      <KitchenBoard tickets={tickets} />
    </div>
  )
}
