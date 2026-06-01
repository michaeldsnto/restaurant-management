import OrderCard
    from "./order-card";

import type {
    KitchenOrder,
} from "../types/kitchen-order";

interface Props {

    title: string;

    orders:
    KitchenOrder[];

}

export default function KitchenColumn({
    title,
    orders,
}: Props) {

    return (

        <div
            className="
      min-h-[600px]
      rounded-3xl
      border
      border-zinc-800
      bg-zinc-950
      p-4
    "
        >

            <div
                className="
        mb-4
        flex
        items-center
        justify-between
      "
            >

                <h2
                    className="
          font-semibold
        "
                >
                    {title}
                </h2>

                <span
                    className="
          rounded-full
          bg-zinc-800
          px-3
          py-1
          text-xs
        "
                >
                    {orders.length}
                </span>

            </div>

            <div
                className="
        space-y-4
      "
            >

                {orders.map(
                    (order) => (

                        <OrderCard
                            key={order.id}
                            order={order}
                        />

                    )
                )}

            </div>

        </div>

    );

}