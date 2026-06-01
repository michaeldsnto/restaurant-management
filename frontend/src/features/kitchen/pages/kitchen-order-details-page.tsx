import {
    useParams,
} from "react-router-dom";

import {
    useKitchenOrder,
} from "../hooks/use-kitchen-order";

export default function KitchenOrderDetailsPage() {

    const { id } =
        useParams();

    const {
        data,
    } =
        useKitchenOrder(
            Number(id)
        );

    const order =
        data?.data;

    if (!order) {

        return (
            <div>
                Order not found
            </div>
        );

    }

    return (

        <div
            className="
      max-w-4xl
      space-y-6
    "
        >

            <h1
                className="
        text-3xl
        font-bold
      "
            >
                {
                    order.order_number
                }
            </h1>

            <div
                className="
        rounded-3xl
        border
        border-zinc-800
        p-6
      "
            >

                {order.items.map(
                    (item: any) => (

                        <div
                            key={item.id}
                        >

                            {
                                item.menu_name
                            }
                            {" x"}
                            {
                                item.quantity
                            }

                        </div>

                    )
                )}

            </div>

        </div>

    );

}