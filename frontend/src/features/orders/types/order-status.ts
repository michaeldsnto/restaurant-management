export type OrderStatus =
    | "pending"
    | "confirmed"
    | "preparing"
    | "ready"
    | "served"
    | "completed"
    | "cancelled";

export type PaymentStatus =
    | "unpaid"
    | "partial"
    | "paid"
    | "refunded";

export type OrderType =
    | "dine_in"
    | "takeaway"
    | "delivery"
    | "qr_order";