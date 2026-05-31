import PurchaseOrderTable
    from "../components/purchase-order-table";

import {
    usePurchaseOrders,
} from "../hooks/use-purchase-orders";

export default function PurchaseOrdersPage() {

    const {
        data,
    } = usePurchaseOrders();

    return (

        <div className="space-y-6">

            <h1 className="
        text-3xl
        font-bold
      ">
                Purchase Orders
            </h1>

            <PurchaseOrderTable
                orders={
                    data?.data ?? []
                }
            />

        </div>

    );

}