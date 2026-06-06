import {
    useNavigate,
} from "react-router-dom";

import {
    useCreateOrder,
} from "../hooks/use-create-order";

export default function CreateOrderPage() {

    const navigate =
        useNavigate();

    const createOrder =
        useCreateOrder();

    const handleSubmit =
        async () => {

            await createOrder.mutateAsync({

                customer_name:
                    "Customer",

                order_type:
                    "dine_in",

                items: [],

            });

            navigate(
                "/orders"
            );

        };

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
                Create Order
            </h1>

            <button
                onClick={
                    handleSubmit
                }
                className="
        rounded-lg
        bg-primary
        px-4
        py-2
        text-white
      "
            >
                Save Order
            </button>

        </div>

    );

}