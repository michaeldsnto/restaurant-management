import type {
    KitchenOrderStatus,
} from "../types/kitchen-order";

export function formatOrderNumber(
    orderNumber: string
): string {

    return `#${orderNumber}`;

}

export function formatPreparationTime(
    seconds: number
): string {

    const minutes =
        Math.floor(
            seconds / 60
        );

    const remainingSeconds =
        seconds % 60;

    if (minutes > 0) {

        return `${minutes}m ${remainingSeconds}s`;

    }

    return `${remainingSeconds}s`;

}

export function formatOrderStatus(
    status: KitchenOrderStatus
): string {

    const statusMap: Record<
        KitchenOrderStatus,
        string
    > = {

        pending:
            "Pending",

        preparing:
            "Preparing",

        ready:
            "Ready",

        served:
            "Served",

    };

    return statusMap[status];

}

export function getStatusColor(
    status: KitchenOrderStatus
): string {

    const colorMap: Record<
        KitchenOrderStatus,
        string
    > = {

        pending:
            "bg-yellow-900/30 text-yellow-400",

        preparing:
            "bg-blue-900/30 text-blue-400",

        ready:
            "bg-green-900/30 text-green-400",

        served:
            "bg-zinc-500 text-red-400",

    };

    return colorMap[status];

}

export function getPriorityColor(
    priority: string
): string {

    const colorMap: Record<
        string,
        string
    > = {

        normal:
            "bg-gray-900/30 text-gray-400",

        high:
            "bg-orange-900/30 text-orange-400",

        urgent:
            "bg-red-900/30 text-red-400",

    };

    return colorMap[priority] ||
        colorMap.normal;

}
