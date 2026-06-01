import KitchenColumn
    from "./kitchen-column";

import type {
    KitchenOrder,
} from "../types/kitchen-order";

interface Props {

    orders:
    KitchenOrder[];

}

export default function KitchenBoard({
    orders,
}: Props) {

    return (

        <div
            className="
      grid
      gap-6
      xl:grid-cols-4
    "
        >

            <KitchenColumn
                title="Pending"
                orders={
                    orders.filter(
                        (
                            order
                        ) =>
                            order.status ===
                            "pending"
                    )
                }
            />

            <KitchenColumn
                title="Preparing"
                orders={
                    orders.filter(
                        (
                            order
                        ) =>
                            order.status ===
                            "preparing"
                    )
                }
            />

            <KitchenColumn
                title="Ready"
                orders={
                    orders.filter(
                        (
                            order
                        ) =>
                            order.status ===
                            "ready"
                    )
                }
            />

            <KitchenColumn
                title="Served"
                orders={
                    orders.filter(
                        (
                            order
                        ) =>
                            order.status ===
                            "served"
                    )
                }
            />

        </div>

    );

}