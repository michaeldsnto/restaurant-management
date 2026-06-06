import {
    useState,
} from "react";

import OrderTable
    from "../components/order-table";

import OrderSearch
    from "../components/order-search";

import OrderFilter
    from "../components/order-filter";

import {
    useOrders,
} from "../hooks/use-orders";

export default function OrdersPage() {

    const [
        search,
        setSearch,
    ] =
        useState("");

    const [
        status,
        setStatus,
    ] =
        useState("");

    const {
        data,
        isLoading,
    } =
        useOrders({

            search,

            status,

        });

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

            <div>

                <h1
                    className="
          text-3xl
          font-bold
        "
                >
                    Orders
                </h1>

            </div>

            <div
                className="
        flex
        gap-4
      "
            >

                <OrderSearch
                    value={search}
                    onChange={
                        setSearch
                    }
                />

                <OrderFilter
                    value={status}
                    onChange={
                        setStatus
                    }
                />

            </div>

            <OrderTable
                orders={
                    data?.data ??
                    []
                }
            />

        </div>

    );

}