import {
    useParams,
} from "react-router-dom";

import {
    useOrder,
} from "../hooks/use-order";

export default function EditOrderPage() {

    const { id } =
        useParams();

    const {
        data,
        isLoading,
    } =
        useOrder(
            Number(id)
        );

    if (
        isLoading
    ) {

        return (
            <div>
                Loading...
            </div>
        );

    }

    const order =
        data.data;

    return (

        <div
            className="
      space-y-6
    "
        >

            <h1
                className="
        text-3xl
        font-bold
      "
            >
                Edit Order
            </h1>

            <div
                className="
        rounded-xl
        border
        p-6
      "
            >

                <p>
                    Order:
                    {" "}
                    {order.order_number}
                </p>

                <p>
                    Customer:
                    {" "}
                    {order.customer_name}
                </p>

            </div>

        </div>

    );

}