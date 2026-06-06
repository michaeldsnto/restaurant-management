import {
    useParams,
} from "react-router-dom";

import {
    useOrder,
} from "../hooks/use-order";

import OrderDetails
    from "../components/order-details";

export default function OrderDetailsPage() {

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
                Order Details
            </h1>

            <OrderDetails
                order={
                    data.data
                }
            />

        </div>

    );

}