import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"

const reservations = [
  { name: "Rizki Pratama", guests: 4, time: "18:30", status: "confirmed" },
  { name: "Maya Halim", guests: 2, time: "19:00", status: "pending" },
  { name: "Budi Kalla", guests: 8, time: "20:00", status: "confirmed" },
]

export function ReservationsPage() {
  return (
    <div className="grid gap-6 xl:grid-cols-[0.8fr_1.2fr]">
      <Card className="p-6">
        <h1 className="text-2xl font-semibold text-white">Reservation Calendar</h1>
        <p className="mt-2 text-sm text-zinc-400">Shift-aware booking management with notes and table availability.</p>
        <div className="mt-6 grid grid-cols-7 gap-2 text-center text-sm">
          {Array.from({ length: 35 }).map((_, index) => (
            <div
              key={index}
              className={`rounded-2xl border p-3 ${
                [8, 14, 20].includes(index)
                  ? "border-amber-300/30 bg-amber-300/12 text-amber-100"
                  : "border-white/8 bg-white/5 text-zinc-300"
              }`}
            >
              {index + 1}
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-6">
        <h2 className="text-xl font-semibold text-white">Tonight bookings</h2>
        <div className="mt-5 space-y-3">
          {reservations.map((reservation) => (
            <div key={reservation.name} className="rounded-2xl border border-white/8 bg-white/5 p-4">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="font-medium text-white">{reservation.name}</p>
                  <p className="mt-1 text-sm text-zinc-400">
                    {reservation.guests} guests - {reservation.time}
                  </p>
                </div>
                <Badge tone={reservation.status === "confirmed" ? "success" : "warning"}>
                  {reservation.status}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
