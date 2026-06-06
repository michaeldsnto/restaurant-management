import type { Order } from "../types/order";

import OrderStatusBadge
    from "./order-status-badge";

import PaymentStatusBadge
    from "./payment-status";

interface Props {
    order: Order;
}

export default function OrderCard({
    order,
}: Props) {

    return (

        <div
            className="
      rounded-xl
      border
      p-5
      bg-background
    "
        >

            <div className="flex justify-between">

                <div>

                    <h3 className="font-semibold">
                        {order.order_number}
                    </h3>

                    <p className="text-sm text-muted-foreground">
                        {order.customer_name}
                    </p>

                </div>

                <OrderStatusBadge
                    status={
                        order.order_status
                    }
                />

            </div>

            <div className="mt-4">

                <PaymentStatusBadge
                    status={
                        order.payment_status
                    }
                />

            </div>

        </div>

    );
}