import {
    useEffect,
} from "react";

import {
    echo,
} from "../websocket/kitchen-channel";

import {
    KITCHEN_EVENTS,
} from "../websocket/kitchen-events";

import {
    useKitchenStore,
} from "../store/kitchen-store";

export function useKitchenRealtime() {

    const addOrder =
        useKitchenStore(
            (
                state
            ) => state.addOrder
        );

    const updateOrder =
        useKitchenStore(
            (
                state
            ) => state.updateOrder
        );

    useEffect(() => {

        const channel =
            echo.channel(
                "kitchen"
            );

        channel.listen(

            KITCHEN_EVENTS
                .ORDER_CREATED,

            (event: any) => {

                addOrder(
                    event.order
                );

            }

        );

        channel.listen(

            KITCHEN_EVENTS
                .ORDER_UPDATED,

            (event: any) => {

                updateOrder(
                    event.order
                );

            }

        );

        return () => {

            echo.leave(
                "kitchen"
            );

        };

    }, []);

}