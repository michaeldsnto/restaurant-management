import { Card } from "@/components/ui/card"

export function AnalyticsPage() {
  return (
    <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
      <Card className="p-6">
        <h1 className="text-2xl font-semibold text-white">Sales Analytics</h1>
        <p className="mt-2 text-sm text-zinc-400">
          Revenue trend, channel mix, average order value, and top-selling menu performance.
        </p>
        <div className="mt-6 grid h-[320px] grid-cols-12 items-end gap-2">
          {[22, 34, 30, 44, 52, 48, 63, 57, 70, 66, 74, 81].map((value) => (
            <div key={value} className="rounded-t-2xl bg-gradient-to-t from-sky-500 to-cyan-300" style={{ height: `${value * 3}px` }} />
          ))}
        </div>
      </Card>

      <Card className="p-6">
        <h2 className="text-xl font-semibold text-white">Channel contribution</h2>
        <div className="mt-6 space-y-4">
          {[
            ["POS", "48%"],
            ["Waiter", "22%"],
            ["QR Table", "17%"],
            ["Online Delivery", "13%"],
          ].map(([label, value]) => (
            <div key={label}>
              <div className="mb-2 flex justify-between text-sm text-zinc-300">
                <span>{label}</span>
                <span>{value}</span>
              </div>
              <div className="h-3 rounded-full bg-white/8">
                <div
                  className="h-3 rounded-full bg-gradient-to-r from-amber-300 to-orange-400"
                  style={{ width: value }}
                />
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
