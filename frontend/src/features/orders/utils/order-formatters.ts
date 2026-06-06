import type {
    OrderStatus,
    PaymentStatus,
} from "../types/order-status";

export function formatCurrency(
    amount: number
) {

    return new Intl.NumberFormat(
        "id-ID",
        {
            style: "currency",
            currency: "IDR",
            maximumFractionDigits: 0,
        }
    ).format(amount);

}

export function formatOrderStatus(
    status: OrderStatus
) {

    const labels = {

        pending:
            "Pending",

        confirmed:
            "Confirmed",

        preparing:
            "Preparing",

        ready:
            "Ready",

        served:
            "Served",

        completed:
            "Completed",

        cancelled:
            "Cancelled",

    };

    return labels[
        status
    ];

}

export function formatPaymentStatus(
    status: PaymentStatus
) {

    const labels = {

        unpaid:
            "Unpaid",

        partial:
            "Partial",

        paid:
            "Paid",

        refunded:
            "Refunded",

    };

    return labels[
        status
    ];

}