import type { Order } from "../types/order";

import OrderItems
    from "./order-items";

import OrderSummary
    from "./order-summary";

interface Props {
    order: Order;
}

export default function OrderDetails({
    order,
}: Props) {

    return (

        <div className="space-y-6">

            <OrderItems
                items={order.items}
            />

            <OrderSummary
                order={order}
            />

        </div>

    );

}