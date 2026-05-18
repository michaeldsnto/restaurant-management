export type MetricCard = {
  label: string
  value: string
  change: string
  tone: "emerald" | "amber" | "sky" | "violet"
}

export type ActivityItem = {
  id: string
  title: string
  description: string
  time: string
  status: "success" | "warning" | "info"
}

export type KitchenTicket = {
  id: string
  orderNumber: string
  table: string
  itemCount: number
  status: "pending" | "preparing" | "ready"
  elapsed: string
}
