import { TrendingUp } from "lucide-react"

import { Card } from "@/components/ui/card"
import type { MetricCard } from "@/types/dashboard"

const accents = {
  emerald: "from-emerald-400/20 to-emerald-500/5 text-emerald-200",
  amber: "from-amber-300/20 to-amber-500/5 text-amber-100",
  sky: "from-sky-400/20 to-sky-500/5 text-sky-100",
  violet: "from-violet-400/20 to-violet-500/5 text-violet-100",
}

export function MetricCardView({ label, value, change, tone }: MetricCard) {
  return (
    <Card className={`overflow-hidden bg-gradient-to-br ${accents[tone]} p-5`}>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-zinc-300">{label}</p>
          <p className="mt-3 text-3xl font-semibold tracking-tight text-white">{value}</p>
        </div>
        <div className="rounded-2xl bg-white/10 p-3">
          <TrendingUp className="h-5 w-5" />
        </div>
      </div>
      <p className="mt-6 text-sm text-zinc-200">{change}</p>
    </Card>
  )
}
