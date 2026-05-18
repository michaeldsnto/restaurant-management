import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.2),transparent_25%),linear-gradient(180deg,#09090b_0%,#111827_100%)] p-4">
      <Card className="w-full max-w-md p-6">
        <p className="text-sm uppercase tracking-[0.22em] text-amber-300">Restaurant Management System</p>
        <h1 className="mt-4 text-3xl font-semibold text-white">Sign in to operations hub</h1>
        <p className="mt-2 text-sm text-zinc-400">Production-ready auth flow will consume Laravel Sanctum endpoints.</p>
        <div className="mt-6 space-y-3">
          <input className="h-12 w-full rounded-2xl border border-white/10 bg-white/5 px-4 text-white outline-none placeholder:text-zinc-500" placeholder="Email" />
          <input className="h-12 w-full rounded-2xl border border-white/10 bg-white/5 px-4 text-white outline-none placeholder:text-zinc-500" placeholder="Password" type="password" />
          <Button className="h-12 w-full">Sign in</Button>
        </div>
      </Card>
    </div>
  )
}
