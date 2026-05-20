import { Search } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { formatCurrency } from "@/utils/format"

const menu = [
  { id: "1", name: "Smoked Beef Rice Bowl", category: "Signature Mains", price: 68000, prepTime: "12 min", badge: "Popular" },
  { id: "2", name: "Truffle Chicken Katsu", category: "Signature Mains", price: 72000, prepTime: "15 min" },
  { id: "3", name: "Yuzu Cold Brew", category: "Craft Beverages", price: 32000, prepTime: "4 min", badge: "New" },
  { id: "4", name: "Basque Cheesecake", category: "Desserts", price: 38000, prepTime: "6 min" },
]

const cart = [
  { name: "Smoked Beef Rice Bowl", qty: 2, note: "1 no egg", total: 136000 },
  { name: "Yuzu Cold Brew", qty: 1, note: "Less ice", total: 32000 },
]

export function PosPage() {
  return (
    <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
      <Card className="p-5">
        <div className="mb-5 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-white">Point of Sale</h1>
            <p className="text-sm text-zinc-400">Fast cashier workflow for dine-in, takeout, and QR orders.</p>
          </div>
          <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-zinc-950/60 px-4 py-3 text-sm text-zinc-400">
            <Search className="h-4 w-4" />
            <span>Search menu</span>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {menu.map((item) => (
            <Card key={item.id} className="border-white/6 bg-white/5 p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">{item.category}</p>
                  <h3 className="mt-2 text-lg font-semibold text-white">{item.name}</h3>
                  <p className="mt-1 text-sm text-zinc-400">Prep {item.prepTime}</p>
                </div>
                {item.badge ? <Badge tone="info">{item.badge}</Badge> : null}
              </div>
              <div className="mt-6 flex items-center justify-between">
                <p className="text-lg font-semibold text-amber-300">{formatCurrency(item.price)}</p>
                <Button>Add</Button>
              </div>
            </Card>
          ))}
        </div>
      </Card>

      <Card className="p-5">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-white">Current bill</h2>
            <p className="text-sm text-zinc-400">Table 4 - split bill ready</p>
          </div>
          <Badge tone="warning">Dine in</Badge>
        </div>

        <div className="space-y-3">
          {cart.map((item) => (
            <div key={item.name} className="rounded-2xl border border-white/8 bg-white/5 p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-medium text-white">
                    {item.qty}x {item.name}
                  </p>
                  <p className="mt-1 text-sm text-zinc-400">{item.note}</p>
                </div>
                <p className="font-semibold text-white">{formatCurrency(item.total)}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 space-y-3 rounded-3xl border border-white/10 bg-zinc-950/50 p-4">
          <div className="flex justify-between text-sm text-zinc-400">
            <span>Subtotal</span>
            <span>{formatCurrency(168000)}</span>
          </div>
          <div className="flex justify-between text-sm text-zinc-400">
            <span>Discount</span>
            <span>-{formatCurrency(10000)}</span>
          </div>
          <div className="flex justify-between text-sm text-zinc-400">
            <span>Tax</span>
            <span>{formatCurrency(17480)}</span>
          </div>
          <div className="flex justify-between border-t border-white/10 pt-3 text-lg font-semibold text-white">
            <span>Total</span>
            <span>{formatCurrency(175480)}</span>
          </div>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <Button variant="secondary">Hold bill</Button>
          <Button>Charge & print</Button>
        </div>
      </Card>
    </div>
  )
}
