import KitchenTimer
    from "./kitchen-timer";

import KitchenPriorityBadge
    from "./kitchen-priority-badge";

import KitchenOrderItems
    from "./kitchen-order-items";

import type {
    KitchenOrder,
    KitchenOrderStatus,
} from "../types/kitchen-order";

import {
    useUpdateOrderStatus,
} from "../hooks/use-update-order-status";

interface Props {

    order: KitchenOrder;

}

export default function OrderCard({
    order,
}: Props) {

    const updateStatus =
        useUpdateOrderStatus();

    const nextStatus: Record<
        KitchenOrderStatus,
        KitchenOrderStatus
    > = {

        pending:
            "preparing",

        preparing:
            "ready",

        ready:
            "served",

        served:
            "served",

    };

    const actionLabel: Record<
        KitchenOrderStatus,
        string
    > = {

        pending:
            "Start",

        preparing:
            "Ready",

        ready:
            "Serve",

        served:
            "Completed",

    };

    return (

        <div
            className="
      rounded-2xl
      border
      border-zinc-800
      bg-zinc-900
      p-4
      shadow-sm
    "
        >

            <div
                className="
        flex
        items-center
        justify-between
      "
            >

                <div>

                    <h3
                        className="
            font-semibold
          "
                    >
                        {
                            order.order_number
                        }
                    </h3>

                    <p
                        className="
            text-xs
            text-zinc-500
          "
                    >
                        {
                            order.table_name
                        }
                    </p>

                </div>

                <KitchenPriorityBadge
                    priority={
                        order.priority
                    }
                />

            </div>

            <div
                className="
        mt-4
      "
            >

                <KitchenTimer
                    createdAt={
                        order.created_at
                    }
                />

            </div>

            <div
                className="
        mt-4
      "
            >

                <KitchenOrderItems
                    items={
                        order.items
                    }
                />

            </div>

            {order.status !==
                "served" && (

                    <button
                        onClick={() =>
                            updateStatus.mutate({

                                id: order.id,

                                status:
                                    nextStatus[
                                    order.status
                                    ],

                            })
                        }
                        className="
          mt-4
          w-full
          rounded-xl
          bg-violet-600
          py-2
          text-sm
          font-medium
          hover:bg-violet-700
        "
                    >

                        {
                            actionLabel[
                            order.status
                            ]
                        }

                    </button>

                )}

        </div>

    );

}