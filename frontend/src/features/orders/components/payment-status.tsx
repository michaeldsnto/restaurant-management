import Badge from "@/components/ui/badge";

import type {
    PaymentStatus,
} from "../types/order-status";

interface Props {
    status: PaymentStatus;
}

export default function PaymentStatusBadge({
    status,
}: Props) {
    return (
        <Badge>
            {status}
        </Badge>
    );
}