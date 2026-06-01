import type {
    KitchenOrder,
    KitchenOrderStatus,
} from "../types/kitchen-order";

export function getOrdersByStatus(
    orders: KitchenOrder[],
    status: KitchenOrderStatus
): KitchenOrder[] {

    return orders.filter(
        (order) =>
            order.status === status
    );

}

export function sortOrdersByPriority(
    orders: KitchenOrder[]
): KitchenOrder[] {

    const priorityOrder: Record<
        string,
        number
    > = {

        urgent: 1,
        high: 2,
        normal: 3,

    };

    return [...orders].sort(
        (a, b) =>
            (priorityOrder[
                a.priority
            ] ?? 999) -
            (priorityOrder[
                b.priority
            ] ?? 999)
    );

}

export function filterOrdersBySearch(
    orders: KitchenOrder[],
    search: string
): KitchenOrder[] {

    if (!search) {

        return orders;

    }

    const lowerSearch =
        search.toLowerCase();

    return orders.filter(
        (order) =>
            order.order_number
                .toLowerCase()
                .includes(
                    lowerSearch
                ) ||
            (order.customer_name
                ?.toLowerCase()
                .includes(
                    lowerSearch
                ) ?? false) ||
            String(
                order.table_name
            ).includes(
                lowerSearch
            )
    );

}

export function calculateTotalPrepTime(
    createdAt: string,
    completedAt?: string
): number {

    const start = new Date(
        createdAt
    );

    const end = completedAt
        ? new Date(completedAt)
        : new Date();

    return Math.floor(
        (end.getTime() -
            start.getTime()) /
        1000
    );

}

export function countOrdersByStatus(
    orders: KitchenOrder[],
    status: KitchenOrderStatus
): number {

    return orders.filter(
        (order) =>
            order.status === status
    ).length;

}
