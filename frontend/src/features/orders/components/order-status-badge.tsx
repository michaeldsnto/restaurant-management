import Badge from "@/components/ui/badge";

import type { OrderStatus } from "../types/order-status";
import type React from "react";

type BadgeVariant = React.ComponentProps<typeof Badge>["variant"];

interface Props {
    status: OrderStatus;
}

export default function OrderStatusBadge({
    status,
}: Props) {
    const variants: Record<OrderStatus, BadgeVariant> = {
        pending: "default",
        confirmed: "default",
        preparing: "default",
        ready: "default",
        served: "default",
        completed: "default",
        cancelled: "destructive" as BadgeVariant,
    } as const;

    return (
        <Badge
            variant={
                variants[status]
            }
        >
            {status}
        </Badge>
    );
}