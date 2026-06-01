import { create }
    from "zustand";

import type {
    KitchenOrder,
} from "../types/kitchen-order";

interface KitchenStore {

    orders:
    KitchenOrder[];

    setOrders: (
        orders:
            KitchenOrder[]
    ) => void;

    addOrder: (
        order:
            KitchenOrder
    ) => void;

    updateOrder: (
        order:
            KitchenOrder
    ) => void;

}

export const useKitchenStore =
    create<KitchenStore>(
        (set) => ({

            orders: [],

            setOrders:
                (orders) =>
                    set({
                        orders,
                    }),

            addOrder:
                (order) =>
                    set(
                        (
                            state
                        ) => ({

                            orders: [
                                order,
                                ...state.orders,
                            ],

                        })
                    ),

            updateOrder:
                (updated) =>
                    set(
                        (
                            state
                        ) => ({

                            orders:
                                state.orders.map(
                                    (
                                        order
                                    ) =>

                                        order.id ===
                                            updated.id
                                            ? updated
                                            : order
                                ),

                        })
                    ),

        })
    );