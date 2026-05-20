import type { ButtonHTMLAttributes } from "react"

import { cn } from "@/lib/utils"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost"
}

const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "bg-amber-400 text-zinc-950 hover:bg-amber-300 shadow-[0_12px_30px_rgba(251,191,36,0.18)]",
  secondary:
    "bg-white/8 text-white ring-1 ring-white/10 hover:bg-white/12",
  ghost: "bg-transparent text-zinc-300 hover:bg-white/5",
}

export function Button({
  className,
  variant = "primary",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        "inline-flex items-center justify-center rounded-2xl px-4 py-2.5 text-sm font-semibold transition duration-200 disabled:pointer-events-none disabled:opacity-50",
        variants[variant],
        className,
      )}
      {...props}
    />
  )
}
