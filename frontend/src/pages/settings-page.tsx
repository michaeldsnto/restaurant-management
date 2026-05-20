import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function SettingsPage() {
  return (
    <div className="grid gap-6 xl:grid-cols-2">
      <Card className="p-6">
        <h1 className="text-2xl font-semibold text-white">Restaurant settings</h1>
        <p className="mt-2 text-sm text-zinc-400">Branch identity, taxes, service charge, receipt, and operating hours.</p>
        <div className="mt-6 space-y-4">
          {["Restaurant profile", "Branch preferences", "Tax configuration", "Receipt template"].map((item) => (
            <div key={item} className="rounded-2xl border border-white/8 bg-white/5 px-4 py-4 text-white">
              {item}
            </div>
          ))}
        </div>
      </Card>
      <Card className="p-6">
        <h2 className="text-xl font-semibold text-white">Access & operational policies</h2>
        <p className="mt-2 text-sm text-zinc-400">Roles, permissions, business rules, and realtime configuration.</p>
        <div className="mt-8 flex gap-3">
          <Button variant="secondary">Manage roles</Button>
          <Button>Save changes</Button>
        </div>
      </Card>
    </div>
  )
}
