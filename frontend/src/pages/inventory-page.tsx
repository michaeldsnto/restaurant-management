import { AlertTriangle } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"

const stocks = [
  { name: "Beef Brisket", stock: "4.5 kg", par: "10 kg", status: "critical" },
  { name: "Truffle Oil", stock: "1.2 L", par: "2 L", status: "warning" },
  { name: "Coffee Beans", stock: "14 kg", par: "8 kg", status: "healthy" },
]

export function InventoryPage() {
  return (
    <div className="space-y-6">
      <Card className="p-6">
        <div className="flex items-center gap-3">
          <div className="rounded-2xl bg-amber-300/15 p-3 text-amber-200">
            <AlertTriangle className="h-5 w-5" />
          </div>
          <div>
            <h1 className="text-2xl font-semibold text-white">Inventory & Ingredients</h1>
            <p className="text-sm text-zinc-400">Monitor stock, suppliers, purchasing, and low-stock exposure.</p>
          </div>
        </div>
      </Card>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {stocks.map((item) => (
          <Card key={item.name} className="p-5">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="font-medium text-white">{item.name}</p>
                <p className="mt-1 text-sm text-zinc-400">
                  Stock {item.stock} - Par {item.par}
                </p>
              </div>
              <Badge tone={item.status === "critical" ? "warning" : item.status === "warning" ? "info" : "success"}>
                {item.status}
              </Badge>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
