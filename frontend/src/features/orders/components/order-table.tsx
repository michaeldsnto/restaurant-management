import type { Order } from "../types/order";

import OrderStatusBadge
    from "./order-status-badge";

interface Props {
    orders: Order[];
}

export default function OrderTable({
    orders,
}: Props) {

    return (

        <table className="w-full">

            <thead>

                <tr>

                    <th>ID</th>

                    <th>Customer</th>

                    <th>Status</th>

                    <th>Total</th>

                </tr>

            </thead>

            <tbody>

                {orders.map((order) => (

                    <tr
                        key={order.id}
                    >

                        <td>
                            {order.order_number}
                        </td>

                        <td>
                            {order.customer_name}
                        </td>

                        <td>

                            <OrderStatusBadge
                                status={
                                    order.order_status
                                }
                            />

                        </td>

                        <td>
                            {order.grand_total}
                        </td>

                    </tr>

                ))}

            </tbody>

        </table>

    );

}