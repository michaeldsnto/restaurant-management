import type {
    PurchaseOrder,
} from "../types/purchase-order";

interface Props {

    orders:
    PurchaseOrder[];

}

export default function PurchaseOrderTable({
    orders,
}: Props) {

    return (

        <table className="w-full">

            <thead>

                <tr>

                    <th>PO Number</th>

                    <th>Supplier</th>

                    <th>Status</th>

                    <th>Total</th>

                </tr>

            </thead>

            <tbody>

                {orders.map(
                    (order) => (

                        <tr
                            key={order.id}
                        >

                            <td>
                                {
                                    order.po_number
                                }
                            </td>

                            <td>
                                {
                                    order.supplier_name
                                }
                            </td>

                            <td>
                                {order.status}
                            </td>

                            <td>
                                $
                                {
                                    order.total_amount
                                }
                            </td>

                        </tr>

                    )
                )}

            </tbody>

        </table>

    );

}