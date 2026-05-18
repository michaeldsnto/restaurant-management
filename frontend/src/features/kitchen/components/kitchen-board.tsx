import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import type { KitchenTicket } from "@/types/dashboard"

const toneByStatus = {
  pending: "warning",
  preparing: "info",
  ready: "success",
} as const

export function KitchenBoard({ tickets }: { tickets: KitchenTicket[] }) {
  return (
    <div className="grid gap-4 xl:grid-cols-3">
      {tickets.map((ticket) => (
        <Card key={ticket.id} className="p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-zinc-400">{ticket.orderNumber}</p>
              <h3 className="mt-1 text-xl font-semibold text-white">{ticket.table}</h3>
            </div>
            <Badge tone={toneByStatus[ticket.status]}>{ticket.status}</Badge>
          </div>
          <div className="mt-6 flex items-end justify-between">
            <div>
              <p className="text-sm text-zinc-400">Items</p>
              <p className="text-2xl font-semibold text-white">{ticket.itemCount}</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-zinc-400">Elapsed</p>
              <p className="text-lg font-medium text-white">{ticket.elapsed}</p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}
