import type { HTMLAttributes } from "react"

import { cn } from "@/lib/utils"

type BadgeTone = "success" | "warning" | "info" | "neutral"

const toneClasses: Record<BadgeTone, string> = {
  success: "bg-emerald-400/15 text-emerald-200 ring-emerald-300/20",
  warning: "bg-amber-400/15 text-amber-200 ring-amber-300/20",
  info: "bg-sky-400/15 text-sky-200 ring-sky-300/20",
  neutral: "bg-white/10 text-zinc-200 ring-white/10",
}

export function Badge({
  className,
  children,
  tone = "neutral",
  ...props
}: HTMLAttributes<HTMLSpanElement> & { tone?: BadgeTone }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ring-1",
        toneClasses[tone],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  )
}
