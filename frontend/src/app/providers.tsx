import { QueryClientProvider } from "@tanstack/react-query"
import { useEffect } from "react"
import type { PropsWithChildren } from "react"

import { queryClient } from "./query-client"
import { useUiStore } from "@/store/ui-store"

function ThemeSync() {
  const theme = useUiStore((state) => state.theme)

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark")
  }, [theme])

  return null
}

export function AppProviders({ children }: PropsWithChildren) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeSync />
      {children}
    </QueryClientProvider>
  )
}
